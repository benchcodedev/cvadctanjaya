/**
 * ============================================================================
 * CV ADC TANJAYA — CENTRALIZED PRODUCT CATALOG DATA (products.js)
 * ============================================================================
 * Daftar produk ini merupakan PLACEHOLDER terstruktur yang mudah ditambah,
 * dihapus, atau disesuaikan dengan lini produksi aktual CV ADC TANJAYA.
 * Seluruh kartu produk, filter kategori, modal detail, opsi form konsultasi,
 * dan tabel perbandingan membaca data langsung dari file ini (Bilingual ID/EN).
 *
 * CATATAN PENTING: Semua produk di bawah ini adalah TEPUNG INDUSTRI NON-PANGAN.
 * Nilai teknis menggunakan placeholder "Sesuai spesifikasi pabrik".
 * ============================================================================
 */

window.ADC_PRODUCT_CATEGORIES = [
  { id: "all", label: { id: "Semua Produk", en: "All Products" } },
  { id: "biomassa", label: { id: "Biomassa & Energi", en: "Biomass & Energy" } },
  { id: "papan-partikel", label: { id: "Papan Partikel", en: "Particle Board" } },
  { id: "pakan-ternak", label: { id: "Pakan Ternak", en: "Animal Feed" } },
  { id: "pupuk", label: { id: "Pupuk & Media Tanam", en: "Fertilizer & Growing Media" } },
  { id: "perekat-filler", label: { id: "Perekat & Filler", en: "Adhesives & Fillers" } }
];

window.ADC_PRODUCTS = [
  {
    id: "tepung-batok-kelapa",
    isCustomCard: false,
    isPopular: true, // Di-highlight warna Champagne Gold di tabel perbandingan & kartu
    categories: ["biomassa", "perekat-filler", "papan-partikel"],
    image: "assets/images/coconut-shell-flour.jpg",
    icon: "assets/icons/coconut-shell.svg",
    badge: {
      id: "Paling Sering Dipesan",
      en: "Most Requested"
    },
    name: {
      id: "Tepung Batok Kelapa",
      en: "Coconut Shell Flour"
    },
    shortDesc: {
      id: "Serbuk halus dari tempurung kelapa pilihan berdensitas tinggi untuk bahan baku briket biomassa, filler komposit, ekstender perekat kayu lapis, dan industri manufaktur.",
      en: "High-density fine powder milled from selected coconut shells for biomass briquettes, composite fillers, plywood adhesive extenders, and industrial manufacturing."
    },
    fullDesc: {
      id: "Tepung Batok Kelapa CV ADC TANJAYA diproses dari tempurung kelapa tua pilihan yang telah dibersihkan dari serabut dan kontaminan fisik. Melalui tahapan pengeringan terkontrol dan penggilingan presisi, menghasilkan serbuk halus kaya lignin dengan daya ikat alami yang sangat baik untuk kebutuhan industri non-pangan.",
      en: "CV ADC TANJAYA's Coconut Shell Flour is processed from selected mature coconut shells thoroughly cleaned of fibers and physical contaminants. Controlled drying and precision milling yield a lignin-rich fine powder with superior natural binding properties for non-food industrial applications."
    },
    applications: {
      id: [
        "Ekstender & filler perekat kayu lapis (plywood) dan laminasi",
        "Bahan baku briket biomassa, karbon aktif, dan bahan bakar padat",
        "Pengisi (filler) plastik komposit, resin termoset, dan komponen cetakan",
        "Bahan baku obat nyamuk bakar dan produk pembakaran lambat"
      ],
      en: [
        "Plywood and lamination resin adhesive extender & filler",
        "Raw material for biomass briquettes, activated carbon, and solid fuel",
        "Reinforcing filler for plastic composites, thermoset resins, and molded parts",
        "Base material for mosquito coils and slow-burning industrial products"
      ]
    },
    specs: {
      mainApp: {
        id: "Perekat Plywood, Biomassa & Filler Komposit",
        en: "Plywood Adhesive, Biomass & Composite Filler"
      },
      mesh: {
        id: "Sesuai spesifikasi pabrik (tersedia opsi mesh halus – ekstra halus)",
        en: "Per factory specification (fine to ultra-fine mesh options available)"
      },
      moisture: {
        id: "Sesuai spesifikasi pabrik (dikeringkan secara terkontrol)",
        en: "Per factory specification (controlled thermal drying)"
      },
      character: {
        id: "Serbuk cokelat tua, keras, kaya lignin & selulosa, daya rekat stabil",
        en: "Dark brown powder, dense, rich in lignin & cellulose, stable bonding"
      },
      packaging: {
        id: "Karung PP / Jumbo Bag (sesuai spesifikasi pabrik)",
        en: "PP Woven Bag / FIBC Jumbo Bag (per factory specification)"
      }
    }
  },
  {
    id: "tepung-kayu",
    isCustomCard: false,
    isPopular: true, // Di-highlight warna Champagne Gold di tabel perbandingan
    categories: ["papan-partikel", "perekat-filler", "biomassa"],
    image: "assets/images/wood-flour.jpg",
    icon: "assets/icons/wood-log.svg",
    badge: {
      id: "Unggulan Industri",
      en: "Industrial Bestseller"
    },
    name: {
      id: "Tepung Kayu (Wood Flour)",
      en: "Industrial Wood Flour"
    },
    shortDesc: {
      id: "Serbuk selulosa kayu murni dengan kehalusan seragam untuk industri Wood Plastic Composite (WPC), papan partikel, MDF, pelet kayu, dan filler industri.",
      en: "Pure wood cellulose powder with uniform fineness for Wood Plastic Composite (WPC), particle board, MDF, wood pellets, and industrial fillers."
    },
    fullDesc: {
      id: "Dihasilkan dari bahan baku kayu kering pilihan tanpa kulit kayu maupun bahan pengawet kimia berbahaya. Tepung Kayu kami melewati proses multi-ayakan sehingga memiliki distribusi ukuran partikel yang konsisten, ideal untuk pencampuran ekstrusi polimer (WPC), pencetakan papan partikel, hingga energi biomassa.",
      en: "Produced from selected dry timber free from bark and hazardous chemical preservatives. Our Industrial Wood Flour undergoes multi-stage sieving to ensure consistent particle size distribution, ideal for polymer extrusion (WPC), particle board pressing, and biomass energy."
    },
    applications: {
      id: [
        "Campuran utama Wood Plastic Composite (WPC) decking & profil bangunan",
        "Bahan baku papan partikel (particle board), MDF, dan woodworking",
        "Bahan baku wood pellet & briket bahan bakar boiler industri",
        "Filler dempul kayu, perekat industri, dan komponen otomotif/manufaktur"
      ],
      en: [
        "Primary reinforcement for Wood Plastic Composite (WPC) decking & profiles",
        "Raw material for particle board, MDF, and industrial woodworking",
        "Feedstock for wood pellets & industrial boiler fuel briquettes",
        "Filler for wood putty, industrial adhesives, and molded components"
      ]
    },
    specs: {
      mainApp: {
        id: "WPC, Papan Partikel (MDF) & Pelet Biomassa",
        en: "WPC, Particle Board (MDF) & Biomass Pellets"
      },
      mesh: {
        id: "Sesuai spesifikasi pabrik (opsi mesh kasar hingga halus)",
        en: "Per factory specification (coarse to fine mesh options)"
      },
      moisture: {
        id: "Sesuai spesifikasi pabrik (rendah kelembapan untuk ekstrusi)",
        en: "Per factory specification (low moisture tailored for extrusion)"
      },
      character: {
        id: "Serat selulosa cerah alami, ringan, daya serap resin merata",
        en: "Natural light cellulose fiber, lightweight, uniform resin absorption"
      },
      packaging: {
        id: "Karung PP / Jumbo Bag (sesuai spesifikasi pabrik)",
        en: "PP Woven Bag / FIBC Jumbo Bag (per factory specification)"
      }
    }
  },
  {
    id: "tepung-onggok",
    isCustomCard: false,
    isPopular: false,
    categories: ["pakan-ternak", "perekat-filler", "biomassa"],
    image: "assets/images/onggok-flour.jpg",
    icon: "assets/icons/cassava-onggok.svg",
    badge: {
      id: "Pakan & Binder",
      en: "Feed & Binder Grade"
    },
    name: {
      id: "Tepung Onggok Singkong",
      en: "Cassava Pulp Flour (Onggok)"
    },
    shortDesc: {
      id: "Serbuk serat singkong kering berkualitas untuk bahan baku campuran pakan ternak, pengikat (binder) pelet, obat nyamuk bakar, dan aplikasi industri.",
      en: "High-quality dried cassava fiber powder for animal feed formulation, pellet binder, mosquito coil base, and industrial applications."
    },
    fullDesc: {
      id: "Tepung Onggok diproses dari ampas serat singkong pilihan yang dikeringkan secara higienis dan digiling halus agar bebas bau asam dan tidak menggumpal. Kandungan serat dan sisa pati alaminya menjadikan tepung onggok sangat efektif sebagai bahan pengisi pakan ternak ruminansia/unggas serta pengikat alami pada pembuatan pelet atau briket.",
      en: "Processed from selected cassava fibrous pulp that is hygienically dried and finely milled to prevent sour odor and clumping. Its natural fiber and residual starch content make it highly effective as a bulk ingredient for livestock feed and a natural binder for pellets or briquettes."
    },
    applications: {
      id: [
        "Bahan baku sumber serat dan karbohidrat pada industri pakan ternak",
        "Pengikat alami (natural binder) pada pembuatan pelet pakan & briket",
        "Bahan dasar pembentuk matriks pada industri obat nyamuk bakar",
        "Substrat media fermentasi industri dan pupuk organik terpadu"
      ],
      en: [
        "Fiber and carbohydrate source in industrial livestock feed formulations",
        "Natural binder for animal feed pellets & charcoal/biomass briquettes",
        "Matrix base ingredient for mosquito coil manufacturing",
        "Industrial fermentation substrate and integrated organic fertilizer"
      ]
    },
    specs: {
      mainApp: {
        id: "Campuran Pakan Ternak & Binder Pelet/Briket",
        en: "Animal Feed Formulation & Pellet/Briquette Binder"
      },
      mesh: {
        id: "Sesuai spesifikasi pabrik",
        en: "Per factory specification"
      },
      moisture: {
        id: "Sesuai spesifikasi pabrik",
        en: "Per factory specification"
      },
      character: {
        id: "Serbuk krem keputihan, berserat halus, memiliki daya ikat pati alami",
        en: "Off-white cream powder, fine fiber, natural starch binding property"
      },
      packaging: {
        id: "Karung PP / Jumbo Bag (sesuai spesifikasi pabrik)",
        en: "PP Woven Bag / FIBC Jumbo Bag (per factory specification)"
      }
    }
  },
  {
    id: "tepung-sekam-padi",
    isCustomCard: false,
    isPopular: false,
    categories: ["pakan-ternak", "pupuk", "biomassa", "papan-partikel"],
    image: "assets/images/rice-husk-flour.jpg",
    icon: "assets/icons/rice-husk.svg",
    badge: {
      id: "Silika & Biomassa",
      en: "Silica & Agro-Fiber"
    },
    name: {
      id: "Tepung Sekam Padi",
      en: "Rice Husk Flour"
    },
    shortDesc: {
      id: "Serbuk sekam padi hasil penggilingan merata untuk bahan baku komposit papan, campuran pakan, media pembawa pupuk organik, dan bahan bakar biomassa.",
      en: "Uniformly milled rice husk powder for composite boards, feed mix, organic fertilizer carrier, and industrial biomass fuel."
    },
    fullDesc: {
      id: "Mengolah sekam padi kering berkualitas menjadi serbuk halus berkeseragaman tinggi (dedak sekam industri / rice husk powder). Kandungan silika alami dan serat lignoselulosa pada sekam padi memberikan ketahanan cuaca yang baik untuk komposit WPC/papan partikel sekaligus berfungsi sebagai matriks pembawa (carrier) pada pupuk dan pakan.",
      en: "Transforming dry rice husks into highly uniform industrial rice husk powder. Its natural silica and lignocellulosic fiber provide excellent weather resistance for WPC/composite boards while serving as a reliable carrier matrix in fertilizers and animal feed."
    },
    applications: {
      id: [
        "Filler komposit plastik-sekam (Rice Husk WPC) yang tahan rayap & cuaca",
        "Bahan campuran serat kasar terukur pada industri pakan ternak",
        "Media pembawa (carrier) pupuk hayati, kompos blok, dan pembenah tanah",
        "Bahan bakar co-firing boiler biomassa dan briket agro-energi"
      ],
      en: [
        "Termite- and weather-resistant Rice Husk WPC composite filler",
        "Measured roughage fiber component in livestock feed manufacturing",
        "Carrier medium for bio-fertilizers, compost blocks, and soil conditioners",
        "Biomass boiler co-firing fuel and agro-energy briquettes"
      ]
    },
    specs: {
      mainApp: {
        id: "Komposit WPC, Pupuk Organik, Pakan & Biomassa",
        en: "WPC Composites, Organic Fertilizer, Feed & Biomass"
      },
      mesh: {
        id: "Sesuai spesifikasi pabrik",
        en: "Per factory specification"
      },
      moisture: {
        id: "Sesuai spesifikasi pabrik",
        en: "Per factory specification"
      },
      character: {
        id: "Serbuk kuning kecokelatan, kaya silika alami, stabil & tahan lembap",
        en: "Tan-beige powder, rich in natural silica, stable & moisture-resistant"
      },
      packaging: {
        id: "Karung PP / Jumbo Bag (sesuai spesifikasi pabrik)",
        en: "PP Woven Bag / FIBC Jumbo Bag (per factory specification)"
      }
    }
  },
  {
    id: "tepung-kulit-kopi",
    isCustomCard: false,
    isPopular: false,
    categories: ["biomassa", "pupuk", "pakan-ternak"],
    image: "assets/images/coffee-husk-flour.jpg",
    icon: "assets/icons/coffee-husk.svg",
    badge: {
      id: "Bio-Energi & Agro",
      en: "Bio-Energy & Agro"
    },
    name: {
      id: "Tepung Kulit Kopi",
      en: "Coffee Husk Flour"
    },
    shortDesc: {
      id: "Serbuk biomassa dari kulit buah dan kulit tanduk kopi kering untuk pelet bio-energi, pupuk organik kaya unsur hara, dan campuran pakan ruminansia.",
      en: "Biomass powder milled from dried coffee cherry husks and parchment for bio-energy pellets, nutrient-rich organic fertilizers, and ruminant feed."
    },
    fullDesc: {
      id: "Tepung Kulit Kopi diproduksi dari kulit kopi kering hasil perkebunan yang disortir dan digiling hingga mencapai ukuran mesh yang seragam. Memiliki nilai kalor pembakaran yang kompetitif untuk bahan bakar biomassa pabrik, serta kaya bahan organik untuk industri pupuk dan pakan ternak.",
      en: "Produced from sorted plantation-dried coffee husks milled to uniform mesh sizes. Offers competitive calorific value for industrial biomass fuel and rich organic matter for commercial fertilizer and livestock feed manufacturers."
    },
    applications: {
      id: [
        "Bahan baku pelet dan briket biomassa untuk boiler uap & pengering industri",
        "Komponen kaya kalium & karbon organik pada pabrik pupuk organik granul",
        "Bahan baku alternatif sumber serat pada pakan ternak ruminansia",
        "Filler biokomposit ramah lingkungan beraroma alami"
      ],
      en: [
        "Raw material for biomass pellets and briquettes in industrial steam boilers",
        "Potassium- and organic-carbon-rich input for granular organic fertilizers",
        "Alternative fiber source in ruminant livestock feed formulations",
        "Eco-friendly biocomposite filler with natural earthy profile"
      ]
    },
    specs: {
      mainApp: {
        id: "Bahan Bakar Biomassa, Pupuk Granul & Pakan",
        en: "Biomass Fuel, Granular Fertilizer & Ruminant Feed"
      },
      mesh: {
        id: "Sesuai spesifikasi pabrik",
        en: "Per factory specification"
      },
      moisture: {
        id: "Sesuai spesifikasi pabrik",
        en: "Per factory specification"
      },
      character: {
        id: "Serbuk cokelat kemerahan gelap, nilai kalor baik, kaya karbon organik",
        en: "Deep reddish-brown powder, strong calorific profile, rich organic carbon"
      },
      packaging: {
        id: "Karung PP / Jumbo Bag (sesuai spesifikasi pabrik)",
        en: "PP Woven Bag / FIBC Jumbo Bag (per factory specification)"
      }
    }
  },
  {
    id: "tepung-kulit-kacang",
    isCustomCard: false,
    isPopular: false,
    categories: ["pakan-ternak", "pupuk", "biomassa"],
    image: "assets/images/peanut-shell-flour.jpg",
    icon: "assets/icons/peanut-shell.svg",
    badge: {
      id: "Serat Alami",
      en: "Natural Agro-Fiber"
    },
    name: {
      id: "Tepung Kulit Kacang",
      en: "Peanut Shell Flour"
    },
    shortDesc: {
      id: "Serbuk kulit kacang tanah kering bertekstur homogen untuk bahan pengisi pakan ternak, media tanam organik, kompos industri, dan bahan bakar biomassa.",
      en: "Homogeneous dried peanut shell powder for animal feed bulk fiber, organic growing media, industrial compost, and biomass fuel."
    },
    fullDesc: {
      id: "Kulit kacang tanah memiliki struktur serat selulosa yang berpori dan ringan. Setelah melalui proses pembersihan tanah/pasir, pengeringan, dan penggilingan halus di fasilitas CV ADC TANJAYA, tepung kulit kacang siap digunakan sebagai bahan baku serat pakan, pembawa mikroba pupuk, maupun filler papan komposit.",
      en: "Peanut shells possess a porous, lightweight cellulose fiber structure. After soil/sand removal, thermal drying, and fine milling at CV ADC TANJAYA, our Peanut Shell Flour is ready for use as feed fiber, microbial fertilizer carrier, or composite board filler."
    },
    applications: {
      id: [
        "Sumber serat kasar (crude fiber) ekonomis pada formulasi pakan ternak",
        "Bahan baku pupuk organik, media kompos, dan kondisioner aerasi tanah",
        "Bahan campuran briket biomassa dan bahan bakar padat alternatif",
        "Pengisi ringan (lightweight filler) pada pembuatan papan partikel agro"
      ],
      en: [
        "Economical crude fiber source in commercial livestock feed formulations",
        "Base material for organic fertilizers, compost media, and soil aeration",
        "Blending component for biomass briquettes and alternative solid fuels",
        "Lightweight filler in agro-based particle board manufacturing"
      ]
    },
    specs: {
      mainApp: {
        id: "Serat Pakan Ternak, Media Pupuk & Biomassa",
        en: "Feed Fiber, Fertilizer Media & Biomass Blending"
      },
      mesh: {
        id: "Sesuai spesifikasi pabrik",
        en: "Per factory specification"
      },
      moisture: {
        id: "Sesuai spesifikasi pabrik",
        en: "Per factory specification"
      },
      character: {
        id: "Serbuk cokelat muda kekuningan, berserat ringan, daya serap baik",
        en: "Light sandy-brown powder, lightweight fiber, good absorbency"
      },
      packaging: {
        id: "Karung PP / Jumbo Bag (sesuai spesifikasi pabrik)",
        en: "PP Woven Bag / FIBC Jumbo Bag (per factory specification)"
      }
    }
  },
  {
    id: "tepung-bonggol-jagung",
    isCustomCard: false,
    isPopular: true, // Di-highlight warna Champagne Gold di tabel perbandingan
    categories: ["pakan-ternak", "pupuk", "perekat-filler"],
    image: "assets/images/corn-cob-flour.jpg",
    icon: "assets/icons/corn-cob.svg",
    badge: {
      id: "Daya Serap Tinggi",
      en: "High Absorbency Carrier"
    },
    name: {
      id: "Tepung Bonggol Jagung",
      en: "Corn Cob Flour & Grit"
    },
    shortDesc: {
      id: "Serbuk dan grit bonggol jagung berdaya serap tinggi untuk carrier premix pakan/obat hewan, media budidaya jamur/pupuk, absorben industri, dan tumbling halus.",
      en: "High-absorbency corn cob powder and grit for feed/veterinary premix carriers, mushroom/fertilizer substrates, industrial absorbents, and soft blasting."
    },
    fullDesc: {
      id: "Bagian empulur dan cincin kayu bonggol jagung memiliki porositas mikro yang unik dan netral. CV ADC TANJAYA mengolah bonggol jagung kering menjadi tepung maupun grit presisi yang sangat ideal sebagai pembawa cairan nutrisi (liquid carrier) pada premix pakan ternak, media tanam agrikultur, hingga absorben tumpahan minyak industri.",
      en: "The pith and woody ring of corn cobs feature unique, neutral micro-porosity. CV ADC TANJAYA processes dried corn cobs into precision flour and grit ideal as a liquid nutrient carrier in feed premixes, agricultural substrates, and industrial oil/liquid absorbents."
    },
    applications: {
      id: [
        "Carrier (pembawa) vitamin, mineral, dan aditif cair pada premix pakan ternak",
        "Media tanam jamur industri, pembawa pupuk hayati, dan bedak benih",
        "Absorben ramah lingkungan untuk cairan industri, oli, dan alas kandang",
        "Media poles (tumbling/blasting lembut) komponen logam dan manufaktur"
      ],
      en: [
        "Carrier for vitamins, minerals, and liquid additives in animal feed premixes",
        "Industrial mushroom substrate, bio-fertilizer carrier, and seed coating",
        "Eco-friendly industrial liquid/oil absorbent and premium animal bedding",
        "Soft abrasive tumbling and polishing media for metal and molded parts"
      ]
    },
    specs: {
      mainApp: {
        id: "Carrier Premix Pakan, Absorben & Media Agro",
        en: "Feed Premix Carrier, Industrial Absorbent & Agro Media"
      },
      mesh: {
        id: "Sesuai spesifikasi pabrik (tersedia ukuran grit maupun tepung halus)",
        en: "Per factory specification (available in graded grit or fine flour)"
      },
      moisture: {
        id: "Sesuai spesifikasi pabrik",
        en: "Per factory specification"
      },
      character: {
        id: "Serbuk krem keemasan, porositas tinggi, bebas debu berlebih, pH netral",
        en: "Golden-cream granules/powder, high porosity, low dust, neutral pH"
      },
      packaging: {
        id: "Karung PP / Jumbo Bag (sesuai spesifikasi pabrik)",
        en: "PP Woven Bag / FIBC Jumbo Bag (per factory specification)"
      }
    }
  },
  {
    id: "tepung-perekat",
    isCustomCard: false,
    isPopular: true, // Di-highlight warna Champagne Gold di tabel perbandingan
    categories: ["perekat-filler", "papan-partikel"],
    image: "assets/images/adhesive-flour.jpg",
    icon: "assets/icons/adhesive-flour.svg",
    badge: {
      id: "Khusus Plywood & Panel",
      en: "Plywood & Panel Grade"
    },
    name: {
      id: "Tepung Perekat Industri",
      en: "Industrial Adhesive Extender Flour"
    },
    shortDesc: {
      id: "Tepung industri khusus (industrial glue extender & filler) untuk menjaga viskositas lem resin kayu lapis (plywood), blockboard, MDF, dan karton industri.",
      en: "Specialized industrial flour (glue extender & filler) engineered to control resin viscosity in plywood, blockboard, MDF, and industrial packaging."
    },
    fullDesc: {
      id: "Dirancang khusus untuk kebutuhan pabrik kayu lapis (plywood), veneer, dan laminasi papan. Tepung Perekat Industri CV ADC TANJAYA membantu mengontrol kekentalan (viskositas) campuran resin sintetis (seperti Urea-Formaldehyde atau Phenol-Formaldehyde), mencegah penetrasi lem berlebih pada pori kayu, dan mengoptimalkan efisiensi biaya produksi lem pabrik Anda.",
      en: "Specially formulated for plywood, veneer, and panel lamination factories. CV ADC TANJAYA's Industrial Adhesive Flour controls the viscosity of synthetic resin mixes (such as UF or PF resins), prevents excessive glue bleed-through on wood veneers, and optimizes adhesive cost efficiency."
    },
    applications: {
      id: [
        "Extender & filler adonan lem pada pabrik kayu lapis (plywood) dan veneer",
        "Pengontrol viskositas perekat pada industri blockboard, MDF, dan partikel",
        "Campuran perekat laminasi kertas industri, core tube, dan kemasan berat",
        "Pengisi matriks resin pada manufaktur komponen komposit cetak tekan"
      ],
      en: [
        "Glue mix extender & filler in plywood and wood veneer manufacturing",
        "Adhesive viscosity modifier for blockboard, MDF, and particle boards",
        "Lamination adhesive component for industrial paper cores and heavy packaging",
        "Resin matrix filler in compression-molded composite components"
      ]
    },
    specs: {
      mainApp: {
        id: "Extender Lem Plywood, Veneer, Blockboard & Laminasi",
        en: "Plywood Glue Extender, Veneer, Blockboard & Lamination"
      },
      mesh: {
        id: "Sesuai spesifikasi pabrik (kehalusan tinggi agar tidak menyumbat roller spreader)",
        en: "Per factory specification (high fineness for smooth roller-spreader flow)"
      },
      moisture: {
        id: "Sesuai spesifikasi pabrik",
        en: "Per factory specification"
      },
      character: {
        id: "Serbuk sangat halus, viskositas terukur, dispersi merata di dalam resin",
        en: "Ultra-fine cohesive powder, controlled viscosity, uniform resin dispersion"
      },
      packaging: {
        id: "Karung PP / Jumbo Bag (sesuai spesifikasi pabrik)",
        en: "PP Woven Bag / FIBC Jumbo Bag (per factory specification)"
      }
    }
  },
  {
    id: "campuran-tepung-khusus",
    isCustomCard: true, // Kartu ke-9: Kartu khusus "Campuran Tepung Khusus"
    isPopular: false,
    categories: ["biomassa", "papan-partikel", "pakan-ternak", "pupuk", "perekat-filler"],
    image: "assets/images/custom-blend-flour.jpg",
    icon: "assets/icons/custom-blend.svg",
    badge: {
      id: "Formulasi Kustom B2B",
      en: "Custom B2B Formulation"
    },
    name: {
      id: "Campuran Tepung Khusus (Custom Blend)",
      en: "Custom Industrial Flour Blend"
    },
    shortDesc: {
      id: "Formulasi campuran beberapa jenis biomassa dan ukuran mesh khusus yang dirancang presisi mengikuti parameter mesin dan target efisiensi pabrik Anda.",
      en: "Custom multi-biomass blends and tailored mesh distributions precision-engineered to match your factory machinery parameters and cost targets."
    },
    fullDesc: {
      id: "Setiap lini produksi pabrik memiliki karakteristik mesin dan standar produk akhir yang berbeda. CV ADC TANJAYA melayani pembuatan Campuran Tepung Khusus (Custom Blending & Milling) — memadukan rasio bahan baku agro/biomassa, rentang kehalusan mesh, hingga batas kadar air yang disesuaikan penuh dengan R&D atau tim produksi Anda.",
      en: "Every factory production line operates with distinct machinery parameters and end-product tolerances. CV ADC TANJAYA provides Custom Industrial Flour Blending & Milling — combining specific agro/biomass ratios, custom mesh distributions, and strict moisture limits tailored to your R&D and production team."
    },
    applications: {
      id: [
        "Formulasi rasio khusus antara beberapa serbuk biomassa sesuai resep pabrik",
        "Penyesuaian target kehalusan partikel (custom mesh) dan kadar air spesifik",
        "Pengembangan sampel uji coba (trial batch) bersama tim R&D pembeli",
        "Kontrak pasokan rutin dengan jaminan konsistensi antar-batch pengiriman"
      ],
      en: [
        "Bespoke multi-biomass blending ratios tailored to your proprietary formula",
        "Custom particle size distribution (mesh) and target moisture calibration",
        "Collaborative trial sample development with your factory R&D engineers",
        "Dedicated contract supply with strict batch-to-batch quality consistency"
      ]
    },
    specs: {
      mainApp: {
        id: "Disesuaikan Kebutuhan Spesifik Pabrik & R&D Mitra",
        en: "Tailored to Specific Factory & Partner R&D Requirements"
      },
      mesh: {
        id: "Sesuai spesifikasi pabrik (kustomisasi penuh)",
        en: "Per factory specification (fully customizable)"
      },
      moisture: {
        id: "Sesuai spesifikasi pabrik (kustomisasi penuh)",
        en: "Per factory specification (fully customizable)"
      },
      character: {
        id: "Komposisi multi-material presisi dengan kerahasiaan formula terjaga",
        en: "Precision multi-material composition with strict formula confidentiality"
      },
      packaging: {
        id: "Karung PP Polos / Custom Label / Jumbo Bag (sesuai spesifikasi pabrik)",
        en: "Plain PP Bag / Private Label / FIBC Jumbo Bag (per factory specification)"
      }
    }
  }
];
