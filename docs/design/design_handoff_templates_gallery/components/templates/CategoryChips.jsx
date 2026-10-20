import React from "react";
import { Icon } from "../core/Icon.jsx";
export function CategoryChips({ categories = [], value = null, onChange, allLabel = "All", showCounts = true, total }) {
  return (
    <div className="nb-chips" role="group">
      <button type="button" className={"nb-chip" + (value == null ? " active" : "")} aria-pressed={value == null} onClick={() => onChange && onChange(null)}>
        {allLabel}{showCounts && total != null && <span className="n">{total}</span>}
      </button>
      {categories.map((c) => (
        <button key={c.id} type="button" className={"nb-chip" + (value === c.id ? " active" : "")} aria-pressed={value === c.id} onClick={() => onChange && onChange(c.id)}>
          {c.icon && <Icon name={c.icon} size={16} />}{c.label}{showCounts && c.count != null && <span className="n">{c.count}</span>}
        </button>
      ))}
    </div>
  );
}
