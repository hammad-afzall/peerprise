"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { serviceLinks, mainNavLinks } from "../lib/nav";

export default function MobileNav({
  id,
  isOpen,
  onClose,
}: {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    setServicesExpanded(false);
    onClose();
  };

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const isServicesActive = serviceLinks.some((link) => isActive(link.href));

  if (!isOpen) return null;

  return (
    <div id={id} role="dialog" aria-modal="true" aria-label="Mobile navigation" className="fixed inset-0 z-50 md:hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />
      <nav
        className="absolute top-0 right-0 h-full w-full max-w-[320px] bg-[#0B1220] border-l border-white/10 shadow-2xl flex flex-col overflow-y-auto z-10"
        aria-label="Mobile navigation links"
      >
        <div className="flex items-center justify-between px-5 h-[72px] border-b border-white/10 flex-shrink-0">
          <Link href="/" onClick={handleClose} className="text-[17px] font-bold text-white">
            Peerprise
          </Link>
          <button
            onClick={handleClose}
            aria-label="Close menu"
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 text-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col px-4 py-4 gap-1 flex-1">
          <Link
            href="/health-check"
            onClick={handleClose}
            className="mb-3 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#FF58D5] to-[#4E6EFF] text-white text-[15px] font-bold"
          >
            Request a Health Check
          </Link>
          <div>
            <button
              type="button"
              aria-expanded={servicesExpanded}
              aria-controls="mobile-services-menu"
              onClick={() => setServicesExpanded((v) => !v)}
              className={`w-full text-left flex items-center justify-between px-3 py-3 rounded-[8px] text-[16px] font-medium ${
                isServicesActive ? "text-white bg-white/10" : "text-white hover:bg-white/5"
              }`}
            >
              Services
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className={`transition-transform ${servicesExpanded ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {servicesExpanded && (
              <div id="mobile-services-menu" className="mt-1 ml-3 flex flex-col gap-1">
                {serviceLinks.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    onClick={handleClose}
                    className={`flex flex-col px-3 py-2.5 rounded-[8px] ${
                      isActive(svc.href) ? "bg-white/10 text-white" : "hover:bg-white/5 text-gray-300"
                    }`}
                    aria-current={isActive(svc.href) ? "page" : undefined}
                  >
                    <span className="text-[14px] font-semibold">{svc.label}</span>
                    <span className="text-[12px] opacity-70">{svc.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {mainNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleClose}
              className={`px-3 py-3 rounded-[8px] text-[16px] font-medium ${
                isActive(link.href) ? "text-white bg-white/10" : "text-gray-300 hover:bg-white/5"
              }`}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
