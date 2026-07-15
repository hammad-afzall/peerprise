/**
 * Managed plan pricing and comparison data — master spec Section 12.
 * Keep prices and features in one place for PricingCard / PlanComparison.
 */

export type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight: boolean;
  badge?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export const plans: Plan[] = [
  {
    id: "presence-care",
    name: "Presence Care",
    price: "$900",
    period: "/month",
    description:
      "For companies that need their website maintained, monitored and updated reliably.",
    features: [
      "Website updates and backups",
      "Uptime and security monitoring",
      "Up to two website-support hours per month",
      "Monthly activity summary",
      "Response within two business days",
    ],
    highlight: false,
  },
  {
    id: "managed-presence",
    name: "Managed Presence",
    price: "$1,650",
    period: "/month",
    description:
      "For companies, brands and professionals that need a consistent social presence with reliable website care.",
    // Prompt 11 will align badge copy to approved “Most selected”.
    badge: "Most Popular",
    features: [
      "One primary social platform",
      "Eight posts per month",
      "Content calendar and branded graphics",
      "Website updates and backups",
      "Up to four website-support hours per month",
      "Monthly activity summary",
    ],
    highlight: true,
  },
  {
    id: "digital-operations",
    name: "Digital Operations Partner",
    price: "From $2,750",
    period: "/month",
    description:
      "Ongoing support covering social presence, website care, forms, integrations and digital operations.",
    features: [
      "Two social platforms",
      "Twelve posts per month",
      "Up to eight website-support hours per month",
      "Forms, integrations and workflow automation",
      "Monthly planning call",
      "Response within one business day for time-sensitive issues",
    ],
    highlight: false,
  },
];

export type ComparisonValue = string | boolean;

export type ComparisonRow = {
  category: string;
  label: string;
  values: ComparisonValue[];
};

export const comparisonRows: ComparisonRow[] = [
  {
    category: "Social Presence",
    label: "Social platforms",
    values: ["—", "1", "2"],
  },
  {
    category: "Social Presence",
    label: "Posts per month",
    values: ["—", "8", "12"],
  },
  {
    category: "Social Presence",
    label: "Content calendar",
    values: [false, true, true],
  },
  {
    category: "Social Presence",
    label: "Branded graphics",
    values: [false, true, true],
  },
  {
    category: "Website Care",
    label: "Website-support allowance",
    values: ["Up to 2 hrs/mo", "Up to 4 hrs/mo", "Up to 8 hrs/mo"],
  },
  {
    category: "Website Care",
    label: "Uptime monitoring",
    values: [true, true, true],
  },
  {
    category: "Digital Operations",
    label: "Forms and integrations",
    values: [false, false, true],
  },
  {
    category: "Digital Operations",
    label: "Workflow automation",
    values: [false, false, true],
  },
  {
    category: "Reporting",
    label: "Reporting",
    values: ["Monthly summary", "Monthly summary", "Monthly summary"],
  },
  {
    category: "Support",
    label: "Monthly planning call",
    values: [false, false, true],
  },
  {
    category: "Support",
    label: "Support response time",
    values: [
      "Within 2 business days",
      "Within 2 business days",
      "Within 1 business day",
    ],
  },
];
