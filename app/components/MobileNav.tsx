"use client";

import { useEffect, useId, useRef, useState, type RefObject } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  headerCta,
  isActivePath,
  isServicesSectionActive,
  mainNavLinks,
  serviceNavLinks,
} from "../lib/nav";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileNav({
  id,
  onClose,
  returnFocusRef,
}: {
  id: string;
  onClose: () => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
}) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const servicesPanelId = useId();

  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusNode = returnFocusRef.current;

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        handleClose();
        return;
      }

      if (event.key !== "Tab" || !panelRef.current) return;

      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
      ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      focusNode?.focus();
    };
    // Mounted only while open; cleanup restores focus and scroll.
    // eslint-disable-next-line react-hooks/exhaustive-deps -- mount/unmount cycle
  }, []);

  const servicesActive = isServicesSectionActive(pathname);

  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      className="fixed inset-0 z-50 lg:hidden"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />
      <nav
        ref={panelRef}
        className="absolute top-0 right-0 h-full w-full max-w-[320px] bg-dark-bg border-l border-dark-border shadow-2xl flex flex-col overflow-y-auto z-10"
        aria-label="Mobile"
      >
        <div className="flex items-center justify-between px-5 h-[72px] border-b border-dark-border flex-shrink-0">
          <Link
            href="/"
            onClick={handleClose}
            className="text-[17px] font-bold text-white min-h-11 inline-flex items-center"
          >
            Peerprise
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label="Close menu"
            className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-white/10 text-white"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M2 2l12 12M14 2L2 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col px-4 py-4 gap-1 flex-1">
          <div>
            <button
              type="button"
              aria-expanded={servicesExpanded}
              aria-controls={servicesPanelId}
              onClick={() => setServicesExpanded((value) => !value)}
              className={`w-full text-left flex items-center justify-between px-3 py-3 min-h-11 rounded-[8px] text-[16px] font-medium ${
                servicesActive ? "text-white bg-white/10" : "text-white hover:bg-white/5"
              }`}
            >
              Services
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className={`transition-transform duration-200 ${servicesExpanded ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path
                  d="M3 5l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              id={servicesPanelId}
              hidden={!servicesExpanded}
              className={servicesExpanded ? "mt-1 ml-2 flex flex-col gap-1" : undefined}
            >
              {serviceNavLinks.map((svc) => {
                const active = isActivePath(pathname, svc.href);
                return (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    onClick={handleClose}
                    tabIndex={servicesExpanded ? undefined : -1}
                    className={`flex flex-col px-3 py-3 min-h-11 rounded-[8px] ${
                      active
                        ? "bg-white/10 text-white"
                        : "hover:bg-white/5 text-on-dark"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    <span className="text-[15px] font-semibold">{svc.label}</span>
                    {svc.description && (
                      <span className="type-small text-on-dark-muted">{svc.description}</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          {mainNavLinks.map((link) => {
            const active = isActivePath(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleClose}
                className={`px-3 py-3 min-h-11 rounded-[8px] text-[16px] font-semibold inline-flex items-center ${
                  active
                    ? "text-white bg-white/10"
                    : "text-on-dark hover:bg-white/5"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="px-4 py-5 border-t border-dark-border flex-shrink-0">
          <Link
            href={headerCta.href}
            onClick={handleClose}
            className="btn-primary btn-primary-motion h-12 min-h-11 w-full shadow-accent"
          >
            {headerCta.label}
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
