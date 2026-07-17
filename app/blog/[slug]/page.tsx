import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageSection from "../../components/PageSection";
import CTASection from "../../components/CTASection";
import AuthorCard from "../../components/blog/AuthorCard";
import ShareLinks from "../../components/blog/ShareLinks";
import TableOfContents from "../../components/blog/TableOfContents";
import ArticleCard from "../../components/blog/ArticleCard";
import ArticleHeroVisual from "../../components/blog/ArticleHeroVisual";
import ArticleAdjacentNav from "../../components/blog/ArticleAdjacentNav";
import KeyTakeaways from "../../components/blog/KeyTakeaways";
import ReadingProgress from "../../components/blog/ReadingProgress";
import {
  formatBlogDate,
  getAdjacentPosts,
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
} from "../../lib/blog";
import { author } from "../../lib/author";
import { blogArticleCta } from "../../lib/ctas";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { previous, next } = getAdjacentPosts(slug);
  const related = getRelatedPosts(slug, post.category);
  const canonicalUrl = `https://peerprise.com/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: author.role,
    },
    publisher: {
      "@type": "Organization",
      name: "Peerprise",
      url: "https://peerprise.com",
    },
    mainEntityOfPage: canonicalUrl,
    articleSection: post.category,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress />

      <header className="relative overflow-hidden bg-black pt-[140px] pb-16 sm:pt-[160px] sm:pb-24">
        <div className="site-container relative z-10">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-14">
            <div className="min-w-0 max-w-[820px]">
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="m-0 flex list-none flex-wrap items-center gap-2 p-0 text-[13px] text-white/50">
                  <li>
                    <Link href="/blog" className="transition-colors hover:text-accent">
                      Insights
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="max-w-[min(100%,28rem)] truncate text-white/70">{post.title}</li>
                </ol>
              </nav>
              <div className="mb-6 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/primary-leaf.svg"
                  alt=""
                  width={22}
                  height={22}
                  className="animate-spin [animation-duration:6s]"
                />
                <span className="inline-flex h-9 items-center rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-[#1f2a2e]">
                  {post.category}
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
                {post.title}
              </h1>
              <p className="mb-8 max-w-[700px] text-lg leading-relaxed text-white/70 sm:text-xl">
                {post.description}
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[15px] text-white/60">
                <span className="font-medium text-white">{post.author}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                {post.readingTime ? (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{post.readingTime}</span>
                  </>
                ) : null}
              </div>
            </div>
            <div className="hidden md:block">
              <ArticleHeroVisual category={post.category} />
            </div>
          </div>
        </div>
      </header>

      <div className="bg-[#f4f8fa]">
        <div className="site-container py-14 sm:py-20">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-10">
            <div className="min-w-0">
              <div className="bg-white px-5 py-8 sm:px-10 sm:py-11 lg:px-16 lg:py-14">
                <div
                  id="article-body"
                  className="article-prose max-w-[780px]"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />

                <div className="mt-12 flex flex-col gap-10 sm:mt-14 sm:gap-12">
                  <KeyTakeaways items={post.keyTakeaways} />
                  <div className="border-t border-black/10 pt-8 sm:pt-10">
                    <AuthorCard />
                  </div>
                  <ShareLinks title={post.title} url={canonicalUrl} />
                </div>
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-32">
                <TableOfContents headings={post.headings} variant="sidebar" tone="light" />
              </div>
            </aside>
          </div>
        </div>
      </div>

      <PageSection
        number="01"
        badge="Continue reading"
        headline="Where to go next"
        id="article-related-heading"
        tone="white"
      >
        <div className="mb-12">
          <ArticleAdjacentNav previous={previous} next={next} />
        </div>

        {related.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-7">
            {related.map((item) => (
              <ArticleCard key={item.slug} post={item} />
            ))}
          </div>
        )}
      </PageSection>

      <CTASection
        headline={blogArticleCta.headline}
        primaryCta={blogArticleCta.primary}
        secondaryCta={blogArticleCta.secondary}
        variant="dark"
        id="article-final-cta"
        number="02"
      />
    </>
  );
}
