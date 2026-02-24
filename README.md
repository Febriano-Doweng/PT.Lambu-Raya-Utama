```
# PT. Lambu Raya Utama - Company Profile Website

Website profil perusahaan modern dan responsif untuk **PT. Lambu Raya Utama**, sebuah perusahaan kontraktor umum, leveransir, dan layanan pendukung yang beroperasi di Timika, Papua Tengah.
```
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📋 Daftar Isi

1.  [Tentang Proyek](#-tentang-proyek)
2.  [Fitur Utama](#-fitur-utama)
3.  [Tech Stack](#-tech-stack)
4.  [Struktur File](#-struktur-file)
5.  [Panduan Instalasi](#-panduan-instalasi)
6.  [Panduan Kustomisasi](#-panduan-kustomisasi)
7.  Konfigurasi SEO (Robots.txt & Sitemap)
8.  [SEO & Aksesibilitas](#-seo--aksesibilitas)
9.  [Lisensi](#-lisensi)

---

## 🏢 Tentang Proyek

Website ini dirancang untuk menampilkan portofolio, layanan, dan informasi kontak PT. Lambu Raya Utama secara profesional. Dengan desain modern yang mengutamakan kecepatan dan pengalaman pengguna (UX), website ini mendukung mode gelap (dark mode) dan sepenuhnya responsif di semua perangkat.

### Profil Perusahaan
- **Nama:** PT. Lambu Raya Utama
- **Lokasi:** Timika, Papua Tengah
- **Bidang Usaha:** General Contractor, Leveransir, Support Service
- **Berdiri Sejak:** 1992 (sebagai CV Lambu Raya sejak 1996, PT sejak 2008)

---

## ✨ Fitur Utama

- **🎨 Desain Modern & Responsif**: Tampilan bersih dengan pendekatan *mobile-first*.
- **🌙 Dark Mode**: Tombol toggle untuk beralih antara mode terang dan gelap.
- **🖼️ Hero Slider**: Background otomatis berganti dengan transisi halus.
- **💡 Animasi Scroll**: Elemen muncul secara bertahap saat halaman di-scroll (Reveal on Scroll).
- **📸 Lightbox Gallery**: Galeri proyek profesional dengan fitur zoom dan navigasi keyboard.
- **📧 Contact Modal**: Form kontak dengan validasi dan integrasi langsung ke Email/WhatsApp.
- **🗺️ Google Maps Integration**: Peta lokasi kantor yang interaktif.
- **⚙️ SEO Optimized**: Structured Data (Schema.org) untuk LocalBusiness, Organization, dan BreadcrumbList.

---

## 🛠️ Tech Stack

Teknologi yang digunakan dalam pengembangan website ini:

- **HTML5**: Struktur semantik.
- **Tailwind CSS (CDN)**: Framework CSS untuk styling utilitas.
- **Vanilla JavaScript**: Logika interaksi tanpa library eksternal.
- **Font Awesome 6.5**: Ikon.
- **Google Fonts**: Plus Jakarta Sans & Inter.
- **Schema.org**: Structured data untuk SEO.

---

## 📁 Struktur File

Pastikan struktur file proyek Anda seperti berikut agar semua aset dapat dimuat dengan benar:

```
/
├── index.html              # File utama website
├── README.md               # Dokumentasi proyek
├── img                     # Aset gambar
├── robots.txt              # Indeksing (Search Engine)
├── sitemap.xml             # Map halaman website

---

## 🚀 Panduan Instalasi

1.  **Clone atau Download** repository ini.
2.  Pastikan semua file gambar berada di root folder yang sama dengan `index.html`.
3.  Buka file `index.html` di browser favorit Anda.
4.  Untuk deployment, unggah semua file ke hosting atau layanan statis (seperti Vercel, Netlify, GitHub Pages).

---

---

## ⚙️ Panduan Kustomisasi

### Mengubah Ukuran Burger Menu
Anda dapat mengubah ukuran garis (bars) pada burger menu di bagian CSS:

```css
/* Ukuran Kontainer Burger */
#burger {
  width: 24px;  /* Ubah lebar */
  height: 18px; /* Ubah tinggi */
}

/* Ketebalan Garis */
#burger span {
  height: 2px; /* Ubah ketebalan garis */
}
```

### Mengubah Lebar Sidebar
Ubah class Tailwind pada panel sidebar di HTML:

```html
<div class="... w-[70%] max-w-sm ...">
<!-- Ganti w-[70%] menjadi w-[80%] atau w-full sesuai kebutuhan -->
```

### Mengubah Data Proyek
Edit objek `projectData` di bagian JavaScript untuk menambah atau mengubah detail proyek:

```javascript
const projectData = {
  konstruksi: {
    title: "Nama Proyek Baru",
    year: "2025",
    // ... data lainnya
    gallery: ["gambar1.jpg", "gambar2.jpg"]
  },
  // ...
};

```

---

## 🚀 Panduan Instalasi

1.  **Clone atau Download** repository ini.
2.  Pastikan semua file gambar dan konfigurasi (`robots.txt`, `sitemap.xml`) berada di root folder.
3.  Buka file `index.html` di browser favorit Anda.
4.  Untuk deployment, unggah semua file ke hosting atau layanan statis (seperti Vercel, Netlify, GitHub Pages).

---

## 🔎 Konfigurasi SEO (Robots.txt & Sitemap)

Website ini dilengkapi dengan file konfigurasi dasar untuk optimasi mesin pencari (SEO). Pastikan kedua file berikut berada di **root directory** (folder utama) website Anda.

### 1. Robots.txt

File `robots.txt` berfungsi untuk memberitahu crawler mesin pencari (seperti Google, Bing) halaman mana yang boleh atau tidak boleh diindeks.

**Buat file `robots.txt` dengan isi sebagai berikut:**

```text
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap
Sitemap: https://lamburayautama.vercel.app/sitemap.xml

# Disallow admin or private areas (if any in the future)
# Disallow: /admin/

Penjelasan:

User-agent: *: Berlaku untuk semua crawler.
Allow: /: Mengizinkan crawler mengakses semua halaman.
Sitemap: Menunjukkan lokasi file sitemap website Anda.
2. Sitemap.xml
File sitemap.xml membantu mesin pencari untuk menemukan dan memahami struktur URL website dengan lebih mudah. Karena website ini adalah Single Page Application (SPA), kita cukup mendaftarkan URL utama dan anchor sections yang relevan.

Buat file sitemap.xml dengan isi sebagai berikut:
<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

<!-- Halaman Utama (Homepage) -->
<url>
  <loc>https://lamburayautama.vercel.app/</loc>
  <lastmod>2024-06-01</lastmod>
  <priority>1.00</priority>
</url>

<!-- Section: Keunggulan -->
<url>
  <loc>https://lamburayautama.vercel.app/#why</loc>
  <lastmod>2024-06-01</lastmod>
  <priority>0.80</priority>
</url>

<!-- Section: Tentang Kami -->
<url>
  <loc>https://lamburayautama.vercel.app/#about</loc>
  <lastmod>2024-06-01</lastmod>
  <priority>0.80</priority>
</url>

<!-- Section: Layanan -->
<url>
  <loc>https://lamburayautama.vercel.app/#services</loc>
  <lastmod>2024-06-01</lastmod>
  <priority>0.80</priority>
</url>

<!-- Section: Proyek -->
<url>
  <loc>https://lamburayautama.vercel.app/#projects</loc>
  <lastmod>2024-06-01</lastmod>
  <priority>0.80</priority>
</url>

</urlset>

Catatan:

Ganti https://lamburayautama.vercel.app dengan domain Anda sendiri jika berbeda.
Update tanggal pada tag <lastmod> setiap kali Anda melakukan perubahan besar pada konten.
---

## 🔍 SEO & Aksesibilitas

Website ini dilengkapi dengan fitur SEO dan Aksesibilitas standar industri:

- **Meta Tags**: Open Graph, Twitter Cards, Geo Tags, dan Robot Tags.
- **Structured Data**: Implementasi `LocalBusiness`, `Organization`, `WebSite`, dan `BreadcrumbList` dalam format JSON-LD.
- **Accessibility**: Penggunaan `aria-label`, `aria-expanded`, dan kontras warna yang baik.

---

## 📄 Lisensi

Proyek ini dibuat untuk kepentingan internal **PT. Lambu Raya Utama**. Hak cipta dilindungi undang-undang.

© 2026 PT. Lambu Raya Utama. All Rights Reserved.
```
