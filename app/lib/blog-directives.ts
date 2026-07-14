import { marked } from "marked";

export type EditorialDirective =
  | "takeaway"
  | "tip"
  | "mistake"
  | "tech"
  | "security"
  | "steps"
  | "checklist"
  | "quote"
  | "workflow"
  | "takeaways";

const LABELS: Record<Exclude<EditorialDirective, "takeaways" | "workflow" | "quote" | "steps" | "checklist">, string> = {
  takeaway: "Key takeaway",
  tip: "Practical tip",
  mistake: "Common mistake",
  tech: "Technical note",
  security: "Security consideration",
};

const ALIASES: Record<string, EditorialDirective> = {
  takeaway: "takeaway",
  "key-takeaway": "takeaway",
  tip: "tip",
  "practical-tip": "tip",
  mistake: "mistake",
  "common-mistake": "mistake",
  tech: "tech",
  "technical-note": "tech",
  security: "security",
  "security-consideration": "security",
  steps: "steps",
  "process-steps": "steps",
  checklist: "checklist",
  quote: "quote",
  "pull-quote": "quote",
  workflow: "workflow",
  takeaways: "takeaways",
  "key-takeaways": "takeaways",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inlineMarkdown(text: string): string {
  return marked.parseInline(text.trim(), { gfm: true }) as string;
}

function blockMarkdown(text: string): string {
  return marked.parse(text.trim(), { gfm: true }) as string;
}

function parseListItems(body: string): string[] {
  return body
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => line.replace(/^[-*+]\s+/, "").replace(/^\d+\.\s+/, "").trim())
    .filter(Boolean);
}

const CALLOUT_ICONS: Record<keyof typeof LABELS, string> = {
  takeaway:
    '<svg class="article-callout__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 2.5l1.65 3.34 3.69.54-2.67 2.6.63 3.67L9 11.02l-3.3 1.73.63-3.67-2.67-2.6 3.69-.54L9 2.5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>',
  tip: '<svg class="article-callout__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 2.75a4.75 4.75 0 014.75 4.75c0 1.85-1.05 3.12-2.1 4.05-.5.44-.9.93-1.05 1.55H7.4c-.15-.62-.55-1.11-1.05-1.55-1.05-.93-2.1-2.2-2.1-4.05A4.75 4.75 0 019 2.75zM7.5 14.75h3M8 16.25h2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  mistake:
    '<svg class="article-callout__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><circle cx="9" cy="9" r="6.25" stroke="currentColor" stroke-width="1.5"/><path d="M6.75 6.75l4.5 4.5M11.25 6.75l-4.5 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  tech: '<svg class="article-callout__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M6.25 5.5L3.5 9l2.75 3.5M11.75 5.5L14.5 9l-2.75 3.5M10.1 4.5l-2.2 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  security:
    '<svg class="article-callout__icon" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M9 2.75l5.25 2.1v4.15c0 3.05-2.05 5.5-5.25 6.25-3.2-.75-5.25-3.2-5.25-6.25V4.85L9 2.75z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6.9 9.05l1.45 1.45 2.85-2.9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

function renderCallout(type: keyof typeof LABELS, body: string): string {
  return `<aside class="article-callout article-callout--${type}" role="note">
  <div class="article-callout__header">
    ${CALLOUT_ICONS[type]}
    <p class="article-callout__label">${LABELS[type]}</p>
  </div>
  <div class="article-callout__body">${blockMarkdown(body)}</div>
</aside>`;
}

function renderSteps(body: string): string {
  const items = parseListItems(body);
  const lis = items
    .map(
      (item, index) =>
        `<li class="article-steps__item"><span class="article-steps__num" aria-hidden="true">${index + 1}</span><div class="article-steps__text">${inlineMarkdown(item)}</div></li>`,
    )
    .join("\n");
  return `<ol class="article-steps">${lis}</ol>`;
}

function renderChecklist(body: string): string {
  const items = parseListItems(body);
  const lis = items
    .map(
      (item) =>
        `<li class="article-checklist__item"><span class="article-checklist__box" aria-hidden="true"></span><span>${inlineMarkdown(item)}</span></li>`,
    )
    .join("\n");
  return `<ul class="article-checklist" role="list">${lis}</ul>`;
}

function renderQuote(body: string): string {
  return `<blockquote class="article-pullquote"><p>${inlineMarkdown(body.replace(/^["“]|["”]$/g, ""))}</p></blockquote>`;
}

function renderWorkflow(body: string): string {
  const steps = body.includes("|")
    ? body.split("|").map((s) => s.trim()).filter(Boolean)
    : parseListItems(body);
  const nodes = steps
    .map((step, index) => {
      const arrow =
        index < steps.length - 1
          ? `<span class="article-workflow__arrow" aria-hidden="true">
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none"><path d="M0 6h16M12 1l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </span>`
          : "";
      return `<li class="article-workflow__step"><span>${escapeHtml(step)}</span>${arrow}</li>`;
    })
    .join("");
  return `<figure class="article-workflow">
  <figcaption class="article-workflow__caption">Example workflow</figcaption>
  <ol class="article-workflow__track">${nodes}</ol>
</figure>`;
}

function renderDirective(type: EditorialDirective, body: string): string | null {
  switch (type) {
    case "takeaway":
    case "tip":
    case "mistake":
    case "tech":
    case "security":
      return renderCallout(type, body);
    case "steps":
      return renderSteps(body);
    case "checklist":
      return renderChecklist(body);
    case "quote":
      return renderQuote(body);
    case "workflow":
      return renderWorkflow(body);
    case "takeaways":
      return null;
  }
}

export function processEditorialDirectives(markdown: string): {
  markdown: string;
  keyTakeaways: string[];
} {
  const keyTakeaways: string[] = [];
  const directivePattern = /^:::([a-z0-9-]+)\s*\r?\n([\s\S]*?)^:::\s*$/gm;

  const processed = markdown.replace(directivePattern, (_match, rawType: string, rawBody: string) => {
    const type = ALIASES[rawType.toLowerCase()];
    if (!type) return _match;

    const body = rawBody.trim();
    if (type === "takeaways") {
      keyTakeaways.push(...parseListItems(body));
      return "";
    }

    const html = renderDirective(type, body);
    return html ? `\n\n${html}\n\n` : "";
  });

  return {
    markdown: processed.replace(/\n{3,}/g, "\n\n").trim(),
    keyTakeaways,
  };
}

/** Strip directive blocks so heading extraction ignores editorial scaffolding. */
export function stripEditorialDirectives(markdown: string): string {
  return markdown
    .replace(/^:::([a-z0-9-]+)\s*\r?\n([\s\S]*?)^:::\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
