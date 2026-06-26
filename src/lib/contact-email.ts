/**
 * Builds the notification email Tarun receives when someone submits the
 * contact form. Returns both an HTML and a plain-text body (text is the
 * fallback for clients that don't render HTML).
 *
 * The HTML is written for email clients, not browsers: table-based layout,
 * inline styles, web-safe font stack, and a faux offset shadow built from a
 * dark wrapper cell (box-shadow is stripped by Gmail and most clients). It
 * mirrors the site's neo-brutalist system — 2px Graphite Authority borders,
 * square corners, Engineering Blue accent, uppercase tracked labels.
 */

export interface ContactEmailInput {
	name: string;
	email: string;
	subject?: string;
	message: string;
	/** Pre-formatted, human-readable send time (computed by the caller). */
	sentAt: string;
}

const INK = "#161D27";
const BORDER = "#242C38";
const BLUE = "#1169D4";
const MUTED = "#4F5A69";
const PAGE_BG = "#F2F5F8";
const CARD = "#FFFFFF";
const FONT = "'Helvetica Neue', Helvetica, Arial, sans-serif";

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function detailRow(label: string, valueHtml: string): string {
	return `
		<tr>
			<td style="padding:0 0 16px 0;">
				<p style="margin:0 0 4px 0;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${MUTED};">${label}</p>
				<p style="margin:0;font-family:${FONT};font-size:15px;font-weight:600;color:${INK};line-height:1.4;">${valueHtml}</p>
			</td>
		</tr>`;
}

export function buildContactEmail(input: ContactEmailInput): {
	html: string;
	text: string;
} {
	const name = escapeHtml(input.name.trim());
	const email = escapeHtml(input.email.trim());
	const subject = input.subject?.trim() ? escapeHtml(input.subject.trim()) : "";
	const messageHtml = escapeHtml(input.message.trim()).replace(/\n/g, "<br />");
	const sentAt = escapeHtml(input.sentAt);

	const subjectRow = subject ? detailRow("Subject", subject) : "";

	const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="light only" />
<title>New message from ${name}</title>
</head>
<body style="margin:0;padding:0;background-color:${PAGE_BG};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">New contact-form message from ${name}${subject ? ` — ${subject}` : ""}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${PAGE_BG};padding:40px 16px;">
	<tr>
		<td align="center">
			<!-- faux offset shadow: dark wrapper, card inset 6px on right + bottom -->
			<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:${BORDER};">
				<tr>
					<td style="padding:0 6px 6px 0;">
						<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${CARD};border:2px solid ${BORDER};">
							<!-- header bar -->
							<tr>
								<td style="background-color:${BLUE};padding:20px 28px;">
									<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
										<tr>
											<td style="font-family:${FONT};font-size:16px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:#FFFFFF;">itstarun.fyi</td>
											<td align="right" style="font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#FFFFFF;">New Message</td>
										</tr>
									</table>
								</td>
							</tr>
							<!-- body -->
							<tr>
								<td style="padding:32px 28px 8px 28px;">
									<h1 style="margin:0 0 24px 0;font-family:${FONT};font-size:26px;font-weight:800;letter-spacing:-0.5px;color:${INK};line-height:1.1;">New message from ${name}</h1>
									<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
										${detailRow("From", name)}
										${detailRow("Email", `<a href="mailto:${email}" style="color:${BLUE};text-decoration:none;">${email}</a>`)}
										${subjectRow}
									</table>
								</td>
							</tr>
							<!-- message block -->
							<tr>
								<td style="padding:0 28px 28px 28px;">
									<p style="margin:0 0 8px 0;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${MUTED};">Message</p>
									<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${PAGE_BG};border:2px solid ${BORDER};">
										<tr>
											<td style="padding:18px 20px;font-family:${FONT};font-size:15px;color:${INK};line-height:1.7;">${messageHtml}</td>
										</tr>
									</table>
								</td>
							</tr>
							<!-- reply button -->
							<tr>
								<td style="padding:0 28px 32px 28px;">
									<a href="mailto:${email}${subject ? `?subject=${encodeURIComponent(`Re: ${input.subject?.trim()}`)}` : ""}" style="display:inline-block;background-color:${BLUE};border:2px solid ${BORDER};color:#FFFFFF;font-family:${FONT};font-size:14px;font-weight:700;letter-spacing:1px;text-transform:uppercase;text-decoration:none;padding:13px 28px;">Reply to ${name} &rarr;</a>
								</td>
							</tr>
							<!-- footer -->
							<tr>
								<td style="border-top:2px solid ${BORDER};padding:18px 28px;">
									<p style="margin:0;font-family:${FONT};font-size:12px;color:${MUTED};line-height:1.5;">Sent from the contact form at itstarun.fyi &middot; ${sentAt}</p>
								</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</td>
	</tr>
</table>
</body>
</html>`;

	const textLines = [
		`New message from ${input.name.trim()}`,
		"",
		`From:    ${input.name.trim()} <${input.email.trim()}>`,
	];
	if (input.subject?.trim()) {
		textLines.push(`Subject: ${input.subject.trim()}`);
	}
	textLines.push(
		"",
		input.message.trim(),
		"",
		"—",
		`Sent from the contact form at itstarun.fyi · ${input.sentAt}`,
	);
	const text = textLines.join("\n");

	return { html, text };
}
