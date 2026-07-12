export const plans = [
  {
    id: "presence-care",
    name: "Presence Care",
    price: "$900",
    period: "/month",
    description: "For businesses that need their website maintained and forms working reliably.",
    features: [
      "Website updates & backups",
      "Uptime & security monitoring",
      "1 small website change/mo",
      "Monthly activity summary",
    ],
    highlight: false,
  },
  {
    id: "managed-presence",
    name: "Managed Presence",
    price: "$1,650",
    period: "/month",
    description: "For businesses and professionals that need a consistent social presence and reliable website care.",
    badge: "Most Popular",
    features: [
      "One primary social platform",
      "Eight posts per month",
      "Website updates & backups",
      "3 small website changes/mo",
    ],
    highlight: true,
  },
  {
    id: "digital-operations",
    name: "Digital Operations Partner",
    price: "From $2,750",
    period: "/month",
    description: "Comprehensive support covering social presence, website care and digital tool configurations.",
    features: [
      "Two social platforms",
      "Twelve posts per month",
      "Unlimited small website changes",
      "Priority technical support",
    ],
    highlight: false,
  },
];

export const comparisonRows = [
  { category: "Social Presence", label: "Monthly content calendar", values: [false, true, true] },
  { category: "Social Presence", label: "Branded post graphics", values: [false, true, true] },
  { category: "Website Care", label: "Uptime & security monitoring", values: [true, true, true] },
  { category: "Website Care", label: "Small website changes", values: ["1/mo", "3/mo", "Unlimited"] },
  { category: "Digital Operations", label: "Priority support", values: [false, false, true] },
];
