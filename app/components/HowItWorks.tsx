import Link from "next/link";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Health Check",
    description: "We review your website, social accounts, and digital tools to understand what's working and what needs attention.",
  },
  {
    number: "02",
    title: "Scope and Setup",
    description: "We define clear responsibilities, secure necessary access, and agree on the monthly deliverables.",
  },
  {
    number: "03",
    title: "Monthly Planning",
    description: "At the start of each month, we confirm content direction, support priorities, and any planned updates.",
  },
  {
    number: "04",
    title: "Ongoing Delivery",
    description: "We execute the agreed work, manage updates, and handle technical support requests as they arise.",
  },
];

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="section-padding bg-[var(--color-dark-surface)] border-t border-white/5">
      <div className="site-container">
        <SectionHeading
          eyebrow="Process"
          headline="How we work together."
          subheadline="A straightforward process focused on understanding your needs, implementing solutions, and providing ongoing support."
          center
        />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[48px] left-[12%] right-[12%] h-px bg-white/10" aria-hidden="true" />
          
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full glass-card gradient-border flex items-center justify-center text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-white mb-4 sm:mb-6 shadow-lg relative bg-[#111827]">
                <span className="text-gradient relative z-10">{step.number}</span>
              </div>
              <h3 className="text-[20px] font-bold text-white mb-4">{step.title}</h3>
              <p className="text-[16px] leading-relaxed text-gray-300 max-w-[280px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/how-it-works" className="inline-flex items-center text-[16px] font-bold text-[#4E6EFF] hover:text-[#FF58D5] transition-colors group">
            View our detailed process
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="M2.5 6h7M6.5 2.5l3.5 3.5-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
