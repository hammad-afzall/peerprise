/**
 * Digital Operations page content — master spec Section 9.
 */

import { ctas } from "./ctas";
import type { FAQ } from "./faqs";
import type { ProcessStep } from "../components/ProcessSteps";
import type { CapabilityItem } from "../components/CapabilityGrid";

export const digitalOperationsHero = {
  eyebrow: "Digital Operations",
  headline: "Keep the tools behind your business connected, documented and under control.",
  supporting:
    "Peerprise supports the practical technical work between your website, inboxes, forms, accounts and third-party platforms so everyday digital operations remain reliable.",
  primaryCta: ctas.requestDigitalReview,
  secondaryCta: ctas.viewPlans,
} as const;

export const digitalOperationsSupport = {
  eyebrow: "What we support",
  headline: "Technical coordination for the systems around your digital presence.",
  items: [
    "Contact forms and enquiry routing",
    "Transactional and operational email setup",
    "CRM connections",
    "Third-party platform configuration",
    "API and webhook connections",
    "Workflow automation",
    "Account setup and access control",
    "Domain, DNS, hosting and email coordination",
    "Tool migrations and configuration changes",
    "Troubleshooting across connected systems",
    "Documentation and handover records",
    "Vendor and provider coordination",
  ],
} as const;

export const digitalOperationsSituations = {
  eyebrow: "Common situations",
  headline: "Useful when no single provider owns the complete workflow.",
  items: [
    {
      title: "Enquiries are not reaching the right team",
      description:
        "We review forms, routing, inboxes and connected systems to identify where the process is failing.",
    },
    {
      title: "Business tools are disconnected",
      description:
        "We assess whether systems can be connected through native integrations, automation platforms or custom API work.",
    },
    {
      title: "Access is spread across former staff and suppliers",
      description:
        "We help document ownership, review permissions and establish a controlled access process.",
    },
    {
      title: "Routine work still depends on manual copying",
      description:
        "We identify practical opportunities to automate repetitive steps without adding unnecessary complexity.",
    },
  ] satisfies CapabilityItem[],
} as const;

export const digitalOperationsBoundaries = {
  eyebrow: "Boundaries",
  headline: "Operational support with a clear route to engineering.",
  copy: "Configuration, troubleshooting and contained automation can be included in a monthly engagement. New platforms, complex integrations, large migrations and custom software are scoped separately through the engineering team.",
  exclusion:
    "Peerprise does not provide marketing analytics, advertising attribution, SEO campaigns or traffic-growth services.",
  engineeringCta: ctas.discussSoftware,
} as const;

export const digitalOperationsProcess = {
  eyebrow: "How it works",
  headline: "Understand, stabilise, document and improve.",
  steps: [
    {
      number: "01",
      title: "Review",
      description:
        "We map the tools, owners, access and connections involved in the current workflow.",
    },
    {
      number: "02",
      title: "Stabilise",
      description:
        "Immediate configuration problems and obvious operational risks are addressed in an agreed order.",
    },
    {
      number: "03",
      title: "Document",
      description:
        "Important accounts, settings, connections and responsibilities are recorded.",
    },
    {
      number: "04",
      title: "Improve",
      description:
        "Contained integrations and automation opportunities are proposed where they produce a clear operational benefit.",
    },
  ] satisfies ProcessStep[],
} as const;

export const digitalOperationsFaqs: FAQ[] = [
  {
    id: "do-connect",
    question: "Can you connect our existing tools?",
    answer:
      "Often, yes. Peerprise first reviews the available APIs, native integrations, access restrictions and data flow before recommending an approach.",
  },
  {
    id: "do-automation",
    question: "Do you work with automation platforms?",
    answer:
      "Yes. Where appropriate, Peerprise can use established automation platforms or build a custom integration when standard connectors are insufficient.",
  },
  {
    id: "do-ownership",
    question: "Can you take ownership of our domains and accounts?",
    answer:
      "The client should normally remain the legal owner of core business accounts. Peerprise can help organise access, document ownership and manage agreed configuration work without taking ownership away from the client.",
  },
  {
    id: "do-security",
    question: "Do you provide cybersecurity services?",
    answer:
      "Peerprise follows careful access and delivery practices, but monthly digital operations support is not a penetration test, formal security audit or managed security service.",
  },
  {
    id: "do-software",
    question: "Can digital operations lead to a software project?",
    answer:
      "Yes. If an operational problem cannot be solved reliably through configuration or a contained integration, Peerprise can scope a custom software solution.",
  },
];

export const digitalOperationsFinalCta = {
  headline: "Bring disconnected digital work into one managed workflow.",
  primaryCta: ctas.requestDigitalReview,
  secondaryCta: ctas.viewPlans,
} as const;

/** Related routes — catalogue labels only. */
export const digitalOperationsRelatedIds = [
  "website-care",
  "social-presence",
  "custom-software",
] as const;
