# Product Requirements Document (PRD)
# Website Satgas PPKPT — Institut Teknologi Statistika dan Bisnis Muhammadiyah Semarang (ITESA Muhammadiyah Semarang)

| Metadata | Keterangan |
|---|---|
| Nama Produk | Website Satgas PPKPT ITESA Muhammadiyah Semarang |
| Versi Dokumen | 1.0 |
| Tanggal | 11 September 2026 |
| Status | Draft — untuk review Satgas PPKPT & Pimpinan Kampus |
| Pemilik Produk | Satgas PPKPT ITESA Muhammadiyah Semarang |
| Referensi Utama | ppks.ub.ac.id (Satgas PPKPT Universitas Brawijaya) |

---

## 1. Ringkasan Eksekutif

Website ini adalah kanal resmi digital milik **Satuan Tugas Pencegahan dan Penanganan Kekerasan Seksual di Perguruan Tinggi (Satgas PPKPT)** ITESA Muhammadiyah Semarang. Produk ini berfungsi sebagai pusat informasi, edukasi, dan pintu pelaporan yang aman bagi seluruh sivitas akademika (mahasiswa, dosen, tenaga kependidikan) terkait pencegahan dan penanganan kekerasan seksual serta perundungan di lingkungan kampus.

Referensi fungsional utama adalah situs **ppks.ub.ac.id**, dengan penyesuaian identitas visual baru: warna primer **biru `#1B5ED1`** dipadukan **kuning** sebagai warna aksen, serta gaya UI yang modern dan profesional — namun tetap terasa **aman, hangat, dan dapat dipercaya**, mengingat sifat sensitif dari topik yang dibawa.

---

## 2. Latar Belakang

- Permendikbudristek No. 30 Tahun 2021 mewajibkan setiap perguruan tinggi membentuk Satgas PPKS/PPKPT dan menyediakan kanal pelaporan yang mudah diakses, rahasia, dan berpihak pada korban.
- Saat ini ITESA Muhammadiyah Semarang membutuhkan kanal digital resmi agar informasi Satgas, alur pelaporan, dan layanan pendampingan mudah ditemukan oleh sivitas akademika, sekaligus menjadi bukti kepatuhan institusi terhadap regulasi.
- Website acuan (ppks.ub.ac.id) telah menunjukkan pola informasi yang efektif: profil tim & struktur organisasi, dasar hukum, SOP/alur pelaporan, daftar layanan, formulir pelaporan eksternal, dan kanal kontak cepat (WhatsApp/Email).

## 3. Tujuan Produk

1. Menyediakan **informasi resmi dan tepercaya** tentang Satgas PPKPT ITESA Muhammadiyah Semarang (profil, struktur, tugas, dasar hukum).
2. Menyediakan **kanal pelaporan yang mudah, aman, dan rahasia** bagi korban/saksi kekerasan seksual dan perundungan.
3. Memberi **edukasi dan pencegahan** melalui konten, modul, dan buku panduan yang dapat diunduh.
4. Mempermudah sivitas akademika **menghubungi Satgas** secara cepat (WhatsApp, email, lokasi).
5. Menghadirkan **identitas visual baru** (biru `#1B5ED1` + kuning) yang modern, profesional, sekaligus menenangkan dan tidak mengintimidasi pengguna yang sedang dalam kondisi rentan.

## 4. Ruang Lingkup

### Termasuk (In-Scope)
- Website publik (front-end) responsif desktop & mobile.
- Formulir pelaporan online terintegrasi (bukan hanya tautan Google Form eksternal, tapi juga opsi sistem pelaporan internal dengan mode anonim).
- Panel admin/CMS sederhana untuk tim Satgas mengelola konten, dokumen unduhan, dan laporan masuk.
- Halaman informasi statis: profil, struktur organisasi, tugas & wewenang, prinsip PPKPT, SOP/alur pelaporan, layanan, unduhan/regulasi, kontak.
- Integrasi kanal komunikasi cepat: WhatsApp Click-to-Chat, email, media sosial.

### Tidak Termasuk (Out-of-Scope) — Fase 1
- Sistem manajemen kasus end-to-end (case management) yang terhubung ke sistem akademik/SDM kampus.
- Live chat/chatbot AI (dapat menjadi roadmap fase berikutnya).
- Aplikasi mobile native (Android/iOS).
- Integrasi Single Sign-On (SSO) dengan akun kampus (opsional fase 2 untuk login pelapor terverifikasi).

## 5. Target Pengguna & Persona

| Persona | Kebutuhan Utama |
|---|---|
| **Mahasiswa** (calon pelapor/korban/saksi) | Mencari info cara melapor secara cepat, aman, dan rahasia; ingin tahu apa yang akan terjadi setelah melapor. |
| **Dosen & Tenaga Kependidikan** | Referensi regulasi, SOP, serta cara mendampingi/merujuk mahasiswa yang mengalami kekerasan seksual. |
| **Orang Tua / Wali** | Meyakinkan diri bahwa kampus memiliki sistem perlindungan yang jelas. |
| **Anggota Satgas PPKPT (Admin)** | Mengelola konten situs, memantau laporan masuk, mengunggah dokumen SOP/regulasi terbaru. |
| **Pimpinan Kampus / BAN-PT / Kemdiktisaintek** | Verifikasi kepatuhan terhadap Permendikbudristek No. 30/2021. |

## 6. Insight dari Referensi (ppks.ub.ac.id)

Struktur navigasi & fitur pada situs referensi yang diadaptasi:

| Menu Referensi | Adaptasi untuk ITESA Muhammadiyah Semarang |
|---|---|
| Beranda (hero + tentang kami + lokasi/kontak) | Dipertahankan, dengan tambahan CTA "Laporkan Sekarang" yang lebih menonjol |
| Tentang Satgas PPKPT (Tim, Struktur Organisasi, Tugas & Wewenang, Prinsip PPKPT) | Dipertahankan penuh sebagai submenu |
| Alur Pelaporan (SOP, dokumen PDF) | Dipertahankan, ditambah **visual infografis alur** agar lebih mudah dipahami tanpa harus membuka PDF |
| Informasi & Unduhan (Rujukan Aturan, Unduhan) | Dipertahankan |
| Layanan (psikoedukasi, konseling, konsultasi hukum, pendampingan, buku panduan) | Dipertahankan |
| Laporkan (form eksternal Google Form) | Ditingkatkan: form internal di dalam situs + opsi anonim + nomor tiket pelacakan |
| Hubungi Kami (WA, Email, lokasi) | Dipertahankan, ditambah peta lokasi interaktif |
| Media sosial & tautan terkait (UB Care, UB) | Diadaptasi ke Instagram/kanal resmi ITESA & tautan resmi ITESA Muhammadiyah Semarang |

---

## 7. Arsitektur Informasi (Sitemap)

```
Beranda
├── Tentang Satgas PPKPT
│   ├── Profil & Tim Satgas
│   ├── Struktur Organisasi
│   ├── Tugas dan Wewenang
│   └── Prinsip & Dasar Hukum PPKPT
├── Alur Pelaporan
│   ├── SOP / Alur Pelaporan (infografis + unduhan PDF)
│   └── Apa yang Terjadi Setelah Melapor?
├── Layanan
│   ├── Psikoedukasi & Pelatihan
│   ├── Layanan Konseling
│   ├── Konsultasi Hukum
│   └── Layanan Pendampingan
├── Informasi & Unduhan
│   ├── Rujukan Peraturan PPKPT (Permendikbudristek No. 30/2021, Statuta, SK Rektor/Direktur)
│   └── Pusat Unduhan (buku panduan, modul, poster edukasi)
├── Laporkan (Form Pelaporan Online — anonim/teridentifikasi)
├── Lacak Laporan (cek status via kode tiket)
├── Artikel / Edukasi (opsional, blog kampanye pencegahan)
├── Hubungi Kami (WA, Email, Lokasi, Peta)
└── [Panel Admin — internal, tidak publik]
    ├── Login Satgas
    ├── Manajemen Konten (CMS)
    ├── Manajemen Laporan Masuk
    └── Manajemen Dokumen Unduhan
```

---

## 8. Kebutuhan Fungsional (Functional Requirements)

Skala prioritas: **M**ust have, **S**hould have, **C**ould have.

### 8.1 Beranda
| Fitur | Deskripsi | Prioritas |
|---|---|---|
| Hero Section | Tagline institusi, visual menenangkan, CTA utama "Laporkan Sekarang" & "Pelajari Layanan Kami" | M |
| Ringkasan Tentang Kami | Deskripsi singkat Satgas PPKPT ITESA Muhammadiyah Semarang | M |
| Akses Cepat (Quick Links) | Kartu shortcut ke: Cara Melapor, Layanan, Kontak Darurat | M |
| Info Lokasi & Kontak | Alamat sekretariat, WA, email, jam layanan | M |
| Highlight Kegiatan/Edukasi | Berita/kegiatan psikoedukasi terbaru | S |

### 8.2 Tentang Satgas PPKPT
| Fitur | Deskripsi | Prioritas |
|---|---|---|
| Profil & Tim Satgas | Foto, nama, jabatan anggota Satgas | M |
| Struktur Organisasi | Bagan organisasi (visual, bukan hanya gambar statis) | M |
| Tugas dan Wewenang | Rincian tugas sesuai regulasi | M |
| Prinsip PPKPT | Prinsip kerahasiaan, non-diskriminasi, kepentingan terbaik penyintas, dll. | M |

### 8.3 Alur Pelaporan
| Fitur | Deskripsi | Prioritas |
|---|---|---|
| Infografis Alur Pelaporan | Visual step-by-step alur penanganan kasus | M |
| Unduhan Dokumen SOP (PDF) | SOP resmi yang dapat diunduh | M |
| FAQ Pelaporan | "Apakah identitas saya aman?", "Berapa lama proses?", dll. | S |

### 8.4 Layanan
| Fitur | Deskripsi | Prioritas |
|---|---|---|
| Katalog Layanan | Psikoedukasi, konseling, konsultasi hukum, pendampingan — dengan deskripsi & cara mengakses | M |
| Buku Panduan (PDF viewer/unduhan) | Panduan pencegahan & penanganan, panduan *psychological first aid* | M |
| Jadwal Konseling (opsional) | Kalender/slot jika layanan konseling tatap muka tersedia | C |

### 8.5 Formulir Pelaporan Online (fitur inti — peningkatan dari referensi)
| Fitur | Deskripsi | Prioritas |
|---|---|---|
|Fitur ini hanya dikosongkan dulu. selanjutntya akan diberi link rujukan ke google form tanpa database|
### 8.6 Informasi & Unduhan
| Fitur | Deskripsi | Prioritas |
|---|---|---|
| Rujukan Peraturan | Daftar & unduhan regulasi terkait (nasional & internal kampus) | M |
| Pusat Unduhan | Modul, poster, materi edukasi kampanye | M |
| Pencarian Dokumen | Fitur cari dokumen berdasarkan kata kunci/kategori | C |

### 8.7 Hubungi Kami
| Fitur | Deskripsi | Prioritas |
|---|---|---|
| Kontak WhatsApp (Click-to-Chat) | Tombol langsung membuka chat WA Satgas | M |
| Kontak Email | Tautan mailto & form kontak singkat | M |
| Peta Lokasi Interaktif | Embed peta lokasi sekretariat Satgas di kampus | S |
| Jam Operasional | Informasi jam layanan | M |

### 8.8 Panel Admin (CMS Internal)
| Fitur | Deskripsi | Prioritas |
|---|---|---|
| Login Aman (role-based) | Login khusus anggota Satgas dengan otentikasi kuat (min. 2FA) | M |
| Manajemen Konten Halaman | Edit teks, gambar, dokumen tanpa perlu developer | M |
| Manajemen Laporan Masuk | Dashboard laporan, ubah status, catatan internal, akses dibatasi per peran | M |
| Manajemen Anggota Tim | Update data/foto anggota Satgas | S |
| Log Aktivitas (Audit Trail) | Mencatat siapa mengakses/mengubah data laporan, untuk akuntabilitas | S |

---

## 9. Alur Pengguna Utama (User Flow) — Pelaporan

1. Pengguna membuka website → melihat CTA "Laporkan Sekarang" di Beranda/Navbar (selalu terlihat, warna kontras).
2. Diarahkan ke halaman **Alur Pelaporan** (opsional) atau langsung ke **Form Pelaporan**.
3. Pengguna memilih: **Lapor dengan Identitas** atau **Lapor Anonim**.
4. Mengisi kronologi, tanggal/waktu kejadian, lokasi, pihak terlibat (opsional), lampiran bukti.
5. Sistem menampilkan ringkasan & meminta konfirmasi sebelum mengirim.
6. Setelah submit → sistem menampilkan **nomor tiket** dan opsi menyimpan/mencatatnya, serta informasi langkah selanjutnya.
7. Notifikasi otomatis terkirim ke admin Satgas (bukan ke publik).
8. Admin Satgas menindaklanjuti melalui panel admin; pelapor dapat mengecek status via halaman **Lacak Laporan** dengan nomor tiket.

---

## 10. Kebutuhan Non-Fungsional

| Kategori | Kebutuhan |
|---|---|
| **Keamanan & Privasi** | HTTPS wajib di seluruh situs; enkripsi data laporan (at-rest & in-transit); akses data laporan dibatasi role-based (hanya Satgas terverifikasi); kepatuhan terhadap UU PDP (Perlindungan Data Pribadi); kebijakan retensi & penghapusan data. |
| **Kerahasiaan Pelapor** | Tidak ada data pelapor yang tampil publik; opsi anonim benar-benar tidak menyimpan metadata yang mudah mengidentifikasi (mis. IP disamarkan/di-hash). |
| **Aksesibilitas** | Mengikuti standar WCAG 2.1 AA — kontras warna memadai, navigasi keyboard, teks alternatif gambar; penting karena pengguna bisa dalam kondisi tertekan secara emosional. |
| **Performa** | Waktu muat halaman < 3 detik pada koneksi rata-rata; gambar teroptimasi. |
| **Responsif** | Mobile-first, karena mayoritas mahasiswa mengakses via ponsel. |
| **SEO & Temuan** | Meta tag jelas, sitemap.xml, terindeks agar mudah ditemukan lewat pencarian "PPKPT ITESA Muhammadiyah Semarang". |
| **Ketersediaan** | Uptime target ≥ 99.5%, terutama untuk fitur pelaporan. |
| **Skalabilitas** | Arsitektur mampu menangani lonjakan akses saat kampanye kesadaran/orientasi mahasiswa baru. |

---

## 11. Desain UI/UX

### 11.1 Prinsip Desain
- **Tepercaya & tenang**: hindari elemen visual yang tajam/mengintimidasi; gunakan sudut membulat, white space cukup.
- **Modern & profesional**: tipografi bersih, grid rapi, ikon konsisten (line-icon style).
- **Aksesibel secara emosional**: bahasa dan visual yang suportif, tidak menghakimi, CTA pelaporan terasa aman untuk diklik.

### 11.2 Palet Warna
| Peran Warna | Kode | Penggunaan |
|---|---|---|
| Primary Blue | `#1B5ED1` | Header, tombol utama, tautan, elemen navigasi |
| Primary Blue – Dark | `#123E8C` (turunan) | Hover state, teks aksen di atas kuning |
| Accent Yellow | `#FFC107` | Highlight, badge, ikon peringatan/penting, CTA sekunder |
| Accent Yellow – Soft | `#FFF3CD` (turunan) | Background alert/banner informasi |
| Netral Gelap | `#1A1D29` | Teks utama |
| Netral Abu | `#6B7280` | Teks sekunder |
| Netral Terang | `#F5F7FB` | Background section |
| Putih | `#FFFFFF` | Background utama, card |

> Catatan aksesibilitas: teks putih di atas `#1B5ED1` memenuhi kontras AA untuk teks besar; untuk teks kecil gunakan `#123E8C` atau tambahkan bobot font lebih tebal. Kuning `#FFC107` sebaiknya dipakai sebagai aksen/ikon, bukan background teks panjang, karena kontrasnya rendah terhadap putih.

### 11.3 Tipografi (rekomendasi)
- **Heading**: Poppins / Plus Jakarta Sans (SemiBold–Bold) — kesan modern, tegas namun ramah.
- **Body**: Inter / Source Sans 3 (Regular–Medium) — keterbacaan tinggi untuk konten sensitif/panjang.

### 11.4 Komponen Kunci
- **Navbar sticky** dengan tombol "Laporkan" berwarna kuning agar menonjol dari sisa navbar biru.
- **Hero section** dengan ilustrasi/foto suportif (bukan foto yang memicu trauma), gradasi biru lembut.
- **Card layanan** dengan ikon garis, aksen kuning pada hover.
- **Banner darurat** (opsional) di atas navbar: "Butuh bantuan segera? Hubungi WhatsApp Satgas" dengan latar kuning lembut.
- **Footer** informatif: kontak, tautan cepat, media sosial, logo ITESA Muhammadiyah Semarang.
- **Form pelaporan**: desain step-indicator yang jelas, opsi anonim ditampilkan mencolok dan meyakinkan (mis. ikon gembok + teks "Data Anda kami lindungi").

---

## 12. Rekomendasi Tumpukan Teknologi (Tech Stack)

| Lapisan | Opsi Rekomendasi |
|---|---|
| Front-end | Next.js / React + Tailwind CSS (mendukung desain modern & performa baik) |
| CMS/Back-end | WordPress (headless/custom theme) **atau** Laravel/Node.js custom CMS bila butuh kontrol keamanan data laporan lebih ketat |
| Hosting | Server kampus / cloud (mendukung SSL, backup berkala) |
| Keamanan tambahan | reCAPTCHA pada form publik, rate limiting, WAF (Web Application Firewall) |

---

## 13. Peran & Hak Akses (RBAC)

| Peran | Akses |
|---|---|
| Publik (tanpa login) | Melihat semua halaman informasi, mengisi form pelaporan, mengecek status via nomor tiket |
| Anggota Satgas (Staff) | Login panel admin, melihat & menindaklanjuti laporan sesuai penugasan |
| Ketua/Koordinator Satgas | Semua akses Staff + manajemen konten situs + manajemen anggota tim + laporan audit |
| Super Admin (IT Kampus) | Akses teknis penuh (server, backup, keamanan) — tidak otomatis melihat isi laporan |

---

## 14. Metrik Keberhasilan (KPI)

- Jumlah kunjungan unik ke halaman edukasi/layanan per bulan.
- Waktu rata-rata pengisian form pelaporan (target: efisien, tidak membebani pelapor).
- Persentase laporan yang direspons Satgas dalam SLA yang ditetapkan (mis. 1x24 jam).
- Tingkat penggunaan mode anonim vs. teridentifikasi (indikator kenyamanan pelapor).
- Skor kepuasan/kepercayaan pengguna terhadap kanal (survei berkala, opsional).

## 15. Roadmap Bertahap

| Fase | Cakupan |
|---|---|
| **Fase 1 (MVP)** | Halaman informasi lengkap, form pelaporan dasar (dengan/tanpa anonim), kontak cepat WA/Email, unduhan dokumen |
| **Fase 2** | Panel admin CMS penuh, nomor tiket & pelacakan status, dashboard laporan untuk Satgas |
| **Fase 3** | Infografis interaktif alur pelaporan, artikel edukasi/blog, audit trail, integrasi SSO kampus (opsional) |
| **Fase 4 (opsional)** | Live chat/chatbot pendukung awal, statistik anonim untuk pelaporan tahunan ke pimpinan |

## 18. Lampiran

- Referensi fungsional: [ppks.ub.ac.id](https://ppks.ub.ac.id/)
- Dasar hukum acuan: Permendikbudristek No. 30 Tahun 2021 tentang Pencegahan dan Penanganan Kekerasan Seksual di Lingkungan Perguruan Tinggi.
- Palet warna final: Primary `#1B5ED1`, Accent `#FFC107` (dapat disesuaikan dengan hasil uji kontras/branding akhir).