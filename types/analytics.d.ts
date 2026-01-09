declare global {
	interface Window {
		dataLayer: unknown[];
		gtag?: (
			command: string,
			targetId: string,
			config?: Record<string, unknown>,
		) => void;
		gtag?: (
			command: "event",
			eventName: string,
			eventParameters?: Record<string, string | number | boolean>,
		) => void;
	}
}

export {};
