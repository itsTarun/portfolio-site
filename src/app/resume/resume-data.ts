// One source for the résumé facts. /resume renders them as the crawlable HTML
// artifact and /about renders the same arrays, so the two pages cannot drift.
// AVAILABILITY lives here too because /about and /contact both state it.

// Transcribed from public/resume.pdf so the HTML and the PDF say the same
// thing. TODO(tarun): the PDF also carries your phone number. It is deliberately
// NOT here — a number in crawlable HTML gets scraped in a way a PDF does not.
// Say the word if you want it on the page.

export const RESUME_HEADLINE = "Senior Mobile Engineer | Flutter & iOS";

export const RESUME_SUMMARY =
	"Senior mobile engineer with 8+ years shipping production apps, including 3+ years in Flutter and Dart. I own delivery end to end, from architecture and API integration to server-driven UI and App Store and Play Store releases, and focus on turning fast prototypes into clean, well-tested, maintainable code that respects the team's existing architecture. A deep native iOS background adds strong platform insight to my Flutter work.";

export const skills = [
	{
		category: "Flutter & Dart",
		items: [
			"Flutter",
			"Dart",
			"Provider",
			"MethodChannel / platform channels",
			"Custom widgets",
			"Animations",
		],
	},
	{
		category: "Architecture",
		items: ["MVVM", "Clean Architecture", "VIPER", "Modular design"],
	},
	{
		category: "Backend & data",
		items: [
			"REST APIs",
			"Real-time updates",
			"Push notifications (OneSignal)",
			"JSON serialization",
		],
	},
	{
		category: "Native iOS",
		items: [
			"Swift",
			"Objective-C",
			"UIKit",
			"SwiftUI",
			"WidgetKit",
			"Live Activities",
			"CarPlay",
			"RxSwift",
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
		],
	},
	{
		category: "Delivery & tools",
		items: [
			"CI/CD",
			"Unit & widget testing",
			"App Store & Play Store release",
			"Git",
			"GitLab",
			"Bitbucket",
			"Jira",
			"Linear",
			"Postman",
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
			"Building the Chargespot EV charging app in Flutter, one codebase shipping to both iOS and Android.",
			"Added native iOS Live Activities and a home-screen widget with WidgetKit, bridged into Flutter over platform channels (MethodChannel); now adding CarPlay and Android Auto for in-car charging control.",
			"Wired up OneSignal for push, PostHog for product analytics and Sentry for crash reporting.",
			"Connected REST APIs for live charging status, station maps, session history and payments, with server-driven UI so screens change without a release.",
			"Handle the App Store and Play Store releases myself and keep the crash-free rate high.",
		],
		technologies: [
			"Flutter",
			"WidgetKit",
			"Live Activities",
			"MethodChannel",
			"OneSignal",
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
			"Promoted from iOS Developer to Lead iOS Engineer in January 2020.",
			"Led the DailyObjects iOS shopping app revamp, now rated 4.7 on the App Store: API-driven personalised content, rich push notifications and dark mode.",
			"Wrote unit and UI tests to 40%+ coverage and mentored the mobile team.",
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

export const publishedApps = [
	{
		name: "DailyObjects",
		role: "Lead iOS",
		appStore: "https://apps.apple.com/app/id1141900369",
		playStore: "https://play.google.com/store/apps/details?id=com.dailyobjects",
	},
	{
		name: "EyeMyEye",
		role: "iOS, VIPER",
		appStore: "https://apps.apple.com/app/id1614376688",
		playStore:
			"https://play.google.com/store/apps/details?id=com.eyemyeye.emeapp",
	},
	{
		name: "Chargespot",
		role: "Current, Flutter",
		note: "EV-charging app, iOS & Android",
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
	now: "Building the Chargespot EV charging app in Flutter, one codebase shipping to both iOS and Android.",
	openTo:
		"Open to iOS and Flutter contract work. No agencies or generic dev-shop briefs.",
	// Phrased without a start date on purpose: the previous "from July 2026" was
	// a future date when it was written and reads as an unrevisited page now that
	// it is past. This sentence stays true without needing maintenance.
	// The \u00a0 pair keeps "IST \u00b1 3h" on one line, as the JSX &nbsp; did.
	from: "Available now for freelance and contract work. Remote or hybrid within IST\u00a0\u00b1\u00a03h.",
} as const;
