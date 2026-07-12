import Link from "next/link";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section className="relative pt-[120px] pb-12 sm:pt-[160px] sm:pb-20 lg:pt-[200px] lg:pb-[120px] overflow-hidden">
      <div className="hero-glow" />
      <div className="hero-glow-pink" />

      <div className="site-container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          <div className="w-full max-w-[720px]">
            <p className="text-[11px] sm:text-[13px] font-bold text-gray-400 tracking-[0.1em] sm:tracking-[0.15em] uppercase mb-4 sm:mb-6 leading-relaxed">
              Website, social presence and digital support
            </p>
            <h1 className="text-[32px] sm:text-[48px] md:text-[58px] lg:text-[68px] font-bold leading-[1.08] tracking-tight text-white mb-5 sm:mb-8">
              Your entire digital presence,{" "}
              <span className="text-gradient">managed</span> by one reliable team.
            </h1>
            <p className="text-[17px] sm:text-[20px] leading-relaxed text-gray-300 mb-8 sm:mb-10 max-w-[540px]">
              We apply software engineering principles to everyday digital operations. No shortcuts, no black-box promises.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-8 sm:mb-10">
              <Link href="/health-check" className="btn-primary">
                Request Health Check
              </Link>
              <Link href="/plans" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-4">
              {["Social presence", "Website care", "Integrations", "Technical support"].map((tag, i) => (
                <span key={tag} className="flex items-center gap-2 text-[13px] sm:text-[14px] text-gray-400">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-600" aria-hidden="true" />}
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="w-full lg:flex-1 lg:max-w-[620px]">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
