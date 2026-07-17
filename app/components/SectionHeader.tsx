import { surfaceClasses, type SurfaceVariant } from "../lib/surface";

type Props = {
  eyebrow?: string;
  headline: string;
  subheadline?: string;
  center?: boolean;
  variant?: SurfaceVariant;
  /** @deprecated Use variant="light" instead. */
  light?: boolean;
  className?: string;
  id?: string;
  as?: "h2" | "h3";
};

/**
 * SectionHeader — shared section title block.
 * Exported as SectionHeading for existing imports.
 */
export default function SectionHeader({
  eyebrow,
  headline,
  subheadline,
  center = false,
  variant,
  light,
  className = "",
  id,
  as: Tag = "h2",
}: Props) {
  const resolved: SurfaceVariant = variant ?? (light ? "light" : "dark");
  const s = surfaceClasses(resolved);

  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className={`type-eyebrow mb-2 sm:mb-3 ${s.eyebrow}`}>{eyebrow}</p>
      )}
      <Tag
        id={id}
        className={`type-h2 tracking-tight max-w-[840px] ${s.heading} ${center ? "mx-auto" : ""}`}
      >
        {headline}
      </Tag>
      {subheadline && (
        <p
          className={`mt-3 sm:mt-4 type-body-lg max-w-[720px] ${s.body} ${center ? "mx-auto" : ""}`}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}

export { SectionHeader as SectionHeading };
