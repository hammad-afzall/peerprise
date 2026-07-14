import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import CTABanner from "../components/CTABanner";
import FAQ from "../components/FAQ";
import { faqs } from "../lib/faqs";
import { customSoftwareContactHref } from "../lib/ctas";

export const metadata: Metadata = {
  title: "Custom Software Solutions",
  description:
    "Peerprise designs and develops custom digital solutions for organisations that have outgrown generic tools or need technology built around their own processes.",
  alternates: {
    canonical: "/custom-software-solutions",
  },
};

const whatWeBuild = [
  "Business portals and internal tools",
  "Customer-facing web applications",
  "Workflow and process automation",
  "API and third-party integrations",
  "Subscription and payment systems",
  "Data dashboards and reporting tools",
  "MVPs and product prototypes",
  "Platform modernisation",
];

const whenItMakesSense = [
  "Existing tools no longer fit the workflow",
  "Repetitive manual work is slowing the team down",
  "Multiple systems need to communicate",
  "A new product or customer experience needs to be launched",
  "Legacy software needs improvement or replacement",
  "Off-the-shelf software creates too many limitations",
];

const engineeringExperience = [
  "Experienced software engineering team",
  "International project experience",
  "Modern web and backend development",
  "APIs, integrations and automation",
  "Secure and structured delivery",
  "Production-focused engineering",
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "We clarify goals, users, constraints and the systems the solution needs to work with.",
  },
  {
    step: "02",
    title: "Solution Design",
    desc: "We define scope, architecture, milestones and a practical technical approach before build work begins.",
  },
  {
    step: "03",
    title: "Development",
    desc: "We design and develop the solution in clear stages, with regular progress reviews along the way.",
  },
  {
    step: "04",
    title: "Testing and Review",
    desc: "We verify functionality, edge cases and readiness for real users before launch.",
  },
  {
    step: "05",
    title: "Launch",
    desc: "We help you go live, handle deployment details and ensure a stable handoff.",
  },
  {
    step: "06",
    title: "Ongoing Support",
    desc: "We provide maintenance, improvements and technical support where needed after launch.",
  },
];

const technologyCapabilities = [
  {
    title: "Modern web applications",
    desc: "Responsive interfaces and product experiences built for clarity, reliability and long-term maintainability.",
  },
  {
    title: "Backend services and APIs",
    desc: "Server-side logic, data contracts and integrations that keep systems talking cleanly.",
  },
  {
    title: "Cloud infrastructure",
    desc: "Deployment, hosting and operational setup suited to the scale and risk of the project.",
  },
  {
    title: "Databases and data workflows",
    desc: "Structured storage, reporting pipelines and practical data handling for day-to-day operations.",
  },
  {
    title: "Payment and subscription integrations",
    desc: "Billing, plans and payment flows wired into the product experience carefully and securely.",
  },
  {
    title: "Authentication and access control",
    desc: "Sign-in, roles and permissions designed around who should see and change what.",
  },
  {
    title: "Automation and third-party platforms",
    desc: "Connections across CRMs, email tools, forms and other platforms your team already uses.",
  },
];

const engagementOptions = [
  {
    title: "Fixed-scope project",
    desc: "A clearly defined build with agreed deliverables, timeline and milestones.",
  },
  {
    title: "MVP or prototype",
    desc: "A focused first version that validates a product idea or core workflow.",
  },
  {
    title: "Dedicated development support",
    desc: "Ongoing engineering capacity for product work, enhancements and technical delivery.",
  },
  {
    title: "Technical discovery and planning",
    desc: "Requirements review, solution design and a practical roadmap before development starts.",
  },
  {
    title: "Ongoing maintenance and enhancement",
    desc: "Post-launch support, improvements and reliability work as the system evolves.",
  },
];

export default function CustomSoftwareSolutionsPage() {
  const pageFaqs = faqs.filter((f) =>
    ["services", "custom-software", "focus", "contract"].includes(f.id),
  );

  return (
    <>
      <PageHero
        eyebrow="Custom Software Development"
        headline="Software built around the way your business actually works."
        subtext="Peerprise designs and develops custom digital solutions for organisations that have outgrown generic tools or need technology built around their own processes."
        primaryCta={{ label: "Discuss Your Project", href: customSoftwareContactHref }}
        secondaryCta={{ label: "View Our Experience", href: "/about" }}
      />

      <section className="py-12 sm:py-16 bg-[var(--color-dark-surface)]">
        <div className="site-container max-w-[840px]">
          <div className="glass-card rounded-[14px] p-6 sm:p-8">
            <p className="text-[11px] sm:text-[12px] font-semibold tracking-[0.1em] uppercase text-gray-400 mb-3">
              Positioning
            </p>
            <p className="text-gray-300 leading-relaxed text-[15px] sm:text-[16px]">
              Peerprise works with experienced software engineers who develop custom web
              applications, backend systems, APIs, integrations, automation workflows and
              production-ready digital platforms. Our engineering experience includes work on
              complex digital products and projects connected to globally recognised and Fortune
              500 brands.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container">
          <SectionHeading eyebrow="What We Build" headline="Practical systems for real business workflows." />
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whatWeBuild.map((item) => (
              <li key={item} className="flex items-center gap-3 glass-card p-4 rounded-[12px]">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[#4E6EFF]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1.5 5.5l2.5 2.5 4.5-4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-white font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-surface)]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Fit"
            headline="When custom software makes sense."
          />
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whenItMakesSense.map((item) => (
              <li key={item} className="glass-card rounded-[12px] p-5 sm:p-6">
                <p className="text-white font-medium leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Engineering Experience"
            headline="Experienced software engineers behind every technical solution."
          />
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {engineeringExperience.map((item) => (
              <li key={item} className="glass-card rounded-[12px] p-5">
                <p className="text-gray-200 leading-relaxed text-[15px]">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-surface)]">
        <div className="site-container">
          <SectionHeading eyebrow="Development Process" headline="From discovery to ongoing support." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="glass-card rounded-[14px] p-6 hover:bg-white/10 transition-colors duration-200"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] font-bold text-[13px] tracking-widest uppercase block mb-2">
                  {step.step}
                </span>
                <h3 className="text-white font-bold text-[18px] mb-2">{step.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-bg)]">
        <div className="site-container">
          <SectionHeading
            eyebrow="Technology Capabilities"
            headline="The stack behind reliable digital systems."
            subheadline="We keep the language practical. What matters is choosing the right tools for the problem, then building something your team can rely on."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            {technologyCapabilities.map((item) => (
              <div key={item.title} className="glass-card rounded-[14px] p-6">
                <h3 className="text-white font-bold text-[17px] mb-2">{item.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-dark-surface)]">
        <div className="site-container">
          <SectionHeading eyebrow="Engagement Options" headline="Flexible ways to start." />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {engagementOptions.map((option) => (
              <div key={option.title} className="glass-card rounded-[14px] p-6">
                <h3 className="text-white font-bold text-[17px] mb-2">{option.title}</h3>
                <p className="text-gray-400 text-[15px] leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        dark
        headline="Have a workflow, platform or product that needs a custom solution?"
        subtext="Tell us what you are trying to build or improve. We will review the requirements and recommend a practical technical approach."
        primaryCta={{ label: "Discuss Your Project", href: customSoftwareContactHref }}
      />

      <FAQ items={pageFaqs} />
    </>
  );
}
