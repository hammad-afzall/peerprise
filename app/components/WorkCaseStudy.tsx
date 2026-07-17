import type { ReactNode } from "react";
import TagList from "./TagList";
import type { WorkCaseStudy } from "../lib/work";

type Size = "featured" | "medium" | "concise";

type Props = {
  study: WorkCaseStudy;
  size?: Size;
  /** Optional 1-based marker for visual hierarchy. */
  marker?: string;
  /** Optional abstract visual — featured layouts only. */
  visual?: ReactNode;
  className?: string;
};

function FieldLabel({ children }: { children: string }) {
  return (
    <p className="type-small font-bold uppercase tracking-wide text-on-dark-muted mb-2 m-0">
      {children}
    </p>
  );
}

/**
 * Selected Work case-study article — context and contribution before tags.
 */
export default function WorkCaseStudy({
  study,
  size = "medium",
  marker,
  visual,
  className = "",
}: Props) {
  const headingId = `work-case-${study.id}`;
  const isFeatured = size === "featured";
  const isConcise = size === "concise";

  return (
    <article
      aria-labelledby={headingId}
      className={[
        "relative overflow-hidden h-full flex flex-col",
        isFeatured ? "card-dark p-6 sm:p-8 lg:p-10" : isConcise ? "card-dark-quiet p-5 sm:p-6" : "card-dark p-6 sm:p-7",
        className,
      ].join(" ")}
    >
      {isFeatured && (
        <div
          className="pointer-events-none absolute inset-0 opacity-55 motion-reduce:opacity-40"
          style={{
            background:
              "linear-gradient(135deg, rgba(78,110,255,0.14), transparent 44%, rgba(255,88,213,0.08))",
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative flex flex-col flex-1 gap-5 sm:gap-6">
        <header className="space-y-3">
          {marker && (
            <p className="type-eyebrow text-accent m-0" aria-hidden="true">
              {marker}
            </p>
          )}
          {isFeatured && (
            <p className="type-eyebrow text-accent m-0">Featured experience</p>
          )}
          <h3
            id={headingId}
            className={[
              "tracking-tight text-white m-0",
              isFeatured ? "type-h2 max-w-[22ch]" : isConcise ? "type-h4" : "type-h3",
            ].join(" ")}
          >
            {study.title}
          </h3>
        </header>

        {isFeatured ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <FieldLabel>Context</FieldLabel>
                <p className="type-body-lg text-on-dark-subtle m-0">{study.context}</p>
              </div>
              <div>
                <FieldLabel>Contribution</FieldLabel>
                <ContributionList items={study.contributions} size="featured" />
              </div>
              <div>
                <FieldLabel>Capability demonstrated</FieldLabel>
                <p className="type-body text-on-dark-subtle m-0">{study.capability}</p>
              </div>
              <TagList tags={study.tags} variant="dark" />
            </div>
            {visual && <div className="lg:col-span-5 flex flex-col justify-center">{visual}</div>}
          </div>
        ) : (
          <>
            <div>
              <FieldLabel>Context</FieldLabel>
              <p className={`m-0 ${isConcise ? "type-body text-on-dark-subtle" : "type-body-lg text-on-dark-subtle"}`}>
                {study.context}
              </p>
            </div>
            <div>
              <FieldLabel>Contribution</FieldLabel>
              <ContributionList items={study.contributions} size={size} />
            </div>
            <div>
              <FieldLabel>Capability demonstrated</FieldLabel>
              <p className="type-body text-on-dark-subtle m-0">{study.capability}</p>
            </div>
            <div className="mt-auto pt-1">
              <TagList tags={study.tags} variant="dark" />
            </div>
          </>
        )}
      </div>
    </article>
  );
}

function ContributionList({
  items,
  size,
}: {
  items: string[];
  size: Size;
}) {
  return (
    <ul
      className={[
        "space-y-2.5 list-none p-0 m-0",
        size === "concise" ? "space-y-2" : "",
      ].join(" ")}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
            aria-hidden="true"
          />
          <span
            className={
              size === "featured"
                ? "type-body text-on-dark"
                : "type-body text-on-dark-subtle"
            }
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
