/** Three-step "download → import → start" explainer, built on the dark hairline card grid. */
export interface ImportStep { title: string; description: string; }
export interface ImportStepsProps { steps: ImportStep[]; }
export function ImportSteps(props: ImportStepsProps): JSX.Element;
