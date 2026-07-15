import type { SurfaceVariant } from "../lib/surface";

type Props = {
  tags: string[];
  variant?: SurfaceVariant;
  className?: string;
};

/**
 * Secondary technology / topic tags. Do not invent tags at call sites.
 */
export default function TagList({ tags, variant = "light", className = "" }: Props) {
  const isDark = variant === "dark";

  if (tags.length === 0) return null;

  return (
    <ul className={`flex flex-wrap gap-2 list-none p-0 m-0 ${className}`} aria-label="Tags">
      {tags.map((tag) => (
        <li key={tag}>
          <span
            className={[
              "inline-flex items-center min-h-8 px-3 py-1 rounded-md type-small font-semibold",
              isDark
                ? "bg-white/10 text-on-dark-subtle border border-white/10"
                : "bg-canvas text-muted-strong border border-border",
            ].join(" ")}
          >
            {tag}
          </span>
        </li>
      ))}
    </ul>
  );
}
