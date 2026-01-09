import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ThemeProvider } from "@/components/theme-provider";
import { AnalyticsProvider } from "./providers/analytics-provider";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
	variable: "--font-plus-jakarta",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Tarun - Full Stack Developer | itstarun.fyi",
	description:
		"Modern personal portfolio website showcasing projects, skills, and experience. Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
	keywords: [
		"Full Stack Developer",
		"React",
		"Next.js",
		"TypeScript",
		"Portfolio",
		"Web Developer",
		"Tailwind CSS",
	],
	authors: [{ name: "Tarun" }],
	creator: "Tarun",
	publisher: "Tarun",
	robots: "index, follow",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://itstarun.fyi",
		title: "Tarun",
		description:
			"Modern personal portfolio website showcasing projects, skills, and experience.",
		siteName: "Tarun Portfolio",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Tarun Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Tarun",
		description:
			"Modern personal portfolio website showcasing projects, skills, and experience.",
		creator: "@itsTarun",
		site: "@itsTarun",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: "Tarun Portfolio",
			},
		],
	},
	icons: {
		icon: "/favicon.svg",
		shortcut: "/favicon.svg",
		apple: "/favicon.svg",
	},
	metadataBase: new URL("https://itstarun.fyi"),
	alternates: {
		canonical: "https://itstarun.fyi",
	},
	verification: {
		google: process.env.NEXT_PUBLIC_GSC_VERIFICATION_CODE,
	},
};

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
			>
				<AnalyticsProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<ScrollProgress />
						<div className="flex min-h-screen flex-col">
							<Header />
							<main className="flex-1">{children}</main>
							<Footer />
							<CookieConsent />
						</div>
					</ThemeProvider>
				</AnalyticsProvider>
			</body>
			{/* Google tag (gtag.js) */}
			{process.env.NODE_ENV === "production" &&
				process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
					<>
						<Script
							async
							src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
						/>
						<Script id="google-analytics" strategy="afterInteractive">
							{`
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
							`}
						</Script>
					</>
				)}
		</html>
	);
}
