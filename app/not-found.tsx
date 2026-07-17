import type { Metadata } from "next";
import ArrowButton from "./components/ArrowButton";
import { ctas } from "./lib/ctas";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="relative flex min-h-[85vh] items-center overflow-hidden bg-black pt-[140px] pb-16 sm:pb-24"
    >
      <div className="site-container relative z-10">
        <div className="max-w-[1100px]">
          <div className="mb-6 flex items-start gap-3 sm:mb-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/primary-leaf.svg"
              alt=""
              width={24}
              height={24}
              className="mt-1 shrink-0 animate-spin [animation-duration:6s]"
            />
            <p className="m-0 max-w-[42rem] text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
              The link may be outdated, or the page may have moved.
            </p>
          </div>

          <h1 id="not-found-heading" className="type-brand-display mb-6 text-white sm:mb-8">
            404
          </h1>

          <p className="mb-8 max-w-[640px] text-lg leading-relaxed text-white/70 sm:mb-10">
            This page could not be found. Use the navigation or return to a main section of the
            site.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <ArrowButton href="/">Return Home</ArrowButton>
            <ArrowButton href={ctas.exploreServices.href} variant="on-dark">
              {ctas.exploreServices.label}
            </ArrowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
