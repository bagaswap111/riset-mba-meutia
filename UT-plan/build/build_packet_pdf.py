"""
Build a single printable PDF from the UT-plan markdown packet.

README.md becomes the cover page and table of contents. Checkbox lists are
rendered as real ballot-box glyphs (U+2610 / U+2611) that are large enough to
tick on paper, rather than literal "[ ]" text.
"""
import html
import pathlib
import re
import sys

ROOT = pathlib.Path(sys.argv[2]).resolve() / "UT-plan" if len(sys.argv) > 2 else (
    pathlib.Path.cwd() / "UT-plan"
)

DOCS = [
    ("01-study-protocol.md", "Protokol Riset Usability"),
    ("02-moderator-and-participant-materials.md", "Materi Moderator dan Peserta"),
    ("03-evaluator-and-analysis-kit.md", "Form Evaluator dan Kit Analisis"),
    ("04-participant-information-and-consent.md", "Informasi Peserta dan Persetujuan"),
    ("05-recruitment-and-screening-kit.md", "Kit Rekrutmen dan Penyaringan"),
    ("06-prototype-build-manifest.md", "Manifest Build Prototipe"),
]

INLINE_CODE = re.compile(r"`([^`]+)`")
BOLD = re.compile(r"\*\*([^*]+)\*\*")
ITALIC = re.compile(r"(?<![*\w])\*([^*\n]+)\*(?!\*)")
LINK = re.compile(r"\[([^\]]+)\]\([^)]*\)")


def inline(text: str) -> str:
    """Escape, then apply inline marks while leaving code spans inert."""
    placeholders = []

    def stash(content: str) -> str:
        placeholders.append(content)
        return f"\x00{len(placeholders) - 1}\x00"

    text = INLINE_CODE.sub(lambda m: stash(m.group(1)), text)
    text = html.escape(text)
    text = BOLD.sub(r"<strong>\1</strong>", text)
    text = ITALIC.sub(r"<em>\1</em>", text)
    text = LINK.sub(r"\1", text)

    def restore(m):
        return f"<code>{placeholders[int(m.group(1))]}</code>"

    return re.sub(r"\x00(\d+)\x00", restore, text)


def split_row(line: str) -> list[str]:
    return [c.strip() for c in line.strip().strip("|").split("|")]


def is_divider(line: str) -> bool:
    return bool(re.fullmatch(r"\|[\s:\-|]+\|", line.strip()))


def convert(md: str) -> str:
    lines = md.replace("\r\n", "\n").split("\n")
    out = []
    i = 0
    n = len(lines)

    while i < n:
        line = lines[i]

        # fenced code
        if line.startswith("```"):
            i += 1
            buf = []
            while i < n and not lines[i].startswith("```"):
                buf.append(lines[i])
                i += 1
            i += 1
            out.append("<pre><code>" + html.escape("\n".join(buf)) + "</code></pre>")
            continue

        # table
        if line.strip().startswith("|") and i + 1 < n and is_divider(lines[i + 1]):
            header = split_row(line)
            i += 2
            rows = []
            while i < n and lines[i].strip().startswith("|"):
                rows.append(split_row(lines[i]))
                i += 1
            head = "".join(f"<th>{inline(c)}</th>" for c in header)
            body = "".join(
                "<tr>" + "".join(f"<td>{inline(c)}</td>" for c in r) + "</tr>"
                for r in rows
            )
            out.append(f"<table><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table>")
            continue

        # headings
        m = re.match(r"^(#{1,6})\s+(.*)$", line)
        if m:
            level = len(m.group(1))
            out.append(f"<h{level}>{inline(m.group(2))}</h{level}>")
            i += 1
            continue

        # horizontal rule
        if re.fullmatch(r"-{3,}|\*{3,}|_{3,}", line.strip()):
            out.append("<hr>")
            i += 1
            continue

        # blockquote
        if line.strip().startswith(">"):
            buf = []
            while i < n and lines[i].strip().startswith(">"):
                buf.append(lines[i].strip().lstrip(">").strip())
                i += 1
            out.append(f"<blockquote>{inline(' '.join(buf))}</blockquote>")
            continue

        # task list / bullet list
        m = re.match(r"^(\s*)([-*])\s+(.*)$", line)
        if m:
            indent, _, rest = m.groups()
            tm = re.match(r"\[([ xX])\]\s*(.*)$", rest)
            checked = None
            if tm:
                checked = tm.group(1).lower() == "x"
                rest = tm.group(2)
            if checked is None:
                out.append("<ul><li>" + inline(rest) + "</li></ul>")
            else:
                glyph = "&#9745;" if checked else "&#9744;"
                pad = ' style="padding-left:6.5mm"' if indent else ""
                out.append(
                    f'<ul><li class="task"{pad}>'
                    f'<span class="box">{glyph}</span> {inline(rest)}</li></ul>'
                )
            i += 1
            continue

        # ordered list
        m = re.match(r"^(\s*)\d+[.)]\s+(.*)$", line)
        if m:
            out.append(f"<ol><li>{inline(m.group(2))}</li></ol>")
            i += 1
            continue

        # blank
        if not line.strip():
            i += 1
            continue

        # paragraph
        buf = [line]
        i += 1
        while i < n and lines[i].strip() and not re.match(
            r"^\s*([-*]\s|\d+[.)]\s|>|#{1,6}\s|\||```|-{3,}$)", lines[i]
        ):
            buf.append(lines[i])
            i += 1
        out.append(f"<p>{inline(' '.join(x.strip() for x in buf))}</p>")

    return merge_lists("\n".join(out))


def merge_lists(fragment: str) -> str:
    """Join runs of consecutive one-item <ul>/<ol> blocks into a single list."""
    out = []
    i = 0
    parts = fragment.split("\n")
    while i < len(parts):
        m = re.fullmatch(r"<(ul|ol)>(.*)</\1>", parts[i], flags=re.S)
        if not m:
            out.append(parts[i])
            i += 1
            continue
        tag, body = m.group(1), m.group(2)
        items = [body]
        i += 1
        while i < len(parts):
            m2 = re.fullmatch(rf"<{tag}>(.*)</{tag}>", parts[i], flags=re.S)
            if not m2:
                break
            items.append(m2.group(1))
            i += 1
        out.append(f"<{tag}>" + "".join(items) + f"</{tag}>")
    return "\n".join(out)


def slug(title: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-")


def build() -> str:
    parts = []

    # ---------- cover ----------
    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    status = ""
    m = re.search(r"Paket \*\*belum disetujui untuk sesi formal\*\*[^\n]*", readme)
    if m:
        status = html.escape(m.group(0).replace("**", ""))

    toc = "".join(
        f'<li><span class="num">{idx}</span>'
        f'<span class="tt">{html.escape(title)}</span>'
        f'<span class="fn">{fname}</span></li>'
        for idx, (fname, title) in enumerate(DOCS, 1)
    )

    parts.append(f"""
<div class="cover">
  <div class="eyebrow">Dokumen kerja &#183;BINUS 2026 &#183;belum disetujui</div>
  <h1 class="cover-title">Paket Riset<br>Usability Gen Z</h1>
  <div class="cover-sub">ProFix &#183; website layanan perawatan rumah</div>

  <div class="cover-status">
    <strong>STATUS.</strong> Dokumen ini belum disetujui untuk sesi formal.
    Minta tinjauan tim, mitra, dan unit etik/riset yang berlaku sebelum rekrutmen.
    Studi belum dilakukan: tidak ada skor, kutipan, atau temuan peserta.
  </div>

  <h2 class="cover-toc-h">Daftar Dokumen</h2>
  <ol class="toc">{toc}</ol>

  <div class="cover-foot">
    Urutan penggunaan: 05 rekrutmen &rarr; 04 persetujuan &rarr; 06 verifikasi stimulus
    &rarr; 02 pemandu sesi &rarr; 03 evaluasi dan analisis.
    Dokumen 05 dan 04 dipakai saat rekrutmen dan sebelum sesi. Dokumen 06 dipakai untuk
    memverifikasi stimulus, 02 untuk memandu sesi, dan 03 untuk evaluasi serta analisis.
  </div>
</div>
""")

    # ---------- documents ----------
    for fname, title in DOCS:
        md = (ROOT / fname).read_text(encoding="utf-8")
        body = convert(md)
        # the file's own H1 duplicates the cover title
        body = re.sub(r"^<h1>.*?</h1>", "", body, count=1, flags=re.S)
        parts.append(f'<section class="doc" id="{slug(fname)}"><h1>{html.escape(title)}</h1>{body}</section>')

    return PAGE.replace("{{CONTENT}}", "\n".join(parts))


PAGE = """<!doctype html>
<html lang="id"><head><meta charset="utf-8">
<title>Paket Riset Usability Gen Z - ProFix</title>
<style>
@page { size: A4; margin: 18mm 16mm 18mm 16mm; }
* { box-sizing: border-box; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body {
  font-family: "Segoe UI", "Inter", Arial, sans-serif;
  font-size: 10.5pt; line-height: 1.5; color: #1a1c1c; margin: 0;
}
/* ballot box needs a font that has U+2610 / U+2611 */
.box, td, li, p, th, h1, h2, h3, h4 {
  font-family: "Segoe UI", "Segoe UI Symbol", "Inter", Arial, sans-serif;
}
.box { font-size: 1.2em; line-height: 1; color: #000; }

.cover { page-break-after: always; padding-top: 8mm; }
.eyebrow {
  font-size: 8.5pt; letter-spacing: .14em; text-transform: uppercase;
  color: #6b7280; border-bottom: 1.5pt solid #0058bf; padding-bottom: 4mm;
}
.cover-title {
  font-size: 30pt; line-height: 1.12; margin: 10mm 0 3mm;
  color: #00000b; letter-spacing: -.01em; border: 0; padding: 0;
}
.cover-sub { font-size: 12pt; color: #0058bf; font-weight: 600; }
.cover-status {
  margin: 9mm 0; padding: 5mm 6mm; background: #fffbeb;
  border: .5pt solid #f59e0b; border-left: 3pt solid #f59e0b;
  font-size: 9.5pt; line-height: 1.55;
}
.cover-toc-h {
  font-size: 9pt; letter-spacing: .12em; text-transform: uppercase;
  color: #6b7280; margin: 0 0 3mm; border: 0; padding: 0;
}
ol.toc { list-style: none; margin: 0; padding: 0; counter-reset: none; }
ol.toc li {
  display: flex; align-items: baseline; gap: 3mm;
  padding: 2.6mm 0; border-bottom: .5pt dotted #c8c5cd;
}
ol.toc .num {
  min-width: 7mm; font-weight: 700; color: #0058bf; font-size: 10pt;
}
ol.toc .tt { flex: 1; font-size: 11pt; color: #00000b; }
ol.toc .fn { font-size: 8.5pt; color: #8a8a94; font-family: Consolas, monospace; }
.cover-foot {
  margin-top: 10mm; padding-top: 4mm; border-top: .5pt solid #c8c5cd;
  font-size: 8.5pt; color: #6b7280; line-height: 1.6;
}

.doc { page-break-before: always; }
h1 {
  font-size: 19pt; color: #00000b; margin: 0 0 6mm;
  padding-bottom: 3mm; border-bottom: 2pt solid #0058bf; letter-spacing: -.01em;
}
h2 {
  font-size: 13pt; color: #00000b; margin: 7mm 0 3mm;
  padding-left: 2.5mm; border-left: 3pt solid #0058bf;
}
h3 { font-size: 11pt; color: #0058bf; margin: 5mm 0 2mm; }
h4 { font-size: 10pt; color: #374151; margin: 4mm 0 2mm; }
p { margin: 0 0 2.6mm; }
ul, ol { margin: 0 0 2.8mm; padding-left: 5.5mm; }
li { margin-bottom: 1.1mm; }
li.task { list-style: none; position: relative; }
li.task .box { font-size: 1.15em; }
ul > li:not(.task) { list-style: disc; }
li.task .box { position: absolute; left: -6.5mm; top: .4mm; }
blockquote {
  margin: 0 0 3mm; padding: 3mm 4mm; background: #f4f7fd;
  border-left: 3pt solid #0058bf; font-size: 10pt; line-height: 1.6;
}
code {
  font-family: Consolas, "Courier New", monospace; font-size: 9pt;
  background: #f3f4f6; padding: .4mm 1.1mm; border-radius: 1.5pt;
}
pre {
  background: #f7f8fa; border: .5pt solid #d5d8dd; border-radius: 2pt;
  padding: 3mm; overflow: hidden; page-break-inside: avoid;
}
pre code { background: none; padding: 0; font-size: 8.5pt; }
hr { border: 0; border-top: .5pt solid #c8c5cd; margin: 5mm 0; }
table {
  width: 100%; border-collapse: collapse; margin: 0 0 4mm;
  font-size: 8.8pt; page-break-inside: avoid;
}
th {
  background: #00000b; color: #fff; text-align: left; font-weight: 600;
  padding: 2mm 2.2mm; border: .5pt solid #00000b; font-size: 8.5pt;
}
td {
  padding: 1.8mm 2.2mm; border: .5pt solid #c8c5cd; vertical-align: top;
}
tbody tr:nth-child(even) { background: #f9f9fb; }
td .box { font-size: 1.25em; }
</style></head>
<body>
{{CONTENT}}
</body></html>
"""


if __name__ == "__main__":
    out = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else pathlib.Path("packet.html")
    out.write_text(build(), encoding="utf-8")
    print(f"wrote {out}")
    missing = [f for f, _ in DOCS if not (ROOT / f).exists()]
    if missing:
        print("MISSING:", missing)
        sys.exit(1)
