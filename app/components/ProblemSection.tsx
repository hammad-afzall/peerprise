import SectionHeading from "./SectionHeading";

const problems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 8h10M7 12h6M7 16h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    title: "Inconsistent social content",
    description: "Struggling to maintain a regular posting schedule and brand voice.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Delayed website updates",
    description: "Waiting weeks for simple text or image changes to be completed.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Unresolved technical issues",
    description: "Dealing with broken forms, plugins, or performance warnings.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2l3 6 6 1-4.5 4.5L18 20l-6-3-6 3 1.5-6.5L3 9l6-1 3-6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Too many disconnected providers",
    description: "Juggling multiple freelancers, hosts, and software subscriptions.",
  },
];

export default function ProblemSection() {
  return (
    <section aria-labelledby="problem-heading" className="section-padding bg-[var(--color-dark-bg)]">
      <div className="site-container">
        <SectionHeading
          eyebrow="The Problem"
          headline="Managing your online presence should not require five different people."
          subheadline="We replace the fragmented approach of hiring separate freelancers or agencies for every technical and creative task."
          center
        />
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" role="list">
          {problems.map((p) => (
            <li key={p.title} className="glass-card rounded-[16px] p-6 text-center hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-4 text-[#4E6EFF]">
                {p.icon}
              </div>
              <h3 className="text-[17px] font-bold text-white mb-3">{p.title}</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">{p.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
