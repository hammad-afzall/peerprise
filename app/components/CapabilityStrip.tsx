import { workCapabilitySummary } from "../lib/work";
import { homepageCapabilitiesStrip } from "../lib/homepage";

/**
 * Capability strip — Studiova partners-row pattern between pricing and FAQ,
 * using Peerprise capability labels (not invented client logos).
 */
export default function CapabilityStrip() {
  const loop = [...workCapabilitySummary, ...workCapabilitySummary];

  return (
    <section
      aria-label={homepageCapabilitiesStrip.label}
      className="border-y border-[#1f2a2e]/8 bg-[#f4f8fa] py-10 md:py-14 dark:border-white/8 dark:bg-[#1f2a2e]"
    >
      <p className="site-container mb-8 text-center text-sm font-medium text-[#1f2a2e]/55 md:text-base dark:text-white/55">
        {homepageCapabilitiesStrip.label}
      </p>
      <div className="overflow-hidden" aria-hidden="true">
        <div className="marquee-track items-center opacity-70">
          {loop.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-8 px-4 md:gap-10 md:px-6"
            >
              <span className="whitespace-nowrap text-lg font-bold text-[#1f2a2e] md:text-2xl dark:text-white">
                {item}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/icons/primary-leaf.svg"
                alt=""
                width={22}
                height={22}
                className="shrink-0 opacity-50 grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
