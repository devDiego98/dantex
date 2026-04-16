import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import agtechEn from "./locales/en/agtech.json";
import agtechEs from "./locales/es/agtech.json";
import aiEn from "./locales/en/ai.json";
import aiEs from "./locales/es/ai.json";
import commonEn from "./locales/en/common.json";
import commonEs from "./locales/es/common.json";
import energyEn from "./locales/en/energy.json";
import energyEs from "./locales/es/energy.json";
import engineeringEn from "./locales/en/engineering.json";
import engineeringEs from "./locales/es/engineering.json";
import healthcareEn from "./locales/en/healthcare.json";
import healthcareEs from "./locales/es/healthcare.json";
import homeEn from "./locales/en/home.json";
import homeEs from "./locales/es/home.json";
import industryNvidiaEn from "./locales/en/industryNvidia.json";
import industryNvidiaEs from "./locales/es/industryNvidia.json";
import navMegaEn from "./locales/en/navMega.json";
import navMegaEs from "./locales/es/navMega.json";
import dantexLabEn from "./locales/en/dantexLab.json";
import dantexLabEs from "./locales/es/dantexLab.json";
import sitePagesEn from "./locales/en/sitePages.json";
import sitePagesEs from "./locales/es/sitePages.json";
import sportsEn from "./locales/en/sports.json";
import sportsEs from "./locales/es/sports.json";
import videoUnderVideoEn from "./locales/en/videoUnderVideo.json";
import videoUnderVideoEs from "./locales/es/videoUnderVideo.json";

const STORAGE_KEY = "dantex-lang";

function merge(
  ...parts: Array<Record<string, unknown>>
): Record<string, unknown> {
  return Object.assign({}, ...parts);
}

function readStoredLang(): "es" | "en" {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === "en" || raw === "es") return raw;
  } catch {
    /* ignore */
  }
  return "es";
}

const es = merge(
  commonEs,
  homeEs,
  navMegaEs,
  videoUnderVideoEs,
  industryNvidiaEs,
  engineeringEs,
  agtechEs,
  energyEs,
  sitePagesEs,
  healthcareEs,
  sportsEs,
  aiEs,
  dantexLabEs
);
const en = merge(
  commonEn,
  homeEn,
  navMegaEn,
  videoUnderVideoEn,
  industryNvidiaEn,
  engineeringEn,
  agtechEn,
  energyEn,
  sitePagesEn,
  healthcareEn,
  sportsEn,
  aiEn,
  dantexLabEn
);

void i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
  },
  lng: readStoredLang(),
  fallbackLng: "es",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng.split("-")[0] ?? lng);
  } catch {
    /* ignore */
  }
  document.documentElement.lang = lng.startsWith("en") ? "en" : "es";
});

document.documentElement.lang = i18n.language.startsWith("en") ? "en" : "es";

export default i18n;
