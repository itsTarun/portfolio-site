import { describe, expect, it } from "vitest";
import { SITE_URL } from "@/lib/site-config";
import sitemap from "./sitemap";

describe("sitemap", () => {
	it("includes core project and privacy routes", async () => {
		const entries = await sitemap();
		const urls = entries.map((entry) => entry.url);

		expect(urls).not.toContain(`${SITE_URL}/llms.txt`);
		expect(urls).toContain(`${SITE_URL}/privacy`);
		expect(urls).toContain(`${SITE_URL}/resume`);
		expect(urls).toContain(`${SITE_URL}/projects/chargespot`);
		expect(urls).toContain(`${SITE_URL}/projects/domain-collective`);
		expect(urls).toContain(`${SITE_URL}/projects/opentribe`);
	});

	// Guards the audit fix: the base URL used to be a hardcoded apex string that
	// silently diverged from SITE_URL when the canonical host moved to www.
	it("builds every URL from the canonical host in site-config", async () => {
		const entries = await sitemap();

		for (const entry of entries) {
			expect(entry.url.startsWith(SITE_URL)).toBe(true);
		}
	});

	it("does not carry a lastModified", async () => {
		const entries = await sitemap();

		expect(entries.every((entry) => entry.lastModified === undefined)).toBe(
			true,
		);
	});
});
