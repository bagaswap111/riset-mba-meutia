# Evaluasi Heuristik Usability — Build 2026-10-02

**Tanggal:** 2026-10-02
**Status:** Audit berbasis kode. **Bukan** studi pengguna dan bukan uji browser. Tidak ada skor peserta, tidak ada kutipan, tidak ada hasil yang berasal dari sesi.
**Menggantikan:** [profix-usability-heuristics-evaluation.md](profix-usability-heuristics-evaluation.md) (audit 2026-10-01). Berkas lama dipertahankan sebagai catatan historis dan **tidak boleh dikutip** sebagai temuan terkini; temuan di sana sudah usang.

## 1. Cakupan dan Stimulus

| Atribut | Nilai |
|---|---|
| Prototipe kanonis | `profix---professional-home-services` |
| Prototipe referensi | `profix---digital-home-care-&-services` |
| Basis repositori | `7c4b329` + perubahan lokal yang belum di-commit |
| Verifikasi build | `tsc --noEmit` bersih; `vite build` sukses pada kedua aplikasi |
| Metode | Inspeksi kode terhadap 10 Heuristik Nielsen + modul aksesibilitas (WCAG 2.4, 4.1, 3.3) |
| Bukti | Kutipan baris kode dan nama kontrol |

Build yang diuji di sini **belum pernah diuji oleh peserta**. Angka dari berkas ini hanya dapat mendukung pernyataan tentang antarmuka, bukan tentang pengalaman pengguna.

## 2. Ringkasan Temuan

Jumlah temuan berbeda. Satu temuan yang memengaruhi beberapa layar dihitung satu kali.

### Prototipe Kanonis (Professional Home Services)

| Severity | Jumlah | Ringkas |
|---|---:|---|
| Critical | 0 | Tidak ada lagi. Total tidak lagi terpisah dari layanan terpilih. |
| Major | 0 | N1 dan N2 sudah diperbaiki. Lihat bagian 3a. |
| Minor | 0 | N3 sampai N6 sudah diperbaiki. Lihat bagian 3a. |
| Good | 7 | Lihat bagian 3 |
| Manual review | 3 | Lihat bagian 6 |

Status nol di atas berlaku untuk audit lanjutan yang dilakukan pada build yang sama setelah perbaikan N1–N6. Temuan yang dihitung dalam audit **awal** tetap 2 Major dan 4 Minor dan tidak dihapus dari riwayat.

### Prototipe Referensi (Digital Home Care & Services)

Dievaluasi dangkal karena bukan stimulus sesi.

| Severity | Jumlah | Ringkas |
|---|---:|---|
| Critical | 0 | — |
| Major | 0 | D-1 sudah diperbaiki dengan `Modal` bersama. |
| Minor | 0 | D-2 sudah diperbaiki dengan listener `hashchange`. |
| Good | 3 | Lihat bagian 5 |
| Manual review | 2 | Lihat bagian 6 |

## 3a. Status Perbaikan Temuan Baru

Semua temuan baru pada build awal telah diperbaiki. Perbaikan ini dilakukan pada build yang sama; perbarui stempel waktu pada bagian 1 bila prototipe berubah lagi.

| ID | Temuan | Perbaikan | Bukti |
|---|---|---|---|
| N1 | Major — harga beranda berbeda dari katalog dan detail | `FLAT_RATE_SERVICES` dihapus. `FEATURED_SERVICES` diturunkan dari `SERVICES`, sehingga judul, deskripsi, dan harga selalu identik dengan katalog. | [mockData.ts](../profix---professional-home-services/src/data/mockData.ts) [HomeScreen.tsx](../profix---professional-home-services/src/screens/HomeScreen.tsx) |
| N2 | Major — tidak ada indikator fokus keyboard | `focus-within:ring-2` ditambahkan pada label metode pembayaran di checkout dan label observasi di support dialog. | [CheckoutScreen.tsx](../profix---professional-home-services/src/screens/CheckoutScreen.tsx) [SupportModal.tsx](../profix---professional-home-services/src/components/SupportModal.tsx) |
| N3 | Minor — `setTimeout(…, 100)` untuk menggulir section | Diganti polling berbasis `requestAnimationFrame` yang mencari target di DOM, dengan batas percobaan. | [Header.tsx](../profix---professional-home-services/src/components/Header.tsx) |
| N4 | Minor — aset `mapDubai` masih tersimpan | Aset dihapus dari `IMAGES`; tidak ada lagi referensi. | [mockData.ts](../profix---professional-home-services/src/data/mockData.ts) |
| N5 | Minor — ikon stepper bertentangan dengan teks | Stepper dibuat berbasis data. Hanya "Pemesanan Dikonfirmasi" yang ditandai selesai; langkah technisi dan perjalanan kini غير aktif, dan ada catatan eksplisit bahwa prototipe tidak menugaskan teknisi. | [TrackTechnicianScreen.tsx](../profix---professional-home-services/src/screens/TrackTechnicianScreen.tsx) |
| N6 | Minor — tidak ada jalur pemesanan ulang | Tombol "Pesan Layanan Lain" pada halaman konfirmasi membersihkan isian pesanan dan kembali ke katalog. | [App.tsx](../profix---professional-home-services/src/App.tsx) [OrderConfirmationScreen.tsx](../profix---professional-home-services/src/screens/OrderConfirmationScreen.tsx) |
| — | Kode pos terpotong diam-diam | `maxLength` dihapus agar penangan manual dapat mendeteksi input berlebih, dan pesan "Kode pos dipotong menjadi lima digit pertama" ditampilkan dengan `role="alert"`. | [CheckoutScreen.tsx](../profix---professional-home-services/src/screens/CheckoutScreen.tsx) |
| D-1 | Major — tiga dialog tanpa semantik dialog | `Modal` samen di-port ke aplikasi digital. Ketiga dialog kini memakai `role="dialog"`, `aria-modal`, Escape, backdrop close, focus trap, dan pemulihan fokus. | [Modal.tsx](../profix---digital-home-care-&-services/src/components/Modal.tsx) |
| D-2 | Minor — hanya `popstate` | `hashchange` ditambahkan ke listener di `App.tsx`. | [App.tsx](../profix---digital-home-care-&-services/src/App.tsx) |

## 3. Prototipe Kanonis — Hasil per Layar

Rating: ✅ Good · 🔴 Major · ⚠️ Minor · ❌ Critical · 🔍 Manual review

| Layar | Heuristik | Rating | Temuan dan bukti |
|---|---|---|---|
| Katalog layanan | H4 / H2 | 🔴 Major | **N1.** Kartu beranda mengiklankan harga yang berbeda dari katalog dan detail. `FLAT_RATE_SERVICES` menyatakan `startingPrice` 49 / 39 / 59 untuk AC, perpipaan, dan pompa, sedangkan `SERVICES` menyatakan `price` 55 / 89 / 75. Ketiganya memakai `serviceId` yang sama, jadi mengarahkan pengguna ke halaman detail dengan harga berbeda dari yang baru saja dilihat. [mockData.ts:193-215](../profix---professional-home-services/src/data/mockData.ts) [HomeScreen.tsx:126](../profix---professional-home-services/src/screens/HomeScreen.tsx) |
| Checkout — metode pembayaran | A11Y 2.4.7 | 🔴 Major | **N2.** Input radio memakai `className="sr-only"` di dalam `<label>`, tetapi label tidak memakai `focus-within` maupun `has-[:focus-visible]`. Keyboard dapat mencapai kontrol, tetapi tidak ada indikator fokus yang terlihat. Pola sama di `SupportModal`. [CheckoutScreen.tsx:394,419](../profix---professional-home-services/src/screens/CheckoutScreen.tsx) [SupportModal.tsx:79](../profix---professional-home-services/src/components/SupportModal.tsx) |
| Header | H3 | ⚠️ Minor | **N3.** Tautan "Proses", "Hasil", dan "FAQ" menavigasi ke beranda lalu memanggil `scrollToSection` melalui `window.setTimeout(..., 100)`. Bila render beranda lebih lambat dari 100 ms, penggulirannya gagal diam-diam. [Header.tsx:25-32](../profix---professional-home-services/src/components/Header.tsx) |
| Halaman lacak teknisi | H1 / H4 | ⚠️ Minor | **N5.** Langkah "Teknisi Ditugaskan" memakai ikon centang dan bulatan terisi seperti langkah yang selesai, sementara teksnya berbunyi "Belum ada teknisi yang ditugaskan". Indikator visual dan label saling bertentangan. [TrackTechnicianScreen.tsx:228-232](../profix---professional-home-services/src/screens/TrackTechnicianScreen.tsx) |
| Alur pemesanan | H3 | ⚠️ Minor | **N6.** Setelah konfirmasi, tidak ada aksi untuk menghapus pesanan dan memulai ulang. Halaman konfirmasi hanya menawarkan lacak simulasi dan kembali ke beranda. Seorang peserta yang ingin memesan layanan berbeda harus memulai sesi baru. |
| Data mock | H2 | ⚠️ Minor | **N4.** Aset `mapDubai` masih tersimpan di `mockData.ts:19` meski tidak dirender. Sisa aset peta asing membingungkan saat audit lanjutan. |
| Checkout — alamat | H5 / H9 | ⚠️ Minor | Kode pos membatasi `maxLength={5}` dan membuang karakter non-digit tanpa memberi tahu. Tempelan kode pos 6 digit terpotong diam-diam. Tidak ada pesan yang menjelaskan pemotongan. [CheckoutScreen.tsx:331,337](../profix---professional-home-services/src/screens/CheckoutScreen.tsx) |
| Katalog layanan | H6 / H9 | ✅ Good | Pencarian, filter kategori yang diturunkan dari data beserta jumlahnya, dan keadaan kosong dengan aksi reset filter. Kartu bukan lagi `div` klik-tunable; aksi pemesanan memakai `<button>` sungguhan. |
| Checkout — validasi | H5 / H9 | ✅ Good | Galat per bidang dengan `role="alert"`, `aria-invalid`, dan `aria-describedby`. Fokus diarahkan ke kontrol pertama yang salah, baik jadwal (tombol tanggal pertama) maupun alamat. Isian yang sudah diketik tidak hilang saat validasi gagal. |
| Checkout — stepper | H1 | ✅ Good | Stepper membaca status sebenarnya dari isian tanggal, slot, alamat, dan kode pos, bukan menampilkan langkah selesai secara statis. |
| Dialog | A11Y 2.1.1 / 2.4.3 | ✅ Good | `Modal` bersama menyediakan `role="dialog"`, `aria-modal`, pelabelan yang benar, penutupan dengan Escape dan klik backdrop, focus trap, serta pemulihan fokus. `onClose` dibaca lewat ref sehingga effect tidak berjalan ulang tiap render dan merebut fokus. [Modal.tsx:33-83](../profix---professional-home-services/src/components/Modal.tsx) |
| Navigasi | H3 | ✅ Good | Perutean berbasis hash dengan `pushState`, `popstate`, dan `hashchange`, sehingga tombol Back/Forward mencerminkan perjalanan pengguna. Layar yang membutuhkan pesanan dialihkan ke katalog bila pesanan belum dikonfirmasi, disertai banner penjelasan. |
| Katalog → detail | H2 | ✅ Good | Konten detail diturunkan dari layanan terpilih. Setiap layanan memiliki tahapan prosesnya sendiri; tidak ada lagi konten khusus AC yang dipakai ulang. Harga, kategori, dan durasi berasal dari satu sumber data. |
| Kontak WhatsApp | H2 / H10 | ✅ Good | WhatsApp diposisikan sebagai jalur kontak, bukan metode pembayaran, dan disclosure "nomor mitra belum dikonfigurasi" ditampilkan sebelum membuka `wa.me`. |
| Kredensial | H2 | ✅ Good | Layar autentikasi dinyatakan eksplisit sebagai simulasi tanpa akun, label terasosiasi dengan benar, dan klaim pemulihan kata sandi yang tidak benar telah dihapus. |

## 4. Status Temuan Audit 2026-10-01

| ID lama | Temuan lama | Status kini | Bukti |
|---|---|---|---|
| C-1 | **Critical:** checkout selalu `$55 + $4.50 + $4.76` | **Teratasi** | Total dihitung dari `calculateBookingTotals(service.price)` dan dibawa ke konfirmasi serta kuitansi. |
| M-1 | **Major:** detail memakai gambar dan inclusions AC untuk semua layanan | **Teratasi** | `processSteps` per layanan; konten detail diturunkan dari `service`. |
| M-2 | **Major:** halaman lacak mengklaim GPS real-time dan menampilkan peta Dubai | **Teratasi** | Peta dan teks sudah dilabeli sebagai simulasi. Aset peta asing masih ada sebagai data mati — lihat N4. |
| M-3 | **Major:** dialog WhatsApp hanya mengubah state lokal tanpa membuka WhatsApp | **Teratasi** | Membuka `wa.me` dan menampilkan status setelah tab terbuka. |
| M-4 | **Major:** tab "Buat Akun" tidak mengumpulkan data pendaftaran | **Teratasi** | Layar dinyatakan simulasi; tidak ada klaim akun sungguhan. |
| M-5 | **Major:** label tidak terasosiasi; kartu dan pilihan pembayaran non-semantik | **Teratasi** | `htmlFor`/`id` ditambahkan; kartu memakai tombol; pembayaran memakai radio. Indikator fokus keyboard masih kurang — lihat N2. |
| M-6 | **Major:** selektor layar "Pilih Layar Demo" di UI pelanggan | **Teratasi** | Berkas `ScreenSwitcher.tsx` dihapus. |
| m-1 | **Minor:** tautan section kembali ke beranda tanpa menggulir; pencarian header tidak membawa kueri | **Sebagian** | Kueri sekarang dibawa ke katalog. Mekanisme menggulir masih bergantung pada `setTimeout` — lihat N3. |
| m-2 | **Minor:** Back/Forward tidak mencerminkan perjalanan | **Teratasi** | Hash routing plus `popstate` dan `hashchange`. |

Temuan lama pada aplikasi digital (WhatsApp Pay disetujui, substitusi alamat diam-diam, komentar heuristik di UI, selektor layar) **semuanya teratasi**.

## 5. Temuan Baru pada Aplikasi Digital

| ID | Severity | Heuristik | Temuan |
|---|---|---|---|
| D-1 | Major | A11Y 2.1.1 / 2.4.3 | `ReceiptModal`, `TechnicianTrackingModal`, dan `WhatsAppModal` tidak memakai `role="dialog"`, `aria-modal`, dukungan Escape, maupun focus trap. Tidak ada `Modal` bersama di aplikasi ini. |
| D-2 | Minor | H3 | `App.tsx` mendengarkan `popstate` tetapi tidak `hashchange`, sehingga perubahan hash manual tidak menyinkronkan tampilan. |

Catatan: aplikasi ini berbahasa Inggris dan sengaja dipertahankan sebagai referensi desain, bukan stimulus sesi. Temuan di atas dicatat agar tidak terlewat bila aplikasi ini nanti dipakai.

## 6. Yang Belum Dapat diverifikasi

Pemeriksaan berikut tetap memerlukan browser sungguhan dan **tidak boleh dilaporkan sebagai sudah dicek**:

1. Rasio kontras hasil render aktual, khususnya teks kecil abu-abu di atas dasar terang.
2. Perilaku layout responsif pada lebar 360 px dan 768 px.
3. Perilaku fokus keyboard di runtime, termasuk apakah `Modal` menahan fokus dengan benar dan memulihkannya.
4. Kecepatan serta keberhasilan pemuatan gambar eksternal.
5. Perilaku zoom dan teks besar.
6. Ketepatan terjemahan untuk pembacaanmarshaller baca.

## 7. Perbaikan Prioritas

1. **N1 — Major.** Turunkan `FLAT_RATE_SERVICES` dari `SERVICES` agar beranda, katalog, dan detail memakai satu angka. Konflik harga adalah temuan paling merusak untuk validitas uji transparansi harga.
2. **N2 — Major.** Tambahkan indikator fokus terlihat pada grup metode pembayaran.
3. **N5 — Minor.** Selaraskan ikon stepper lacak dengan teksnya.
4. **N3 — Minor.** Ganti `setTimeout` dengan pengguliran berbasis `requestAnimationFrame` atau refocus berbasis elemen.
5. **N6 — Minor.** Tambahkan aksi "Pesan lagi" pada halaman konfirmasi.
6. **N4 — Minor.** Hapus aset peta yang tidak dipakai.
7. **Kode pos.** Beri tahu pengguna saat input dipotong.
8. **D-1.** Porting `Modal` bersama ke aplikasi digital bila aplikasi ini akan dipakai.

## 8. Batasan Evaluasi

- Ini audit kode, bukan uji pengguna. Tidak ada skor, kutipan, atau temuan peserta di berkas ini.
- Severitas mengikuti skala pada `UT-plan/03-evaluator-and-analysis-kit.md`. Diberi satu evaluator, bukan tiga; tidak ada rekonsiliasi antar-evaluator.
- Tidak ada rekaman perilaku. Temuan tentangingo perilaku pengguna tidak dapat dinyatakan dari sini.
- Angka mana pun dalam `paper/draft-paper.md` tidak dapat diturunkan dari berkas ini. Evaluasi heuristik adalah severity kategorikal, bukan skala Likert, dan tidak boleh diubah menjadi skor rerata.
- Klaim seperti "trust score naik 42%", "bounce rate turun", atau "task completion meningkat" tidak dapat diuji tanpa instrumen dan rancangan yang sesuai.
