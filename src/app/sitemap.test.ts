import { describe, expect, it } from "vitest";
import sitemap from "./sitemap";

describe("sitemap", () => {
	it("includes core project and privacy routes", async () => {
		const entries = await sitemap();
		const urls = entries.map((entry) => entry.url);

		expect(urls).toContain("https://itstarun.fyi/privacy");
		expect(urls).toContain("https://itstarun.fyi/projects/chargespot");
		expect(urls).toContain("https://itstarun.fyi/projects/domain-collective");
		expect(urls).toContain("https://itstarun.fyi/projects/opentribe");
	});
});
