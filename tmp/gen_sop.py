from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import nsdecls
from docx.oxml import parse_xml

doc = Document()

style = doc.styles['Normal']
font = style.font
font.name = 'Times New Roman'
font.size = Pt(12)
style.paragraph_format.line_spacing = 1.15
style.paragraph_format.space_after = Pt(6)

for section in doc.sections:
    section.top_margin = Cm(2.54)
    section.bottom_margin = Cm(2.54)
    section.left_margin = Cm(2.54)
    section.right_margin = Cm(2.54)

def add_heading_styled(text, level=1):
    h = doc.add_heading(text, level=level)
    for run in h.runs:
        run.font.name = 'Times New Roman'
        run.font.color.rgb = RGBColor(0, 0, 0)
    return h

def add_para(text, bold=False, italic=False, align=None, space_after=Pt(6)):
    p = doc.add_paragraph()
    run = p.add_run(text)
    run.font.name = 'Times New Roman'
    run.font.size = Pt(12)
    run.bold = bold
    run.italic = italic
    if align:
        p.alignment = align
    p.paragraph_format.space_after = space_after
    return p

def add_bullet(text):
    p = doc.add_paragraph(style='List Bullet')
    p.clear()
    run = p.add_run(text)
    run.font.name = 'Times New Roman'
    run.font.size = Pt(12)
    return p

def add_numbered(text):
    p = doc.add_paragraph(style='List Number')
    p.clear()
    run = p.add_run(text)
    run.font.name = 'Times New Roman'
    run.font.size = Pt(12)
    return p

def set_cell_text(cell, text, bold=False, size=11, align=WD_ALIGN_PARAGRAPH.LEFT):
    cell.text = ''
    p = cell.paragraphs[0]
    run = p.add_run(text)
    run.font.name = 'Times New Roman'
    run.font.size = Pt(size)
    run.bold = bold
    p.alignment = align

def shade_cells(row, color='D9E2F3'):
    for cell in row.cells:
        shading = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{color}"/>')
        cell._tc.get_or_add_tcPr().append(shading)

# TITLE
p_title = doc.add_paragraph()
p_title.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p_title.add_run('STANDARD OPERATING PROCEDURE')
run.font.name = 'Times New Roman'
run.font.size = Pt(16)
run.bold = True

p_sub = doc.add_paragraph()
p_sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p_sub.add_run('UJI USABILITY WEBSITE JASA PERAWATAN RUMAH TANGGA\nPADA PENGGUNA GENERASI Z')
run.font.name = 'Times New Roman'
run.font.size = Pt(14)
run.bold = True

p_info = doc.add_paragraph()
p_info.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p_info.add_run('\nPenelitian PPB\nBINUS University 2025/2026')
run.font.name = 'Times New Roman'
run.font.size = Pt(12)

doc.add_paragraph()

# 1. TUJUAN
add_heading_styled('1. TUJUAN', level=1)
add_para(
    'SOP ini bertujuan untuk memberikan panduan teknis yang terstandarisasi dalam pelaksanaan '
    'uji usability website jasa perawatan rumah tangga (IcoDit) kepada pengguna Generasi Z. '
    'Pengujian ini mengintegrasikan metode Heuristic Evaluation, Concurrent Think-Aloud Protocol, '
    'Post-Task Interview, Affinity Mapping, dan Impact-Effort Matrix sebagaimana dirancang dalam '
    'penelitian "Visual Branding Strategy and Usability Analysis of Household Service Interface '
    'Based on Gen Z User Behavior".'
)

# 2. RUANG LINGKUP
add_heading_styled('2. RUANG LINGKUP', level=1)
add_para('SOP ini mencakup seluruh tahapan pengujian, mulai dari persiapan, pelaksanaan, '
         'hingga analisis data, untuk dua kelompok partisipan:')
add_bullet('10 partisipan Generasi Z (usia 18-26 tahun) dengan literasi digital intermediate hingga high')
add_bullet('3 evaluator ahli UI/UX sebagai heuristic evaluator')

# 3. DEFINISI
add_heading_styled('3. DEFINISI', level=1)

terms = [
    ('Heuristic Evaluation', 'Metode evaluasi usability berdasarkan 10 prinsip Nielsen untuk '
     'mengidentifikasi masalah antarmuka secara sistematis oleh evaluator ahli.'),
    ('Concurrent Think-Aloud (CTA)', 'Protokol di mana partisipan diminta mengungkapkan secara '
     'verbal setiap pikiran, perasaan, dan pendapat mereka saat mengerjakan task.'),
    ('Post-Task Interview', 'Wawancara singkat setelah task untuk menggali pengalaman, '
     'kesulitan, dan persepsi partisipan secara kualitatif.'),
    ('Affinity Mapping', 'Teknik pengelompokan temuan kualitatif ke dalam tema berdasarkan '
     'kesamaan pola untuk mengidentifikasi masalah utama.'),
    ('Impact-Effort Matrix', 'Matriks prioritas 2x2 yang memetakan temuan berdasarkan '
     'Impact terhadap UX vs Effort implementasi.'),
    ("Nielsen's 10 Usability Heuristics", '10 prinsip desain interaksi: (1) Visibility of system status, '
     '(2) Match between system and real world, (3) User control and freedom, (4) Consistency and standards, '
     '(5) Error prevention, (6) Recognition rather than recall, (7) Flexibility and efficiency of use, '
     '(8) Aesthetic and minimalist design, (9) Help users recognize errors, (10) Help and documentation.'),
]

for term, defn in terms:
    p = doc.add_paragraph()
    run_term = p.add_run(f'{term}: ')
    run_term.bold = True
    run_term.font.name = 'Times New Roman'
    run_term.font.size = Pt(12)
    run_defn = p.add_run(defn)
    run_defn.font.name = 'Times New Roman'
    run_defn.font.size = Pt(12)
    p.paragraph_format.space_after = Pt(4)

# 4. PERAN DAN TANGGUNG JAWAB
add_heading_styled('4. PERAN DAN TANGGUNG JAWAB', level=1)

roles = [
    ('Peneliti Utama', 'Mengkoordinasikan kegiatan pengujian; menyusun instrumen; '
     'memimpin analisis data; menyusun laporan.'),
    ('Fasilitator', 'Memandu sesi uji; memberikan instruksi task; memastikan protokol '
     'CTA berjalan; melakukan probing tanpa mengarahkan.'),
    ('Observer/Notulis', 'Mencatat perilaku, ekspresi, dan verbalisasi partisipan; '
     'mengelola recording; menandai timestamp kejadian penting.'),
    ('Evaluator Ahli (3 orang)', 'Melakukan heuristic evaluation secara independen; '
     'memberikan skor severity (0-4) untuk setiap temuan.'),
    ('Partisipan Gen Z (10 orang)', 'Menjalankan task pada prototype; melakukan think-aloud; '
     'mengisi kuesioner evaluasi.'),
]

for role, desc in roles:
    p = doc.add_paragraph()
    run_r = p.add_run(f'{role}: ')
    run_r.bold = True
    run_r.font.name = 'Times New Roman'
    run_r.font.size = Pt(12)
    run_d = p.add_run(desc)
    run_d.font.name = 'Times New Roman'
    run_d.font.size = Pt(12)
    p.paragraph_format.space_after = Pt(4)

# 5. ALAT DAN BAHAN
add_heading_styled('5. ALAT DAN BAHAN', level=1)

add_para('5.1 Perangkat Keras', bold=True)
add_bullet('Laptop/desktop layar minimal 13" untuk prototype Figma')
add_bullet('Smartphone untuk pengujian tampilan mobile')
add_bullet('Kamera/webcam eksternal untuk merekam ekspresi wajah')
add_bullet('Microphone eksternal untuk merekam verbalisasi')
add_bullet('Screen recorder (OBS Studio / built-in)')
add_bullet('Koneksi internet stabil')

add_para('5.2 Perangkat Lunak', bold=True)
add_bullet('Figma (prototype interaktif IcoDit)')
add_bullet('Screen recorder OBS Studio atau QuickTime')
add_bullet('Google Forms untuk kuesioner')
add_bullet('Spreadsheet (Excel / Google Sheets)')
add_bullet('Miro / sticky notes fisik untuk affinity mapping')

add_para('5.3 Dokumen', bold=True)
add_bullet('Informed consent (surat persetujuan partisipan)')
add_bullet('Task scenario sheet')
add_bullet('Heuristic Evaluation checklist')
add_bullet('Kuesioner 5-point Likert scale')
add_bullet('Post-Task Interview guide')
add_bullet('Affinity Mapping template')
add_bullet('Impact-Effort Matrix template')

# 6. PROSEDUR
add_heading_styled('6. PROSEDUR PELAKSANAAN', level=1)

add_para('6.1 Tahap Persiapan (H-7)', bold=True)
add_numbered('Menyusun task scenario berdasarkan user journey Gen Z: mencari layanan, '
             'melihat estimasi harga, melakukan booking, menghubungi teknisi.')
add_numbered('Merekrut 10 partisipan Gen Z (18-26 tahun) dengan kriteria: '
             '(a) literasi digital intermediate-high, (b) pernah menggunakan on-demand service, '
             '(c) belum pernah melihat prototype IcoDit. Screening via kuisioner.')
add_numbered('Merekrut 3 evaluator ahli UI/UX (min. 2 tahun pengalaman).')
add_numbered('Menyiapkan prototype Figma interaktif (desktop & mobile), validasi semua link.')
add_numbered('Menyiapkan ruang uji tenang. Jika online, pastikan platform video call siap.')
add_numbered('Pilot test dengan 1 partisipan untuk validasi task scenario dan teknis.')

add_para('6.2 Tahap Pelaksanaan - Sesi Partisipan Gen Z', bold=True)

add_para('6.2.1 Pembukaan (10 menit)', bold=True, italic=True)
add_numbered('Partisipan menandatangani informed consent.')
add_numbered('Jelaskan tujuan dan alur sesi.')
add_numbered('Jelaskan protokol CTA: "Tidak ada jawaban salah. Ungkapkan apa pun yang '
             'Anda pikirkan, rasakan, dan lihat."')
add_numbered('Contoh think-aloud singkat.')
add_numbered('Mulai screen & audio recorder.')
add_numbered('Isi data demografis partisipan.')

add_para('6.2.2 Pelaksanaan Task & Think-Aloud (30-40 menit)', bold=True, italic=True)
add_numbered('Fasilitator membacakan task scenario. Contoh: "Anda ingin membersihkan AC. '
             'Cari layanan AC cleaning, lihat estimasi harga, dan lakukan pemesanan."')
add_numbered('Partisipan menjalankan task sambil think-aloud. Fasilitator hanya mengingatkan '
             '"tetap bicara" jika diam >5 detik, tanpa petunjuk.')
add_numbered('Observer mencatat: (a) keberhasilan task, (b) waktu, (c) ekspresi, '
             '(d) verbalisasi kunci, (e) deviasi dari task.')
add_numbered('Setelah setiap task: Post-Task Interview (2-3 menit).')
p = doc.add_paragraph()
p.paragraph_format.left_indent = Cm(2.54)
run = p.add_run(
    'Contoh pertanyaan:\n'
    '- "Seberapa mudah task ini? (1-5)"\n'
    '- "Bagian paling membingungkan?"\n'
    '- "Apa yang Anda harapkan terjadi tetapi tidak terjadi?"')
run.font.name = 'Times New Roman'
run.font.size = Pt(12)
run.italic = True
add_numbered('Ulangi untuk 5-7 task scenario.')
add_numbered('Setelah semua task: partisipan mengisi kuesioner 10 heuristik (skala 1-5).')

add_para('6.2.3 Penutupan (5 menit)', bold=True, italic=True)
add_numbered('Wawancara singkat kesan keseluruhan & saran.')
add_numbered('Honorarium & ucapan terima kasih.')
add_numbered('Simpan recording: [Kode_Partisipan]_[Tanggal].mp4')

add_para('6.3 Tahap Pelaksanaan - Heuristic Evaluation oleh Ahli', bold=True)
add_numbered('Setiap evaluator menerima prototype Figma, task scenario, dan checklist '
             'Heuristic Evaluation secara independen.')
add_numbered('Evaluator menjalankan prototype dan mengidentifikasi pelanggaran 10 heuristik.')
add_numbered('Severity rating (0-4): 0=Bukan masalah, 1=Kosmetik, 2=Minor, 3=Mayor, 4=Katastrofal.')
add_numbered('Format temuan: [Heuristik] - [Lokasi] - [Deskripsi] - [Severity].')
add_numbered('Hasil 3 ahli digabungkan untuk konsensus severity.')

add_para('6.4 Analisis Data', bold=True)

add_para('6.4.1 Analisis Kuantitatif', bold=True, italic=True)
add_numbered('Hitung rata-rata skor Likert per heuristik dari 10 partisipan.')
add_numbered('Konversi ke persentase: (rata-rata / 5) x 100%.')
add_numbered('Threshold: >=80% baik, 60-79% perlu perbaikan, <60% redesain.')

add_para('6.4.2 Analisis Kualitatif - Affinity Mapping', bold=True, italic=True)
add_numbered('Transkripsikan verbalisasi think-aloud dan catatan observer.')
add_numbered('Tulis setiap temuan pada sticky note.')
add_numbered('Kelompokkan ke kluster berdasarkan tema.')
add_numbered('Beri label setiap kluster.')
add_numbered('Petakan ke prinsip HCI (Norman, Hick, Miller, Gestalt, Aesthetic-Usability).')

add_para('6.4.3 Prioritisasi - Impact-Effort Matrix', bold=True, italic=True)
add_numbered('Buat matriks 2x2: X=Effort (Low/High), Y=Impact (Low/High).')
add_numbered('Plot setiap temuan ke matriks.')
add_numbered('Prioritas 1: High Impact - Low Effort (implementasi segera).')
add_numbered('Prioritas 2: High Impact - High Effort (iterasi berikutnya).')
add_numbered('Abaikan: Low Impact - High Effort.')

add_para('6.5 Iterasi Desain', bold=True)
add_numbered('Lakukan perbaikan pada prototype Figma berdasarkan prioritas.')
add_numbered('Dokumentasi before-after setiap perubahan.')
add_numbered('Second-round testing jika diperlukan.')

# 7. INSTRUMEN
add_heading_styled('7. INSTRUMEN PENGUJIAN', level=1)

add_para('7.1 Task Scenario', bold=True)

tasks = [
    ('T1', 'Mencari Layanan', 'Cari layanan "AC Cleaning" dari halaman utama dan lihat detail paket.'),
    ('T2', 'Estimasi Harga', 'Cari estimasi biaya "Septic Tank Cleaning" tanpa booking.'),
    ('T3', 'Booking Layanan', 'Pesan "Plumbing" paket "Complete" dengan alamat rumah Anda.'),
    ('T4', 'Melihat Portofolio', 'Cari dan lihat portofolio/sertifikasi teknisi.'),
    ('T5', 'Konfirmasi & Batal', 'Booking lalu batalkan pesanan dari halaman konfirmasi.'),
    ('T6', 'Mencari Bantuan', 'Temukan halaman FAQ/hubungi layanan bantuan.'),
    ('T7', 'Navigasi Kembali', 'Dari halaman detail layanan, kembali ke beranda tanpa tombol browser back.'),
]

table_t = doc.add_table(rows=len(tasks)+1, cols=3)
table_t.style = 'Table Grid'
table_t.alignment = WD_TABLE_ALIGNMENT.CENTER
set_cell_text(table_t.rows[0].cells[0], 'Kode', bold=True, size=10, align=WD_ALIGN_PARAGRAPH.CENTER)
set_cell_text(table_t.rows[0].cells[1], 'Task', bold=True, size=10)
set_cell_text(table_t.rows[0].cells[2], 'Deskripsi', bold=True, size=10)
shade_cells(table_t.rows[0])
for i, (k, t, d) in enumerate(tasks):
    set_cell_text(table_t.rows[i+1].cells[0], k, size=10, align=WD_ALIGN_PARAGRAPH.CENTER)
    set_cell_text(table_t.rows[i+1].cells[1], t, size=10)
    set_cell_text(table_t.rows[i+1].cells[2], d, size=10)

doc.add_paragraph()

add_para('7.2 Kuesioner Heuristic Evaluation (5-point Likert)', bold=True)

heuristics = [
    ('H1', 'Visibility of system status', 'Sistem memberi info jelas tentang status proses'),
    ('H2', 'Match system & real world', 'Istilah familiar sesuai kebiasaan sehari-hari'),
    ('H3', 'User control & freedom', 'Kendali penuh, mudah membatalkan tindakan'),
    ('H4', 'Consistency & standards', 'Konsistensi UI dan navigasi di semua halaman'),
    ('H5', 'Error prevention', 'Sistem cegah kesalahan via validasi & petunjuk'),
    ('H6', 'Recognition rather than recall', 'Elemen visible tanpa perlu ingat info sebelumnya'),
    ('H7', 'Flexibility & efficiency', 'Shortcut untuk pengguna mahir'),
    ('H8', 'Aesthetic & minimalist design', 'Desain bersih, informasi relevan mudah ditemukan'),
    ('H9', 'Help users recognize errors', 'Pesan error jelas, solutif, mudah dipahami'),
    ('H10', 'Help & documentation', 'Dokumentasi bantuan tersedia dan mudah diakses'),
]

table_he = doc.add_table(rows=len(heuristics)+1, cols=3)
table_he.style = 'Table Grid'
table_he.alignment = WD_TABLE_ALIGNMENT.CENTER
set_cell_text(table_he.rows[0].cells[0], 'Kode', bold=True, size=10, align=WD_ALIGN_PARAGRAPH.CENTER)
set_cell_text(table_he.rows[0].cells[1], 'Prinsip Nielsen', bold=True, size=10)
set_cell_text(table_he.rows[0].cells[2], 'Indikator Penilaian', bold=True, size=10)
shade_cells(table_he.rows[0])
for i, (k, pr, ind) in enumerate(heuristics):
    set_cell_text(table_he.rows[i+1].cells[0], k, size=10, align=WD_ALIGN_PARAGRAPH.CENTER)
    set_cell_text(table_he.rows[i+1].cells[1], pr, size=10)
    set_cell_text(table_he.rows[i+1].cells[2], ind, size=10)

doc.add_paragraph()

add_para('7.3 Format Pencatatan Heuristic Evaluation (Ahli)', bold=True)
p_ex = doc.add_paragraph()
run = p_ex.add_run(
    'Format: [Heuristik] | [Lokasi] | [Deskripsi Masalah] | [Severity 0-4] | [Rekomendasi]\n\n'
    'Contoh:\n'
    'H1 | Halaman booking, tombol Submit | Tidak ada feedback setelah klik | Severity: 3 | '
    'Tambahkan loading spinner dan pesan "Memproses..."'
)
run.font.name = 'Times New Roman'
run.font.size = Pt(12)

# 8. JADWAL
add_heading_styled('8. JADWAL PELAKSANAAN', level=1)

schedule = [
    ('Persiapan instrumen & pilot test', 'H-7 s.d. H-1'),
    ('Rekrutmen & screening partisipan', 'H-14 s.d. H-1'),
    ('Sesi uji partisipan Gen Z', 'H-1 s.d. H+3'),
    ('Heuristic evaluation oleh ahli', 'H-1 s.d. H+3'),
    ('Transkripsi & affinity mapping', 'H+4 s.d. H+7'),
    ('Impact-Effort prioritization', 'H+8 s.d. H+9'),
    ('Iterasi desain', 'H+10 s.d. H+14'),
    ('Penyusunan laporan hasil uji', 'H+15 s.d. H+21'),
]

table_sched = doc.add_table(rows=len(schedule)+1, cols=2)
table_sched.style = 'Table Grid'
table_sched.alignment = WD_TABLE_ALIGNMENT.CENTER
set_cell_text(table_sched.rows[0].cells[0], 'Tahapan', bold=True, size=11)
set_cell_text(table_sched.rows[0].cells[1], 'Waktu', bold=True, size=11, align=WD_ALIGN_PARAGRAPH.CENTER)
shade_cells(table_sched.rows[0])
for i, (tahap, waktu) in enumerate(schedule):
    set_cell_text(table_sched.rows[i+1].cells[0], tahap, size=11)
    set_cell_text(table_sched.rows[i+1].cells[1], waktu, size=11, align=WD_ALIGN_PARAGRAPH.CENTER)

# 9. REFERENSI
add_heading_styled('9. REFERENSI', level=1)
refs = [
    'Norman, D.A.: The Design of Everyday Things. Basic Books, New York (2013).',
    'Nielsen, J.: 10 Usability Heuristics. Nielsen Norman Group (1994).',
    'Nielsen, J.: Severity Ratings for Usability Problems. NNGroup (1995).',
    'Hick, W.E.: On the rate of gain of information. QJEP. 4(1), 11-26 (1952).',
    'Miller, G.A.: The magical number seven, plus or minus two. Psych. Review. 63(2), 81-97 (1956).',
    'Hart, J., Kapp, K.: Aesthetic-usability effect in service design. JDRP. 5(3), 210-224 (2021).',
]
for i, ref in enumerate(refs, 1):
    p = doc.add_paragraph()
    run = p.add_run(f'{i}. {ref}')
    run.font.name = 'Times New Roman'
    run.font.size = Pt(12)

# 10. LAMPIRAN
add_heading_styled('10. LAMPIRAN', level=1)
lamps = [
    'Informed Consent Form',
    'Screening Questionnaire Partisipan',
    'Task Scenario Sheet (lengkap)',
    'Heuristic Evaluation Checklist',
    'Kuesioner 5-Point Likert Scale',
    'Post-Task Interview Guide',
    'Affinity Mapping Template',
    'Impact-Effort Matrix Template',
    'Link Akses Prototype Figma',
]
for l in lamps:
    add_bullet(f'Lampiran: {l}')

# SAVE
output = '/Users/bagaskorosaputro/Documents/GithubDesktop/riset-mba-meutia/SOP_Uji_Usability_GenZ.docx'
doc.save(output)
print(f'SOP saved to: {output}')