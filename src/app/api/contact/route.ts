import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactFormSchema = z.object({
	name: z.string().min(2, "Name must be at least 2 characters"),
	email: z.string().email("Invalid email address"),
	subject: z.string().min(5, "Subject must be at least 5 characters"),
	message: z.string().min(10, "Message must be at least 10 characters"),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	try {
		const body = await request.json();

		const result = contactFormSchema.safeParse(body);

		if (!result.success) {
			return NextResponse.json(
				{ error: "Invalid input data", details: result.error },
				{ status: 400 },
			);
		}

		const { name, email, subject, message } = result.data;

		const { data, error } = await resend.emails.send({
			from: "Portfolio Contact <onboarding@resend.dev>",
			to: process.env.CONTACT_EMAIL || "itstarun1994@gmail.com",
			subject: `Portfolio Contact: ${subject}`,
			html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .container {
                background: #f9f9f9;
                border-radius: 8px;
                padding: 30px;
              }
              .header {
                border-bottom: 2px solid #3b82f6;
                padding-bottom: 20px;
                margin-bottom: 20px;
              }
              .header h2 {
                margin: 0;
                color: #3b82f6;
              }
              .content {
                background: white;
                padding: 20px;
                border-radius: 6px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .field {
                margin-bottom: 15px;
              }
              .label {
                font-weight: bold;
                color: #666;
                margin-bottom: 5px;
              }
              .value {
                color: #333;
                margin-bottom: 10px;
              }
              .message {
                background: #f0f9ff;
                padding: 15px;
                border-left: 4px solid #3b82f6;
                margin-top: 20px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                color: #666;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">${email}</div>
                </div>
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${subject}</div>
                </div>
                <div class="message">
                  <div class="label">Message:</div>
                  <div class="value">${message.replace(/\n/g, "<br>")}</div>
                </div>
              </div>
              <div class="footer">
                <p>This message was sent from your portfolio website at itstarun.fyi</p>
              </div>
            </div>
          </body>
        </html>
      `,
		});

		if (error) {
			console.error("Resend API error:", error);
			return NextResponse.json(
				{ error: "Failed to send email", details: error },
				{ status: 500 },
			);
		}

		return NextResponse.json(
			{ success: true, messageId: data.id },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Contact form error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
