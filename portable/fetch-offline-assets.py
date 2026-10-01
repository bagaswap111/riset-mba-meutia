"""
Download and encode the external assets a ProFix build needs so it can run
fully offline from a single .html file.

Images are re-encoded to WebP (no resizing: sources are already 512x512) and
fonts are fetched as woff2. Everything is written to a cache directory as data
URIs in a JSON manifest, so a rebuild does not need the network.

Fails loudly on any download error rather than emitting a broken portable file.
"""
from __future__ import annotations

import base64
import io
import json
import pathlib
import re
import sys
import urllib.error
import urllib.request

from PIL import Image

REPO = pathlib.Path(__file__).resolve().parents[1]
CACHE = REPO / "portable" / ".cache"
MANIFEST = CACHE / "assets.json"

MODERN_UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)

FONT_CSS = {
    "inter": (
        "https://fonts.googleapis.com/css2"
        "?family=Inter:wght@300;400;500;600;700;800&display=swap"
    ),
    "material_symbols": (
        "https://fonts.googleapis.com/css2"
        "?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    ),
}

# Subset names kept per family. Inter is split into unicode-range subsets by the
# Google CSS API; latin-1 covers Indonesian and latin-ext covers the rest of
# western European, so cyrillic/greek/vietnamese are dropped. Material Symbols
# is served as a single "fallback" face, so nothing is filtered for it.
KEEP_SUBSETS: dict[str, tuple[str, ...] | None] = {
    "inter": ("latin", "latin-ext"),
    "material_symbols": None,
}

failures: list[str] = []


def get(url: str, timeout: int = 60) -> bytes:
    req = urllib.request.Request(url, headers={"User-Agent": MODERN_UA})
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def cached(name: str, url: str) -> bytes:
    """Fetch through a per-URL cache file so rebuilds are offline-capable."""
    CACHE.mkdir(parents=True, exist_ok=True)
    key = re.sub(r"[^A-Za-z0-9]+", "_", url)[-110:]
    blob = CACHE / f"{name}__{key}"
    if blob.exists() and blob.stat().st_size > 0:
        return blob.read_bytes()
    try:
        data = get(url)
    except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, OSError) as exc:
        failures.append(f"{url}\n    -> {type(exc).__name__}: {exc}")
        return b""
    blob.write_bytes(data)
    return data


def to_webp_data_uri(raw: bytes) -> str:
    im = Image.open(io.BytesIO(raw))
    im.load()
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGBA" if "A" in im.mode else "RGB")
    buf = io.BytesIO()
    im.save(buf, "WEBP", quality=72, method=4)
    return "data:image/webp;base64," + base64.b64encode(buf.getvalue()).decode()


def collect_image_urls() -> list[str]:
    urls: set[str] = set()
    for app in ("profix---professional-home-services",
                "profix---digital-home-care-&-services"):
        for path in (REPO / app / "src").rglob("*"):
            if path.suffix not in (".ts", ".tsx"):
                continue
            text = path.read_text(encoding="utf-8", errors="ignore")
            for m in re.finditer(
                r"https://(?:lh3\.googleusercontent\.com|images\.unsplash\.com)/[^'\"\s)]+",
                text,
            ):
                urls.add(m.group(0))
    return sorted(urls)


def collect_fonts() -> dict[str, str]:
    """Return {css_family_key: [data-uri, ...]} for the subsets we keep."""
    out: dict[str, list[str]] = {}
    for key, css_url in FONT_CSS.items():
        css = cached(f"{key}css", css_url).decode("utf-8", "ignore")
        if not css:
            failures.append(f"font css empty: {css_url}")
            out[key] = []
            continue
        faces = re.findall(
            r"/\*\s*([a-z0-9-]+)\s*\*/\s*@font-face\s*\{(.*?)\}", css, re.S
        )
        keep: list[str] = []
        for subset, block in faces:
            allowed = KEEP_SUBSETS.get(key)
            if allowed is not None and subset not in allowed:
                continue
            url = re.search(r"url\((https://fonts\.gstatic\.com/[^)]+\.woff2)\)", block)
            if not url:
                continue
            data = cached(f"{key}_{subset}", url.group(1))
            if not data:
                continue
            keep.append(
                "data:font/woff2;base64," + base64.b64encode(data).decode()
            )
        out[key] = keep
    return out


def font_face_css(fonts: dict[str, list[str]]) -> str:
    """Rebuild @font-face rules with local data URIs, preserving unicode-range.

    The class rules (e.g. `.material-symbols-outlined { font-family: ... }`) are
    carried over too. Some apps rely on the Google stylesheet for `font-family`
    and only declare `font-variation-settings` locally, so dropping the link
    without replacing those rules leaves the icons rendering as ligature text.
    """
    blocks: list[str] = []
    family_names = {
        "inter": "Inter",
        "material_symbols": "Material Symbols Outlined",
    }
    for key, family in family_names.items():
        allowed = KEEP_SUBSETS.get(key)
        css_url = FONT_CSS[key]
        css = cached(f"{key}css", css_url).decode("utf-8", "ignore")

        # keep the non-@font-face class rules, and force the local family name
        for selector, body in re.findall(r"(\.[a-z-]+)\s*\{(.*?)\}", css, re.S):
            if "font-family" in body:
                blocks.append(f"{selector}{{{body.strip()}}}")

        faces = re.findall(
            r"/\*\s*([a-z0-9-]+)\s*\*/\s*@font-face\s*\{(.*?)\}", css, re.S
        )
        uris = fonts.get(key, [])
        idx = 0
        for subset, block in faces:
            if allowed is not None and subset not in allowed:
                continue
            if idx >= len(uris):
                break
            weight = re.search(r"font-weight:\s*([^;]+);", block)
            style = re.search(r"font-style:\s*([^;]+);", block)
            urange = re.search(r"unicode-range:\s*([^;]+);", block)
            parts = [
                f"@font-face{{font-family:'{family}';"
                f"font-style:{style.group(1).strip() if style else 'normal'};"
                f"font-weight:{weight.group(1).strip() if weight else '400'};"
                f"src:url({uris[idx]}) format('woff2');font-display:swap"
            ]
            if urange:
                parts.append(f"unicode-range:{urange.group(1).strip()}")
            parts.append("}")
            blocks.append("".join(parts))
            idx += 1
    return "\n".join(blocks)


def main() -> int:
    print(f"repo : {REPO}")
    print(f"cache: {CACHE}")

    image_urls = collect_image_urls()
    print(f"image urls: {len(image_urls)}")
    images: dict[str, str] = {}
    for url in image_urls:
        raw = cached("img", url)
        if not raw:
            continue
        try:
            images[url] = to_webp_data_uri(raw)
        except Exception as exc:  # noqa: BLE001
            failures.append(f"{url}\n    -> image decode failed: {exc}")

    print(f"images embedded: {len(images)}")
    fonts = collect_fonts()
    for key, val in fonts.items():
        print(f"font {key}: {len(val)} face(s)")

    if failures:
        print("\nFAILURES:")
        for f in failures:
            print("  " + f)
        print(f"\n{len(failures)} asset(s) could not be fetched. Not writing manifest.")
        return 1

    manifest = {
        "images": images,
        "fontFaces": font_face_css(fonts),
    }
    CACHE.mkdir(parents=True, exist_ok=True)
    MANIFEST.write_text(json.dumps(manifest), encoding="utf-8")
    size_mb = MANIFEST.stat().st_size / 1024 / 1024
    print(f"\nwrote {MANIFEST} ({size_mb:.2f} MB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
