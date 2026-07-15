import { selectedTeamExperienceLabel } from "../lib/disclosure";
import { surfaceClasses, type SurfaceVariant } from "../lib/surface";

type Props = {
  children: string;
  /** Optional visible label above the note. */
  label?: string;
  variant?: SurfaceVariant;
  className?: string;
};

/**
 * Prominent disclosure for selected team experience / evidence boundaries.
 */
export default function DisclosureNote({
  children,
  label = selectedTeamExperienceLabel,
  variant = "light",
  className = "",
}: Props) {
  const s = surfaceClasses(variant);
  const isDark = variant === "dark";

  return (
    <aside
      className={[
        "rounded-[var(--radius-card)] p-5 sm:p-6 border-l-4",
        isDark
          ? "glass-card border-l-accent"
          : "bg-surface border border-border border-l-accent shadow-sm",
        className,
      ].join(" ")}
      role="note"
    >
      {label && (
        <p className={`type-eyebrow mb-2 ${isDark ? "text-accent" : "text-accent"}`}>{label}</p>
      )}
      <p className={`type-body m-0 ${s.bodyStrong}`}>{children}</p>
    </aside>
  );
}
