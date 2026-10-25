/**
 * ============================================================================
 * CV ADC TANJAYA — OFFICIAL PRODUCT CATALOG DATA (products.js)
 * ============================================================================
 * Lini Produk Resmi CV ADC TANJAYA (HANYA 3 PRODUK RESMI):
 * 1. Tepung Batok (Coconut Shell Powder) — Rata-rata Mesh 80
 * 2. Tepung Cangkang Sawit (Palm Kernel Shell Powder) — Rata-rata Mesh 80
 * 3. Tepung Kayu Campur (Mixed Wood Flour) — Rata-rata Mesh 80
 *
 * Aplikasi Utama: Obat Nyamuk Bakar (Mosquito Coils), Stick Essence / Dupa Aromaterapi,
 * Perekat Plywood, WPC Komposit, Papan Partikel, dan Bahan Bakar Biomassa / Briket.
 *
 * Standar Kehalusan: SEMUA PRODUK RATA-RATA DI MESH 80
 * Kategori: TEPUNG INDUSTRI NON-PANGAN
 * ============================================================================
 */

window.ADC_PRODUCT_CATEGORIES = [
  { id: "all", label: { id: "Semua Produk (Mesh 80)", en: "All Products (Mesh 80)" } },
  { id: "mosquito", label: { id: "Obat Nyamuk & Stick Essence", en: "Mosquito Coils & Stick Essence" } },
  { id: "manufaktur", label: { id: "Perekat, WPC & Komposit", en: "Adhesives, WPC & Composites" } },
  { id: "biomassa", label: { id: "Biomassa & Energi", en: "Biomass & Energy" } }
];

window.ADC_PRODUCTS = [
  {
    id: "tepung-batok",
    isCustomCard: false,
    isPopular: true,
    categories: ["mosquito", "manufaktur", "biomassa"],
    image: "assets/images/coconut-shell-flour.jpg",
    icon: "assets/icons/coconut-shell.svg",
    badge: {
      id: "Rata-rata Mesh 80",
      en: "Average Mesh 80"
    },
    name: {
      id: "Tepung Batok",
      en: "Coconut Shell Powder"
    },
    shortDesc: {
      id: "Diproduksi dari tempurung kelapa giling halus, tepung batok sangat cocok untuk obat nyamuk bakar (mosquito coil), bahan baku dupa / stick essence, ekstender lem kayu lapis, filler resin, briket industri, dan bahan baku karbon aktif.",
      en: "Produced from finely ground coconut shells, coconut shell powder is suitable for mosquito coil combustion regulators, stick essence & incense binders, plywood adhesive extenders, resin fillers, industrial briquettes, and as a raw material for activated carbon production after appropriate processing."
    },
    fullDesc: {
      id: "Tepung Batok CV ADC TANJAYA diproses dari tempurung kelapa tua pilihan berkualitas tinggi yang telah dibersihkan secara teliti dari serabut dan kontaminan fisik. Melalui tahapan pengeringan suhu terkontrol dan penggilingan presisi berkecepatan tinggi, menghasilkan serbuk halus terstandar rata-rata Mesh 80 kaya lignin alami dengan densitas tinggi, laju pembakaran stabil (ideal untuk obat nyamuk bakar dan dupa / stick essence), daya rekat kuat, dan kadar air rendah terukur untuk kelancaran lini manufaktur pabrik Anda.",
      en: "CV ADC TANJAYA's Coconut Shell Powder is manufactured from selected mature coconut shells thoroughly cleaned of fibers and physical impurities. Controlled thermal drying and multi-stage precision milling produce a uniform Mesh 80 powder rich in natural lignin, offering steady smoldering rates (ideal for mosquito coils and stick essence / incense), stable bonding, controlled moisture, and exceptional purity for industrial manufacturing lines."
    },
    applications: {
      id: [
        "Bahan baku utama dan pengatur pembakaran obat nyamuk bakar (mosquito coil) untuk bara stabil tanpa padam mendadak",
        "Bahan pengikat (binder) alami dan matriks pembawa aroma untuk industri dupa aromaterapi & stick essence",
        "Ekstender & pengisi (filler) campuran lem resin kayu lapis (plywood) & panel laminasi",
        "Bahan baku briket arang biomassa, shisha, dan prekursor karbon aktif berkualitas tinggi",
        "Bahan pengisi (reinforcing filler) plastik komposit dan resin termoset"
      ],
      en: [
        "Primary combustion regulator and smoldering binder for mosquito coil manufacturing ensuring steady burning",
        "Natural aromatic carrier matrix and binder for incense sticks & stick essence manufacturing",
        "Resin adhesive extender & filler for plywood, blockboard, and panel lamination",
        "High-grade raw material for biomass charcoal briquettes, shisha, and activated carbon",
        "Reinforcing filler for plastic composites and thermoset resins"
      ]
    },
    specs: {
      mainApp: {
        id: "Obat Nyamuk Bakar, Stick Essence, Perekat Plywood & Briket",
        en: "Mosquito Coils, Stick Essence, Plywood Adhesives & Briquettes"
      },
      mesh: {
        id: "Rata-rata Mesh 80 (Konsistensi Tinggi)",
        en: "Average Mesh 80 (High Consistency)"
      },
      moisture: {
        id: "≤ 10% (Pengeringan Terkontrol)",
        en: "≤ 10% (Controlled Thermal Drying)"
      },
      character: {
        id: "Serbuk cokelat tua padat, partikel seragam, kaya lignin alami, pembakaran stabil & daya rekat kuat",
        en: "Dense dark brown fine powder, uniform particle distribution, high lignin, steady smoldering & stable bonding"
      },
      packaging: {
        id: "Karung PP 25 kg / 50 kg & Jumbo Bag (FIBC)",
        en: "PP Woven Bag 25 kg / 50 kg & Jumbo Bag (FIBC)"
      }
    }
  },
  {
    id: "tepung-cangkang-sawit",
    isCustomCard: false,
    isPopular: true,
    categories: ["biomassa", "manufaktur"],
    image: "assets/images/palm-kernel-shell-flour.jpg",
    icon: "assets/icons/palm-kernel-shell.svg",
    badge: {
      id: "Rata-rata Mesh 80",
      en: "Average Mesh 80"
    },
    name: {
      id: "Tepung Cangkang Sawit",
      en: "Palm Kernel Shell Powder"
    },
    shortDesc: {
      id: "Terbuat dari cangkang kelapa sawit, bubuk biomassa ini cocok untuk bahan bakar biomassa industri, briket, produksi biochar, serta aplikasi filler industri dan formulasi pembakaran sesuai spesifikasi.",
      en: "Made from palm kernel shells, this biomass powder is suitable for industrial biomass fuel, briquettes, biochar production, and selected industrial filler applications, depending on the required material specifications."
    },
    fullDesc: {
      id: "Tepung Cangkang Sawit (Palm Kernel Shell Powder) CV ADC TANJAYA diolah dari cangkang kelapa sawit murni berkualitas tinggi yang telah dicuci, dikeringkan, dan digiling presisi hingga kehalusan rata-rata Mesh 80. Memiliki nilai kalor pembakaran tinggi, kadar abu terukur, dan densitas solid yang luar biasa, menjadikannya pilihan unggulan untuk bahan bakar biomassa co-firing, briket ramah lingkungan, industri pengecoran logam, formulasi pembakaran industri, hingga filler komposit tahan tekanan.",
      en: "CV ADC TANJAYA's Palm Kernel Shell (PKS) Powder is processed from clean, selected palm kernel shells washed, thermally dried, and pulverized to an average Mesh 80 fineness. Featuring high calorific value, controlled ash content, and superior solid density, it is the premier choice for boiler co-firing, eco-friendly briquettes, metallurgical reduction, and pressure-resistant composite fillers."
    },
    applications: {
      id: [
        "Bahan bakar serbuk biomassa efisiensi tinggi untuk boiler uap, burner, dan kiln industri",
        "Bahan baku pembuatan briket biomassa berenergi tinggi dan arang aktif / biochar",
        "Filler industri berat, formulasi pembakaran padat, dan campuran kampas rem/gesek",
        "Bahan reduktor alternatif pada proses metalurgi dan industri pengecoran"
      ],
      en: [
        "High-efficiency pulverized biomass fuel for industrial steam boilers, burners, and kilns",
        "Premium feedstock for high-energy biomass briquettes, biochar, and activated carbon",
        "Heavy-duty industrial filler, solid combustion formulations, and friction/brake pad additives",
        "Alternative carbon reducing agent for metallurgical processing and foundries"
      ]
    },
    specs: {
      mainApp: {
        id: "Bahan Bakar Boiler, Briket Biomassa, Biochar & Filler Industri",
        en: "Boiler Biomass Fuel, Briquettes, Biochar & Industrial Fillers"
      },
      mesh: {
        id: "Rata-rata Mesh 80 (Konsistensi Tinggi)",
        en: "Average Mesh 80 (High Consistency)"
      },
      moisture: {
        id: "≤ 10% (Kadar Air Rendah Terukur)",
        en: "≤ 10% (Controlled Low Moisture)"
      },
      character: {
        id: "Serbuk cokelat kehitaman keras, densitas tinggi, nilai kalor pembakaran unggul",
        en: "Dense dark charcoal-brown powder, high hardness, superior calorific value"
      },
      packaging: {
        id: "Karung PP 25 kg / 50 kg & Jumbo Bag (FIBC)",
        en: "PP Woven Bag 25 kg / 50 kg & Jumbo Bag (FIBC)"
      }
    }
  },
  {
    id: "tepung-kayu-campur",
    isCustomCard: false,
    isPopular: true,
    categories: ["mosquito", "manufaktur", "biomassa"],
    image: "assets/images/wood-flour.jpg",
    icon: "assets/icons/wood-log.svg",
    badge: {
      id: "Rata-rata Mesh 80",
      en: "Average Mesh 80"
    },
    name: {
      id: "Tepung Kayu Campur",
      en: "Mixed Wood Flour"
    },
    shortDesc: {
      id: "Diproduksi dari bahan kayu campur pilihan, tepung kayu campur sangat cocok untuk obat nyamuk bakar (mosquito coil), pembuatan dupa / stick essence, komposit kayu-plastik (WPC), papan partikel, manufaktur MDF, dempul kayu, dan produk komposit berbasis kayu lainnya.",
      en: "Produced from selected mixed wood materials, mixed wood flour is suitable for mosquito coils (obat nyamuk bakar), stick essence & incense manufacturing, wood-plastic composites (WPC), particle boards, MDF manufacturing, wood putty, and other wood-based composite product."
    },
    fullDesc: {
      id: "Tepung Kayu Campur CV ADC TANJAYA diproduksi dari campuran serbuk kayu keras dan lunak terkurasi yang dikeringkan secara optimal tanpa kulit kayu maupun bahan kimia berbahaya. Pengayakan presisi pada kehalusan rata-rata Mesh 80 menghasilkan serat selulosa kayu yang homogen, menjadikannya bahan pengisi utama (base flour) obat nyamuk bakar yang menyala perlahan dan rata, media pengikat minyak wangi untuk stick essence / dupa, memudahkan pencampuran polimer ekstrusi (WPC), dan penyerapan resin yang merata pada papan cetak.",
      en: "CV ADC TANJAYA's Mixed Wood Flour is milled from curated mixed hardwood and softwood species, thoroughly dried without bark or hazardous chemical treatments. Precision sieving at an average Mesh 80 specification yields homogeneous cellulose fibers that serve as an essential base flour for steady-smoldering mosquito coils, aromatic binders for incense sticks & stick essence, seamless blending in polymer extrusion (WPC), and uniform resin absorption in board pressing."
    },
    applications: {
      id: [
        "Bahan baku serbuk pengisi dasar (base filler) obat nyamuk bakar (mosquito coil) untuk pembakaran merata dan stabil",
        "Bahan serbuk dasar stick essence dan dupa aromaterapi untuk mengikat dan menyebarkan aroma esensial",
        "Bahan baku utama Wood Plastic Composite (WPC) untuk decking, pagar, dan profil arsitektur",
        "Filler dan penguat serat alami pada papan partikel (particle board), MDF, dan blockboard",
        "Bahan pengisi dempul kayu industri, perekat panel, dan pelet biomassa"
      ],
      en: [
        "Essential base powder filler for mosquito coil manufacturing ensuring uniform, steady smoldering",
        "Core aromatic base flour for incense sticks and stick essence to bind and release fragrances",
        "Primary natural filler for Wood Plastic Composite (WPC) decking and architectural profiles",
        "Reinforcing fiber filler in particle boards, MDF, and panel manufacturing",
        "Extender for industrial wood putty, panel adhesives, and biomass pellets"
      ]
    },
    specs: {
      mainApp: {
        id: "Obat Nyamuk Bakar, Stick Essence, WPC Komposit & Papan Partikel",
        en: "Mosquito Coils, Stick Essence, WPC Composites & Particle Board"
      },
      mesh: {
        id: "Rata-rata Mesh 80 (Konsistensi Tinggi)",
        en: "Average Mesh 80 (High Consistency)"
      },
      moisture: {
        id: "≤ 8% - 10% (Optimal untuk Pembakaran & Pengeleman)",
        en: "≤ 8% - 10% (Optimized for Smoldering & Bonding)"
      },
      character: {
        id: "Serat selulosa kayu alami cerah hingga sedang, homogen, pembakaran tenang & daya serap resin merata",
        en: "Natural light-to-medium wood cellulose fiber, homogeneous, quiet smoldering & uniform resin absorption"
      },
      packaging: {
        id: "Karung PP 25 kg / 50 kg & Jumbo Bag (FIBC)",
        en: "PP Woven Bag 25 kg / 50 kg & Jumbo Bag (FIBC)"
      }
    }
  }
];
