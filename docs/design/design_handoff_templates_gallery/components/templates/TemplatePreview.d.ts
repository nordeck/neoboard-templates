/** 16:9 template preview (1920×1080 master). Always light, with a subtle border so it reads on dark pages. Shows a placeholder while the screenshot is pending. */
export interface TemplatePreviewProps {
  /** preview.src / preview.tile */
  src?: string;
  /** preview.alt */
  alt?: string;
  /** Lucide icon for the placeholder (category icon) */
  icon?: string;
  /** Placeholder label, e.g. "Vorschau folgt" */
  label?: string;
  iconSize?: number;
}
export function TemplatePreview(props: TemplatePreviewProps): JSX.Element;
