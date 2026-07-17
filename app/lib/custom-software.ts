/**
 * Custom Software page content — master spec Section 10.
 */

import { ctas } from "./ctas";
import type { FAQ } from "./faqs";
import type { ProcessStep } from "../components/ProcessSteps";
import type { CapabilityItem } from "../components/CapabilityGrid";

export const customSoftwareHero = {
  eyebrow: "Custom Software",
  headline: "Software built around the way your business actually works.",
  supporting:
    "Peerprise designs and develops practical web applications, internal tools, integrations and automation for organisations that have outgrown generic products or need technology built around a specific process.",
  primaryCta: ctas.discussSoftware,
  secondaryCta: ctas.viewSelectedWork,
} as const;

/** Grouped for a scannable editorial layout — items are exact Section 10 capabilities. */
export const customSoftwareBuildGroups = [
  [
    "Customer and partner portals",
    "Internal operations tools",
    "Web applications and SaaS products",
    "MVPs and product prototypes",
  ],
  [
    "Backend services and APIs",
    "Workflow and process automation",
    "Third-party integrations",
    "Data-processing and reporting tools",
  ],
  [
    "Subscription and payment systems",
    "Authentication, roles and permissions",
    "Mobile applications where appropriate",
    "Legacy platform improvements and modernisation",
  ],
] as const;

export const customSoftwareBuild = {
  eyebrow: "What we build",
  headline: "Practical systems for real business workflows.",
} as const;

export const customSoftwareFit = {
  eyebrow: "When custom software makes sense",
  headline: "Build only when the requirement justifies it.",
  intro: "Custom software may be appropriate when:",
  items: [
    "Existing products do not fit the workflow",
    "Repetitive manual work creates cost or operational risk",
    "Multiple systems need to share information reliably",
    "A new digital product or customer experience is required",
    "Legacy software is difficult to maintain or extend",
    "Important business rules cannot be handled safely through spreadsheets or generic tools",
    "The business needs ownership and control of a core system",
  ],
  credibility:
    "Peerprise will also say when an established product or simpler integration is the more sensible option.",
} as const;

export const customSoftwareCapabilities = {
  eyebrow: "Engineering capabilities",
  headline: "Experienced delivery across modern product and platform work.",
  items: [
    {
      title: "Web applications",
      description:
        "Responsive interfaces and product experiences designed for clarity, reliability and maintainability.",
    },
    {
      title: "Backend systems and APIs",
      description:
        "Server-side services, business logic, data contracts, integrations and real-time communication.",
    },
    {
      title: "Cloud infrastructure",
      description:
        "Deployment and operational foundations suited to the scale, availability and risk profile of the system.",
    },
    {
      title: "Data and databases",
      description:
        "Relational and non-relational storage, data workflows and practical reporting systems.",
    },
    {
      title: "Payments and subscriptions",
      description:
        "Billing, plans, checkout flows, webhooks and account-state management.",
    },
    {
      title: "Authentication and access",
      description:
        "Sign-in, roles, permissions and secure account flows built around the actual user model.",
    },
    {
      title: "Automation and AI integrations",
      description:
        "Workflow automation and carefully scoped AI-enabled features where they produce a useful business outcome.",
    },
    {
      title: "Production support",
      description:
        "Investigation, maintenance, performance improvements and controlled release work for existing systems.",
    },
  ] satisfies CapabilityItem[],
} as const;

export const customSoftwareProcess = {
  eyebrow: "Delivery process",
  headline: "Structured delivery from discovery to production support.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      description:
        "Clarify the problem, users, constraints, integrations, success criteria and existing systems.",
    },
    {
      number: "02",
      title: "Solution design",
      description:
        "Define the proposed scope, architecture, milestones, risks and technical approach.",
    },
    {
      number: "03",
      title: "Delivery planning",
      description:
        "Break the work into clear stages with responsibilities, review points and acceptance criteria.",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Build in controlled increments with regular demonstrations and transparent progress updates.",
    },
    {
      number: "05",
      title: "Testing and launch",
      description:
        "Verify critical workflows, edge cases, deployment readiness and operational handover.",
    },
    {
      number: "06",
      title: "Support and improvement",
      description:
        "Provide maintenance, enhancements and production support under an agreed post-launch model.",
    },
  ] satisfies ProcessStep[],
} as const;

export const customSoftwareEngagement = {
  eyebrow: "Engagement options",
  headline: "Flexible commercial models without vague delivery ownership.",
  items: [
    {
      title: "Discovery and technical planning",
      description:
        "A focused engagement to clarify requirements, risks, architecture and a practical delivery roadmap.",
    },
    {
      title: "Fixed-scope project",
      description:
        "A defined build with agreed outputs, assumptions, milestones and change control.",
    },
    {
      title: "Dedicated engineering capacity",
      description:
        "A reserved monthly allocation for continuing product development, enhancements or platform work.",
    },
    {
      title: "Ongoing maintenance and improvement",
      description:
        "Post-launch support for a system that requires regular technical ownership.",
    },
  ] satisfies CapabilityItem[],
} as const;

export const customSoftwareEstimate = {
  eyebrow: "Estimation",
  headline: "Useful estimates begin with useful context.",
  intro: "To assess a software project, Peerprise normally needs:",
  items: [
    "The business problem and desired outcome",
    "The intended users",
    "Existing systems and technical constraints",
    "Required integrations",
    "Important security or compliance considerations",
    "Target timeline",
    "Available documentation or designs",
    "Expected delivery responsibilities",
  ],
  cta: ctas.discussSoftware,
} as const;

export const customSoftwareFaqs: FAQ[] = [
  {
    id: "cs-tech",
    question: "What technologies do you use?",
    answer:
      "Peerprise has experience across JavaScript, TypeScript, Go and Python, with modern frontend, backend, mobile, cloud and database technologies. The stack is selected according to the requirement rather than forcing every project into one framework.",
  },
  {
    id: "cs-takeover",
    question: "Can you take over an existing application?",
    answer:
      "Yes. Peerprise can review an existing codebase, architecture and deployment setup before recommending maintenance, stabilisation, modernisation or further development.",
  },
  {
    id: "cs-mvp",
    question: "Do you build MVPs?",
    answer:
      "Yes. MVP work is scoped around the smallest version that can test a meaningful product or workflow assumption, not simply the cheapest possible build.",
  },
  {
    id: "cs-internal",
    question: "Can you work with our internal developers?",
    answer:
      "Yes. Peerprise can own a defined workstream, provide specialist support or operate as additional capacity within an existing delivery process.",
  },
  {
    id: "cs-ip",
    question: "Who owns the code and intellectual property?",
    answer:
      "Ownership, licences, third-party components and transfer terms are defined in the written agreement. Client-funded custom work is normally transferred according to the agreed commercial terms once relevant obligations have been met.",
  },
];

export const customSoftwareFinalCta = {
  headline: "Have a product, workflow or platform that needs a practical technical solution?",
  copy: "Tell us what you are trying to build or improve. Peerprise will review the requirement and recommend a responsible next step.",
  primaryCta: ctas.discussSoftware,
  secondaryCta: ctas.viewSelectedWork,
} as const;
