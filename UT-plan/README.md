# Paket Riset Usability Gen Z — ProFix

Paket ini menyiapkan prosedur penelitian yang memadukan ruang lingkup proposal BINUS 2026 dengan metode tambahan yang diusulkan dalam `paper/draft-paper.md`. Paket **belum disetujui untuk sesi formal**; minta tinjauan tim, mitra, dan unit etik/riset yang berlaku terlebih dahulu.

## Dokumen

1. [01-study-protocol.md](01-study-protocol.md) — tujuan, pertanyaan riset, sampel usulan, prosedur, batas data, analisis, dan syarat memulai sesi.
2. [02-moderator-and-participant-materials.md](02-moderator-and-participant-materials.md) — skrip, draf persetujuan, screener, tugas, wawancara, dan debrief.
3. [03-evaluator-and-analysis-kit.md](03-evaluator-and-analysis-kit.md) — formulir 10 heuristik, lembar observasi, kode awal, sintesis, dan tabel hasil.
4. [04-participant-information-and-consent.md](04-participant-information-and-consent.md) — lembar informasi peserta dan persetujuan terpisah untuk partisipasi, perekaman, dan kutipan.
5. [05-recruitment-and-screening-kit.md](05-recruitment-and-screening-kit.md) — daftar konfirmasi sebelum rekrutmen, naskah undangan, naskah penolakan, formulir penyaringan, dan pelacak rekrutmen.
6. [06-prototype-build-manifest.md](06-prototype-build-manifest.md) — build prototipe kanonis yang diuji, daftar katalog layanan, catatan perbaikan, dan rekonsiliasi tugas terhadap build.
7. [07-usability-test-scenario-and-steps.md](07-usability-test-scenario-and-steps.md) — skenario utama, urutan sesi menit per menit, langkah moderator verbatim untuk T1–T8, kondisi build yang sudah diketahui, dan lembar catatan sesi.

Urutan penggunaan: `05` untuk mencari peserta, `04` untuk persetujuan, `06` untuk memverifikasi stimulus sebelum sesi, `07` untuk menyiapkan dan memandu sesi, `02` untuk naskah pembuka, tugas, dan wawancara, lalu `03` untuk evaluasi serta analisis.

## Keputusan yang Harus Ditutup Sebelum Rekrutmen

- Persetujuan protokol, rekrutmen, consent, perekaman, retensi/penghapusan data, dan kutipan anonim.
- Konfirmasi mitra, wilayah studi, daftar layanan, deskripsi, cakupan, jadwal, harga IDR, pajak/biaya, kebijakan, garansi, kredensial, kontak, serta ketersediaan.
- Versi prototipe kanonis dan bahasa. Aplikasi profesional berbahasa Indonesia di `profix---professional-home-services` adalah versi utama. Build saat ini sudah lolos pemeriksaan tipe dan build, dan rinciannya tercatat di `06-prototype-build-manifest.md`. Aplikasi digital berbahasa Inggris menjadi referensi desain, bukan kelompok pembanding tanpa rancangan tambahan.
- Konfirmasi apakah 10 peserta Gen Z usia 18–26 dan 3 evaluator ahli yang dicantumkan draft telah disetujui. Proposal menyebut Gen Z dan evaluasi heuristik, tetapi tidak menetapkan semua rincian tersebut. Daftar yang harus dikonfirmasi ada di `05-recruitment-and-screening-kit.md` bagian A.
- Pilot internal moderator/tugas dan verifikasi bahwa tidak ada pembayaran, pemesanan nyata, pengumpulan alamat asli, atau GPS aktif.

## Status Pemeriksaan Build

Pemeriksaan terakhir pada prototipe kanonis menghasilkan `tsc --noEmit` bersih dan `vite build` sukses. Pemeriksaan ini hanya membuktikan bahwa prototipe dapat dikompilasi, **bukan** bahwa alurnya sudah diuji usability. Evaluasi usability pada build ini belum dilakukan.

Folder aplikasi digital mengandung karakter `&`. Pada Windows, `npm run lint` dan `npm run build` gagal pada folder tersebut karena jalur `.bin` tidak ter-resolve. Jalankan `node ".\node_modules\typescript\bin\tsc" --noEmit` dan `node ".\node_modules\vite\bin\vite.js" build` sebagai gantinya.

**Studi belum dilakukan.** Tidak ada skor, kutipan, atau temuan peserta di paket ini. Seluruh hasil harus diisi hanya dari data aktual yang terkumpul dan disetujui.

## Paket PDF

Seluruh dokumen di folder ini dapat digabung menjadi satu berkas PDF siap cetak:

- `Paket-Riset-Usability-Gen-Z-ProFix.pdf` — A4, dengan kotak centang yang dapat dicoret tangan. Jumlah halaman dan kotak centang pada berkas ini **perlu dihitung ulang** setelah penambahan `07-usability-test-scenario-and-steps.md`; angka yang tercatat sebelumnya sudah tidak berlaku.
- `build/build_packet_pdf.py` — skrip pembangun. Jalankan ulang setelah dokumen berubah:

```
python UT-plan/build/build_packet_pdf.py paket.html .
```

Skrip hanya membaca berkas `.md` dan tidak mengubahnya. Checklist `- [ ]` dirender sebagai kotak centang ballot (U+2610) dengan font `Segoe UI Symbol` yang ditanam di dalam PDF, sehingga tetap bisa dicoret saat dicetak. Konversi memakai mode headless Microsoft Edge karena `pandoc` dan `wkhtmltopdf` tidak tersedia di mesin ini.

## PDF Dokumen Tunggal

Modulator biasanya hanya membutuhkan skrip sesi di tangan, bukan seluruh paket. `build/build_doc_pdf.py` merender satu dokumen menjadi PDF tersendiri dengan sampul sendiri, dan memakai konverter serta stylesheet yang sama dengan pembangun paket agar keduanya tetap konsisten.

```
python UT-plan/build/build_doc_pdf.py 07-usability-test-scenario-and-steps.md UT-plan/build/skenario.html --pdf
```

- `Skenario-Uji-Usability-ProFix.pdf` — A4, 24 halaman, 29 kotak centang yang dapat dicoret tangan, sel kosong pada lembar catatan diberi ruang 7 mm untuk ditulis tangan.
- Argumen pertama adalah berkas `.md` yang dirender, argumen kedua adalah jalur HTML keluaran, dan argumen ketiga opsional berisi direktori akar yang memuat `UT-plan/`.
- Tanpa `--pdf`, skrip hanya menulis HTML.
- Berkas `.html` keluaran hanya artefak build dan boleh dihapus; PDF dibuat ulang dengan mengulang perintah di atas.

Seluruh hasil di dalam PDF tetap kosong. Tidak ada skor, kutipan, atau temuan peserta yang boleh diisi sebelum studi benar-benar dijalankan.
