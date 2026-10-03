import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sdk = vi.hoisted(() => ({
	init: vi.fn(),
	capture: vi.fn(),
	opt_in_capturing: vi.fn(),
	opt_out_capturing: vi.fn(),
	has_opted_out_capturing: vi.fn(() => false),
}));
vi.mock("posthog-js", () => ({ default: sdk }));

let scripts: { id: string; src: string; async: boolean }[];

beforeEach(() => {
	vi.resetModules();
	vi.clearAllMocks();
	sdk.has_opted_out_capturing.mockReturnValue(false);
	vi.stubEnv("NEXT_PUBLIC_GA_MEASUREMENT_ID", "G-TEST123");
	vi.stubEnv("NEXT_PUBLIC_POSTHOG_KEY", "phc_test");
	vi.stubEnv("NEXT_PUBLIC_POSTHOG_HOST", "https://us.i.posthog.com");
	scripts = [];
	vi.stubGlobal("window", { location: { search: "?analytics_debug=1" } });
	vi.stubGlobal("document", {
		getElementById: (id: string) => scripts.find((script) => script.id === id),
		createElement: () => ({}),
		head: {
			appendChild: (script: (typeof scripts)[number]) => scripts.push(script),
		},
	});
});

afterEach(() => {
	vi.unstubAllGlobals();
	vi.unstubAllEnvs();
});

describe("optional analytics", () => {
	it("does not load SDKs or send commands before consent", async () => {
		await import("./analytics");
		expect(scripts).toEqual([]);
		expect(sdk.init).not.toHaveBeenCalled();
		expect(Reflect.get(window, "dataLayer")).toBeUndefined();
	});

	it("initializes once and leaves history page views to each provider", async () => {
		const { startAnalytics } = await import("./analytics");
		await Promise.all([startAnalytics(), startAnalytics()]);
		expect(scripts).toHaveLength(1);
		expect(scripts[0].src).toBe(
			"https://www.googletagmanager.com/gtag/js?id=G-TEST123",
		);
		expect(sdk.init).toHaveBeenCalledTimes(1);
		expect(sdk.init).toHaveBeenCalledWith(
			"phc_test",
			expect.objectContaining({
				capture_pageview: "history_change",
				autocapture: false,
				disable_session_recording: true,
				person_profiles: "identified_only",
			}),
		);
		const commands = (Reflect.get(window, "dataLayer") as IArguments[]).map(
			(args) => Array.from(args),
		);
		expect(commands.filter(([command]) => command === "config")).toEqual([
			[
				"config",
				"G-TEST123",
				expect.objectContaining({
					debug_mode: true,
					allow_google_signals: false,
				}),
			],
		]);
		expect(commands.some(([command]) => command === "event")).toBe(false);
	});

	it("stops capture on rejection and does not initialize a pending SDK", async () => {
		const { startAnalytics, stopAnalytics } = await import("./analytics");
		const loading = startAnalytics();
		stopAnalytics();
		await loading;
		expect(Reflect.get(window, "ga-disable-G-TEST123")).toBe(true);
		expect(sdk.init).not.toHaveBeenCalled();
		await startAnalytics();
		expect(sdk.init).toHaveBeenCalledTimes(1);
		stopAnalytics();
		expect(sdk.opt_out_capturing).toHaveBeenCalledTimes(1);
	});

	it("restores consent after a reload with a persisted PostHog rejection", async () => {
		sdk.has_opted_out_capturing.mockReturnValue(true);
		const { startAnalytics } = await import("./analytics");
		await startAnalytics();
		expect(sdk.init).toHaveBeenCalledTimes(1);
		expect(sdk.opt_in_capturing).toHaveBeenCalledTimes(1);
		expect(sdk.capture).not.toHaveBeenCalled();
	});

	it("records the current page on same-document re-allow without reinitializing", async () => {
		const { startAnalytics, stopAnalytics } = await import("./analytics");
		await startAnalytics();
		stopAnalytics();
		sdk.has_opted_out_capturing.mockReturnValue(true);
		await startAnalytics();
		expect(sdk.init).toHaveBeenCalledTimes(1);
		expect(sdk.opt_in_capturing).toHaveBeenCalledTimes(1);
		expect(sdk.capture).toHaveBeenCalledExactlyOnceWith("$pageview");
	});
});
