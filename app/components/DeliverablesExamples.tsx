import SectionHeading from "./SectionHeading";

const deliverables = [
  {
    title: "Monthly Content Calendar",
    description: "A structured view of approved social posts, including copy, graphics, and scheduled dates.",
  },
  {
    title: "Website Maintenance Summary",
    description: "A transparent log of all plugin updates, security checks, and uptime monitoring.",
  },
  {
    title: "Completed Support Requests",
    description: "A clear record of all technical tasks and content updates handled during the month.",
  },
  {
    title: "Social Publishing Report",
    description: "A summary of content published across platforms, highlighting consistent activity.",
  },
  {
    title: "Integration Documentation",
    description: "A reference guide detailing how your forms, CRM, and analytics are connected.",
  },
  {
    title: "Digital Presence Health Check",
    description: "An initial technical audit of your website and social profiles to prioritize work.",
  },
];

export default function DeliverablesExamples() {
  return (
    <section aria-labelledby="deliverables-heading" className="section-padding bg-[var(--color-dark-surface)] border-t border-white/5">
      <div className="site-container">
        <SectionHeading
          eyebrow="Example Deliverables"
          headline="Clear records. Tangible output."
          subheadline="We provide structured documentation and transparent reporting so you always know exactly what is being done."
          center
        />

        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {deliverables.map((item) => (
            <div key={item.title} className="glass-card rounded-[16px] p-6 sm:p-8 hover:bg-white/10 transition-colors">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mb-5 sm:mb-6 text-[#4E6EFF]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"></polyline>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                </svg>
              </div>
              <h3 className="text-[17px] sm:text-[18px] font-bold text-white mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
