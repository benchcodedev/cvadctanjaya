/**
 * ============================================================================
 * CV ADC TANJAYA — OFFICIAL PRODUCT CATALOG DATA (products.js)
 * ============================================================================
 * Lini Produk Resmi CV ADC TANJAYA (HANYA 3 PRODUK RESMI):
 * 1. Tepung Batok (Coconut Shell Powder) — Rata-rata Mesh 80
 * 2. Tepung Cangkang Sawit (Palm Kernel Shell Powder) — Rata-rata Mesh 80
 * 3. Tepung Kayu Campur (Mixed Wood Flour) — Rata-rata Mesh 80
 *
 * Standar Kehalusan: SEMUA PRODUK RATA-RATA DI MESH 80
 * Kategori: TEPUNG INDUSTRI NON-PANGAN
 * ============================================================================
 */

window.ADC_PRODUCT_CATEGORIES = [
  { id: "all", label: { id: "Semua Produk (Mesh 80)", en: "All Products (Mesh 80)" } },
  { id: "biomassa", label: { id: "Biomassa & Energi", en: "Biomass & Energy" } },
  { id: "manufaktur", label: { id: "Manufaktur, Lem & WPC", en: "Manufacturing, Glue & WPC" } }
];

window.ADC_PRODUCTS = [
  {
    id: "tepung-batok",
    isCustomCard: false,
    isPopular: true,
    categories: ["biomassa", "manufaktur"],
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
      id: "Serbuk tempurung kelapa berkualitas tinggi terstandar rata-rata Mesh 80 untuk bahan baku briket biomassa, karbon aktif, filler komposit resin, dan ekstender perekat lem kayu lapis (plywood).",
      en: "High-density coconut shell powder milled to an average Mesh 80 fineness, ideal for biomass briquettes, activated carbon, composite resin fillers, and plywood glue extenders."
    },
    fullDesc: {
      id: "Tepung Batok CV ADC TANJAYA diproses dari tempurung kelapa tua pilihan berkualitas tinggi yang telah dibersihkan secara teliti dari serabut dan kontaminan fisik. Melalui tahapan pengeringan suhu terkontrol dan penggilingan presisi berkecepatan tinggi, menghasilkan serbuk halus terstandar rata-rata Mesh 80 kaya lignin alami dengan densitas tinggi, daya rekat stabil, dan kadar air rendah terukur untuk kelancaran lini manufaktur pabrik Anda.",
      en: "CV ADC TANJAYA's Coconut Shell Powder is manufactured from selected mature coconut shells thoroughly cleaned of fibers and physical impurities. Controlled thermal drying and multi-stage precision milling produce a uniform Mesh 80 powder rich in natural lignin, offering stable bonding properties, controlled moisture, and exceptional purity for industrial manufacturing lines."
    },
    applications: {
      id: [
        "Ekstender & pengisi (filler) campuran lem resin kayu lapis (plywood) & panel laminasi",
        "Bahan baku briket arang biomassa, shisha, dan prekursor karbon aktif berkualitas tinggi",
        "Bahan pengisi (reinforcing filler) plastik komposit, resin termoset, dan komponen cetakan",
        "Bahan pembakar lambat dan matriks pengatur pembakaran industri"
      ],
      en: [
        "Resin adhesive extender & filler for plywood, blockboard, and panel lamination",
        "High-grade raw material for biomass charcoal briquettes, shisha, and activated carbon",
        "Reinforcing filler for plastic composites, thermoset resins, and molded components",
        "Combustion regulator matrix for industrial slow-burning products"
      ]
    },
    specs: {
      mainApp: {
        id: "Perekat Plywood, Briket Biomassa & Karbon Aktif",
        en: "Plywood Adhesives, Biomass Briquettes & Activated Carbon"
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
        id: "Serbuk cokelat tua padat, partikel seragam, kaya lignin alami, daya rekat stabil",
        en: "Dense dark brown fine powder, uniform particle distribution, high lignin, stable bonding"
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
      id: "Serbuk biomassa cangkang kelapa sawit (PKS) terstandar rata-rata Mesh 80 dengan densitas dan nilai kalor tinggi untuk bahan bakar boiler industri, briket, biochar, dan filler manufaktur.",
      en: "Standardized Palm Kernel Shell (PKS) biomass powder with an average Mesh 80 fineness, boasting high density and calorific value for industrial boiler fuel, briquetting, biochar, and composite fillers."
    },
    fullDesc: {
      id: "Tepung Cangkang Sawit (Palm Kernel Shell Powder) CV ADC TANJAYA diolah dari cangkang kelapa sawit murni berkualitas tinggi yang telah dicuci, dikeringkan, dan digiling presisi hingga kehalusan rata-rata Mesh 80. Memiliki nilai kalor pembakaran tinggi, kadar abu terukur, dan densitas solid yang luar biasa, menjadikannya pilihan unggulan untuk bahan bakar biomassa co-firing, briket ramah lingkungan, industri pengecoran logam, hingga filler komposit tahan tekanan.",
      en: "CV ADC TANJAYA's Palm Kernel Shell (PKS) Powder is processed from clean, selected palm kernel shells washed, thermally dried, and pulverized to an average Mesh 80 fineness. Featuring high calorific value, controlled ash content, and superior solid density, it is the premier choice for boiler co-firing, eco-friendly briquettes, metallurgical reduction, and pressure-resistant composite fillers."
    },
    applications: {
      id: [
        "Bahan bakar serbuk biomassa efisiensi tinggi untuk boiler uap, burner, dan kiln industri",
        "Bahan baku pembuatan briket biomassa berenergi tinggi dan arang aktif / biochar",
        "Filler komposit berat, bahan abrasif pembersih lembut, dan campuran kampas rem/gesek",
        "Bahan reduktor alternatif pada proses metalurgi dan industri pengecoran"
      ],
      en: [
        "High-efficiency pulverized biomass fuel for industrial steam boilers, burners, and kilns",
        "Premium feedstock for high-energy biomass briquettes, biochar, and activated carbon",
        "Heavy-duty composite filler, mild blasting abrasive, and friction/brake pad additives",
        "Alternative carbon reducing agent for metallurgical processing and foundries"
      ]
    },
    specs: {
      mainApp: {
        id: "Bahan Bakar Boiler, Briket Biomassa & Filler Industri",
        en: "Boiler Biomass Fuel, Briquettes & Industrial Fillers"
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
    categories: ["biomassa", "manufaktur"],
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
      id: "Serbuk selulosa kayu campur pilihan terstandar rata-rata Mesh 80 dengan keseragaman serat tinggi untuk industri Wood Plastic Composite (WPC), papan partikel, MDF, pelet biomassa, dan filler dempul.",
      en: "Selected mixed wood cellulose powder milled to an average Mesh 80 fineness with high fiber uniformity for Wood Plastic Composite (WPC), particle board, MDF, biomass pellets, and putty fillers."
    },
    fullDesc: {
      id: "Tepung Kayu Campur CV ADC TANJAYA diproduksi dari campuran serbuk kayu keras dan lunak terkurasi yang dikeringkan secara optimal tanpa kulit kayu maupun bahan kimia berbahaya. Pengayakan presisi pada kehalusan rata-rata Mesh 80 menghasilkan serat selulosa kayu yang homogen, memudahkan pencampuran polimer ekstrusi (WPC), penyerapan resin yang merata pada papan cetak, serta pembakaran bersih pada pelet biomassa.",
      en: "CV ADC TANJAYA's Mixed Wood Flour is milled from curated mixed hardwood and softwood species, thoroughly dried without bark or hazardous chemical treatments. Precision sieving at an average Mesh 80 specification yields homogeneous cellulose fibers that blend seamlessly in polymer extrusion (WPC), ensure uniform resin absorption in board pressing, and provide clean combustion for biomass pellets."
    },
    applications: {
      id: [
        "Bahan baku utama Wood Plastic Composite (WPC) untuk decking, pagar, dan profil arsitektur",
        "Filler dan penguat serat alami pada papan partikel (particle board), MDF, dan blockboard",
        "Bahan pengisi dempul kayu industri, perekat panel, dan resin komposit cetak",
        "Bahan baku pelet kayu (wood pellets) dan briket pemanas boiler biomassa"
      ],
      en: [
        "Primary natural filler for Wood Plastic Composite (WPC) decking and profiles",
        "Reinforcing fiber filler in particle boards, MDF, and panel manufacturing",
        "Extender for industrial wood putty, panel adhesives, and molded resin composites",
        "Feedstock for wood pellets and clean industrial boiler heating briquettes"
      ]
    },
    specs: {
      mainApp: {
        id: "WPC Komposit, Papan Partikel, MDF & Pelet Biomassa",
        en: "WPC Composites, Particle Board, MDF & Biomass Pellets"
      },
      mesh: {
        id: "Rata-rata Mesh 80 (Konsistensi Tinggi)",
        en: "Average Mesh 80 (High Consistency)"
      },
      moisture: {
        id: "≤ 8% - 10% (Optimal untuk Ekstrusi & Pengeleman)",
        en: "≤ 8% - 10% (Optimized for Extrusion & Bonding)"
      },
      character: {
        id: "Serat selulosa kayu alami cerah hingga sedang, homogen, daya serap resin merata",
        en: "Natural light-to-medium wood cellulose fiber, homogeneous, uniform resin absorption"
      },
      packaging: {
        id: "Karung PP 25 kg / 50 kg & Jumbo Bag (FIBC)",
        en: "PP Woven Bag 25 kg / 50 kg & Jumbo Bag (FIBC)"
      }
    }
  }
];
