/**
 * Global navigation and footer data — master spec Sections 3 & 4.
 *
 * Pending routes (linked intentionally; pages land in later stages):
 * /services, /engineering-partnerships, /work, /privacy, /terms
 */

export type NavLink = {
  href: string;
  label: string;
  description?: string;
};

export const CONTACT_EMAIL = "hello@peerprise.com";

export const headerCta = {
  label: "Start a Conversation",
  href: "/contact",
} as const;

/** Services dropdown + mobile accordion (overview + five service lines). */
export const serviceNavLinks: NavLink[] = [
  {
    href: "/services",
    label: "Services Overview",
    description: "Managed support and engineering delivery",
  },
  {
    href: "/website-care",
    label: "Website Care and Support",
    description: "Maintenance, updates and technical support",
  },
  {
    href: "/social-presence-management",
    label: "Social Presence Support",
    description: "Planning, content and publishing",
  },
  {
    href: "/digital-operations",
    label: "Digital Operations",
    description: "Forms, tools and integrations",
  },
  {
    href: "/custom-software-solutions",
    label: "Custom Software",
    description: "Applications, portals and automation",
  },
  {
    href: "/engineering-partnerships",
    label: "Engineering Partnerships",
    description: "Dedicated or white-label delivery",
  },
];

/** Top-level desktop/mobile links after Services. */
export const mainNavLinks: NavLink[] = [
  { href: "/plans", label: "Plans" },
  { href: "/work", label: "Work" },
  { href: "/how-it-works", label: "How We Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const footerBrand = {
  name: "Peerprise",
  text: "Engineering-led support for websites, social presence, digital operations and custom software.",
  email: CONTACT_EMAIL,
  closingLine: "One reliable team for the digital work your business depends on.",
  copyright: "© 2026 Peerprise. All rights reserved.",
} as const;

export const footerManagedLinks: NavLink[] = [
  { href: "/website-care", label: "Website Care and Support" },
  { href: "/social-presence-management", label: "Social Presence Support" },
  { href: "/digital-operations", label: "Digital Operations" },
  { href: "/plans", label: "Plans" },
];

export const footerEngineeringLinks: NavLink[] = [
  { href: "/custom-software-solutions", label: "Custom Software" },
  { href: "/engineering-partnerships", label: "Engineering Partnerships" },
  { href: "/work", label: "Selected Work" },
  { href: "/how-it-works", label: "How We Work" },
];

export const footerCompanyLinks: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

/** Routes referenced in nav/footer that do not yet have pages. */
export const pendingNavRoutes = [
  "/services",
  "/engineering-partnerships",
  "/work",
  "/privacy",
  "/terms",
] as const;

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function isServicesSectionActive(pathname: string): boolean {
  return serviceNavLinks.some((link) => isActivePath(pathname, link.href));
}
