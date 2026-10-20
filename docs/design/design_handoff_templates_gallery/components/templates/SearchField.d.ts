/** Search input with leading icon, same height as the Tabs tray so they sit on one row. */
export interface SearchFieldProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  /** Accessible label (defaults to placeholder) */
  label?: string;
}
export function SearchField(props: SearchFieldProps): JSX.Element;
