export type FAQ = { id: string; question: string; answer: string };

export const faqs: FAQ[] = [
  { id: "platforms", question: "Which social platforms do you manage?", answer: "We support LinkedIn, Instagram, Facebook, and X (Twitter)." },
  { id: "content-type", question: "What kind of content do you create?", answer: "We write captions and produce branded graphics based on a brief." },
  { id: "seo", question: "Do you offer SEO or lead generation?", answer: "No, we focus purely on maintaining a professional digital presence." },
  { id: "contract", question: "Is there a long-term contract?", answer: "No, our plans are month-to-month and you can cancel anytime." },
  { id: "existing-website", question: "Can you maintain my existing website?", answer: "Yes, we support WordPress, Webflow, Squarespace, and custom sites." },
  { id: "small-change", question: "What counts as a small website change?", answer: "A small website change is typically a text update, image swap, or minor layout adjustment that takes under one hour." },
];
