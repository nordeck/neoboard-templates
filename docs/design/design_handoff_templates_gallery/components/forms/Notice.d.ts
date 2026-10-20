/** Inline status/info box with an orange left rule. "fallback" (cream) after form submit; "legal" (grey-light) on legal pages. */
export interface NoticeProps {
  variant?: "fallback" | "legal";
  children?: React.ReactNode;
  /** Buttons row (e.g. a CopyButton) */
  actions?: React.ReactNode;
}
export function Notice(props: NoticeProps): JSX.Element;
