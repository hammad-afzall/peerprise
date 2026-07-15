import ServiceCard, { type ServiceCardProps } from "./ServiceCard";

/**
 * Back-compat wrapper for the homepage service grid.
 * Prefer ServiceCard for new pages.
 */
export default function ServiceOverviewCard(props: ServiceCardProps) {
  return <ServiceCard {...props} />;
}
