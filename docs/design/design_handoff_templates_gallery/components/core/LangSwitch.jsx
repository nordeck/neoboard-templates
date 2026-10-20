import React from "react";
export function LangSwitch({ value = "en", onChange, tone = "light", options = ["de", "en"] }) {
  return (
    <nav className={"nb-lang " + (tone === "dark" ? "nb-lang-dark" : "nb-lang-light")} aria-label="Language selection">
      {options.map((o) => (
        <button key={o} type="button" className={o === value ? "active" : ""} onClick={() => onChange && onChange(o)}>{o.toUpperCase()}</button>
      ))}
    </nav>
  );
}
