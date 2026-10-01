# Form Evaluator Heuristik dan Kit Analisis

**Versi:** 0.1, instrumen rancangan  
**Status:** Perlu persetujuan tim/etik dan pilot sebelum sesi formal. Gunakan bersama `01-study-protocol.md` dan `02-moderator-and-participant-materials.md`.

## A. Lembar Evaluasi Heuristik Nielsen

**Versi prototipe/build:**  
**Tanggal:**  
**Evaluator ID:**  
**Perangkat/viewport:**  
**Halaman/screen:**  

Untuk tiap masalah, isi bukti yang dapat diamati. Beri **Good** hanya jika ada bukti spesifik yang patut dipertahankan. Gunakan **Needs Manual Review** jika perilaku tidak dapat dipastikan dari inspeksi; jangan menebak.

| ID | Heuristik | Pertanyaan inspeksi ringkas |
|---|---|---|
| H1 | Visibilitas status sistem | Apakah pilihan, validasi, penyimpanan, loading, dan penyelesaian memberi umpan balik yang akurat? Apakah label “simulasi” terlihat? |
| H2 | Kecocokan sistem dengan dunia nyata | Apakah bahasa, unit, wilayah, harga, layanan, dan status sesuai konteks pengguna/mitra? |
| H3 | Kontrol dan kebebasan pengguna | Dapatkah pengguna kembali, membatalkan, memperbaiki input, menutup dialog, dan menggunakan tombol Back tanpa kehilangan konteks? |
| H4 | Konsistensi dan standar | Apakah istilah, harga, komponen, dan respons serupa konsisten di seluruh layar? |
| H5 | Pencegahan kesalahan | Apakah tanggal, alamat, kode pos, biaya, status bayar, dan data sensitif divalidasi sebelum submit? |
| H6 | Pengenalan alih-alih ingatan | Apakah opsi, kategori, hasil pencarian, pilihan aktif, dan konteks tampak tanpa mengandalkan ingatan? |
| H7 | Fleksibilitas dan efisiensi | Apakah pencarian, filter, jalur navigasi, dan tugas umum dapat dilakukan dengan sedikit langkah tanpa menyembunyikan opsi? |
| H8 | Estetika dan desain minimalis | Apakah hierarki dan kepadatan informasi mendukung tugas? Apakah panel reviewer/demo mengganggu alur peserta? |
| H9 | Membantu mengenali, mendiagnosis, dan memulihkan kesalahan | Apakah kesalahan menyebut bidang/masalah dan langkah pemulihan yang jelas? Apakah konteks input dipertahankan? |
| H10 | Bantuan dan dokumentasi | Apakah penjelasan, FAQ, kebijakan, dan kontak tersedia tepat saat diperlukan tanpa klaim yang tidak diverifikasi? |

### Format temuan evaluator

| Field | Isi |
|---|---|
| Finding ID | E-__ |
| Screen / kontrol / selektor | Nama layar dan kontrol spesifik |
| Heuristik | H1–H10 |
| Bukti | Tindakan dan respons aktual; sertakan teks persis bila perlu |
| Dampak pada tugas | Apa yang tidak dapat dipahami/diselesaikan atau risiko apa yang timbul? |
| Frekuensi/jangkauan | Satu kontrol, satu layar, atau seluruh alur? |
| Severity | Critical / Major / Minor / Good / Needs Manual Review / N/A |
| Rekomendasi | Perubahan yang dapat diuji |
| Status | Open / Accepted / Rejected with reason / Fixed / Retested |

### Skala severity

- **Critical:** mencegah tugas atau berisiko membuat keputusan/kerugian serius.
- **Major:** kebingungan/hambatan signifikan, meski ada workaround.
- **Minor:** friksi yang terlihat, tetapi tugas umumnya dapat diselesaikan.
- **Good:** praktik yang didukung bukti dan layak dipertahankan.
- **Needs Manual Review:** perlu perilaku/runtime/konteks yang belum tersedia.
- **N/A:** tidak relevan dengan layar.

Catat satu masalah sekali lalu tautkan layar terkait; jangan menggandakan temuan hanya untuk memperbesar hitungan. Evaluator bekerja independen sebelum sesi konsensus.

## B. Lembar Observasi Peserta

**Participant ID:** `P__`  
**Tanggal/waktu:**  
**Versi build:**  
**Moderator:**  
**Pencatat:**  
**Perangkat/viewport:**  

| Tugas | Hasil (mandiri / dengan bantuan / gagal) | Waktu (jika konsisten dicatat) | Kesalahan/keraguan | Bantuan moderator | Bukti/ucapan anonim | Tingkat keyakinan (opsional) |
|---|---|---:|---|---|---|---:|
| T1 | | | | | | |
| T2 | | | | | | |
| T3 | | | | | | |
| T4 | | | | | | |
| T5 | | | | | | |
| T6 | | | | | | |
| T7 | | | | | | |
| T8 | | | | | | |

**Kode bantuan:** 0 = tidak dibantu; 1 = prompt netral; 2 = prompt eksplorasi; 3 = bantuan langsung. Catat apa yang benar-benar diucapkan, bukan interpretasi sebagai kutipan.

## C. Catatan Insiden

| Incident ID | Participant | Task | Screen/control | Kejadian observasi | Dampak | Recovery | Severity awal | Follow-up |
|---|---|---|---|---|---|---|---|---|
| I-__ | P__ | T__ | | | | | | |

Pisahkan fakta teramati (mis. peserta menekan tombol A dua kali) dari interpretasi (mis. peserta tidak yakin tombol bekerja). Gunakan catatan waktu bila tersedia.

## D. Kode Awal untuk Analisis Kualitatif

Gunakan sebagai titik awal dan ubah berdasarkan data, bukan sebagai kategori paksa:

- `SERVICE_FINDABILITY`: menemukan kategori/layanan.
- `TERMINOLOGY`: istilah atau label tidak dipahami.
- `SCOPE_UNDERSTANDING`: memahami apa yang termasuk/tidak termasuk.
- `PRICE_TRUST`: harga, mata uang, biaya, dan status harga contoh.
- `SCHEDULE`: memahami dan memilih tanggal/waktu.
- `ADDRESS_VALIDATION`: mengisi dan memperbaiki lokasi.
- `PAYMENT_EXPECTATION`: memahami metode simulasi dan apakah ada tagihan.
- `CONTACT_EXPECTATION`: memahami WhatsApp/kontak dan apakah pesan terkirim.
- `NAVIGATION_CONTROL`: Back, kembali, batal, perpindahan screen.
- `TRUST_CLAIM`: interpretasi ulasan, garansi, sertifikasi, asuransi.
- `ACCESSIBILITY`: keyboard, label, fokus, keterbacaan, target sentuh.
- `STATUS_FEEDBACK`: feedback setelah tindakan, error, atau penyimpanan.

Untuk setiap kode, simpan definisi, kriteria inklusi/eksklusi, contoh data anonim, dan perubahan definisi. Jangan membuat kutipan atau frekuensi dari memori.

## E. Rencana Sintesis

1. Bekukan versi prototipe dan protokol sebelum sesi formal; catat commit/build dan tanggal.
2. Ringkas hasil tugas sebagai `n/N` untuk mandiri, dengan bantuan, dan gagal. Laporkan data hilang serta aturan pencatatan waktu.
3. Laporkan hasil 10 evaluator secara terpisah dari peserta. Cantumkan jumlah temuan per severity hanya setelah temuan duplikat direkonsiliasi.
4. Lakukan affinity mapping dari insiden dan catatan yang dianonimkan. Setiap tema harus dapat ditelusuri ke ID bukti.
5. Prioritaskan perbaikan berdasarkan dampak keberhasilan/keselamatan/kepercayaan, frekuensi, dan upaya. Dokumentasikan keputusan yang ditolak beserta alasannya.
6. Retest tugas yang terpengaruh setelah perbaikan. Laporkan temuan baru dan regresi, bukan hanya persentase keberhasilan.
7. Jika skala Likert 1–5 digunakan, tentukan pertanyaan dan jangkar sebelum pengumpulan. Sajikan distribusi atau statistik deskriptif dengan n dan denominator. Jangan gabungkan nilai tersebut dengan severity heuristik.
8. Hindari klaim “meningkatkan konversi”, “menurunkan cognitive load”, atau “mempercepat keputusan” kecuali metrik yang relevan benar-benar dikumpulkan dengan rancangan yang mendukung klaim.

## F. Template Tabel Hasil untuk Manuskrip

| Measure | Result | n | Evidence source | Interpretation/limitation |
|---|---:|---:|---|---|
| Tugas berhasil mandiri | [isi setelah analisis] | | Observasi sesi | |
| Tugas berhasil dengan bantuan | [isi setelah analisis] | | Observasi sesi | |
| Tugas tidak selesai | [isi setelah analisis] | | Observasi sesi | |
| Isu heuristik Critical/Major/Minor | [isi setelah konsensus evaluator] | | Inspeksi ahli | Bukan skor peserta |
| Tema kualitatif | [isi setelah coding] | | Think-aloud/wawancara | Gunakan kutipan yang diverifikasi |
| Rating kemudahan pascatugas (jika disetujui) | [isi setelah kalkulasi] | | Instrumen peserta | Definisikan item, jangkar, dan denominator |

Biarkan sel kosong atau tulis **Belum dikumpulkan** sampai ada data. Jangan gunakan angka dummy untuk mengisi tabel.
