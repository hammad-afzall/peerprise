/**
 * Shared light / dark section surface helpers for Stage 3 components.
 * Colours derive from Prompt 1 tokens (hero palette + light neutrals).
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
    body: "text-on-dark-muted",
    bodyStrong: "text-on-dark-subtle",
    muted: "text-on-dark-muted",
    border: "border-white/10",
    card: "glass-card",
    cardHover: "hover:bg-white/10",
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
