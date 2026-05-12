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
		expect(content).toContain("## Links");
		expect(content).not.toContain("/blog");
	});
});
