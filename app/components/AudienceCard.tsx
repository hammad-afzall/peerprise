import Link from "next/link";
import { surfaceClasses, type LinkCTA, type SurfaceVariant } from "../lib/surface";

export type AudienceCardProps = {
  title: string;
  description: string;
  cta: LinkCTA;
  variant?: SurfaceVariant;
  className?: string;
};

export default function AudienceCard({
  title,
  description,
  cta,
  variant = "light",
  className = "",
}: AudienceCardProps) {
  const s = surfaceClasses(variant);

  return (
    <article
      className={[
        "h-full flex flex-col rounded-[var(--radius-card)] p-6 sm:p-8",
        s.card,
        className,
      ].join(" ")}
    >
      <h3 className={`type-h3 tracking-tight mb-3 ${s.heading}`}>{title}</h3>
      <p className={`type-body flex-1 mb-6 ${s.body}`}>{description}</p>
      <Link
        href={cta.href}
        className={`inline-flex items-center min-h-[var(--target-min)] text-[15px] font-bold ${s.link}`}
      >
        {cta.label}
        <svg
          className="w-4 h-4 ml-1.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </article>
  );
}
