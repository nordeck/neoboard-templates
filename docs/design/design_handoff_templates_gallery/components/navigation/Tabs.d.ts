/** Segmented tab switcher on a grey-light tray; active tab is a dark chip. */
export interface TabsProps {
  tabs: string[];
  /** Active index */
  value?: number;
  onChange?: (index: number) => void;
}
export function Tabs(props: TabsProps): JSX.Element;
