"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const experiences = [
	{
		title: "Mobile Developer",
		company: "Chargespot",
		companyUrl: "https://chargespot.app/",
		period: "Jul 2023 - Present",
		description:
			"Building the Chargespot mobile app and shipping new releases.",
		technologies: ["iOS", "Flutter", "Firebase", "App Store"],
	},
	{
		title: "Software Engineer (Flutter)",
		company: "Droidsize Technologies",
		companyUrl: "https://www.droidsize.com/",
		period: "Oct 2022 - Jul 2023",
		description:
			"Developed and maintained UI components for backend-driven layouts and built product UI with Firebase-backed workflows.",
		technologies: ["Flutter", "Firebase", "GitLab", "Jira"],
	},
	{
		title: "iOS Developer",
		company: "Eyemyeye.com",
		period: "Aug 2021 - Oct 2022",
		description:
			"Built the EyeMyEye app from the ground up, set up VIPER architecture, and shipped App Store updates with a 99% crash-free user base.",
		technologies: ["iOS", "VIPER", "UIKit", "App Store"],
	},
	{
		title: "Lead iOS Engineer",
		company: "DailyObjects",
		period: "Jan 2020 - Aug 2021",
		description:
			"Led a complete app revamp, created API-driven UI, launched rich push notifications, and delivered light/dark mode updates. Improved organic search visibility and paid ad conversion rates through SEO-optimized app store listings and targeted ASO strategies.",
		technologies: ["iOS", "FCM", "REST APIs", "UIKit", "ASO", "SEO"],
	},
	{
		title: "iOS Developer",
		company: "DailyObjects",
		period: "Jul 2019 - Jan 2020",
		description:
			"Improved stability with Crashlytics, tested APIs with Postman, and shipped features using Coordinator pattern and protocol-oriented programming.",
		technologies: ["Crashlytics", "Postman", "UIKit", "Unit Tests"],
	},
	{
		title: "iOS Developer",
		company: "Startxlabs Technologies",
		period: "May 2018 - Jun 2019",
		description:
			"Refined product tickets, shipped rating/share features, and crafted reusable components while mentoring junior developers.",
		technologies: ["iOS", "Reusable Components", "Mentorship", "App Features"],
	},
];

export function TimelineSection() {
	return (
		<section className="border-b-2 border-border py-16 md:py-20 lg:py-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal>
					<div className="mb-12">
						<p className="eyebrow mb-4">Credibility</p>
						<h2 className="section-title">Experience that ships.</h2>
						<p className="section-subtitle mt-4 max-w-2xl">
							A focused timeline of web and mobile products delivered with
							reliable engineering and clear outcomes.
						</p>
					</div>
				</ScrollReveal>

				<div className="space-y-6">
					{experiences.map((exp, idx) => (
						<ScrollReveal key={`${exp.company}-${idx}`} delay={idx * 120}>
							<motion.div
								initial={{ opacity: 0, y: 12 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								className="neo-panel p-6"
							>
								<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
									<div>
										<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
											Role
										</p>
										<h3 className="text-2xl font-semibold">{exp.title}</h3>
										{exp.companyUrl ? (
											<p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
												<a
													href={exp.companyUrl}
													target="_blank"
													rel="noopener noreferrer"
													className="hover:underline"
												>
													{exp.company}
												</a>
											</p>
										) : (
											<p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
												{exp.company}
											</p>
										)}
									</div>
									<div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
										<span className="flex h-8 w-8 items-center justify-center border-2 border-border bg-muted text-foreground">
											<Calendar className="h-4 w-4" />
										</span>
										<span className="border-2 border-border bg-background px-3 py-1 text-foreground">
											{exp.period}
										</span>
									</div>
								</div>
								<p className="mt-4 text-sm text-muted-foreground">
									{exp.description}
								</p>
								<div className="mt-4 flex flex-wrap gap-2">
									{exp.technologies.map((tech) => (
										<span
											key={tech}
											className="border-2 border-border bg-background px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
										>
											{tech}
										</span>
									))}
								</div>
							</motion.div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
