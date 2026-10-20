/** Download area of the template detail page. Adapts to the file count: 1 file → primary button; 2–4 → list of variants; ≥5 → select + button (e.g. 15 calendar years); 0 files → generator button. */
export interface TemplateFile { label: string; name: string; href?: string; }
export interface TemplateLink { label: string; url: string; type: "generator" | "source" | "docs" | "video"; }
export interface DownloadPanelProps {
  /** files[] from frontmatter */
  files?: TemplateFile[];
  /** links[] from frontmatter */
  links?: TemplateLink[];
  locale?: "de" | "en";
  /** From this many files on, show a select instead of rows (default 5) */
  selectThreshold?: number;
  selectLabel?: string;
}
export function DownloadPanel(props: DownloadPanelProps): JSX.Element;
