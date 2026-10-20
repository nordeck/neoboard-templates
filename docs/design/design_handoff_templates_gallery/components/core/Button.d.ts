import * as React from "react";
/**
 * NeoBoard call-to-action button. Orange primary; ghost (white hairline) is for dark/red surfaces only.
 * @startingPoint section="Core" subtitle="Primary + ghost CTA buttons" viewport="700x200"
 */
export interface ButtonProps {
  /** "primary" = orange fill (hover: white bg, red text). "ghost" = white 35% hairline, for dark backgrounds. */
  variant?: "primary" | "ghost";
  /** Renders an <a> when set */
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
