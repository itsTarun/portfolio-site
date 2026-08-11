import { Download, GraduationCap, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { toBreadcrumbItems } from "@/lib/project-breadcrumbs";
import {
	OG_IMAGE_SIZE,
	RESUME_DOWNLOAD_LINK_PROPS,
	RESUME_URL,
	SITE_NAME,
	SITE_URL,
	TWITTER_HANDLE,
} from "@/lib/site-config";
import {
	AVAILABILITY,
	education,
	experience,
	publishedApps,
	RESUME_HEADLINE,
	RESUME_SUMMARY,
	skills,
} from "./resume-data";

const canonical = `${SITE_URL}/resume`;
const description =
	"Full resume for Tarun Sharma, a mobile developer building iOS and Flutter apps since 2018: work history, skills, and education, plus the PDF to download.";
// The root title template appends " | Tarun Sharma"; social cards get no
// template, so they carry the name themselves.
const socialTitle = "Tarun Sharma Resume - iOS and Flutter Developer";

export const metadata: Metadata = {
	title: "Resume - iOS and Flutter Mobile Developer",
	description,
	alternates: {
		canonical,
	},
	openGraph: {
		type: "profile",
		locale: "en_US",
		url: canonical,
		title: socialTitle,
		description,
		siteName: SITE_NAME,
		// Same trap as /privacy: this route has no opengraph-image.tsx of its
		// own, and declaring openGraph replaces the root object outright — so
		// name the site-wide card explicitly or the page ships with no og:image.
		images: [
			{
				url: "/opengraph-image",
				...OG_IMAGE_SIZE,
				alt: SITE_NAME,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: socialTitle,
		description,
		creator: TWITTER_HANDLE,
		site: TWITTER_HANDLE,
	},
};

const sectionHeading = "mb-6 text-2xl font-semibold";

export default function ResumePage() {
	const breadcrumbs = [
		{ name: "Home", url: "/" },
		{ name: "Resume", url: "/resume" },
	];

	return (
		<>
			<BreadcrumbSchema breadcrumbs={breadcrumbs} />
			<div className="min-h-screen">
				<div className="container max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-4xl">
						<Breadcrumb items={toBreadcrumbItems(breadcrumbs)} />
						<div className="animate-rise mb-12">
							<h1 className="section-title">Tarun Sharma — Resume</h1>
							<p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
								{RESUME_HEADLINE}
							</p>
							<p className="section-subtitle mt-4 max-w-2xl">
								Mobile developer focused on iOS and Flutter apps that feel calm,
								intuitive, and reliable. The full history is below; the PDF is
								the same thing, printed.
							</p>
							<div className="mt-8 flex flex-wrap items-center gap-3">
								<Button asChild>
									<a {...RESUME_DOWNLOAD_LINK_PROPS}>
										<Download className="h-4 w-4" />
										Download PDF
									</a>
								</Button>
								<Button asChild variant="outline">
									<Link href="/contact">Get in touch</Link>
								</Button>
							</div>
						</div>

						<section
							className="animate-rise mb-12 grid gap-6 md:grid-cols-2"
							style={{ animationDelay: "120ms" }}
						>
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
						</section>

						<section className="mb-12">
							<h2 className={sectionHeading}>Summary</h2>
							<p className="max-w-3xl leading-relaxed text-muted-foreground">
								{RESUME_SUMMARY}
							</p>
						</section>

						<section className="mb-12">
							<h2 className={sectionHeading}>Skills</h2>
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
						</section>

						<section className="mb-12">
							<h2 className={sectionHeading}>Experience</h2>
							<div className="space-y-6">
								{experience.map((exp) => (
									<article key={exp.id} className="neo-panel p-6">
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
									</article>
								))}
							</div>
						</section>

						<section className="mb-12">
							<h2 className={sectionHeading}>Selected published apps</h2>
							<ul className="grid gap-4 md:grid-cols-3">
								{publishedApps.map((app) => (
									<li key={app.name} className="neo-panel p-6">
										<h3 className="font-semibold">{app.name}</h3>
										<p className="mt-1 text-sm text-muted-foreground">
											{app.role}
										</p>
										{app.note ? (
											<p className="mt-3 text-sm text-muted-foreground">
												{app.note}
											</p>
										) : (
											<div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
												{app.appStore ? (
													<a
														href={app.appStore}
														target="_blank"
														rel="noopener noreferrer"
														className="link-underline text-foreground"
													>
														App Store
													</a>
												) : null}
												{app.playStore ? (
													<a
														href={app.playStore}
														target="_blank"
														rel="noopener noreferrer"
														className="link-underline text-foreground"
													>
														Play Store
													</a>
												) : null}
											</div>
										)}
									</li>
								))}
							</ul>
						</section>

						<section className="mb-12">
							<h2 className={sectionHeading}>Education</h2>
							<div className="neo-panel p-6">
								<div className="flex items-start gap-3">
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
						</section>

						{/* The HTML above is the artifact crawlers read. The embed is a
						    convenience preview of the same resume, so it sits last. */}
						<section>
							<h2 className={sectionHeading}>PDF version</h2>
							<div className="neo-panel overflow-hidden p-2">
								<object
									data={RESUME_URL}
									type="application/pdf"
									aria-label="Resume PDF preview"
									className="block h-[75vh] min-h-[420px] w-full"
								>
									<p className="p-6 text-muted-foreground">
										This browser will not display the PDF inline.{" "}
										<a
											href={RESUME_URL}
											target="_blank"
											rel="noopener noreferrer"
											className="link-underline text-foreground"
										>
											Open the resume PDF
										</a>{" "}
										instead, or{" "}
										<a
											{...RESUME_DOWNLOAD_LINK_PROPS}
											className="link-underline text-foreground"
										>
											download it
										</a>
										.
									</p>
								</object>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
}
