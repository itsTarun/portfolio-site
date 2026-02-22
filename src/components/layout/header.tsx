"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about", label: "About" },
	{ href: "/projects", label: "Projects" },
	{ href: "/blog", label: "Blog" },
	{ href: "/contact", label: "Contact" },
];

export function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	const [mounted, setMounted] = React.useState(false);
	const menuButtonRef = React.useRef<HTMLButtonElement>(null);
	const firstMenuLinkRef = React.useRef<HTMLAnchorElement>(null);
	const mobileMenuId = React.useId();
	const pathname = usePathname();
	const { theme, setTheme } = useTheme();

	React.useEffect(() => {
		setMounted(true);
	}, []);

	React.useEffect(() => {
		setIsMenuOpen(false);
	}, [pathname]);

	React.useEffect(() => {
		if (!isMenuOpen) {
			return;
		}

		firstMenuLinkRef.current?.focus();

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key !== "Escape") {
				return;
			}

			setIsMenuOpen(false);
			menuButtonRef.current?.focus();
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isMenuOpen]);

	const toggleTheme = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b-2 border-border bg-background">
			<nav className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link
						href="/"
						className="text-lg font-semibold uppercase tracking-[0.22em]"
					>
						itstarun
					</Link>

					<div className="hidden md:flex md:items-center md:gap-6">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								aria-current={pathname === link.href ? "page" : undefined}
								className={`relative text-xs font-semibold uppercase tracking-[0.2em] transition-colors ${
									pathname === link.href
										? "text-foreground"
										: "text-muted-foreground hover:text-foreground"
								}`}
							>
								{link.label}
								{pathname === link.href && (
									<motion.div
										layoutId="underline"
										className="absolute -bottom-2 left-0 right-0 h-0.5 bg-foreground"
										initial={false}
										animate
									/>
								)}
							</Link>
						))}
						<Button asChild size="sm" className="ml-2">
							<Link href="/contact">Let&apos;s Talk</Link>
						</Button>
						{mounted && (
							<Button
								variant="ghost"
								size="icon"
								onClick={toggleTheme}
								aria-label="Toggle theme"
							>
								{theme === "dark" ? (
									<Sun className="h-5 w-5" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</Button>
						)}
					</div>

					<div className="flex items-center gap-2 md:hidden">
						{mounted && (
							<Button
								variant="ghost"
								size="icon"
								onClick={toggleTheme}
								aria-label="Toggle theme"
							>
								{theme === "dark" ? (
									<Sun className="h-5 w-5" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</Button>
						)}
						<Button
							variant="ghost"
							size="icon"
							ref={menuButtonRef}
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu"
							aria-expanded={isMenuOpen}
							aria-controls={mobileMenuId}
						>
							{isMenuOpen ? (
								<X className="h-5 w-5" />
							) : (
								<Menu className="h-5 w-5" />
							)}
						</Button>
					</div>
				</div>

				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							id={mobileMenuId}
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden border-t-2 border-border pb-4 pt-4"
						>
							<div className="flex flex-col space-y-2">
								{navLinks.map((link, index) => (
									<Link
										key={link.href}
										ref={index === 0 ? firstMenuLinkRef : undefined}
										href={link.href}
										aria-current={pathname === link.href ? "page" : undefined}
										className={`block px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
											pathname === link.href
												? "text-foreground"
												: "text-muted-foreground hover:text-foreground"
										}`}
										onClick={() => setIsMenuOpen(false)}
									>
										{link.label}
									</Link>
								))}
								<Button asChild size="sm" className="ml-4 mt-2 w-fit">
									<Link href="/contact" onClick={() => setIsMenuOpen(false)}>
										Let&apos;s Talk
									</Link>
								</Button>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
}
