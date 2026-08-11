import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { OrganizationSchema } from "@/components/seo/organization-schema";
import { PersonSchema } from "@/components/seo/person-schema";
import { WebSiteSchema } from "@/components/seo/website-schema";
import { ThemeProvider } from "@/components/theme-provider";
import {
	IS_PREVIEW_DEPLOYMENT,
	OG_IMAGE_SIZE,
	SITE_NAME,
	SITE_URL,
	TWITTER_HANDLE,
} from "@/lib/site-config";

const displayFont = Bricolage_Grotesque({
	subsets: ["latin"],
	weight: ["400", "600", "700", "800"],
	variable: "--font-display",
});

const bodyFont = Instrument_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-body",
});

export function generateMetadata(): Metadata {
	const defaultSocialImage = {
		url: "/opengraph-image",
		...OG_IMAGE_SIZE,
		alt: SITE_NAME,
	};

	return {
		title: {
			template: "%s | Tarun Sharma",
			default: "Tarun Sharma - Mobile App Developer | itstarun.fyi",
		},
		description:
			"Personal portfolio showcasing iOS and Flutter work, experience, and projects. Mobile app developer focused on stable releases and product quality.",
		keywords: [
			"Mobile App Developer",
			"iOS Developer",
			"Flutter Developer",
			"Dart",
			"Portfolio",
			"App Store",
			"Firebase",
		],
		authors: [{ name: "Tarun" }],
		creator: "Tarun",
		publisher: "Tarun",
		// Only previews declare a robots meta. "index, follow" is the crawler
		// default, and emitting it here also stamped it onto /_not-found next to
		// the noindex Next injects there — two conflicting robots tags on the
		// 404. Absent tag = indexable, with no conflict to resolve.
		robots: IS_PREVIEW_DEPLOYMENT ? "noindex, nofollow" : undefined,
		// This is also the homepage's own card, so the title has to be the real
		// page title. Every route that declares its own `openGraph` replaces this
		// object wholesale — Next does not merge it key by key.
		openGraph: {
			type: "website",
			locale: "en_US",
			url: SITE_URL,
			title: "Tarun Sharma - Mobile App Developer",
			description:
				"Portfolio showcasing iOS and Flutter work, experience, and projects.",
			siteName: SITE_NAME,
			images: [defaultSocialImage],
		},
		twitter: {
			card: "summary_large_image",
			title: "Tarun Sharma - Mobile App Developer",
			description:
				"Portfolio showcasing iOS and Flutter work, experience, and projects.",
			creator: TWITTER_HANDLE,
			site: TWITTER_HANDLE,
			images: [defaultSocialImage],
		},
		icons: {
			icon: "/favicon.svg",
			shortcut: "/favicon.svg",
			// iOS does not rasterise SVG for apple-touch-icon — it ignores the tag
			// and screenshots the page for the home-screen tile instead. Must be PNG.
			apple: "/apple-touch-icon.png",
		},
		metadataBase: new URL(SITE_URL),
		manifest: "/manifest.json",
		alternates: {
			canonical: SITE_URL,
		},
		verification: {
			google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE,
		},
	};
}

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	// Browser chrome matches --background from globals.css in each scheme, so the
	// address bar stops sitting in the default grey against the page.
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f2f5f8" },
		{ media: "(prefers-color-scheme: dark)", color: "#14191f" },
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<OrganizationSchema />
				<WebSiteSchema />
				<PersonSchema />
			</head>
			<body
				className={`${bodyFont.variable} ${displayFont.variable} font-sans antialiased`}
				style={{ colorScheme: "light dark" }}
			>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:border-2 focus:border-border focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
				>
					Skip to main content
				</a>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<ScrollProgress />
					<div className="flex min-h-screen flex-col">
						<Header />
						<main id="main-content" className="flex-1">
							{children}
						</main>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
