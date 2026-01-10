"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { hasAcceptedAnalytics } from "@/lib/cookie-consent";
import { getFirebaseAnalytics } from "@/lib/firebase";
import { trackPageView } from "@/lib/unified-tracking";
import { shouldSendAnalyticsData } from "@/lib/analytics-config";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	// Initialize analytics tools
	useEffect(() => {
		const consent = hasAcceptedAnalytics();

		if (consent) {
			// Initialize in both dev and production
			// Dev mode will log to console, production will send data
			initMicrosoftClarity();
			initFirebaseAnalytics();

			if (!shouldSendAnalyticsData()) {
				console.log("[Analytics] Initialized in development mode (console logging only)");
			}
		} else {
			if (!shouldSendAnalyticsData()) {
				console.log("[Analytics] Waiting for user consent");
			}
		}
	}, []);

	// Track page views on route changes
	useEffect(() => {
		const consent = hasAcceptedAnalytics();

		if (!consent) {
			return;
		}

		// Get page title from document or use pathname
		const pageTitle = typeof document !== "undefined" 
			? document.title 
			: pathname || "Page";

		// Build full path with search params if they exist
		const fullPath = searchParams?.toString() 
			? `${pathname}?${searchParams.toString()}`
			: pathname || "/";

		// Track page view
		trackPageView(fullPath, pageTitle);
	}, [pathname, searchParams]);

	return <>{children}</>;
}

function initMicrosoftClarity() {
	const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

	if (!clarityProjectId) {
		return;
	}

	// Initialize Microsoft Clarity using standard approach
	const script = document.createElement("script");
	script.type = "text/javascript";
	script.async = true;
	script.innerHTML = `
		(function(c,l,a,r,i,t,y){
			c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
			t=l.createElement(r);t.async=1;
			t.src="https://www.clarity.ms/tag/"+i;
			y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
		})(window, document, "clarity", "script", "${clarityProjectId}");
	`;

	const head = document.head || document.getElementsByTagName("head")[0];
	head.appendChild(script);
}

function initFirebaseAnalytics() {
	try {
		getFirebaseAnalytics();
	} catch (error) {
		console.error("[Firebase Analytics] Initialization error:", error);
	}
}
