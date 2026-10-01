# Paket Riset Usability Gen Z — ProFix

Paket ini menyiapkan prosedur penelitian yang memadukan ruang lingkup proposal BINUS 2026 dengan metode tambahan yang diusulkan dalam `paper/draft-paper.md`. Paket **belum disetujui untuk sesi formal**; minta tinjauan tim, mitra, dan unit etik/riset yang berlaku terlebih dahulu.

## Dokumen

1. [01-study-protocol.md](01-study-protocol.md) — tujuan, pertanyaan riset, sampel usulan, prosedur, batas data, analisis, dan syarat memulai sesi.
2. [02-moderator-and-participant-materials.md](02-moderator-and-participant-materials.md) — skrip, draf persetujuan, screener, tugas, wawancara, dan debrief.
3. [03-evaluator-and-analysis-kit.md](03-evaluator-and-analysis-kit.md) — formulir 10 heuristik, lembar observasi, kode awal, sintesis, dan tabel hasil.
4. [04-participant-information-and-consent.md](04-participant-information-and-consent.md) — lembar informasi peserta dan persetujuan terpisah untuk partisipasi, perekaman, dan kutipan.
5. [05-recruitment-and-screening-kit.md](05-recruitment-and-screening-kit.md) — daftar konfirmasi sebelum rekrutmen, naskah undangan, naskah penolakan, formulir penyaringan, dan pelacak rekrutmen.
6. [06-prototype-build-manifest.md](06-prototype-build-manifest.md) — build prototipe kanonis yang diuji, daftar katalog layanan, catatan perbaikan, dan rekonsiliasi tugas terhadap build.

Urutan penggunaan: `05` untuk mencari peserta, `04` untuk persetujuan, `06` untuk memverifikasi stimulus sebelum sesi, lalu `02` untuk memandu sesi, dan `03` untuk evaluasi serta analisis.

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
