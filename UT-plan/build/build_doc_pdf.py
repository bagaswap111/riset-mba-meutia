"""
Build a standalone printable PDF for one UT-plan markdown document.

The full packet builder (build_packet_pdf.py) merges README.md plus every
numbered document behind one cover page. Moderators usually need just the
session script in hand, so this script renders a single .md into its own
cover page plus its own PDF.

It reuses the markdown converter and the print stylesheet from
build_packet_pdf.py so both outputs stay visually identical. Only the cover
page differs.

Usage:
    python UT-plan/build/build_doc_pdf.py 07-usability-test-scenario-and-steps.md out.html
    python UT-plan/build/build_doc_pdf.py 07-usability-test-scenario-and-steps.md out.html --pdf

Arguments:
    argv[1]  markdown file inside ROOT to render   (required)
    argv[2]  output HTML path                      (default: alongside the markdown)
    argv[3]  repository root containing UT-plan/   (default: cwd)
    --pdf     also convert the HTML to PDF with headless Microsoft Edge
    --no-pdf  never invoke Edge, even if it is installed

The script only reads .md files and never modifies them. Edge is invoked in
headless print-to-PDF mode because pandoc and wkhtmltopdf are not available on
this machine.
"""
import html
import pathlib
import re
import subprocess
import sys
import tempfile

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))

# Importing build_packet_pdf reads sys.argv at module level to compute its own
# ROOT. That value is unused here (this script resolves its own), so the import
# is safe regardless of argument order.
from build_packet_pdf import PAGE, convert  # noqa: E402

EDGE_CANDIDATES = (
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
)


def resolve_root(raw: str | None) -> pathlib.Path:
    if raw:
        candidate = pathlib.Path(raw).resolve() / "UT-plan"
        if candidate.is_dir():
            return candidate
        candidate = pathlib.Path(raw).resolve()
        if candidate.name == "UT-plan" and candidate.is_dir():
            return candidate
        if candidate.is_dir():
            return candidate / "UT-plan"
    return pathlib.Path.cwd() / "UT-plan"


def find_edge() -> pathlib.Path | None:
    for candidate in EDGE_CANDIDATES:
        path = pathlib.Path(candidate)
        if path.is_file():
            return path
    return None


def doc_title(md: str, fallback: str) -> str:
    """Use the document's own H1 as the cover title, minus any trailing version."""
    m = re.search(r"^#\s+(.+)$", md, flags=re.M)
    if not m:
        return fallback
    title = m.group(1).strip()
    # "Skenario Uji Usability dan Langkah Sesi - ProFix Gen Z" reads better on a
    # cover with "ProFix Gen Z" dropped into the subtitle instead.
    return re.split(r"\s+[-–—]\s+", title)[0].strip()


def doc_version(md: str) -> str:
    m = re.search(r"^\*\*Versi dokumen:\*\*\s*(.+)$", md, flags=re.M)
    return m.group(1).strip() if m else ""


def doc_status(md: str) -> str:
    m = re.search(r"^\*\*Status:\*\*\s*(.+)$", md, flags=re.M)
    if not m:
        return ""
    # The status line can run long; keep it whole, the cover box wraps.
    return m.group(1).strip().replace("**", "")


def count_checkboxes(md: str) -> int:
    return len(re.findall(r"^\s*[-*]\s+\[ \]", md, flags=re.M))


def build_cover(title: str, version: str, status: str, source: str, boxes: int) -> str:
    meta = "".join(
        f"<div class='meta-row'><span class='meta-k'>{k}</span>"
        f"<span class='meta-v'>{v}</span></div>"
        for k, v in (
            ("Berkas sumber", html.escape(source)),
            ("Versi dokumen", html.escape(version) or "tidak dinyatakan"),
            ("Kotak centang", f"{boxes} butir yang dapat dicoret tangan"),
            ("Bagian dari paket", "Dokumen 07 dari Paket Riset Usability Gen Z - ProFix"),
        )
    )
    status_block = (
        f"<div class='cover-status'><strong>STATUS.</strong> {html.escape(status)}</div>"
        if status
        else ""
    )
    return f"""
<div class="cover">
  <div class="eyebrow">Dokumen kerja &#183; BINUS 2026 &#183; belum disetujui</div>
  <h1 class="cover-title">{html.escape(title)}</h1>
  <div class="cover-sub">ProFix &#183; website layanan perawatan rumah &#183; skrip moderator</div>
  {status_block}
  <div class="cover-meta">{meta}</div>
  <div class="cover-foot">
    Dokumen ini adalah bagian dari paket riset usability dan tidak menggantikan
    <code>01-study-protocol.md</code>, <code>02-moderator-and-participant-materials.md</code>,
    atau persetujuan pada <code>04-participant-information-and-consent.md</code>.
    Kriteria selesai tugas T1&#8211;T8 disalin dari dokumen 02 dan tidak diubah di sini.
    Studi belum dilakukan: seluruh kolom hasil pada berkas ini sengaja dikosongkan.
  </div>
</div>
"""


def build(md_path: pathlib.Path, title: str) -> str:
    md = md_path.read_text(encoding="utf-8")
    body = convert(md)
    # The file's own H1 would duplicate the cover title.
    body = re.sub(r"^<h1>.*?</h1>", "", body, count=1, flags=re.S)
    status = doc_status(md)
    cover = build_cover(
        title, doc_version(md), status, md_path.name, count_checkboxes(md)
    )
    section = (
        f'<section class="doc" id="{md_path.stem}">'
        f"<h1>{html.escape(title)}</h1>{body}</section>"
    )
    page = PAGE.replace("{{CONTENT}}", cover + section)
    return page.replace(
        "<title>Paket Riset Usability Gen Z - ProFix</title>",
        f"<title>{html.escape(title)} - ProFix</title>",
    )


# Raw string on purpose: the CSS escape \00a0 below must survive Python as two
# characters. In a normal string Python reads \00 as a NUL octal escape, which
# silently corrupts the stylesheet.
EXTRA_CSS = r"""
.cover-meta { margin-top: 8mm; border-top: .5pt solid #c8c5cd; padding-top: 4mm; }
.meta-row {
  display: flex; gap: 4mm; padding: 1.6mm 0;
  border-bottom: .5pt dotted #d5d8dd; font-size: 9pt;
}
.meta-k {
  min-width: 32mm; color: #6b7280; letter-spacing: .04em;
  text-transform: uppercase; font-size: 8pt;
}
.meta-v { flex: 1; color: #00000b; }
/* The moderator writes on this script, so keep list items from splitting. */
.doc ol > li, .doc ul > li { orphans: 2; widows: 2; }
/* Never strand a heading at the foot of a page. */
h2, h3, h4 { page-break-after: avoid; }
/* Blank form cells need writing room, and must collapse cleanly on paper. */
td:empty { height: 7mm; }
td:empty::after { content: "\00a0"; }
"""


def html_to_pdf(edge: pathlib.Path, html_path: pathlib.Path) -> pathlib.Path | None:
    pdf_path = html_path.with_suffix(".pdf")
    # Edge needs a real file URI and a writable profile directory.
    profile = pathlib.Path(tempfile.gettempdir()) / "edge-ut-plan-print"
    profile.mkdir(parents=True, exist_ok=True)
    cmd = [
        str(edge),
        "--headless=new",
        "--disable-gpu",
        "--no-pdf-header-footer",
        "--run-all-compositor-stages-before-draw",
        "--virtual-time-budget=10000",
        f"--user-data-dir={profile}",
        f"--print-to-pdf={pdf_path}",
        html_path.resolve().as_uri(),
    ]
    try:
        subprocess.run(cmd, check=True, timeout=180, capture_output=True)
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired) as exc:
        print(f"Edge gagal membuat PDF: {exc}", file=sys.stderr)
        return None
    return pdf_path if pdf_path.is_file() else None


def main() -> int:
    args = sys.argv[1:]
    if not args or args[0] in {"-h", "--help"}:
        print(__doc__)
        return 0 if args else 2

    want_pdf = "--pdf" in args
    positional = [a for a in args if not a.startswith("--")]

    if not positional:
        print("Berkas markdown wajib diberikan.", file=sys.stderr)
        return 2

    source = positional[0]
    root = resolve_root(positional[2] if len(positional) > 2 else None)

    md_path = (root / source).resolve()
    if not md_path.is_file():
        candidate = pathlib.Path(source).resolve()
        if candidate.is_file():
            md_path = candidate
        else:
            print(f"Berkas tidak ditemukan: {source} (root {root})", file=sys.stderr)
            return 1

    title = doc_title(md_path.read_text(encoding="utf-8"), md_path.stem)

    if len(positional) > 1:
        out_html = pathlib.Path(positional[1]).resolve()
    else:
        out_html = md_path.with_suffix(".standalone.html")

    page = build(md_path, title).replace("</style>", EXTRA_CSS + "</style>")
    out_html.parent.mkdir(parents=True, exist_ok=True)
    out_html.write_text(page, encoding="utf-8")
    print(f"HTML  {out_html}")

    if want_pdf:
        edge = find_edge()
        if edge is None:
            print("Edge tidak ditemukan; PDF dilewati.", file=sys.stderr)
        else:
            pdf = html_to_pdf(edge, out_html)
            if pdf:
                print(f"PDF   {pdf}  ({round(pdf.stat().st_size / 1024, 1)} KB)")
            else:
                return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())