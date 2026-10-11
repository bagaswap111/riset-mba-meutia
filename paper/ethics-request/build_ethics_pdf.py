"""
Build printable PDFs for the BINUS ethical determination request package.

Produces two kinds of output in ethics-request/pdf/:

  1. The complete packet as ONE PDF, behind a cover page with a table of
     contents. This is what gets printed, signed, scanned and submitted.
  2. One PDF per document, for handling the documents separately -- the
     cover letter goes to the Committee chair, the commitment form is
     signed by each researcher individually, and so on.

Reuses the markdown converter and print stylesheet from
UT-plan/build/build_packet_pdf.py so the output matches the study packet
already in this repository, including the ballot-box font fallback that the
consent form's checkboxes depend on.

Usage:
    python ethics-request/build_ethics_pdf.py            # both packet and per-document
    python ethics-request/build_ethics_pdf.py --packet   # merged packet only
    python ethics-request/build_ethics_pdf.py --single   # per-document only
    python ethics-request/build_ethics_pdf.py --no-pdf   # HTML only, no Edge

Neither pandoc nor wkhtmltopdf is available on this machine, so PDF
conversion goes through headless Microsoft Edge in print-to-PDF mode, the
same approach UT-plan/build/build_doc_pdf.py already uses.

This script only reads .md files and writes into ethics-request/pdf/. It
never modifies the source documents.
"""

import html
import pathlib
import subprocess
import sys
import tempfile

# Importing build_packet_pdf reads sys.argv at module level to compute its own
# ROOT, which is unused here. Guard the argv anyway so this script works
# regardless of the order or count of the arguments it was given.
_argv = sys.argv
sys.argv = [_argv[0], "dummy-root"]

sys.path.insert(
    0,
    str(
        pathlib.Path(__file__).resolve().parents[2]
        / "UT-plan"
        / "build"
    ),
)

from build_packet_pdf import PAGE, convert  # noqa: E402

sys.argv = _argv

HERE = pathlib.Path(__file__).resolve().parent
OUT_DIR = HERE / "pdf"

# Order matters: this is the assembly sequence for the Committee.
DOCUMENTS = [
    ("01-surat-permohonan.md", "Surat Permohonan Kaji Etik", "Cover letter, bilingual"),
    ("02-formulir-kaji-etik.md", "Formulir Permohonan Kaji Etik", "Application form"),
    ("03-pernyataan-situasi.md", "Pernyataan Situasi dan Penyimpangan", "Disclosure of departures"),
    ("04-rencana-pengelolaan-data.md", "Rencana Pengelolaan Data", "Data management plan, UU PDP"),
    ("05-pernyataan-konflik-kepentingan.md", "Pernyataan Konflik Kepentingan", "Conflict of interest"),
    ("06-lemmar-komitmen-etik.md", "Lembar Komitmen Etik", "Ethics commitment"),
]

EDGE_CANDIDATES = (
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
)

TITLE = "Permohonan Penentuan Etik BINUS"
SUBTITLE = "Evaluasi Usability Formatif Prototipe Marketplace Layanan Rumah"
STATUS = (
    "Dokumen kerja. Lengkapi seluruh kolom berkurung sebelum pengajuan. "
    "Bagian yang paling menentukan hasil adalah 03-pernyataan-situasi.md, "
    "yang membingkai keterbukaan pengumpulan data sebelum review secara terbuka."
)

# Raw string on purpose: the CSS escape \00a0 below must survive Python as two
# characters.
EXTRA_CSS = r"""
.cover-meta { margin-top: 8mm; border-top: .5pt solid #c8c5cd; padding-top: 4mm; }
.meta-row {
  display: flex; gap: 4mm; padding: 1.6mm 0;
  border-bottom: .5pt dotted #d5d8dd; font-size: 9pt;
}
.meta-k {
  min-width: 34mm; color: #6b7280; letter-spacing: .04em;
  text-transform: uppercase; font-size: 8pt;
}
.meta-v { flex: 1; color: #00000b; }

/* Forms get signed. Never split a row across a page, and never strand a
   heading at the foot of one. */
.doc table { page-break-inside: auto; }
.doc tr { page-break-inside: avoid; orphans: 2; widows: 2; }
.doc td, .doc th { font-size: 9pt; padding: 2.2mm 2mm; }
.doc ol > li, .doc ul > li { orphans: 2; widows: 2; }
h2, h3, h4 { page-break-after: avoid; }

/* Blank form cells need writing room. */
td:empty { height: 7mm; }
td:empty::after { content: "\00a0"; }

/* Section starts a fresh page in the merged packet. */
.doc-section { page-break-before: always; }
"""


def find_edge() -> pathlib.Path | None:
    for candidate in EDGE_CANDIDATES:
        path = pathlib.Path(candidate)
        if path.is_file():
            return path
    return None


def html_to_pdf(edge: pathlib.Path, html_path: pathlib.Path) -> pathlib.Path | None:
    pdf_path = html_path.with_suffix(".pdf")
    profile = pathlib.Path(tempfile.gettempdir()) / "edge-ethics-print"
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
        subprocess.run(cmd, check=True, timeout=300, capture_output=True)
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired) as exc:
        print(f"Edge gagal membuat PDF: {exc}", file=sys.stderr)
        return None
    return pdf_path if pdf_path.is_file() else None


def write_page(body_html: str, title: str, cover_html: str = "") -> str:
    """Insert converted markdown into the shared page shell.

    PAGE is a template with a single {{CONTENT}} placeholder and a <body>
    tag. Its built-in cover belongs to the study packet, so it is left out
    unless a cover is supplied for this package.
    """
    page = PAGE.replace("<title>Paket Riset Usability Gen Z - ProFix</title>",
                        f"<title>{html.escape(title)}</title>")
    page = page.replace("</style>", EXTRA_CSS + "</style>")
    return page.replace("{{CONTENT}}", cover_html + body_html)


def cover_block(title: str, subtitle: str, status: str, toc: list[str]) -> str:
    items = "".join(
        f"<li><span class='num'>{i + 1}</span>"
        f"<span class='tt'>{html.escape(name)}</span>"
        f"<span class='fn'>{html.escape(desc)}</span></li>"
        for i, (name, desc) in enumerate(toc)
    )
    meta_rows = (
        ("Peneliti", "Meutia Braniwati, S.Ds., M.Sn. — Faculty Member, NIP D7003"),
        ("Surel", "meutia.braniwati@binus.ac.id · +62 898-0982-999"),
        ("Lokasi", "Semarang, Jawa Tengah"),
        ("Periode data", "1 Oktober – 30 Oktober 2026"),
        ("Bidang", "Ilmu Komputer — Human-Computer Interaction"),
        ("Kanal", "https://bit.ly/KajiEtikBINUS"),
        ("Status data", "Pengumpulan data SUDAH SELESAI; yang dimohonkan penentuan untuk analisis & publikasi"),
        ("Konferensi", "ICICYTA 2026 (Telkom University)"),
        ("Tanggal", "1 Oktober 2026"),
    )
    meta = "".join(
        f"<div class='meta-row'><span class='meta-k'>{html.escape(k)}</span>"
        f"<span class='meta-v'>{html.escape(v)}</span></div>"
        for k, v in meta_rows
    )
    return (
        "<div class='cover'>"
        f"<div class='eyebrow'>Permohonan Penentuan Etik &#183; BINUS 2026</div>"
        f"<h1 class='cover-title'>{html.escape(title)}</h1>"
        f"<div class='cover-sub'>{html.escape(subtitle)}</div>"
        f"<div class='cover-status'>{html.escape(status)}</div>"
        "<div class='cover-toc-h'>Isi Paket</div>"
        f"<ol class='toc'>{items}</ol>"
        f"<div class='cover-meta'>{meta}</div>"
        "</div>"
    )


def doc_title(md: str, fallback: str) -> str:
    for line in md.splitlines():
        if line.startswith("# "):
            return line[2:].split(" — ")[0].strip()
    return fallback


def build_packet() -> pathlib.Path:
    parts = [cover_block(TITLE, SUBTITLE, STATUS,
                         [(n, d) for _, n, d in DOCUMENTS])]
    for idx, (fname, name, _) in enumerate(DOCUMENTS):
        path = HERE / fname
        if not path.is_file():
            print(f"lewati (tidak ada): {fname}", file=sys.stderr)
            continue
        body = convert(path.read_text(encoding="utf-8"))
        if idx:
            body = body.replace('<div class="doc">',
                                '<div class="doc doc-section">', 1)
        parts.append(body)

    out_html = OUT_DIR / "ethics-request-packet.html"
    out_html.parent.mkdir(parents=True, exist_ok=True)
    cover = cover_block(TITLE, SUBTITLE, STATUS,
                        [(n, d) for _, n, d in DOCUMENTS])
    out_html.write_text(write_page("\n".join(parts), TITLE, cover),
                        encoding="utf-8")
    return out_html


def build_singles() -> list[pathlib.Path]:
    made = []
    for fname, name, _ in DOCUMENTS:
        path = HERE / fname
        if not path.is_file():
            print(f"lewati (tidak ada): {fname}", file=sys.stderr)
            continue
        title = doc_title(path.read_text(encoding="utf-8"), name)
        body = convert(path.read_text(encoding="utf-8"))
        out_html = OUT_DIR / (path.stem + ".html")
        out_html.parent.mkdir(parents=True, exist_ok=True)
        out_html.write_text(write_page(body, title), encoding="utf-8")
        made.append(out_html)
    return made


def main() -> int:
    args = sys.argv[1:]
    if "-h" in args or "--help" in args:
        print(__doc__)
        return 0

    want_packet = "--packet" in args or not ("--single" in args)
    want_single = "--single" in args or not ("--packet" in args)
    want_pdf = "--no-pdf" not in args

    edge = find_edge() if want_pdf else None
    if want_pdf and edge is None:
        print("Edge tidak ditemukan; PDF dilewati (HTML tetap dibuat).",
              file=sys.stderr)

    made: list[pathlib.Path] = []

    if want_packet:
        html_path = build_packet()
        print(f"HTML  {html_path}")
        made.append(html_path)

    if want_single:
        made.extend(build_singles())

    if edge:
        for html_path in made:
            pdf = html_to_pdf(edge, html_path)
            if pdf is None:
                return 1
            kb = round(pdf.stat().st_size / 1024, 1)
            print(f"PDF   {pdf.name}  ({kb} KB)")

    print(f"\nSelesai. {len(made)} dokumen di {OUT_DIR}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
