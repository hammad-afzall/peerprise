"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import {
  headerCta,
  isActivePath,
  isServicesSectionActive,
  mainNavLinks,
  serviceNavLinks,
} from "../lib/nav";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const servicesActive = isServicesSectionActive(pathname);
  const [navPathname, setNavPathname] = useState(pathname);

  // Close menus when the route changes (adjust state during render — no effect needed).
  if (pathname !== navPathname) {
    setNavPathname(pathname);
    setServicesOpen(false);
    setMobileOpen(false);
  }

  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        servicesButtonRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }
      setServicesOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const focusMenuItem = (index: number) => {
    const items = menuItemRefs.current.filter(Boolean) as HTMLAnchorElement[];
    if (items.length === 0) return;
    const next = (index + items.length) % items.length;
    items[next]?.focus();
  };

  const openServicesMenu = (focusFirst = false) => {
    setServicesOpen(true);
    if (focusFirst) {
      requestAnimationFrame(() => focusMenuItem(0));
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 h-[76px] lg:h-[96px] bg-dark-bg/90 backdrop-blur-md border-b border-dark-border z-30">
        <div className="site-container h-full flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center group min-w-0 rounded-sm"
            aria-label="Peerprise home"
          >
            <Logo className="h-[66px] w-auto shrink-0 group-hover:opacity-80 transition-opacity duration-200" />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1 bg-dark-3/50 border border-dark-border rounded-full px-2 py-1.5"
            aria-label="Main"
          >
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                ref={servicesButtonRef}
                type="button"
                className={`flex items-center gap-1.5 type-nav px-4 py-2 rounded-full transition-colors duration-200 min-h-11 ${
                  servicesOpen || servicesActive
                    ? "bg-white/10 text-white"
                    : "text-on-dark-subtle hover:text-white"
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                aria-controls={menuId}
                onClick={() =>
                  setServicesOpen((open) => {
                    if (!open) openServicesMenu();
                    return !open;
                  })
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "ArrowDown" ||
                    event.key === "Enter" ||
                    event.key === " "
                  ) {
                    event.preventDefault();
                    openServicesMenu(true);
                  }
                  if (event.key === "Escape") {
                    setServicesOpen(false);
                  }
                }}
              >
                Services
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 6 4"
                  fill="none"
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path
                    d="M1 1L3 3L5 1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {servicesOpen && (
                <div
                  id={menuId}
                  ref={menuRef}
                  role="menu"
                  aria-label="Services"
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[320px] pt-2"
                >
                  <div className="bg-dark-surface rounded-[12px] border border-dark-border shadow-xl p-3 flex flex-col gap-1">
                    {serviceNavLinks.map((link, index) => {
                      const active = isActivePath(pathname, link.href);
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          role="menuitem"
                          ref={(el) => {
                            menuItemRefs.current[index] = el;
                          }}
                          className={`group p-3 rounded-[8px] transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-focus ${
                            active ? "bg-white/10" : "hover:bg-white/5"
                          }`}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setServicesOpen(false)}
                          onKeyDown={(event) => {
                            if (event.key === "ArrowDown") {
                              event.preventDefault();
                              focusMenuItem(index + 1);
                            }
                            if (event.key === "ArrowUp") {
                              event.preventDefault();
                              focusMenuItem(index - 1);
                            }
                            if (event.key === "Home") {
                              event.preventDefault();
                              focusMenuItem(0);
                            }
                            if (event.key === "End") {
                              event.preventDefault();
                              focusMenuItem(serviceNavLinks.length - 1);
                            }
                            if (event.key === "Escape") {
                              event.preventDefault();
                              setServicesOpen(false);
                              servicesButtonRef.current?.focus();
                            }
                            if (event.key === "Tab") {
                              setServicesOpen(false);
                            }
                          }}
                        >
                          <span className="block text-[15px] font-bold text-white mb-0.5">
                            {link.label}
                          </span>
                          {link.description && (
                            <span className="block text-[14px] text-on-dark-muted">
                              {link.description}
                            </span>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {mainNavLinks.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`type-nav px-4 py-2 rounded-full transition-colors duration-200 min-h-11 inline-flex items-center ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-on-dark-subtle hover:text-white"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <Link
              href={headerCta.href}
              className="hidden lg:inline-flex min-h-11 h-11 px-5 xl:px-7 rounded-full items-center justify-center whitespace-nowrap text-white text-[14px] xl:text-[15px] font-bold hover:opacity-90 transition-opacity shadow-accent"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              {headerCta.label}
            </Link>
            <button
              ref={menuButtonRef}
              type="button"
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-white/10 shrink-0"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M3 5h12M3 9h12M3 13h12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="text-white"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {mobileOpen ? (
        <MobileNav
          id="mobile-nav"
          onClose={() => setMobileOpen(false)}
          returnFocusRef={menuButtonRef}
        />
      ) : null}
    </>
  );
}
