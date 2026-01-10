"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { hasAcceptedAnalytics } from "@/lib/cookie-consent";

export function GAScripts() {
	const [shouldLoad, setShouldLoad] = useState(false);
	const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
	const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

	useEffect(() => {
		// Check consent on client side
		const checkConsent = () => {
			const consent = hasAcceptedAnalytics();
			if (consent) {
				setShouldLoad(true);
			}
		};

		// Initial check
		checkConsent();

		// Listen for custom consent change event
		const handleConsentChange = () => {
			checkConsent();
		};

		window.addEventListener("analytics-consent-changed", handleConsentChange);

		// Also listen for storage changes (when consent is updated in another tab)
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === "analytics-consent") {
				checkConsent();
			}
		};

		window.addEventListener("storage", handleStorageChange);

		return () => {
			window.removeEventListener("analytics-consent-changed", handleConsentChange);
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	if (!shouldLoad) {
		return null;
	}

	return (
		<>
			{/* Google Analytics 4 */}
			{gaMeasurementId && (
				<>
					<Script
						strategy="afterInteractive"
						src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
					/>
					<Script
						id="google-analytics"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}', {
                  page_path: window.location.pathname,
                });
              `,
						}}
					/>
				</>
			)}

			{/* Google Tag Manager */}
			{gtmId && (
				<>
					<Script
						id="google-tag-manager"
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
						}}
					/>
					<noscript>
						<iframe
							src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
							height="0"
							width="0"
							style={{ display: "none", visibility: "hidden" }}
						/>
					</noscript>
				</>
			)}
		</>
	);
}
