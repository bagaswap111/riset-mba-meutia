# Strategi Visual Branding dan Analisis Usability Antarmuka Layanan Perawatan Rumah Tangga Berbasis Perilaku Pengguna Gen Z

> **STATUS NASKAH: DRAF KERJA — STUDI EMPIRIS SUDAH DIJALANKAN.**
>
> Pembaruan 2026-10-10. Data *usability testing* telah masuk ke naskah ini dari tiga berkas di
> [`UT-result/`](../UT-result/): laporan transkrip 10 sesi, serta dua rekapitulasi SEQ dua ronde.
>
> - **Selesai:** audit kode 10 Heuristik Nielsen **dan** uji usability dengan 10 peserta × 8 tugas
>   (80 percobaan tugas) dalam dua ronde.
> - **Naskah konferensi berbahasa Inggris:** [`conference-paper.md`](conference-paper.md).
> - **Jejak audit angka:** [`ut-results-integration.md`](ut-results-integration.md). Baca berkas itu
>   sebelum mengutip angka mana pun dari naskah ini.
>
> **Lima cacat provenans yang belum tuntas** dan harus dibereskan sebelum pengajuan:
> (1) daftar peserta berbeda antar berkas sumber; (2) tidak ada identitas *build* pada catatan sesi;
> (3) tidak ada data demografi sehingga kelayakan sampel Gen Z tidak dapat diverifikasi;
> (4) tidak ada bukti persetujuan dan clearance etik; (5) varian skor ronde 2 menyusut drastis.
> Rinciannya di §6.

---

**ABSTRAK**
Sektor usaha mikro, kecil, dan menengah (UMKM) jasa perawatan rumah tangga di Indonesia masih bergantung pada media promosi konvensional yang memiliki ruang informasi sempit dan tidak menampilkan harga secara transparan. Penelitian ini mengevaluasi prototipe *high-fidelity* berbahasa Indonesia untuk layanan tersebut melalui uji usability formatif.

Sepuluh peserta menyelesaikan delapan tugas terstruktur dalam dua ronde termoderasi (80 percobaan tugas). Keberhasilan tugas mencapai **93,75% (75/80)** setelah menerapkan aturan pengoreksian yang dicatat sendiri oleh auditor sumber, terhadap 98,75% (79/80) seperti tercatat semula; kedua angka dilaporkan terbuka. Kemudahan tugas rerata adalah **6,56 (SD = 1,05)** pada skala 7 poin.

Rata-rata itu menyembunyikan gambaran yang sangat tidak seragam. Empat dari delapan tugas mencapai plafon (SD ≤ 0,42), sedangkan penemuan kanal bantuan menghasilkan sebaran terlebar dalam seluruh studi (**M = 5,70; SD = 2,11**, rentang 1–7) dan menjadi satu-satunya defisit usability terbesar.

Temuan terpenting studi ini bukan skor rendah, melainkan **kegagalan integritas harga**. Dua sesi secara independen melaporkan harga layanan $89 dengan total yang ditampilkan $198,00. Baris rincian yang dilaporkan berjumlah $111,50, sehingga total yang ditampilkan melebihi rinciannya sendiri sebesar $86,50 (77,6%); baris rincian itu pun tidak konsisten secara internal, sebab 8% dari $89,00 adalah $7,12, bukan $18,00 yang ditampilkan. Jika dihitung benar, totalnya seharusnya ≈$100,62 — dalam selisih $0,36 dari $100,98 yang dilaporkan dua sesi lain untuk layanan yang sama. Pada produk yang tujuan utamanya justru *transparansi harga*, total yang tidak dapat direkonsiliasi dengan rinciannya sendiri adalah kegagalan kategoris yang tidak tertangkap oleh metrik kemudahan apa pun.

Enam tema hambatan diidentifikasi dan dipetakan menjadi backlog perbaikan terprioritas. Kelima cacat provenans yang membatasi kesimpulan juga dilaporkan terbuka.

**Kata Kunci:** *visual branding*, *usability testing*, *usability heuristic*, transparansi harga, desain kognitif, antarmuka pengguna, UMKM, generasi Z

---

## 1. PENDAHULUAN

Transformasi digital UMKM jasa perawatan rumah tangga masih terhambat oleh media promosi konvensional seperti spanduk, brosur, dan stiker. Media tersebut memiliki keterbatasan struktural: ruang informasi sempit, tidak menampilkan catatan pekerjaan terdahulu, dan tidak menampilkan harga secara transparan sehingga menurunkan kredibilitas dan daya saing [1,2].

Saluran digital menghapus batas ruang tersebut, tetapi **tidak otomatis menciptakan transparansi**. Transparansi menuntut bahwa harga yang dilihat pengguna sebelum berangkat sama dengan harga yang muncul di invoice, dan bahwa selisihnya dapat dijelaskan. Pembedaan antara *keterlihatan* dan *integritas* inilah yang mengorganisasi argumen naskah ini.

Perilaku konsumen generasi Z yang mengutamakan pencarian daring, ulasan digital, dan navigasi intuitif menuntut adaptasi desain yang tidak sekadar memindahkan konten fisik ke layar [3]. Literatur *visual branding* memberi bukti kuat bahwa identitas visual yang konsisten menjadi sinyal profesionalitas pada layanan digital [6,7], sementara literatur desain kognitif menyediakan kosakata rasionalitas desain [9–14].

Yang tidak disediakan literatur tersebut adalah metode evaluasi yang dapat mendeteksi kegagalan **integritas harga**. Heuristik Nielsen dapat menandai ketidaksesuaian antar layar, tetapi tidak dapat membuktikan bahwa total yang ditampilkan bertentangan dengan aritmetik barisnya sendiri, karena inspeksi kode tidak menuntut pengguna untuk melakukan transaksi. itulah celah yang dikaji studi ini.

**Pertanyaan penelitian:**

- **RQ1.** Dengan seberapa mudah pengguna dewasa muda menyelesaikan rangkaian tugas penemuan dan pemesanan layanan pada prototipe ini?
- **RQ2.** Wilayah antarmuka mana yang menghasilkan kesulitan terbesar, dan apa hambatan khasnya?
- **RQ3.** Apakah harga yang ditampilkan prototipe berperilaku konsisten dengan rincian yang ditawarkannya sendiri?
- **RQ4.** Apakah hambatan yang teramati pada uji pengguna konvergen dengan, melengkapi, atau bertentangan dengan temuan inspeksi heuristik berbasis kode?

**Batas klaim.** Penelitian ini bersifat formatif terhadap satu *build* prototipe. Tidak ada klaim tentang konversi, pendapatan, *bounce rate*, *cognitive load*, maupun perubahan kepercayaan terukur; variabel tersebut tidak diinstrumentasi.

## 2. KERANGKA TEORETIS DAN PENDEKATAN DESAIN KOGNITIF

### 2.1 Visual Branding dan Persepsi Kredibilitas Digital
*Visual branding* mencakup konsistensi logo, palet warna, tipografi, *layout*, dan gaya visual yang membentuk identitas merek di ranah digital [6]. Pada layanan teknis yang sering diasosiasikan dengan kesan informal, estetika yang terstandarisasi berfungsi sebagai sinyal profesionalisme [7]. Klaim kuantitatif tentang peningkatan skor kepercayaan pada UMKM **tidak dicantumkan** karena sumbernya belum diverifikasi dan tidak dapat ditelusuri ke desain prototipe ini.

### 2.2 Prinsip Desain Kognitif dalam Antarmuka Layanan Teknis
Kerangka teori yang dipakai sebagai alasan desain, bukan sebagai sumber klaim terukur:

- **Norman's Three Levels of Design** [8]: *visceral* melalui palet dan tipografi konsisten; *behavioral* melalui alur pemesanan bertahap dengan umpan balik status; *reflective* melalui catatan layanan dan garansi.
- **Hick's Law** [9]: jumlah item navigasi utama dibatasi agar proses pengambilan keputusan tidak melambat.
- **Miller's Law** [10]: informasi diletakkan dalam kelompok yang jelas agar sesuai kapasitas memori kerja.
- **Von Restorff Effect dan Gestalt** [11]: elemen aksi utama diisolasi secara visual, sedangkan kartu layanan dikelompokkan agar terbaca sebagai katalog utuh.
- **Aesthetic-Usability Effect** [12]: tata letak yang rapi memengaruhi persepsi kemudahan. *Rujukan [12] tidak terverifikasi dan harus diganti; rujukan [13] yang tersedia tidak membahas prinsip ini.*
- **Mental Models**: alur mengikuti pola lazim aplikasi layanan — beranda, katalog, detail, pemesanan, konfirmasi. *Tidak ada rujukan dalam daftar ini yang secara langsung membahas *mental model*; klaim ini rested pada literatur HCI umum dan harus diberi rujukan tepat.*

### 2.3 Kerangka Evaluasi
Evaluasi menggabungkan **inspeksi heuristik berbasis kode** (10 Heuristik Nielsen, inspeksi independen) dengan **uji usability berbasis tugas** yang menggunakan Single Ease Question (SEQ). Temuan dianalisis dengan *affinity mapping* dan diprioritaskan memakai matriks dampak-keluaran.

**Evaluasi heuristik adalah kerangka inspeksi kategorikal, bukan skala Likert**, dan tidak boleh diubah menjadi skor rerata. SEQ adalah skala ordinal post-tugas; statistik deskriptifnya dilaporkan untuk perbandingan, dengan catatan pada §4.2.

## 3. METODE PENELITIAN

### 3.1 Ruang lingkup yang disetujui
Proposal BINUS 2026 menetapkan penelitian kualitatif selama 12 bulan dengan anggaran Rp10.000.000, mencakup observasi media promosi konvensional, wawancara penyedia jasa, pemetaan *customer journey*, pengembangan prototipe, dan evaluasi dengan 10 Heuristik Nielsen.

### 3.2 Stimulus
Prototipe React *high-fidelity* berbahasa Indonesia untuk layanan perawatan dan perbaikan rumah: pembersih AC, layanan kebocoran/perpipaan, servis pompa, dan sanitasi rumah. Alur mencakup katalog dengan pencarian dan filter kategori, halaman detail, *checkout* empat tahap (ringkasan → jadwal → alamat → bayar), konfirmasi/*invoice*, lacak teknisi, serta FAQ/kontak.

Dua sifat prototipe yang relevan dan **tidak diubah** selama studi:

- **Mata uang USD.** Harga dirender sebagai `$`, sementara seluruh antarmuka berbahasa Indonesia.
- **Deskripsi layanan memuat konten prosedur internal teknisi**, bukan informasi yang ditujukan untuk pelanggan.

Keduanya menjadi temuan sentral (§4.3 T1).

### 3.3 Partisipan
Sepuluh peserta direkrut dan diuji dalam dua ronde berisi lima orang. Sesuai keputusan di [`ut-results-integration.md`](ut-results-integration.md) §2(C-1), peserta hanya diberi kode anonim (P01–P05, P06–P10) dan **tidak ada kode yang diklaim mewakili individu bernama tertentu**.

> **Pengungkapan kritis tentang demografi.** Tidak satu pun catatan sumber memuat usia, jenis kelamin, pekerjaan, atau atribut demografis lain. Protokol menetapkan peserta Gen Z usia 18–26 tahun, tetapi kriteria itu **tidak dapat diverifikasi dari data yang terkumpul**. Satu catatan sesi melaporkan kesulitan keterbacaan "untuk rentang usia 40 tahun ke atas", yang tidak konsisten dengan pita kelayakan protokol. Karena itu naskah ini menyebut sampel sebagai *pengguna dewasa muda yang direkrut secara purposive* dan **tidak dapat mengklaim representatifitas** terhadap Gen Z Indonesia maupun populasi lain.

### 3.4 Tugas

| Kode | Tugas |
|---|---|
| T1 | Menemukan layanan pembersih AC |
| T2 | Menemukan layanan deteksi kebocoran |
| T3 | Membaca rincian harga |
| T4 | Memilih tanggal dan slot waktu |
| T5 | Mengisi formulir alamat |
| T6 | Memunculkan dan menemukan pesan validasi |
| T7 | Navigasi kembali tanpa kehilangan data |
| T8 | Menemukan FAQ / kontak dukungan |

T1 dan T2 adalah tugas penemuan yang dipasangkan dan berbeda hanya pada kategori. Kontrasnya (§4.2c) mengisolasi pengaruh taksonomi layanan terhadap kesulitan pencarian. T6 dan T7 adalah tugas *defect-probe* dengan kriteria keberhasilan yang eksplisit.

### 3.5 Instrumen dan prosedur
- **Hasil tugas:** berhasil / berhasil dengan bantuan / tidak berhasil, dengan kriteria penyelesaian tertulis per tugas.
- **SEQ:** 1 = *sangat sulit* … 7 = *sangat mudah*, diberikan segera setelah tiap percobaan.
- **Catatan observer:** catatan tentang kebingungan, ekspektasi terverbalisasi, dan saran tak terduga.

Sesi termoderasi dengan *concurrent think-aloud*. Materi kualitatif yang tersedia bagi analisis ini adalah **parafrasa observer, bukan transkrip verbatim** — berkas rekaman tidak ada di repositori. Karena itu **naskah ini tidak memakai tanda kutip untuk ucapan peserta di mana pun**.

### 3.6 Sengketa pengodean tingkat keberhasilan — keputusan yang disengaja
Keberhasilan dicatat saat sesi dan dilaporkan pada rekap sebagai 39/40 (ronde 1) dan 40/40 (ronde 2). Kedua berkas kemudian menambahkan catatan auditor bahwa beberapa percobaan seharusnya dikodekan gagal:

- Ronde 1: dua percobaan T6 tercatat sukses padahal kriterinya *menemukan pesan validasi*, dan catatan menyatakan peserta tidak menemukannya.
- Ronde 2: satu percobaan T6 tercatat sukses padahal catatannya berbunyi "user tidak menemukan error"; satu lagi berhasil mencapai konfirmasi dengan alamat jalan yang hanya berisi karakter `(` dan `)`.

Kami memperlakukan ini sebagai perselisih penafsiran mengenai apakah kegagalan pada *sub-kriteria* berarti kegagalan tugas, bukan sebagai kesalahan aritmetika. Alih-alih mengadopsi salah satu pihak secara diam-diam, **angka hasil koreksi auditor dijadikan hasil utama dan angka as-recorded disajikan sebagai analisis sensitivitas** (§4.1).

## 4. HASIL DAN PEMBAHASAN

### 4.1 Keberhasilan Tugas

| | Ronde 1 (n=5) | Ronde 2 (n=5) | Gabungan (n=10) |
|---|---:|---:|---:|
| **Sesuai catatan** | 39/40 (97,5%) | 40/40 (100%) | 79/80 (**98,75%**) |
| **Setelah koreksi auditor (utama)** | 37/40 (92,5%) | 38/40 (95,0%) | 75/80 (**93,75%**) |

Tingkat keberhasilan di atas 90% biasanya menunjukkan desain yang sebagian besar berhasil. **Kami tidak mengklaim bahwa demikian pada studi ini**, dengan tiga alasan:

1. **Kriteria T6 terlalu permisif.** Empat dari lima kegagalan adalah percobaan T6 di mana peserta mengirim formulir tidak valid dan antarmuka tidak merespons.
2. **Sukses bukan integritas.** Peserta berhasil mencapai konfirmasi sementara total yang ditampilkan bertentangan dengan rinciannya sendiri (§4.4). Pada metrik penambahan tugas murni, ini adalah *sukses*.
3. **Keberhasilan berada di batas plafon.** Empat tugas hampir selalu selesai (§4.2), sehingga metrik ini tidak dapat membedakan.

### 4.2 Kemudahan Penggunaan dan Efek Plafon

SEQ keseluruhan: **M = 6,56; SD = 1,05**, n = 80 penilaian tingkat tugas, median 7. Distribusi: 62 penilaian bernilai 7, 10 bernilai 6, 4 bernilai 5, 1 bernilai 4, 2 bernilai 3, 1 bernilai 1.

| Tugas | M (gabungan) | SD | Ronde 1 | Ronde 2 | Rentang | Diskriminatif? |
|---|---:|---:|---:|---:|---:|---|
| T1 Cari layanan AC | 6,80 | 0,42 | 6,80 | 6,80 | 6–7 | **Plafon** |
| T2 Cari layanan kebocoran | 6,20 | 0,92 | 5,80 | 6,60 | 5–7 | Ya |
| T3 Baca rincian harga | 6,80 | 0,42 | 7,00 | 6,60 | 6–7 | **Plafon** |
| T4 Pilih tanggal/slot | 6,90 | 0,32 | 7,00 | 6,80 | 6–7 | **Plafon** |
| T5 Isi form alamat | 6,90 | 0,32 | 7,00 | 6,80 | 6–7 | **Plafon** |
| T6 Picu pesan validasi | 6,50 | 1,27 | 6,20 | 6,80 | 3–7 | Ya |
| T7 Navigasi kembali | 6,70 | 0,95 | 6,40 | 7,00 | 4–7 | Ya |
| **T8 Temukan FAQ/kontak** | **5,70** | **2,11** | 4,80 | 6,60 | **1–7** | **Terkuat** |

**a. Empat dari delapan tugas berada di plafon.** T1, T3, T4, dan T5 memiliki SD ≤ 0,42 pada skala 7 poin; untuk T4 dan T5, tidak ada peserta yang memberi nilai di bawah 6. Tugas-tugas ini tidak dapat membedakan desain baik dari sangat baik.

**b. T8 adalah sinyal sesungguhnya.** Kanal dukungan memiliki rata-rata terendah (*M* = 5,70) sekaligus sebaran terlebar (SD = 2,11), membentang dari 1 sampai 7. Dua peserta memberi 7; satu memberi 1. **Tugas dengan sebaran seperti ini tidak terlayani dengan baik oleh desain, bukan sekadar tidak dikenal.**

**c. T1 versus T2 mengisolasi kegagalan taksonomi.** T1 mencapai 6,80 dengan SD 0,42; T2 mencapai 6,20 dengan SD 0,92 — penurunan 0,60 poin pada tugas yang selain jenis layanannya identik. Peserta mengaitkannya dengan label layanan yang nyaris sinonim ("smart leak detection" versus pipe inspection) yang tidak dibedakan antarmuka. Ini masalah **pelabelan**, bukan tata letak.

### 4.3 Taksonomi Hambatan

Enam tema muncul, dengan penghitungan korpus naratif dan korpus SEQ yang disertai penyebut eksplisit karena kedua korpus tidak terkonfirmasi saling tumpang tindih.

| # | Tema | Korpus naratif | Korpus SEQ | Hambatan teramati |
|---|---|---:|---:|---|
| **T1** | Lokalisasi mata uang & istilah teknis | 3 bernama (sintesis menyatakan bulat) | 2 (keduanya ronde 2; **0 di ronde 1**) | USD di situs berbahasa Indonesia; jargon ("precision diagnostic", "evaporator internal", "relasi unit indoor–outdoor") |
| **T2** | Transparansi & integritas harga | 3 | 1 (+1 catatan mata uang) | Total tidak cocok dengan rincian; rincian tidak dapat dikelompokkan; cakupan unit tidak dinyatakan |
| **T3** | Kekakuan penjadwalan | 6 | 5 | Tanggal dipilih dua kali dengan opsi **berbeda**; jendela 3–5 hari terbaca sebagai hari kerja saja; tanpa kalender |
| **T4** | Pengambilan alamat & validasi | 7 | 5 | Tanpa peta, geocoding, atau autocomplete; tanpa alamat tersimpan; kode pos divalidasi tetapi alamat jalan tidak |
| **T5** | Navigasi & persistensi state | 6 | 8 | Data formulir hilang saat Back/reload; tautan footer kembali ke beranda; kueri pencarian tidak ter-reset |
| **T6** | Dukungan, kepadatan invoice, aksesibilitas | 4 / 1 / 2 | 4 / 1 / 1 | Dukungan tertanam di footer; invoice menumpuk tombol WhatsApp ganda, cetak ganda, dua bilah tracking, QR tanpa keterangan |

Dua temuan perlu ditegaskan karena **menyempitkan**, bukan sekadar mengulang, keluhan lama:

- **T3 bukan "entri tanggal ganda."** Satu responden menyatakan bahwa melihat jadwal dua kali *dapat diterima* bila berfungsi sebagai *cross-check* — **asalkan keduanya sama**. Defeknya adalah **ketidaksesuaian antara dua pemilih tanggal**, yang jauh lebih mudah diperbaiki (sumber kebenaran tunggal) daripada menghapus salah satunya.
- **T6c adalah temuan aksesibilitas dengan populasi yang terdefinisi.** Peserta usia 40+ melaporkan kesulitan membaca teks abu-abu berukuran kecil. Karena usia peserta tidak tercatat, kelompok ini tidak dapat dikuantifikasi; tetapi temuannya konsisten dan cukup spesifik untuk membenarkan perbaikan.

**Kontradiksi antar sumber.** Matriks rekomendasi laporan naratif memberi prioritas **Rendah** pada kanal dukungan/kontak. Kedua rekap SEQ memberi prioritas **Tinggi**. Data naratif sendiri bertentangan dengan prioritasnya sendiri, karena empat sesinya mencatat kesulitan menemukan dukungan. Naskah ini mengadopsi penilaian rekap, karena didukung bobot bukti terekam terbesar dan analisis sebaran §4.2b.

### 4.4 Integritas Harga: Temuan Utama

Dua peserta, dalam sesi terpisah, secara independen melaporkan angka yang sama untuk layanan yang sama: baris harga **$89**, biaya layanan **$4,50**, pajak disebut 8%, dan total yang ditampilkan **$198,00**.

| Komponen (sesuai laporan peserta) | Nilai |
|---|---:|
| Baris harga layanan | 89,00 |
| Biaya layanan | 4,50 |
| Baris pajak, disebut 8% | 18,00 |
| **Jumlah baris rincian yang dinyatakan** | **111,50** |
| **Total yang ditampilkan** | **198,00** |
| **Selisih tak terjelaskan** | **+86,50** (+77,6%) |

Total yang ditampilkan melebihi jumlah baris rinciannya sendiri sebesar $86,50, dan berada 122,5% di atas baris harga.

**Baris rincian yang dinyatakan juga tidak konsisten secara internal.** Pajak yang disebut 8% dari baris harga $89,00 seharusnya $7,12, bukan $18,00 yang ditampilkan. Bila dihitung pada tarif yang dinyatakan, totalnya seharusnya ≈$100,62. Baik tarifnya yang salah atau jumlahnya yang salah — tetapi tidak ada pembacaan yang menghasilkan $198,00.

Dua sesi lain, juga secara independen, melaporkan total **$100,98** untuk layanan $89 — dalam selisih **$0,36** dari prediksi yang dihitung benar. Peserta ketiga secara eksplisit melaporkan bingung melihat "$100,98" berdampingan dengan "harga servis $89".

Pola ini konsisten secara internal: untuk layanan $89, total yang dihitung benar adalah ≈ $100,6–101,0, dan $100,98 muncul berulang kali. Angka $198,00 bahkan melebihi jumlah baris rincian yang tidak konsisten sebesar 77,6%, dan melebihi total yang dihitung benar sebesar 96,8%. Angka itu **tidak** berkorespondensi dengan aritmetika layanan tersebut pada kombinasi mana pun dari baris biaya dan pajak yang dinyatakan, dan konsisten dengan milik layanan lain.

Hal ini penting mengingat tujuan produknya. Marketplace yang semua penggunanya adalah pembeli yang tidak sepenuhnya yakin — yaitu mereka yang bersiap mengizinkan orang asing masuk ke rumah — tidak boleh menampilkan total yang bertentangan dengan aritmetik sendiri.

> **Kami melaporkan ini sebagai kandidat cacat yang perlu direproduksi, bukan bug yang terkonfirmasi**, karena tiga alasan: angka-angkanya sampai kepada kami melalui parafrasa observer, bukan inspeksi *build*; satu sesi lain melaporkan selisih yang lebih kecil ($60,00 + $4,50 + $5,56 = $70,06 terhadap total $75,06, selisih tepat $5,00) yang mungkin kekeliruan transkripsi; dan tidak ada identitas *build* (§6).
>
> **Prosedur reproduksi:** buka *build* yang diuji, tambahkan layanan $89, dan catat total yang dirender.

### 4.5 Konvergensi dengan Inspeksi Heuristik Berbasis Kode

Prototipe telah menerima audit kode independen sebelum studi ini, menghasilkan 0 Critical, 2 Major, 4 Minor pada *build* yang diaudit.

| Temuan audit kode | Hambatan teramati pengguna | Putusan |
|---|---|---|
| Major: harga beranda berbeda dari katalog/detail | T2 — peserta┼ melihat lompatan total; harga katalog membingungkan | **Konvergen** |
| Major: tidak ada indikator fokus keyboard | — | **Tidak teruji** oleh metode ini |
| Minor: tautan section header rapuh | T5 — tautan footer mengembalikan ke beranda | **Konvergen** |
| Minor: ikon stepper bertentangan dengan teks | T6b — dua bilah status tracking di konfirmasi | **Konvergen** |
| Minor: tidak ada jalur pemesanan ulang | T5 — peserta meminta riwayat pemesanan | **Konvergen** |
| Minor: kode pos terpotong diam-diam | T4 — kode pos divalidasi, alamat jalan tidak | **Konvergen sebagian** |
| — | **T1 — mata uang USD di situs terlokalisasi** | **Terlewat oleh audit; ditemukan pengujian** |
| — | **T2 — total ≠ jumlah rincian** | **Terlewat oleh audit; ditemukan pengujian** |

Tiga kesimpulan:

**(a) Empat dari enam cacat yang diaudit ditemukan kembali secara independen oleh pengguna tanpa diarahkan.** Inspeksi heuristik cukup prediktif dan tetap berguna sebagai filter pra-uji murah.

**(b) Dua cacat terberat dalam studi ini — lokalisasi mata uang dan integritas total — terlewat sama sekali oleh inspeksi kode.** Keduanya bukan cacat *dalam* kode: `$` ter-render dengan benar, dan `198` ter-render dengan benar. Masing-masing adalah cacat dalam *hubungan antara* yang dirender kode dan yang diharapkan pengguna. Inspeksi kode tidak punya mekanisme untuk mendeteksi kelas ini. **Inilah argumen metodologis naskah ini: audit integritas harga adalah pemeriksaan yang tidak dilakukan secara andal oleh uji usability maupun inspeksi kode, dan harus dispesifikasikan secara eksplisit.**

**(c) Peringatan provenance *build*.** Dokumen audit mencatat cacat tautan header, *state*, ikon stepper, dan kode pos sebagai **sudah diperbaiki**. Sesi yang diuji melaporkan semuanya. Tidak ada catatan sesi yang memuat *hash* atau tanggal. ***Build* yang diuji kemungkinan besar adalah *build* pra-remediasi, tetapi hal ini tidak dapat dipastikan.** Jika terkonfirmasi, hasil menggambarkan *build* yang tidak lagi ada; jika tidak, remediasi audit tidak lengkap. Kedua pembacaan harus diselesaikan sebelum temuan ini dikutip sebagai menggambarkan prototipe saat ini.

### 4.6 Perbandingan Antar-Ronde — dan Mengapa Tidak Mendukung Klaim Desain

Ronde 2 berskor lebih tinggi pada setiap ukuran agregat: SEQ rata-rata 6,75 vs 6,38 (Δ = +0,375, Cohen's *d* = 0,72), dan gain terbesar ada di T8 (+1,80), diikuti T2 (+0,80), T6 (+0,60), T7 (+0,60).

**Kami tidak membuat klaim kausal apa pun dari selisih ini**, dengan empat alasan independen:

1. ***Build* tidak berubah.** Tidak ada remediasi apa pun antar ronde. Efek desain menuntut perubahan desain.
2. **Varian antar ronde menyusut drastis.** SD per tugas turun dari 1,39 (ronde 1) menjadi 0,49 (ronde 2) — pengurangan 2,8×. Tiga dari lima peserta ronde 2 memberi 7 pada tujuh atau delapan dari delapan tugas.
3. **n = 5 per ronde, data ordinal, tanpa peng-randoman.** Tidak ada uji hipotesis yang dilaporkan, dan tidak ada yang dapat ditafsirkan.
4. **Sisa gain memiliki penjelasan banal.** T8, T2, T6, T7 justru empat tugas dengan rating terendah dan paling variabel di ronde 1.

Perbandingan ini dilaporkan karena menjadi bagian catatan sumber dan karena susutnya varian itu sendiri adalah temuan kualitas data.

### 4.7 Pembahasan

**Yang berhasil.** Struktur prototipe kokoh. Empat tugas — penemuan kategori berlabel baik, pembacaan harga, pemilihan tanggal, dan pengisian alamat — berada di atau dekat plafon tanpa dispersi berarti. Alur pemesanan mengikuti *mental model* yang lazim, dan peserta menavigasinya tanpa arahan. Peserta yang terbiasa dengan *e-commerce* langsung mengenali pola *checkout*.

Catatan penting: **T5 (form alamat) mencapai plafon (M = 6,90; SD = 0,32) meskipun tugas yang sama menghasilkan permintaan fitur terbanyak** — geocoding, autocomplete, alamat tersimpan. Formulir ini mudah diisi tetapi salah desain. Kemudahan pengisian dan kesesuaian tujuan adalah properti terpisah, dan hanya satu yang diukur SEQ.

**Tiga pola kegagalan.**

**Pola 1 — Lokal presentasi tidak cocok dengan lokal konten.** Antarmuka berbahasa Indonesia merender harga dalam dolar dan deskripsi layanan dalam bahasa Inggris tingkat teknisi. Ini cacat lokalisasi, bukan cacat salin: tidak ada string yang salah; lokalitasnya secara keseluruhan tidak koheren.

**Pola 2 — Infrastruktur yang hilang diperlakukan sebagai default yang dapat diterima.** Tidak ada peta, autocomplete, alamat tersimpan, riwayat pesanan, pemesanan ulang, kalender, permintaan waktu kustom, maupun chatbot.

**Pola 3 — Permukaan yang berulang dan bertentangan.** Dua pemilih tanggal yang berbeda; harga beranda yang berbeda dari katalog; dua bilah tracking dan QR code tanpa keterangan; tombol WhatsApp dan cetak ganda. Redundansi biasanya tidak berbahaya. Justru di sini ia merusak, karena ketika dua salinan suatu fakta berbeda, pengguna tidak dapat menentukan mana yang dipercayai — dan dalam konteks harga, mereka tidak akan mempercayai keduanya.

### 4.8 Implikasi Desain

| P | Temuan | Rekomendasi | Sev |
|---|---|---|---|
| **1** | Total ≠ jumlah rincian | Reproduksi segera; tambahkan invarian *build-time* yang menegaskan `total == layanan + biaya + pajak` untuk setiap layanan. Blokir rilis bila gagal. | **Critical** |
| **2** | USD di situs Indonesia; jargon teknisi | Lokalisasi mata uang ke IDR; tulis ulang taksonomi layanan dalam bahasa operasional awam; gabungkan entri layanan nyaris sinonim; hapus dokumentasi internal teknisi dari halaman pelanggan. | **Tinggi** |
| **3** | Kanal dukungan sulit ditemukan | Tampilkan aksi dukungan persisten dan berlabel eksplisit di *header*, bukan *footer*; beri label sebagai dukungan, bukan pemesanan; tambah kontak langsung; tambah pencarian FAQ dan FAQ per layanan. | **Tinggi** |
| **4** | State formulir hilang saat Back/reload | Persistensi state *checkout*; peringatan sebelum navigasi destruktif; tawarkan lanjutan pesanan belum selesai. | **Tinggi** |
| **5** | Alamat jalan tidak divalidasi; field wajib tidak ditandai | Validasi alamat jalan dengan ketentuan yang sama seperti kode pos; tandai field wajib dan opsional; jadikan apartemen opsional; ganti label "alamat layanan" menjadi "alamat rumah". | **Tinggi** |
| **6** | Dua pemilih tanggal yang berbeda | Sumber kebenaran tunggal untuk tanggal tersedia; render satu pemilih; pertahankan instansi kedua hanya sebagai *cross-check* baca-saja yang dijamin identik. | **Tinggi** |
| **7** | Tautan footer kembali ke beranda; kueri bertahan | Perbaiki *routing* footer; *reset* kueri pencarian saat dihapus dan saat navigasi. | **Sedang** |
| **8** | Kepadatan halaman konfirmasi | Ringkas menjadi ringkasan transaksi statis; pindahkan *tracking* ke riwayat pesanan; hapus aksi ganda; beri keterangan atau hapus QR code. | **Sedang** |
| **9** | Ukuran huruf dan kontras di bawah ambang | Naikkan ukuran huruf minimum ke 12 pt; naikkan kontras teks sekunder ke WCAG AA; verifikasi kontras render di browser nyata. | **Sedang** |
| **10** | Tanpa geocoding, alamat tersimpan, riwayat | Tambahkan pemilihan pin peta dan autocomplete alamat; simpan alamat berlabel (rumah/kantor); sediakan riwayat pesanan dengan pemesanan ulang. | **Sedang** |
| **11** | Layanan tidak ditemukan; penjadwalan kaku | Tambahkan jalur permintaan "layanan lain"; kalender penuh; rentang waktu kedatangan; permintaan waktu kustom. | **Rendah** |

Dua rekomendasi metodologis:

- **Tambahkan uji integritas harga ke *pipeline* pra-rilis.** Invarian otomatis untuk setiap layanan (P1) murah dan menangkap kelas cacat yang terlewat oleh inspeksi kode maupun pengukuran kemudahan.
- **Berhenti mengandalkan tingkat keberhasilan agregat dalam evaluasi formatif.** Tingkat keberhasilan 93,75% hidup berdampingan dengan cacat harga *Critical* dan kanal dukungan yang dinilai 1/7. Laporkan sebaran per tugas dan hasil *defect-probe*, bukan hanya total.

### 4.9 Spesifikasi Desain yang Benar-Benar Diimplementasikan

Nilai yang benar-benar ada pada kode prototipe kanonis, bukan spesifikasi rencana.

| Elemen UI | Nilai terimplementasi | Sumber |
|---|---|---|
| Warna primer | `#00000b` | `src/index.css`, dipakai pada CTA dan panel gelap |
| Aksen | `#0058bf` | Dipakai pada tautan aktif, status terpilih, dan tombol sekunder |
| Latar | `#f9f9f9` | Latar aplikasi |
| Tipografi | Inter | `index.html` dan `index.css` |
| Tata letak | Grid 12 kolom, jarak 24px | Gaya utility Tailwind |
| Tahapan pemesanan | 4 tahap: Ringkasan, Jadwal, Alamat, Bayar | `CheckoutScreen.tsx` |
| Katalog | 6 layanan, 6 kategori dapat difilter | `mockData.ts`, `ServicesCatalogScreen.tsx` |
| Mata uang | **USD — dikonfirmasi oleh respons peserta sebagai temuan T1** | `data/pricing.ts` |

**Tidak ada** palet `#1E3A5F`/`#FF6B35`, tidak ada tipografi Poppins, dan tidak ada tiga tingkat harga (Dasar, Komplit, Darurat) seperti pada versi draf sebelumnya.

## 5. KESIMPULAN DAN SARAN

Prototipe ini secara struktural kompeten: 93,75% keberhasilan tugas, kemudahan rerata 6,56/7, dan alur pemesanan yang familier. Kegagalannya terkonsentrasi dan dapat didiagnosis. Antarmuka mudah dioperasikan tetapi belum jujur: **total $198,00 yang baris rinciannya sendiri hanya berjumlah $111,50** adalah hasil definitif studi ini. Bersamanya terdapat lokal yang berbahasa Indonesia tetapi bermata uang Amerika, kanal dukungan yang terkubur di *footer*, *checkout* yang membuang *state* saat navigasi, dan dua pemilih tanggal yang tidak saling cocok.

Kesimpulan metodologis paling berguna adalah bahwa **kemudahan dan integritas adalah properti terpisah, dan antarmuka transaksional harus diukur pada keduanya**. Tingkat keberhasilan 93,75% kompatibel dengan cacat harga *Critical*.

### Prioritas tindak lanjut

1. **Reproduksi anomali harga** terhadap *build* yang diuji. Jika terkonfirmasi, langsung pasang invarian P1.
2. **Rekonsiliasi daftar peserta** dan terbitkan kembali data sumber di bawah satu daftar peserta yang dapat diaudit.
3. **Catat identitas *build* dan tanggal** untuk semua sesi berikutnya, dan jalankan ulang ronde yang hendak dipakai sebagai *baseline*.
4. **Kumpulkan demografi** sehingga kerangka generasional dapat didukung atau ditarik.
5. **Lengkapi dan dokumentasikan persetujuan serta etik**, termasuk retensi dan penghapusan rekaman yang sudah ada.
6. **Jalankan evaluasi pascaperbaikan** terhadap backlog §4.8, dengan tugas *defect-probe* (T6, T7) sebagai bukti utama dan T1/T3/T4/T5 dianggap jenuh.
7. **Ukur kepercayaan secara langsung** dengan instrumen tervalidasi, bila klaim kepercayaan mau dinyatakan.

## 6. ANCAMAN VALIDITAS

- **T-1 — Daftar peserta tidak konsisten antar sumber. [Tinggi]** Korpus naratif menamai sepuluh peserta; dua rekap SEQ menamai sebagian berbeda: empat nama beririsan, tiga hanya muncul di rekap, dan enam peserta naratif tidak punya rekaman SEQ. Kedua rekap ditutup dengan catatan untuk mengisi nama yang kurang — roster diketahui tidak lengkap. **Konsekuensi:** korpus SEQ dan korpus naratif tidak terkonfirmasi sebagai sepuluh orang yang sama; keduanya tidak digabungkan seolah-olah sama.
- **T-2 — Tidak ada identitas *build*, tanggal, maupun catatan moderator. [Tinggi]** Protokol mewajibkan pencatatan prototipe kanonis dan *hash*-nya sebelum sesi. Tidak ada catatan sesi yang memuatnya. Cacat yang tercatat dalam §4.5(c) menunjukkan *build* yang diuji kemungkinan besar mendahului remediasi audit. **Konsekuensi:** tidak ada hasil yang boleh dikaitkan pada prototipe saat ini.
- **T-3 — Demografi tidak tercatat; kelayakan Gen Z tidak dapat diverifikasi. [Tinggi]** Tidak ada sumber yang memuat usia, jenis kelamin, atau pekerjaan. **Konsekuensi:** untuk makalah yang bertema generasional, komposisi generasional sampel belum dapat ditetapkan.
- **T-4 — Persetujuan dan etik tanpa bukti. [Tinggi]** Protokol mewajibkan persetujuan dan clearance institusi sebelum rekrutmen; tidak ada catatan persetujuan, nomor clearance, atau bukti persetujuan di laporan mana pun. **Konsekuensi:** celah kepatuhan yang belum tertutup.
- **T-5 — Efek plafon membatasi empat tugas. [Sedang]** T1, T3, T4, T5 (SD ≤ 0,42) tidak dapat membedakan keadaan desain.
- **T-6 — Varian menyusut antar ronde. [Sedang]** SD ronde 2 (0,49) 2,8× lebih kecil dari ronde 1 (1,39). Penyebab tidak dapat dibedakan dari catatan yang tersedia.
- **T-7 — Korpus kualitatif adalah parafrasa observer, bukan transkrip. [Sedang]** Berkas rekaman tidak ada di repositori.
- **T-8 — Angka harga bersifat tidak langsung. [Sedang]** Anomali §4.4 bergantung pada transkripsi observer.
- **T-9 — Celah transkripsi sumber. [Rendah]** Satu rekap mencatat bahwa komentar seorang peserta terpotong dalam tangkapan layar dan perlu diperiksa ulang. Pemeriksaan itu belum dilakukan.
- **T-10 — Rujukan belum diverifikasi. [Rendah]** Lihat catatan verifikasi di bawah.

## 7. HASIL AUDIT HEURISTIK TERHADAP BUILD SAAT INI

Sebagai konteks, di luar hasil uji pengguna:

| Severity | Jumlah | Temuan utama |
|---|---:|---|
| Critical | 0 | Total pemesanan kini diturunkan dari layanan terpilih |
| Major | 2 | N1 konflik harga beranda vs katalog; N2 metode pembayaran tanpa indikator fokus keyboard |
| Minor | 4 | N3 tautan section andal; N4 aset peta mati; N5 ikon status bertentangan dengan teks; N6 tidak ada jalur pemesanan ulang |
| Good | 6 | Validasi per bidang, stepper berbasis status, dialog aksesibel, hash routing, konten detail per layanan, disclosure WhatsApp |

Tidak ada skor rerata, tidak ada persentase keberhasilan tugas, dan tidak ada kutipan peserta pada tabel ini. Audit kode **tidak mengukur pengalaman pengguna** dan tidak boleh dicampur dengan hasil §4.1–§4.4.

Rincian lengkap di [evaluasi 2026-10-02](../evaluation/profix-heuristic-evaluation-2026-10-02.md).

## DAFTAR PUSTAKA

> **Peringatan verifikasi.** Daftar proposal asli dan daftar draf ini memakai penomoran yang berbeda untuk karya yang berbeda, sehingga sitasi tidak dapat dipetakan secara langsung. Setiap entri berikut harus diverifikasi terhadap sumber aslinya sebelum pengajuan. Entri [12] ditandai **(perlu verifikasi)** dan **tidak boleh dipertahankan** tanpa konfirmasi penerbit.

1. Darmawan A, Prasetyo Y, Hartono S. Digital transformation of micro-enterprises in Indonesia: barriers and enablers. J Bus Innov Manag. 2023;7(2):112–28. doi:10.35595/jbim.v7i2.2145
2. Wijaya GE, Kuswoyo C. Pengaruh transparansi informasi dan desain antarmuka terhadap kepercayaan konsumen layanan jasa rumah tangga. J Inspirasi Bisnis Dan Manaj. 2024;8(1):45–60. doi:10.35595/jibm.v8i1.3012
3. Putri R, Handayani A, Siregar M. Generasi Z dan preferensi pengalaman digital: studi kasus platform layanan on-demand. J Psikol Konsumen. 2025;12(3):201–15. doi:10.58721/jpk.v12i3.489
4. Pratama IGJ, Ardani W, Putri IAS. Pemanfaatan platform digital sebagai sarana marketing dan branding ekonomi kreatif pasca-pandemi. Lensa Ilm J Manaj Dan Sumberd. 2022;3(1):28–42. doi:10.35595/lensa.v3i1.789
5. Dinata PZ, Urwah MA, Rahmawan MR, Junaeti E. Perancangan UI/UX web e-commerce menggunakan pendekatan user-centered design. Jambura J Inform. 2023;5(1):45–58. doi:10.34312/jji.v5i1.18923
6. Resti AA, Suharyati S, Rahmi M. Efforts to develop micro, small, and medium enterprises through education on branding, design, and financial statements. Community Empower. 2023;8(10):1480–6. doi:10.35595/pengabdikan.v8i10.3456
7. Sunarso B, Tusriyanto, Mustafa F. Analysing the role of visual content in increasing attraction and conversion in MSME digital marketing. J Contemp Adm Manag ADMAN. 2023;1(3):193–200. doi:10.34312/adman.v1i3.145
8. Norman DA. The design of everyday things: Revised and expanded edition. New York: Basic Books; 2013.
9. Hick WE. On the rate of gain of information. Q J Exp Psychol. 1952;4(1):11–26.
10. Miller GA. The magical number seven, plus or minus two. Psychol Rev. 1956;63(2):81–97.
11. Von Restorff H. Über die Wirkung von Bereichsbildungen im Spurenfeld. Psychol Forsch. 1933;18:299–342.
12. **(perlu verifikasi)** Entri sebelumnya menyebut "Hart J, Kapp K. The aesthetic-usability effect in service design: Evidence from Indonesian MSMEs. J Des Res Pract. 2021;5(3):210-24. doi:10.58721/jdrp.v5i3.112". Judul, nama jurnal, dan DOI tersebut tidak dapat diverifikasi. Periksa apakah karya ini benar-benar terbit sebelum mengutip.
13. Perdanakusuma AR, Hanggara BT, Hasnanursanti AR. Analisis usability website resmi pemerintah kota menggunakan metode heuristic evaluation. J TECNOSCIENZA. 2022;6(2):429–43. doi:10.35595/tecnoscienza.v6i2.2341
14. Febriyanthi A, Al E. Interface design heuristic evaluation website yayasan kesehatan Telkom. Turk J Comput Math Educ TURCOMAT. 2021;12(4):852–9. doi:10.17762/turcomat.v12i4.1234
15. Tianti AM, Firmania BN, Prini, Fanani RCP, Putri SE, Adisusilo AK. Peningkatan promosi usaha catering UMKM melalui pembuatan website berbasis WordPress. PENITI BANGSA. 2024;2(2):100–12. doi:10.58721/penitibangsa.v2i2.177

---

## Catatan untuk Penulis

1. **Angka yang sahih dan boleh dikutip:** 93,75% (75/80) dan 98,75% (79/80); SEQ M = 6,56, SD = 1,05; tabel per-tugas §4.2; taksonomi enam tema §4.3; anomali harga §4.4. Semua sudah dihitung ulang dari matriks SEQ mentah.
2. **Angka 87,5 / 4,20 / 84,6 / 4,23 tetap dilarang.** Tidak pernah dapat diturunkan dari sumber mana pun. Perhatikan bahwa 84,6% **bukan** tingkat keberhasilan terkoreksi (93,75%) dan 87,5% **bukan** angka mana pun pada tabel §4.1 — kemiripannya kebetulan dan tidak boleh dipakai untuk menghidupkan kembali keduanya.
3. **Tidak ada skor SUS** yang boleh dilaporkan; hanya satu kuesioner diberikan dan tidak ada respons terekam.
4. **Jangan mengutip ucapan peserta dalam tanda kutip.** Yang tersedia adalah parafrasa observer; berkas rekaman tidak ada di repositori.
5. **Jangan menulis "Gen Z" sebagai klaim sampel.** Gunakan "pengguna dewasa muda yang direkrut purposive" sampai demografi terkumpul.
6. **Jangan menyatakan hasil ini menggambarkan prototipe saat ini** sampai identitas *build* yang diuji ditemukan.
7. **Lampiran:** tangkapan layar build saat ini, daftar temuan audit, formulir persetujuan peserta dari `UT-plan/04-participant-information-and-consent.md`, dan bukti clearance etik.
8. Jejak audit angka lengkap ada di [`ut-results-integration.md`](ut-results-integration.md).