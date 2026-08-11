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
RESEND_API_KEY=your_resend_api_key_here
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

The site's canonical host is not an env var — it is `SITE_URL` in
`src/lib/site-config.ts`, which is the single source for canonicals, the
sitemap, `robots.txt` and `llms.txt`.

## 🚀 Deployment

This project is deployed on [Vercel](https://vercel.com) and available at [itstarun.fyi](https://www.itstarun.fyi).

## 📄 License

MIT © 2026 Tarun
