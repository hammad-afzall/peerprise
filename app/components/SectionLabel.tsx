type Props = {
  number: string;
  badge: string;
  /** Dark section surfaces use white rule + inverted badge when needed */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Studiova section label: lime number chip + rule + badge pill.
 */
export default function SectionLabel({
  number,
  badge,
  tone = "light",
  className = "",
}: Props) {
  const isDark = tone === "dark";

  return (
    <div
      className={[
        "flex w-full max-w-xl items-center gap-4 md:gap-8 py-3",
        className,
      ].join(" ")}
    >
      <span className="inline-flex shrink-0 rounded-full bg-accent px-2.5 py-1.5 text-base font-medium text-[#1f2a2e]">
        {number}
      </span>
      <span
        className={[
          "h-px w-16 shrink-0",
          isDark ? "bg-white/12" : "bg-black/12",
        ].join(" ")}
        aria-hidden="true"
      />
      <span
        className={[
          "inline-flex h-9 items-center rounded-full px-4 py-1.5 text-base font-medium",
          isDark
            ? "bg-white text-[#1f2a2e]"
            : "bg-[#1f2a2e] text-white",
        ].join(" ")}
      >
        {badge}
      </span>
    </div>
  );
}
