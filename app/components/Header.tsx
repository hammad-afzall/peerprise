"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import {
  CONTACT_EMAIL,
  headerCta,
  isActivePath,
  mainNavLinks,
  serviceNavLinks,
} from "../lib/nav";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Menu links — Studiova stacked list pattern with Peerprise routes. */
const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  ...mainNavLinks.filter((l) => l.href !== "/contact"),
  { href: "/contact", label: "Contact" },
];

/**
 * Studiova-style header: lime top bar, logo left, circular menu → popover.
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const pathname = usePathname();
  const menuId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [navPathname, setNavPathname] = useState(pathname);

  if (pathname !== navPathname) {
    setNavPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY >= 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>(FOCUSABLE)?.focus();
    }, 0);

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        panelRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
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

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={[
        "fixed top-0 z-50 w-full border-t-4 border-accent transition-all duration-500",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:bg-accent before:transition-all before:duration-500",
        sticky ? "before:h-full" : "before:h-0",
      ].join(" ")}
    >
      <div className="site-container relative z-10">
        <nav
          className={[
            "relative flex items-center justify-between transition-all duration-500",
            sticky ? "py-5" : "py-7",
          ].join(" ")}
          aria-label="Main"
        >
          <Link
            href="/"
            className="relative z-10 flex items-center rounded-sm"
            aria-label="Peerprise home"
          >
            <Logo
              variant={sticky ? "dark" : "light"}
              className="h-10 w-auto sm:h-12 transition-opacity duration-200"
            />
          </Link>

          <div className="relative z-10 flex items-center gap-2 sm:gap-5">
            <Link
              href={headerCta.href}
              className={[
                "hidden sm:inline-flex items-center min-h-11 text-[15px] font-bold transition-colors",
                sticky
                  ? "text-[#1f2a2e] hover:opacity-70"
                  : "text-white hover:text-accent",
              ].join(" ")}
            >
              {headerCta.label}
            </Link>

            <ThemeToggle sticky={sticky} />

            <button
              ref={buttonRef}
              type="button"
              className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-white text-[#1f2a2e] shadow-sm"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M4 4l10 10M14 4L4 14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M4 6h10M4 12h10"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>

            {open && (
              <div
                id={menuId}
                ref={panelRef}
                role="dialog"
                aria-label="Menu"
                className="absolute right-0 top-[calc(100%+8px)] z-[60] flex w-80 sm:w-96 flex-col gap-5 rounded-3xl bg-white p-6 shadow-lg"
              >
                <div className="flex items-center justify-between border-b border-[#1f2a2e]/15 pb-5">
                  <p className="text-lg font-bold text-[#1f2a2e] m-0">Menu</p>
                  <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
                    aria-label="Close menu"
                    onClick={() => {
                      setOpen(false);
                      buttonRef.current?.focus();
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                      <path
                        d="M4 4l10 10M14 4L4 14"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>

                <ul className="flex flex-col gap-2 list-none p-0 m-0">
                  {menuLinks.map((link) => {
                    const active = isActivePath(pathname, link.href);
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={[
                            "group flex items-center gap-2 text-2xl font-bold text-[#1f2a2e] transition-colors",
                            active ? "text-[#1f2a2e]" : "hover:opacity-70",
                          ].join(" ")}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setOpen(false)}
                        >
                          <span
                            className={[
                              "inline-block overflow-hidden transition-all duration-300",
                              active ? "max-w-6 opacity-100" : "max-w-0 opacity-0 group-hover:max-w-6 group-hover:opacity-100",
                            ].join(" ")}
                            aria-hidden="true"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src="/icons/primary-leaf.svg"
                              alt=""
                              width={20}
                              height={20}
                              className="animate-spin [animation-duration:3s]"
                            />
                          </span>
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="border-t border-[#1f2a2e]/15 pt-5">
                  <p className="type-small text-[#1f2a2e]/60 mb-3 m-0">Services</p>
                  <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
                    {serviceNavLinks.slice(1).map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-[15px] font-semibold text-[#1f2a2e]/80 hover:text-[#1f2a2e]"
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-[#1f2a2e]/15 pt-5">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="block text-xl font-bold text-[#1f2a2e] hover:text-[#1f2a2e]/70"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
