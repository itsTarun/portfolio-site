import { describe, expect, it } from "vitest";
import { isRateLimited, RATE_LIMIT } from "@/lib/rate-limit";

// A fresh store per test, so cases cannot leak into each other the way the
// module-level map would.
const store = () => new Map<string, number[]>();

describe("isRateLimited", () => {
	it("allows exactly RATE_LIMIT.max attempts before tripping", () => {
		const s = store();
		const now = 1_000_000;

		for (let i = 0; i < RATE_LIMIT.max; i++) {
			expect(isRateLimited("1.2.3.4", now, s)).toBe(false);
		}

		expect(isRateLimited("1.2.3.4", now, s)).toBe(true);
	});

	it("forgets attempts once they fall outside the window", () => {
		const s = store();
		const now = 1_000_000;

		for (let i = 0; i < RATE_LIMIT.max + 1; i++) {
			isRateLimited("1.2.3.4", now, s);
		}
		expect(isRateLimited("1.2.3.4", now, s)).toBe(true);

		// One millisecond past the window, every recorded hit has expired.
		expect(isRateLimited("1.2.3.4", now + RATE_LIMIT.windowMs + 1, s)).toBe(
			false,
		);
	});

	it("tracks callers independently", () => {
		const s = store();
		const now = 1_000_000;

		for (let i = 0; i < RATE_LIMIT.max + 1; i++) {
			isRateLimited("noisy", now, s);
		}

		expect(isRateLimited("noisy", now, s)).toBe(true);
		expect(isRateLimited("quiet", now, s)).toBe(false);
	});

	it("evicts stale keys instead of growing without bound", () => {
		const s = store();
		const now = 1_000_000;

		for (let i = 0; i < 1001; i++) {
			isRateLimited(`ip-${i}`, now, s);
		}
		expect(s.size).toBe(1001);

		// A later call sweeps every key whose hits have aged out.
		isRateLimited("fresh", now + RATE_LIMIT.windowMs + 1, s);
		expect(s.size).toBe(1);
		expect(s.has("fresh")).toBe(true);
	});
});
