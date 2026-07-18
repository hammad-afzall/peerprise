"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import DisclosureNote from "./DisclosureNote";
import { workCaseStudies } from "../lib/work";
import { homepageExperience } from "../lib/homepage";
import { homepageExperienceDisclosure } from "../lib/disclosure";

/** Deterministic media wash per slide — visual variety without stock photos. */
const MEDIA_TONES = [
  "linear-gradient(150deg, #c1ff72 0%, #86c14e 55%, #1f2a2e 130%)",
  "linear-gradient(150deg, #273338 0%, #1f2a2e 60%, #0a0a0a 100%)",
  "linear-gradient(150deg, #e9ffcb 0%, #c1ff72 60%, #7fae4b 120%)",
  "linear-gradient(150deg, #365564 0%, #1f2a2e 70%, #10171a 110%)",
  "linear-gradient(150deg, #c1ff72 0%, #f4f8fa 70%, #ffffff 110%)",
  "linear-gradient(150deg, #1f2a2e 0%, #365564 70%, #86c14e 160%)",
];

const PATTERN =
  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.35) 0 2px, transparent 3px), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.14) 0 1px, transparent 2px)";

/**
 * Featured work — exact Studiova section 02: auto-playing Swiper carousel,
 * image plane with hover zoom, title + tag pills under each slide.
 */
export default function WorkCarousel() {
  return (
    <section
      aria-labelledby="experience-heading"
      className="section-padding overflow-hidden bg-[#f4f8fa] text-[#1f2a2e] dark:bg-[#273338] dark:text-white"
    >
      <div className="site-container mb-12 md:mb-16">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-12 xl:gap-14">
          <div className="xl:col-span-4">
            <Reveal>
              <SectionLabel number="02" badge={homepageExperience.eyebrow} />
            </Reveal>
          </div>
          <div className="xl:col-span-8">
            <Reveal delayMs={80} className="flex flex-col gap-5">
              <h2
                id="experience-heading"
                className="m-0 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                {homepageExperience.headline}
              </h2>
              <DisclosureNote variant="light">
                {homepageExperienceDisclosure}
              </DisclosureNote>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal delayMs={100}>
        <div className="site-container">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            loop
            speed={600}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            spaceBetween={30}
            breakpoints={{
              320: { spaceBetween: 16 },
              768: { spaceBetween: 20 },
              1920: { spaceBetween: 30 },
            }}
            className="!overflow-visible"
          >
            {workCaseStudies.map((cs, index) => (
              <SwiperSlide
                key={cs.id}
                className="!w-[280px] sm:!w-[320px] lg:!w-[360px]"
              >
                <Link
                  href="/work"
                  className="group/slide block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  <div className="relative h-[220px] overflow-hidden sm:h-[250px] lg:h-[280px]">
                    <div
                      className="absolute inset-0 transition-transform duration-500 group-hover/slide:scale-110"
                      style={{ background: MEDIA_TONES[index % MEDIA_TONES.length] }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: PATTERN,
                        backgroundSize: "48px 48px, 32px 32px",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mt-5 mb-3 text-xl font-bold tracking-tight transition-colors duration-300 group-hover/slide:text-[#5a8a2a] md:text-2xl dark:group-hover/slide:text-accent">
                    {cs.title}
                  </h3>
                  <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                    {cs.tags.slice(0, 2).map((tag) => (
                      <li key={tag}>
                        <span className="inline-flex items-center rounded-full border border-[#1f2a2e]/15 bg-white px-3 py-1 text-sm font-medium text-[#1f2a2e] dark:border-white/20 dark:bg-transparent dark:text-white">
                          {tag}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Reveal>
    </section>
  );
}
