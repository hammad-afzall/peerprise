import SectionHeading from "./SectionHeading";

const principles = [
  {
    title: "Structured Operations",
    description: "We manage your digital assets with documented processes and clear version control."
  },
  {
    title: "Secure Access",
    description: "Credentials are managed through secure password managers with minimum necessary privileges."
  },
  {
    title: "Reliable Performance",
    description: "Updates are checked for responsiveness, speed, and accessibility before going live."
  },
  {
    title: "Clear Activity Records",
    description: "All changes are logged. You receive a transparent record of what was done and when."
  }
];

export default function TechnicalCredibility() {
  return (
    <section aria-labelledby="credibility-heading" className="section-padding bg-[var(--color-dark-bg)] border-t border-white/5 relative overflow-hidden">
      <div className="hero-glow-blue" style={{ top: '-400px', opacity: 0.3 }} />
      <div className="site-container relative z-10">
        <SectionHeading 
          eyebrow="Engineering approach"
          headline="Built on solid technical foundations."
          id="credibility-heading"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((p, i) => (
            <div key={i} className="glass-card rounded-[16px] p-8 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-[#4E6EFF]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-white font-bold text-[18px] mb-3">{p.title}</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-[14px] sm:text-[15px] text-gray-400 max-w-[600px] mx-auto bg-white/5 border border-white/10 rounded-2xl sm:rounded-full px-5 sm:px-6 py-3 inline-block text-center leading-relaxed">
            Founded and led by a software engineer with 9+ years of experience building and supporting digital products for international clients.
          </p>
        </div>
      </div>
    </section>
  );
}
