const projects = [
  {
    slug: "maison-masque",
    title: "Maison Masque",
    status: "live",
    category: "commerce",
    filters: ["live", "commerce"],
    selected: 1,
    url: "https://maisonmasque.com",
    image: "assets/projects/maison-masque.jpg",
    type: "K-beauty commerce",
    typeZh: "韓國護膚電商",
    description: "A ritual-led commerce world for a curated Korean skincare house.",
    descriptionZh: "為精選韓國護膚品牌打造以儀式感為核心的電商世界。",
    alt: "Maison Masque homepage with editorial skincare imagery and the Five Rituals headline",
    altZh: "Maison Masque 首頁，以編輯風格護膚圖片及 Five Rituals 標題為主",
  },
  {
    slug: "asset-screener",
    title: "Asset Screener",
    status: "live",
    category: "product",
    filters: ["live", "product"],
    selected: 2,
    url: "https://asset.lekker.design",
    image: "assets/projects/asset-screener.jpg",
    type: "Market intelligence product",
    typeZh: "市場情報產品",
    description: "A dense decision surface for Hyperliquid market signals and validation.",
    descriptionZh: "為 Hyperliquid 市場訊號及驗證而設的高密度決策介面。",
    alt: "Asset Screener dark market dashboard showing an opportunity board and signal data",
    altZh: "Asset Screener 深色市場儀表板，顯示機會清單及訊號數據",
  },
  {
    slug: "jacques-fuller",
    title: "Jacques Fuller",
    status: "live",
    category: "portfolio",
    filters: ["live", "portfolio"],
    selected: 3,
    url: "https://jf.lekker.design",
    image: "assets/projects/jacques-fuller.jpg",
    type: "Artist archive",
    typeZh: "藝術家作品庫",
    description: "An image-led sculpture archive built around the work, not interface chrome.",
    descriptionZh: "以雕塑作品為主角的影像作品庫，介面退居其後。",
    alt: "Jacques Fuller sculpture portfolio with an asymmetric collage of bronze works",
    altZh: "Jacques Fuller 雕塑作品集，以不對稱拼貼展示多件銅雕作品",
  },
  {
    slug: "blank-tee-guide",
    title: "Blank Tee Guide",
    status: "live",
    category: "editorial",
    filters: ["live", "editorial"],
    selected: 4,
    url: "https://blankteeguide.com",
    image: "assets/projects/blank-tee-guide.jpg",
    type: "Editorial affiliate publication",
    typeZh: "聯盟行銷內容刊物",
    description: "A decision-first publication for print sellers comparing blank apparel.",
    descriptionZh: "協助印花賣家比較素色服裝、以決策為先的內容刊物。",
    alt: "Blank Tee Guide homepage with a black and acid green comparison interface",
    altZh: "Blank Tee Guide 首頁，以黑色及螢光綠比較介面為主",
  },
  {
    slug: "baby-gear-brief",
    title: "Baby Gear Brief",
    status: "live",
    category: "editorial",
    filters: ["live", "editorial"],
    selected: 5,
    url: "https://babygearbrief.com",
    image: "assets/projects/baby-gear-brief.jpg",
    type: "Research-led publication",
    typeZh: "研究型內容刊物",
    description: "Evidence-led baby gear briefs designed for anxious, time-poor decisions.",
    descriptionZh: "以證據為本的嬰兒用品簡報，協助讀者在時間有限下作出安心選擇。",
    alt: "Baby Gear Brief homepage with oversized editorial typography and a carrier review",
    altZh: "Baby Gear Brief 首頁，以大型編輯字體及嬰兒揹帶評測為主",
  },
  {
    slug: "best-tinted-sunscreen",
    title: "Best Tinted Sunscreen",
    status: "live",
    category: "editorial",
    filters: ["live", "editorial"],
    selected: 6,
    url: "https://besttintedsunscreen.com",
    image: "assets/projects/best-tinted-sunscreen.jpg",
    type: "Beauty review publication",
    typeZh: "美容評測刊物",
    description: "A compact, evidence-labeled review site with a clear commercial path.",
    descriptionZh: "精簡、證據標示清晰的評測網站，並提供直接的商業行動路徑。",
    alt: "Best Tinted Sunscreen homepage with coral typography and a featured sunscreen product",
    altZh: "Best Tinted Sunscreen 首頁，以珊瑚色字體及精選防曬產品為主",
  },
  {
    slug: "glow-ingredients",
    title: "Glow Ingredients",
    status: "live",
    category: "editorial",
    filters: ["live", "editorial"],
    url: "https://glowingredients.com",
    image: "assets/projects/glow-ingredients.jpg",
    type: "K-beauty ingredient guide",
    typeZh: "韓國美容成分指南",
    description: "An ingredient-first editorial system for Korean skincare research.",
    descriptionZh: "以成分為先的韓國護膚研究內容系統。",
    alt: "Glow Ingredients homepage with editorial type and a skincare serum photograph",
    altZh: "Glow Ingredients 首頁，以編輯字體及護膚精華照片為主",
  },
  {
    slug: "gpu-hosting",
    title: "GPU Hosting Guide",
    status: "live",
    category: "editorial",
    filters: ["live", "editorial", "product"],
    url: "https://gpu-hosting.vercel.app",
    image: "assets/projects/gpu-hosting.jpg",
    type: "Technical buyer guide",
    typeZh: "技術採購指南",
    description: "A structured technical guide for comparing self-hosted AI infrastructure.",
    descriptionZh: "用於比較自架人工智能基礎設施的結構化技術指南。",
    alt: "GPU Hosting Guide homepage comparing self-hosted AI models and infrastructure",
    altZh: "GPU Hosting Guide 首頁，比較自架人工智能模型及基礎設施",
  },
  {
    slug: "lumiere-concept",
    title: "Lumière Aesthetic Clinic",
    status: "concept",
    category: "local",
    filters: ["concept", "local", "commerce"],
    url: "https://aesthetic-delta.vercel.app/",
    image: "assets/projects/lumiere-concept.jpg",
    type: "Aesthetic clinic concept",
    typeZh: "醫學美容診所概念",
    description: "An editorial service and booking concept for a premium aesthetic clinic.",
    descriptionZh: "為高端醫學美容診所設計的編輯風格服務及預約概念。",
    alt: "Lumière aesthetic clinic concept homepage with soft editorial imagery",
    altZh: "Lumière 醫學美容診所概念首頁，採用柔和編輯風格圖片",
  },
  {
    slug: "smile-central-concept",
    title: "Smile Central Dental",
    status: "concept",
    category: "local",
    filters: ["concept", "local"],
    url: "https://dentist-eta-topaz.vercel.app/",
    image: "assets/projects/smile-central-concept.jpg",
    type: "Dental practice concept",
    typeZh: "牙科診所概念",
    description: "A calm, bilingual patient journey for a Central dental practice.",
    descriptionZh: "為中環牙科診所設計的平靜雙語患者旅程。",
    alt: "Smile Central dental practice concept with a calm white clinical layout",
    altZh: "Smile Central 牙科診所概念，採用平靜白色臨床版面",
  },
  {
    slug: "chris-ho-concept",
    title: "Dr. Chris Ho Chiropractic",
    status: "concept",
    category: "local",
    filters: ["concept", "local"],
    url: "https://hk-client-drchrisho.vercel.app/",
    image: "assets/projects/chris-ho-concept.jpg",
    type: "Healthcare practice concept",
    typeZh: "醫療診所概念",
    description: "A trust-first healthcare site with clear treatment and booking paths.",
    descriptionZh: "以信任為先，提供清晰療程及預約路徑的醫療網站。",
    alt: "Chiropractic and physiotherapy concept homepage with a clean clinical layout",
    altZh: "脊醫及物理治療概念首頁，採用簡潔臨床版面",
  },
  {
    slug: "happy-pets-concept",
    title: "Happy Pets Veterinary",
    status: "concept",
    category: "local",
    filters: ["concept", "local"],
    url: "https://vet-beryl.vercel.app/",
    image: "assets/projects/happy-pets-concept.jpg",
    type: "Veterinary practice concept",
    typeZh: "獸醫診所概念",
    description: "A warm veterinary concept that keeps care and booking easy to find.",
    descriptionZh: "溫暖的獸醫診所概念，讓護理資訊及預約功能一目了然。",
    alt: "Happy Pets veterinary concept homepage with teal animal photography",
    altZh: "Happy Pets 獸醫診所概念首頁，以青綠色動物照片為主",
  },
  {
    slug: "eps-property-concept",
    title: "EPS Property",
    status: "concept",
    category: "local",
    filters: ["concept", "local", "commerce"],
    url: "https://eps-demo-project.vercel.app/",
    image: "assets/projects/eps-property-concept.jpg",
    type: "Property search concept",
    typeZh: "物業搜尋概念",
    description: "A listings-led property search concept for Discovery Bay.",
    descriptionZh: "為愉景灣市場設計、以樓盤為主的物業搜尋概念。",
    alt: "EPS Property concept homepage with a large Discovery Bay search interface",
    altZh: "EPS Property 概念首頁，以大型愉景灣物業搜尋介面為主",
  },
  {
    slug: "learning-centre-concept",
    title: "Language & Learning Centre",
    status: "concept",
    category: "local",
    filters: ["concept", "local"],
    url: "https://tutor-lac.vercel.app/",
    image: "assets/projects/learning-centre-concept.jpg",
    type: "Education service concept",
    typeZh: "教育服務概念",
    description: "A parent-friendly course and enrolment path for a learning centre.",
    descriptionZh: "為學習中心設計、方便家長瀏覽課程及報名的路徑。",
    alt: "Language and Learning Centre concept with a blue course overview",
    altZh: "語言學習中心概念，以藍色課程概覽為主",
  },
  {
    slug: "breathe-studio-concept",
    title: "Breathe Studio",
    status: "concept",
    category: "local",
    filters: ["concept", "local", "commerce"],
    url: "https://yoga-kohl-six.vercel.app/",
    image: "assets/projects/breathe-studio-concept.jpg",
    type: "Wellness studio concept",
    typeZh: "健康工作室概念",
    description: "A soft class discovery and booking concept for an urban yoga studio.",
    descriptionZh: "為城市瑜伽工作室設計的柔和課堂探索及預約概念。",
    alt: "Breathe yoga studio concept with quiet typography and a soft neutral background",
    altZh: "Breathe 瑜伽工作室概念，採用安靜字體及柔和中性色背景",
  },
  {
    slug: "blackhorn-concept",
    title: "Blackhorn Capital",
    status: "concept",
    category: "local",
    filters: ["concept", "local", "product"],
    url: "https://blackhorn-web.vercel.app",
    image: "assets/projects/blackhorn-concept.jpg",
    type: "Family office concept",
    typeZh: "家族辦公室概念",
    description: "A restrained institutional concept for private market investment.",
    descriptionZh: "為私人市場投資而設的低調機構風格概念。",
    alt: "Blackhorn Capital concept with a dark institutional investment layout",
    altZh: "Blackhorn Capital 概念，採用深色機構投資版面",
  },
];

const copy = {
  en: {
    view: "View live site",
    viewConcept: "View concept",
    live: "Live",
    concept: "Concept study",
    showing: (visible, total) => `Showing ${visible} of ${total} builds`,
    empty: "No builds match this filter.",
    langButton: "中文",
    langLabel: "Switch to Traditional Chinese",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
  },
  zh: {
    view: "瀏覽網站",
    viewConcept: "瀏覽概念",
    live: "已上線",
    concept: "概念作品",
    showing: (visible, total) => `顯示 ${visible} 個作品，共 ${total} 個`,
    empty: "此篩選沒有相符作品。",
    langButton: "EN",
    langLabel: "切換至英文",
    menuOpen: "開啟導覽選單",
    menuClose: "關閉導覽選單",
  },
};

const selectedGrid = document.querySelector("#selectedGrid");
const archiveGrid = document.querySelector("#archiveGrid");
const archiveSummary = document.querySelector("#archiveSummary");
const archiveEmpty = document.querySelector("#archiveEmpty");
const langToggle = document.querySelector("#langToggle");
const menuToggle = document.querySelector("#menuToggle");
const mobileNav = document.querySelector("#mobileNav");
const filterButtons = [...document.querySelectorAll("[data-filter]")];
const filterJumpLinks = [...document.querySelectorAll("[data-filter-jump]")];
const validFilters = new Set(filterButtons.map((button) => button.dataset.filter));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let currentFilter = "all";
let currentLang = "en";
let revealObserver;

function projectType(project) {
  return currentLang === "zh" ? project.typeZh : project.type;
}

function projectDescription(project) {
  return currentLang === "zh" ? project.descriptionZh : project.description;
}

function projectAlt(project) {
  return currentLang === "zh" ? project.altZh : project.alt;
}

function selectedMarkup(project, index) {
  const action = project.status === "live" ? copy[currentLang].view : copy[currentLang].viewConcept;
  return `
    <article class="selected-card" data-reveal>
      <a href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="${action}: ${project.title}">
        <div class="selected-media">
          <img src="${project.image}" alt="${projectAlt(project)}" ${index < 2 ? "fetchpriority=\"high\"" : "loading=\"lazy\""} decoding="async">
        </div>
      </a>
      <div class="selected-caption">
        <div>
          <h3 class="selected-title">${project.title}</h3>
          <p class="selected-meta">${projectType(project)}</p>
        </div>
        <a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer">${action}</a>
      </div>
    </article>
  `;
}

function archiveMarkup(project) {
  const action = project.status === "live" ? copy[currentLang].view : copy[currentLang].viewConcept;
  const statusText = project.status === "live" ? copy[currentLang].live : copy[currentLang].concept;
  return `
    <article class="archive-card" data-project="${project.slug}" data-filters="${project.filters.join(" ")}">
      <a class="archive-thumb" href="${project.url}" target="_blank" rel="noopener noreferrer" tabindex="-1" aria-hidden="true">
        <img src="${project.image}" alt="" loading="lazy" decoding="async">
      </a>
      <div class="archive-copy">
        <div class="archive-kicker">
          <span class="status ${project.status === "live" ? "status-live" : ""}">${statusText}</span>
          <span>${projectType(project)}</span>
        </div>
        <h3 class="archive-title">${project.title}</h3>
        <p class="archive-description">${projectDescription(project)}</p>
        <a class="archive-link" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="${action}: ${project.title}">${action}</a>
      </div>
    </article>
  `;
}

function renderSelected() {
  const selected = projects
    .filter((project) => project.selected)
    .sort((a, b) => a.selected - b.selected);
  selectedGrid.innerHTML = selected.map(selectedMarkup).join("");
}

function applyFilter() {
  const cards = [...archiveGrid.querySelectorAll(".archive-card")];
  let visible = 0;

  cards.forEach((card) => {
    const filters = card.dataset.filters.split(" ");
    const show = currentFilter === "all" || filters.includes(currentFilter);
    card.hidden = !show;
    if (show) visible += 1;
  });

  archiveSummary.textContent = copy[currentLang].showing(visible, projects.length);
  archiveEmpty.textContent = copy[currentLang].empty;
  archiveEmpty.classList.toggle("visible", visible === 0);
}

function renderArchive() {
  archiveGrid.innerHTML = projects.map(archiveMarkup).join("");
  applyFilter();
}

function setFilter(filter, updateUrl = true) {
  currentFilter = validFilters.has(filter) ? filter : "all";
  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.filter === currentFilter ? "true" : "false");
  });
  applyFilter();

  if (!updateUrl) return;
  const url = new URL(window.location.href);
  if (currentFilter === "all") url.searchParams.delete("filter");
  else url.searchParams.set("filter", currentFilter);
  window.history.replaceState({}, "", url);
}

function initReveal() {
  if (prefersReducedMotion.matches) return;

  document.documentElement.classList.add("motion-ready");
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.12 },
  );

  document.querySelectorAll("[data-reveal]").forEach((element) => {
    revealObserver.observe(element);
  });
}

function syncMotionPreference() {
  if (prefersReducedMotion.matches) {
    document.documentElement.classList.remove("motion-ready");
    if (revealObserver) {
      revealObserver.disconnect();
      revealObserver = undefined;
    }
    return;
  }

  initReveal();
}

function updateMenuLabel() {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-label", expanded ? copy[currentLang].menuClose : copy[currentLang].menuOpen);
}

function readStoredLanguage() {
  try {
    return localStorage.getItem("lekker-language");
  } catch {
    return null;
  }
}

function persistLanguage(lang) {
  try {
    localStorage.setItem("lekker-language", lang);
  } catch {
    // Language still works for the current page when storage is unavailable.
  }
}

function setLanguage(lang, persist = true) {
  currentLang = lang === "zh" ? "zh" : "en";
  document.documentElement.lang = currentLang === "zh" ? "zh-Hant" : "en";
  document.body.dataset.lang = currentLang;
  langToggle.textContent = copy[currentLang].langButton;
  langToggle.setAttribute("aria-label", copy[currentLang].langLabel);
  document.querySelectorAll("[data-aria-en]").forEach((element) => {
    element.setAttribute("aria-label", currentLang === "zh" ? element.dataset.ariaZh : element.dataset.ariaEn);
  });
  updateMenuLabel();

  const url = new URL(window.location.href);
  if (currentLang === "zh") url.searchParams.set("lang", "zh");
  else url.searchParams.delete("lang");
  window.history.replaceState({}, "", url);

  if (persist) persistLanguage(currentLang);

  renderSelected();
  renderArchive();
  requestAnimationFrame(syncMotionPreference);
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  updateMenuLabel();
  mobileNav.classList.remove("open");
  mobileNav.hidden = true;
  document.body.classList.remove("menu-open");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filter);
  });
});

filterJumpLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setFilter(link.dataset.filterJump);
  });
});

langToggle.addEventListener("click", () => {
  setLanguage(currentLang === "en" ? "zh" : "en");
});

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", expanded ? "false" : "true");
  mobileNav.classList.toggle("open", !expanded);
  mobileNav.hidden = expanded;
  document.body.classList.toggle("menu-open", !expanded);
  updateMenuLabel();
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) closeMenu();
});

prefersReducedMotion.addEventListener("change", syncMotionPreference);

const params = new URLSearchParams(window.location.search);
const savedLanguage = readStoredLanguage();
const initialLanguage = params.get("lang") === "zh" ? "zh" : savedLanguage || "en";
currentFilter = validFilters.has(params.get("filter")) ? params.get("filter") : "all";
filterButtons.forEach((button) => {
  button.setAttribute("aria-pressed", button.dataset.filter === currentFilter ? "true" : "false");
});

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(initialLanguage, false);
