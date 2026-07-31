const homeCopy = {
  en: {
    langButton: "中文",
    langLabel: "Switch to Traditional Chinese",
    menuOpen: "Open navigation",
    menuClose: "Close navigation",
  },
  zh: {
    langButton: "EN",
    langLabel: "切換至英文",
    menuOpen: "開啟導覽選單",
    menuClose: "關閉導覽選單",
  },
};

const langToggle = document.querySelector("#langToggle");
const menuToggle = document.querySelector("#menuToggle");
const mobileNav = document.querySelector("#mobileNav");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentLang = "en";
let revealObserver;

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
    // The language still applies for this page when storage is unavailable.
  }
}

function updateMenuLabel() {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-label", expanded ? homeCopy[currentLang].menuClose : homeCopy[currentLang].menuOpen);
}

function setLanguage(lang, persist = true) {
  currentLang = lang === "zh" ? "zh" : "en";
  document.documentElement.lang = currentLang === "zh" ? "zh-Hant" : "en";
  document.body.dataset.lang = currentLang;
  langToggle.textContent = homeCopy[currentLang].langButton;
  langToggle.setAttribute("aria-label", homeCopy[currentLang].langLabel);

  document.querySelectorAll("[data-aria-en]").forEach((element) => {
    element.setAttribute("aria-label", currentLang === "zh" ? element.dataset.ariaZh : element.dataset.ariaEn);
  });
  document.querySelectorAll("[data-alt-en]").forEach((element) => {
    element.alt = currentLang === "zh" ? element.dataset.altZh : element.dataset.altEn;
  });
  updateMenuLabel();

  const url = new URL(window.location.href);
  if (currentLang === "zh") url.searchParams.set("lang", "zh");
  else url.searchParams.delete("lang");
  window.history.replaceState({}, "", url);

  if (persist) persistLanguage(currentLang);
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  mobileNav.classList.remove("open");
  mobileNav.hidden = true;
  document.body.classList.remove("menu-open");
  updateMenuLabel();
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

document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(initialLanguage, false);
syncMotionPreference();
