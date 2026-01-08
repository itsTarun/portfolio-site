# 🎯 Complete Implementation Plan: itstarun.fyi

## Executive Summary
Building a modern, multi-page personal portfolio website with dark/light mode, motion design, and contact form using Next.js 14+ and pnpm.

---

## 🛠️ Tech Stack (Finalized)
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API
- **Theming:** next-themes
- **Icons:** Lucide React
- **Fonts:** next/font (Inter, Plus Jakarta Sans)
- **Hosting:** Vercel (free tier)
- **DNS:** Porkbun

---

## 📋 Phase-by-Phase Implementation Plan

### **Phase 1: Project Setup & Infrastructure (Days 1-2)**

#### **Day 1: Environment Setup**
**Objective:** Set up local development environment and initialize Next.js project

**Steps:**

1. **Verify Prerequisites**
   ```bash
   # Check Node.js version (18+ required)
   node --version

   # Check pnpm installation
   pnpm --version

   # If pnpm not installed:
   npm install -g pnpm
   ```

2. **Create GitHub Repository**
   - Go to GitHub → New Repository
   - Name: `portfolio-site` (or preferred name)
   - Make public (for portfolio visibility)
   - Initialize with README
   - Copy repository URL

3. **Initialize Next.js Project**
   ```bash
   # Navigate to your projects directory
   cd /Users/tarun/Downloads/projects

   # Create Next.js app with all required configurations
   pnpm create next-app@latest itstarun-fyi --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

   # Navigate into project
   cd itstarun-fyi
   ```

4. **Install Additional Dependencies**
   ```bash
   # Core packages
   pnpm install framer-motion react-hook-form zod next-themes lucide-react @hookform/resolvers

   # Development dependencies
   pnpm install -D @types/node
   ```

5. **Initialize Git Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Next.js project setup"

   # Add remote origin
   git remote add origin YOUR_GITHUB_REPO_URL
   git branch -M main
   git push -u origin main
   ```

6. **Configure Project Structure**
   ```
   Verify folder structure:
   itstarun-fyi/
   ├── public/
   ├── src/
   │   ├── app/
   │   │   ├── layout.tsx
   │   │   └── page.tsx
   │   └── styles/
   └── package.json
   ```

**Deliverables:**
- ✅ Local Next.js project running
- ✅ pnpm workspace configured
- ✅ Git repository connected to GitHub
- ✅ All dependencies installed

---

#### **Day 2: Infrastructure Setup**
**Objective:** Configure Vercel and connect domain from Porkbun

**Steps:**

1. **Create Vercel Account**
   - Go to vercel.com
   - Sign up with GitHub account
   - Verify email

2. **Import Project to Vercel**
   - Dashboard → Add New Project
   - Import `portfolio-site` repository
   - Keep default settings (Framework: Next.js)
   - Click Deploy
   - Wait for initial deployment

3. **Add Custom Domain**
   - In Vercel project → Settings → Domains
   - Add: `itstarun.fyi`
   - Select option to automatically configure DNS
   - Copy the DNS records provided

4. **Configure DNS on Porkbun**
   - Log into Porkbun account
   - Domains → itstarun.fyi → DNS Records
   - Add the records from Vercel (typically one A record or CNAME)
   - Save changes

5. **Verify Domain Connection**
   - Wait for DNS propagation (1-48 hours)
   - In Vercel, refresh domain status
   - Should show "Valid Configuration"

6. **Set Up Environment Variables**
   ```bash
   # Create .env.local in project root
   touch .env.local
   ```

   Add variables:
   ```env
   # Get these from Vercel → Settings → Environment Variables
   NEXT_PUBLIC_APP_URL=https://itstarun.fyi
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_EMAIL=itstarun1994@gmail.com
   ```

   Also add to Vercel dashboard:
   - Project Settings → Environment Variables
   - Add same variables for production

7. **Test Deployment**
   ```bash
   # Push changes to GitHub
   git add .
   git commit -m "Configure environment variables"
   git push

   # Vercel will auto-deploy
   # Check deployment status at itstarun.fyi
   ```

**Deliverables:**
- ✅ Vercel project deployed
- ✅ Domain connected to itstarun.fyi
- ✅ HTTPS working
- ✅ Environment variables configured

---

## ✅ Success Criteria

By end of Day 14, you will have:

- ✅ Modern, multi-page personal website
- ✅ Fully functional dark/light mode
- ✅ Smooth motion design and animations
- ✅ Working contact form with email notifications
- ✅ Responsive design for all devices
- ✅ Optimized performance (Lighthouse 90+)
- ✅ SEO optimized (meta tags, sitemap, robots.txt)
- ✅ Live website at https://itstarun.fyi
- ✅ HTTPS working
- ✅ Domain configured

---

## 🚀 Ready to Begin?

This comprehensive plan covers everything needed to build your personal portfolio website. When you're ready to start:

1. **Review this plan** in `portfolio-plan/IMPLEMENTATION_PLAN.md`
2. **Confirm it meets your expectations**
3. **I'll begin Day 1 implementation** once approved

**Questions before we start:**
- Are you comfortable with this 2-week timeline?
- Do you want me to begin with Day 1 implementation?
- Any specific design preferences not covered?

Once approved, we'll begin implementation! 🎯
