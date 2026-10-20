import React from "react";
export function MetaList({ items = [] }) {
  return <dl className="nb-meta">{items.filter((i) => i && i.value).map((i) => <div key={i.label}><dt>{i.label}</dt><dd>{i.value}</dd></div>)}</dl>;
}
