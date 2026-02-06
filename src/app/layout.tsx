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

export const metadata: Metadata = {
	title: "Tarun Sharma - Mobile App Developer | itstarun.fyi",
	description:
		"Personal portfolio showcasing iOS and Flutter work, experience, and case studies. Mobile app developer focused on stable releases and product quality.",
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
	robots: "index, follow",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://itstarun.fyi",
		title: "Tarun",
		description:
			"Portfolio showcasing iOS and Flutter work, experience, and case studies.",
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
			"Portfolio showcasing iOS and Flutter work, experience, and case studies.",
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
	manifest: "/manifest.json",
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
			<head>
				<OrganizationSchema />
				<WebSiteSchema />
				<PersonSchema />
			</head>
			<body
				className={`${bodyFont.variable} ${displayFont.variable} font-sans antialiased`}
				style={{ colorScheme: "light dark" }}
			>
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
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
