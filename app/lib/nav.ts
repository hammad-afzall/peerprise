import { services } from "./services";

export const serviceLinks = services.map((service) => ({
  href: service.href,
  label: service.label,
  description: service.navDescription,
}));

export const mainNavLinks = [
  { href: "/plans", label: "Plans" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const footerCompanyLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];

export const footerExploreLinks = [
  { href: "/plans", label: "Plans" },
  { href: "/health-check", label: "Digital Presence Health Check" },
];
