export type ReviewSource = "LinkedIn recommendation" | "Verified marketplace review";

export type Review = {
  id: string;
  name: string;
  role?: string;
  quote: string;
  source: ReviewSource;
};

/** Homepage featured reviews. */
export const featuredHomepageReviews: Review[] = [
  {
    id: "neri-carcasci",
    name: "Neri Carcasci",
    role: "Co-founder, Eireplan",
    quote:
      "Peerprise demonstrates a true understanding of software engineering and communicates that understanding exceptionally well. The technical expertise, passion and friendly approach make the team highly recommended.",
    source: "Verified marketplace review",
  },
  {
    id: "muhammad-irtaza",
    name: "Muhammad Irtaza",
    role: "Digital Marketer",
    quote:
      "Peerprise helped us build a system from the ground up. The architectural knowledge was impressive, and the team remained actively involved until the final product met the expected quality.",
    source: "Verified marketplace review",
  },
  {
    id: "verified-united-kingdom-api",
    name: "Alicia Sykes",
    role: "Principal Engineer and Open Source Maintainer",
    quote:
      "Peerprise rewrote a large Node.js API in Go and delivered clean, structured and well-tested code. The team worked independently, followed good engineering practices and produced a high-quality solution.",
    source: "Verified marketplace review",
  },
];
