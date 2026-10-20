import React from "react";
export function ImportSteps({ steps = [] }) {
  return (
    <div className="nb-cards nb-cards-dark nb-steps">
      {steps.map((s, i) => <div key={i}><span className="num">{String(i + 1).padStart(2, "0")}</span><h3>{s.title}</h3><p>{s.description}</p></div>)}
    </div>
  );
}
