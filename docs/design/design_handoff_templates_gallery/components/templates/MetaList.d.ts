/** Two-column metadata list: mono uppercase labels, Titillium values (duration, group size, authors, licence, dates). */
export interface MetaItem { label: string; value: React.ReactNode; }
export interface MetaListProps { items: MetaItem[]; }
export function MetaList(props: MetaListProps): JSX.Element;
