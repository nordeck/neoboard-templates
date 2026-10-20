import React from "react";
const cx = (...a) => a.filter(Boolean).join(" ");
export function Button({ variant = "primary", href, children, className, ...rest }) {
  const cls = cx("nb-btn", variant === "ghost" ? "nb-btn-ghost" : "nb-btn-primary", className);
  if (href) return <a className={cls} href={href} {...rest}>{children}</a>;
  return <button type="button" className={cls} {...rest}>{children}</button>;
}
