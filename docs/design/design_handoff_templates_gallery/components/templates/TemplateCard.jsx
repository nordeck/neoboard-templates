import React from "react";
import { Icon } from "../core/Icon.jsx";
import { TemplatePreview } from "./TemplatePreview.jsx";
const range = (r, unit) => r ? (r.min === r.max ? r.min : r.min + "–" + r.max) + " " + unit : null;
export function TemplateCard({ title, description, categoryLabel, categoryIcon, preview, previewLabel, duration, groupSize, durationUnit = "min", groupUnit = "people", langNote, href, onClick }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag className="nb-tcard" href={href} onClick={onClick} type={href ? undefined : "button"}>
      <div className="pv"><TemplatePreview src={preview && preview.src} alt={preview && preview.alt} icon={categoryIcon} label={previewLabel} iconSize={30} /></div>
      <div className="bd">
        {categoryLabel && <span className="cat">{categoryIcon && <Icon name={categoryIcon} size={14} />}{categoryLabel}</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        {(duration || groupSize || langNote) && (
          <div className="meta">
            {duration && <span><Icon name="Clock" size={15} />{range(duration, durationUnit)}</span>}
            {groupSize && <span><Icon name="Users" size={15} />{range(groupSize, groupUnit)}</span>}
            {langNote && <span className="nb-lang-note"><Icon name="Languages" size={13} />{langNote}</span>}
          </div>
        )}
      </div>
    </Tag>
  );
}
