import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { buildContactEmail } from "@/lib/contact-email";
import { isRateLimited } from "@/lib/rate-limit";
import { CONTACT_EMAIL } from "@/lib/site-config";

export async function POST(request: NextRequest) {
	try {
		// Fail loudly here rather than sending `Bearer undefined` and reporting a
		// friendly failure to a visitor whose message reached nobody.
		if (!process.env.RESEND_API_KEY) {
			console.error("[contact] RESEND_API_KEY is not set — cannot send mail");
			return NextResponse.json(
				{ error: "Failed to send. Please try again or email me directly." },
				{ status: 500 },
			);
		}

		const ip =
			request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
			"unknown";
		if (isRateLimited(ip)) {
			return NextResponse.json(
				{ error: "Too many messages. Please try again later." },
				{ status: 429 },
			);
		}

		const body = await request.json();
		const { name, email, subject, message, company } = body as {
			name: string;
			email: string;
			subject?: string;
			message: string;
			company?: string;
		};

		// Honeypot: a field hidden from humans, irresistible to form-filling bots.
		// Report success so the bot has no signal to retry against.
		if (company?.trim()) {
			console.warn("[contact] honeypot tripped, discarding submission");
			return NextResponse.json({ success: true });
		}

		if (!name?.trim() || !email?.trim() || !message?.trim()) {
			return NextResponse.json(
				{ error: "Name, email, and message are required." },
				{ status: 400 },
			);
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json(
				{ error: "Please enter a valid email address." },
				{ status: 400 },
			);
		}

		const subjectLine = subject?.trim()
			? `[itstarun.fyi] ${subject.trim()}`
			: `[itstarun.fyi] New message from ${name.trim()}`;

		const sentAt = new Date().toLocaleString("en-US", {
			timeZone: "Asia/Kolkata",
			dateStyle: "long",
			timeStyle: "short",
		});

		const { html, text } = buildContactEmail({
			name,
			email,
			subject,
			message,
			sentAt: `${sentAt} IST`,
		});

		const res = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				// Defaults to Resend's shared sender (works with no domain setup,
				// delivers to the account owner). Set CONTACT_FROM_EMAIL to
				// hello@itstarun.fyi once the domain is verified in Resend.
				from: `itstarun.fyi <${process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev"}>`,
				to: [CONTACT_EMAIL],
				reply_to: email.trim(),
				subject: subjectLine,
				html,
				text,
			}),
		});

		if (!res.ok) {
			const err = await res.json().catch(() => ({}));
			console.error("[contact] resend error:", err);
			return NextResponse.json(
				{ error: "Failed to send. Please try again or email me directly." },
				{ status: 500 },
			);
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error("[contact] unexpected error:", error);
		return NextResponse.json(
			{ error: "Failed to send. Please try again or email me directly." },
			{ status: 500 },
		);
	}
}
