import { describe, expect, it } from "vitest";
import vercelConfig from "./vercel.json";

// vercel.json is JSON, so it cannot carry comments. The reasoning that belongs
// next to the CSP lives here instead.
//
// WHY script-src ALLOWS 'unsafe-inline' AND WHY THERE IS NO NONCE:
// Every page on this site is statically prerendered (responses carry
// x-nextjs-prerender: 1 / x-vercel-cache: HIT). A nonce-based CSP has to mint a
// fresh nonce per response, which forces every route to render dynamically and
// throws the static cache away. Meanwhile the HTML genuinely contains inline
// scripts we do not control: Next.js's own bootstrap/flight payload
// (self.__next_f.push), next-themes' anti-flash script, and the JSON-LD blocks
// from src/components/seo/*. script-src falls back to default-src when it is
// absent, so 'default-src self' alone would block all of those and leave the
// site rendered but never hydrated. Hence the directive is set explicitly and
// widened rather than omitted. It still pins scripts to this origin (no
// third-party script hosts) and still withholds 'unsafe-eval'.
// Do not "fix" this by adding a nonce without also accepting dynamic rendering.
//
// WHY object-src IS 'self' AND NOT 'none':
// /resume embeds public/resume.pdf in an <object> (src/app/resume/page.tsx).
// object-src governs <object>/<embed>, so 'none' silently collapses that preview
// to its fallback paragraph — and nothing local catches it, because `next start`
// does not read vercel.json. 'self' keeps the legacy plugin vector shut to every
// other origin while letting the same-origin PDF render.

const allRoutesRule = vercelConfig.headers.find(
	(rule) => rule.source === "/(.*)",
);

function headerValue(key: string) {
	return allRoutesRule?.headers.find((header) => header.key === key)?.value;
}

describe("vercel.json headers configuration", () => {
	it("applies one unconditional header rule to every route", () => {
		expect(allRoutesRule).toBeDefined();
		// The previous rule was gated on host droidsize-web.vercel.app, which
		// belongs to a different Vercel project and could never match. Preview
		// noindexing is handled by IS_PREVIEW_DEPLOYMENT in src/lib/site-config.ts.
		expect(allRoutesRule && "has" in allRoutesRule).toBe(false);
		expect(headerValue("X-Robots-Tag")).toBeUndefined();
	});

	it("sets the transport and framing headers", () => {
		expect(headerValue("Strict-Transport-Security")).toBe(
			"max-age=63072000; includeSubDomains; preload",
		);
		expect(headerValue("X-Content-Type-Options")).toBe("nosniff");
		expect(headerValue("Referrer-Policy")).toBe(
			"strict-origin-when-cross-origin",
		);
		expect(headerValue("X-Frame-Options")).toBe("DENY");
		expect(headerValue("Permissions-Policy")).toBe(
			"camera=(), microphone=(), geolocation=(), interest-cohort=()",
		);
	});

	it("locks the CSP down to this origin", () => {
		const csp = headerValue("Content-Security-Policy");
		const directives = csp?.split(";").map((directive) => directive.trim());

		expect(directives).toEqual([
			"default-src 'self'",
			"base-uri 'self'",
			"form-action 'self'",
			"frame-ancestors 'none'",
			"object-src 'self'",
			"script-src 'self' 'unsafe-inline'",
			"style-src 'self' 'unsafe-inline'",
			"img-src 'self' data: blob:",
			"font-src 'self' data:",
			"connect-src 'self'",
			"upgrade-insecure-requests",
		]);
	});

	it("keeps the CSP compatible with static prerendering", () => {
		const csp = headerValue("Content-Security-Policy") ?? "";

		// Inline scripts must stay allowed — see the note at the top of this file.
		expect(csp).toContain("script-src 'self' 'unsafe-inline'");
		expect(csp).not.toContain("nonce-");
		// Nothing in the app evals, so this stays out.
		expect(csp).not.toContain("unsafe-eval");
	});
});
