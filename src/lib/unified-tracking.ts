/**
 * Unified tracking functions that send events to all configured analytics tools
 * This ensures consistent event tracking across GA4, PostHog, and Firebase
 */

import { trackGAEvent } from "@/lib/analytics";
import { shouldSendAnalyticsData } from "@/lib/analytics-config";
import {
	trackFirebaseButtonClick,
	trackFirebaseExternalLinkClick,
	trackFirebaseFormSubmission,
	trackFirebasePageView,
	trackFirebaseProjectClick,
	trackFirebaseThemeToggle,
	logFirebaseEvent,
} from "@/lib/firebase";
import {
	trackPostHogButtonClick,
	trackPostHogEvent,
	trackPostHogExternalLinkClick,
	trackPostHogFormSubmission,
	trackPostHogPageView,
	trackPostHogProjectClick,
	trackPostHogThemeToggle,
} from "@/lib/posthog";

/**
 * Track a page view across all analytics tools
 */
export function trackPageView(pagePath: string, pageTitle: string): void {
	if (shouldSendAnalyticsData()) {
		// Google Analytics - automatic via gtag config, but we can also send explicitly
		if (typeof window !== "undefined" && window.gtag) {
			window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "", {
				page_path: pagePath,
				page_title: pageTitle,
			});
		}

		// PostHog
		trackPostHogPageView(pagePath, pageTitle);

		// Firebase
		trackFirebasePageView(pagePath, pageTitle);
	} else {
		console.log(`[Analytics] Page View: ${pagePath} - ${pageTitle}`);
	}
}

/**
 * Track a form submission across all analytics tools
 */
export function trackFormSubmission(
	formName: string,
	success: boolean,
): void {
	if (shouldSendAnalyticsData()) {
		// Google Analytics
		trackGAEvent("form_submit", {
			form_name: formName,
			success,
		});

		// PostHog
		trackPostHogFormSubmission(formName, success);

		// Firebase
		trackFirebaseFormSubmission(formName, success);
	} else {
		console.log(`[Analytics] Form Submit: ${formName} - Success: ${success}`);
	}
}

/**
 * Track a project click across all analytics tools
 */
export function trackProjectClick(
	projectTitle: string,
	projectUrl: string,
	projectType: "GitHub" | "Demo",
): void {
	if (shouldSendAnalyticsData()) {
		// Google Analytics
		trackGAEvent("project_click", {
			project_title: projectTitle,
			project_url: projectUrl,
			project_type: projectType,
		});

		// PostHog
		trackPostHogProjectClick(projectTitle, projectUrl, projectType);

		// Firebase
		trackFirebaseProjectClick(projectTitle, projectUrl, projectType);
	} else {
		console.log(
			`[Analytics] Project Click: ${projectTitle} - ${projectType} - ${projectUrl}`,
		);
	}
}

/**
 * Track an external link click across all analytics tools
 */
export function trackExternalLinkClick(linkUrl: string, linkText?: string): void {
	if (shouldSendAnalyticsData()) {
		// Google Analytics
		trackGAEvent("external_link_click", {
			link_url: linkUrl,
			link_text: linkText || "",
		});

		// PostHog
		trackPostHogExternalLinkClick(linkUrl, linkText);

		// Firebase
		trackFirebaseExternalLinkClick(linkUrl, linkText);
	} else {
		console.log(`[Analytics] External Link Click: ${linkText || linkUrl}`);
	}
}

/**
 * Track a button click across all analytics tools
 */
export function trackButtonClick(buttonName: string): void {
	if (shouldSendAnalyticsData()) {
		// Google Analytics
		trackGAEvent("button_click", {
			button_name: buttonName,
		});

		// PostHog
		trackPostHogButtonClick(buttonName);

		// Firebase
		trackFirebaseButtonClick(buttonName);
	} else {
		console.log(`[Analytics] Button Click: ${buttonName}`);
	}
}

/**
 * Track a theme toggle across all analytics tools
 */
export function trackThemeToggle(theme: "light" | "dark"): void {
	if (shouldSendAnalyticsData()) {
		// Google Analytics
		trackGAEvent("theme_toggle", {
			theme,
		});

		// PostHog
		trackPostHogThemeToggle(theme);

		// Firebase
		trackFirebaseThemeToggle(theme);
	} else {
		console.log(`[Analytics] Theme Toggle: ${theme}`);
	}
}

/**
 * Track a navigation click across all analytics tools
 */
export function trackNavigationClick(destinationPage: string): void {
	if (shouldSendAnalyticsData()) {
		// Google Analytics
		trackGAEvent("navigation_click", {
			destination_page: destinationPage,
		});

		// PostHog
		trackPostHogEvent("navigation_click", {
			destination_page: destinationPage,
		});

		// Firebase
		logFirebaseEvent("navigation_click", {
			destination_page: destinationPage,
		});
	} else {
		console.log(`[Analytics] Navigation Click: ${destinationPage}`);
	}
}

/**
 * Track a scroll depth milestone across all analytics tools
 */
export function trackScrollDepth(depth: 25 | 50 | 75 | 100): void {
	if (shouldSendAnalyticsData()) {
		// Google Analytics
		trackGAEvent("scroll_depth", {
			depth,
		});

		// PostHog
		trackPostHogEvent("scroll_depth", {
			depth,
		});

		// Firebase
		logFirebaseEvent("scroll_depth", {
			depth,
		});
	} else {
		console.log(`[Analytics] Scroll Depth: ${depth}%`);
	}
}

/**
 * Track a custom event across all analytics tools
 */
export function trackCustomEvent(
	eventName: string,
	properties?: Record<string, string | number | boolean>,
): void {
	if (shouldSendAnalyticsData()) {
		// Google Analytics
		trackGAEvent(eventName, properties);

		// PostHog
		trackPostHogEvent(eventName, properties);

		// Firebase
		logFirebaseEvent(eventName, properties);
	} else {
		console.log(`[Analytics] Custom Event: ${eventName}`, properties);
	}
}
