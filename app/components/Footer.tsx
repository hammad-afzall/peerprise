import Link from "next/link";
import Logo from "./Logo";
import { serviceLinks, footerCompanyLinks, footerExploreLinks } from "../lib/nav";

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] pt-14 pb-8 sm:pt-20 sm:pb-10" aria-labelledby="footer-heading">
      <div className="site-container">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-9 sm:gap-12 mb-14 sm:mb-16">
          <div className="col-span-2 md:col-span-4 lg:col-span-3">
            <Link href="/" className="flex items-center mb-6 group w-fit">
              <Logo className="h-[66px] w-auto group-hover:opacity-80 transition-opacity duration-200" />
            </Link>
            <p className="text-[15px] text-gray-400 max-w-[300px] leading-relaxed mb-7">
              Peerprise provides social presence management, website care, digital operations support and custom software solutions through one reliable technical team.
            </p>
            <a
              href="mailto:hello@peerprise.com"
              className="block text-[15px] text-gray-400 hover:text-white transition-colors duration-200 mb-7"
            >
              hello@peerprise.com
            </a>
            <div className="flex items-center gap-5 text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200" aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.665 3.717l-8.735 9.963 6.826 9.035h-5.348l-4.186-5.466-4.819 5.466h-1.464l9.243-10.542-6.529-8.625h5.485l3.784 5.006 4.397-5.006h1.346zm-6.173 17.15h1.722l-11.75-15.54h-1.83l11.858 15.54z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-[15px] font-medium text-gray-300 mb-7">Services</h3>
            <ul className="flex flex-col gap-5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-[15px] font-medium text-gray-300 mb-7">Company</h3>
            <ul className="flex flex-col gap-5">
              {footerCompanyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-[15px] font-medium text-gray-300 mb-7">Explore</h3>
            <ul className="flex flex-col gap-5">
              {footerExploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 md:col-span-4 lg:col-span-3 flex flex-col items-start mt-2 md:mt-0">
            <h3 className="text-[15px] font-bold text-white mb-5">Start Improving Today</h3>
            <p className="text-[15px] text-gray-400 mb-7 leading-relaxed">
              Get a practical review of your website and social presence with actionable recommendations.
            </p>
            <Link
              href="/health-check"
              className="h-11 px-6 rounded-full bg-white/10 text-white border border-white/20 text-[15px] font-bold hover:bg-white/20 transition-colors duration-200 flex items-center justify-center"
            >
              Request a Health Check
            </Link>
          </div>
        </div>
        <div className="pt-6 border-t border-white/5">
          <p className="text-[14px] text-gray-400 text-center">© 2026 Peerprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
