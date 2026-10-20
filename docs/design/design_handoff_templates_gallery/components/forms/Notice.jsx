import React from "react";
export function Notice({ variant = "fallback", children, actions }) {
  return (
    <div className={"nb-notice " + (variant === "legal" ? "nb-notice-legal" : "nb-notice-fallback")} role="status">
      {children}
      {actions && <div className="actions">{actions}</div>}
    </div>
  );
}
