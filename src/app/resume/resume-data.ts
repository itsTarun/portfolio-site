// One source for the résumé facts. /resume renders them as the crawlable HTML
// artifact and /about renders the same arrays, so the two pages cannot drift.
// AVAILABILITY lives here too because /about and /contact both state it.

// TODO(tarun): public/resume.pdf carries content this page does not mirror —
// the opening summary ("senior mobile engineer, 8+ years"), the fuller tool
// list (WidgetKit, CarPlay, MethodChannel, PostHog, Sentry, Dio, go_router,
// CI/CD), the App Store / Play Store links for DailyObjects and EyeMyEye, the
// iOS Developer -> Lead iOS Engineer promotion in Jan 2020, and the 4.7-star /
// 40%-coverage numbers. Confirm which of those you want on the site and they
// can be added here. Nothing was copied across unverified.

export const skills = [
	{
		category: "Mobile Platforms",
		items: [
			"iOS",
			"Android",
			"UIKit",
			"VIPER Architecture",
			"Coordinator Pattern",
			"Protocol-Oriented Programming",
		],
	},
	{
		category: "Flutter",
		items: [
			"Flutter",
			"Dart",
			"Firebase",
			"FCM",
			"Crashlytics",
			"Backend-Driven UI",
		],
	},
	{
		category: "Tools & Workflow",
		items: [
			"Git",
			"GitLab",
			"Jira",
			"Confluence",
			"Postman",
			"Unit & UI Tests",
		],
	},
];

export const experience = [
	{
		id: 1,
		title: "Mobile Developer",
		company: "Chargespot",
		location: "Delhi, India",
		period: "July 2023 - Present",
		description: [
			"Building the Chargespot mobile app and shipping new releases.",
			"Hands-on QA and release validation to keep builds stable.",
		],
		technologies: ["iOS", "Flutter", "Firebase", "App Store"],
	},
	{
		id: 2,
		title: "Software Engineer (Flutter)",
		company: "Droidsize Technologies",
		location: "Delhi, India",
		period: "October 2022 - July 2023",
		description: [
			"Developed and maintained UI components for backend-driven layouts.",
			"Created and styled product UI across new screens and features.",
			"Worked with Firebase, Git, GitLab, Jira, and Confluence.",
		],
		technologies: ["Flutter", "Firebase", "GitLab", "Jira", "Confluence"],
	},
	{
		id: 3,
		title: "iOS Developer",
		company: "Eyemyeye.com",
		location: "Gurugram, Haryana, India",
		period: "August 2021 - October 2022",
		description: [
			"Built the EyeMyEye app from the ground up and set up VIPER architecture.",
			"Shipped App Store updates with a 99% crash-free user base.",
			"Coordinated feature parity and release monitoring with cross-platform teams.",
		],
		technologies: ["iOS", "VIPER", "UIKit", "App Store"],
	},
	{
		id: 4,
		title: "Lead iOS Engineer",
		company: "DailyObjects",
		location: "New Delhi, India",
		period: "January 2020 - August 2021",
		description: [
			"Led a complete app revamp and introduced API-driven UI.",
			"Implemented rich push notifications with custom design via FCM.",
			"Delivered light and dark mode across the app.",
		],
		technologies: ["iOS", "FCM", "REST APIs", "UIKit"],
	},
	{
		id: 5,
		title: "iOS Developer",
		company: "DailyObjects",
		location: "New Delhi, India",
		period: "July 2019 - January 2020",
		description: [
			"Used Firebase Crashlytics to track bugs and improve stability.",
			"Tested API endpoints with Postman and maintained REST/JSON workflows.",
			"Built features using Coordinator pattern, protocol-oriented programming, and unit/UI tests.",
		],
		technologies: ["Crashlytics", "Postman", "REST", "UIKit", "Unit Tests"],
	},
	{
		id: 6,
		title: "iOS Developer",
		company: "Startxlabs Technologies",
		location: "India",
		period: "May 2018 - June 2019",
		description: [
			"Refined product tickets and shipped rating/share features.",
			"Crafted reusable code that teams could implement quickly.",
			"Mentored junior developers during project transitions.",
		],
		technologies: ["iOS", "Reusable Components", "Mentorship", "App Features"],
	},
];

export const education = [
	{
		id: 1,
		degree: "Bachelor’s Degree, English Honours",
		school: "Delhi University",
		period: "2013 - June 2016",
		description: "Computer Software and Media Applications",
	},
];

export const AVAILABILITY = {
	// experience[0] is the current role, said in one line.
	now: "Building the Chargespot mobile app and shipping new releases.",
	openTo:
		"Open to iOS and Flutter contract work. No agencies or generic dev-shop briefs.",
	// The \u00a0 pair keeps "IST \u00b1 3h" on one line, as the JSX &nbsp; did.
	from: "Taking freelance and contract work from July 2026. Remote or hybrid within IST\u00a0\u00b1\u00a03h.",
} as const;
