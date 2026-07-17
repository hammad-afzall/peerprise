import { ctas } from "./ctas";

/**
 * Homepage audience routes — master spec Section 5.
 * Content is data-only for AudienceCard.
 */

export type AudienceItem = {
  id: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
};

export const audienceItems: AudienceItem[] = [
  {
    id: "small-businesses",
    title: "Small businesses and professionals",
    description:
      "A reliable team to maintain your website, coordinate your social presence and handle the technical work that would otherwise be spread across several providers.",
    cta: ctas.viewManagedPlans,
  },
  {
    id: "growing-companies",
    title: "Growing companies",
    description:
      "Practical support for digital operations, integrations, automation and custom systems as your processes become more complex.",
    cta: ctas.exploreCustomSolutions,
  },
  {
    id: "agencies",
    title: "Agencies and product teams",
    description:
      "Experienced engineering capacity for client work, product delivery, specialist requirements and periods of high workload.",
    cta: ctas.discussPartnership,
  },
];
