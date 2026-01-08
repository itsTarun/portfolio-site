"use client";

import { motion } from "framer-motion";
import { Home, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background via-background to-muted/50">
			<div className="text-center">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="mb-8"
				>
					<h1 className="mb-4 text-6xl font-bold tracking-tight text-primary sm:text-7xl md:text-8xl">
						404
					</h1>
					<p className="mb-8 text-xl font-semibold text-muted-foreground">
						Page Not Found
					</p>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
					className="mx-auto max-w-md text-lg text-muted-foreground"
				>
					Sorry, the page you&apos;re looking for doesn&apos;t exist. It might
					have been moved, deleted, or perhaps you mistyped the URL.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="flex flex-col items-center gap-4"
				>
					<Link href="/">
						<Button size="lg" className="gap-2">
							<Home className="h-4 w-4" />
							Go Home
						</Button>
					</Link>

					<Button variant="outline" size="lg" asChild>
						<Link href="/projects">
							<Search className="h-4 w-4" />
							Browse Projects
						</Link>
					</Button>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="mt-8"
				>
					<Link
						href="/"
						className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
					>
						Return to itstarun.fyi
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
