import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy - Tarun Portfolio",
	description: "Privacy policy for itstarun.fyi portfolio website",
};

export default function PrivacyPage() {
	return (
		<div className="container mx-auto max-w-4xl px-4 py-12">
			<h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

			<p className="mb-8 text-muted-foreground">
				Last updated: January 10, 2026
			</p>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
				<p className="text-muted-foreground">
					This Privacy Policy describes how Tarun (&quot;we&quot;,
					&quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your
					personal information when you visit our portfolio website at
					itstarun.fyi (the &quot;Website&quot;). We are committed to protecting
					your privacy and being transparent about our data practices.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">
					2. Information We Collect
				</h2>

				<h3 className="mb-2 text-lg font-medium">
					2.1 Information You Provide
				</h3>
				<ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
					<li>Contact form submissions (name, email, message)</li>
					<li>Cookies and tracking preferences</li>
				</ul>

				<h3 className="mb-2 text-lg font-medium">
					2.2 Information Automatically Collected
				</h3>
				<ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
					<li>Browser type and version</li>
					<li>Operating system</li>
					<li>Referring website</li>
					<li>Time and date of visit</li>
					<li>Pages visited on our Website</li>
					<li>Time spent on each page</li>
					<li>Device type (desktop, mobile, tablet)</li>
					<li>IP address (anonymized)</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">
					3. How We Use Your Information
				</h2>
				<ul className="list-disc space-y-2 pl-6 text-muted-foreground">
					<li>Respond to your inquiries via the contact form</li>
					<li>Analyze website traffic and user behavior</li>
					<li>Improve website performance and user experience</li>
					<li>Identify and troubleshoot technical issues</li>
					<li>Understand which content is most popular</li>
					<li>Monitor and protect against security threats</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">
					4. Analytics and Tracking Tools
				</h2>

				<h3 className="mb-2 text-lg font-medium">
					4.1 Google Analytics 4 (GA4)
				</h3>
				<p className="mb-2 text-muted-foreground">
					We use Google Analytics 4 to analyze website traffic and user
					behavior. Google Analytics collects information about how users
					interact with our Website, including:
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
					<li>Pages visited and time spent on each page</li>
					<li>Navigation paths through the Website</li>
					<li>Device and browser information</li>
					<li>Geographic location (approximate)</li>
				</ul>

				<h3 className="mb-2 text-lg font-medium">
					4.2 Google Tag Manager (GTM)
				</h3>
				<p className="mb-2 text-muted-foreground">
					Google Tag Manager manages our marketing and analytics tags. It helps
					us deploy and update tracking codes efficiently.
				</p>

				<h3 className="mb-2 text-lg font-medium">4.3 Microsoft Clarity</h3>
				<p className="mb-2 text-muted-foreground">
					We use Microsoft Clarity to understand user behavior through:
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
					<li>Heatmaps showing where users click</li>
					<li>Session recordings of user interactions</li>
					<li>User engagement metrics</li>
				</ul>

				<h3 className="mb-2 text-lg font-medium">4.4 Cookie Consent</h3>
				<p className="text-muted-foreground">
					We use a cookie consent banner that allows you to choose whether to
					accept or reject analytics cookies. Analytics tools only activate
					after you give explicit consent. You can change your preferences at
					any time using the cookie settings link in the footer.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">5. Cookies</h2>
				<p className="mb-2 text-muted-foreground">
					Cookies are small text files stored on your device when you visit our
					Website. We use the following types of cookies:
				</p>

				<h3 className="mb-2 text-lg font-medium">5.1 Essential Cookies</h3>
				<p className="mb-2 text-muted-foreground">
					These cookies are necessary for the Website to function properly. They
					enable basic functionality like page navigation and access to secure
					areas.
				</p>

				<h3 className="mb-2 text-lg font-medium">5.2 Analytics Cookies</h3>
				<p className="text-muted-foreground">
					These cookies help us understand how visitors interact with our
					Website by collecting and reporting information anonymously. They are
					only used with your explicit consent.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">
					6. Data Sharing and Disclosure
				</h2>
				<p className="mb-4 text-muted-foreground">
					We do not sell, trade, or otherwise transfer your personal information
					to third parties without your consent, except in the following
					circumstances:
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
					<li>
						To service providers who assist us in operating our Website (e.g.,
						Google, Microsoft)
					</li>
					<li>To comply with legal obligations or protect our rights</li>
					<li>To protect the security of our Website and users</li>
					<li>In connection with a sale or transfer of our business assets</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">7. Data Retention</h2>
				<p className="mb-2 text-muted-foreground">
					We retain your personal information only as long as necessary for the
					purposes outlined in this Privacy Policy:
				</p>
				<ul className="list-disc space-y-2 pl-6 text-muted-foreground">
					<li>Form submissions: Up to 6 months or until request fulfillment</li>
					<li>Analytics data: GA4 retains data for 2 months by default</li>
					<li>Clarity recordings: 30 days by default</li>
					<li>Cookies: Until you delete them or clear your browser cache</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">8. Your Privacy Rights</h2>
				<p className="mb-4 text-muted-foreground">
					You have the following rights regarding your personal information:
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
					<li>
						<strong>Access:</strong> Request a copy of your personal information
					</li>
					<li>
						<strong>Correction:</strong> Request correction of inaccurate
						information
					</li>
					<li>
						<strong>Deletion:</strong> Request deletion of your personal
						information
					</li>
					<li>
						<strong>Objection:</strong> Object to processing of your personal
						information
					</li>
					<li>
						<strong>Portability:</strong> Request transfer of your data to
						another service
					</li>
					<li>
						<strong>Withdraw Consent:</strong> Withdraw consent for analytics
						tracking at any time
					</li>
				</ul>
				<p className="text-muted-foreground">
					To exercise these rights, please contact us at itstarun1994@gmail.com
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">9. Third-Party Services</h2>
				<p className="mb-2 text-muted-foreground">
					Our Website integrates with third-party services that have their own
					privacy policies:
				</p>

				<h3 className="mb-2 text-lg font-medium">9.1 Resend (Email Service)</h3>
				<p className="mb-4 text-muted-foreground">
					Contact form submissions are processed through Resend. Please review
					their Privacy Policy at{" "}
					<a
						href="https://resend.com/privacy"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary underline"
					>
						resend.com/privacy
					</a>
				</p>

				<h3 className="mb-2 text-lg font-medium">9.2 Google Services</h3>
				<p className="mb-4 text-muted-foreground">
					Google Analytics, Google Tag Manager. Please review Google&apos;s
					Privacy Policy at{" "}
					<a
						href="https://policies.google.com/privacy"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary underline"
					>
						policies.google.com/privacy
					</a>
				</p>

				<h3 className="mb-2 text-lg font-medium">9.3 Microsoft Clarity</h3>
				<p className="text-muted-foreground">
					Please review Microsoft&apos;s Privacy Policy at{" "}
					<a
						href="https://privacy.microsoft.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-primary underline"
					>
						privacy.microsoft.com
					</a>
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">
					10. Children&apos;s Privacy
				</h2>
				<p className="text-muted-foreground">
					Our Website is not intended for children under the age of 13. We do
					not knowingly collect personal information from children under 13. If
					you are a parent or guardian and believe your child has provided us
					with personal information, please contact us immediately.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">
					11. International Data Transfers
				</h2>
				<p className="text-muted-foreground">
					Your information may be transferred to and processed in countries
					other than your country of residence. These third parties may have
					different data protection standards than your jurisdiction. We take
					appropriate measures to ensure your information is handled securely
					and in accordance with this Privacy Policy.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">12. Security</h2>
				<p className="text-muted-foreground">
					We implement appropriate technical and organizational measures to
					protect your personal information against unauthorized access,
					alteration, disclosure, or destruction. However, no method of
					transmission over the Internet or electronic storage is completely
					secure, and we cannot guarantee absolute security.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">
					13. Changes to This Privacy Policy
				</h2>
				<p className="text-muted-foreground">
					We may update this Privacy Policy from time to time. We will notify
					you of any material changes by posting the new policy on this page
					with an updated revision date. We encourage you to review this Privacy
					Policy periodically.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="mb-4 text-2xl font-semibold">14. Contact Us</h2>
				<p className="mb-2 text-muted-foreground">
					If you have any questions, concerns, or requests regarding this
					Privacy Policy or our data practices, please contact us:
				</p>
				<ul className="list-disc space-y-2 pl-6 text-muted-foreground">
					<li>Email: itstarun1994@gmail.com</li>
					<li>Website: itstarun.fyi</li>
				</ul>
			</section>
		</div>
	);
}
