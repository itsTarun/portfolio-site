"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/site-config";

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
	"mt-2 w-full border-2 border-border bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:cursor-not-allowed disabled:opacity-50";

export function ContactForm() {
	const [formState, setFormState] = useState<FormState>("idle");
	const [errorMsg, setErrorMsg] = useState<string | null>(null);
	const [values, setValues] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
		// Honeypot. Stays empty for anyone who can see the form; the API discards
		// any submission that fills it. See src/app/api/contact/route.ts.
		company: "",
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
		setValues({
			name: "",
			email: "",
			subject: "",
			message: "",
			company: "",
		});
	};

	const isSubmitting = formState === "submitting";

	if (formState === "success") {
		return (
			// biome-ignore lint/a11y/useSemanticElements: <output> permits only phrasing content; this panel holds a heading and button, so role="status" on the container is the correct live-region choice
			<div role="status" aria-live="polite" className="neo-panel p-8 md:p-10">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
					Sent
				</p>
				<h2 className="mt-3 text-2xl font-semibold">Message received.</h2>
				<p className="mt-3 text-sm text-muted-foreground leading-relaxed">
					I&apos;ll get back to you within one business day. If it&apos;s
					urgent, email me directly at{" "}
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
		);
	}

	return (
		<form onSubmit={handleSubmit} noValidate className="space-y-6">
			{/* Honeypot. Hidden from sighted users by position rather than
			    `display: none`, which some bots detect and skip, and taken out of
			    the a11y tree and the tab order so it never reaches a real visitor. */}
			<div className="absolute left-[-9999px]" aria-hidden="true">
				<label htmlFor="company">Company (leave this field empty)</label>
				<input
					id="company"
					name="company"
					type="text"
					tabIndex={-1}
					autoComplete="off"
					value={values.company}
					onChange={handleChange}
				/>
			</div>
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
	);
}
