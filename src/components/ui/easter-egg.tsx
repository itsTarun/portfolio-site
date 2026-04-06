"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Terminal, Trophy, X } from "lucide-react";
import { useEffect, useState } from "react";

const KONAMI_CODE = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"b",
	"a",
];

const CONSOLE_STYLES = {
	title:
		"color: #3b82f6; font-size: 18px; font-weight: 800; font-family: monospace;",
	subtitle: "color: #64748b; font-size: 13px; font-family: monospace;",
	code: "color: #22d3ee; font-size: 12px; font-family: monospace; background: #0f172a; padding: 4px 8px;",
	hint: "color: #94a3b8; font-size: 11px; font-style: italic; font-family: monospace;",
};

export function EasterEgg() {
	const [showModal, setShowModal] = useState(false);
	const [_sequence, setSequence] = useState<string[]>([]);

	useEffect(() => {
		// Styled console message for developers who open DevTools
		console.log("%c👋 Hey, curious developer!", CONSOLE_STYLES.title);
		console.log(
			"%cYou found Tarun's portfolio source. Nice.",
			CONSOLE_STYLES.subtitle,
		);
		console.log(
			"%c  → Built with Next.js 15 + React 19 + Tailwind CSS 4",
			CONSOLE_STYLES.code,
		);
		console.log(
			"%c  → Open source: github.com/itsTarun/portfolio-site",
			CONSOLE_STYLES.code,
		);
		console.log(
			"%c🎮 Psst... try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A",
			CONSOLE_STYLES.hint,
		);
	}, []);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			setSequence((prev) => {
				const next = [...prev, e.key].slice(-KONAMI_CODE.length);
				if (next.join(",") === KONAMI_CODE.join(",")) {
					setShowModal(true);
				}
				return next;
			});
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, []);

	// Prevent body scroll when modal is open
	useEffect(() => {
		if (showModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [showModal]);

	return (
		<AnimatePresence>
			{showModal && (
				<motion.div
					key="easter-egg-overlay"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.25 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
					onClick={() => setShowModal(false)}
				>
					<motion.div
						initial={{ scale: 0.85, y: 20 }}
						animate={{ scale: 1, y: 0 }}
						exit={{ scale: 0.85, y: 20 }}
						transition={{ type: "spring", damping: 20, stiffness: 300 }}
						onClick={(e) => e.stopPropagation()}
						className="neo-panel relative mx-4 max-w-sm w-full p-8 text-center"
					>
						<button
							type="button"
							onClick={() => setShowModal(false)}
							className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
							aria-label="Close"
						>
							<X className="h-5 w-5" />
						</button>

						<motion.div
							initial={{ rotate: -10, scale: 0.8 }}
							animate={{ rotate: 0, scale: 1 }}
							transition={{ delay: 0.1, type: "spring" }}
							className="mb-4 flex justify-center"
						>
							<div className="flex h-16 w-16 items-center justify-center border-2 border-border bg-primary text-primary-foreground neo-shadow">
								<Trophy className="h-8 w-8" />
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.15 }}
						>
							<p className="eyebrow mb-3">Achievement Unlocked</p>
							<h2 className="mb-2 text-2xl font-bold">Konami Master 🎮</h2>
							<p className="mb-6 text-sm text-muted-foreground">
								You entered ↑ ↑ ↓ ↓ ← → ← → B A — only a true dev would know
								this.
							</p>
						</motion.div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.25 }}
							className="neo-panel neo-panel-muted p-4 font-mono text-left text-xs"
						>
							<div className="flex items-center gap-2 mb-2">
								<Terminal className="h-3.5 w-3.5 text-primary" />
								<span className="text-muted-foreground">
									developer_level.swift
								</span>
							</div>
							<div className="space-y-1">
								<p>
									<span className="text-primary">let</span>{" "}
									<span className="text-foreground">level</span>{" "}
									<span className="text-muted-foreground">=</span>{" "}
									<span className="text-green-500">&quot;Legendary&quot;</span>
								</p>
								<p>
									<span className="text-primary">let</span>{" "}
									<span className="text-foreground">trait</span>{" "}
									<span className="text-muted-foreground">=</span>{" "}
									<span className="text-green-500">
										&quot;Attention to Detail&quot;
									</span>
								</p>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
