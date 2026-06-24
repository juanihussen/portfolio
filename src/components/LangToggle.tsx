"use client";

import { useLang } from "./LangContext";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      onClick={() => setLang(lang === "es" ? "en" : "es")}
      className="fixed top-4 right-16 z-[70] text-[11px] font-bold tracking-widest text-muted hover:text-dark transition-colors"
      aria-label={lang === "es" ? "Switch to English" : "Cambiar a Español"}
    >
      {lang === "es" ? "EN" : "ES"}
    </button>
  );
}
