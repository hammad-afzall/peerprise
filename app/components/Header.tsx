"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { serviceLinks, mainNavLinks } from "../lib/nav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <>
      <header className="fixed top-0 inset-x-0 h-[72px] md:h-[88px] bg-[#0B1220]/90 backdrop-blur-md border-b border-white/10 z-30">
        <div className="site-container h-full flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center group min-w-0">
            <Logo className="h-16 w-auto shrink-0 group-hover:opacity-80 transition-opacity" />
          </Link>

          <nav className="hidden md:flex items-center gap-1 bg-[#131A2D]/50 border border-white/10 rounded-full px-2 py-1.5" aria-label="Main Navigation">
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className={`flex items-center gap-1.5 text-[15px] font-medium px-4 py-2 rounded-full transition-colors ${servicesOpen ? "bg-white/10 text-white" : "text-gray-300 hover:text-white"}`} aria-expanded={servicesOpen} aria-haspopup="true">
                Services
                <svg width="10" height="6" viewBox="0 0 6 4" fill="none" className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} aria-hidden="true"><path d="M1 1L3 3L5 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] pt-2">
                  <div className="bg-[#111827] rounded-[12px] border border-white/10 shadow-xl p-3 flex flex-col gap-1">
                    {serviceLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="group p-3 rounded-[8px] hover:bg-white/5 transition-colors" onClick={() => setServicesOpen(false)}>
                        <span className="block text-[14px] font-bold text-white mb-0.5">{link.label}</span>
                        <span className="block text-[13px] text-gray-400">{link.description}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {mainNavLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`text-[15px] font-medium px-4 py-2 rounded-full transition-colors ${isActive(link.href) ? "bg-white/10 text-white" : "text-gray-300 hover:text-white"}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <Link href="/health-check" className="hidden md:flex h-10 lg:h-11 px-5 lg:px-7 rounded-full bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] text-white text-[14px] lg:text-[15px] font-bold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(255,88,213,0.3)] items-center justify-center whitespace-nowrap">
              Request Health Check
            </Link>
            <button
              type="button"
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 shrink-0"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 5h12M3 9h12M3 13h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
      </header>
      <MobileNav id="mobile-nav" isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
