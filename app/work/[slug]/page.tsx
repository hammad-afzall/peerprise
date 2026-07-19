import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArrowButton from "../../components/ArrowButton";
import CTASection from "../../components/CTASection";
import DisclosureNote from "../../components/DisclosureNote";
import Reveal from "../../components/Reveal";
import SectionLabel from "../../components/SectionLabel";
import TagList from "../../components/TagList";
import CaseStudyMedia from "../../components/work/CaseStudyMedia";
import { ctas } from "../../lib/ctas";
import { workPageExperienceDisclosure } from "../../lib/disclosure";
import {
  getCaseStudyById,
  workCaseStudies,
  workFinalCta,
} from "../../lib/work";

type Props = {
  params: Promise<{ slug: string }>;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function generateStaticParams() {
  return workCaseStudies.map((study) => ({ slug: study.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyById(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.context,
    openGraph: {
      title: `${study.title} | Peerprise`,
      description: study.context,
    },
  };
}

/**
 * Case study detail — Studiova-inspired project template with image placeholders.
 * Drop real assets into /public/media/work/<id>/ and set `src` on each image slot.
 */
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyById(slug);
  if (!study) notFound();

  const { detail } = study;
  const related = workCaseStudies.filter((item) => item.id !== study.id).slice(0, 3);
  const hasPlaceholders = !detail.heroImage.src || detail.gallery.some((image) => !image.src);

  let section = 1;
  const next = () => pad(++section);

  const challengeNum = next();
  const approachNum = next();
  const evolutionNum = detail.evolution ? next() : null;
  const architectureNum = detail.architecture ? next() : null;
  const surfaceNum = detail.productSurface ? next() : null;
  const highlightsNum = detail.technicalHighlights ? next() : null;
  const integrationsNum = detail.integrations ? next() : null;
  const scopeNum = next();
  const servicesNum = detail.services ? next() : null;
  const resultsNum = next();
  const caveatsNum = detail.caveats ? next() : null;
  const galleryNum = next();
  const relatedNum = related.length > 0 ? next() : null;
  const ctaNum = next();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="case-study-heading"
        className="relative overflow-hidden bg-[#1f2a2e] pt-28 pb-16 text-white md:pt-36 md:pb-24"
      >
        <div className="site-container">
          <Reveal>
            <Link
              href="/work"
              className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-accent"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              All work
            </Link>
          </Reveal>

          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="flex flex-col gap-6 lg:col-span-6">
              <Reveal delayMs={40}>
                <SectionLabel number="01" badge="Case study" tone="dark" />
              </Reveal>
              <Reveal delayMs={80}>
                <h1
                  id="case-study-heading"
                  className="m-0 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl xl:text-6xl"
                >
                  {study.title}
                </h1>
              </Reveal>
              {(study.role || study.engagementType) && (
                <Reveal delayMs={100}>
                  <dl className="m-0 grid gap-3 text-sm sm:grid-cols-2">
                    {study.role && (
                      <div>
                        <dt className="m-0 font-semibold uppercase tracking-[0.08em] text-white/45">
                          Role
                        </dt>
                        <dd className="mt-1 m-0 text-base text-white/85">{study.role}</dd>
                      </div>
                    )}
                    {study.engagementType && (
                      <div>
                        <dt className="m-0 font-semibold uppercase tracking-[0.08em] text-white/45">
                          Type
                        </dt>
                        <dd className="mt-1 m-0 text-base text-white/85">
                          {study.engagementType}
                        </dd>
                      </div>
                    )}
                  </dl>
                </Reveal>
              )}
              <Reveal delayMs={120}>
                <p className="m-0 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
                  {study.context}
                </p>
              </Reveal>
              <Reveal delayMs={160}>
                <TagList tags={[...study.tags]} variant="dark" />
              </Reveal>
            </div>

            <Reveal delayMs={100} className="lg:col-span-6">
              <CaseStudyMedia
                src={detail.heroImage.src}
                alt={detail.heroImage.alt}
                label={detail.heroImage.label}
                toneIndex={0}
                priority
                className="aspect-[4/3] w-full rounded-sm"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Disclosure ───────────────────────────────────────────────────── */}
      <section
        className="bg-[#f4f8fa] py-10 md:py-12 dark:bg-[#1f2a2e]"
        aria-labelledby="case-study-disclosure-heading"
      >
        <div className="site-container max-w-[880px]">
          <h2 id="case-study-disclosure-heading" className="sr-only">
            Selected team experience disclosure
          </h2>
          <DisclosureNote variant="light">{workPageExperienceDisclosure}</DisclosureNote>
        </div>
      </section>

      {/* ── Challenge ────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="challenge-heading"
        className="section-padding bg-white text-[#1f2a2e] dark:bg-[#273338] dark:text-white"
      >
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <SectionLabel number={challengeNum} badge="Challenge" tone="light" />
              <h2
                id="challenge-heading"
                className="mt-6 m-0 text-3xl font-bold tracking-tight md:text-4xl"
              >
                The problem
              </h2>
            </Reveal>
            <Reveal delayMs={80} className="lg:col-span-8">
              <p className="m-0 text-lg leading-relaxed text-[#1f2a2e]/80 md:text-xl dark:text-white/80">
                {detail.challenge}
              </p>
              {detail.challengePoints && detail.challengePoints.length > 0 && (
                <ul className="mt-8 m-0 grid list-none gap-3 p-0" role="list">
                  {detail.challengePoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 border-l-2 border-accent pl-4 text-base leading-relaxed text-[#1f2a2e]/80 md:text-lg dark:text-white/80"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Approach ─────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="approach-heading"
        className="section-padding bg-[#f4f8fa] text-[#1f2a2e] dark:bg-[#1f2a2e] dark:text-white"
      >
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <SectionLabel number={approachNum} badge="Solution" tone="light" />
              <h2
                id="approach-heading"
                className="mt-6 m-0 text-3xl font-bold tracking-tight md:text-4xl"
              >
                How it was solved
              </h2>
            </Reveal>
            <Reveal delayMs={80} className="lg:col-span-8">
              <p className="m-0 text-lg leading-relaxed text-[#1f2a2e]/80 md:text-xl dark:text-white/80">
                {detail.approach}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Evolution ────────────────────────────────────────────────────── */}
      {detail.evolution && evolutionNum && (
        <section
          aria-labelledby="evolution-heading"
          className="section-padding bg-white text-[#1f2a2e] dark:bg-[#273338] dark:text-white"
        >
          <div className="site-container">
            <div className="mb-12 flex flex-col items-start gap-8 xl:mb-16 xl:flex-row">
              <Reveal>
                <SectionLabel number={evolutionNum} badge="Evolution" tone="light" />
              </Reveal>
              <Reveal delayMs={80}>
                <h2
                  id="evolution-heading"
                  className="m-0 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
                >
                  Delivery path
                </h2>
              </Reveal>
            </div>

            <ol className="m-0 grid list-none gap-4 p-0" role="list">
              {detail.evolution.map((item, index) => (
                <Reveal key={item.phase} as="li" delayMs={40 + index * 50}>
                  <div className="grid gap-3 bg-[#f4f8fa] p-6 md:grid-cols-[200px_1fr] md:gap-8 dark:bg-[#1f2a2e]">
                    <p className="m-0 text-sm font-bold uppercase tracking-[0.08em] text-[#1f2a2e]/50 dark:text-white/50">
                      {pad(index + 1)} · {item.phase}
                    </p>
                    <p className="m-0 text-base leading-relaxed md:text-lg">{item.focus}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* ── Architecture ─────────────────────────────────────────────────── */}
      {detail.architecture && architectureNum && (
        <section
          aria-labelledby="architecture-heading"
          className="section-padding bg-[#1f2a2e] text-white"
        >
          <div className="site-container">
            <div className="mb-12 flex flex-col items-start gap-8 xl:mb-16 xl:flex-row">
              <Reveal>
                <SectionLabel number={architectureNum} badge="Architecture" tone="dark" />
              </Reveal>
              <Reveal delayMs={80} className="flex flex-col gap-4">
                <h2
                  id="architecture-heading"
                  className="m-0 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
                >
                  Platform topology
                </h2>
                {detail.architectureNote && (
                  <p className="m-0 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
                    {detail.architectureNote}
                  </p>
                )}
              </Reveal>
            </div>

            <Reveal delayMs={100}>
              <pre className="m-0 overflow-x-auto border border-white/12 bg-black/25 p-6 font-mono text-xs leading-relaxed text-accent/90 sm:text-sm md:p-8">
                {detail.architecture.join("\n")}
              </pre>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Product surface ──────────────────────────────────────────────── */}
      {detail.productSurface && surfaceNum && (
        <section
          aria-labelledby="surface-heading"
          className="section-padding bg-[#f4f8fa] text-[#1f2a2e] dark:bg-[#1f2a2e] dark:text-white"
        >
          <div className="site-container">
            <div className="mb-12 flex flex-col items-start gap-8 xl:mb-16 xl:flex-row">
              <Reveal>
                <SectionLabel number={surfaceNum} badge="Product" tone="light" />
              </Reveal>
              <Reveal delayMs={80}>
                <h2
                  id="surface-heading"
                  className="m-0 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
                >
                  Product surface
                </h2>
              </Reveal>
            </div>

            <ul
              className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2"
              role="list"
            >
              {detail.productSurface.map((item, index) => (
                <Reveal key={item.domain} as="li" delayMs={40 + index * 40}>
                  <div className="flex h-full flex-col gap-2 bg-white p-6 dark:bg-[#273338]">
                    <h3 className="m-0 text-lg font-bold tracking-tight">{item.domain}</h3>
                    <p className="m-0 text-base leading-relaxed text-[#1f2a2e]/70 dark:text-white/70">
                      {item.capabilities}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Technical highlights ─────────────────────────────────────────── */}
      {detail.technicalHighlights && highlightsNum && (
        <section
          aria-labelledby="highlights-heading"
          className="section-padding bg-white text-[#1f2a2e] dark:bg-[#273338] dark:text-white"
        >
          <div className="site-container">
            <div className="mb-12 flex flex-col items-start gap-8 xl:mb-16 xl:flex-row">
              <Reveal>
                <SectionLabel number={highlightsNum} badge="Engineering" tone="light" />
              </Reveal>
              <Reveal delayMs={80}>
                <h2
                  id="highlights-heading"
                  className="m-0 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
                >
                  Technical highlights
                </h2>
              </Reveal>
            </div>

            <ul className="m-0 grid list-none gap-5 p-0 md:grid-cols-2" role="list">
              {detail.technicalHighlights.map((item, index) => (
                <Reveal key={item.title} as="li" delayMs={40 + index * 50}>
                  <article className="flex h-full flex-col gap-3 border border-[#1f2a2e]/10 p-6 dark:border-white/10">
                    <h3 className="m-0 text-xl font-bold tracking-tight">{item.title}</h3>
                    <p className="m-0 text-base leading-relaxed text-[#1f2a2e]/75 dark:text-white/75">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Integrations ────────────────────────────────────────────────── */}
      {detail.integrations && integrationsNum && (
        <section
          aria-labelledby="integrations-heading"
          className="section-padding bg-[#1f2a2e] text-white"
        >
          <div className="site-container">
            <div className="mb-12 flex flex-col items-start gap-8 xl:mb-16 xl:flex-row">
              <Reveal>
                <SectionLabel number={integrationsNum} badge="Integrations" tone="dark" />
              </Reveal>
              <Reveal delayMs={80}>
                <h2
                  id="integrations-heading"
                  className="m-0 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
                >
                  Connected systems
                </h2>
              </Reveal>
            </div>

            <ul className="m-0 grid list-none gap-4 p-0 md:grid-cols-2" role="list">
              {detail.integrations.map((integration, index) => (
                <Reveal key={integration.title} as="li" delayMs={40 + index * 45}>
                  <article className="flex h-full flex-col gap-3 border border-white/12 bg-white/5 p-6">
                    <h3 className="m-0 text-xl font-bold tracking-tight text-accent">
                      {integration.title}
                    </h3>
                    <p className="m-0 text-base leading-relaxed text-white/75">
                      {integration.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── Contributions ────────────────────────────────────────────────── */}
      <section
        aria-labelledby="contributions-heading"
        className="section-padding bg-[#f4f8fa] text-[#1f2a2e] dark:bg-[#1f2a2e] dark:text-white"
      >
        <div className="site-container">
          <div className="mb-12 flex flex-col items-start gap-8 xl:mb-16 xl:flex-row">
            <Reveal>
              <SectionLabel number={scopeNum} badge="Scope" tone="light" />
            </Reveal>
            <Reveal delayMs={80}>
              <h2
                id="contributions-heading"
                className="m-0 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
              >
                What the team delivered
              </h2>
            </Reveal>
          </div>

          <ol className="m-0 grid list-none grid-cols-1 gap-4 p-0 md:grid-cols-2" role="list">
            {study.contributions.map((item, index) => (
              <Reveal key={item} as="li" delayMs={40 + index * 50}>
                <div className="flex h-full gap-4 bg-white p-6 dark:bg-[#273338]">
                  <span
                    className="shrink-0 text-sm font-bold text-[#1f2a2e]/40 dark:text-white/40"
                    aria-hidden="true"
                  >
                    {pad(index + 1)}
                  </span>
                  <p className="m-0 text-base font-medium leading-relaxed md:text-lg">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
      {detail.services && servicesNum && (
        <section
          aria-labelledby="services-heading"
          className="section-padding bg-white text-[#1f2a2e] dark:bg-[#273338] dark:text-white"
        >
          <div className="site-container">
            <div className="mb-12 flex flex-col items-start gap-8 xl:mb-16 xl:flex-row">
              <Reveal>
                <SectionLabel number={servicesNum} badge="Services" tone="light" />
              </Reveal>
              <Reveal delayMs={80} className="flex flex-col gap-4">
                <h2
                  id="services-heading"
                  className="m-0 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
                >
                  Repos & services
                </h2>
                <p className="m-0 max-w-xl text-base text-[#1f2a2e]/70 dark:text-white/70">
                  Anonymized service family across the platform.
                </p>
              </Reveal>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-[#1f2a2e]/15 dark:border-white/15">
                    <th className="py-3 pr-4 text-sm font-bold uppercase tracking-[0.08em] text-[#1f2a2e]/50 dark:text-white/50">
                      Service
                    </th>
                    <th className="py-3 pr-4 text-sm font-bold uppercase tracking-[0.08em] text-[#1f2a2e]/50 dark:text-white/50">
                      Responsibility
                    </th>
                    <th className="py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#1f2a2e]/50 dark:text-white/50">
                      Stack
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {detail.services.map((service) => (
                    <tr
                      key={service.name}
                      className="border-b border-[#1f2a2e]/8 dark:border-white/8"
                    >
                      <td className="py-4 pr-4 align-top text-base font-semibold">
                        {service.name}
                      </td>
                      <td className="py-4 pr-4 align-top text-base text-[#1f2a2e]/75 dark:text-white/75">
                        {service.responsibility}
                      </td>
                      <td className="py-4 align-top text-base text-[#1f2a2e]/75 dark:text-white/75">
                        {service.stack}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* ── Results ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="results-heading"
        className="section-padding bg-[#1f2a2e] text-white"
      >
        <div className="site-container">
          <div className="mb-12 flex flex-col items-start gap-8 xl:mb-16 xl:flex-row">
            <Reveal>
              <SectionLabel number={resultsNum} badge="Outcomes" tone="dark" />
            </Reveal>
            <Reveal delayMs={80} className="flex flex-col gap-4">
              <h2
                id="results-heading"
                className="m-0 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
              >
                Results that matter
              </h2>
              {study.outcome && (
                <p className="m-0 max-w-xl text-lg text-accent md:text-xl">
                  {study.outcome}
                </p>
              )}
            </Reveal>
          </div>

          <ul className="m-0 grid list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2" role="list">
            {detail.results.map((result, index) => (
              <Reveal key={result} as="li" delayMs={40 + index * 60}>
                <div className="flex h-full items-start gap-4 border border-white/12 bg-white/5 p-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/icons/right-check.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="mt-0.5 shrink-0 brightness-0 invert"
                  />
                  <p className="m-0 text-base leading-relaxed text-white/90 md:text-lg">
                    {result}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          {(detail.scaleNote || study.capability) && (
            <Reveal delayMs={200}>
              <div className="mt-10 flex flex-col gap-3">
                {detail.scaleNote && (
                  <p className="m-0 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
                    {detail.scaleNote}
                  </p>
                )}
                <p className="m-0 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
                  {study.capability}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ── Caveats ─────────────────────────────────────────────────────── */}
      {detail.caveats && caveatsNum && (
        <section
          aria-labelledby="caveats-heading"
          className="section-padding bg-white text-[#1f2a2e] dark:bg-[#273338] dark:text-white"
        >
          <div className="site-container">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-4">
                <SectionLabel number={caveatsNum} badge="Boundaries" tone="light" />
                <h2
                  id="caveats-heading"
                  className="mt-6 m-0 text-3xl font-bold tracking-tight md:text-4xl"
                >
                  Scope & caveats
                </h2>
              </Reveal>
              <Reveal delayMs={80} className="lg:col-span-8">
                <p className="m-0 text-lg leading-relaxed text-[#1f2a2e]/75 dark:text-white/75">
                  These implementation boundaries keep the public description technically honest.
                </p>
                <ul className="mt-8 m-0 grid list-none gap-3 p-0" role="list">
                  {detail.caveats.map((caveat) => (
                    <li
                      key={caveat}
                      className="border-l-2 border-accent pl-4 text-base leading-relaxed text-[#1f2a2e]/75 dark:text-white/75"
                    >
                      {caveat}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      )}

      {/* ── Gallery ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="gallery-heading"
        className="section-padding bg-[#f4f8fa] text-[#1f2a2e] dark:bg-[#1f2a2e] dark:text-white"
      >
        <div className="site-container">
          <div className="mb-12 flex flex-col items-start gap-8 xl:mb-16 xl:flex-row">
            <Reveal>
              <SectionLabel number={galleryNum} badge="Visuals" tone="light" />
            </Reveal>
            <Reveal delayMs={80}>
              <h2
                id="gallery-heading"
                className="m-0 max-w-2xl text-3xl font-bold tracking-tight md:text-4xl"
              >
                Product visuals
              </h2>
              {hasPlaceholders && (
                <p className="mt-4 m-0 max-w-xl text-base text-[#1f2a2e]/70 dark:text-white/70">
                  Image slots are ready — drop files into{" "}
                  <code className="rounded bg-black/5 px-1.5 py-0.5 text-sm dark:bg-white/10">
                    /public/media/work/{study.id}/
                  </code>{" "}
                  and set the{" "}
                  <code className="rounded bg-black/5 px-1.5 py-0.5 text-sm dark:bg-white/10">
                    src
                  </code>{" "}
                  field on each slot.
                </p>
              )}
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-7">
            {detail.gallery.map((image, index) => (
              <Reveal key={image.label} delayMs={60 + index * 80}>
                <CaseStudyMedia
                  src={image.src}
                  alt={image.alt}
                  label={image.label}
                  toneIndex={index + 1}
                  className="aspect-[16/10] w-full rounded-sm"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── More work ────────────────────────────────────────────────────── */}
      {related.length > 0 && relatedNum && (
        <section
          aria-labelledby="related-heading"
          className="section-padding bg-white text-[#1f2a2e] dark:bg-[#273338] dark:text-white"
        >
          <div className="site-container">
            <div className="mb-12 flex flex-col items-start gap-8 xl:mb-16 xl:flex-row xl:items-end xl:justify-between">
              <div className="flex flex-col items-start gap-8 xl:flex-row">
                <Reveal>
                  <SectionLabel number={relatedNum} badge="More work" tone="light" />
                </Reveal>
                <Reveal delayMs={80}>
                  <h2
                    id="related-heading"
                    className="m-0 max-w-xl text-3xl font-bold tracking-tight md:text-4xl"
                  >
                    Related experience
                  </h2>
                </Reveal>
              </div>
              <Reveal delayMs={120}>
                <ArrowButton href="/work" variant="lime">
                  View all work
                </ArrowButton>
              </Reveal>
            </div>

            <ul
              className="m-0 grid list-none grid-cols-1 gap-5 p-0 md:grid-cols-3"
              role="list"
            >
              {related.map((item, index) => (
                <Reveal key={item.id} as="li" delayMs={40 + index * 70}>
                  <Link
                    href={`/work/${item.id}`}
                    className="group flex h-full flex-col overflow-hidden bg-[#f4f8fa] transition-colors hover:bg-[#1f2a2e] dark:bg-[#1f2a2e] dark:hover:bg-[#0a0a0a]"
                  >
                    <CaseStudyMedia
                      src={item.detail.heroImage.src}
                      alt={item.detail.heroImage.alt}
                      label={item.detail.heroImage.label}
                      toneIndex={index}
                      className="aspect-[16/10] w-full"
                    />
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <h3 className="m-0 text-xl font-bold tracking-tight transition-colors group-hover:text-white">
                        {item.title}
                      </h3>
                      <p className="m-0 line-clamp-2 text-sm leading-relaxed text-[#1f2a2e]/70 transition-colors group-hover:text-white/70 dark:text-white/70">
                        {item.context}
                      </p>
                      <span className="mt-auto pt-2 text-sm font-semibold text-[#1f2a2e] transition-colors group-hover:text-accent dark:text-accent">
                        View case study →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection
        headline={workFinalCta.headline}
        primaryCta={ctas.discussSoftware}
        secondaryCta={ctas.discussPartnership}
        variant="dark"
        id="case-study-cta"
        number={ctaNum}
      />
    </>
  );
}
