import SectionHeading from "./SectionHeading";
import ReviewCard from "./ReviewCard";
import { featuredHomepageReviews } from "../lib/testimonials";

export default function ClientReviews() {
  return (
    <section
      aria-labelledby="client-reviews-heading"
      className="section-padding bg-[var(--color-dark-surface)] border-t border-white/5 relative overflow-hidden"
    >
      <div className="hero-glow-pink" style={{ top: "-400px", opacity: 0.35 }} />
      <div className="site-container relative z-10">
        <SectionHeading
          eyebrow="Client Experiences"
          headline="What clients say about working with Peerprise."
          subheadline="Clients trust Peerprise for thoughtful engineering, dependable communication and high-quality technical delivery."
          center
          id="client-reviews-heading"
        />

        <ul
          className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          role="list"
        >
          {featuredHomepageReviews.map((review) => (
            <li key={review.id}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
