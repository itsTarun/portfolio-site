"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	CONTACT_EMAIL,
	CONTACT_EMAIL_MAILTO,
	SOCIAL_LINKS,
} from "@/lib/site-config";

const socialLinks = [
	{
		name: "Email",
		href: CONTACT_EMAIL_MAILTO,
		icon: Mail,
		description: CONTACT_EMAIL,
	},
	{
		name: "GitHub",
		href: SOCIAL_LINKS.github,
		icon: Github,
		description: "github.com/itsTarun",
	},
	{
		name: "LinkedIn",
		href: SOCIAL_LINKS.linkedin,
		icon: Linkedin,
		description: "linkedin.com/in/iamtarun",
	},
	{
		name: "Twitter",
		href: SOCIAL_LINKS.twitter,
		icon: Twitter,
		description: "x.com/itstarun1994",
	},
];

export default function ContactPage() {
	return (
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
						<h1 className="section-title">Let&apos;s start a conversation.</h1>
						<p className="section-subtitle mt-4">
							I&apos;m always open to new projects, collaborations, or product
							consulting.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3 }}
						className="mb-8 neo-panel p-8"
					>
						<p className="mb-6 text-base text-muted-foreground leading-relaxed">
							Email is the fastest way to reach me. I typically respond within
							one business day.
						</p>
						<Button asChild size="lg">
							<a href={CONTACT_EMAIL_MAILTO}>
								<Mail className="h-4 w-4" />
								Send me an email
							</a>
						</Button>
					</motion.div>

					<div className="grid gap-4 md:grid-cols-2">
						{socialLinks.map((social, index) => (
							<motion.a
								key={social.name}
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 + index * 0.08 }}
								className="neo-panel p-5 flex items-center gap-4 transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_hsl(var(--border))]"
							>
								<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center border-2 border-border">
									<social.icon className="h-5 w-5" />
								</div>
								<div>
									<p className="text-sm font-semibold">{social.name}</p>
									<p className="text-xs text-muted-foreground">
										{social.description}
									</p>
								</div>
							</motion.a>
						))}
					</div>
				</motion.div>
			</div>
		</div>
	);
}
