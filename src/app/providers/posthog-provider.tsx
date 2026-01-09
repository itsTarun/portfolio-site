"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
	if (typeof window === "undefined") {
		return <>{children}</>;
	}

	const isProduction = process.env.NODE_ENV === "production";
	const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
	const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

	if (!apiKey) {
		return <>{children}</>;
	}

	if (!isProduction) {
		posthog.init(apiKey, {
			api_host: apiHost,
			loaded: (ph) => {
				if (process.env.NODE_ENV === "development") {
					console.log("[PostHog] Initialized in development mode");
					ph.debug();
				}
			},
		});
	} else {
		posthog.init(apiKey, {
			api_host: apiHost,
		});
	}

	return <PHProvider client={posthog}>{children}</PHProvider>;
}
