import Link from "next/link";
import {
  CONTACT_EMAIL,
  footerBrand,
  footerCompanyLinks,
  footerEngineeringLinks,
  footerManagedLinks,
} from "../lib/nav";

const primaryFooterNav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/plans", label: "Plans" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const exploreLinks = [
  ...footerManagedLinks.slice(0, 3),
  ...footerEngineeringLinks.slice(0, 2),
];

/**
 * Studiova footer structure — big headline + contacts | nav | explore | copyright.
 * Peerprise content only (no Privacy/Terms).
 */
export default function Footer() {
  const extraCompany = footerCompanyLinks.filter(
    (l) => !primaryFooterNav.some((p) => p.href === l.href),
  );

  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="bg-[#1f2a2e] py-10 md:py-20 xl:py-40">
        <div className="site-container">
          <div className="flex flex-col gap-10 xl:flex-row xl:gap-0">
            <div className="flex w-full flex-col gap-10 xl:max-w-2xl">
              <p className="m-0 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl xl:max-w-xl">
                Build something dependable together?
              </p>
              <div className="flex flex-col gap-2">
                <a href={`mailto:${CONTACT_EMAIL}`} className="group flex gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/email-arrow.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <span className="text-lg text-white transition-colors group-hover:text-accent">
                    {CONTACT_EMAIL}
                  </span>
                </a>
                <Link href="/contact" className="group flex gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/Location.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="shrink-0"
                  />
                  <span className="text-lg text-white transition-colors group-hover:text-accent">
                    Start a conversation
                  </span>
                </Link>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-3 md:gap-0 xl:grid-cols-4">
              <div>
                <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                  {primaryFooterNav.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg text-white transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <ul className="m-0 flex list-none flex-col gap-1.5 p-0">
                  {exploreLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg text-white transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  {extraCompany.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg text-white transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-1 xl:col-span-2 md:flex md:justify-end">
                <div className="max-w-96">
                  <p className="m-0 text-base leading-relaxed text-white/70">
                    {footerBrand.text}
                  </p>
                  <p className="mt-4 m-0 text-base text-white/70">{footerBrand.copyright}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
