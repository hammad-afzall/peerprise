/**
 * Managed plan pricing and comparison data — master spec Section 12.
 * Single source for Plans page, homepage preview, and enquiry CTAs.
 */

export type Plan = {
  id: string;
  name: string;
  /** Display price including “From” where required. */
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  badge?: string;
  ctaLabel: string;
  ctaHref: string;
};

function planEnquiryHref(planName: string) {
  return `/contact?service=${encodeURIComponent(planName)}`;
}

export const plans: Plan[] = [
  {
    id: "presence-care",
    name: "Presence Care",
    price: "From $900",
    period: "per month",
    description:
      "For businesses that need dependable website maintenance, routine updates and a clear technical support route.",
    features: [
      "Website maintenance and backups",
      "Uptime and availability monitoring",
      "Routine security-focused checks",
      "Up to two hours of website-support capacity per month",
      "Form and contact-path checks",
      "Monthly completed-work summary",
      "Routine response within two business days",
    ],
    highlight: false,
    ctaLabel: "Discuss Presence Care",
    ctaHref: planEnquiryHref("Presence Care"),
  },
  {
    id: "managed-presence",
    name: "Managed Presence",
    price: "From $1,650",
    period: "per month",
    description:
      "For businesses that need consistent social publishing alongside reliable website care.",
    badge: "Most selected",
    features: [
      "Everything in Presence Care",
      "One primary social platform",
      "Up to eight approved posts per month",
      "Monthly content calendar",
      "Caption preparation",
      "Branded static post graphics",
      "Scheduling and publishing",
      "Up to four hours of website-support capacity per month",
      "Monthly completed-work summary",
    ],
    highlight: true,
    ctaLabel: "Discuss Managed Presence",
    ctaHref: planEnquiryHref("Managed Presence"),
  },
  {
    id: "digital-operations",
    name: "Digital Operations Partner",
    price: "From $2,750",
    period: "per month",
    description:
      "For growing businesses that need broader ownership across website support, social publishing, connected tools and ongoing technical coordination.",
    features: [
      "Everything in Managed Presence",
      "Up to two social platforms",
      "Up to twelve approved posts per month",
      "Up to eight hours of combined support capacity per month",
      "Form, email-routing and third-party tool support",
      "Contained integrations and workflow automation",
      "Monthly planning call",
      "Priority response for time-sensitive issues",
      "Monthly completed-work and priorities summary",
    ],
    highlight: false,
    ctaLabel: "Discuss Digital Operations",
    ctaHref: planEnquiryHref("Digital Operations Partner"),
  },
];

/** Plan names accepted by the contact form service field. */
export const planEnquiryOptions = plans.map((plan) => plan.name);

export type ComparisonValue = string | boolean;

export type ComparisonRow = {
  label: string;
  values: ComparisonValue[];
};

/**
 * Approved comparison rows — Section 12.
 * Boolean: included / not included. Strings: capacity or limited wording.
 */
export const comparisonRows: ComparisonRow[] = [
  {
    label: "Website maintenance",
    values: [true, true, true],
  },
  {
    label: "Backups and availability monitoring",
    values: [true, true, true],
  },
  {
    label: "Website support capacity",
    values: [
      "Up to 2 hours per month",
      "Up to 4 hours per month",
      "Up to 8 hours combined support per month",
    ],
  },
  {
    label: "Social platforms",
    values: ["Not included", "One primary platform", "Up to two platforms"],
  },
  {
    label: "Approved posts per month",
    values: ["Not included", "Up to eight", "Up to twelve"],
  },
  {
    label: "Content calendar",
    values: [false, true, true],
  },
  {
    label: "Branded static graphics",
    values: [false, true, true],
  },
  {
    label: "Scheduling and publishing",
    values: [false, true, true],
  },
  {
    label: "Form and tool support",
    values: [
      "Form and contact-path checks",
      "Form and contact-path checks",
      "Forms, email routing and third-party tools",
    ],
  },
  {
    label: "Contained integrations",
    values: [false, false, true],
  },
  {
    label: "Workflow automation",
    values: [false, false, true],
  },
  {
    label: "Monthly planning call",
    values: [false, false, true],
  },
  {
    label: "Monthly completed-work summary",
    values: [true, true, true],
  },
  {
    label: "Routine response target",
    values: [
      "Within two business days",
      "Within two business days",
      "Within two business days",
    ],
  },
  {
    label: "Time-sensitive response target",
    values: [
      "According to written scope",
      "According to written scope",
      "Priority assessment for time-sensitive issues",
    ],
  },
];

export const plansPageHero = {
  eyebrow: "Managed Plans",
  headline: "Clear monthly support, with defined capacity and responsibilities.",
  supporting:
    "Choose the level of website, social and digital operations support your business needs. Every plan begins with a written scope so there is no ambiguity about what is included, how requests are handled or when additional work requires approval.",
} as const;

export const plansImportantDetails = {
  eyebrow: "Important details",
  headline: "How monthly plans work.",
  items: [
    {
      title: "Initial review and onboarding",
      description:
        "Before monthly work begins, Peerprise reviews the current setup, confirms access, documents the agreed responsibilities and identifies any stabilisation work. A one-time onboarding or stabilisation fee may apply and is confirmed in advance.",
    },
    {
      title: "Monthly capacity",
      description:
        "Support capacity is reserved for the selected month. Unused time does not automatically roll over unless the written proposal states otherwise.",
    },
    {
      title: "Additional work",
      description:
        "Larger changes, redesigns, migrations, custom functionality, advanced creative production and software development are quoted separately before work begins.",
    },
    {
      title: "Response and delivery",
      description:
        "A response target confirms when Peerprise will acknowledge and assess a request. It is not a guarantee that every request will be completed within the response window. Delivery timing depends on scope, access, approvals and technical risk.",
    },
    {
      title: "Contract terms",
      description:
        "Billing frequency, minimum term, cancellation notice and any service-specific conditions are stated in the written proposal.",
    },
    {
      title: "Business hours",
      description:
        "Standard support is provided during agreed business hours. Emergency, out-of-hours and 24/7 coverage require a separate agreement.",
    },
  ],
} as const;

export const plansNotIncluded = {
  eyebrow: "Scope boundaries",
  headline: "Services outside the standard managed plans.",
  items: [
    "Paid advertising",
    "Traffic or follower growth campaigns",
    "Lead generation",
    "SEO campaigns",
    "Marketing analytics or attribution",
    "Photography and on-location content production",
    "Advanced video production",
    "Full website redesigns",
    "New website builds",
    "Major migrations",
    "Custom software projects",
    "Formal security audits or penetration testing",
    "Legal or regulatory compliance advice",
    "Emergency or 24/7 support without a separate agreement",
  ],
} as const;

export const plansFaqs = [
  {
    id: "plans-customise",
    question: "Can I customise a plan?",
    answer:
      "Yes. The published plans are starting structures. Peerprise can adjust platform coverage, support capacity and responsibilities where the resulting scope remains operationally clear.",
  },
  {
    id: "plans-developers",
    question: "Are software developers included in the monthly packages?",
    answer:
      "Senior engineers provide oversight and handle appropriate technical escalations. Material custom development is scoped separately so routine support capacity is not consumed unpredictably.",
  },
  {
    id: "plans-exceed",
    question: "What happens if we exceed the monthly allowance?",
    answer:
      "Peerprise will explain the remaining capacity and provide an additional estimate or recommend moving to a more suitable plan before extra work begins.",
  },
  {
    id: "plans-pause",
    question: "Can we pause a plan?",
    answer:
      "Pause, cancellation and notice arrangements depend on the written agreement. Reserved team capacity cannot be assumed to remain available during a pause.",
  },
  {
    id: "plans-review-free",
    question: "Is the digital review free?",
    answer:
      "The initial high-level review can be provided without charge for suitable prospective clients. It is not a formal technical, security, legal or marketing audit.",
  },
] as const;
