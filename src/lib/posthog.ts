import posthog from "posthog-js";

export function initPostHog() {
	const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
	const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

	if (!apiKey || !apiHost) {
		return;
	}

	if (process.env.NODE_ENV === "development") {
		posthog.init(apiKey, {
			api_host: apiHost,
			loaded: (ph) => {
				console.log("[PostHog] Initialized in development mode");
				ph.debug();
			},
		});
	} else {
		posthog.init(apiKey, {
			api_host: apiHost,
		});
	}
}

export function trackPostHogEvent(
	eventName: string,
	properties?: Record<string, string | number | boolean>,
) {
	if (process.env.NODE_ENV === "development") {
		console.log(`[PostHog] Event: ${eventName}`, properties);
		return;
	}

	if (typeof window === "undefined") {
		return;
	}

	try {
		posthog.capture(eventName, properties);
	} catch (error) {
		console.error("[PostHog] Error tracking event:", error);
	}
}

export function trackPostHogPageView(pagePath: string, pageTitle: string) {
	trackPostHogEvent("$pageview", {
		$current_url: window.location.href,
		pathname: pagePath,
		title: pageTitle,
	});
}

export function trackPostHogFormSubmission(formName: string, success: boolean) {
	trackPostHogEvent("form_submit", {
		form_name: formName,
		success,
	});
}

export function trackPostHogProjectClick(
	projectTitle: string,
	projectUrl: string,
	projectType: "GitHub" | "Demo",
) {
	trackPostHogEvent("project_click", {
		project_title: projectTitle,
		project_url: projectUrl,
		project_type: projectType,
	});
}

export function trackPostHogExternalLinkClick(
	linkUrl: string,
	linkText?: string,
) {
	trackPostHogEvent("external_link_click", {
		link_url: linkUrl,
		link_text: linkText || "",
	});
}

export function trackPostHogButtonClick(buttonName: string) {
	trackPostHogEvent("button_click", {
		button_name: buttonName,
	});
}

export function trackPostHogThemeToggle(theme: "light" | "dark") {
	trackPostHogEvent("theme_toggle", {
		theme,
	});
}

export function identifyPostHogUser(
	userId: string,
	properties?: Record<string, string>,
) {
	if (process.env.NODE_ENV === "development") {
		console.log(`[PostHog] Identify user: ${userId}`, properties);
		return;
	}

	if (typeof window === "undefined") {
		return;
	}

	try {
		posthog.identify(userId, properties);
	} catch (error) {
		console.error("[PostHog] Error identifying user:", error);
	}
}
