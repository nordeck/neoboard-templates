/**
 * Gallery card for one template: 16:9 preview, category kicker, title, 2-line description, duration / group size, fallback-language note.
 * @startingPoint section="Templates gallery" subtitle="Template card with preview and metadata" viewport="700x420"
 */
export interface Range { min: number; max: number; }
export interface TemplateCardProps {
  title: string;
  /** Frontmatter description, clamped to 2 lines */
  description: string;
  categoryLabel?: string;
  /** Lucide icon name from categories.yaml */
  categoryIcon?: string;
  /** preview.tile if present, else preview.src */
  preview?: { src?: string; alt?: string };
  previewLabel?: string;
  /** Minutes */
  duration?: Range;
  /** Participants */
  groupSize?: Range;
  durationUnit?: string;
  groupUnit?: string;
  /** Shown when the entry is a language fallback, e.g. "Nur auf Englisch" */
  langNote?: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}
export function TemplateCard(props: TemplateCardProps): JSX.Element;
