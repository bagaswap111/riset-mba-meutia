# Portable Apps — ProFix

Dua berkas tunggal yang dapat dipindahkan lewat transfer digital mana pun
(email, WhatsApp, Google Drive, USB) dan langsung dibuka dengan klik ganda di
komputer mana pun. **Tidak butuh Node, tidak butuh server, tidak butuh internet.**

| Berkas | Ukuran | Isi |
|---|---:|---|
| `ProFix-Layanan-Indonesia.html` | ~3,2 MB | Prototipe kanonis, berbahasa Indonesia. Stimulus uji usability. |
| `ProFix-Digital-Home-Care.html` | ~3,3 MB | Prototipe referensi desain, berbahasa Inggris. Bukan kelompok pembanding. |

## Cara membuka

Klik ganda berkas `.html`, atau seret ke jendela peramban. Itu saja.

- Berfungsi pada Chrome, Edge, Firefox, dan Safari versi terkini.
- Navigasi memakai hash URL (`#services`, `#checkout`), jadi tombol Back/Forward
  tetap bekerja tanpa server.
- Status pemesanan hanya bertahan selama tab terbuka. Memuat ulang halaman akan
  mengosongkan state; itu perilaku prototipe, bukan kegagalan berkas.

## Yang sudah ditanam di dalam berkas

Tidak ada satu pun permintaan jaringan saat halaman dimuat. Semua aset berikut
sudah tertanam sebagai data URI:

- 22 gambar layanan dan teknisi (WebP, kualitas 72)
- Font Inter (subset `latin` dan `latin-ext`)
- Font Material Symbols Outlined, beserta aturan kelas `.material-symbols-outlined`

Satu-satunya URL eksternal yang tersisa adalah `wa.me` pada tombol WhatsApp.
Itu hanya dibuka bila peserta benar-benar mengeklik tombolnya, dan itu perilaku
yang memang dimaksud.

## Batasan yang perlu diketahui

- **Gambar sumber hanya 512 x 512.** Di layar besar, foto hero terlihat kurang
  tajam. Ini kondisi aset aslinya, bukan efek proses konversi.
- **Font ikon berukuran 1,1 MB** dan menyumbang sekitar 68% ukuran berkas.
  Hanya 68 ikon yang dipakai. Kalau ukuran menjadi masalah, ikon dapat di-subset
  menjadi sekitar 100 KB dengan memasang modul Python `brotli` (butuh
  `pip install brotli`).
- **Setiap berkas berisi salinan aset yang sama**, jadi total dua berkas sekitar
  6,5 MB. Kalau lebih hemat ruang lebih penting daripada dua berkas terpisah,
  kedua aplikasi bisa digabung ke satu paket zip.
- **Status mudah hilang.** Jangan menandai apa pun di dalam halaman ini; isi
  formulir atau catatan di luar berkas.

## Membangun ulang

```
# 1. ambil aset eksternal (sekali saja; setelahnya build bisa luring)
python portable/fetch-offline-assets.py

# 2. build kedua aplikasi ke folder terpisah
cd profix---professional-home-services
node .\node_modules\vite\bin\vite.js build --base=./ --outDir dist-portable
cd ..

cd "profix---digital-home-care-&-services"
node .\node_modules\vite\bin\vite.js build --base=./ --outDir dist-portable
cd ..

# 3. gabung jadi berkas tunggal
node portable/build-portable.mjs profix---professional-home-services/dist-portable portable/ProFix-Layanan-Indonesia.html "ProFix | Layanan Rumah Tangga (Prototipe Riset)"
node portable/build-portable.mjs "profix---digital-home-care-&-services/dist-portable" portable/ProFix-Digital-Home-Care.html "ProFix Digital Home Care (Design Reference)"
```

`fetch-offline-assets.py` menyimpan unduhan di `portable/.cache/`, sehingga
build berikutnya tidak memerlukan internet. Skrip berhenti dengan pesan jelas
bila ada aset yang gagal diambil, dan **tidak** menulis berkas portable yang
rusak. `build-portable.mjs` juga menolak menulis bila masih ada referensi eksternal
atau skrip yang menempatkan `<script>` sebelum `#root`.

> Nama folder aplikasi digital mengandung `&`. Karena itu `npm run build` dan
> `npm run lint` gagal di sana pada Windows; panggil `node .\node_modules\...`
> secara langsung seperti di atas.

## Tidak menyentuh build yang dipakai sesi

Portable build menulis ke `dist-portable/`, bukan `dist/`. Folder `dist/` tetap
menjadi build studi yang tercatat di
[UT-plan/06-prototype-build-manifest.md](../UT-plan/06-prototype-build-manifest.md)
dan **tidak boleh** diganti dengan berkas di folder ini saat melaporkan hasil.

Keduanya `index.css` kedua aplikasi kini memakai
`@import "tailwindcss" source(none)` dengan daftar `@source` eksplisit. Tanpa
itu, Tailwind memindai seluruh repositori dan markup apa pun yang ditambahkan
nanti diam-diam menyuntikkan utilitas tambahan sehingga hash CSS berubah dan
build studi tidak bisa direproduksi.

## Verifikasi

Kedua berkas sudah diuji dengan jaringan diblokir sepenuhnya
(`--host-resolver-rules="MAP * ~NOTFOUND"`) dan dirender dari `file://`:
Tailwind, font, ikon, dan gambar seluruhnya termuat. Halaman beranda, katalog,
dan detail sudah diperiksa. Perilaku responsif pada lebar ponsel dan
perilaku fokus keyboard **belum** diverifikasi di berkas portabel.
