import { Download, FileText, GraduationCap, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { toBreadcrumbItems } from "@/lib/project-breadcrumbs";
import { RESUME_DOWNLOAD_LINK_PROPS } from "@/lib/site-config";
import {
	AVAILABILITY,
	education,
	experience,
	skills,
} from "../resume/resume-data";

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
					<div className="mx-auto max-w-4xl">
						<Breadcrumb items={toBreadcrumbItems(breadcrumbs)} />
						<div className="animate-rise mb-12 grid gap-8 md:grid-cols-[1fr_300px] md:items-start">
							<div>
								<h1 className="section-title">
									Building mobile products with clarity.
								</h1>
								<p className="section-subtitle mt-4 max-w-2xl">
									Mobile developer focused on iOS and Flutter apps that feel
									calm, intuitive, and reliable.
								</p>
								<div className="mt-8 flex flex-wrap items-center gap-3">
									<Button asChild>
										<Link href="/resume">
											<FileText className="h-4 w-4" />
											View Resume
										</Link>
									</Button>
									<Button asChild variant="outline">
										<a {...RESUME_DOWNLOAD_LINK_PROPS}>
											<Download className="h-4 w-4" />
											Download PDF
										</a>
									</Button>
								</div>
							</div>
							{/* Fixed 300px column from md up, full width below. */}
							<div className="neo-panel overflow-hidden p-2">
								<Image
									src="/images/headshot.webp"
									alt="Tarun Sharma"
									width={600}
									height={600}
									priority
									sizes="(min-width: 768px) 300px, 100vw"
									className="w-full h-auto object-cover"
								/>
							</div>
						</div>

						<div
							className="animate-rise mb-12 neo-panel p-8"
							style={{ animationDelay: "120ms" }}
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
						</div>

						<ScrollReveal className="mb-12 grid gap-6 md:grid-cols-2">
							<div className="neo-panel p-6">
								<h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
									Now
								</h2>
								<p className="mt-3 leading-relaxed">{AVAILABILITY.now}</p>
							</div>
							<div className="neo-panel p-6">
								<h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
									Open to
								</h2>
								<p className="mt-3 leading-relaxed">{AVAILABILITY.openTo}</p>
								<p className="mt-2 text-sm text-muted-foreground leading-relaxed">
									{AVAILABILITY.from}
								</p>
							</div>
						</ScrollReveal>

						<ScrollReveal className="mb-12">
							<h2 className="mb-6 text-2xl font-semibold">
								Skills & Expertise
							</h2>
							<div className="grid gap-8 md:grid-cols-3">
								{skills.map((skillGroup) => (
									<div key={skillGroup.category}>
										<h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
											{skillGroup.category}
										</h3>
										<div className="flex flex-wrap gap-2">
											{skillGroup.items.map((skill) => (
												<Badge key={skill} variant="secondary">
													{skill}
												</Badge>
											))}
										</div>
									</div>
								))}
							</div>
						</ScrollReveal>

						<ScrollReveal className="mb-12">
							<h2 className="mb-6 text-2xl font-semibold">Experience</h2>
							<div className="space-y-6">
								{experience.map((exp, idx) => (
									<ScrollReveal
										key={exp.id}
										delay={idx * 60}
										className="neo-panel p-6"
									>
										<div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
											<div>
												<h3 className="text-xl font-semibold">{exp.title}</h3>
												<p className="text-muted-foreground">{exp.company}</p>
											</div>
											<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
												<span>{exp.period}</span>
												<span className="flex items-center gap-1">
													<MapPin className="h-4 w-4" />
													{exp.location}
												</span>
											</div>
										</div>
										<ul className="mb-4 list-inside list-disc space-y-2 text-muted-foreground">
											{exp.description.map((item) => (
												<li key={`${exp.id}-${item}`}>{item}</li>
											))}
										</ul>
										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech) => (
												<Badge key={tech} variant="outline">
													{tech}
												</Badge>
											))}
										</div>
									</ScrollReveal>
								))}
							</div>
						</ScrollReveal>

						<ScrollReveal className="mb-12">
							<h2 className="mb-6 text-2xl font-semibold">Education</h2>
							<div className="neo-panel p-6">
								<div className="mb-2 flex items-start gap-3">
									<div className="mt-1 flex h-10 w-10 items-center justify-center border-2 border-border">
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
							</div>
						</ScrollReveal>

						<ScrollReveal className="neo-panel p-8 text-center">
							<h2 className="mb-4 text-2xl font-semibold">
								Let&apos;s work together
							</h2>
							<p className="mb-6 text-muted-foreground">
								Interested in collaborating on a project or have a question?
							</p>
							<Button asChild>
								<Link href="/contact">Get in touch</Link>
							</Button>
						</ScrollReveal>
					</div>
				</div>
			</div>
		</>
	);
}
