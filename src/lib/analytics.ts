import type { PostHog } from "posthog-js";

type AnalyticsWindow = Window & {
	dataLayer?: unknown[];
	gtag?: (...args: unknown[]) => void;
};

const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
let started: Promise<void> | undefined;
let posthog: PostHog | undefined;
let allowed = false;

export function startAnalytics(): Promise<void> {
	allowed = true;
	const target = window as AnalyticsWindow;
	if (gaId) {
		Reflect.set(window, `ga-disable-${gaId}`, false);
		target.gtag?.("consent", "update", { analytics_storage: "granted" });
	}
	if (posthog?.has_opted_out_capturing()) {
		posthog.opt_in_capturing();
		posthog.capture("$pageview");
	}
	started ??= initialize().catch((error: unknown) => {
		started = undefined;
		throw error;
	});
	return started;
}

export function stopAnalytics() {
	allowed = false;
	if (gaId) {
		Reflect.set(window, `ga-disable-${gaId}`, true);
		(window as AnalyticsWindow).gtag?.("consent", "update", {
			analytics_storage: "denied",
		});
	}
	posthog?.opt_out_capturing();
}

async function initialize() {
	const target = window as AnalyticsWindow;
	if (gaId && !document.getElementById("portfolio-ga")) {
		target.dataLayer ??= [];
		target.gtag = function () {
			// biome-ignore lint/complexity/noArguments: gtag queues Arguments objects, not arrays.
			target.dataLayer?.push(arguments); // eslint-disable-line prefer-rest-params
		};
		target.gtag("consent", "default", {
			analytics_storage: "granted",
			ad_storage: "denied",
			ad_user_data: "denied",
			ad_personalization: "denied",
		});
		target.gtag("js", new Date());
		// Enhanced measurement owns page views, including browser history changes.
		target.gtag("config", gaId, {
			allow_google_signals: false,
			allow_ad_personalization_signals: false,
			debug_mode:
				new URLSearchParams(window.location.search).get("analytics_debug") ===
				"1",
		});
		const script = document.createElement("script");
		script.id = "portfolio-ga";
		script.async = true;
		script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
		document.head.appendChild(script);
	}
	if (posthogKey && posthogHost && !posthog) {
		const { default: sdk } = await import("posthog-js");
		// Consent can change while the SDK downloads.
		if (!allowed) {
			started = undefined;
			return;
		}
		sdk.init(posthogKey, {
			api_host: posthogHost,
			ui_host: "https://us.posthog.com",
			defaults: "2026-05-30",
			capture_pageview: "history_change",
			autocapture: false,
			capture_pageleave: false,
			capture_exceptions: false,
			disable_session_recording: true,
			disable_surveys: true,
			person_profiles: "identified_only",
			persistence: "localStorage",
		});
		posthog = sdk;
		if (posthog.has_opted_out_capturing()) posthog.opt_in_capturing();
	}
}
