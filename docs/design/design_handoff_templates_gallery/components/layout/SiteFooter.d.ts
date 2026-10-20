/** Dark footer: white logo + "Developed by Nordeck IT + Consulting GmbH" left, legal links right. */
export interface FooterLink { label: string; href: string; }
export interface SiteFooterProps {
  /** Path to assets/logos/neoboard-logo-white.png */
  logoSrc?: string;
  links?: FooterLink[];
  developedBy?: string;
  company?: string;
  companyUrl?: string;
}
export function SiteFooter(props: SiteFooterProps): JSX.Element;
