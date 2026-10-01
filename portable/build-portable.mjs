/**
 * Produce a single self-contained .html per ProFix prototype.
 *
 * A Vite build cannot be opened straight from the filesystem. Four separate
 * things break under the file:// protocol, and all four must be fixed:
 *
 *   1. /assets/... absolute paths  -> resolve to the filesystem root
 *   2. <script type="module">       -> blocked by CORS (file:// has an opaque origin)
 *   3. a classic script in <head>   -> runs before <div id="root"> exists
 *   4. crossorigin on script/link   -> forces CORS mode, which also blocks the CSS
 *
 * After those fixes the remaining gap is the network: Google Fonts and 22
 * remote images. Those are swapped for data URIs produced by
 * fetch-offline-assets.py.
 *
 * Usage: node build-portable.mjs <dist-portable-dir> <output.html> <title>
 */
import { readFile, writeFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

const [, , distDir, outFile, pageTitle] = process.argv;

if (!distDir || !outFile || !pageTitle) {
  console.error('usage: node build-portable.mjs <distDir> <out.html> <title>');
  process.exit(1);
}

const manifestPath = join(process.cwd(), 'portable', '.cache', 'assets.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));

const problems = [];

// ---------------------------------------------------------------- fix tags
// Extract the original asset references, then replace the tags with
// placeholders. Doing this in one pass avoids order-dependent regexes.
let html = await readFile(join(distDir, 'index.html'), 'utf8');

const scriptRe = /<script\s+type="module"\s+crossorigin\s+src="([^"]+)"><\/script>/;
const cssRe = /<link\s+rel="stylesheet"\s+crossorigin\s+href="([^"]+)">/;

const scriptSrc = html.match(scriptRe)?.[1];
const cssHref = html.match(cssRe)?.[1];

if (!scriptSrc) problems.push('could not find the module script tag in index.html');
if (!cssHref) problems.push('could not find the stylesheet link in index.html');

const assetPath = (ref) => join(distDir, ref.replace(/^\.\//, ''));

// ------------------------------------------------------- swap remote assets
let js = scriptSrc ? await readFile(assetPath(scriptSrc), 'utf8') : '';
let css = cssHref ? await readFile(assetPath(cssHref), 'utf8') : '';

if (js.includes('</script')) {
  problems.push('bundle contains a literal </script>, cannot inline it');
}

let imagesInjected = 0;
for (const [url, dataUri] of Object.entries(manifest.images)) {
  if (js.includes(url)) {
    // replacer function: the data URI and the source URL may contain `$`
    js = js.replaceAll(url, () => dataUri);
    imagesInjected += 1;
  }
}

const unusedImages = Object.keys(manifest.images).filter((u) => js.includes(u));
if (unusedImages.length) {
  problems.push(`${unusedImages.length} image(s) in the manifest are not referenced by the bundle`);
}

// ------------------------------------------------- remove external requests
// `defer` is what makes a classic script safe in <head>: without it the bundle
// runs before <div id="root"> exists. `type="module"` is dropped because the
// bundle has no import/export and module scripts are CORS-blocked on file://.
html = html
  .replace(scriptRe, '<!--$SCRIPT-->')
  .replace(cssRe, '<!--$CSS-->')
  .replace(/\s*<link rel="preconnect"[^>]*>/g, '')
  .replace(/\s*<link href="https:\/\/fonts\.googleapis\.com[^>]*>\s*/g, '\n    ');

const fontStyle = `<style id="embedded-fonts">\n${manifest.fontFaces}\n</style>`;

// ------------------------------------------------------------ inline assets
// An inline <script> ignores `defer`, so placing it in <head> would run it
// before <div id="root"> exists and crash on getElementById. The bundle is
// moved to the end of <body> instead, which is the only way to keep the
// execution order correct once the script is inlined.
// A replacer *function* is mandatory here. With a string replacement, `$&`,
// $` and $' inside the bundle are expanded as match/prefix/suffix references,
// which silently duplicates megabytes of the document.
html = html.replace('<!--$SCRIPT-->', () => '');
html = html.replace('<!--$CSS-->', () => `<style>${css}</style>`);
html = html.replace('</head>', () => `  ${fontStyle}\n  </head>`);
html = html.replace('</body>', () => `  <script>${js}</script>\n  </body>`);

if (/<script[^>]*\ssrc="/.test(html) || /<link[^>]*\shref="\.\/assets\//.test(html)) {
  problems.push('an external asset reference survived inlining');
}
if (html.includes('$SCRIPT') || html.includes('$CSS')) {
  problems.push('an asset placeholder was never replaced');
}
if (html.indexOf('<script>') === -1) {
  problems.push('no inline script was produced');
} else if (html.indexOf('<script>') < html.indexOf('<div id="root">')) {
  problems.push('the inline script sits before #root and would run too early');
}
if (/https:\/\/(?:fonts\.googleapis|fonts\.gstatic|lh3\.googleusercontent|images\.unsplash)/.test(html)) {
  problems.push('a remote resource reference survived inlining');
}
if (/type="module"/.test(html)) {
  problems.push('a type="module" script survived inlining');
}

if (problems.length) {
  console.error('BUILD FAILED:');
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}

html = html.replace(/<title>.*?<\/title>/, () => `<title>${pageTitle}</title>`);

await writeFile(outFile, html, 'utf8');

const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(
  `${basename(outFile)}  ${kb} KB  images-inlined=${imagesInjected}  ` +
  `font-faces=${(manifest.fontFaces.match(/@font-face/g) || []).length}`
);
