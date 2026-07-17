import ArrowButton from "./ArrowButton";
import { homepageHero } from "../lib/homepage";

/**
 * Homepage hero — Studiova composition with Peerprise brand + approved copy.
 */
export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-black"
    >
      <div className="absolute inset-0 hero-media-fade" aria-hidden="true">
        <video
          className="h-full w-full object-cover opacity-55"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/media/hero-atmosphere.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="site-container relative z-10 w-full pb-12 pt-[120px] sm:pb-16 sm:pt-[140px] lg:pb-20">
        <div className="mb-6 flex items-center gap-3 sm:mb-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/primary-leaf.svg"
            alt=""
            width={28}
            height={28}
            className="hero-enter-copy animate-spin [animation-duration:6s]"
          />
          <p className="hero-enter-copy m-0 text-base text-white/80 sm:text-lg">
            We create{" "}
            <span className="font-semibold text-accent">dependable digital systems</span> that keep
            websites, channels and operations working.
          </p>
        </div>

        <h1
          id="hero-heading"
          className="hero-enter-brand type-brand-display mb-6 text-white sm:mb-8"
        >
          Peerprise
        </h1>

        <p className="hero-enter-copy mb-8 max-w-[540px] text-[17px] leading-relaxed text-white/75 sm:mb-10 sm:text-[20px]">
          {homepageHero.supporting}
        </p>

        <div className="hero-enter-actions mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <ArrowButton href={homepageHero.primaryCta.href}>
            {homepageHero.primaryCta.label}
          </ArrowButton>
          <ArrowButton href={homepageHero.secondaryCta.href} variant="on-dark">
            {homepageHero.secondaryCta.label}
          </ArrowButton>
        </div>

        <p className="hero-enter-actions m-0 text-[14px] leading-relaxed text-white/55 sm:text-[15px]">
          {homepageHero.audienceLine}
        </p>
      </div>
    </section>
  );
}
