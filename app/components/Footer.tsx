import Link from "next/link";
import Logo from "./Logo";
import {
  footerBrand,
  footerCompanyLinks,
  footerEngineeringLinks,
  footerManagedLinks,
} from "../lib/nav";

export default function Footer() {
  return (
    <footer
      className="section-dark pt-14 pb-8 sm:pt-20 sm:pb-10 border-t border-dark-border"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="site-container">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-9 sm:gap-12 mb-14 sm:mb-16">
          <div className="col-span-2 md:col-span-4 lg:col-span-4">
            <Link
              href="/"
              className="flex items-center mb-6 group w-fit rounded-sm"
              aria-label="Peerprise home"
            >
              <Logo className="h-[66px] w-auto group-hover:opacity-80 transition-opacity duration-200" />
            </Link>
            <p className="text-[15px] font-semibold text-white mb-3">{footerBrand.name}</p>
            <p className="text-[15px] text-on-dark-muted max-w-[320px] leading-relaxed mb-7">
              {footerBrand.text}
            </p>
            <a
              href={`mailto:${footerBrand.email}`}
              className="inline-flex min-h-11 items-center text-[15px] text-on-dark-muted hover:text-white transition-colors duration-200"
            >
              {footerBrand.email}
            </a>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-[15px] font-medium text-on-dark-subtle mb-7">
              Managed Services
            </h3>
            <ul className="flex flex-col gap-4">
              {footerManagedLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-[15px] text-on-dark-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-[15px] font-medium text-on-dark-subtle mb-7">Engineering</h3>
            <ul className="flex flex-col gap-4">
              {footerEngineeringLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-[15px] text-on-dark-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <h3 className="text-[15px] font-medium text-on-dark-subtle mb-7">Company</h3>
            <ul className="flex flex-col gap-4">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center text-[15px] text-on-dark-muted hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-dark-border flex flex-col gap-3 sm:gap-4 text-center">
          <p className="text-[15px] text-on-dark-subtle leading-relaxed max-w-[640px] mx-auto">
            {footerBrand.closingLine}
          </p>
          <p className="text-[14px] text-on-dark-muted">{footerBrand.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
