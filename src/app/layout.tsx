import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
})

const plusJakarta = Plus_Jakarta_Sans({
	variable: '--font-plus-jakarta',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Tarun - Full Stack Developer | itstarun.fyi',
	description: 'Modern personal portfolio website showcasing projects, skills, and experience. Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies.',
	keywords: [
		'Full Stack Developer',
		'React',
		'Next.js',
		'TypeScript',
		'Portfolio',
		'Web Developer',
		'Tailwind CSS',
	],
	authors: [{ name: 'Tarun' }],
	creator: 'Tarun',
	publisher: 'Tarun',
	robots: 'index, follow',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://itstarun.fyi',
		title: 'Tarun - Full Stack Developer',
		description:
			'Modern personal portfolio website showcasing projects, skills, and experience.',
		siteName: 'Tarun Portfolio',
		images: [
			{
				url: 'https://itstarun.fyi/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Tarun - Full Stack Developer Portfolio',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Tarun - Full Stack Developer',
		description:
			'Modern personal portfolio website showcasing projects, skills, and experience.',
		creator: '@itsTarun',
		site: '@itsTarun',
		images: [
			{
				url: 'https://itstarun.fyi/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Tarun - Full Stack Developer Portfolio',
			},
		],
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon.ico',
	},
	metadataBase: new URL('https://itstarun.fyi'),
	alternates: {
		canonical: 'https://itstarun.fyi',
	},
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
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
