import type { Metadata } from "next";
import PageHero from "../components/PageHero";

export const metadata: Metadata = {
  title: "About",
  description: "Technical experience behind reliable digital support.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero headline="Technical experience behind reliable digital support." />

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              <h2 className="text-[28px] font-bold text-white">Our Story</h2>
              <p className="text-[16px] text-gray-400 leading-relaxed">
                Peerprise was founded by a software engineer with more than nine years of experience building, maintaining and supporting digital products, websites and platforms for international clients.
              </p>
              <p className="text-[16px] text-gray-400 leading-relaxed">
                The idea behind Peerprise is straightforward: too many companies and professionals end up managing multiple disconnected providers for their social presence, website and technical needs. This creates delays, inconsistent quality and no single point of accountability.
              </p>
              <p className="text-[16px] text-gray-400 leading-relaxed">
                Peerprise brings those responsibilities together under one structured, technical team.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-[12px] hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">Technical Foundations</h3>
                <p className="text-[14px] text-gray-400">We approach digital presence with engineering discipline.</p>
              </div>
              <div className="glass-card p-6 rounded-[12px] hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">Single Accountability</h3>
                <p className="text-[14px] text-gray-400">One reliable team managing your interconnected tools.</p>
              </div>
              <div className="glass-card p-6 rounded-[12px] hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">No False Promises</h3>
                <p className="text-[14px] text-gray-400">We focus on consistent operations, not vanity metrics.</p>
              </div>
              <div className="glass-card p-6 rounded-[12px] hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">Secure Management</h3>
                <p className="text-[14px] text-gray-400">Strict access controls and secure credential handling.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
