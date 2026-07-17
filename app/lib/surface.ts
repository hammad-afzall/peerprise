/**
 * Shared light / dark section surface helpers.
 * Dark surfaces follow the Studiova-inspired black / lime system.
 */

export type SurfaceVariant = "dark" | "light";

export type LinkCTA = {
  label: string;
  href: string;
};

export const surface = {
  dark: {
    section: "section-dark",
    sectionElevated: "section-dark-elevated",
    eyebrow: "text-on-dark-muted",
    heading: "text-white",
    body: "text-on-dark-subtle",
    bodyStrong: "text-on-dark",
    muted: "text-on-dark-muted",
    border: "border-white/10",
    card: "card-dark",
    cardHover: "hover:border-white/20",
    divide: "divide-white/10",
    link: "text-accent hover:text-accent-secondary",
    secondaryBtn: "btn-secondary",
  },
  light: {
    section: "section-light",
    sectionElevated: "section-surface",
    eyebrow: "text-muted",
    heading: "text-ink",
    body: "text-muted-strong",
    bodyStrong: "text-ink-secondary",
    muted: "text-muted",
    border: "border-border",
    card: "card-light",
    cardHover: "hover:border-border-strong",
    divide: "divide-border",
    link: "text-accent hover:text-accent-hover",
    secondaryBtn: "btn-secondary-light",
  },
} as const;

export function surfaceClasses(variant: SurfaceVariant = "dark") {
  return surface[variant];
}
