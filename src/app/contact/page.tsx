import { Download, ExternalLink } from "lucide-react";
import { RESUME_DOWNLOAD_LINK_PROPS, RESUME_URL } from "@/lib/site-config";
import { ContactForm } from "./contact-form";

const helpList = [
	"iOS app development",
	"Flutter apps",
	"App architecture consulting",
	"Release quality & CI/CD",
	"Mobile tech advisory",
];

const resumeLinkClass =
	"inline-flex items-center gap-2 text-sm text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground";

export default function ContactPage() {
	return (
		<div className="min-h-screen">
			<div className="container max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8">
				<div className="grid gap-16 lg:grid-cols-5 lg:gap-24">
					{/* Left: context */}
					<div className="animate-rise lg:col-span-2">
						<h1 className="section-title">Let&apos;s work together.</h1>
						<p className="section-subtitle mt-4">
							Open to iOS and Flutter contract work. No agencies or generic
							dev-shop briefs.
						</p>

						<div className="mt-10">
							<span className="neo-chip">Available</span>
							<p className="mt-3 text-sm text-muted-foreground leading-relaxed">
								Taking freelance and contract work from July 2026. Remote or
								hybrid within IST&nbsp;±&nbsp;3h.
							</p>
						</div>

						<section className="mt-10">
							<h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
								What I help with
							</h2>
							<ul className="mt-4 space-y-2.5">
								{helpList.map((item) => (
									<li
										key={item}
										className="flex items-center gap-2.5 text-sm text-foreground"
									>
										<span className="h-px w-4 flex-shrink-0 bg-border" />
										{item}
									</li>
								))}
							</ul>
						</section>

						<section className="mt-10">
							<h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
								Resume
							</h2>
							<div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
								<a {...RESUME_DOWNLOAD_LINK_PROPS} className={resumeLinkClass}>
									<Download className="h-4 w-4" />
									Download PDF
								</a>
								<a
									href={RESUME_URL}
									target="_blank"
									rel="noopener noreferrer"
									className={resumeLinkClass}
								>
									<ExternalLink className="h-4 w-4" />
									View in browser
								</a>
							</div>
						</section>

						<p className="mt-10 text-xs text-muted-foreground">
							Typically responds within one business day.
						</p>
					</div>

					{/* Right: form */}
					<div
						className="animate-rise lg:col-span-3"
						style={{ animationDelay: "150ms" }}
					>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	);
}
