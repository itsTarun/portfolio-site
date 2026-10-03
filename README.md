# itstarun.fyi

Modern personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- ⚡ **Next.js 15** - React framework with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎭 **Framer Motion** - Production-ready motion library
- 🌓 **Dark/Light Mode** - Theme switching with next-themes
- 📱 **Responsive Design** - Mobile-first approach
- 📧 **Contact Form** - Email integration with Resend
- ✨ **Animations** - Smooth page transitions and micro-interactions

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run production server
pnpm start
```

## 📁 Project Structure

```
src/
├── app/           # Next.js App Router pages
├── components/    # Reusable React components
├── config/        # Project metadata (PROJECTS record)
├── lib/           # Utility functions
└── types/         # TypeScript type definitions
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion 12
- **Forms:** Hand-rolled contact form (`src/app/contact/contact-form.tsx`)
- **Theming:** next-themes
- **Icons:** Lucide React

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_GSC_VERIFICATION_CODE=your_google_site_verification_code
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-2HQMCXD3WW
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_project_token
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
RESEND_API_KEY=your_resend_api_key_here
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

The site's canonical host is not an env var — it is `SITE_URL` in
`src/lib/site-config.ts`, which is the single source for canonicals, the
sitemap, `robots.txt` and `llms.txt`.

GA4 and PostHog load only after the visitor allows optional analytics. Set the
same values in Vercel's production environment before building; `NEXT_PUBLIC_`
values are included at build time. Preview deployments do not send events.
The GA4 web stream owns automatic page views and must keep enhanced measurement's
browser-history option enabled. Do not add a second manual page-view sender or
initialize Firebase Analytics with a different measurement ID.

To verify a release, open `/?analytics_debug=1`, allow optional analytics, and
use the site's links to visit About and Resume, then use browser Back. Confirm
one page view per navigation in GA4 DebugView and PostHog Activity, plus a session
in GA4 Realtime. Reject optional analytics and repeat navigation to confirm it
stops. Check the browser network and console for blocked requests. Loading scripts
alone does not verify event delivery.

## 🚀 Deployment

This project is deployed on [Vercel](https://vercel.com) and available at [itstarun.fyi](https://www.itstarun.fyi).

## 📄 License

MIT © 2026 Tarun
