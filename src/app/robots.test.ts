import { afterEach, describe, expect, it, vi } from "vitest";

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
		expect(result.sitemap).toBe("https://itstarun.fyi/sitemap.xml");
	});
});
