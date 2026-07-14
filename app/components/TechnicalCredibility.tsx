import SectionHeading from "./SectionHeading";

const credibilityPoints = [
  {
    title: "Experienced software engineering team",
    description:
      "Technical delivery led by engineers who build and maintain production systems.",
  },
  {
    title: "International project experience",
    description:
      "Work spanning websites, platforms and digital products for clients across markets.",
  },
  {
    title: "Modern web and backend development",
    description:
      "Practical experience across modern applications, interfaces and server-side systems.",
  },
  {
    title: "APIs, integrations and automation",
    description:
      "Connecting tools, workflows and data so everyday operations stay reliable.",
  },
  {
    title: "Secure and structured delivery",
    description:
      "Clear scope, careful access handling and documented technical work.",
  },
  {
    title: "Production-focused engineering",
    description:
      "Solutions designed to stay maintainable after launch, not only to ship once.",
  },
];

export default function TechnicalCredibility() {
  return (
    <section
      aria-labelledby="credibility-heading"
      className="section-padding bg-[var(--color-dark-bg)] border-t border-white/5 relative overflow-hidden"
    >
      <div className="hero-glow-blue" style={{ top: "-400px", opacity: 0.3 }} />
      <div className="site-container relative z-10">
        <SectionHeading
          eyebrow="Engineering approach"
          headline="Experienced software engineers behind every technical solution."
          center
          id="credibility-heading"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credibilityPoints.map((point) => (
            <div
              key={point.title}
              className="glass-card rounded-[16px] p-8 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-[#4E6EFF]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-white font-bold text-[18px] mb-3">{point.title}</h3>
              <p className="text-[15px] text-gray-400 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-[14px] sm:text-[15px] text-gray-400 max-w-[720px] mx-auto bg-white/5 border border-white/10 rounded-2xl px-5 sm:px-6 py-4 inline-block text-center leading-relaxed">
            The engineering team behind Peerprise brings more than seven years of software
            development experience across web applications, backend systems, integrations,
            automation and production platforms. Our engineers have contributed to digital products
            and technical projects connected to globally recognised organisations and major
            international brands.
          </p>
        </div>
      </div>
    </section>
  );
}
