"use client";

import { motion } from "framer-motion";
import {
	Calendar,
	Code2,
	GraduationCap,
	MapPin,
	Rocket,
	Sparkles,
} from "lucide-react";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.5 },
};

const containerVariants = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const skills = [
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
		icon: Code2,
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
		icon: Rocket,
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
		icon: Sparkles,
	},
];

const experience = [
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

const education = [
	{
		id: 1,
		degree: "Bachelor’s Degree, English Honours",
		school: "Delhi University",
		period: "2013 - June 2016",
		description: "Computer Software and Media Applications",
	},
];

export default function AboutPage() {
	const breadcrumbs = [
		{ name: "Home", url: "/" },
		{ name: "About", url: "/about" },
	];

	return (
		<>
			<BreadcrumbSchema breadcrumbs={breadcrumbs} />
			<div className="min-h-screen">
				<div className="container max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="mx-auto max-w-4xl"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="mb-12"
						>
							<p className="eyebrow mb-3">About</p>
							<h1 className="section-title">
								Building mobile products with clarity.
							</h1>
							<p className="section-subtitle mt-4 max-w-2xl">
								Mobile developer focused on iOS and Flutter apps that feel calm,
								intuitive, and reliable.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="mb-12 rounded-lg border border-border bg-card p-8 text-card-foreground"
						>
							<p className="mb-4 text-lg leading-relaxed">
								I&apos;m a mobile developer focused on iOS and Flutter. Since
								2018, I&apos;ve built iPhone and iPad apps and shipped multiple
								App Store releases with stability as the north star.
							</p>
							<p className="text-lg leading-relaxed text-muted-foreground">
								I love the R&amp;D phase, clear architecture, and hands-on QA. I
								partner closely with PM, QA, and UX to improve user experience,
								keep releases stable, and maintain parity across platforms.
							</p>
						</motion.div>

						<motion.div
							variants={containerVariants}
							initial="initial"
							animate="animate"
							className="mb-12"
						>
							<motion.h2
								variants={fadeInUp}
								className="mb-6 text-2xl font-semibold"
							>
								Skills & Expertise
							</motion.h2>
							<div className="grid gap-6 md:grid-cols-3">
								{skills.map((skillGroup) => (
									<motion.div
										key={skillGroup.category}
										variants={fadeInUp}
										className="rounded-lg border border-border bg-card p-6 text-card-foreground"
									>
										<div className="mb-4 flex items-center gap-3">
											<div className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
												<skillGroup.icon className="h-5 w-5 text-foreground" />
											</div>
											<h3 className="text-lg font-semibold">
												{skillGroup.category}
											</h3>
										</div>
										<div className="flex flex-wrap gap-2">
											{skillGroup.items.map((skill) => (
												<Badge key={skill} variant="secondary">
													{skill}
												</Badge>
											))}
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>

						<motion.div
							variants={containerVariants}
							initial="initial"
							animate="animate"
							className="mb-12"
						>
							<motion.h2
								variants={fadeInUp}
								className="mb-6 text-2xl font-semibold"
							>
								Experience
							</motion.h2>
							<div className="space-y-6">
								{experience.map((exp) => (
									<motion.div
										key={exp.id}
										variants={fadeInUp}
										className="rounded-lg border border-border bg-card p-6 text-card-foreground"
									>
										<div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
											<div>
												<h3 className="text-xl font-semibold">{exp.title}</h3>
												<p className="text-muted-foreground">{exp.company}</p>
											</div>
											<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
												<span className="flex items-center gap-1">
													<Calendar className="h-4 w-4" />
													{exp.period}
												</span>
												<span className="flex items-center gap-1">
													<MapPin className="h-4 w-4" />
													{exp.location}
												</span>
											</div>
										</div>
										<ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
											{exp.description.map((item, i) => (
												<li key={i}>{item}</li>
											))}
										</ul>
										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech) => (
												<Badge key={tech} variant="outline">
													{tech}
												</Badge>
											))}
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>

						<motion.div
							variants={containerVariants}
							initial="initial"
							animate="animate"
							className="mb-12"
						>
							<motion.h2
								variants={fadeInUp}
								className="mb-6 text-2xl font-semibold"
							>
								Education
							</motion.h2>
							<motion.div
								variants={fadeInUp}
								className="rounded-lg border border-border bg-card p-6 text-card-foreground"
							>
								<div className="mb-2 flex items-start gap-3">
									<div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full border border-border">
										<GraduationCap className="h-5 w-5 text-foreground" />
									</div>
									<div className="flex-1">
										<h3 className="mb-1 text-xl font-semibold">
											{education[0].degree}
										</h3>
										<p className="mb-2 text-muted-foreground">
											{education[0].school}
										</p>
										<p className="text-sm text-muted-foreground">
											{education[0].period}
										</p>
										<p className="mt-2 text-muted-foreground">
											{education[0].description}
										</p>
									</div>
								</div>
							</motion.div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
							className="rounded-lg border border-border bg-card p-8 text-center"
						>
							<h2 className="mb-4 text-2xl font-semibold">
								Let&apos;s work together
							</h2>
							<p className="mb-6 text-muted-foreground">
								Interested in collaborating on a project or have a question?
							</p>
							<a href="mailto:itstarun1994@gmail.com">
								<Badge>Get in touch</Badge>
							</a>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
}
