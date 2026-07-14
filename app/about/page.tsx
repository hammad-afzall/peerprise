import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Peerprise is supported by experienced software engineers who build, maintain and improve websites, digital platforms, integrations and custom software solutions.",
};

const howWeWork = [
  "Clear project scope",
  "Structured communication",
  "Secure access management",
  "Documented delivery",
  "Reliable technical support",
  "Long-term maintainability",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        headline="Engineering-led digital support built around reliability."
        subtext="Peerprise brings website care, social presence management, digital operations and custom software development together under one reliable team."
      />

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container max-w-[840px]">
          <h2 className="text-[28px] font-bold text-white mb-4">Why Peerprise Exists</h2>
          <p className="text-[16px] text-gray-400 leading-relaxed">
            Managing websites, social channels, integrations and software through separate providers
            often creates delays and unclear ownership. Peerprise brings these responsibilities
            together through a structured and technically capable team.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-surface)] border-t border-white/5">
        <div className="site-container max-w-[840px]">
          <h2 className="text-[28px] font-bold text-white mb-4">Engineering-Led Delivery</h2>
          <p className="text-[16px] text-gray-400 leading-relaxed">
            Peerprise works with experienced software engineers who understand modern applications,
            websites, APIs, integrations, cloud platforms and production systems.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-bg)] border-t border-white/5">
        <div className="site-container">
          <h2 className="text-[28px] font-bold text-white mb-8">How We Work</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {howWeWork.map((item) => (
              <li key={item} className="glass-card rounded-[12px] p-5">
                <p className="text-white font-medium leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-surface)] border-t border-white/5">
        <div className="site-container max-w-[840px]">
          <h2 className="text-[28px] font-bold text-white mb-4">What Clients Can Expect</h2>
          <p className="text-[16px] text-gray-400 leading-relaxed">
            Clients receive practical guidance, clear ownership and technical delivery focused on
            their actual requirements.
          </p>
        </div>
      </section>
    </>
  );
}
