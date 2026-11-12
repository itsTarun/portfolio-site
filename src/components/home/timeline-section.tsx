import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/scroll-reveal";

const experiences = [
	{
		title: "Mobile & Full-Stack Engineer",
		company: "Chargespot",
		companyUrl: "https://chargespot.app/",
		period: "Jul 2023 - Present",
		description:
			"Architecting the Chargespot EV charging platform in Flutter—shipped live on the App Store and Google Play with real-time telemetry, Live Activities, and CarPlay.",
		technologies: [
			"Flutter",
			"iOS",
			"Android",
			"WidgetKit",
			"CarPlay",
			"REST APIs",
		],
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
		return <p className="text-sm font-medium text-foreground mt-1">{name}</p>;
	}

	return (
		<p className="text-sm font-medium mt-1">
			<a
				href={url}
				target="_blank"
				rel="noopener noreferrer"
				className="inline-flex items-center gap-1 text-foreground hover:text-muted-foreground transition-colors"
			>
				{name}
				<ExternalLink className="h-3 w-3 text-muted-foreground" />
			</a>
		</p>
	);
}

export function TimelineSection() {
	return (
		<section className="py-16 md:py-24">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
				<ScrollReveal className="mb-10">
					<h2 className="text-3xl font-semibold tracking-tight text-foreground">
						Experience
					</h2>
					<p className="mt-3 text-muted-foreground max-w-2xl text-lg">
						A focused timeline of mobile and full-stack products delivered with
						reliable engineering.
					</p>
				</ScrollReveal>

				<div className="rounded-2xl border border-border bg-background overflow-hidden">
					{experiences.map((exp, idx) => (
						<ScrollReveal
							key={`${exp.company}-${exp.period}`}
							delay={idx * 50}
							className="p-5 sm:p-6 border-b border-border last:border-b-0"
						>
							<div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
								<div>
									<h3 className="text-lg font-semibold text-foreground">
										{exp.title}
									</h3>
									<CompanyName name={exp.company} url={exp.companyUrl} />
									<p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xl">
										{exp.description}
									</p>
									<div className="mt-4 flex flex-wrap gap-2">
										{exp.technologies.map((tech) => (
											<span
												key={tech}
												className="px-2.5 py-1 bg-muted rounded-md text-xs font-mono text-muted-foreground"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
								<div className="md:text-right shrink-0">
									<span className="font-mono text-xs text-muted-foreground">
										{exp.period}
									</span>
								</div>
							</div>
						</ScrollReveal>
					))}
				</div>

				<ScrollReveal delay={300} className="mt-8 flex justify-center">
					<Link
						href="/about"
						className="inline-flex items-center px-4 py-2 text-sm font-medium text-foreground bg-muted hover:bg-muted/80 rounded-full transition-colors"
					>
						View full timeline →
					</Link>
				</ScrollReveal>
			</div>
		</section>
	);
}
