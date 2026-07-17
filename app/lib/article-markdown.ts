import { marked, Renderer, type Tokens } from "marked";

/** Render markdown lists as plain paragraphs — no ul/ol chrome in articles. */
export function createArticleRenderer(
  onHeading?: (text: string, depth: number) => string,
): Renderer {
  const renderer = new Renderer();

  if (onHeading) {
    renderer.heading = ({ text, depth }: Tokens.Heading) => onHeading(text, depth);
  }

  renderer.list = function (token: Tokens.List) {
    const start = typeof token.start === "number" ? token.start : 1;
    return token.items
      .map((item, index) => {
        const html = this.parser.parseInline(item.tokens);
        const prefix = token.ordered ? `${start + index}. ` : "";
        return `<p>${prefix}${html}</p>`;
      })
      .join("\n");
  };

  return renderer;
}

export function parseArticleMarkdown(
  markdown: string,
  onHeading?: (text: string, depth: number) => string,
): string {
  marked.setOptions({ gfm: true, breaks: false });
  return marked.parse(markdown, {
    renderer: createArticleRenderer(onHeading),
  }) as string;
}

export function parseArticleInline(text: string): string {
  return marked.parseInline(text.trim(), { gfm: true }) as string;
}
