import React from "react";
import { Icon } from "../core/Icon.jsx";
export function TemplatePreview({ src, alt = "", icon = "LayoutTemplate", label = "Preview pending", iconSize = 36 }) {
  return (
    <div className="nb-tpreview">
      {src ? <img src={src} alt={alt} /> : <div className="ph" role="img" aria-label={alt || label}><Icon name={icon} size={iconSize} strokeWidth={1.6} /><span>{label}</span></div>}
    </div>
  );
}
