import React from "react";
import { Icon } from "../core/Icon.jsx";
export function SearchField({ value, onChange, placeholder = "Search", label }) {
  return (
    <div className="nb-search">
      <Icon name="Search" size={18} />
      <input type="search" value={value} placeholder={placeholder} aria-label={label || placeholder} onChange={(e) => onChange && onChange(e.target.value)} />
    </div>
  );
}
