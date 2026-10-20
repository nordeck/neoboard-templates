/** Lucide stroke icon (substitution — the source site has no icon set). Requires the Lucide UMD script on the page. */
export interface IconProps {
  /** PascalCase Lucide name, e.g. "Search", "Download", "CalendarDays" */
  name: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
