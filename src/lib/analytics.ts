export function trackGAEvent(
	eventName: string,
	parameters?: Record<string, string | number | boolean>,
): void {
	if (typeof window === "undefined") {
		return;
	}

	if (!window.gtag) {
		return;
	}

	if (process.env.NODE_ENV === "development") {
		console.log(`[GA4] Event: ${eventName}`, parameters);
		// In development, still try to send if gtag is available (for testing)
		// but don't fail if it's not
	}

	if (process.env.NODE_ENV === "production") {
		try {
			window.gtag("event", eventName, parameters);
		} catch (error) {
			console.error("[GA4] Error tracking event:", error);
		}
	}
}

export function trackFormSubmission(formName: string, success: boolean): void {
	trackGAEvent("form_submit", {
		form_name: formName,
		success,
	});
}

export function trackProjectClick(
	projectTitle: string,
	url: string,
	type: "GitHub" | "Demo",
): void {
	trackGAEvent("project_click", {
		project_title: projectTitle,
		project_url: url,
		project_type: type,
	});
}

export function trackExternalLinkClick(url: string, text?: string): void {
	trackGAEvent("external_link_click", {
		link_url: url,
		link_text: text || "",
	});
}

export function trackNavigationClick(page: string): void {
	trackGAEvent("navigation_click", {
		destination_page: page,
	});
}

export function trackScrollDepth(depth: 25 | 50 | 75 | 100): void {
	trackGAEvent("scroll_depth", {
		depth,
	});
}

export function trackButtonClick(buttonName: string): void {
	trackGAEvent("button_click", {
		button_name: buttonName,
	});
}

export function trackThemeToggle(theme: "light" | "dark"): void {
	trackGAEvent("theme_toggle", {
		theme,
	});
}
