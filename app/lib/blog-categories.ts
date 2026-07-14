export const blogCategories = [
  "Software Development",
  "Website Care",
  "Digital Operations",
  "Automation",
  "Security",
  "Social Presence",
] as const;

export type BlogCategory = (typeof blogCategories)[number];
