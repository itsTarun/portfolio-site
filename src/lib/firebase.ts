import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, logEvent as firebaseLogEvent } from "firebase/analytics";

export function getFirebaseApp() {
	const firebaseConfig = {
		apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
		authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
		projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
		storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
		messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
		appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
		measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
	};

	if (!getApps().length) {
		return initializeApp(firebaseConfig);
	}

	return getApps()[0];
}

export function getFirebaseAnalytics() {
	const app = getFirebaseApp();

	if (typeof window !== "undefined") {
		return getAnalytics(app);
	}

	return null;
}

export function logFirebaseEvent(
	eventName: string,
	eventParameters?: Record<string, string | number | boolean>,
) {
	if (process.env.NODE_ENV === "development") {
		console.log(`[Firebase Analytics] Event: ${eventName}`, eventParameters);
		return;
	}

	if (typeof window === "undefined") {
		return;
	}

	try {
		const analytics = getFirebaseAnalytics();
		if (analytics) {
			firebaseLogEvent(analytics, eventName, eventParameters);
		}
	} catch (error) {
		console.error("[Firebase Analytics] Error logging event:", error);
	}
}

export function trackFirebasePageView(pagePath: string, pageTitle: string) {
	logFirebaseEvent("page_view", {
		page_path: pagePath,
		page_title: pageTitle,
		page_location: window.location.href,
	});
}

export function trackFirebaseFormSubmission(
	formName: string,
	success: boolean,
) {
	logFirebaseEvent("form_submit", {
		form_name: formName,
		success,
	});
}

export function trackFirebaseProjectClick(
	projectTitle: string,
	projectUrl: string,
	projectType: "GitHub" | "Demo",
) {
	logFirebaseEvent("project_click", {
		project_title: projectTitle,
		project_url: projectUrl,
		project_type: projectType,
	});
}

export function trackFirebaseExternalLinkClick(
	linkUrl: string,
	linkText?: string,
) {
	logFirebaseEvent("external_link_click", {
		link_url: linkUrl,
		link_text: linkText || "",
	});
}

export function trackFirebaseButtonClick(buttonName: string) {
	logFirebaseEvent("button_click", {
		button_name: buttonName,
	});
}

export function trackFirebaseThemeToggle(theme: "light" | "dark") {
	logFirebaseEvent("theme_toggle", {
		theme,
	});
}
