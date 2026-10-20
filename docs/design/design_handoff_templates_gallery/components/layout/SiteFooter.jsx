import React from "react";
export function SiteFooter({ logoSrc, links = [
  { label: "Legal notice", href: "#" }, { label: "Contact", href: "#" }, { label: "Privacy policy", href: "#" }, { label: "LinkedIn", href: "https://www.linkedin.com/company/nordeckitconsulting" }
], developedBy = "Developed by", company = "Nordeck IT + Consulting GmbH", companyUrl = "https://nordeck.net" }) {
  return (
    <footer className="nb-site-footer"><div className="wrap footer-inner">
      <div className="footer-brand">
        {logoSrc ? <img src={logoSrc} alt="NeoBoard" /> : <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "#fff" }}>neoboard</span>}
        <span>{developedBy} <a href={companyUrl} target="_blank" rel="noopener noreferrer">{company}</a></span>
      </div>
      <nav className="footer-links">{links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}</nav>
    </div></footer>
  );
}
