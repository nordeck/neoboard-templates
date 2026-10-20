/** Subpage header: cream bar with the colour NeoBoard logo (30px) left and a light LangSwitch right. */
export interface SiteHeaderProps {
  /** Path to assets/logos/neoboard-logo.png (relative to your page) */
  logoSrc?: string;
  homeHref?: string;
  lang?: "de" | "en";
  onLangChange?: (lang: string) => void;
}
export function SiteHeader(props: SiteHeaderProps): JSX.Element;
