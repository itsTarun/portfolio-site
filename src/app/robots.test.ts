import { afterEach, describe, expect, it, vi } from "vitest";
import { SITE_URL } from "@/lib/site-config";

// IS_PREVIEW_DEPLOYMENT is read at module load, so each case needs a fresh
// import after the env is stubbed.
async function loadRobots(vercelEnv?: string, appUrl = "") {
	vi.resetModules();
	if (vercelEnv === undefined) {
		vi.stubEnv("VERCEL_ENV", "");
	} else {
		vi.stubEnv("VERCEL_ENV", vercelEnv);
	}
	// Pinned so the host under test comes from the code, not from whatever the
	// runner happens to have exported.
	vi.stubEnv("NEXT_PUBLIC_APP_URL", appUrl);
	const { default: robots } = await import("./robots");
	return robots();
}

afterEach(() => {
	vi.unstubAllEnvs();
});

describe("robots", () => {
	it("blocks every preview deployment, not just one known host", async () => {
		for (const env of ["preview", "development"]) {
			const rule = (await loadRobots(env)).rules;
			expect(Array.isArray(rule) ? rule[0] : rule).toMatchObject({
				disallow: "/",
			});
		}
	});

	it("indexes production and keeps /_next/ crawlable", async () => {
		const result = await loadRobots("production");
		const rule = Array.isArray(result.rules) ? result.rules[0] : result.rules;

		expect(rule?.allow).toBe("/");
		expect(rule?.disallow).toEqual(["/api/"]);
	});

	it("falls back to the canonical host from site-config, not a hardcoded one", async () => {
		const result = await loadRobots("production");

		expect(result.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
	});

	it("still lets NEXT_PUBLIC_APP_URL override the host", async () => {
		const result = await loadRobots("production", "https://example.test");

		expect(result.sitemap).toBe("https://example.test/sitemap.xml");
	});
});
