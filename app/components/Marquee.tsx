"use client";

/** Infinite capability / topic marquee — Studiova about-page pattern. */
export default function Marquee({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  const loop = [...items, ...items];

  return (
    <div
      className={`overflow-hidden border-y border-white/10 bg-[#1f2a2e] py-8 md:py-12 ${className}`}
      aria-hidden="true"
    >
      <div className="marquee-track items-center">
        {loop.map((item, index) => (
          <div key={`${item}-${index}`} className="flex shrink-0 items-center gap-8 px-4 md:gap-12 md:px-6">
            <span className="whitespace-nowrap text-2xl font-bold text-white md:text-4xl">
              {item}
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/primary-leaf.svg"
              alt=""
              width={28}
              height={28}
              className="shrink-0 opacity-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
