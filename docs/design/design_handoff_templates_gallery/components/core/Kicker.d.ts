/** Mono uppercase section label ("PRODUCT", "SECURITY & SOVEREIGNTY") above a section title. */
export interface KickerProps {
  children?: React.ReactNode;
  /** Use orange-light instead of red, for dark sections */
  onDark?: boolean;
}
export function Kicker(props: KickerProps): JSX.Element;
