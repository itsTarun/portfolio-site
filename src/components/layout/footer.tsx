"use client";

import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import {
	CONTACT_EMAIL_MAILTO,
	RESUME_DOWNLOAD_LINK_PROPS,
	SOCIAL_LINKS,
} from "@/lib/site-config";

const socialLinks = [
	{ href: SOCIAL_LINKS.github, icon: Github, label: "GitHub" },
	{
		href: SOCIAL_LINKS.linkedin,
		icon: Linkedin,
		label: "LinkedIn",
	},
	{
		href: SOCIAL_LINKS.twitter,
		icon: Twitter,
		label: "Twitter/X",
	},
	{ href: CONTACT_EMAIL_MAILTO, icon: Mail, label: "Email" },
];

const footerLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/resume", label: "Resume" },
	{ href: "/projects", label: "Projects" },
	{ href: "/contact", label: "Contact" },
	{ href: "/privacy", label: "Privacy" },
];

export function Footer() {
	return (
		<footer className="border-t border-border/50 bg-background">
			<div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-3">
					<div>
						<h3 className="mb-4 text-lg font-semibold uppercase tracking-[0.18em]">
							itstarun
						</h3>
						<p className="mb-6 text-sm text-muted-foreground leading-relaxed max-w-md">
							Mobile &amp; Full-Stack Engineer building thoughtful mobile and
							web products with a focus on clarity, performance, and stable
							releases.
						</p>
						<div className="flex gap-3">
							{socialLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-muted/20 text-muted-foreground transition-all hover:border-border hover:bg-muted/50 hover:text-foreground"
									aria-label={link.label}
								>
									<link.icon className="h-4 w-4" />
								</a>
							))}
						</div>
					</div>

					<div>
						<h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
							Quick Links
						</h4>
						<ul className="space-y-2">
							{footerLinks.map((link) => (
								<li key={link.href}>
									<Link
										href={link.href}
										className="text-sm text-muted-foreground transition-colors hover:text-foreground"
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
							Contact
						</h4>
						<ul className="space-y-2 text-sm text-muted-foreground">
							<li>itstarun1994@gmail.com</li>
							<li>
								<Link
									href="/contact"
									className="link-underline transition-colors hover:text-foreground"
								>
									Send a message
								</Link>
							</li>
							{/* The page is the primary door; the raw PDF stays as a
							    second, explicit download. */}
							<li>
								<Link
									href="/resume"
									className="link-underline transition-colors hover:text-foreground"
								>
									Read the resume
								</Link>
							</li>
							<li>
								<a
									{...RESUME_DOWNLOAD_LINK_PROPS}
									className="link-underline transition-colors hover:text-foreground"
								>
									Download resume (PDF)
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-10 border-t border-border/50 pt-6 text-sm text-muted-foreground">
					<div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
						<p>© {new Date().getFullYear()} Tarun. All rights reserved.</p>
						<span className="flex items-center gap-1">
							Built with
							<Heart
								className="h-4 w-4 fill-foreground text-foreground"
								aria-hidden="true"
							/>
							by Tarun
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
