import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { plans } from "../lib/plans";

export default function PricingPreview() {
  const startingPlan = plans[0];

  return (
    <section aria-labelledby="pricing-preview-heading" className="section-padding bg-[var(--color-dark-bg)] border-t border-white/5">
      <div className="site-container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          <div className="lg:max-w-[480px]">
            <SectionHeading eyebrow="Simple Pricing" headline="Clear monthly plans. No surprises." />
            <p className="mt-5 text-[16px] text-gray-400 leading-relaxed mb-8">
              Whether you need basic website maintenance or comprehensive digital operations support, our plans are straightforward, with no long-term contracts.
            </p>
            <Link href="/plans" className="inline-flex items-center gap-2 text-[15px] font-bold text-[#4E6EFF] hover:text-[#FF58D5] transition-colors group">
              View Plans
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="M3 7h8M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
          <div className="w-full lg:w-[420px]">
            <article className="glass-card gradient-border rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 sm:pt-10 relative flex flex-col">
              <span className="inline-flex w-fit mb-5 sm:absolute sm:-top-4 sm:left-8 sm:mb-0 bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] text-white text-[11px] sm:text-[12px] font-bold tracking-widest px-3 sm:px-4 py-1.5 rounded-full uppercase shadow-md">
                Flexible Support
              </span>

              <h3 className="text-[17px] sm:text-[18px] font-bold text-white mb-3">All plans include:</h3>

              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 mb-3">
                <span className="text-[15px] text-gray-400 font-medium">Plans starting from</span>
                <span className="text-[32px] sm:text-[36px] font-bold text-white tracking-tight">{startingPlan.price}</span>
                <span className="text-[15px] text-gray-400 font-medium">{startingPlan.period}</span>
              </div>

              <p className="text-[15px] text-gray-400 leading-relaxed">Choose the level of support that fits your company, brand or professional presence.</p>

              <div className="border-t border-white/10 my-5 sm:my-6" aria-hidden="true" />

              <ul className="space-y-3.5 mb-6">
                {["Monthly activity summary", "Direct access to support", "No long-term contracts"].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#4E6EFF]">
                      <svg width="12" height="12" viewBox="0 0 10 10" fill="none"><path d="M1.5 5.5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span className="text-[15px] text-white font-medium">{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/plans" className="btn-primary">
                View Plans
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
