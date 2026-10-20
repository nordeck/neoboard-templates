import React from "react";
export function Icon({ name, size = 18, strokeWidth = 2, className, style }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    el.innerHTML = "";
    const L = window.lucide; const node = L && L.icons && L.icons[name];
    if (!node || !L.createElement) return;
    const svg = L.createElement(node);
    svg.setAttribute("width", size); svg.setAttribute("height", size); svg.setAttribute("stroke-width", strokeWidth);
    svg.setAttribute("aria-hidden", "true");
    el.appendChild(svg);
  }, [name, size, strokeWidth]);
  return <span ref={ref} className={"nb-icon" + (className ? " " + className : "")} style={{ width: size, height: size, ...style }}></span>;
}
