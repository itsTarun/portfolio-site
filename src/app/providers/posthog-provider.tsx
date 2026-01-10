"use client";

import { useEffect, useState } from "react";
import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { hasAcceptedAnalytics } from "@/lib/cookie-consent";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
	const [client, setClient] = useState<typeof posthog | null>(null);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}

		const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
		const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
		const isProduction = process.env.NODE_ENV === "production";
		const consent = hasAcceptedAnalytics();

		if (!apiKey || !consent) {
			return;
		}

		// Only initialize if not already initialized
		// Check if PostHog is already loaded by checking if it has been initialized
		// @ts-expect-error - __loaded is an internal PostHog property
		if (posthog.__loaded) {
			setClient(posthog);
			return;
		}

		// Initialize PostHog
		posthog.init(apiKey, {
			api_host: apiHost || "https://us.i.posthog.com",
			loaded: (ph) => {
				if (!isProduction) {
					console.log("[PostHog] Initialized in development mode");
					ph.debug();
				}
				setClient(ph);
			},
			// In development, still initialize but with debug mode
			// The actual data sending is controlled by the environment
		});

		// Cleanup function
		return () => {
			// PostHog doesn't need cleanup, but we can reset state
			if (!isProduction) {
				console.log("[PostHog] Provider unmounting");
			}
		};
	}, []);

	// If no client initialized, just render children
	if (!client) {
		return <>{children}</>;
	}

	return <PHProvider client={client}>{children}</PHProvider>;
}
