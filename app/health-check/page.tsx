import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import HealthCheckForm from "./HealthCheckForm";

export const metadata: Metadata = {
  title: "Free Digital Presence Health Check",
  description: "Receive a practical review of your website, social accounts and digital setup, with clear technical and operational recommendations.",
};

const checkItems = [
  "Website availability and uptime",
  "Mobile usability and layout",
  "Broken forms and links",
  "Outdated or missing content",
  "Social profile completeness",
  "Posting consistency",
  "Analytics setup status",
  "Third-party tool and integration issues",
  "Basic maintenance and security concerns",
];

export default function HealthCheckPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Health Check"
        headline="Find out what needs attention across your website and social presence."
        subtext="Receive a practical review of your website, social accounts and digital setup, with clear technical and operational recommendations."
      />

      <section className="section-padding bg-[var(--color-dark-surface)]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-[28px] font-bold text-white mb-6">What we review</h2>
              <ul className="space-y-4">
                {checkItems.map(item => (
                  <li key={item} className="flex items-center gap-3 glass-card p-4 rounded-[12px]">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#4E6EFF] shadow-sm">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5.5l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <span className="text-white font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 glass-card rounded-[12px] p-6 text-[15px]">
                <h3 className="font-bold text-white mb-2">What you receive</h3>
                <p className="text-gray-300 leading-relaxed">
                  A practical review focused on website care, social presence readiness and digital operations. Our focus is reliable technical and operational recommendations that help you prioritise next steps.
                </p>
              </div>
            </div>
            
            <div className="glass-card gradient-border rounded-[24px] shadow-sm p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-[24px] font-bold text-white mb-6">Request Your Free Health Check</h2>
                <HealthCheckForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
