import React from "react";
import { LangSwitch } from "../core/LangSwitch.jsx";
export function SiteHeader({ logoSrc, homeHref = "#", lang = "en", onLangChange }) {
  return (
    <header className="nb-site-header"><div className="wrap">
      <a className="brand" href={homeHref} aria-label="NeoBoard – Home">
        {logoSrc ? <img src={logoSrc} alt="NeoBoard" /> : <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--dark)" }}>neoboard</span>}
      </a>
      <LangSwitch value={lang} onChange={onLangChange} tone="light" />
    </div></header>
  );
}
