"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/site-config";

type FormState = "idle" | "submitting" | "success" | "error";

const socialLinks = [
	{ label: "GitHub", href: SOCIAL_LINKS.github },
	{ label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
	{ label: "Twitter / X", href: SOCIAL_LINKS.twitter },
	{ label: "Email", href: `mailto:${CONTACT_EMAIL}` },
];

const helpList = [
	"iOS app development",
	"Flutter apps",
	"App architecture consulting",
	"Release quality & CI/CD",
	"Mobile tech advisory",
];

const inputClass =
	"mt-2 w-full border-2 border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50";

export default function ContactPage() {
	const [formState, setFormState] = useState<FormState>("idle");
	const [errorMsg, setErrorMsg] = useState<string | null>(null);
	const [values, setValues] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
		if (errorMsg) setErrorMsg(null);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setFormState("submitting");
		setErrorMsg(null);

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});

			const data = await res.json();

			if (!res.ok) {
				setErrorMsg(data.error ?? "Something went wrong. Please try again.");
				setFormState("error");
				return;
			}

			setFormState("success");
		} catch {
			setErrorMsg("Network error. Please try again or email me directly.");
			setFormState("error");
		}
	};

	const handleReset = () => {
		setFormState("idle");
		setErrorMsg(null);
		setValues({ name: "", email: "", subject: "", message: "" });
	};

	const isSubmitting = formState === "submitting";

	return (
		<div className="min-h-screen">
			<div className="container max-w-6xl mx-auto px-4 py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8">
				<div className="grid gap-16 lg:grid-cols-5 lg:gap-24">
					{/* Left: context */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="lg:col-span-2"
					>
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

						<div className="mt-10">
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
								What I help with
							</p>
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
						</div>

						<p className="mt-10 text-xs text-muted-foreground">
							Typically responds within one business day.
						</p>

						<div className="mt-8 flex flex-col gap-2.5">
							{socialLinks.map((link) => (
								<a
									key={link.label}
									href={link.href}
									target={link.href.startsWith("mailto") ? undefined : "_blank"}
									rel={
										link.href.startsWith("mailto")
											? undefined
											: "noopener noreferrer"
									}
									className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
								>
									<ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
									{link.label}
								</a>
							))}
						</div>
					</motion.div>

					{/* Right: form */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.15 }}
						className="lg:col-span-3"
					>
						{formState === "success" ? (
							<div className="neo-panel p-8 md:p-10">
								<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
									Sent
								</p>
								<h2 className="mt-3 text-2xl font-semibold">
									Message received.
								</h2>
								<p className="mt-3 text-sm text-muted-foreground leading-relaxed">
									I&apos;ll get back to you within one business day. If
									it&apos;s urgent, email me directly at{" "}
									<a
										href={`mailto:${CONTACT_EMAIL}`}
										className="text-foreground underline underline-offset-4"
									>
										{CONTACT_EMAIL}
									</a>
									.
								</p>
								<Button
									variant="outline"
									size="sm"
									onClick={handleReset}
									className="mt-6"
								>
									Send another message
								</Button>
							</div>
						) : (
							<form onSubmit={handleSubmit} noValidate className="space-y-6">
								<div className="grid gap-6 sm:grid-cols-2">
									<div>
										<label
											htmlFor="name"
											className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground"
										>
											Name{" "}
											<span aria-hidden="true" className="text-destructive">
												*
											</span>
										</label>
										<input
											id="name"
											name="name"
											type="text"
											required
											autoComplete="name"
											value={values.name}
											onChange={handleChange}
											placeholder="Your name"
											className={inputClass}
											disabled={isSubmitting}
										/>
									</div>
									<div>
										<label
											htmlFor="email"
											className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground"
										>
											Email{" "}
											<span aria-hidden="true" className="text-destructive">
												*
											</span>
										</label>
										<input
											id="email"
											name="email"
											type="email"
											required
											autoComplete="email"
											value={values.email}
											onChange={handleChange}
											placeholder="you@company.com"
											className={inputClass}
											disabled={isSubmitting}
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="subject"
										className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground"
									>
										Subject{" "}
										<span className="font-normal normal-case tracking-normal text-muted-foreground">
											(optional)
										</span>
									</label>
									<input
										id="subject"
										name="subject"
										type="text"
										autoComplete="off"
										value={values.subject}
										onChange={handleChange}
										placeholder="iOS freelance — 3-month contract"
										className={inputClass}
										disabled={isSubmitting}
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground"
									>
										Message{" "}
										<span aria-hidden="true" className="text-destructive">
											*
										</span>
									</label>
									<textarea
										id="message"
										name="message"
										required
										rows={6}
										value={values.message}
										onChange={handleChange}
										placeholder="What are you building? Timeline, stack, what you need from me."
										className={`${inputClass} resize-y rounded-sm`}
										disabled={isSubmitting}
									/>
								</div>

								{errorMsg && (
									<div
										role="alert"
										className="border-2 border-destructive bg-destructive/5 px-4 py-3 text-sm text-destructive"
									>
										{errorMsg}
									</div>
								)}

								<Button
									type="submit"
									size="lg"
									disabled={isSubmitting}
									className="w-full sm:w-auto"
								>
									{isSubmitting ? "Sending…" : "Send Message"}
								</Button>
							</form>
						)}
					</motion.div>
				</div>
			</div>
		</div>
	);
}
