"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import Link from "next/link";

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
];

interface CompanyNameProps {
	name: string;
	url?: string;
}

function CompanyName({ name, url }: CompanyNameProps) {
	if (!url) {
		return (
			<p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
				{name}
			</p>
		);
	}

	return (
		<p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				className="hover:underline"
			>
				{name}
			</a>
		</p>
	);
}

export function TimelineSection() {
	return (
		<section className="border-b-2 border-border py-16 md:py-20 lg:py-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="mb-12"
				>
					<h2 className="section-title text-balance">Experience that ships.</h2>
					<p className="section-subtitle mt-4 max-w-2xl">
						A focused timeline of web and mobile products delivered with
						reliable engineering and clear outcomes.
					</p>
				</motion.div>

				<div className="space-y-6">
					{experiences.map((exp, idx) => (
						<motion.div
							key={`${exp.company}-${exp.period}`}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: idx * 0.08 }}
							className="neo-panel p-6"
						>
							<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
								<div>
									<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
										Role
									</p>
									<h3 className="text-2xl font-semibold">{exp.title}</h3>
									<CompanyName name={exp.company} url={exp.companyUrl} />
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
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.3 }}
					className="mt-8"
				>
					<Link
						href="/about"
						className="inline-flex items-center border-2 border-border bg-background px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-all hover:text-foreground hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_hsl(var(--border))]"
					>
						Full timeline →
					</Link>
				</motion.div>
			</div>
		</section>
	);
}
