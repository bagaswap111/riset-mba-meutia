# Skenario Uji Usability dan Langkah Sesi — ProFix Gen Z

**Versi dokumen:** 0.1, draf operasional
**Tanggal:** 2026-10-04
**Status:** Draf. **Belum disetujui untuk sesi formal.** Dokumen ini adalah perluasan operasional dari tabel tugas di `02-moderator-and-participant-materials.md` bagian F; ia tidak menggantikan protokol, persetujuan, atau rekrutmen. Rekrutmen tetap memerlukan persetujuan tim, mitra, dan unit etik/riset BINUS.

---

## 1. Kedudukan Dokumen Ini

| Dokumen | Isi | Hubungan dengan dokumen ini |
|---|---|---|
| `01-study-protocol.md` | Tujuan, pertanyaan riset, sampel, rancangan sesi, analisis | Menetapkan durasi dan urutan fase yang diikuti bagian 5 |
| `02-moderator-and-participant-materials.md` | Skrip pembuka, persetujuan, screener, tabel tugas T1–T8, wawancara | **Sumber resmi ID tugas dan kriteria selesai.** Teks di sini tidak boleh mengubahnya |
| `03-evaluator-and-analysis-kit.md` | Form heuristik, lembar observasi, kode awal, sintesis | Form hasil sesi diisi di sini; kode observasi mengikuti bagian D |
| `04-participant-information-and-consent.md` | Informasi peserta, persetujuan | Dipergunakan pada Fase 1 tanpa modifikasi |
| `05-recruitment-and-screening-kit.md` | Rekrutmen, screener, alamat latihan | Alamat latihan pada bagian G adalah satu-satunya yang boleh diketik peserta |
| `06-prototype-build-manifest.md` | Build kanonis, katalog, rekonsiliasi tugas | Menetapkan label UI yang dipakai pada langkah-langkah di bawah |

Dokumen ini menjawab satu pertanyaan yang belum dijawab berkas lain: **urutannya apa, kata per kata apa yang dibacakan, dan apa yang diamati pada setiap langkah.**

Bila label UI yang tertulis di dokumen ini tidak lagi ada pada build saat sesi, berlaku aturan rekonsiliasi pada `06-prototype-build-manifest.md` bagian 4: **perbarui skrip sebelum sesi, jangan improvisasi saat sesi berlangsung.**

---

## 2. Dua Mode Pelaksanaan

Kerangka yang sama dipakai dalam dua mode. Bedanya hanya pada data layanan dan dari mana hasilnya boleh dipakai.

| Aspek | Mode A — Uji coba internal (pilot) | Mode B — Sesi formal |
|---|---|---|
| Tujuan | Melatih moderator, memvalidasi langkah dan waktu, mengecek perangkat | Mengumpulkan data penelitian |
| Stimulus | Build kanonis saat ini dengan data contoh USD | Build kanonis dengan tarif, cakupan, dan kontak yang sudah dikonfirmasi mitra |
| Data layanan | USD contoh, berlabel simulasi | Rupiah, dikonfirmasi mitra, tetap dilabeli sebagai data prototipe bila belum ada sistem nyata |
| Jumlah peserta | Satu sampai dua orang dari tim, tidak dihitung sebagai sampel | Peserta yang memenuhi kriteria `05` bagian D |
| Rekaman | Sebaiknya tidak | Hanya bila persetujuan perekaman pada `04` bagian 3 terisi |
| Boleh dilaporkan sebagai hasil riset | **Tidak** | Ya, setelah persetujuan dan analisis |
| Prasyarat | Pemeriksaan tipe dan build bersih | Semua butir pada `06` bagian 6 tertutup |

Aturan yang tidak dapat ditawar:

- **Jangan menjalankan Mode B selama tarif, cakupan, atau kontak mitra masih berupa data contoh.** Tugas T3 dan T5 secara langsung mengukur pemahaman harga dan pemesanan; mengukurnya dengan angka USD yang tidak masuk akal bagi pengguna Indonesia menghasilkan data yang tidak valid.
- Hasil Mode A **tidak boleh** masuk tabel hasil manuskrip, tidak boleh dihitung dalam `n`, dan tidak boleh dikutip.
- Pemisahan data Mode A dan Mode B harus benar-benar terpisah pada penyimpanan berkas.

---

## 3. Skenario Utama

### 3.1 Karakter fiktif sebagai acuan skrip

> **Peringatan:** karakter di bawah adalah **persona rekaan untuk menjaga skrip tetap**. Ia bukan identitas peserta, bukan contoh rekrutmen, dan tidak boleh dicatat pada lembar analisis. Data peserta tetap memakai kode `P__`.

- Nama skrip: **Rina** (dipakai moderator hanya agar skrip punya rujukan; tidak diucapkan kepada peserta).
- Usia 22 tahun, tinggal di rumah kontrakan di **Kota Contoh**.
- Kondisi: satu unit AC sudah empat tahun tidak pernah dibersihkan. Berdasarkan pengalaman pengguna, AC yang tidak dingin sering disertai kebutuhan servis pembersihan.
- Riwayat: ia sudah pernah mencari tukang AC di media sosial tetapi belum pernah menyelesaikan pemesanan secara daring.
- Perangkat: ponsel.

Karakter ini hanya untuk memastikan urutan tugas masuk akal. Jika peserta memakai perangkat atau situasi berbeda, **jangan mengoreksi**; catat perangkat sebenarnya pada `05` bagian F.

### 3.2 Narasi yang dibacakan sebagai pembuka skenario

Bacakan paragraf ini **setelah** think-aloud diperkenalkan, dan **sebelum** T1:

> Bayangkan Anda sedang menghadapi satu masalah di rumah. AC di ruang tidur Anda sudah tidak terasa dingin sejak kemarin, dan Anda memutuskan untuk mencari bantuan agar tidak makin rusak. Sepanjang sesi ini, anggap saja website ini adalah website yang akan Anda pakai sungguhan. Kami ingin tahu bagaimana website ini menampilkan pilihan, harga, jadwal, dan pemesanan bagi Anda.
>
> Silakan lanjutkan pada apa yang terlihat di layar dan ucapkan setiap keraguan Anda dengan sendirinya. Saya hanya akan menjawab apabila Anda bertanya atau benar-benar tidak dapat melanjutkan.

Jangan menambahkan kalimat penutup yang mengarahkan, seperti "silakan klik tombol pemesanan". Jika peserta bertanya "harus sampai mana?", jawab: "Silakan sampai Anda merasa selesai atau tidak dapat dilanjutkan."

### 3.3 Peta perjalanan cerita ke tugas

| Tahap cerita | Layar yang dilalui | Tugas |
|---|---|---|
| Mencari bantuan untuk AC yang tidak dingin | `#home` lalu `#services` lalu `#detail` | T1 |
| Menemukan bantuan untuk tanda kebocoran | `#services` | T2 |
| Menilai apakah informasinya cukup untuk memutuskan | `#detail` | T3 |
| Menentukan kapan teknisi boleh datang | `#detail` lalu `#checkout` | T4 |
| Mengisi data supaya pesanan bisa dibuat | `#checkout` | T5 |
| Menangani isian yang tidak bisa diterima | `#checkout` | T6 |
| Menoleh ke layanan lain tanpa kehilangan isi | `#checkout` atau `#confirmation` lalu `#services` | T7 |
| Mencari bantuan atau cara menghubungi penyedia | Beranda, FAQ, atau `#tracking` | T8 |

Satu alur, bukan delapan tugas terpisah. **Jangan jadikan pemisah tugas.** Jika peserta bertanya "ini tugas berikutnya, bukan?", jawab: "Silakan diteruskan saja seperti biasanya."

### 3.4 Informasi yang sengaja tidak diberikan

Agar data tetap valid, moderator **tidak boleh** menyebut hal berikut, kecuali peserta menanyakannya lebih dulu:

- Nama layanan yang benar (`Pembersihan AC Mendalam`, `Deteksi Kebocoran Pintar`).
- Nama kategori filter (`Reparasi AC`, `Plumbing`).
- Keberadaan kolom pencarian, filter kategori, atau tombol pemesanan tertentu.
- Nilai harga, durasi, slot waktu, atau biaya platform.
- Jumlah langkah checkout, nama langkahnya, atau field mana yang wajib.
- Bahwa WhatsApp tidak benar-benar mengirim pesan.

Kalau peserta menemukannya sendiri, itulah data yang dicari.

### 3.5 Kelompok tugas

`02` bagian F menetapkan T1 sampai T8. Tugas tersebut tidak diubah, hanya dikelompokkan agar mudah dikelola:

| Blok | Tugas | Alasan pengelompokan |
|---|---|---|
| A — Penemuan | T1, T2 | Peserta mencari, bukan diberikan daftar |
| B — Penilaian | T3 | Peserta menilai kecukupan informasi |
| C — Penyelesaian | T4, T5, T6 | Alur pemesanan simulasi |
| D — Kontrol | T7 | Kemampuan kembali tanpa kehilangan isi |
| E — Dukungan | T8 | Mencari bantuan dan jalur kontak |

Seluruh T1 sampai T8 wajib dijalankan. Bila waktu mepet, pangkas **wawancara pascatugas**, bukan tugas. Jangan melewati tugas hanya karena peserta tampak ingin terburu-buru.

---

## 4. Prasyarat Sebelum Sesi (Lembar Persiapan Sesi)

Semua butir harus tercentang **sebelum** peserta masuk. Kalau ada butir yang gagal, sesi ditunda, bukan diperbaiki saat peserta menunggu.

- [ ] Persetujuan protokol, rekrutmen, consent, perekaman, retensi, dan kutipan sudah disetujui tertulis.
- [ ] Wilayah studi, daftar mitra, dan izin mewawancara sudah dikonfirmasi.
- [ ] Tarif, cakupan biaya, pajak, garansi, kredensial, dan kontak mitra sudah dikonfirmasi (khusus Mode B).
- [ ] Build kanonis diidentifikasi dengan commit **dan** hash aset atau stempel waktu; dicatat di `06-prototype-build-manifest.md`.
- [ ] `node ".\node_modules\typescript\bin\tsc" --noEmit` menghasilkan output bersih dan hasilnya disimpan.
- [ ] `node ".\node_modules\vite\bin\vite.js" build` sukses dan hasilnya disimpan.
- [ ] Build disajikan lewat server lokal dari `dist/`, bukan dari berkas portabel di `portable/`.
- [ ] Jaringan dimatikan atau dibatasi setelah aset termuat, sehingga ketergantungan CDN tidak mengotori observasi.
- [ ] Browser, versi, zoom, dan viewport dicatat.
- [ ] Alamat latihan dari `05` bagian G sudah siap tertulis dan dapat dibaca peserta.
- [ ] Formulir `04` sudah dicetak dan siap ditandatangani.
- [ ] Lembar observasi `03` bagian B sudah dicetak per peserta.
- [ ] Satu moderator dan satu pencatat hadir; peran tidak digabung.
- [ ] Perekam layar dan suara sudah diuji dan tidak merekam layar lain.
- [ ] Sesi Mode A sudah pernah dijalankan penuh minimal satu kali oleh moderator yang sama.

### 4.1 Konfigurasi build yang perlu dicatat per sesi

| Field | Nilai |
|---|---|
| Prototipe | `profix---professional-home-services` |
| Folder output | `dist/` |
| Hash aset | `index-DqUao7Pm.css`, `index-LgSuVEvd.js` |
| Rute yang boleh dibuka langsung | `#home`, `#services`, `#detail`, `#checkout`, `#auth` |
| Rute terlarang dibuka langsung | `#confirmation` dan `#tracking`, dialihkan bila belum ada pesanan |
| Viewport | catat perangkat nyata yang dipakai peserta |

Mulailah setiap sesi dari `#home` dengan cache baru. Prototipe tidak menyimpan keadaan apa pun di `localStorage`, sehingga sesi sebelumnya tidak akan terbawa, sekaligus membuat `#confirmation` dan `#tracking` terkunci di awal sesi.

---

## 5. Urutan Sesi (Langkah demi Langkah)

Total 40 sampai 50 menit sesuai `01` bagian 5. Waktu di bawah adalah target, bukan aturan keras. Yang tidak boleh dipotong adalah persetujuan dan debrief.

| Fase | Menit | Isi | Borang |
|---|---:|---|---|
| 0. Persiapan moderator | 15 sebelum sesi | Verifikasi build, perangkat, borang, alamat latihan | Lembar persiapan sesi bagian 4 |
| 1. Pembuka dan persetujuan | 5 | Skrip A pada `02`, persetujuan `04` bagian 2 dan 3 | `04` |
| 2. Profil singkat | 3 sampai 5 | Perangkat, pengalaman, frekuensi | `05` bagian F |
| 3. Aturan think-aloud | 2 | Instruksi `02` bagian E | Tidak ada |
| 4. Tugas T1 sampai T8 | 20 sampai 25 | Skenario penuh, delapan tugas | `03` bagian B dan C |
| 5. Wawancara pascatugas | 8 sampai 10 | `02` bagian G | `02` bagian G |
| 6. Penutupan dan debrief | 2 sampai 3 | `02` bagian H, konfirmasi penghapusan | `04` bagian 4 |

### 5.1 Fase 0 — Persiapan moderator (sebelum peserta masuk)

1. Verifikasi build sesuai bagian 4. Simpan keluarannya ke berkas sesi.
2. Sajikan `dist/index.html` lewat server lokal. Contoh: `npx serve dist -l 4173` atau `npm run preview`.
3. Buka `http://localhost:4173/#home` pada viewport yang akan dipakai peserta.
4. Muat sekali penuh untuk memastikan font Inter, ikon Material Symbols, dan gambar sudah tampil. Setelah itu, **matikan jaringan**.
5. Uji sambungan pemutaran pada tab baru, lalu tutup tab uji.
6. Isi header lembar observasi: participant ID `P__`, tanggal, versi build, moderator, pencatat, perangkat, viewport.
7. Siapkan dua profil browser bersih: satu untuk sesi, satu sebagai cadangan bila perlu mengembalikan keadaan.
8. Cetak lembar observasi, formulir `04`, dan alamat latihan.

### 5.2 Fase 1 — Pembuka dan persetujuan (5 menit)

1. Baca **Skrip Pembuka Moderator** pada `02` bagian A **persis seperti tertulis**. Jangan menambahkan penyambungan sendiri.
2. Tunggu jawaban peserta terhadap pertanyaan "Apakah ada pertanyaan sebelum kita mulai?"
3. Jelaskan bahwa perekaman adalah pilihan terpisah dan menolak tidak membatalkan keikutsertaan.
4. Isi `04` bagian 2 (persetujuan partisipasi). Peserta harus mencentang **"Saya bersedia ikut serta dalam sesi ini."** sebelum lanjut. Bila tidak, sesi **tidak** dilanjutkan; catat sebagai penolakan sesuai `05` bagian C.
5. Isi `04` bagian 3 (persetujuan perekaman) hanya bila perekaman diusulkan. Isi eksplisit **ya atau tidak**; jangan biarkan kosong.
6. Isi `04` bagian 4 (persetujuan kutipan) secara terpisah.
7. Bacakan checklist `04` bagian 5 bersama peserta secara lisan.
8. Sampaikan cara menghentikan sesi: "Anda bisa bilang berhenti kapan saja, dan sesi akan langsung dihentikan."

### 5.3 Fase 2 — Profil singkat (3 sampai 5 menit)

Ajukan pertanyaan profil dari `02` bagian D, lalu isi `05` bagian F. Pertanyaan yang boleh diajukan:

- "Perangkat apa yang akan Anda pakai hari ini?"
- "Pernah mencari layanan perbaikan rumah seperti ini? Belum pernah, pernah mencari, pernah memesan, atau beberapa kali?"
- "Kalau pernah, seberapa sering? Sekali, beberapa kali, sering, atau tidak ingat?"

Dilarang menanyakan nama, nomor telepon, alamat rinci, nomor identitas, nama tempat kerja, atau pengalaman kerja. Bila peserta menawarkan data pribadi, terima dengan singkat, jangan diulang, dan jangan dicatat.

### 5.4 Fase 3 — Aturan think-aloud (2 menit)

Baca **Instruksi Think-Aloud** pada `02` bagian E. Lalu berikan tiga aturan teknis:

1. "Ucapkan saja apa yang ada di pikiran Anda, termasuk kalau Anda ragu."
2. "Kalau saya diam, itu karena saya sedang mendengarkan, bukan karena saya menunggu Anda menjawab."
3. "Kalau saya bertanya 'Apa yang sedang Anda pikirkan?', itu bukan pertanda jawaban Anda salah. Saya memang tidak tahu jawabannya."

**Protokol bantuan.** Tiga tingkat, sesuai `02` bagian E. Catat kode yang dipakai:

| Kode | Tingkat | Contoh kalimat moderator |
|---:|---|---|
| 0 | Tidak dibantu | Diam |
| 1 | Prompt netral | "Apa yang sedang Anda pikirkan?" · "Apa yang Anda cek sekarang?" |
| 2 | Prompt eksplorasi | "Apa yang Anda cari di sini?" · "Kalau ini layanan sungguhan, apa lagi yang perlu Anda lihat?" |
| 3 | Bantuan langsung | Menyebut letak kontrol. **Hanya** bila sesi tidak dapat dilanjutkan |

Setiap bantuan dicatat bersama waktu dan kalimat yang benar-benar diucapkan. **Jangan menuliskan kalimat moderator sebagai kutipan peserta.**

### 5.5 Fase 4 — Tugas T1 sampai T8

Rincian tiap tugas ada pada bagian 6. Alur moderator:

1. Baca **satu** kalimat skenario untuk satu tugas. Beri jeda. Jangan mengulanginya.
2. Diam. Biarkan peserta bekerja. Jika hening lebih dari 15 detik, gunakan kode 1.
3. Intervensi hanya dengan kode 1 atau 2.
4. Saat peserta menyatakan selesai atau jelas macet, kembalikan kontrol: "Terima kasih. Mari kita lihat bagian berikutnya."
5. Isi lembar observasi **sebelum** pindah ke tugas berikutnya, bukan setelah seluruh sesi.
6. Bila tugas gagal, **jangan** mengulanginya. Catat `gagal` beserta alasan, lalu lanjutkan.

### 5.6 Fase 5 — Wawancara pascatugas (8 sampai 10 menit)

Baca pertanyaan dari `02` bagian G dengan urutan berikut. Ajukan seluruhnya; jangan memotong karena waktu, dan jangan menambah pertanyaan baru di tempat.

1. "Bagian mana yang paling mudah dipahami? Apa yang membuatnya mudah?"
2. "Di bagian mana Anda ragu atau berhenti? Apa yang Anda harapkan?"
3. "Sebelum Anda bersedia memesan sungguhan, informasi apa yang perlu Anda lihat?"
4. "Apakah harga, biaya tambahan, dan status simulasi dipahami dengan jelas? Kenapa?"
5. "Apakah istilah dan kategori layanannya sama dengan kata yang biasa Anda pakai?"
6. "Apa yang Anda pahami tentang status teknisi, pembayaran, WhatsApp, dan bukti pemesanan?"
7. "Apakah ada informasi yang terasa tidak relevan atau terlalu meyakinkan?"
8. "Seberapa yakin Anda (1 sampai 5) bahwa Anda dapat menyelesaikan tugas serupa pada layanan nyata? 1 berarti tidak yakin, 5 berarti sangat yakin."
9. "Apa satu perubahan paling penting yang Anda sarankan?"

Aturan pencatatan:

- Tulis jawaban sedekat mungkin dengan ucapan peserta.
- Kutipan langsung **hanya** bila ada rekaman atau transkrip yang mendukung.
- **Jangan** mengubah catatan moderator menjadi kalimat langsung.
- Pertanyaan 8 adalah satu-satunya item berskala angka di seluruh instrumen. Catat item, jangkar, dan nilainya apa adanya. **Jangan** mengubahnya menjadi skor heuristik.
- Bila peserta menjawab "tidak tahu" pada pertanyaan 8, tulis `tidak tahu`; **jangan** mengarang angka.

### 5.7 Fase 6 — Penutupan dan debrief (2 sampai 3 menit)

1. Baca **Debrief** pada `02` bagian H.
2. Tegaskan sekali lagi bahwa tidak ada transaksi, akun, teknisi, ulasan, garansi, atau pelacakan nyata.
3. Tanyakan ulang izin kutipan hanya bila pada sesi awal peserta mengizinkan, dan hanya bila tersedia rekaman.
4. Tanyakan apakah peserta ingin menarik datanya, dan jelaskan prosedurnya secara lisan. Catat permintaannya, jangan mengeksekusinya di depan peserta.
5. Konfirmasi jadwal penghapusan rekaman sesuai keputusan pada `04` bagian 3.
6. Serahkan sesuatu sesuai naskah undangan pada `05` bagian B. Jangan menambahkannya di luar naskah itu.
7. Ucapkan terima kasih. Jangan memberi ringkasan hasil atau penilaian desain kepada peserta.

---

## 6. Rincian Langkah Tiap Tugas

Setiap tugas memuat: skenario yang dibacakan, langkah moderator, kriteria selesai dari `02` bagian F, poin observasi, dan kondisi build yang sudah diketahui.

**Konvensi:** bagian "perilaku yang diharapkan" adalah perilaku yang **diasumsikan**, bukan yang harus muncul. Moderator tidak boleh membimbing menuju perilaku tersebut.

---

### T1 — Mencari layanan yang tepat untuk AC yang tidak dingin

**Kelompok:** A, Penemuan · **Alokasi:** 3 menit · **Layar awal:** `#home`

**Skenario yang dibacakan:**

> "AC di rumah Anda tidak lagi terasa dingin. Cari layanan yang menurut Anda sesuai dan jelaskan informasi apa yang membuat Anda memilihnya."

**Kriteria selesai (dari `02` F):** Membuka layanan AC atau menyatakan tidak menemukan atau kurang yakin; dapat menjelaskan cakupan yang dibaca.

**Langkah moderator:**

1. Baca skenario. Beri jeda.
2. Diam. Catat apakah peserta mulai dari header, hero, atau menggulir halaman.
3. Bila peserta mencari dan mentok di kotak `Cari layanan...` di header pada viewport sempit, **jangan** tunjukkan alternatif; biarkan ia menemukannya sendiri. Catat sebagai hambatan penemuan.
4. Bila peserta sudah sampai di katalog dan langsung melihat filter kategori, biarkan ia memilih sendiri.
5. Saat peserta berhenti di salah satu kartu, tanyakan: "Apa yang membuat Anda berhenti di sini?" Pertanyaan ini bagian dari kriteria selesai, bukan pertanyaan tambahan.
6. Bila peserta tidak pernah sampai ke katalog sama sekali, biarkan. Kegagalan pada T1 dicatat apa adanya.

**Poin observasi:**

| Yang diamati | Kode 03 D | Heuristik |
|---|---|---|
| Kata kunci yang diketik peserta dibanding kata yang tersedia di katalog | `SERVICE_FINDABILITY`, `TERMINOLOGY` | H6 |
| Durasi pencarian sebelum menemukan kandidat | `SERVICE_FINDABILITY` | H7 |
| Alasan pemilihan: harga, nama, gambar, atau kategori | `PRICE_TRUST`, `TRUST_CLAIM` | H2 |
| Apakah label kategori `Reparasi AC` dipahami sebagai pengganti pembersihan AC | `TERMINOLOGY` | H2 |

**Kondisi build yang sudah diketahui:**

- Filter kategori berlabel **`Reparasi AC (1)`**, padahal layanannya adalah *Pembersihan AC Mendalam*. Peserta mungkin ragu apakah layanan ini relevan. Catat sebagai **known condition**, bukan temuan baru.
- Beranda menampilkan tiga kartu contoh dengan tombol **`Lihat Detail`**. Katalog menampilkan tombol **`Pesan Sekarang`**. Dua label berbeda untuk aksi serupa; catat bila peserta memperlakukannya sebagai dua hal berbeda.
- Kotak pencarian header (`Cari layanan...`) **tidak ada** di bawah 1024 px dan tidak ada di menu ponsel. Untuk sesi ponsel, pencarian hanya tersedia di halaman katalog.
- Pencarian hanya cocok sebagai substring pada judul, label kategori, dan deskripsi. Kata "bocor" tetap cocok dengan "kebocoran". Layanan di luar katalog seperti "sumur bor" atau "sedot WC" **tidak akan** menemukan hasil meskipun proposal menyebutnya. Catat sebagai kesenjangan cakupan.

**Peringatan keselamatan:** tidak ada data sensitif pada tugas ini. Bila peserta membuka menu `Akun & Masuk`, jangan dicegah; biarkan ia mengamati.

---

### T2 — Menemukan bantuan untuk tanda kebocoran

**Kelompok:** A, Penemuan · **Alokasi:** 3 menit · **Layar:** `#services`

**Skenario yang dibacakan:**

> "Anda melihat tanda kebocoran di rumah dan belum tahu sumbernya. Temukan layanan yang dapat membantu mendiagnosisnya."

**Kriteria selesai (dari `02` F):** Menemukan kategori atau layanan kebocoran, atau melaporkan hambatan pencarian.

**Langkah moderator:**

1. Baca skenario. Beri jeda.
2. Diam. Catat kata yang diketik peserta di kolom `Layanan apa yang Anda butuhkan hari ini?` Ini data terminologi yang paling berharga di sesi ini.
3. Jangan menyebut `Plumbing` maupun `Deteksi Kebocoran Pintar`, meskipun peserta jelas membutuhkannya.
4. Bila kategori difilter dan hasilnya nol, biarkan peserta menemukan keadaan kosong sendiri. Keadaan kosong memuat tombol **`Reset Filter`**.
5. Bila peserta memilih layanan yang kurang tepat, biarkan ia menilai sendiri. **Jangan** mengarahkan ke layanan yang dianggap benar.
6. Saat peserta berhenti, tanyakan: "Apakah ini yang Anda cari, atau masih ada yang kurang?"

**Poin observasi:**

| Yang diamati | Kode 03 D | Heuristik |
|---|---|---|
| Kata kunci spontan: "bocor", "kebocoran", "pipa", "air", "rembes" | `TERMINOLOGY` | H2 |
| Temuan atau filter yang dipilih | `SERVICE_FINDABILITY` | H7 |
| Apakah kategori `Plumbing` dipahami | `TERMINOLOGY` | H2 |
| Apakah label `Data contoh` pada kartu terlihat | `TRUST_CLAIM` | H1 |

**Kondisi build yang sudah diketahui:**

- Kategori **`Plumbing`** berbahasa Inggris di antara kategori Indonesia lain (`Reparasi AC`, `Layanan Pompa`, `Kelistrikan`, `Alat Rumah`, `Sanitasi`). Istilah ini mungkin tidak dipahami. Catat sebagai **known condition**.
- Halaman katalog **tidak punya** kontrol pengurutan. Bila peserta mencari cara melihat yang termurah, catat `SERVICE_FINDABILITY` dengan H7.
- Tombol **`Muat Ulang Semua Layanan`** sebenarnya hanya mengembalikan filter dan kata kunci; ia tidak memuat data tambahan. Nama tombolnya menyesatkan. Catat **known condition**.
- Setiap kartu katalog menampilkan baris **`Garansi belum diverifikasi`** yang identik di semua kartu. Bila peserta memperlakukannya sebagai informasi per layanan, catat `TRUST_CLAIM`.

---

### T3 — Menilai kecukupan informasi detail dan biaya

**Kelompok:** B, Penilaian · **Alokasi:** 3 menit · **Layar:** `#detail`

**Skenario yang dibacakan:**

> "Periksa detail layanan pilihan Anda. Berapa biaya contoh yang ditampilkan dan apa saja yang termasuk?"

**Kriteria selesai (dari `02` F):** Menemukan rincian layanan dan harga, atau menjelaskan informasi yang tidak tersedia atau meragukan.

**Langkah moderator:**

1. Baca skenario dengan intonasi netral. **Jangan** menambahkan kata "harga" sebelum selesai membaca; skenario sendiri sudah menyebut "biaya contoh".
2. Diam. Catat bagian mana yang pertama kali dilihat peserta setelah masuk detail.
3. Catat **persis** nilai yang peserta ucapkan, termasuk bila ia salah membaca. Itu data, bukan kesalahan yang perlu dikoreksi.
4. Bila peserta bertanya "ini rupiah atau dollar?", jawab netral: "Apa yang tertulis di layar bagi Anda?" Jangan konfirmasi maupun koreksi.
5. Setelah peserta selesai membaca, tanyakan: "Apa lagi yang perlu Anda lihat sebelum Anda yakin memilih layanan ini?" Pertanyaan ini memetakan pada kriteria selesai.

**Poin observasi:**

| Yang diamati | Kode 03 D | Heuristik |
|---|---|---|
| Nilai yang dibaca dan cara peserta menyebut mata uangnya | `PRICE_TRUST` | H2 |
| Apakah label `Harga simulasi, belum divalidasi mitra` terbaca dan dipercaya | `PRICE_TRUST`, `TRUST_CLAIM` | H1, H2 |
| Apakah empat butir `Apa Saja yang Termasuk` cukup untuk menilai cakupan | `SCOPE_UNDERSTANDING` | H6 |
| Apakah empat tahap `Alur Proses` dibaca sebagai tahapan nyata | `SCOPE_UNDERSTANDING`, `TRUST_CLAIM` | H2 |
| Rincian `Harga layanan (contoh)`, `Biaya platform (contoh)`, `Pajak simulasi`, `Total simulasi` | `PRICE_TRUST` | H4 |

**Kondisi build yang sudah diketahui:**

- Harga pada kartu katalog dirender **`$55`** tanpa desimal, sedangkan seluruh layar lain memakai **`USD 55.00`**. Ketidakkonsistenan format ini sudah tercatat. Catat **known condition** bila peserta menyinggung formatnya.
- Harga pada beranda, katalog, dan detail kini berasal dari satu sumber data yang sama (perbaikan N1). **Tidak ada** konflik harga; bila ada, itu temuan baru.
- Halaman detail memuat empat butir inklusi, empat tahap proses, dan widget booking. **Tidak ada** durasi estimasi, ulasan, FAQ, maupun daftar pantangan. Durasi hanya muncul di checkout (`Estimasi: 90 menit`). Catat bila peserta mencari estimasi dan tidak menemukannya di detail.
- Widget **`Pesan Layanan`** di sisi kanan sudah menyediakan pemilih tanggal dan waktu sebelum masuk checkout. Ini berarti ada **dua tempat** memilih jadwal dalam satu alur. Perhatikan detail pada T4.

**Peringatan keselamatan:** tidak ada input data pada tugas ini.

---

### T4 — Memilih jadwal

**Kelompok:** C, Penyelesaian · **Alokasi:** 3 menit · **Layar:** `#detail` lalu `#checkout`

**Skenario yang dibacakan:**

> "Lanjutkan ke formulir pemesanan simulasi. Pilih waktu yang cocok untuk Anda."

**Kriteria selesai (dari `02` F):** Memilih tanggal dan slot waktu; catat apakah pemilihannya terlihat jelas.

**Langkah moderator:**

1. Baca skenario. Beri jeda.
2. **Amati dengan cermat** apakah peserta merasa sudah bisa memilih jadwal di halaman detail, atau ia merasa harus menekan tombol dulu. Keduanya valid. Yang dicatat adalah kejelasan pemilihannya, sesuai `02` bagian F.
3. Bila peserta memilih jadwal di detail, perhatikan:
   - Tombol tanggal: tiga tombol, yang pertama berlabel **`Hari ini`**, dua lainnya format `Sen, 6 Okt` (dapat muncul `Okt.` dengan titik, bergantung peramban).
   - Dropdown **`Waktu Kedatangan`**: `09:00`, `11:30`, `14:00`, `16:30`.
4. Bila peserta menekan **`Lanjutkan ke Pemesanan`**, perhatikan ringkasan yang dibawa ke checkout.
5. Di checkout, perhatikan:
   - Stepper **`Ringkasan`**, **`Jadwal`**, **`Alamat`**, **`Bayar`**. Stepper hanya membaca status; tidak dapat diklik.
   - Sub-label **`Pilih Tanggal`**: lima ubin tanggal, format bulan `OKT`, label hari `Hari ini`, `Sen`, atau `Sel`.
   - Sub-label **`Pilih Slot Waktu`**: empat tombol `09:00`, `11:30`, `14:00`, `16:30` dalam format 24 jam.
6. Tanyakan setelah peserta memilih: "Apakah jelas apa yang baru saja Anda pilih?" Ini menjawab kriteria "apakah pemilihannya terlihat jelas".
7. Bila peserta tidak menemukan slot, **jangan** sebutkan angka jamnya. Gunakan kode 1: "Ada yang perlu Anda pilih di bagian ini?"

**Poin observasi:**

| Yang diamati | Kode 03 D | Heuristik |
|---|---|---|
| Apakah tanggal dan slot yang dipilih peserta ucapkan kembali dengan benar | `SCHEDULE` | H1 |
| Apakah stepper dianggap dapat diklik | `STATUS_FEEDBACK` | H1 |
| Apakah format 24 jam dipahami | `TERMINOLOGY`, `SCHEDULE` | H2 |
| Apakah lima hari ke depan terasa terbatas | `SCHEDULE` | H7 |
| Apakah memilih jadwal di detail lalu mengulanginya di checkout membingungkan | `NAVIGATION_CONTROL`, `STATUS_FEEDBACK` | H4 |

**Kondisi build yang sudah diketahui:**

- **Ada dua pemilih jadwal dalam satu alur**: `Tanggal Pilihan` (tiga tanggal dan satu dropdown) di detail, serta `Pilih Tanggal` (lima tanggal dan empat slot) di checkout. Ini **known condition** dan kandidat temuan H4 yang kuat.
- Slot di detail berlabel "waktu kedatangan"; di checkout berlabel "slot waktu". Dua istilah untuk objek yang sama. Catat **known condition**.
- Tidak ada kalender. Peserta tidak dapat memilih tanggal di luar lima hari ke depan. Nyatakan sebagai limitasi di bagian keterbatasan, bukan sesuatu yang "diperbaiki" saat sesi.

---

### T5 — Mengisi formulir pemesanan dengan alamat latihan

**Kelompok:** C, Penyelesaian · **Alokasi:** 4 menit · **Layar:** `#checkout`

**Skenario yang dibacakan:**

> "Gunakan alamat latihan berikut: Jl. Contoh No. 1, Kota Contoh, kode pos 12345. Lengkapi formulir dan jelaskan apa yang menurut Anda akan terjadi setelah tombol terakhir."

**Kriteria selesai (dari `02` F):** Memasukkan data fiktif, menjelaskan ekspektasi tindakan, dan tidak mengirim data nyata.

**Langkah moderator:**

1. Tunjukkan alamat latihan secara visual, lewat kartu tercetak atau teks di layar kedua. **Jangan** mengetik alamat itu untuk peserta.
2. Baca skenario. Beri jeda.
3. Ingatkan sekali saja sebelum peserta mengetik: "Silakan pakai alamat latihan ini saja, jangan alamat rumah Anda sendiri." Ini satu-satunya peringatan yang boleh diberikan.
4. Diam. Catat urutan field yang diisi peserta.
5. Perhatikan label dan isian contoh yang tersedia:

| Label | Isian contoh | Wajib |
|---|---|:---:|
| `Alamat Jalan` | `Nomor rumah dan nama jalan` | Ya |
| `Apartemen / Suite` | `misalnya Apt 4B` | Tidak |
| `Kode Pos` | `12345` | Ya |
| `Instruksi Khusus` | `Kode akses, info parkir, dll.` | Tidak |

6. Bila peserta bertanya boleh mengisi apartemen, jawab: "Silakan kalau menurut Anda perlu."
7. **Jangan** mengarahkan pilihan metode pembayaran. Bila peserta memilih, diam saja.
8. Setelah semua isian terisi, tanyakan pertanyaan kedua dari skenario secara eksplisit: "Kalau Anda menekan tombol paling bawah, apa yang menurut Anda akan terjadi?" Jawabannya adalah data utama T5.
9. Setelah peserta menjawab, baru katakan: "Silakan tekan tombol yang paling bawah." Jangan menyuruh menekan sebelum pertanyaan dijawab.

**Poin observasi:**

| Yang diamati | Kode 03 D | Heuristik |
|---|---|---|
| Ekspektasi tindakan setelah tombol terakhir: pesan masuk, teknisi datang, atau tagihan | `PAYMENT_EXPECTATION`, `STATUS_FEEDBACK` | H1, H5 |
| Apakah `Total simulasi` dibandingkan dengan `Harga layanan (contoh)` | `PRICE_TRUST` | H4 |
| Urutan pengisian field dan field yang dilewati | `ADDRESS_VALIDATION` | H7 |
| Apakah `Instruksi Khusus` dipahami sebagai instruksi untuk teknisi | `SCOPE_UNDERSTANDING` | H2 |
| Metode pembayaran apa yang dipilih dan alasan pilihannya | `PAYMENT_EXPECTATION` | H2 |
| Apakah label `SIMULASI · BELUM DIBAYAR` dipahami | `PAYMENT_EXPECTATION`, `TRUST_CLAIM` | H1 |

**Kondisi build yang sudah diketahui:**

- Total dihitung otomatis: `total = harga layanan + 4.50 (biaya platform) + pajak 8 persen dari (harga + 4.50)`. Untuk AC: `USD 55.00 + 4.50 + 4.76 = USD 64.26`. **Tidak ada** biaya transport terpisah. Bila peserta menghitung sendiri, biarkan. Yang dicatat adalah apakah ia **membaca** `Biaya platform (contoh)` dan `Pajak simulasi` sebagai hal yang perlu dijelaskan. Ini masuk kategori `PRICE_TRUST`, bukan kesalahan kalkulasi.
- Ringkasan gelap memakai judul **`Ringkasan Simulasi`**, baris **`Item contoh · detail mitra belum diverifikasi`**, dan kotak **`Simulasi prototipe. Nilai dan metode pembayaran belum terhubung ke mitra; tidak ada biaya yang akan diproses.`** Ada empat pengungkapan simulasi dalam satu panel. Catat apakah pengungkapan yang bertumpuk membuat peserta berhenti membaca.
- Metode pembayaran hanya dua: **`Kartu Kredit atau Debit`** dengan sub-label `Kartu contoh · tidak ditagih`, dan **`Google Pay`** dengan sub-label `Pilihan demo · belum terhubung`. **Tidak ada** field nomor kartu, masa berlaku, atau CVV di mana pun. Bila peserta mencari field kartu dan tidak menemukannya, catat `PAYMENT_EXPECTATION`.
- Tombol terakhir berlabel **`Konfirmasi Simulasi`**, bukan `Bayar` atau `Pesan`. Bila peserta mengira tombol ini akan menarik uang, catat `PAYMENT_EXPECTATION` dengan severity yang berpotensi tinggi.
- Kotak **`Ingin memesan lewat WhatsApp?`** di checkout **bukan tombol**, melainkan teks. Peserta yang mengira itu jalur bantuan akan kecewa. Catat **known condition**.
- Bila peserta bergerak mencari cara pembayaran sungguhan, hentikan tugas dan catat sebagai insiden.

---

### T6 — Memicu validasi dan memperbaikinya

**Kelompok:** C, Penyelesaian · **Alokasi:** 3 menit · **Layar:** `#checkout`

**Skenario yang dibacakan:**

> "Coba lanjutkan sekali dengan alamat jalan atau kode pos yang belum lengkap, lalu perbaiki."

**Kriteria selesai (dari `02` F):** Menemukan pesan validasi, memahami cara memperbaiki, dan data yang telah diisi tetap ada.

**Langkah moderator:**

1. Baca skenario. Beri jeda.
2. **Jangan** menyarankan cara membuat isian tidak lengkap. Biarkan peserta menemukannya sendiri.
3. Diam. Perhatikan:
   - Galat yang muncul: **`Alamat jalan wajib diisi.`**, **`Kode pos harus terdiri dari 5 digit angka.`**, dan **`Pilih tanggal dan slot waktu layanan.`**
   - Pesan tingkat formulir: **`Periksa kembali bagian yang ditandai sebelum melanjutkan.`**
   - Fokus berpindah otomatis ke kontrol pertama yang salah.
4. Catat apakah isian yang sudah diketik pada T5 **tetap ada**. Ini adalah kriteria selesai T6 dan indikator H9 yang paling penting.
5. Bila peserta sudah memperbaiki tetapi masih gagal, jangan bantu. Catat berapa kali ia mencoba; itu data efisiensi.
6. Setelah isian valid, tanyakan: "Apa yang terjadi pada tulisan yang sudah Anda ketik tadi?" Pertanyaan ini menguji persepsi retensi isian.
7. Bila peserta tidak dapat mencapai keadaan valid setelah dua kali percobaan, akhiri tugas dengan hasil `dengan bantuan` (kode 2 atau 3) dan lanjutkan.

**Poin observasi:**

| Yang diamati | Kode 03 D | Heuristik |
|---|---|---|
| Berapa kali percobaan untuk mencapai isian valid | `ADDRESS_VALIDATION` | H9 |
| Apakah pesan galat menyebut bidang yang salah secara spesifik | `ADDRESS_VALIDATION` | H9 |
| Apakah perpindahan fokus terlihat atau justru membingungkan | `STATUS_FEEDBACK`, `ACCESSIBILITY` | H1, H9 |
| Apakah data sebelumnya bertahan | `ADDRESS_VALIDATION` | H3, H9 |
| Pesan pemotongan kode pos | `ADDRESS_VALIDATION` | H9 |

**Kondisi build yang sudah diketahui:**

- Kode pos hanya menerima digit dan **dipotong** ke lima digit pertama dengan pesan amber **`Kode pos dipotong menjadi lima digit pertama.`** Ini perbaikan yang disengaja; sebelumnya pemotongan terjadi diam-diam. Pesan ini **hanya muncul** bila peserta mengetik lebih dari lima digit. Bila tidak dipicu, tidak ada temuan.
- Fokus validasi jadwal diarahkan ke **tombol tanggal pertama**, bukan ke elemen paragraf. Ini perbaikan yang disengaja.
- Galat jadwal bersifat **satu pesan** untuk tanggal dan slot sekaligus: **`Pilih tanggal dan slot waktu layanan.`** Bila peserta mencari galat terpisah per sub-field, catat **known condition**.
- Tugas ini bergantung pada keadaan sesi: hanya bermakna bila peserta sudah mengisi sebagian isian pada T5. Bila T5 gagal total, jalankan T6 dengan isian awal kosong dan catat keterbatasan pembandingannya.

---

### T7 — Kembali ke daftar layanan tanpa kehilangan konteks

**Kelompok:** D, Kontrol · **Alokasi:** 2 menit · **Layar:** `#checkout` atau `#confirmation` lalu `#services`

**Skenario yang dibacakan:**

> "Kembali ke daftar layanan tanpa kehilangan konteks yang Anda perlukan."

**Kriteria selesai (dari `02` F):** Menggunakan navigasi atau tombol back, dan menyebutkan apakah pencarian atau konteks terjaga.

**Langkah moderator:**

1. **Prasyarat:** T5 harus sudah berhasil. Bila T5 gagal, batalkan tugas ini dan catat `gagal (prasyarat tidak terpenuhi)`. Ini bukan kegagalan peserta.
2. Baca skenario. Beri jeda.
3. Diam. Perhatikan jalur yang dipilih peserta:
   - breadcrumb **`Layanan`** di halaman detail, yang hanya ada di detail dan tidak ada di checkout,
   - menu navigasi **`Layanan`** atau **`Katalog Layanan`**,
   - tombol back browser,
   - breadcrumb di dalam checkout.
4. **Jangan** mengarahkan. Semua jalur di atas valid.
5. Saat peserta tiba di katalog, tanyakan: "Apakah ada yang tadi sedang Anda cari yang hilang sekarang?" Jawaban itu yang dicatat.
6. **Periksa manual hal yang tidak bisa diuji langsung:** saat peserta sudah di `#checkout` dengan isian terisi, mintalah ia menyegarkan halaman satu kali. Perhatikan apa yang terjadi. Prototipe **tidak menyimpan keadaan apa pun**, sehingga memuat ulang akan mengosongkan seluruh isian pesanan dan mengunci kembali `#confirmation` dan `#tracking`. Catat sebagai **known condition** yang **wajib** dilaporkan, karena `06` bagian 4 menandai tugas ini `Periksa manual`.
7. Bila T7 sempat jalankan, catat apakah ia menemukan tombol **`Pesan Layanan Lain`** setelah menyelesaikan T5. Tombol itu hanya ada di `#confirmation`.

**Poin observasi:**

| Yang diamati | Kode 03 D | Heuristik |
|---|---|---|
| Jalur navigasi yang dipilih dan apakah berhasil | `NAVIGATION_CONTROL` | H3 |
| Persepsi kehilangan konteks | `NAVIGATION_CONTROL` | H3 |
| Perilaku setelah penyegaran halaman | `NAVIGATION_CONTROL`, `STATUS_FEEDBACK` | H3, H1 |
| Apakah tombol back browser mengembalikan keadaan | `NAVIGATION_CONTROL` | H3 |

**Kondisi build yang sudah diketahui:**

- **Tidak ada persistensi.** `localStorage` dan `sessionStorage` tidak digunakan. Penyegaran halaman mengosongkan seluruh isian. Dinyatakan eksplisit di sini agar tidak dilaporkan sebagai temuan baru pada setiap sesi.
- Routing memakai hash dengan `pushState`, `popstate`, dan `hashchange`, sehingga tombol back dan forward browser **seharusnya** bekerja. Bila tidak, itu temuan baru yang serius.
- **Tautan katalog di footer rusak.** Setiap tautan pada kolom **`Katalog Contoh`** mengarah ke `#services?q=<judul>`, yang **tidak** dikenali router dan jatuh ke beranda tanpa pratinjau pencarian. Ini **known condition** dengan severity H3 yang layak. Bila peserta menemukan tautan footer ini, catat reaksinya; jangan mendahulukan penjelasan. Bila banyak peserta tersesat di sini, jadikan temuan iterasi prioritas.
- Halaman konfirmasi menyediakan **`Pesan Layanan Lain`** yang membersihkan isian dan kembali ke katalog. Ini satu-satunya jalur reset di dalam aplikasi.
- Tombol **`Kembali ke Dasbor`** di konfirmasi sebenarnya mengarah ke halaman depan pemasaran; tidak ada dasbor di prototipe. Nama tombolnya menyesatkan. Catat **known condition** bila peserta mencari riwayat pesanan.

---

### T8 — Mencari bantuan atau jalur menghubungi penyedia jasa

**Kelompok:** E, Dukungan · **Alokasi:** 2 menit · **Layar:** mana pun

**Skenario yang dibacakan:**

> "Jika Anda memerlukan bantuan atau ingin bertanya kepada penyedia jasa, temukan pilihan yang tersedia."

**Kriteria selesai (dari `02` F):** Menemukan FAQ atau kontak; memahami jika WhatsApp hanya membuka draf dan belum mengirim.

**Langkah moderator:**

1. Baca skenario. Beri jeda.
2. Diam. Perhatikan dari mana peserta mulai mencari: menu **`Proses`**, **`Hasil`**, atau **`FAQ`** di header; tombol **`Pesan via WhatsApp`** di header; blok FAQ di beranda; atau bagian bawah halaman.
3. Bila peserta membuka FAQ, item pertama sudah terbuka secara bawaan. Perhatikan apakah ia membaca pertanyaannya atau hanya jawabannya.
4. Bila peserta menekan tombol WhatsApp, perhatikan perilaku jendela **`Jalur Kontak WhatsApp`**:
   - pilihan **`Layanan yang Ditanyakan`**
   - textarea **`Pesan`** dengan teks otomatis `Halo ProFix, saya ingin menanyakan layanan "{topic}". Mohon informasi harga dan ketersediaannya.`
   - kotak amber **`Nomor mitra belum dikonfigurasi, sehingga tombol di bawah hanya membuka WhatsApp tanpa nomor tujuan. Pesan tetap harus Anda kirim sendiri di aplikasi tersebut.`**
   - tombol **`Buka WhatsApp`** yang berubah menjadi **`Buka WhatsApp lagi`**, dan tombol **`Batal`**
5. **Jangan biarkan peserta benar-benar mengirim pesan.** Jika ia menekan `Buka WhatsApp`, tab WhatsApp akan terbuka tanpa nomor tujuan. Segera kembalikan dan tanyakan: "Kalau tombol itu ditekan, apa yang menurut Anda terjadi?" **Jangan** izinkan ia mengirim pesan apa pun.
6. Bila peserta tidak menemukan jalur kontak, gunakan kode 1: "Di mana biasanya Anda mencari cara menghubungi sebuah layanan?"
7. **Peringatan keselamatan (penting di tugas ini):** hentikan dan tutup tab apa pun yang membuka WhatsApp. Pastikan tidak ada pesan yang terkirim dan tidak ada nomor yang masuk ke catatan.

**Poin observasi:**

| Yang diamati | Kode 03 D | Heuristik |
|---|---|---|
| Di mana peserta mulai mencari bantuan | `NAVIGATION_CONTROL` | H10 |
| Apakah FAQ menjawab pertanyaan nyata peserta | `SCOPE_UNDERSTANDING` | H10 |
| Pemahaman bahwa WhatsApp belum mengirim pesan | `CONTACT_EXPECTATION` | H1, H5 |
| Apakah kotak dukungan di checkout dibaca | `CONTACT_EXPECTATION` | H10 |
| Pertanyaan apa yang menurut peserta tetap tidak terjawab | `SERVICE_FINDABILITY`, `PRICE_TRUST` | H10 |

**Kondisi build yang sudah diketahui:**

- WhatsApp adalah **jalur kontak, bukan metode pembayaran**. Naskah layar sudah konsisten: `Jalur kontak dan konfirmasi, bukan metode pembayaran.` Ini perbaikan yang disengaja.
- Label tombol berbeda antar titik: **`Pesan via WhatsApp`** di header desktop, **`Hubungi via WhatsApp`** di menu ponsel, dan **`Tanya via WhatsApp Sekarang`** pada CTA FAQ beranda. Tiga label untuk aksi yang sama. Catat **known condition**.
- Tidak ada nomor telepon, email, atau chat bawaan lain di seluruh prototipe. Pertanyaan di luar enam layanan tidak bisa disampaikan ke mitra.
- Menu header **`Proses`**, **`Hasil`**, dan **`FAQ`** bukan rute; ia menuju ke beranda lalu menggulir ke bagian. Bila penggulirannya gagal, peserta akan mendarat di beranda tanpa penjelasan. Mekanismenya sudah diperbaiki dengan `requestAnimationFrame`, tetapi **belum pernah diverifikasi di browser nyata**. Bila gagal saat sesi, catat insiden.
- Formulir **`Ada masalah?`** di halaman lacak, bernama `Catat Temuan Anda`, adalah pengumpul catatan moderator dan **bukan** formulir balik yang mengirim data. Enam opsinya tidak dikirim ke mana pun. Bila peserta mengira ia mengirim laporan, klarifikasi setelah tugas dan catat `CONTACT_EXPECTATION`.
- Autentikasi: layar `#auth` menyatakan **`Layar demonstrasi · tidak ada akun yang dibuat atau disimpan.`** dengan lencana **`SIMULASI AUTENTIKASI`**, dan tombol **`Lanjutkan dengan Google (demo)`** serta **`Lanjutkan dengan WhatsApp (demo)`** hanya berpindah halaman. Bila peserta mengejar memasukkan akun, klarifikasi setelah tugas.

---

## 7. Kondisi Build yang Sudah Diketahui

Daftar ini ada supaya `03` bagian E langkah 4 dapat membedakan "hambatan yang ditemukan peserta" dari "cacat yang sudah diketahui sebelumnya". **Setiap butir di sini harus dicatat sebagai *known condition*, bukan temuan baru.** Bila peserta menunjukkan gejala yang **tidak ada** dalam tabel ini, barulah itu dapat dihitung sebagai temuan baru.

| ID | Kondisi | Gejala yang mungkin muncul pada peserta | Tugas |
|---|---|---|---|
| K-01 | Format harga tidak konsisten: katalog `$55`, layar lain `USD 55.00` | Peserta mengira dua layanan berbeda | T3 |
| K-02 | Kategori `Reparasi AC` untuk layanan pembersihan AC | Peserta ragu layanan ini relevan | T1 |
| K-03 | Kategori `Plumbing` berbahasa Inggris di antara kategori Indonesia | Istilah tidak dipahami | T2 |
| K-04 | Dua pemilih jadwal dalam satu alur: detail tiga tanggal dan satu dropdown, checkout lima tanggal dan empat slot | Peserta terkejut memilih jadwal dua kali | T4 |
| K-05 | Istilah berbeda: `Waktu Kedatangan` di detail, `Pilih Slot Waktu` di checkout | Peserta mengira dua hal berbeda | T4 |
| K-06 | Isian hilang setelah penyegaran halaman | "Sudah saya isi semua, kok hilang?" | T7 |
| K-07 | Tautan katalog di footer `#services?q=...` jatuh ke beranda | Peserta tersesat, mengira tidak ada lagi | T7 |
| K-08 | Tombol `Muat Ulang Semua Layanan` tidak memuat apa pun | Peserta mengira perlu menunggu | T2 |
| K-09 | Tombol `Kembali ke Dasbor` mengarah ke beranda pemasaran | Peserta mencari riwayat pesanan | T7 |
| K-10 | Kotak `Ingin memesan lewat WhatsApp?` di checkout bukan tombol | Peserta mengira tidak bisa diklik | T5 |
| K-11 | Tiga label berbeda untuk aksi WhatsApp yang sama | Peserta mengira itu tiga fitur | T8 |
| K-12 | Navigasi ke `#confirmation` atau `#tracking` sebelum ada pesanan jatuh ke katalog tanpa penjelasan | Peserta tidak tahu kenapa dialihkan | T7, T8 |
| K-13 | Tidak ada kontrol urut di katalog | Peserta mencari yang termurah atau terbaik | T2 |
| K-14 | Durasi estimasi hanya muncul di checkout, tidak di detail atau katalog | Peserta tidak bisa memperkirakan lama | T1, T3 |
| K-15 | `ID Pesanan` selalu `DEMO-PF-0001` dan tidak pernah berubah | Peserta curiga bukti pesanan bukan asli | T7 |
| K-16 | Lencana `ETA … MENIT (ILUSTRASI)` di halaman lacak menghitung mundur, sementara teks menyatakan tidak ada pelacakan | Peserta mempercayai ETA | opsional |
| K-17 | Layanan `Penyetelan Alat Rumah` menulis `Garansi pengerjaan 30 hari penuh` di daftar inklusi, sementara seluruh UI menyatakan garansi belum dikonfirmasi | Peserta menangkap kontradiksi | opsional |
| K-18 | Halaman detail tidak memuat ulasan, FAQ, maupun daftar pantangan | Peserta mencari informasi ini | T3 |
| K-19 | Halaman `#auth` tidak menampilkan banner prototipe global | Peserta bisa mengira itu situs nyata | opsional |
| K-20 | Tidak ada pencarian di menu ponsel; kotak pencarian header hilang di bawah 1024 px | Peserta ponsel lebih lama mencari | T1, T2 |

**K-17 perlu perhatian khusus.** Ketika peserta membaca daftar inklusi `Penyetelan Alat Rumah` dan menyebut garansi pengerjaan 30 hari, **jangan** jelaskan kontradiksinya. Catat kutipan persisnya dan lanjutkan. Klaim garansi yang saling bertentangan justru jenis temuan `TRUST_CLAIM` yang ingin dicari oleh studi ini.

---

## 8. Aturan Keselamatan Sesi

Aturan ini berlaku sepanjang sesi dan mengesampingkan skrip.

1. **Hentikan tugas** bila prototipe meminta data sensitif, membuka alur pembayaran nyata, mengaktifkan GPS, atau meminta alamat nyata.
2. **Jangan** mengizinkan peserta mengetik nama, nomor telepon, nomor kartu, atau alamatnya sendiri. Bila ia sudah mengetik, kembalikan isian dan catat sebagai insiden validasi.
3. **Tutup segera** tab WhatsApp atau tab eksternal lain yang terbuka. Pastikan tidak ada pesan yang terkirim.
4. **Jangan** mengaktifkan proses pembayaran nyata, meski peserta tampak ingin mencobanya. Jelaskan setelah tugas.
5. **Boleh** menghentikan rekaman kapan saja bila peserta meminta, nyatakan secara tegas bahwa rekaman dihentikan saat itu juga.
6. **Boleh** mengakhiri sesi lebih awal bila peserta lelah, cemas, atau meminta berhenti. Catat alasan singkat tanpa menghakimi.
7. **Jangan** menjelaskan desain kepada peserta sebagai kelebihan atau kekurangan. Netralkan di debrief saja.
8. Bila peserta bertanya apakah prototipe ini milik perusahaan sungguhan, jawab secara jujur sesuai naskah di `04`.

---

## 9. Lembar Catatan Sesi

Gunakan satu lembar per peserta. Struktur ini diisi **pada sesi**, bukan sesudahnya.

**Participant ID:** `P__` · **Kode rekrutmen:** `R__`
**Tanggal dan waktu sesi:** · **Versi build (commit dan hash aset):**
**Moderator:** · **Pencatat:**
**Perangkat:** · **Viewport:** · **Browser dan zoom:**
**Persetujuan perekaman:** `ya / tidak` · **Persetujuan kutipan:** `ya / tidak`
**Mode:** `A — uji coba internal / B — sesi formal`

### 9.1 Hasil tugas

| Tugas | Hasil (mandiri / dengan bantuan / gagal) | Kode bantuan (0 sampai 3) | Waktu (detik) | Percobaan ulang | Kesalahan atau keraguan | Ucapan anonim |
|---|---|---:|---:|---:|---|---|
| T1 | | | | | | |
| T2 | | | | | | |
| T3 | | | | | | |
| T4 | | | | | | |
| T5 | | | | | | |
| T6 | | | | | | |
| T7 | | | | | | |
| T8 | | | | | | |

### 9.2 Insiden

| Incident ID | Participant | Task | Layar atau kontrol | Kejadian observasi (fakta) | Dampak | Pemulihan yang dilakukan | Known condition (K-__ atau bukan) |
|---|---|---|---|---|---|---|---|
| I-__ | P__ | T__ | | | | | |

### 9.3 Refleksi moderator (isi setelah sesi, bukan saat sesi)

- Tiga hambatan teratas yang terlihat:
- Dua asumsi yang salah tentang apa yang akan peserta lakukan:
- Satu hal yang tidak dapat diuji dengan build ini:
- Langkah yang paling lama dihambat:
- Apakah skrip perlu diubah sebelum sesi berikutnya? Jika ya, bagian mana:

### 9.4 Penutupan

- [ ] Semua isian T1 sampai T8 terisi atau diberi alasan `gagal`.
- [ ] Setiap insiden diberi kode `K-__` atau ditandai `bukan` untuk temuan baru.
- [ ] Tidak ada data sensitif di lembar ini: tanpa nama, nomor telepon, alamat, atau kata sandi.
- [ ] Kutipan hanya yang didukung rekaman atau transkrip.
- [ ] Pelacak rekrutmen pada `05` bagian E diperbarui.
- [ ] Lokasi penyimpanan dan tanggal penghapusan dicatat.

---

## 10. Pasca-Sesi

1. Isi `03` bagian C (catatan insiden) selesaikan pada hari yang sama, selagi ingatan moderator masih utuh.
2. Pisahkan fakta observasi dari interpretasi pada setiap baris insiden.
3. Kodekan transkrip dan ucapan dengan kode awal pada `03` bagian D. Revisi kode hanya setelah data aktual terkumpul.
4. Simpan berkas sesi dengan nama `PXX_YYYY-MM-DD_session-notes.md`. Jangan nama peserta di nama berkas.
5. Kunci lembar observasi terhadap perubahan setelah sesi berikutnya dimulai.
6. Perbarui `06-prototype-build-manifest.md` bagian 4 bila perilaku prototipe berbeda dari asumsi tugas saat ini.
7. Bila ada temuan baru, masukkan ke formulir heuristik pada `03` bagian A **dengan bukti**, lalu rekonsilikasi bila ada evaluator lain.

---

## 11. Batasan Pelaporan untuk Sesi Ini

- **Studi belum dilakukan.** Skrip ini tidak menghasilkan data. Semua isinya adalah prosedur yang belum dijalankan.
- Jangan melaporkan hasil **Mode A** sebagai temuan penelitian.
- Laporkan hasil per tugas sebagai hitungan dan penyebut eksplisit: `mandiri x/N`, `dengan bantuan y/N`, `gagal z/N`, dengan `N` adalah jumlah peserta yang benar-benar mengerjakan tugas tersebut, bukan jumlah peserta yang diundang.
- Karena `02` bagian C menyaring peserta di luar rentang 18 sampai 26 tahun, sampel bersifat purposif dan kecil. **Jangan** menyimpulkan preferensi populasi Gen Z dari hasil ini.
- Pisahkan laporan **hasil peserta** dari **hasil evaluator heuristik** pada `03`. Dua sumber itu tidak boleh dijumlahkan.
- Angka keyakinan 1 sampai 5 pada 5.6 adalah item instrumen peserta, **bukan** skor heuristik. Jangan menggabungkannya dengan severity evaluator.
- Known condition pada bagian 7 dilaporkan sebagai **cacat prototipe yang sudah teridentifikasi**, bukan sebagai temuan baru dari sesi. Laporan harus menyatakan keduanya secara terpisah.
- Jangan menyebut build ini "versi final" atau "versi yang diuji pengguna" sebelum sesi benar-benar dijalankan pada build yang tercatat pada `06`.

---

## 12. Pelacakan Tugas terhadap Dokumen Lain

| Tugas | Sumber ID | Kriteria selesai | Kode observasi | Known conditions |
|---|---|---|---|---|
| T1 | `02` F | Terisi di `02` | `SERVICE_FINDABILITY`, `TERMINOLOGY` | K-02, K-14, K-20 |
| T2 | `02` F | Terisi di `02` | `SERVICE_FINDABILITY`, `TERMINOLOGY` | K-03, K-08, K-13, K-20 |
| T3 | `02` F | Terisi di `02` | `PRICE_TRUST`, `SCOPE_UNDERSTANDING` | K-01, K-14, K-18 |
| T4 | `02` F | Terisi di `02` | `SCHEDULE`, `STATUS_FEEDBACK` | K-04, K-05 |
| T5 | `02` F | Terisi di `02` | `PAYMENT_EXPECTATION`, `ADDRESS_VALIDATION` | K-10 |
| T6 | `02` F | Terisi di `02` | `ADDRESS_VALIDATION`, `STATUS_FEEDBACK` | tidak ada |
| T7 | `02` F | Terisi di `02` | `NAVIGATION_CONTROL` | K-06, K-07, K-09, K-12, K-15 |
| T8 | `02` F | Terisi di `02` | `CONTACT_EXPECTATION` | K-11, K-12, K-16, K-17 |

Semua kriteria selesai di atas **disalin** dari `02-moderator-and-participant-materials.md` bagian F dan tidak diubah. Bila kriteria perlu diubah, ubah di `02` terlebih dahulu, lalu perbarui tabel ini.

---

## 13. Yang Harus Disetujui Sebelum Sesi Formal

- [ ] Jumlah peserta, rentang usia, dan wilayah studi disetujui.
- [ ] Jumlah evaluator ahli disetujui dan peran dipisahkan dari peserta.
- [ ] Formulir persetujuan disetujui unit etik dan riset BINUS.
- [ ] Kebijakan perekaman, penyimpanan, dan penghapusan disetujui dan terisi di `04` bagian 3.
- [ ] Naskah rekrutmen dan insentif disetujui.
- [ ] Semua butir `06` bagian 6 tertutup.
- [ ] Satu sesi Mode A dijalankan penuh oleh moderator yang akan memandu sesi formal.
- [ ] Tim menyetujui naskah ini secara tertulis.

**Selama salah satu butir di atas terbuka: jalankan Mode A saja.**