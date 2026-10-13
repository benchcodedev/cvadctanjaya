/**
 * ============================================================================
 * CV ADC TANJAYA — CENTRALIZED CONFIGURATION FILE (config.js)
 * ============================================================================
 * Semua data yang belum tersedia (alamat, telepon, WhatsApp, email, angka
 * statistik, kapasitas, sertifikasi, logo, dokumen PDF, dan webhook backend)
 * dikumpulkan di file ini sebagai PLACEHOLDER agar mudah diganti kapan saja.
 * ============================================================================
 */

window.ADC_CONFIG = {
  // Identitas Legal Perusahaan
  legalName: "CV ADC TANJAYA",
  shortName: "ADC TANJAYA",
  foundedYear: "2018", // [PLACEHOLDER] Tahun berdiri
  defaultLanguage: "id", // Bahasa utama: "id" (Indonesia), opsi: "en" (English)

  // File Aset Utama (Ganti path jika mengganti logo atau PDF Company Profile)
  assets: {
    logoDark: "assets/icons/logo.svg",
    logoLight: "assets/icons/logo-light.svg",
    favicon: "assets/icons/favicon.svg",
    companyProfilePdf: "assets/docs/company-profile-cv-adc-tanjaya.pdf"
  },

  // Kontak & Lokasi Pabrik / Kantor [PLACEHOLDER — Ganti dengan data asli]
  contact: {
    whatsappNumber: "6281234567890", // Format internasional tanpa '+' atau '-' untuk wa.me
    phoneDisplay: "+62 812-3456-7890 (Placeholder)",
    email: "marketing@adctanjaya.co.id",
    emailSecondary: "info@adctanjaya.co.id",
    address: {
      id: "Kawasan Industri & Pergudangan Agro [Placeholder Alamat Lengkap Pabrik], Jawa Timur, Indonesia",
      en: "Agro Industrial & Warehousing Estate [Factory Address Placeholder], East Java, Indonesia"
    },
    operationalHours: {
      id: "Senin – Sabtu: 08.00 – 17.00 WIB",
      en: "Monday – Saturday: 08:00 AM – 05:00 PM (GMT+7)"
    },
    // Embed Google Maps [PLACEHOLDER — Ganti dengan link iframe Google Maps lokasi pabrik CV ADC TANJAYA]
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.20960986985!2d112.6302809!3d-7.2756141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
  },

  // Media Sosial [PLACEHOLDER]
  social: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com"
  },

  // Strip Statistik Hero [PLACEHOLDER — Mudah diedit sesuai kapasitas aktual pabrik]
  heroStats: [
    {
      id: "capacity",
      number: 1500,
      suffix: { id: "+ Ton", en: "+ Tons" },
      label: {
        id: "Kapasitas Produksi / Bulan",
        en: "Monthly Production Capacity"
      },
      note: {
        id: "*Angka placeholder kapasitas pabrik",
        en: "*Factory capacity placeholder"
      }
    },
    {
      id: "partners",
      number: 50,
      suffix: { id: "+ Mitra", en: "+ Partners" },
      label: {
        id: "Mitra Pabrik & Industri",
        en: "Factory & Industrial Partners"
      },
      note: {
        id: "*Angka placeholder mitra B2B",
        en: "*B2B partner count placeholder"
      }
    },
    {
      id: "moq",
      number: 5,
      suffix: { id: " Ton", en: " Tons" },
      label: {
        id: "Minimum Order (MOQ)",
        en: "Minimum Order Quantity"
      },
      note: {
        id: "*Fleksibel sesuai kontrak / sampel",
        en: "*Flexible per contract / trial order"
      }
    },
    {
      id: "reach",
      number: 34,
      suffix: { id: " Provinsi", en: " Provinces" },
      label: {
        id: "Jangkauan Pengiriman Nasional",
        en: "Nationwide Delivery Reach"
      },
      note: {
        id: "Via truk kargo, tronton & kontainer",
        en: "Via cargo truck, wingbox & container"
      }
    }
  ],

  // Statistik Komitmen Kualitas & Keberlanjutan [PLACEHOLDER]
  qualityStats: [
    {
      number: 100,
      suffix: "%",
      title: {
        id: "Pengolahan Biomassa & Hasil Agro Bernilai Tambah",
        en: "Value-Added Biomass & Agro By-Product Valorization"
      },
      desc: {
        id: "Mengolah residu hasil bumi pilihan menjadi serbuk industri presisi tanpa bahan kimia berbahaya, mendukung ekonomi sirkular.",
        en: "Transforming selected agricultural by-products into precision industrial powders without hazardous chemicals, supporting the circular economy."
      }
    },
    {
      number: 4,
      suffix: { id: " Tahap QC", en: " QC Stages" },
      title: {
        id: "Verifikasi Mutu & Ketepatan Jadwal Pengiriman",
        en: "Multi-Stage Quality Control & On-Time Dispatch"
      },
      desc: {
        id: "Pemeriksaan bahan baku, kontrol kadar air, uji ayakan (mesh), dan pengecekan kemasan sebelum pengiriman (sertifikasi & parameter uji disesuaikan spesifikasi pabrik).",
        en: "Raw material sorting, moisture checks, mesh sieve testing, and packaging inspection prior to dispatch (certifications & test parameters tailored to factory specs)."
      }
    }
  ],

  // Hook Integrasi Backend Form (Kosongkan jika hanya memakai WhatsApp / Mailto)
  formWebhookUrl: ""
};
