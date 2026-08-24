import { afterEach, describe, expect, it, vi } from "vitest";
import { SITE_URL } from "@/lib/site-config";

// IS_PREVIEW_DEPLOYMENT is read at module load, so each case needs a fresh
// import after the env is stubbed.
async function loadRobots(vercelEnv?: string) {
	vi.resetModules();
	if (vercelEnv === undefined) {
		vi.stubEnv("VERCEL_ENV", "");
	} else {
		vi.stubEnv("VERCEL_ENV", vercelEnv);
	}
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

	it("takes the host from SITE_URL alone, with no env override", async () => {
		// A NEXT_PUBLIC_APP_URL override used to win here, which let a stale
		// dashboard value ship a sitemap host that disagreed with every canonical.
		vi.stubEnv("NEXT_PUBLIC_APP_URL", "https://example.test");
		const result = await loadRobots("production");

		expect(result.sitemap).toBe(`${SITE_URL}/sitemap.xml`);
	});
});
