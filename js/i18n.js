/**
 * ============================================================================
 * CV ADC TANJAYA — BILINGUAL LANGUAGE ENGINE (i18n.js)
 * ============================================================================
 * Mendukung Bahasa Indonesia ("id" — Default) dan Bahasa Inggris ("en").
 * Menyimpan preferensi di localStorage ("adc_tanjaya_lang"), tetapi selalu
 * menggunakan Bahasa Indonesia ("id") sebagai default awal.
 * ============================================================================
 */

window.ADC_I18N = {
  id: {
    // Navbar & Global UI
    "nav.home": "Beranda",
    "nav.about": "Tentang Kami",
    "nav.products": "Produk",
    "nav.industries": "Sektor Industri",
    "nav.quality": "Kualitas & QC",
    "nav.contact": "Hubungi Kami",
    "nav.pdf": "Company Profile (PDF)",
    "nav.cta": "Minta Penawaran",
    "ui.detailProduct": "Detail Produk",
    "ui.requestProductQuote": "Minta Penawaran Produk Ini",
    "ui.closeModal": "Tutup",
    "ui.popularBadge": "Paling Sering Dipesan",
    "ui.nonFoodNotice": "100% Tepung Industri Non-Pangan (Bukan Bahan Makanan)",
    "ui.specsTitle": "Spesifikasi Teknis (Placeholder Pabrik)",
    "ui.appsTitle": "Aplikasi Industri Utama",
    "ui.specMainApp": "Aplikasi Utama",
    "ui.specMesh": "Ukuran Partikel (Mesh)",
    "ui.specMoisture": "Kadar Air (Moisture)",
    "ui.specCharacter": "Karakter Material",
    "ui.specPackaging": "Kemasan Standar",
    "ui.whatsappFloat": "Konsultasi WhatsApp",
    "ui.backToTop": "Kembali ke atas",

    // FAQ Data (5 Pertanyaan Wajib)
    "faq.q1": "Bagaimana cara memulai kerja sama pengadaan tepung industri dengan CV ADC TANJAYA?",
    "faq.a1": "Anda dapat mengisi Formulir Konsultasi di halaman ini atau menghubungi tim kami melalui WhatsApp. Sampaikan jenis tepung industri yang dibutuhkan, target ukuran partikel (mesh), batas kadar air, serta estimasi kebutuhan volume bulanan. Tim kami akan menyiapkan penawaran harga (quotation) dan jadwal pengiriman sampel uji.",
    "faq.q2": "Berapa jumlah pemesanan minimum (Minimum Order Quantity / MOQ)?",
    "faq.a2": "Minimum order standar kami fleksibel mengikuti jenis produk dan skema pengiriman (mulai dari pengiriman parsial beberapa ton hingga kontrak rutin truk kargo/kontainer penuh). Untuk tahap awal pengujian mesin pabrik, kami juga melayani pengiriman batch uji coba (trial order) sesuai kesepakatan.",
    "faq.q3": "Berapa lama estimasi waktu pengiriman ke berbagai wilayah di Indonesia?",
    "faq.a3": "Waktu pengiriman bergantung pada lokasi pabrik tujuan dan ketersediaan stok spesifikasi mesh yang dipesan. Untuk wilayah Jawa umumnya membutuhkan waktu sekitar 2–5 hari kerja setelah PO dikonfirmasi, sedangkan pengiriman luar pulau melalui ekspedisi kargo laut/kontainer mengikuti jadwal pelayaran ke pelabuhan tujuan.",
    "faq.q4": "Apakah CV ADC TANJAYA menyediakan sampel produk untuk diuji di laboratorium pabrik kami?",
    "faq.a4": "Ya, kami menyediakan sampel material (sample pack) untuk pengujian di laboratorium QC atau R&D pabrik Anda. Dengan demikian, tim teknis Anda dapat memverifikasi kesesuaian ukuran mesh, kadar air, dan reaktivitas material sebelum melakukan pemesanan skala besar.",
    "faq.q5": "Apakah memungkinkan memesan spesifikasi kehalusan (mesh), kadar air, atau campuran bahan khusus?",
    "faq.a5": "Sangat memungkinkan. Fasilitas penggilingan dan pengayakan CV ADC TANJAYA mendukung penyesuaian ukuran mesh, kontrol kelembapan (moisture), hingga formulasi campuran khusus (custom blend) beberapa jenis biomassa sesuai spesifikasi teknis pabrik Anda.",

    // Form Messages
    "form.selectPlaceholder": "-- Pilih Produk Tepung Industri --",
    "form.errorRequired": "Mohon lengkapi nama, perusahaan, produk yang dibutuhkan, dan kontak Anda.",
    "form.successWa": "Membuka WhatsApp dengan detail permintaan penawaran Anda...",
    "form.successMail": "Membuka aplikasi email Anda dengan draf permintaan penawaran..."
  },

  en: {
    // Navbar & Global UI
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.industries": "Industries",
    "nav.quality": "Quality & QC",
    "nav.contact": "Contact Us",
    "nav.pdf": "Company Profile (PDF)",
    "nav.cta": "Request a Quote",
    "ui.detailProduct": "Product Details",
    "ui.requestProductQuote": "Request Quote for This Product",
    "ui.closeModal": "Close",
    "ui.popularBadge": "Most Requested",
    "ui.nonFoodNotice": "100% Non-Food Industrial Grade Powder (Not for Human Consumption)",
    "ui.specsTitle": "Technical Specifications (Factory Placeholder)",
    "ui.appsTitle": "Primary Industrial Applications",
    "ui.specMainApp": "Primary Application",
    "ui.specMesh": "Particle Size (Mesh)",
    "ui.specMoisture": "Moisture Content",
    "ui.specCharacter": "Material Character",
    "ui.specPackaging": "Standard Packaging",
    "ui.whatsappFloat": "WhatsApp Inquiry",
    "ui.backToTop": "Back to top",

    // FAQ Data (5 Core Questions)
    "faq.q1": "How do we start a supply partnership with CV ADC TANJAYA?",
    "faq.a1": "Simply fill out the Consultation Form on our website or reach our B2B team via WhatsApp. Let us know the industrial flour type, target particle size (mesh), maximum moisture tolerance, and estimated monthly volume. We will prepare a tailored quotation and arrange sample dispatch.",
    "faq.q2": "What is the Minimum Order Quantity (MOQ)?",
    "faq.a2": "Our standard MOQ is flexible depending on the product grade and logistics arrangement (ranging from multi-ton partial loads to full cargo truck or container contracts). For initial factory line qualification, we also support trial batch orders by agreement.",
    "faq.q3": "What is the estimated delivery lead time across different regions?",
    "faq.a3": "Lead time depends on your factory location and whether the requested mesh specification is in ready stock or custom-milled. Deliveries within Java typically arrive within 2–5 business days after PO confirmation, while inter-island shipments follow scheduled sea freight routes.",
    "faq.q4": "Are product samples available for our factory laboratory testing?",
    "faq.a4": "Yes, we provide industrial sample packs for evaluation by your QC or R&D laboratory. Your engineering team can verify mesh distribution, moisture content, and material compatibility prior to placing bulk purchase orders.",
    "faq.q5": "Can you customize particle fineness (mesh), moisture content, or multi-material blends?",
    "faq.a5": "Absolutely. CV ADC TANJAYA's milling and multi-deck sieving lines are equipped to calibrate custom mesh ranges, target moisture levels, and proprietary multi-biomass formulations tailored to your exact factory specifications.",

    // Form Messages
    "form.selectPlaceholder": "-- Select Industrial Flour Product --",
    "form.errorRequired": "Please complete your name, company, required product, and contact details.",
    "form.successWa": "Opening WhatsApp with your pre-filled quotation request...",
    "form.successMail": "Opening your email client with your pre-filled inquiry..."
  }
};

window.ADCLangEngine = {
  currentLang: "id",

  init() {
    const saved = localStorage.getItem("adc_tanjaya_lang");
    const defaultLang = (window.ADC_CONFIG && window.ADC_CONFIG.defaultLanguage) || "id";
    this.currentLang = (saved === "en" || saved === "id") ? saved : defaultLang;
    this.applyLanguage(this.currentLang, false);
  },

  setLanguage(lang) {
    if (lang !== "id" && lang !== "en") return;
    this.currentLang = lang;
    localStorage.setItem("adc_tanjaya_lang", lang);
    this.applyLanguage(lang, true);
  },

  t(key) {
    const dict = window.ADC_I18N[this.currentLang] || window.ADC_I18N.id;
    return dict[key] || window.ADC_I18N.id[key] || key;
  },

  applyLanguage(lang, triggerCallbacks = true) {
    document.documentElement.lang = lang;

    // 1. Update language toggle buttons
    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
      const btnLang = btn.getAttribute("data-lang-switch");
      const isActive = btnLang === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    // 2. Update dictionary-keyed elements [data-i18n]
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = this.t(key);
      if (val) el.textContent = val;
    });

    // 3. Update inline bilingual elements [data-id][data-en]
    document.querySelectorAll("[data-id][data-en]").forEach((el) => {
      const text = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-id");
      if (text !== null) {
        if (el.hasAttribute("data-html")) {
          el.innerHTML = text;
        } else {
          el.textContent = text;
        }
      }
    });

    // 4. Update input/textarea placeholders [data-placeholder-id][data-placeholder-en]
    document.querySelectorAll("[data-placeholder-id][data-placeholder-en]").forEach((el) => {
      const ph = lang === "en" ? el.getAttribute("data-placeholder-en") : el.getAttribute("data-placeholder-id");
      if (ph !== null) el.setAttribute("placeholder", ph);
    });

    // 5. Update aria-labels [data-aria-id][data-aria-en]
    document.querySelectorAll("[data-aria-id][data-aria-en]").forEach((el) => {
      const label = lang === "en" ? el.getAttribute("data-aria-en") : el.getAttribute("data-aria-id");
      if (label !== null) el.setAttribute("aria-label", label);
    });

    // 6. Trigger dynamic component re-renders (Products, Comparison Table, Stats, Contact Info, Modal)
    if (triggerCallbacks && typeof window.onADCLanguageChanged === "function") {
      window.onADCLanguageChanged(lang);
    }
  }
};
