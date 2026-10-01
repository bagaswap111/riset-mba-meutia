# Manifest Build Prototipe dan Rekonsiliasi Tugas

**Versi dokumen:** 0.1
**Tanggal:** 2026-10-01
**Status:** Memuat deskripsi build yang sudah diverifikasi. **Belum disetujui untuk sesi formal.** Rekrutmen tetap memerlukan persetujuan protokol, mitra, dan unit etik/riset.

## 1. Prototipe Kanonis yang Diuji

Prototipe utama sesi adalah aplikasi berbahasa Indonesia di folder `profix---professional-home-services`. Aplikasi `profix---digital-home-care-&-services` dipertahankan sebagai prototipe referensi desain dan **bukan** kelompok pembanding; menjadikannya arm eksperimen memerlukan rancangan tambahan yang disetujui.

| Atribut | Nilai |
|---|---|
| Basis repositori | `7c4b329` + perubahan lokal yang belum di-commit |
| Lokasi | `profix---professional-home-services` |
| Framework | React 19 + Vite 8 + Tailwind CSS 4 |
| Pemeriksaan yang dijalankan | `tsc --noEmit` (bersih) dan `vite build` (sukses) |
| Bahasa antarmuka | Bahasa Indonesia |
| Layar | `home`, `services`, `detail`, `checkout`, `confirmation`, `tracking`, `auth` |
| Rute berbasis hash | `#home`, `#services`, `#detail`, `#checkout`, `#confirmation`, `#tracking`, `#auth` |

**Catatan penting untuk pelaporan:** build sesi harus diidentifikasi dengan commit **dan** stempel waktu atau hash artefak build. Jangan menyebut prototipe "versi final" atau "versi yang diuji pengguna" sebelum sesi benar-benar dijalankan pada build yang tercatat di sini.

### Verifikasi ulang sebelum setiap sesi

Jalankan kedua perintah berikut dan simpan keluarannya bersama catatan sesi:

```
cd "profix---professional-home-services"
npm run lint
npm run build
```

Folder aplikasi digital mengandung karakter `&` pada namanya. Pada Windows, `npm run lint` dan `npm run build` gagal karena jalur `.bin` tidak ter-resolve. Jalankan langsung bila hal itu terjadi:

```
node ".\node_modules\typescript\bin\tsc" --noEmit
node ".\node_modules\vite\bin\vite.js" build
```

## 2. Katalog Layanan pada Build Ini

Enam layanan contoh aktif. Semuanya adalah data simulasi; tidak ada satu pun yang dikonfirmasi mitra.

| Service ID | Judul | Kategori | Kategori filter | Estimasi durasi |
|---|---|---|---|---:|
| `ac-deep-clean` | Pembersihan AC Mendalam | `ac` | Reparasi AC | 90 menit |
| `leak-detect` | Deteksi Kebocoran Pintar | `plumbing` | Plumbing | 60 menit |
| `electrical-inspect` | Inspeksi Rumah Total | `electrical` | Kelistrikan | 120 menit |
| `pump-calibration` | Kalibrasi Pompa | `pump` | Layanan Pompa | 75 menit |
| `appliance-tuning` | Penyetelan Alat Rumah | `appliances` | Alat Rumah | 60 menit |
| `home-sanitation` | Sanitasi Rumah Mendalam | `sanitation` | Sanitasi | 180 menit |

Tombol filter kategori dibuat dari data katalog, sehingga keenam kategori dapat difilter dan menampilkan jumlah layanan.

## 3. Apa yang Diperbaiki pada Build Ini

Perubahan berikut sudah diterapkan pada prototipe kanonis dan memengaruhi apa yang boleh diuji. Daftar ini menjadi konteks saat menafsirkan temuan sesi.

| Area | Sebelum | Sesudah |
|---|---|---|
| Harga dan total | Struktur `<img>` rusak membuat build gagal; total bercampur dengan label "Biaya Layanan" | Build berhasil; semua nominal memakai satu formatter `formatSampleAmount` dan berlabel simulasi |
| Contents halaman detail | Alur proses (diagnosa/pembersihan/sterilisasi/garansi) ditulis khusus AC dan dipakai untuk semua layanan | Setiap layanan memiliki tahapan proses sendiri; tahap dokumentasi terakhir bersifat bersama |
| Klaim garansi | "Jaminan Premium": garansi 30 hari, tanggung jawab $1Jt, cek latar belakang | Diganti daftar hal yang **belum** dikonfirmasi mitra |
| Recension | Tiga nama fiktif berbadge "Layanan Terverifikasi" | Disamarkan sebagai "Pelanggan Contoh A/B/C" dan diberi label data contoh |
| FAQ | Janji garansi 12 bulan, seleksi 3 tahap, tiba 60 menit, GPS langsung | Menjawab apa yang benar-benar ada di prototipe |
| Halaman portofolio | "Efisiensi pendinginan meningkat 35%", "jaminan segel anti-bocor 5 tahun" | Deskripsi contoh kasus tanpa angka hasil dan tanpa janji garansi |
| Metode pembayaran | WhatsApp Pay menjadi opsi radio pembayar | WhatsApp dipindahkan ke catatan jalur kontak; hanya kartu dan Google Pay (keduanya simulasi) |
| Validasi | Satu pesan galat gabungan | Galat per bidang dengan `aria-invalid`, `aria-describedby`, dan fokus otomatis ke bidang pertama yang salah |
| Stepper checkout | Langkah 1–3 selalu tampil selesai | Stepper membaca status sebenarnya dari isian tanggal, slot, alamat, dan kode pos |
| Slot waktu | Format 12 jam ("09:00 AM") tidak konsisten dengan dropdown 24 jam | Semua layar memakai satu daftar `BOOKING_SLOTS` 24 jam |
| Filter kategori | Hanya 4 dari 6 kategori dapat dipilih | Semua kategori dapat dipilih beserta jumlahnya |
| Dialog | Tidak ada `role="dialog"`, tidak ada dukungan Escape, fokus tidak dikurung | `Modal` bersama: labelling, Escape, backdrop close, focus trap, restore focus |
| Kartu dukungan | Janji "kompensasi $10 otomatis" dan "dispatcher menghubungi dalam 60 detik" | Pengumpul catatan temuan; tidak mengirim apa pun |
| Menu navigasi | Selektor layar "Checkout / Pemesanan" untuk reviewer tersedia di menu ponsel | Dihapus dari tampilan pelanggan |
| Layar konfirmasi/pelacakan | Dapat dibuka lewat deep link dengan pesanan kosong | Dialihkan ke katalog bila belum ada pesanan yang dikonfirmasi |
| Bahasa | Sejumlah string Inggris tersisa di halaman pelacakan dan footer | Diterjemahkan; footer diganti status prototipe dan tautan katalog yang berfungsi |
| Autentikasi | `alert()` mengklaim instruksi sandi telah dikirim; badge "kepuasan terjamin 100%" | Dinyatakan sebagai simulasi tanpa akun; label terasosiasi dengan benar |
| Fokus dialog | `Modal` membaca `onClose` langsung di dependency array sehingga effect berjalan ulang tiap render dan merebut fokus kembali | `onClose` dibaca lewat ref; effect hanya berjalan saat buka dan tutup |
| Fokus validasi jadwal | Galat jadwal mengarahkan fokus ke elemen `<p>` yang tidak dapat difokuskan sehingga tidak ada perpindahan fokus | Fokus diarahkan ke tombol tanggal pertama, dengan pengumuman `role="alert"` tetap dipertahankan |
| Klaim pada lapisan data | `mockData` menyimpan `warranty: true` dan `verified: true` yang tidak lagi dirender tetapi tetap menyatakan garansi dan verifikasi ada | Seluruh layanan memakai `warranty: false` dan `verified: false`; mata uang sampel ditulis `'USD'` |
| Redirect halaman lacak | Klik "Lacak Teknisi" sebelum ada pesanan terpantul ke katalog tanpa penjelasan | Ditambahkan banner yang menjelaskan halaman lacak baru tersedia setelah simulasi pemesanan selesai |

## 4. Rekonsiliasi Tugas terhadap Build Ini

Periksa tabel ini setiap kali prototipe berubah. Bila perilaku yang diasumsikan tugas tidak lagi ada, perbarui skrip tugas **sebelum** sesi, jangan improvisasi saat sesi berlangsung.

| Tugas | Asumsi dalam `02-moderator-and-participant-materials.md` | Status pada build ini |
|---|---|---|
| T1 cari layanan AC | Kategori AC dapat difilter | Sesuai. Kategori tampil sebagai "Reparasi AC" |
| T2 cari bantuan kebocoran | Kategori/service kebocoran dapat ditemukan | Sesuai. `leak-detect` berada di kategori "Plumbing" |
| T3 periksa detail dan biaya | Rincian harga dan cakupan terlihat | Sesuai, tetapi nominal adalah USD contoh. Gunakan kalimat netral "harga contoh yang ditampilkan" |
| T4 pilih jadwal | Pemilih tanggal dan slot | Sesuai. Slot tampil 24 jam; stepper mencerminkan apakah jadwal sudah lengkap |
| T5 isi alamat dan konfirmasi | Alamat fiktif dan kode pos 5 digit diterima | Sesuai. Kode pos hanya menerima angka dan maksimal 5 digit |
| T6 picu validasi | Pesan galat muncul dan isian tetap ada | Sesuai. Galat muncul per bidang dan fokus berpindah ke bidang pertama yang salah |
| T7 kembali tanpa kehilangan konteks | Navigasi/back mempertahankan konteks | **Periksa manual.** Pesanan hanya bertahan selama sesi; memuat ulang halaman akan mengosongkan state |
| T8 temukan bantuan/kontak | FAQ tersedia; WhatsApp hanya membuka draf | Sesuai. WhatsApp membuka `wa.me` tanpa nomor tujuan dan diberi label sebagai jalur kontak, bukan pembayaran |

## 5. Hal yang Harus Dikonfirmasi Mitra Sebelum Sesi Formal

Sesi formal tidak boleh dijalankan selama butir berikut masih terbuka, karena tugas T3 dan T5 mengukur pemahaman harga dan pemesanan:

1. Tarif mitra dalam Rupiah, cakupan biaya, pajak, dan biaya platform.
2. Daftar layanan final beserta kategori dan cakupan tiap layanan.
3. Ketentuan garansi dan kredensial teknisi yang boleh ditampilkan.
4. Nomor kontak dan jam layanan mitra untuk jalur WhatsApp.
5. Wilayah studi dan daftar mitra yang sudah siap.
6. Persetujuan etik/riset untuk merekam dan menyimpan catatan.

Selama butir 1–2 belum terselesaikan, jalankan hanya **uji coba internal** untuk melatih moderator dan memvalidasi skrip. Hasil uji coba internal tidak boleh dilaporkan sebagai data penelitian.