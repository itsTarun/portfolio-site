const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_TRACKED_KEYS = 1000;

// ponytail: in-memory counter, so it resets on cold start and is per-instance —
// an attacker spread across instances gets through. It costs nothing and stops
// the naive flood, which is the whole threat model for a portfolio contact form.
// Move to Upstash/Vercel KV only if the logs show this is not enough.
const hits = new Map<string, number[]>();

/**
 * Records a hit for `key` and reports whether it has now exceeded the window.
 * Calling this counts as an attempt, so call it once per request.
 */
export function isRateLimited(
	key: string,
	now: number = Date.now(),
	store: Map<string, number[]> = hits,
): boolean {
	const recent = (store.get(key) ?? []).filter(
		(at) => now - at < RATE_LIMIT_WINDOW_MS,
	);
	recent.push(now);
	store.set(key, recent);

	// Bound the map so a spray of unique keys cannot grow it without limit.
	if (store.size > MAX_TRACKED_KEYS) {
		for (const [tracked, times] of store) {
			if (times.every((at) => now - at >= RATE_LIMIT_WINDOW_MS)) {
				store.delete(tracked);
			}
		}
	}

	return recent.length > RATE_LIMIT_MAX;
}

export const RATE_LIMIT = {
	windowMs: RATE_LIMIT_WINDOW_MS,
	max: RATE_LIMIT_MAX,
} as const;
