/** Category filter chips (pill toggles with icon and count). Wraps on desktop, scrolls horizontally on mobile. */
export interface Category { id: string; label: string; icon?: string; count?: number; }
export interface CategoryChipsProps {
  categories: Category[];
  /** Active category id; null = all */
  value?: string | null;
  onChange?: (id: string | null) => void;
  allLabel?: string;
  showCounts?: boolean;
  /** Count on the "all" chip */
  total?: number;
}
export function CategoryChips(props: CategoryChipsProps): JSX.Element;
