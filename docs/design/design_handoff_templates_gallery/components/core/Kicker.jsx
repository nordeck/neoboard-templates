import React from "react";
export function Kicker({ children, onDark = false }) {
  return <span className={"nb-kicker" + (onDark ? " on-dark" : "")}>{children}</span>;
}
