# CV ADC TANJAYA — Website Company Profile Produsen Tepung Industri (B2B)

Website company profile multi-halaman profesional untuk **CV ADC TANJAYA**, produsen **tepung industri non-pangan** (serbuk halus dari biomassa dan hasil agro: tepung batok kelapa, tepung kayu, tepung onggok, tepung sekam padi, tepung kulit kopi, tepung kulit kacang, tepung bonggol jagung, tepung perekat, dan formulasi campuran khusus).

---

## 📁 Struktur Direktori (`adc_tanjaya/`)

```text
adc_tanjaya/
├── index.html          # Halaman Utama (12 Section Lengkap sesuai struktur B2B)
├── about.html          # Halaman Tentang Kami (Profil, Visi & Misi, Legalitas)
├── products.html       # Halaman Katalog Produk (Filter, Pencarian, Modal, Tabel Perbandingan)
├── industries.html     # Halaman Sektor Industri (6 Sektor Aplikasi Industri Utama)
├── quality.html        # Halaman Kualitas, Standar QC Mesh/Kadar Air & Ekonomi Sirkular
├── contact.html        # Halaman Hubungi Kami (Form Penawaran WhatsApp/Email + Peta)
├── sitemap.xml         # Sitemap SEO
├── robots.txt          # Konfigurasi Crawler SEO
├── css/
│   └── styles.css      # Desain Visual Sage-Teal, Warm Cream & Champagne Gold (Tanpa #000)
├── js/
│   ├── config.js       # Pusat Konfigurasi Kontak, Alamat, Statistik, & PDF (Placeholder)
│   ├── products.js     # Pusat Data Katalog Produk, Spesifikasi & Tabel Perbandingan (ID/EN)
│   ├── i18n.js         # Language Engine Bilingual (Default: Bahasa Indonesia + English)
│   └── main.js         # Logika UI Interaktif, Modal, Filter, Counter, FAQ, & Form WhatsApp
└── assets/
    ├── icons/          # 24 Ikon SVG Terpisah (Line style, stroke 1.5, mudah diganti)
    ├── images/         # 13 Ilustrasi Studio Produk & Fasilitas Industri
    └── docs/
        └── company-profile-cv-adc-tanjaya.pdf  # Dokumen PDF Company Profile
```

---

## 🌐 Language Engine (Bahasa Indonesia & Inggris)

- **Default Bahasa**: **Bahasa Indonesia (`ID`)**.
- Pengunjung dapat menekan tombol **`ID` | `EN`** di bagian kanan atas navbar (baik di layar laptop maupun HP).
- Seluruh teks statis, kartu produk, filter kategori, modal detail spesifikasi, tabel perbandingan, hingga format pesan otomatis WhatsApp akan langsung berubah bahasa tanpa perlu *reload* halaman.

---

## 🛠️ Panduan Mengganti Data & Aset (Tanpa Mengubah Kode HTML)

### 1. Cara Mengganti Kontak, Nomor WhatsApp, Alamat, Maps & Angka Statistik
Buka file [`js/config.js`](js/config.js):
- **Nomor WhatsApp Form & Tombol Melayang**: Ubah nilai `contact.whatsappNumber` (gunakan format angka internasional tanpa tanda `+`, contoh: `"6281234567890"`).
- **Nomor Telepon Tampilan, Email & Jam Operasional**: Ubah `contact.phoneDisplay`, `contact.email`, dan `contact.operationalHours`.
- **Alamat Pabrik/Gudang**: Ubah `contact.address.id` dan `contact.address.en`.
- **Embed Google Maps**: Ganti URL pada `contact.mapEmbedUrl` dengan URL `src` dari fitur *Share -> Embed a map* di Google Maps.
- **Angka Statistik Hero & Kualitas**: Ubah nilai `number`, `suffix`, dan `label` pada array `heroStats` dan `qualityStats`.

### 2. Cara Mengganti, Menambah, atau Mengubah Daftar Produk
Buka file [`js/products.js`](js/products.js):
- Seluruh **Kartu Produk**, **Modal Detail**, **Pilihan Dropdown Formulir Konsultasi**, dan **Tabel Perbandingan** otomatis membaca array `window.ADC_PRODUCTS`.
- Untuk menambah produk baru, cukup tambahkan objek baru di dalam `window.ADC_PRODUCTS`.
- Untuk menandai produk sebagai **"Paling Sering Dipesan"** (di-highlight warna *Champagne Gold* pada tabel perbandingan), atur properti `isPopular: true`.
- Untuk mengubah nilai spesifikasi teknis (ukuran partikel *mesh*, kadar air, kemasan), ubah objek `specs` pada produk terkait.

### 3. Cara Mengganti Logo & Dokumen PDF Company Profile
- **Logo Header (Terang)**: Ganti file `assets/icons/logo.svg` (atau ubah path di `js/config.js` pada `assets.logoDark`).
- **Logo Footer (Gelap)**: Ganti file `assets/icons/logo-light.svg`.
- **Favicon Browser**: Ganti file `assets/icons/favicon.svg`.
- **File PDF Company Profile**: Timpa file `assets/docs/company-profile-cv-adc-tanjaya.pdf` dengan brosur PDF resmi perusahaan Anda.

### 4. Cara Mengganti Foto Produk & Ikon SVG
- **Foto Produk**: Simpan foto asli serbuk tepung industri Anda (format `.jpg`, `.webp`, atau `.png`, rasio `4:3`, disarankan ukuran `800x600px` dengan latar belakang terang/cream) ke dalam folder `assets/images/`, lalu perbarui properti `image: "assets/images/nama-file-anda.webp"` di [`js/products.js`](js/products.js).
- **Ikon SVG**: Seluruh ikon disimpan terpisah di folder `assets/icons/` (seperti `coconut-shell.svg`, `wood-log.svg`, `mesh-sieve.svg`, `milling-machine.svg`, `jumbo-bag.svg`, `delivery-truck.svg`, dll.) sehingga dapat diganti satu per satu kapan saja.
