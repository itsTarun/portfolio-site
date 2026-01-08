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
	const pathname = usePathname();
	const { theme, setTheme } = useTheme();

	React.useEffect(() => {
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-lg">
			<nav className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link
						href="/"
						className="text-xl font-bold text-primary transition-colors hover:text-primary/80"
					>
						itstarun
					</Link>

					<div className="hidden md:flex md:items-center md:gap-8">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								// eslint-disable-next-line @typescript-eslint/no-explicit-any
								href={link.href as any}
								className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
									pathname === link.href
										? "text-primary"
										: "text-muted-foreground"
								}`}
							>
								{link.label}
								{pathname === link.href && (
									<motion.div
										layoutId="underline"
										className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
										initial={false}
										animate
									/>
								)}
							</Link>
						))}
						{mounted && (
							<Button
								variant="ghost"
								size="icon"
								onClick={toggleTheme}
								aria-label="Toggle theme"
								className="ml-4"
							>
								{theme === "dark" ? (
									<Sun className="h-4 w-4" />
								) : (
									<Moon className="h-4 w-4" />
								)}
							</Button>
						)}
					</div>

					<div className="flex items-center gap-4 md:hidden">
						{mounted && (
							<Button
								variant="ghost"
								size="icon"
								onClick={toggleTheme}
								aria-label="Toggle theme"
							>
								{theme === "dark" ? (
									<Sun className="h-4 w-4" />
								) : (
									<Moon className="h-4 w-4" />
								)}
							</Button>
						)}
						<Button
							variant="ghost"
							size="icon"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu"
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
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							className="md:hidden border-t border-border pb-4 pt-4"
						>
							<div className="flex flex-col space-y-3">
								{navLinks.map((link) => (
									<Link
										key={link.href}
										// eslint-disable-next-line @typescript-eslint/no-explicit-any
										href={link.href as any}
										className={`block px-2 py-2 text-sm font-medium transition-colors hover:text-primary hover:bg-muted rounded-lg ${
											pathname === link.href
												? "text-primary bg-muted"
												: "text-muted-foreground"
										}`}
										onClick={() => setIsMenuOpen(false)}
									>
										{link.label}
									</Link>
								))}
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</header>
	);
}
