import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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

      <div className="bg-[#0B1220]">
        <header className="relative pt-[124px] pb-10 sm:pt-[140px] sm:pb-12 overflow-hidden">
          <div className="hero-glow-blue" style={{ top: "-420px", opacity: 0.4 }} />
          <div className="site-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_480px] gap-10 lg:gap-11 items-center max-w-[1180px] mx-auto">
              <div className="min-w-0 max-w-[780px]">
                <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-semibold tracking-[0.08em] uppercase text-gray-300 mb-5">
                  {post.category}
                </p>
                <h1 className="text-[38px] sm:text-[48px] lg:text-[52px] xl:text-[56px] font-bold leading-[1.08] tracking-tight text-white mb-6">
                  {post.title}
                </h1>
                <p className="text-[18px] sm:text-[19px] lg:text-[20px] text-gray-300 leading-[1.7] mb-8 max-w-[700px]">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[14px] sm:text-[15px] text-gray-300">
                  <span className="text-white font-medium">{post.author}</span>
                  <span aria-hidden="true" className="text-gray-500">
                    ·
                  </span>
                  <time dateTime={post.publishedAt}>{formatBlogDate(post.publishedAt)}</time>
                  <span aria-hidden="true" className="text-gray-500">
                    ·
                  </span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
              <div className="hidden md:block">
                <ArticleHeroVisual category={post.category} />
              </div>
            </div>
          </div>
        </header>

        <div className="pb-14 sm:pb-20">
          <div className="site-container">
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_236px] gap-8 lg:gap-9 max-w-[1180px] mx-auto items-start">
              <div className="min-w-0">
                <div className="rounded-[20px] sm:rounded-[24px] border border-[#E5E7EB] bg-[#F8F7F4] shadow-[0_18px_50px_rgba(0,0,0,0.28)] px-5 py-8 sm:px-10 sm:py-11 lg:px-16 lg:py-14">
                  <TableOfContents headings={post.headings} variant="inline" tone="light" />

                  <div
                    id="article-body"
                    className="article-prose max-w-[780px]"
                    dangerouslySetInnerHTML={{ __html: post.html }}
                  />

                  <div className="mt-12 sm:mt-14 flex flex-col gap-10 sm:gap-12">
                    <KeyTakeaways items={post.keyTakeaways} />
                    <div className="pt-2 border-t border-[#E5E7EB]">
                      <div className="pt-8 sm:pt-10">
                        <AuthorCard />
                      </div>
                    </div>
                    <div className="pt-2">
                      <ShareLinks title={post.title} url={canonicalUrl} />
                    </div>
                  </div>
                </div>
              </div>

              <aside className="hidden lg:block">
                <div className="sticky top-32">
                  <TableOfContents headings={post.headings} variant="sidebar" tone="dark" />
                </div>
              </aside>
            </div>
          </div>
        </div>

        <section className="pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 bg-[#111A2B] border-t border-white/5">
          <div className="site-container max-w-[1180px]">
            <div className="mb-16 sm:mb-20">
              <ArticleAdjacentNav previous={previous} next={next} />
            </div>

            {related.length > 0 && (
              <div className="mb-16 sm:mb-20">
                <h2 className="text-[24px] sm:text-[28px] font-bold text-white mb-7 sm:mb-8">
                  Related articles
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                  {related.map((item) => (
                    <ArticleCard key={item.slug} post={item} />
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-[16px] border border-white/10 bg-white/[0.04] p-7 sm:p-9 text-center">
              <h2 className="text-[24px] sm:text-[28px] font-bold text-white mb-6">
                {blogArticleCta.headline}
              </h2>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link href={blogArticleCta.primary.href} className="btn-primary">
                  {blogArticleCta.primary.label}
                </Link>
                <Link href={blogArticleCta.secondary.href} className="btn-secondary">
                  {blogArticleCta.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
