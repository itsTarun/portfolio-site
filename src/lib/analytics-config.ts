/**
 * Centralized analytics configuration and validation
 */

export interface AnalyticsConfig {
	gaMeasurementId: string | undefined;
	gtmId: string | undefined;
	posthogKey: string | undefined;
	posthogHost: string | undefined;
	clarityProjectId: string | undefined;
	firebase: {
		apiKey: string | undefined;
		authDomain: string | undefined;
		projectId: string | undefined;
		storageBucket: string | undefined;
		messagingSenderId: string | undefined;
		appId: string | undefined;
		measurementId: string | undefined;
	};
}

/**
 * Get analytics configuration from environment variables
 */
export function getAnalyticsConfig(): AnalyticsConfig {
	return {
		gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
		gtmId: process.env.NEXT_PUBLIC_GTM_ID,
		posthogKey: process.env.NEXT_PUBLIC_POSTHOG_KEY,
		posthogHost: process.env.NEXT_PUBLIC_POSTHOG_HOST,
		clarityProjectId: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
		firebase: {
			apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
			authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
			projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
			storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
			messagingSenderId:
				process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
			appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
			measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
		},
	};
}

/**
 * Check if Google Analytics is configured
 */
export function isGAConfigured(): boolean {
	return !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
}

/**
 * Check if Google Tag Manager is configured
 */
export function isGTMConfigured(): boolean {
	return !!process.env.NEXT_PUBLIC_GTM_ID;
}

/**
 * Check if PostHog is configured
 */
export function isPostHogConfigured(): boolean {
	return !!(
		process.env.NEXT_PUBLIC_POSTHOG_KEY &&
		process.env.NEXT_PUBLIC_POSTHOG_HOST
	);
}

/**
 * Check if Microsoft Clarity is configured
 */
export function isClarityConfigured(): boolean {
	return !!process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
}

/**
 * Check if Firebase is fully configured
 */
export function isFirebaseConfigured(): boolean {
	const config = getAnalyticsConfig().firebase;
	return !!(
		config.apiKey &&
		config.authDomain &&
		config.projectId &&
		config.appId
	);
}

/**
 * Get environment mode
 */
export function isProduction(): boolean {
	return process.env.NODE_ENV === "production";
}

/**
 * Check if analytics should send data (production mode)
 * In development, we initialize but only log to console
 */
export function shouldSendAnalyticsData(): boolean {
	return isProduction();
}
