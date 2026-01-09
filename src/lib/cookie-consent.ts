"use client";

export type ConsentStatus = "not-set" | "accepted" | "rejected";

export function getAnalyticsConsent(): ConsentStatus {
	if (typeof window === "undefined") {
		return "not-set";
	}

	try {
		const consent = localStorage.getItem("analytics-consent");
		return (consent as ConsentStatus) || "not-set";
	} catch {
		return "not-set";
	}
}

export function setAnalyticsConsent(status: ConsentStatus): void {
	if (typeof window === "undefined") {
		return;
	}

	try {
		localStorage.setItem("analytics-consent", status);
	} catch {
		// Handle case where localStorage is not available
	}
}

export function hasAcceptedAnalytics(): boolean {
	return getAnalyticsConsent() === "accepted";
}

export function resetAnalyticsConsent(): void {
	if (typeof window === "undefined") {
		return;
	}

	try {
		localStorage.removeItem("analytics-consent");
	} catch {
		// Handle case where localStorage is not available
	}
}
