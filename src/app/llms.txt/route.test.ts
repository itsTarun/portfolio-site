import { describe, expect, it } from "vitest";
import { PROJECTS } from "@/config/projects";
import { buildLlmsTxt } from "@/lib/llms-txt";
import { GET } from "./route";

describe("llms.txt route", () => {
	it("builds project entries from shared project config", () => {
		const content = buildLlmsTxt();

		for (const project of Object.values(PROJECTS)) {
			expect(content).toContain(`[${project.name}](${project.url})`);
		}
	});

	it("returns a plain text response", async () => {
		const response = await GET();
		const content = await response.text();

		expect(response.status).toBe(200);
		expect(response.headers.get("Content-Type")).toContain("text/plain");
		expect(content).toContain("# Tarun Sharma — Mobile App Developer");
		expect(content).toContain("## Projects");
		expect(content).toContain("## Pages");
		expect(content).toContain("## Optional");
		expect(content).not.toContain("/blog");
	});

	it("uses proper markdown link format for all links", () => {
		const content = buildLlmsTxt();

		expect(content).toContain("- [About](");
		expect(content).toContain("- [Projects](");
		expect(content).toContain("- [Contact](");
		expect(content).toContain("- [GitHub](");
		expect(content).toContain("- [LinkedIn](");
		expect(content).toContain("- [X](");
		expect(content).toContain("- [Email](mailto:");
	});

	it("puts intro prose before any H2 section (not under a heading)", () => {
		const content = buildLlmsTxt();
		const firstH2Index = content.indexOf("\n## ");

		expect(firstH2Index).toBeGreaterThan(-1);
		expect(content.slice(0, firstH2Index)).toContain("Mobile developer based in Delhi");
	});
});
