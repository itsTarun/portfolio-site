import { describe, expect, it } from "vitest";
import { renderMarkdownToHtml } from "./render-markdown";

describe("renderMarkdownToHtml", () => {
	it("renders markdown structure into HTML", async () => {
		const markdown = `# Title\n\n## Subtitle\n\n- one\n- two\n\n[Read more](/blog)`;

		const html = await renderMarkdownToHtml(markdown);

		expect(html).toContain("<h1>Title</h1>");
		expect(html).toContain("<h2>Subtitle</h2>");
		expect(html).toContain("<li>one</li>");
		expect(html).toContain('href="/blog"');
	});

	it("sanitizes unsafe HTML from markdown", async () => {
		const markdown =
			"Safe text <script>alert('xss')</script><img src='x' onerror='alert(1)' />";

		const html = await renderMarkdownToHtml(markdown);

		expect(html).not.toContain("<script>");
		expect(html).not.toContain("onerror");
	});
});
