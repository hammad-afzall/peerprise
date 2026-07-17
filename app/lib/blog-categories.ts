/** Approved Insights categories — master spec Section 18. */
export const blogCategories = [
  "Website Care",
  "Digital Operations",
  "Software Development",
  "Automation",
  "Security",
  "Engineering Partnerships",
  "Delivery Practices",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export function isBlogCategory(value: string): value is BlogCategory {
  return (blogCategories as readonly string[]).includes(value);
}
