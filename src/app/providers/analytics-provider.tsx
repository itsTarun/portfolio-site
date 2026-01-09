"use client";

import { useEffect } from "react";
import { hasAcceptedAnalytics } from "@/lib/cookie-consent";
import { getFirebaseAnalytics } from "@/lib/firebase";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const isProduction = process.env.NODE_ENV === "production";
		const consent = hasAcceptedAnalytics();

		if (isProduction && consent) {
			initMicrosoftClarity();
			initFirebaseAnalytics();
		}
	}, []);

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
