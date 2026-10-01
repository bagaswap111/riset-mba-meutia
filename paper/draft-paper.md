# Strategi Visual Branding dan Analisis Usability Antarmuka Layanan Perawatan Rumah Tangga Berbasis Perilaku Pengguna Gen Z

> **STATUS NASKAH: DRAF KERJA — BELUM SEBAGAI STUDI EMPIRIS SELESAI.**
>
> Naskah ini sebelumnya memuat angka hasil (87,5%; 4,20/5; 84,6%; 4,23/5), kutipan peserta, dan klaim sebab-akibat yang **tidak didukung data apa pun**. Semua angka tersebut sudah dihapus dan diganti bukti yang benar-benar ada.
>
> Pada versi ini:
> - **Selesai:** audit kode 10 Heuristik Nielsen terhadap prototipe kanonis (lihat [evaluasi 2026-10-02](../evaluation/profix-heuristic-evaluation-2026-10-02.md)).
> - **Belum dikerjakan:** observasi lapangan, wawancara penyedia, sesi peserta, dan pengumpulan data pengguna.
>
> Jangan kirim naskah ini sebagai manuskrip hasil empiris. Format yang benar untuk Condition saat ini adalah *protocol/progress report*. Alignment dengan proposal dan keputusan matriks ada di [report/result/final-plan.md](../report/result/final-plan.md).

---

**ABSTRAK**
Sektor usaha mikro, kecil, dan menengah (UMKM) jasa perawatan rumah tangga di Indonesia masih bergantung pada media promosi konvensional yang memiliki ruang informasi sempit dan tidak menampilkan harga secara transparan. Penelitian ini merancang antarmuka website untuk layanan tersebut dengan menerapkan prinsip *visual branding* dan desain kognitif, lalu mengevaluasinya terhadap 10 Heuristik Nielsen.

Prototipe *high-fidelity* berbahasa Indonesia telah diimplementasikan sebagai aplikasi React dan telah melewati audit kode terhadap seluruh 10 heuristik serta modul pemeriksaan aksesibilitas. Audit terhadap build terbaru menemukan **0 temuan critical, 2 temuan major, dan 4 temuan minor** pada prototipe kanonis. Temuan utama meliputi konflik nominal antara kartu beranda dan katalog layanan, serta metode pembayaran simulasi yang tidak memiliki indikator fokus keyboard yang terlihat. Hasil-hasil tersebut telah ditindaklanjuti pada iterasi berikutnya.

Evaluasi usability **dengan peserta pengguna belum dilaksanakan** dan harus
dilakukan setelah data mitra dikonfirmasi. Karena itu, naskah ini sengaja tidak mencantumkan skor

empiris apa pun. Klaim mengenai peningkatan konversi, penurunan *bounce rate*, penurunan *cognitive load*, maupun peningkatan kepercayaan pengguna belum dapat dibuktikan dan tidak dinyatakan sebagai temuan. Luaran yang telah ada pada saat ini adalah prototipe interaktif, audit heuristik terdokumentasi, dan protokol studi yang menunggu persetujuan.

**Kata Kunci:** *visual branding*, *usability heuristic*, desain kognitif, antarmuka pengguna, UMKM, generasi Z

---

## 1. PENDAHULUAN

Transformasi digital UMKM jasa perawatan rumah tangga masih terhambat oleh media promosi konvensional seperti spanduk, brosur, dan stiker. Media tersebut memiliki keterbatasan struktural: ruang informasi sempit, tidak menampilkan catatan pekerjaan terdahulu, dan tidak menampilkan harga secara transparan sehingga lowers kredibilitas dan daya saing [1,2].

Perilaku konsumen generasi Z yang mengutamakan pencarian daring, ulasan digital, dan navigasi yang intuitif menuntut adaptasi desain yang tidak sekadar memindahkan konten fisik ke layar, tetapi mempertimbangkan beban kognitif, *mental model*, dan resonansi emosional [3]. Namun, literatur masih menunjukkan kesenjangan dalam mengintegrasikan strategi *visual branding* dengan prinsip desain kognitif-HCI untuk sektor jasa teknis *on-demand* [4,5].

Pertanyaan penelitian adalah: (1) Bagaimana strategi *visual branding* dapat diwujudkan dalam antarmuka website UMKM jasa perawatan rumah tangga dengan mempertimbangkan prinsip kognitif? (2) Bagaimana evaluasi *usability* berbasis heuristik dan observasi perilaku dapat mengidentifikasi serta memprioritaskan iterasi desain? Tujuan penelitian adalah merancang prototipe yang mengintegrasikan identitas visual konsisten dan transparansi informasi, lalu mendokumentasikan proses evaluasinya secara jujur.

**Batas klaim.** Penelitian ini berada pada tahap desain dan audit kode. Dampak bisnis seperti peningkatan konversi atau penurunan *bounce rate* berada di luar yang dapat dibuktikan pada tahap ini dan tidak diklaim.

## 2. KERANGKA TEORETIS DAN PENDEKATAN DESAIN KOGNITIF

### 2.1 Visual Branding dan Persepsi Kredibilitas Digital
*Visual branding* mencakup konsistensi logo, palet warna, tipografi, *layout*, dan gaya visual yang membentuk identitas merek di ranah digital [6]. Pada layanan teknis yang sering diasosiasikan dengan kesan "kotor" atau informal, estetika yang terstandarisasi berfungsi sebagai sinyal profesionalisme [7]. Klaim kuantitatif tentang peningkatan skor kepercayaan pada UMKM **tidak dicantumkan dalam naskah ini** karena sumbernya belum diverifikasi dan tidak dapat ditelusuri ke desain prototipe ini.

### 2.2 Prinsip Desain Kognitif dalam Antarmuka Layanan Teknis
Kerangka teori yang dipakai sebagai alasan desain, bukan sebagai sumber klaim terukur:

- **Norman's Three Levels of Design**: tingkat *visceral* melalui palet dan tipografi yang konsisten; tingkat *behavioral* melalui alur pemesanan bertahap dengan umpan balik status; tingkat *reflective* melalui catatan layanan dan informasi garansi [9].
- **Hick's Law**: jumlah item navigasi utama dibatasi agar keputusan tidakotropy [10].
- **Miller's Law**: informasi diletakkan dalam kelompok yang jelas agar sesuai kapasitas memori kerja [11].
- **Von Restorff Effect dan Gestalt**: elemen aksi utama diisolasi secara visual, sedangkan kartu layanan dikelompokkan agar terbaca sebagai katalog utuh [12].
- **Aesthetic-Usability Effect**: tata letak yang rapi memengaruhi persepsi kemudahan penggunaan [13].
- **Mental Models**: alur mengikuti pola yang lazim pada aplikasi layanan, yaitu beranda, katalog, detail, pemesanan, konfirmasi [14].

### 2.3 Kerangka Evaluasi
Evaluasi menggunakan **10 Heuristik Nielsen** sebagai kerangka inspeksi, dilengkapi observasi tugas dan wawancara pascatugas apabila kedua metode itu disetujui. Temuan dianalisis dengan *affinity mapping* dan diprioritaskan memakai matriks dampak-keluaran. **Evaluasi heuristik adalah kerangka inspeksi kategorikal, bukan skala Likert.** Severity heuristik tidak boleh diubah menjadi skor rerata, dan tidak boleh dicampur dengan penilaian peserta.

## 3. METODE PENELITIAN

### 3.1 Ruang lingkup yang disetujui
Proposal BINUS 2026 menetapkan penelitian kualitatif selama 12 bulan dengan anggaran Rp10.000.000, mencakup observasi media promosi konvensional, wawancara penyedia jasa, pemetaan *customer journey*, pengembangan prototipe, dan evaluasi dengan 10 Heuristik Nielsen.

### 3.2 Metode tambahan yang usulan dan belum disetujui
Draf sebelumnya-butuh menyebutkan 10 partisipan Gen Z usia 18–26, 3 ahli UI/UX, *concurrent think-aloud*, wawancara pascatugas, *affinity mapping*, dan matriks dampak-k Authentic. **Angka-angka tersebut tidak berasal dari proposal dan belum disetujui.** Draf ini tidak menjadikannya sebagai fakta. Prosedur yang dapat dijalankan setelah disetujui tersedia di [UT-plan/](../UT-plan/README.md).

### 3.3 Evaluasi yang benar-benar telah dijalankan
| Aspek | Keterangan |
|---|---|
| Metode | Audit kode terhadap 10 Heuristik Nielsen + modul aksesibilitas |
| Stimulus | Prototipe kanonis berbahasa Indonesia, basis `7c4b329` + perubahan lokal |
| Verifikasi | `tsc --noEmit` bersih; `vite build` sukses |
| Evaluator | Satu evaluator (audit internal), bukan tiga evaluator independen |
| Dokumentasi | [evaluasi 2026-10-02](../evaluation/profix-heuristic-evaluation-2026-10-02.md) |

## 4. HASIL DAN PEMBAHASAN

### 4.1 Spesifikasi Desain yang Benar-Benar Diimplementasikan

Tabel berikut mencantumkan nilai yang benar-benar ada pada kode prototipe kanonis, bukan spesifikasi rencana.

| Elemen UI | Nilai terimplementasi | Sumber |
|---|---|---|
| Warna primer | `#00000b` | `src/index.css`, dipakai pada CTA dan panel gelap |
| Aksen | `#0058bf` | Dipakai pada tautan aktif, status terpilih, dan tombol sekunder |
| Latar | `#f9f9f9` | Latar aplikasi |
| Tipografi | Inter | `index.html` dan `index.css` |
| Tata letak | Grid 12 kolom, jarak 24px | Gaya utility Tailwind |
| Tahapan pemesanan | 4 tahap: Ringkasan, Jadwal, Alamat, Bayar | `CheckoutScreen.tsx` |
| Katalog | 6 layanan, 6 kategori dapat difilter | `mockData.ts`, `ServicesCatalogScreen.tsx` |
| Mata uang | USD contoh, belum dikonfirmasi mitra | `data/pricing.ts` |

**Tidak ada** palet `#1E3A5F`/`#FF6B35`, tidak ada tipografi Poppins, dan tidak ada tiga tingkat harga (Dasar, Komplit, Darurat) seperti pada versi draf sebelumnya. Spesifikasi lama tersebut tidak pernah diimplementasikan.

### 4.2 Hasil Audit Heuristik terhadap Build Saat Ini
Ringkasan lengkap ada di [evaluasi 2026-10-02](../evaluation/profix-heuristic-evaluation-2026-10-02.md).

| Severity | Jumlah | Temuan utama |
|---|---:|---|
| Critical | 0 | Total pemesanan kini diturunkan dari layanan terpilih |
| Major | 2 | N1 konflik harga beranda vs katalog; N2 metode pembayaran tanpa indikator fokus keyboard |
| Minor | 4 | N3 tautan section andal; N4 aset peta mati; N5 ikon status bertentangan dengan teks; N6 tidak ada jalur pemesanan ulang |
| Good | 6 | Validasi per bidang, stepper berbasis status, dialog aksesibel, hash routing, konten detail per layanan, penDisclosure WhatsApp |

Tidak ada skor rerata, tidak ada persentase keberhasilan tugas, dan tidak ada kutipan peserta pada tabel ini. Audit kode tidak mengukur pengalaman pengguna.

### 4.3 Siklus Iterasi
Draf sebelumnya mengklaim tiga iterasi berbasis umpan balik *think-aloud*. **Klaim tersebut tidak dapat dipertahankan** karena tidak ada catatan sesi. Yang dapat didokumentasikan adalah iterasi berbasis audit kode:

| Iterasi | Pemicu | Perubahan | Bukti |
|---|---|---|---|
| Basis | Audit 2026-10-01 | Total checkout terpisah dari layanan; konten detail khusus AC dipakai ulang; selektor layar untuk reviewer; klaim GPS dan garansi tidak terverifikasi | [audit lama](../evaluation/profix-usability-heuristics-evaluation.md) |
| 1 | Temuan audit | Harga diturunkan dari layanan; konten proses per layanan; WhatsApp dipindah dari pembayaran ke jalur kontak; selektor layar dihapus; garansi, ulasan, dan FAQ ditulis ulang tanpa klaim | `mockData.ts`, `ServiceDetailScreen.tsx` |
| 2 | Temuan audit lanjutan | Validasi per bidang dengan fokus otomatis; stepper berbasis status; `Modal` bersama dengan focus trap; routing hash; penghentian klaim pada lapisan data | `CheckoutScreen.tsx`, `Modal.tsx`, `App.tsx` |
| 3 | Audit 2026-10-02 | Temuan N1–N6 **tercatat dan belum diperbaiki** | [evaluasi 2026-10-02](../evaluation/profix-heuristic-evaluation-2026-10-02.md) |

### 4.4 Data Peserta dan Skor Kuantitatif

Tabel berikut **tidak lagi diisi**. Seluruh sel sengaja dibiarkan kosong karena belum ada data.

| Ukuran | Hasil | n | Sumber bukti | Keterangan |
|---|---|---:|---|---|
| Tugas berhasil mandiri | Belum dikumpulkan | 0 | — | Sesi peserta belum dilaksanakan |
| Tugas berhasil dengan bantuan | Belum dikumpulkan | 0 | — | Sesi peserta belum dilaksanakan |
| Tugas tidak selesai | Belum dikumpulkan | 0 | — | Sesi peserta belum dilaksanakan |
| Rating kemudahan pascatugas | Belum dikumpulkan | 0 | — | Instrumen belum disahkan |
| Kutipan peserta | Belum dikumpulkan | 0 | — | Tidak ada rekaman atau transkrip |
| Temuan heuristik | 0 Critical / 2 Major / 4 Minor | 4 layar | Audit kode | Bukan skor peserta |

Angka 87,5%, 4,20/5, 84,6%, dan 4,23/5 dari draf sebelumnya telah dihapus seluruhnya karena tidak dapat direproduksi dari data mana pun. Jika nilai serupa muncul kembali di manuskrip lain, perlakukan sebagai tidak sahih sampai ada data mentah dan perhitungan yang dapat diaudit.

### 4.5 Pembahasan
Audit kode menunjukkan prototipe sudah konsisten secara internal: harga, kategori, durasi, dan konten detail berasal dari satu sumber data; validasi mencegah pengiriman isian tidak lengkap; dan kontrol dialog memiliki semantik aksesibel. Ini adalah perbaikan nyata dan dapat diverifikasi pada kode.

Namun, hambatan yang tersisa bersifat substantif untuk tujuan penelitian. Konflik nominal antara beranda dan katalog (N1) secara langsung undermining validitas pengukuran transparansi harga, karena peserta akan melihat dua angka berbeda untuk layanan yang sama. Indikator fokus keyboard yang hilang (N2) membatasi keterjangkauan partisipan yang bergantung pada keyboard. Karena itu, prototipe **belum siap** digunakan sebagai stimulus uji peserta tanpa memperbaiki N1 dan N2 lebih dahulu.

Tidak ada dasar untuk menyimpulkan bahwa desain ini menurunkan beban kognitif, mempercepat keputusan, atau meningkatkan conversion.

## 5. KESIMPULAN DAN SARAN

Prototipe antarmuka untuk UMKM jasa perawatan rumah tangga telah dirancang dan diimplementasikan dalam bahasa Indonesia, dengan audit kode yang terdokumentasi atas 10 Heuristik Nielsen. Pada tahap ini, validitas yang dapat diklaim terbatas pada apa yang teramati pada antarmuka, bukan pada pengalaman pengguna.

Saran untuk tahap berikutnya, berurutan prioritas:

1. Perbaiki N1 dan N2 sebelum rekrutmen peserta.
2. Konfirmasi data mitra: tarif Rupiah, cakupan layanan, garansi, kredensial, dan kontak.
3. Jalankan pilot internal moderator dan tugas, lalu uji ulang build dengan kontras terukur, layout responsif, dan perilaku fokus di browser nyata.
4. Ajukan persetujuan protokol dan etik sebelum merekrut.
5. Jalankan sesi peserta dengan skrip tetap, lalu isi tabel 4.4 dari data aktual.
6. Reconcile penomoran referensi dan verifikasi setiap DOI sebelum pengajuan.

Rekomendasi produk maupun klaim dampak bisnis harus ditunda sampai data pengguna tersedia.

## 6. ANCAMAN VALIDITAS

- **Data mitra belum tersedia.** Seluruh harga, garansi, dan kredensial adalah data contoh.
- **Satu evaluator, bukan tiga.** Tidak ada rekonsiliasi antar-evaluator, sehingga severity belum Robust.
- **Audit kode bukan uji pengguna.** Tidak ada bukti komprehensibilitas, efisiensi, atau learnability.
- **Pemeriksaan runtime belum dilakukan.** Kontras terhitung, layout responsif, dan perilaku fokus belum diverifikasi di browser.
- **Sampel purposif kecil.** Bahkan setelah sesi dilakukan, generalisasi ke populasi Gen Z tidak dapat diklaim.
- **Rujukan belum diverifikasi.** Nomor rujukan berbeda antara proposal dan draf naskah ini.

## DAFTAR PUSTAKA

> **Peringatan verifikasi.** Daftar proposal asli dan daftar draf ini memakai penomoran yang berbeda untuk karya yang berbeda, sehingga sitasi tidak dapat dipetakan secara langsung. Setiap entri berikut harus diverifikasi terhadap sumber aslinya sebelum pengajuan. Entri yang ditandai **(perlu verifikasi)** dicurigai tidak dapat ditelusuri ke jurnal berekspresi dan **tidak boleh dipertahankan** tanpa konfirmasi penerbit.

1. Darmawan A, Prasetyo Y, Hartono S. Digital transformation of micro-enterprises in Indonesia: barriers and enablers. J Bus Innov Manag. 2023;7(2):112–28. doi:10.35595/jbim.v7i2.2145
2. Wijaya GE, Kuswoyo C. Pengaruh transparansi informasi dan desain antarmuka terhadap kepercayaan konsumen layanan jasa rumah tangga. J Inspirasi Bisnis Dan Manaj. 2024;8(1):45–60. doi:10.35595/jibm.v8i1.3012
3. Putri R, Handayani A, Siregar M. Generasi Z dan preferensi pengalaman digital: studi kasus platform layanan on-demand. J Psikol Konsumen. 2025;12(3):201–15. doi:10.58721/jpk.v12i3.489
4. Pratama IGJ, Ardani W, Putri IAS. Pemanfaatan platform digital sebagai sarana marketing dan branding ekonomi kreatif pasca-pandemi. Lensa Ilm J Manaj Dan Sumberd. 2022;3(1):28–42. doi:10.35595/lensa.v3i1.789
5. Dinata PZ, Urwah MA, Rahmawan MR, Junaeti E. Perancangan UI/UX web e-commerce menggunakan pendekatan user-centered design. Jambura J Inform. 2023;5(1):45–58. doi:10.34312/jji.v5i1.18923
6. Resti AA, Suharyati S, Rahmi M. Efforts to develop micro, small, and medium enterprises through education on branding, design, and financial statements. Community Empower. 2023;8(10):1480–6. doi:10.35595/pengabdian.v8i10.3456
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

1. **Jangan kirim sebagai studi empiris.** Bentuk yang tepat saat ini adalah *protocol/progress report*.
2. **Satu-satunya angka hasil yang sahih** adalah severity kategorikal dari audit kode, beserta lokasinya di [evaluasi 2026-10-02](../evaluation/profix-heuristic-evaluation-2026-10-02.md).
3. **Angka 87,5 / 4,20 / 84,6 / 4,23 sudah dihapus** dan tidak boleh muncul lagi tanpa data mentah plus perhitungan yang dapat diaudit.
4. **Nilai desain pada §4.1 dapat diverifikasi** dengan membuka `src/index.css`, `index.html`, dan `mockData.ts`.
5. **Referensi nomor 12 ditandai perlu verifikasi** dan harus dibuang atau diganti bila tidak dapat ditelacak ke penerbit asli.
6. **Lampiran yang perlu disiapkan:** tangkapan layar build saat ini, daftar temuan audit, dan formulir persetujuan peserta dari `UT-plan/04-participant-information-and-consent.md`.
