// One source for the résumé facts. /resume renders them as the crawlable HTML
// artifact and /about renders the same arrays, so the two pages cannot drift.
// AVAILABILITY lives here too because /about and /contact both state it.

// Transcribed from public/resume.pdf so the HTML and the PDF say the same
// thing. TODO(tarun): the PDF also carries your phone number. It is deliberately
// NOT here — a number in crawlable HTML gets scraped in a way a PDF does not.
// Say the word if you want it on the page.

export const RESUME_HEADLINE =
	"Mobile & Full-Stack Engineer | Flutter, iOS & Web";

export const RESUME_SUMMARY =
	"Mobile & Full-Stack Engineer with 8+ years shipping production mobile and web systems, including 3+ years in Flutter & Dart alongside modern TypeScript/React/Next.js stacks. Proven track record leading delivery end-to-end—from system architecture, REST/real-time APIs, and server-driven UI to CI/CD automation, App Store, Google Play, and cloud production releases. Combines deep native iOS expertise (Swift, UIKit, SwiftUI, WidgetKit) with scalable cross-platform and full-stack web development to build reliable, high-performance, 99%+ crash-free digital products.";

export const skills = [
	{
		category: "Mobile Engineering",
		items: [
			"Flutter",
			"Dart",
			"Swift",
			"Objective-C",
			"SwiftUI",
			"UIKit",
			"WidgetKit",
			"Live Activities",
			"MethodChannel",
			"CarPlay",
			"Android Auto",
		],
	},
	{
		category: "Full-Stack & Web",
		items: [
			"TypeScript",
			"JavaScript",
			"Next.js",
			"React",
			"Node.js",
			"Tailwind CSS",
			"PostgreSQL",
			"Prisma",
			"Convex",
		],
	},
	{
		category: "Architecture & Patterns",
		items: [
			"Clean Architecture",
			"MVVM",
			"VIPER",
			"Modular Design",
			"Server-Driven UI (SDUI)",
			"Provider",
			"TanStack Query",
		],
	},
	{
		category: "Backend & Real-Time",
		items: [
			"REST APIs",
			"Real-time Updates",
			"WebSockets",
			"Push Notifications (OneSignal, FCM)",
			"BullMQ / Redis",
			"JSON Serialization",
		],
	},
	{
		category: "Libraries & SDKs",
		items: [
			"Provider",
			"Dio",
			"get_it",
			"go_router",
			"json_serializable",
			"OneSignal",
			"PostHog",
			"Sentry",
			"Better Auth",
		],
	},
	{
		category: "Delivery & DevOps",
		items: [
			"CI/CD",
			"Unit & Widget Testing",
			"App Store Connect",
			"Google Play Console",
			"Git / GitHub / GitLab",
			"Linear",
			"Postman",
		],
	},
];

export const experience = [
	{
		id: 1,
		title: "Mobile & Full-Stack Engineer",
		company: "Chargespot",
		location: "Delhi, India",
		period: "July 2023 - Present",
		description: [
			"Architecting and building the Chargespot EV charging platform in Flutter, shipping a unified, responsive codebase across iOS and Android.",
			"Engineered native iOS Live Activities and interactive home-screen widgets with WidgetKit, bridged into Flutter over custom MethodChannel platform channels.",
			"Developing Apple CarPlay and Android Auto integrations for in-car EV charger discovery, turn-by-turn navigation, and charging session control.",
			"Connected REST APIs for real-time station availability, interactive maps, session telemetry, and automated payments, with server-driven UI (SDUI) for zero-release updates.",
			"Instrumented production observability with OneSignal (push notifications), PostHog (product analytics), and Sentry (crash reporting and performance monitoring).",
			"Handle the App Store and Play Store releases end-to-end, maintaining a 99%+ crash-free user session benchmark.",
		],
		technologies: [
			"Flutter",
			"Dart",
			"WidgetKit",
			"Live Activities",
			"CarPlay",
			"MethodChannel",
			"OneSignal",
			"PostHog",
			"Sentry",
		],
	},
	{
		id: 2,
		title: "Software Engineer (Flutter)",
		company: "Droidsize Technologies",
		location: "Delhi, India",
		period: "October 2022 - July 2023",
		description: [
			"Engineered modular Flutter UI component libraries that supported server-driven dynamic UI layouts and remote content delivery.",
			"Styled and shipped production screens and wired backend REST endpoints with optimized state management and offline-first caching.",
			"Collaborated in sprint planning, architecture reviews, and delivery using Git, GitLab, Jira, and Linear.",
		],
		technologies: ["Flutter", "Dart", "Firebase", "GitLab", "Jira", "Linear"],
	},
	{
		id: 3,
		title: "iOS Developer",
		company: "Eyemyeye.com",
		location: "Gurugram, Haryana, India",
		period: "August 2021 - October 2022",
		description: [
			"Built the flagship EyeMyEye iOS e-commerce application from the ground up, establishing a modular VIPER architecture.",
			"Shipped multiple production App Store releases while maintaining a 99%+ crash-free user session benchmark.",
			"Coordinated closely with Product, UX, QA, and Android teams to establish UI design parity, API contracts, and release velocity.",
		],
		technologies: ["Swift", "iOS", "VIPER", "UIKit", "REST APIs", "App Store"],
	},
	{
		id: 4,
		title: "Lead iOS Engineer (promoted from iOS Developer)",
		company: "DailyObjects",
		location: "New Delhi, India",
		period: "July 2019 - August 2021",
		description: [
			"Promoted to Lead iOS Engineer in January 2020 after joining as iOS Developer in July 2019.",
			"Led the comprehensive revamp of the DailyObjects iOS shopping app (achieving a 4.7-star App Store rating): API-driven personalized discovery feeds, dynamic dark mode, and rich interactive push notifications via FCM.",
			"Enforced clean architecture using the Coordinator pattern, protocol-oriented programming, and robust RESTful networking.",
			"Expanded automated unit and UI test coverage to 40%+, established code review guidelines, and mentored junior engineers on the mobile team.",
		],
		technologies: [
			"Swift",
			"iOS",
			"UIKit",
			"Coordinator Pattern",
			"REST APIs",
			"FCM",
			"Crashlytics",
			"Unit Testing",
		],
	},
	{
		id: 5,
		title: "iOS Developer",
		company: "Startxlabs Technologies",
		location: "New Delhi, India",
		period: "May 2018 - June 2019",
		description: [
			"Developed modular, reusable iOS components, app rating prompts, and social sharing features across client applications.",
			"Mentored junior developers on Swift best practices and assisted in technical project transitions and client handoffs.",
		],
		technologies: [
			"Swift",
			"iOS",
			"UIKit",
			"REST APIs",
			"Reusable Components",
			"Mentorship",
		],
	},
];

export const publishedApps = [
	{
		name: "Chargespot",
		role: "Mobile & Real-Time EV Platform (Flutter, iOS & Android)",
		url: "https://chargespot.app/",
		note: "EV charging companion with real-time station availability, interactive maps, WidgetKit Live Activities, and CarPlay integration.",
	},
	{
		name: "Repo Press",
		role: "Full-Stack Web (Next.js, TypeScript, Convex)",
		url: "https://repo-press.vercel.app/",
		note: "Git-native MDX block editor connecting to GitHub repositories with instant rendering and zero vendor lock-in.",
	},
	{
		name: "Domain Collective",
		role: "Full-Stack Web (Next.js, PostgreSQL, BullMQ, Redis)",
		url: "https://collective.domains/",
		note: "Unified multi-registrar domain portfolio management platform with automated background sync and bulk operations.",
	},
	{
		name: "OpenTribe",
		role: "Web3 Full-Stack (Next.js, TypeScript, Polkadot)",
		url: "https://opentribe.io/",
		note: "Decentralized talent marketplace connecting developers and organizations within the Polkadot ecosystem.",
	},
	{
		name: "DailyObjects",
		role: "Lead iOS Engineer (Swift, UIKit)",
		appStore: "https://apps.apple.com/app/id1141900369",
		playStore: "https://play.google.com/store/apps/details?id=com.dailyobjects",
		note: "High-scale e-commerce shopping app (4.7-star rating on the App Store) with personalized feeds and rich push notifications.",
	},
	{
		name: "EyeMyEye",
		role: "iOS Developer (Swift, VIPER)",
		appStore: "https://apps.apple.com/app/id1614376688",
		playStore:
			"https://play.google.com/store/apps/details?id=com.eyemyeye.emeapp",
		note: "Full-featured eyewear e-commerce mobile application built from greenfield to production with 99%+ crash-free stability.",
	},
];

export const education = [
	{
		id: 1,
		degree: "Bachelor of Computer Applications (BCA)",
		school: "Punjab Technical University",
		period: "2014 - 2017",
		description:
			"Core computer science, software engineering principles, algorithms, and application development.",
	},
	{
		id: 2,
		degree: "DOEACC 'A' Level Certificate",
		school: "NIELIT / DOEACC Society",
		period: "2018",
		description:
			"Advanced Diploma in Computer Applications, object-oriented design, systems analysis, and data structures.",
	},
];

export const AVAILABILITY = {
	// experience[0] is the current role, said in one line.
	now: "Building the Chargespot EV charging platform in Flutter, shipping to both iOS and Android.",
	openTo:
		"Open to mobile and full-stack contract work. No agencies or generic dev-shop briefs.",
	// Phrased without a start date on purpose: the previous "from July 2026" was
	// a future date when it was written and reads as an unrevisited page now that
	// it is past. This sentence stays true without needing maintenance.
	// The \u00a0 pair keeps "IST \u00b1 3h" on one line, as the JSX &nbsp; did.
	from: "Available now for freelance and contract work. Remote or hybrid within IST\u00a0\u00b1\u00a03h.",
} as const;
