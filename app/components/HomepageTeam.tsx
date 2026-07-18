import Link from "next/link";
import SectionLabel from "./SectionLabel";
import Reveal from "./Reveal";
import { homepageTeam } from "../lib/homepage";

const TONE_BG: Record<(typeof homepageTeam.members)[number]["tone"], string> = {
  lime: "linear-gradient(150deg, #c1ff72 0%, #86c14e 70%, #1f2a2e 140%)",
  dark: "linear-gradient(150deg, #273338 0%, #1f2a2e 60%, #0a0a0a 100%)",
  light: "linear-gradient(150deg, #e9ffcb 0%, #c1ff72 55%, #f4f8fa 110%)",
  mid: "linear-gradient(150deg, #365564 0%, #1f2a2e 70%, #10171a 110%)",
};

/**
 * Meet our team — Studiova section 06: four portrait-style cards with
 * Peerprise role structure (no invented headshots).
 */
export default function HomepageTeam() {
  return (
    <section
      aria-labelledby="team-heading"
      className="section-padding bg-white text-[#1f2a2e] dark:bg-[#273338] dark:text-white"
    >
      <div className="site-container">
        <div className="mb-12 grid grid-cols-1 gap-8 xl:mb-16 xl:grid-cols-12 xl:gap-14">
          <div className="xl:col-span-4">
            <Reveal>
              <SectionLabel number="06" badge={homepageTeam.eyebrow} />
            </Reveal>
          </div>
          <div className="xl:col-span-8">
            <Reveal delayMs={80} className="flex flex-col gap-5">
              <h2
                id="team-heading"
                className="m-0 max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              >
                {homepageTeam.headline}
              </h2>
              <p className="m-0 max-w-2xl text-base text-[#1f2a2e]/70 md:text-lg dark:text-white/70">
                {homepageTeam.intro}
              </p>
            </Reveal>
          </div>
        </div>

        <ul
          className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 xl:grid-cols-4"
          role="list"
        >
          {homepageTeam.members.map((member, index) => {
            const lightMedia = member.tone === "lime" || member.tone === "light";
            return (
            <Reveal key={member.title} as="li" delayMs={60 + index * 80}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-square overflow-hidden">
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: TONE_BG[member.tone] }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 0 2px, transparent 3px), radial-gradient(circle at 80% 70%, rgba(0,0,0,0.12) 0 1px, transparent 2px)",
                      backgroundSize: "48px 48px, 32px 32px",
                    }}
                    aria-hidden="true"
                  />
                  <p
                    className={[
                      "absolute bottom-5 left-5 right-5 m-0 text-lg font-bold leading-snug md:text-xl",
                      lightMedia ? "text-[#1f2a2e]" : "text-white drop-shadow-sm",
                    ].join(" ")}
                  >
                    {member.role}
                  </p>
                </div>
                <h3 className="mt-5 mb-1 text-xl font-bold tracking-tight">
                  {member.title}
                </h3>
                <p className="m-0 text-sm font-medium text-[#1f2a2e]/55 dark:text-white/55">
                  {member.role}
                </p>
                <p className="mt-3 m-0 text-sm leading-relaxed text-[#1f2a2e]/70 dark:text-white/70">
                  {member.description}
                </p>
              </article>
            </Reveal>
            );
          })}
        </ul>

        <Reveal delayMs={200} className="mt-10">
          <Link
            href="/about"
            className="text-base font-bold text-[#1f2a2e] underline-offset-4 hover:underline dark:text-white"
          >
            More about how Peerprise is structured →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
