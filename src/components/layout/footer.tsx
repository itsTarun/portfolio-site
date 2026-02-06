"use client";

import { Github, Heart, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
	{ href: "https://github.com/itsTarun", icon: Github, label: "GitHub" },
	{
		href: "https://www.linkedin.com/in/iamtarun/",
		icon: Linkedin,
		label: "LinkedIn",
	},
	{ href: "mailto:itstarun1994@gmail.com", icon: Mail, label: "Email" },
];

const footerLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

export function Footer() {
	return (
		<footer className="border-t-2 border-border bg-background">
			<div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-3">
					<div>
						<h3 className="mb-4 text-lg font-semibold uppercase tracking-[0.18em]">
							itstarun
						</h3>
						<p className="mb-6 text-sm text-muted-foreground leading-relaxed max-w-md">
							Mobile developer building thoughtful iOS and Flutter products with
							a focus on clarity, performance, and stable releases.
						</p>
						<div className="flex gap-3">
							{socialLinks.map((link) => (
								<a
									key={link.href}
									href={link.href}
									target="_blank"
									rel="noopener noreferrer"
									className="flex h-10 w-10 items-center justify-center border-2 border-border bg-background text-muted-foreground transition-colors hover:text-foreground neo-shadow-sm"
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
						</ul>
					</div>
				</div>

				<div className="mt-10 border-t-2 border-border pt-6 text-sm text-muted-foreground">
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
