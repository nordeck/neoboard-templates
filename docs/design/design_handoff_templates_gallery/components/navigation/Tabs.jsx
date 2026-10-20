import React from "react";
export function Tabs({ tabs = [], value = 0, onChange }) {
  return (
    <div className="nb-tabs" role="tablist">
      {tabs.map((t, i) => (
        <button key={i} role="tab" aria-selected={i === value} className={i === value ? "active" : ""} onClick={() => onChange && onChange(i)}>{t}</button>
      ))}
    </div>
  );
}
