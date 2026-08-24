import { describe, expect, it } from "vitest";
import { PROJECTS } from "@/config/projects";
import { buildLlmsTxt } from "@/lib/llms-txt";
import { RESUME_URL, SITE_URL } from "@/lib/site-config";
import { GET } from "./route";

describe("llms.txt route", () => {
	it("builds project entries from shared project config", () => {
		const content = buildLlmsTxt();

		// The case study is the primary link; the live product URL rides along as
		// secondary context — see the comment in buildLlmsTxt's getProjectLines.
		for (const project of Object.values(PROJECTS)) {
			expect(content).toContain(
				`[${project.name}](${SITE_URL}/projects/${project.slug})`,
			);
			expect(content).toContain(`(live product: ${project.url})`);
		}
	});

	it("links the resume using the shared site config URL", () => {
		const resumeLine = buildLlmsTxt()
			.split("\n")
			.find((line) => line.startsWith("- Resume (PDF): "));

		expect(resumeLine).toBeDefined();
		expect(resumeLine).toMatch(/^- Resume \(PDF\): https?:\/\//);
		expect(resumeLine?.endsWith(RESUME_URL)).toBe(true);
	});

	it("lists the crawlable HTML resume route ahead of the PDF", () => {
		const lines = buildLlmsTxt().split("\n");
		const htmlIndex = lines.findIndex((line) => line.startsWith("- Resume: "));
		const pdfIndex = lines.findIndex((line) =>
			line.startsWith("- Resume (PDF): "),
		);

		expect(htmlIndex).toBeGreaterThan(-1);
		expect(lines[htmlIndex]).toMatch(/^- Resume: https?:\/\/\S+\/resume$/);
		// An LLM should reach the readable page before the binary.
		expect(htmlIndex).toBeLessThan(pdfIndex);
	});

	it("returns a plain text response", async () => {
		const response = await GET();
		const content = await response.text();

		expect(response.status).toBe(200);
		expect(response.headers.get("Content-Type")).toContain("text/plain");
		expect(content).toContain("# Tarun Sharma — Mobile App Developer");
		expect(content).toContain("## Projects");
		expect(content).toContain("## Links");
		expect(content).not.toContain("/blog");
	});
});
