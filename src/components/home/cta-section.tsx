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
		<section className="py-24 md:py-32 lg:py-40">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<ScrollReveal>
					<div className="mx-auto max-w-3xl text-center">
						<h2 className="mb-6 text-5xl md:text-7xl font-bold tracking-tighter text-foreground text-balance">
							Ready to build?
						</h2>
						<p className="mb-10 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							I help teams ship thoughtful iOS and Flutter apps with confident
							UX, clean engineering, and stable release quality.
						</p>

						<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
							<Button
								asChild
								size="lg"
								className="h-14 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 text-base font-medium transition-transform active:scale-95"
							>
								<Link href="/contact">
									<Mail className="mr-2 h-5 w-5" />
									Start a Conversation
								</Link>
							</Button>
							<Button
								asChild
								variant="ghost"
								size="lg"
								className="h-14 px-8 rounded-full text-foreground hover:bg-muted text-base font-medium transition-colors"
							>
								<Link href="/projects">
									View Selected Work
									<ArrowRight className="ml-2 h-5 w-5" />
								</Link>
							</Button>
						</div>

						<div className="flex flex-wrap justify-center gap-8">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									className="text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
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
