/**
 * Engineering Partnerships page content — master spec Section 11.
 */

import { ctas } from "./ctas";
import type { FAQ } from "./faqs";
import type { ProcessStep } from "../components/ProcessSteps";
import type { CapabilityItem } from "../components/CapabilityGrid";

export const engineeringPartnershipsHero = {
  eyebrow: "Engineering Partnerships",
  headline: "Reliable engineering capacity for agencies and product teams.",
  supporting:
    "Peerprise helps agencies, software companies and internal product teams deliver more work without lowering engineering standards or committing to permanent hiring before the need is clear.",
  primaryCta: ctas.discussPartnership,
  secondaryCta: {
    label: "View Engineering Experience",
    href: ctas.viewSelectedWork.href,
  },
} as const;

export const engineeringPartnershipsAudience = {
  eyebrow: "Who this is for",
  headline: "Built for teams with real delivery responsibility.",
  items: [
    {
      title: "Digital and creative agencies",
      description:
        "Add dependable software delivery behind design, branding, marketing or strategy engagements.",
    },
    {
      title: "Software and product companies",
      description:
        "Increase capacity for roadmap work, platform improvements or specialist technical requirements.",
    },
    {
      title: "Larger organisations",
      description:
        "Engage a focused team for defined internal systems, integrations, modernisation or delivery support.",
    },
    {
      title: "Consultancies",
      description:
        "Bring engineering execution into client programmes that require more than advisory work.",
    },
  ] satisfies CapabilityItem[],
} as const;

export const engineeringPartnershipsModels = {
  eyebrow: "Partnership models",
  headline: "Choose the level of delivery ownership you need.",
  items: [
    {
      title: "White-label project delivery",
      description:
        "Peerprise delivers technical work behind your agency relationship, following agreed communication, confidentiality and client-facing rules.",
    },
    {
      title: "Dedicated engineering capacity",
      description:
        "Reserve a defined monthly allocation of engineering time for changing priorities, product work or recurring client demand.",
    },
    {
      title: "Defined project or workstream",
      description:
        "Assign Peerprise a clear scope, module, integration or delivery outcome with agreed milestones and acceptance criteria.",
    },
    {
      title: "Specialist technical support",
      description:
        "Bring in experienced engineers for backend systems, integrations, cloud work, payments, automation, AI features or complex production issues.",
    },
  ] satisfies CapabilityItem[],
} as const;

/** Grouped for editorial layout — items are exact Section 11 capabilities. */
export const engineeringPartnershipsCapabilityGroups = [
  [
    "Web and mobile applications",
    "Backend systems and APIs",
    "Real-time systems",
    "Cloud services and deployment",
  ],
  [
    "Payments and subscriptions",
    "Authentication and permissions",
    "Third-party integrations",
    "Workflow automation",
  ],
  [
    "AI-enabled product features",
    "Platform modernisation",
    "Production support",
    "Technical discovery and architecture",
  ],
] as const;

export const engineeringPartnershipsCapabilities = {
  eyebrow: "Capabilities",
  headline: "Full-stack delivery with strong backend and integration experience.",
} as const;

export const engineeringPartnershipsProcess = {
  eyebrow: "How partnership delivery works",
  headline: "Designed to fit an established delivery environment.",
  steps: [
    {
      number: "01",
      title: "Fit and scope",
      description:
        "We clarify the required skills, delivery ownership, team structure, communication model and expected duration.",
    },
    {
      number: "02",
      title: "Onboarding",
      description:
        "Access, repositories, environments, documentation and working agreements are established before delivery begins.",
    },
    {
      number: "03",
      title: "Delivery",
      description:
        "Work is managed through agreed tickets, milestones, pull requests, reviews, demonstrations and status updates.",
    },
    {
      number: "04",
      title: "Review",
      description:
        "Capacity, priorities, risks and delivery quality are reviewed regularly with the partner.",
    },
    {
      number: "05",
      title: "Continuity",
      description:
        "Knowledge, decisions and handover information are documented to reduce dependency on individual contributors.",
    },
  ] satisfies ProcessStep[],
} as const;

export const engineeringPartnershipsPrinciples = {
  eyebrow: "Partnership principles",
  headline: "Professional delivery without hidden competition.",
  items: [
    "Respect for the partner’s client relationship",
    "Confidentiality and white-label rules defined in writing",
    "No direct solicitation of the partner’s clients",
    "Clear ownership of communication and approvals",
    "Documented intellectual-property terms",
    "Transparent capacity and availability",
    "Honest escalation of risks and delays",
    "Senior technical oversight",
  ],
} as const;

export const engineeringPartnershipsFaqs: FAQ[] = [
  {
    id: "ep-whitelabel",
    question: "Can Peerprise work completely white-label?",
    answer:
      "Yes. Client visibility, communication channels, branding and meeting participation are agreed before the engagement begins.",
  },
  {
    id: "ep-contact",
    question: "Will you contact our clients directly?",
    answer:
      "Only where the partnership model requires it and the agency has approved the communication structure. Peerprise does not bypass the partner relationship.",
  },
  {
    id: "ep-one-engineer",
    question: "Can we start with one engineer?",
    answer:
      "Yes. The starting structure depends on the skills, delivery responsibilities and amount of coordination required. Some work is suitable for one engineer; other projects require a small cross-functional team.",
  },
  {
    id: "ep-pm-qa",
    question: "Do you provide project management and QA?",
    answer:
      "These can be included where required. Team composition and delivery ownership are agreed before pricing.",
  },
  {
    id: "ep-nda",
    question: "Can you sign an NDA and use our systems?",
    answer:
      "Yes, subject to review of the agreement and the security and access requirements involved.",
  },
  {
    id: "ep-pricing",
    question: "How is pricing handled?",
    answer:
      "Pricing depends on team composition, seniority, duration, time-zone overlap, delivery ownership and commercial risk. Peerprise provides a written proposal after the requirement is understood.",
  },
];

export const engineeringPartnershipsFinalCta = {
  headline: "Add engineering capacity without adding another delivery problem.",
  copy: "Tell us what your team needs to deliver, where capacity is constrained and how you prefer partners to work.",
  primaryCta: ctas.discussPartnership,
  secondaryCta: ctas.startConversation,
} as const;
