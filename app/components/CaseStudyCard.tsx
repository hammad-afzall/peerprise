import { surfaceClasses, type SurfaceVariant } from "../lib/surface";
import TagList from "./TagList";

export type CaseStudyCardProps = {
  title: string;
  context: string;
  contribution?: string;
  capability?: string;
  outcome?: string;
  tags?: string[];
  variant?: SurfaceVariant;
  className?: string;
};

export default function CaseStudyCard({
  title,
  context,
  contribution,
  capability,
  outcome,
  tags,
  variant = "light",
  className = "",
}: CaseStudyCardProps) {
  const s = surfaceClasses(variant);
  const usesCustomSurface = /\bcard-/.test(className);

  return (
    <article
      className={[
        "h-full flex flex-col rounded-[var(--radius-card)] p-6 sm:p-7",
        usesCustomSurface ? "" : s.card,
        className,
      ].join(" ")}
    >
      <h3 className={`type-h3 tracking-tight mb-3 ${s.heading}`}>{title}</h3>
      <p className={`type-body mb-4 ${s.body}`}>{context}</p>
      {contribution && (
        <div className="mb-3">
          <p className={`type-small font-bold uppercase tracking-wide mb-1 ${s.muted}`}>
            Contribution
          </p>
          <p className={`type-body ${s.bodyStrong}`}>{contribution}</p>
        </div>
      )}
      {capability && (
        <div className="mb-3">
          <p className={`type-small font-bold uppercase tracking-wide mb-1 ${s.muted}`}>
            Capability demonstrated
          </p>
          <p className={`type-body ${s.bodyStrong}`}>{capability}</p>
        </div>
      )}
      {outcome && (
        <div className="mb-4">
          <p className={`type-small font-bold uppercase tracking-wide mb-1 ${s.muted}`}>
            Outcome
          </p>
          <p className={`type-body ${s.bodyStrong}`}>{outcome}</p>
        </div>
      )}
      {tags && tags.length > 0 && (
        <div className="mt-auto pt-4">
          <TagList tags={tags} variant={variant} />
        </div>
      )}
    </article>
  );
}
