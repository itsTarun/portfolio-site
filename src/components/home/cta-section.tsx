import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "@/components/animation/scroll-reveal";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL_MAILTO, SOCIAL_LINKS } from "@/lib/site-config";

const socialLinks = [
	{
		icon: Github,
		href: SOCIAL_LINKS.github,
		label: "GitHub",
	},
	{
		icon: Linkedin,
		href: SOCIAL_LINKS.linkedin,
		label: "LinkedIn",
	},
	{
		icon: Twitter,
		href: SOCIAL_LINKS.twitter,
		label: "Twitter/X",
	},
	{
		icon: Mail,
		href: CONTACT_EMAIL_MAILTO,
		label: "Email",
	},
];

export function CtaSection() {
	return (
		<section className="py-16 md:py-20 lg:py-24">
			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal>
					<div className="mx-auto max-w-4xl text-center neo-panel neo-panel-primary p-8 md:p-12">
						<div className="mb-8">
							<h2 className="mb-4 text-3xl font-semibold sm:text-4xl text-balance text-primary-foreground">
								Open to ambitious mobile product work with clear impact.
							</h2>
							<p className="text-base text-primary-foreground max-w-2xl mx-auto leading-relaxed">
								I help teams ship thoughtful iOS and Flutter apps with confident
								UX, clean engineering, and stable release quality.
							</p>
						</div>

						<div className="flex flex-col items-center gap-4 mb-10 sm:flex-row sm:justify-center">
							<Button
								asChild
								size="lg"
								variant="outline"
								className="gap-2 bg-background text-foreground"
							>
								<Link href="/contact">
									<Mail className="h-4 w-4" />
									Start a Conversation
									<ArrowRight className="h-4 w-4" />
								</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary"
							>
								<Link href="/projects">View Selected Work</Link>
							</Button>
						</div>

						<div className="flex flex-wrap justify-center gap-4">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									className="text-sm font-medium text-primary-foreground underline-offset-4 hover:underline"
								>
									{social.label}
								</a>
							))}
						</div>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}
