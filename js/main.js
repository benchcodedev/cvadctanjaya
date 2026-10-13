/**
 * ============================================================================
 * CV ADC TANJAYA — MAIN INTERACTIVE & DATA-DRIVEN APPLICATION (main.js)
 * ============================================================================
 * Mengelola:
 * 1. Sticky Navbar, Hamburger Menu Mobile Fullscreen, & Language Switcher (ID/EN)
 * 2. Injeksi Data Konfigurasi (Kontak, Alamat, PDF, Statistik) dari config.js
 * 3. Render Kartu Produk, Filter Kategori, & Kartu Khusus "Campuran Tepung Khusus"
 * 4. Modal Detail Produk + Auto-Fill Form "Minta Penawaran Produk Ini"
 * 5. Tabel Perbandingan Produk Otomatis dengan Highlight Champagne Gold
 * 6. Animasi Scroll-Reveal, Counter Statistik, FAQ Accordion, & Form B2B WhatsApp/Mailto
 * ============================================================================
 */

(function () {
  "use strict";

  let activeCategory = "all";
  let searchQuery = "";
  let currentModalProductId = null;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function getLang() {
    return (window.ADCLangEngine && window.ADCLangEngine.currentLang) || "id";
  }

  function t(key) {
    return window.ADCLangEngine ? window.ADCLangEngine.t(key) : key;
  }

  // --------------------------------------------------------------------------
  // 1. HEADER, MOBILE MENU & LANGUAGE SWITCHER
  // --------------------------------------------------------------------------
  function initHeaderAndMenu() {
    const header = document.querySelector(".site-header");
    const mobileMenuBtn = document.getElementById("mobile-menu-open");
    const mobileMenuClose = document.getElementById("mobile-menu-close");
    const mobileMenuDrawer = document.getElementById("mobile-menu-drawer");

    // Move drawer out of .site-header so backdrop-filter doesn't trap position:fixed
    if (mobileMenuDrawer && mobileMenuDrawer.parentElement !== document.body) {
      document.body.appendChild(mobileMenuDrawer);
    }

    if (header) {
      const onScroll = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 16);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    function openMobileMenu() {
      if (!mobileMenuDrawer) return;
      mobileMenuDrawer.classList.remove("hidden");
      mobileMenuDrawer.classList.add("is-open");
      requestAnimationFrame(() => {
        mobileMenuDrawer.classList.remove("opacity-0", "pointer-events-none");
        mobileMenuDrawer.classList.add("opacity-100");
      });
      document.body.style.overflow = "hidden";
      if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "true");
    }

    function closeMobileMenu() {
      if (!mobileMenuDrawer) return;
      mobileMenuDrawer.classList.remove("opacity-100", "is-open");
      mobileMenuDrawer.classList.add("opacity-0", "pointer-events-none");
      setTimeout(() => {
        if (!mobileMenuDrawer.classList.contains("is-open")) {
          mobileMenuDrawer.classList.add("hidden");
        }
      }, 240);
      document.body.style.overflow = "";
      if (mobileMenuBtn) mobileMenuBtn.setAttribute("aria-expanded", "false");
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openMobileMenu);
    if (mobileMenuClose) mobileMenuClose.addEventListener("click", closeMobileMenu);

    if (mobileMenuDrawer) {
      mobileMenuDrawer.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
      });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        closeProductModal();
      }
    });

    // Language Switcher Buttons
    document.querySelectorAll("[data-lang-switch]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetLang = btn.getAttribute("data-lang-switch");
        if (window.ADCLangEngine) {
          window.ADCLangEngine.setLanguage(targetLang);
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. APPLY CENTRALIZED CONFIG (Kontak, Alamat, PDF, Maps)
  // --------------------------------------------------------------------------
  function applyConfigToDOM() {
    const cfg = window.ADC_CONFIG;
    if (!cfg) return;
    const lang = getLang();

    // Update Company Profile PDF links
    document.querySelectorAll("[data-config-pdf]").forEach((el) => {
      el.setAttribute("href", cfg.assets.companyProfilePdf);
    });

    // Update Address
    document.querySelectorAll("[data-config-address]").forEach((el) => {
      el.textContent = cfg.contact.address[lang] || cfg.contact.address.id;
    });

    // Update Phone Display
    document.querySelectorAll("[data-config-phone]").forEach((el) => {
      el.textContent = cfg.contact.phoneDisplay;
    });

    // Update Email
    document.querySelectorAll("[data-config-email]").forEach((el) => {
      el.textContent = cfg.contact.email;
      if (el.tagName === "A") {
        el.setAttribute("href", `mailto:${cfg.contact.email}`);
      }
    });

    // Update Operational Hours
    document.querySelectorAll("[data-config-hours]").forEach((el) => {
      el.textContent = cfg.contact.operationalHours[lang] || cfg.contact.operationalHours.id;
    });

    // Update Direct WhatsApp Links
    const defaultWaText = lang === "en"
      ? `Hello ${cfg.legalName}, I would like to inquire about industrial flour supply and specifications for our factory.`
      : `Halo ${cfg.legalName}, saya ingin berkonsultasi mengenai pengadaan dan spesifikasi tepung industri untuk kebutuhan pabrik kami.`;
    const waUrl = `https://wa.me/${cfg.contact.whatsappNumber}?text=${encodeURIComponent(defaultWaText)}`;

    document.querySelectorAll("[data-config-wa]").forEach((el) => {
      el.setAttribute("href", waUrl);
    });

    // Update Google Maps Iframe
    document.querySelectorAll("[data-config-map]").forEach((iframe) => {
      if (iframe.getAttribute("src") !== cfg.contact.mapEmbedUrl) {
        iframe.setAttribute("src", cfg.contact.mapEmbedUrl);
      }
    });
  }

  // --------------------------------------------------------------------------
  // 3. HERO & QUALITY STATISTICS + COUNTER ANIMATION
  // --------------------------------------------------------------------------
  function renderStats() {
    const cfg = window.ADC_CONFIG;
    if (!cfg) return;
    const lang = getLang();

    const heroStatsContainer = document.getElementById("hero-stats-grid");
    if (heroStatsContainer && Array.isArray(cfg.heroStats)) {
      heroStatsContainer.innerHTML = cfg.heroStats.map((stat) => {
        const suffix = typeof stat.suffix === "object" ? (stat.suffix[lang] || stat.suffix.id) : stat.suffix;
        const label = stat.label[lang] || stat.label.id;
        const note = stat.note ? (stat.note[lang] || stat.note.id) : "";
        return `
          <div class="p-5 sm:p-6 rounded-2xl bg-[#FFFFFF]/95 border border-[#E6DDD0] shadow-sm backdrop-blur-sm">
            <div class="flex items-baseline gap-1 font-serif-luxury text-3xl sm:text-4xl font-bold text-[#3B2D23]">
              <span class="stat-counter text-[#7A5C45]" data-target="${stat.number}">0</span>
              <span class="text-[#C9A66B] text-2xl sm:text-3xl">${suffix}</span>
            </div>
            <p class="mt-1.5 text-sm sm:text-base font-semibold text-[#3B2D23]">${label}</p>
            ${note ? `<p class="mt-0.5 text-xs text-[#6E5A4C]">${note}</p>` : ""}
          </div>
        `;
      }).join("");
    }

    const qualityStatsContainer = document.getElementById("quality-stats-grid");
    if (qualityStatsContainer && Array.isArray(cfg.qualityStats)) {
      qualityStatsContainer.innerHTML = cfg.qualityStats.map((qs) => {
        const suffix = typeof qs.suffix === "object" ? (qs.suffix[lang] || qs.suffix.id) : qs.suffix;
        const title = qs.title[lang] || qs.title.id;
        const desc = qs.desc[lang] || qs.desc.id;
        return `
          <div class="sand-card p-6 sm:p-8">
            <div class="flex items-baseline gap-1 font-serif-luxury text-4xl sm:text-5xl font-bold text-[#7A5C45]">
              <span class="stat-counter" data-target="${qs.number}">0</span>
              <span class="text-[#C9A66B]">${suffix}</span>
            </div>
            <h3 class="mt-3 text-xl sm:text-2xl font-bold text-[#3B2D23]">${title}</h3>
            <p class="mt-2 text-sm sm:text-base text-[#6E5A4C] leading-relaxed">${desc}</p>
          </div>
        `;
      }).join("");
    }

    animateCounters();
  }

  function animateCounters() {
    const counters = document.querySelectorAll(".stat-counter");
    if (!counters.length) return;

    const runCounter = (el) => {
      const target = parseInt(el.getAttribute("data-target") || "0", 10);
      if (prefersReducedMotion || isNaN(target)) {
        el.textContent = target.toLocaleString("id-ID");
        return;
      }
      const duration = 1200;
      const startTime = performance.now();

      function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = current.toLocaleString("id-ID");
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target.toLocaleString("id-ID");
        }
      }
      requestAnimationFrame(step);
    };

    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.25 });

      counters.forEach((c) => obs.observe(c));
    } else {
      counters.forEach(runCounter);
    }
  }

  // --------------------------------------------------------------------------
  // 4. PRODUCT FILTER PILLS & PRODUCT CARDS GRID
  // --------------------------------------------------------------------------
  function renderCategoryFilters() {
    const filterContainer = document.getElementById("product-filters");
    if (!filterContainer || !window.ADC_PRODUCT_CATEGORIES) return;
    const lang = getLang();

    filterContainer.innerHTML = window.ADC_PRODUCT_CATEGORIES.map((cat) => {
      const isActive = cat.id === activeCategory;
      const label = cat.label[lang] || cat.label.id;
      return `
        <button
          type="button"
          class="filter-pill ${isActive ? "is-active" : ""}"
          data-filter-cat="${cat.id}"
          aria-pressed="${isActive ? "true" : "false"}"
        >
          ${label}
        </button>
      `;
    }).join("");

    filterContainer.querySelectorAll("[data-filter-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-filter-cat") || "all";
        renderCategoryFilters();
        renderProductGrid();
      });
    });
  }

  function renderProductGrid() {
    const grid = document.getElementById("product-grid");
    if (!grid || !window.ADC_PRODUCTS) return;
    const lang = getLang();

    const filtered = window.ADC_PRODUCTS.filter((p) => {
      const matchCat = activeCategory === "all" || (p.categories && p.categories.includes(activeCategory));
      if (!matchCat) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      const name = (p.name[lang] || p.name.id).toLowerCase();
      const desc = (p.shortDesc[lang] || p.shortDesc.id).toLowerCase();
      const app = (p.specs.mainApp[lang] || p.specs.mainApp.id).toLowerCase();
      return name.includes(q) || desc.includes(q) || app.includes(q);
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-full sand-card p-10 text-center">
          <p class="text-lg font-semibold text-[#3B2D23]">
            ${lang === "en" ? "No industrial flour products match your filter." : "Tidak ada produk tepung industri yang sesuai dengan filter pencarian."}
          </p>
          <button type="button" id="reset-product-filter" class="mt-4 btn-outline">
            ${lang === "en" ? "Show All Products" : "Tampilkan Semua Produk"}
          </button>
        </div>
      `;
      const resetBtn = document.getElementById("reset-product-filter");
      if (resetBtn) {
        resetBtn.addEventListener("click", () => {
          activeCategory = "all";
          searchQuery = "";
          const searchInput = document.getElementById("product-search-input");
          if (searchInput) searchInput.value = "";
          renderCategoryFilters();
          renderProductGrid();
        });
      }
      return;
    }

    grid.innerHTML = filtered.map((product) => {
      const name = product.name[lang] || product.name.id;
      const shortDesc = product.shortDesc[lang] || product.shortDesc.id;
      const badge = product.badge ? (product.badge[lang] || product.badge.id) : "";
      const mainApp = product.specs.mainApp[lang] || product.specs.mainApp.id;
      const meshText = product.specs.mesh[lang] || product.specs.mesh.id;

      // Special 9th Card: "Campuran Tepung Khusus"
      if (product.isCustomCard) {
        return `
          <article
            class="custom-blend-card flex flex-col justify-between overflow-hidden cursor-pointer group"
            data-open-product="${product.id}"
            tabindex="0"
            role="button"
            aria-label="${name}"
          >
            <div>
              <div class="relative aspect-[4/3] overflow-hidden bg-[#5E4637] border-b border-[#C9A66B]/40">
                <img
                  src="${product.image}"
                  alt="${name} - CV ADC TANJAYA"
                  loading="lazy"
                  width="800"
                  height="600"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute top-3.5 left-3.5 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C9A66B] text-[#3B2D23] text-xs font-bold tracking-wide shadow-sm">
                  <img src="${product.icon}" alt="" class="w-4 h-4" />
                  <span>${badge}</span>
                </div>
              </div>

              <div class="p-6">
                <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A66B]">
                  <span>${lang === "en" ? "Custom B2B Service" : "Layanan Formulasi B2B"}</span>
                </div>
                <h3 class="mt-2 font-serif-luxury text-2xl font-bold text-[#FFFFFF] group-hover:text-[#C9A66B] transition-colors">
                  ${name}
                </h3>
                <p class="mt-2.5 text-sm text-[#FBF7F1]/90 leading-relaxed">
                  ${shortDesc}
                </p>

                <div class="mt-4 pt-4 border-t border-[#FBF7F1]/15 space-y-1.5 text-xs text-[#FBF7F1]/90">
                  <div class="flex items-start justify-between gap-2">
                    <span class="text-[#C9A66B] font-semibold">${t("ui.specMainApp")}:</span>
                    <span class="text-right font-medium">${mainApp}</span>
                  </div>
                  <div class="flex items-start justify-between gap-2">
                    <span class="text-[#C9A66B] font-semibold">Mesh:</span>
                    <span class="text-right font-medium">${meshText}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="px-6 pb-6 pt-2 flex items-center gap-3">
              <span class="btn-gold w-full text-sm">
                <span>${t("ui.detailProduct")}</span>
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </div>
          </article>
        `;
      }

      // Standard Industrial Flour Product Card (01 - 08)
      return `
        <article
          class="luxury-card flex flex-col justify-between overflow-hidden cursor-pointer group"
          data-open-product="${product.id}"
          tabindex="0"
          role="button"
          aria-label="${name}"
        >
          <div>
            <div class="relative aspect-[4/3] overflow-hidden bg-[#FBF7F1] border-b border-[#E6DDD0]">
              <img
                src="${product.image}"
                alt="${name} - CV ADC TANJAYA"
                loading="lazy"
                width="800"
                height="600"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full ${
                product.isPopular
                  ? "bg-[#C9A66B] text-[#3B2D23] font-bold"
                  : "bg-[#FFFFFF]/95 text-[#3B2D23] border border-[#E6DDD0] font-semibold"
              } text-xs shadow-sm">
                <img src="${product.icon}" alt="" class="w-4 h-4" />
                <span>${badge}</span>
              </div>
            </div>

            <div class="p-6">
              <h3 class="font-serif-luxury text-2xl font-bold text-[#3B2D23] group-hover:text-[#7A5C45] transition-colors">
                ${name}
              </h3>
              <p class="mt-2 text-sm text-[#6E5A4C] leading-relaxed line-clamp-3">
                ${shortDesc}
              </p>

              <div class="mt-4 pt-4 border-t border-[#E6DDD0] space-y-1.5 text-xs">
                <div class="flex items-start justify-between gap-2">
                  <span class="text-[#6E5A4C] font-medium">${t("ui.specMainApp")}:</span>
                  <span class="text-right font-semibold text-[#3B2D23]">${mainApp}</span>
                </div>
                <div class="flex items-start justify-between gap-2">
                  <span class="text-[#6E5A4C] font-medium">Mesh:</span>
                  <span class="text-right text-[#7A5C45] font-semibold">${
                    lang === "en" ? "Per factory spec" : "Sesuai spesifikasi pabrik"
                  }</span>
                </div>
              </div>
            </div>
          </div>

          <div class="px-6 pb-6 pt-2">
            <span class="btn-outline w-full text-sm group-hover:bg-[#7A5C45] group-hover:text-[#FFFFFF] group-hover:border-[#7A5C45]">
              <span>${t("ui.detailProduct")}</span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
        </article>
      `;
    }).join("");

    // Attach click & keyboard listeners to open modal
    grid.querySelectorAll("[data-open-product]").forEach((card) => {
      const pid = card.getAttribute("data-open-product");
      card.addEventListener("click", () => openProductModal(pid));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openProductModal(pid);
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 5. COMPARISON TABLE (Panduan Memilih Tepung)
  // --------------------------------------------------------------------------
  function renderComparisonTable() {
    const tbody = document.getElementById("comparison-table-body");
    if (!tbody || !window.ADC_PRODUCTS) return;
    const lang = getLang();

    tbody.innerHTML = window.ADC_PRODUCTS.map((product) => {
      const name = product.name[lang] || product.name.id;
      const mainApp = product.specs.mainApp[lang] || product.specs.mainApp.id;
      const mesh = product.specs.mesh[lang] || product.specs.mesh.id;
      const moisture = product.specs.moisture[lang] || product.specs.moisture.id;
      const character = product.specs.character[lang] || product.specs.character.id;
      const packaging = product.specs.packaging[lang] || product.specs.packaging.id;

      return `
        <tr class="${product.isPopular ? "is-popular-row" : ""}">
          <td class="font-semibold text-[#3B2D23]">
            <div class="flex items-center gap-3">
              <img src="${product.icon}" alt="" class="w-6 h-6 flex-shrink-0" />
              <div>
                <button
                  type="button"
                  class="text-left font-bold text-[#3B2D23] hover:text-[#7A5C45] underline decoration-[#C9A66B]/60 underline-offset-4 cursor-pointer"
                  data-table-open-product="${product.id}"
                >
                  ${name}
                </button>
                ${
                  product.isPopular
                    ? `<div class="mt-1 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C9A66B] text-[#FFFFFF] text-[11px] font-bold">
                        <span>★</span>
                        <span>${t("ui.popularBadge")}</span>
                      </div>`
                    : ""
                }
              </div>
            </div>
          </td>
          <td>${mainApp}</td>
          <td class="font-medium text-[#7A5C45]">${mesh}</td>
          <td>${moisture}</td>
          <td>${character}</td>
          <td>${packaging}</td>
          <td class="text-right">
            <button
              type="button"
              class="btn-outline !py-1.5 !px-3.5 !min-h-[38px] text-xs whitespace-nowrap"
              data-table-open-product="${product.id}"
            >
              ${t("ui.detailProduct")}
            </button>
          </td>
        </tr>
      `;
    }).join("");

    tbody.querySelectorAll("[data-table-open-product]").forEach((btn) => {
      btn.addEventListener("click", () => {
        openProductModal(btn.getAttribute("data-table-open-product"));
      });
    });
  }

  // --------------------------------------------------------------------------
  // 6. PRODUCT DETAIL MODAL & AUTO-FILL QUOTE HANDLER
  // --------------------------------------------------------------------------
  function ensureModalInDOM() {
    if (document.getElementById("adc-product-modal")) return;
    const modalHTML = `
      <div id="adc-product-modal" class="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-product-title">
        <div class="modal-panel relative p-6 sm:p-8">
          <button
            type="button"
            id="modal-close-btn"
            class="touch-target absolute top-4 right-4 w-11 h-11 rounded-full bg-[#FBF7F1] border border-[#E6DDD0] text-[#3B2D23] hover:bg-[#F4ECE1] hover:border-[#C9A66B] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div id="modal-body-content"></div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML("beforeend", modalHTML);

    const backdrop = document.getElementById("adc-product-modal");
    const closeBtn = document.getElementById("modal-close-btn");
    if (closeBtn) closeBtn.addEventListener("click", closeProductModal);
    if (backdrop) {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) closeProductModal();
      });
    }
  }

  function openProductModal(productId) {
    if (!window.ADC_PRODUCTS) return;
    const product = window.ADC_PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    ensureModalInDOM();
    currentModalProductId = productId;
    renderModalContent(product);

    const modal = document.getElementById("adc-product-modal");
    if (modal) {
      modal.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
  }

  function renderModalContent(product) {
    const container = document.getElementById("modal-body-content");
    if (!container || !product) return;
    const lang = getLang();

    const name = product.name[lang] || product.name.id;
    const fullDesc = product.fullDesc[lang] || product.fullDesc.id;
    const badge = product.badge ? (product.badge[lang] || product.badge.id) : "";
    const apps = product.applications[lang] || product.applications.id || [];

    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
        <div class="md:col-span-5">
          <div class="rounded-2xl overflow-hidden border border-[#E6DDD0] bg-[#FBF7F1]">
            <img src="${product.image}" alt="${name}" class="w-full h-auto object-cover" />
          </div>
          <div class="mt-3 p-3.5 rounded-xl bg-[#FBF7F1] border border-[#7A5C45]/20 flex items-center gap-2.5 text-xs font-semibold text-[#3B2D23]">
            <img src="assets/icons/quality-shield.svg" alt="" class="w-5 h-5 flex-shrink-0" />
            <span>${t("ui.nonFoodNotice")}</span>
          </div>
        </div>

        <div class="md:col-span-7">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBF7F1] border border-[#C9A66B]/50 text-xs font-semibold text-[#3B2D23]">
            <img src="${product.icon}" alt="" class="w-4 h-4" />
            <span>${badge}</span>
          </div>

          <h2 id="modal-product-title" class="mt-2 font-serif-luxury text-2xl sm:text-3xl font-bold text-[#3B2D23]">
            ${name}
          </h2>

          <p class="mt-3 text-sm sm:text-base text-[#6E5A4C] leading-relaxed">
            ${fullDesc}
          </p>

          <div class="mt-5">
            <h3 class="text-sm font-bold uppercase tracking-wider text-[#7A5C45]">
              ${t("ui.appsTitle")}
            </h3>
            <ul class="mt-2.5 space-y-2">
              ${apps.map((item) => `
                <li class="flex items-start gap-2.5 text-sm text-[#3B2D23]">
                  <span class="mt-1 w-2 h-2 rounded-full bg-[#C9A66B] flex-shrink-0"></span>
                  <span>${item}</span>
                </li>
              `).join("")}
            </ul>
          </div>

          <div class="mt-5 p-4 rounded-2xl bg-[#FBF7F1] border border-[#E6DDD0]">
            <h3 class="text-xs font-bold uppercase tracking-wider text-[#7A5C45]">
              ${t("ui.specsTitle")}
            </h3>
            <dl class="mt-2.5 space-y-2 text-xs sm:text-sm">
              <div class="flex justify-between gap-4 py-1 border-b border-[#E6DDD0]">
                <dt class="text-[#6E5A4C] font-medium">${t("ui.specMesh")}</dt>
                <dd class="text-right font-semibold text-[#3B2D23]">${product.specs.mesh[lang] || product.specs.mesh.id}</dd>
              </div>
              <div class="flex justify-between gap-4 py-1 border-b border-[#E6DDD0]">
                <dt class="text-[#6E5A4C] font-medium">${t("ui.specMoisture")}</dt>
                <dd class="text-right font-semibold text-[#3B2D23]">${product.specs.moisture[lang] || product.specs.moisture.id}</dd>
              </div>
              <div class="flex justify-between gap-4 py-1 border-b border-[#E6DDD0]">
                <dt class="text-[#6E5A4C] font-medium">${t("ui.specCharacter")}</dt>
                <dd class="text-right font-semibold text-[#3B2D23]">${product.specs.character[lang] || product.specs.character.id}</dd>
              </div>
              <div class="flex justify-between gap-4 pt-1">
                <dt class="text-[#6E5A4C] font-medium">${t("ui.specPackaging")}</dt>
                <dd class="text-right font-semibold text-[#3B2D23]">${product.specs.packaging[lang] || product.specs.packaging.id}</dd>
              </div>
            </dl>
          </div>

          <div class="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              id="modal-quote-product-btn"
              class="btn-primary flex-1 min-w-[220px]"
            >
              <span>${t("ui.requestProductQuote")}</span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button
              type="button"
              id="modal-secondary-close-btn"
              class="btn-outline"
            >
              ${t("ui.closeModal")}
            </button>
          </div>
        </div>
      </div>
    `;

    const quoteBtn = document.getElementById("modal-quote-product-btn");
    if (quoteBtn) {
      quoteBtn.addEventListener("click", () => {
        selectProductForQuote(product.id);
      });
    }

    const secClose = document.getElementById("modal-secondary-close-btn");
    if (secClose) {
      secClose.addEventListener("click", closeProductModal);
    }
  }

  function closeProductModal() {
    const modal = document.getElementById("adc-product-modal");
    if (modal) {
      modal.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    currentModalProductId = null;
  }

  function selectProductForQuote(productId) {
    closeProductModal();
    const form = document.getElementById("consultation-form");
    const productSelect = document.getElementById("form-product");

    if (form && productSelect) {
      productSelect.value = productId;
      form.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "center" });
      setTimeout(() => {
        const nameInput = document.getElementById("form-name");
        if (nameInput) nameInput.focus();
      }, 450);
    } else {
      window.location.href = `contact.html?product=${encodeURIComponent(productId)}#consultation-form`;
    }
  }

  // --------------------------------------------------------------------------
  // 7. CONSULTATION FORM (Auto-Fill, Client Validation, WhatsApp & Mailto)
  // --------------------------------------------------------------------------
  function populateFormProducts() {
    const select = document.getElementById("form-product");
    if (!select || !window.ADC_PRODUCTS) return;
    const lang = getLang();
    const currentVal = select.value;

    let optionsHTML = `<option value="">${t("form.selectPlaceholder")}</option>`;
    window.ADC_PRODUCTS.forEach((p) => {
      const name = p.name[lang] || p.name.id;
      optionsHTML += `<option value="${p.id}">${name}</option>`;
    });
    select.innerHTML = optionsHTML;

    // Restore selection or check URL query parameter ?product=...
    const urlParams = new URLSearchParams(window.location.search);
    const paramProduct = urlParams.get("product");
    if (currentVal) {
      select.value = currentVal;
    } else if (paramProduct && window.ADC_PRODUCTS.some((p) => p.id === paramProduct)) {
      select.value = paramProduct;
    }
  }

  function initConsultationForm() {
    populateFormProducts();
    const form = document.getElementById("consultation-form");
    if (!form) return;

    const feedbackBox = document.getElementById("form-feedback");
    const emailBtn = document.getElementById("form-submit-email");

    function getFormData() {
      const lang = getLang();
      const name = (document.getElementById("form-name")?.value || "").trim();
      const company = (document.getElementById("form-company")?.value || "").trim();
      const email = (document.getElementById("form-email")?.value || "").trim();
      const phone = (document.getElementById("form-phone")?.value || "").trim();
      const productId = (document.getElementById("form-product")?.value || "").trim();
      const volume = (document.getElementById("form-volume")?.value || "").trim();
      const notes = (document.getElementById("form-notes")?.value || "").trim();

      const productObj = (window.ADC_PRODUCTS || []).find((p) => p.id === productId);
      const productName = productObj ? (productObj.name[lang] || productObj.name.id) : productId;

      return { name, company, email, phone, productId, productName, volume, notes };
    }

    function showFeedback(msg, isError) {
      if (!feedbackBox) return;
      feedbackBox.classList.remove("hidden", "bg-[#FBF7F1]", "text-[#3B2D23]", "bg-[#FBF7F1]", "text-[#3B2D23]");
      feedbackBox.classList.add(isError ? "bg-[#FBF7F1]" : "bg-[#FBF7F1]", "text-[#3B2D23]");
      feedbackBox.textContent = msg;
    }

    function buildFormattedMessage(data) {
      const lang = getLang();
      const cfg = window.ADC_CONFIG || { legalName: "CV ADC TANJAYA" };
      if (lang === "en") {
        return [
          `Hello ${cfg.legalName},`,
          `We would like to request an industrial flour quotation / consultation:`,
          ``,
          `• Contact Name: ${data.name}`,
          `• Company / Factory: ${data.company}`,
          `• Email: ${data.email || "-"}`,
          `• Phone / WhatsApp: ${data.phone || "-"}`,
          `• Required Product: ${data.productName}`,
          `• Est. Monthly Volume: ${data.volume || "To be discussed"}`,
          `• Mesh / Moisture / Notes: ${data.notes || "Standard factory specification"}`
        ].join("\n");
      }
      return [
        `Halo ${cfg.legalName},`,
        `Kami ingin mengajukan permintaan penawaran / konsultasi tepung industri:`,
        ``,
        `• Nama Lengkap: ${data.name}`,
        `• Nama Perusahaan / Pabrik: ${data.company}`,
        `• Email: ${data.email || "-"}`,
        `• Telepon / WhatsApp: ${data.phone || "-"}`,
        `• Produk yang Dibutuhkan: ${data.productName}`,
        `• Perkiraan Volume / Bulan: ${data.volume || "Akan didiskusikan"}`,
        `• Spesifikasi Mesh / Kadar Air / Catatan: ${data.notes || "Sesuai spesifikasi standar pabrik"}`
      ].join("\n");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = getFormData();
      if (!data.name || !data.company || !data.productId || (!data.email && !data.phone)) {
        showFeedback(t("form.errorRequired"), true);
        return;
      }

      // Optional backend webhook hook
      if (window.ADC_CONFIG && window.ADC_CONFIG.formWebhookUrl) {
        fetch(window.ADC_CONFIG.formWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        }).catch(() => {});
      }

      showFeedback(t("form.successWa"), false);
      const waNumber = (window.ADC_CONFIG && window.ADC_CONFIG.contact.whatsappNumber) || "6281234567890";
      const message = buildFormattedMessage(data);
      window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });

    if (emailBtn) {
      emailBtn.addEventListener("click", () => {
        const data = getFormData();
        if (!data.name || !data.company || !data.productId) {
          showFeedback(t("form.errorRequired"), true);
          return;
        }
        showFeedback(t("form.successMail"), false);
        const targetEmail = (window.ADC_CONFIG && window.ADC_CONFIG.contact.email) || "marketing@adctanjaya.co.id";
        const subject = `Permintaan Penawaran Tepung Industri - ${data.company} (${data.productName})`;
        const body = buildFormattedMessage(data);
        window.location.href = `mailto:${targetEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      });
    }
  }

  // --------------------------------------------------------------------------
  // 8. FAQ ACCORDION
  // --------------------------------------------------------------------------
  function initFaqAccordion() {
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach((item, index) => {
      const trigger = item.querySelector(".faq-trigger");
      const content = item.querySelector(".faq-content");
      if (!trigger || !content) return;

      // Open the first FAQ item by default
      if (index === 0) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        content.style.maxHeight = content.scrollHeight + 32 + "px";
      } else {
        trigger.setAttribute("aria-expanded", "false");
      }

      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");
        // Close other items for clean UX
        faqItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove("is-open");
            const ot = other.querySelector(".faq-trigger");
            const oc = other.querySelector(".faq-content");
            if (ot) ot.setAttribute("aria-expanded", "false");
            if (oc) oc.style.maxHeight = "0px";
          }
        });

        if (isOpen) {
          item.classList.remove("is-open");
          trigger.setAttribute("aria-expanded", "false");
          content.style.maxHeight = "0px";
        } else {
          item.classList.add("is-open");
          trigger.setAttribute("aria-expanded", "true");
          content.style.maxHeight = content.scrollHeight + 32 + "px";
        }
      });
    });
  }

  // --------------------------------------------------------------------------
  // 9. SCROLL REVEAL & FLOATING ACTION BUTTONS
  // --------------------------------------------------------------------------
  function initScrollReveal() {
    const els = document.querySelectorAll(".reveal-on-scroll");
    if (!els.length) return;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

    els.forEach((el) => observer.observe(el));
  }

  function initFloatingActions() {
    const backToTopBtn = document.getElementById("back-to-top-btn");
    if (!backToTopBtn) return;

    const toggleBtn = () => {
      backToTopBtn.classList.toggle("is-visible", window.scrollY > 420);
    };
    window.addEventListener("scroll", toggleBtn, { passive: true });
    toggleBtn();

    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    });
  }

  function initProductSearch() {
    const searchInput = document.getElementById("product-search-input");
    if (!searchInput) return;
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value || "";
      renderProductGrid();
    });
  }

  // --------------------------------------------------------------------------
  // 10. LANGUAGE CHANGE CALLBACK & BOOTSTRAP
  // --------------------------------------------------------------------------
  window.onADCLanguageChanged = function () {
    applyConfigToDOM();
    renderStats();
    renderCategoryFilters();
    renderProductGrid();
    renderComparisonTable();
    populateFormProducts();

    // Update open modal if any
    if (currentModalProductId && window.ADC_PRODUCTS) {
      const prod = window.ADC_PRODUCTS.find((p) => p.id === currentModalProductId);
      if (prod) renderModalContent(prod);
    }

    // Recalculate open FAQ height
    document.querySelectorAll(".faq-item.is-open .faq-content").forEach((c) => {
      c.style.maxHeight = c.scrollHeight + 32 + "px";
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (window.ADCLangEngine) {
      window.ADCLangEngine.init();
    }
    initHeaderAndMenu();
    applyConfigToDOM();
    renderStats();
    renderCategoryFilters();
    renderProductGrid();
    renderComparisonTable();
    initProductSearch();
    initConsultationForm();
    initFaqAccordion();
    initScrollReveal();
    initFloatingActions();
  });
})();
