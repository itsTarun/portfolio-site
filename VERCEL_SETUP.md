# 🚀 Vercel Deployment Setup Guide

## Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Sign up with your **GitHub** account (connected to `itsTarun/portfolio-site`)
4. Verify your email address

## Step 2: Import Project to Vercel

1. Go to Vercel Dashboard → **Add New Project**
2. Import the `portfolio-site` repository from GitHub
3. Configure settings (default should work):
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (will auto-adjust to `pnpm build`)
   - **Output Directory:** `.next` (default)
4. Click **Deploy**
5. Wait for initial deployment (~1-2 minutes)
6. You'll get a Vercel URL like: `portfolio-site-abc123.vercel.app`

## Step 3: Add Custom Domain

1. In Vercel project → **Settings** → **Domains**
2. Click **Add Domain**
3. Enter: `itstarun.fyi`
4. Click **Add**
5. Select option to **"Automatically configure DNS"**
6. Vercel will provide DNS records (typically one A record):
   - **Type:** A
   - **Name:** @ (or leave blank)
   - **Value:** 76.76.21.21 (or similar Vercel IP)

## Step 4: Configure DNS on Porkbun

1. Log into [Porkbun](https://porkbun.com)
2. Go to **Domain Manager** → `itstarun.fyi` → **DNS Records**
3. Add the DNS records from Vercel:
   - **Type:** A
   - **Host:** @ (or leave blank)
   - **Value:** `76.76.21.21` (copy exact value from Vercel)
   - **TTL:** 3600 (or default)
4. Click **Save**
5. Wait for DNS propagation (can take 1-48 hours, usually ~5-10 minutes)

## Step 5: Configure Environment Variables

### In Vercel Dashboard:

1. Go to Vercel project → **Settings** → **Environment Variables**
2. Add the following variables:
   ```
   NEXT_PUBLIC_APP_URL = https://itstarun.fyi
   RESEND_API_KEY = your_resend_api_key_here
   CONTACT_EMAIL = itstarun1994@gmail.com
   ```
3. Set environment:
   - Select **All Environments** (Production, Preview, Development)
4. Click **Save**
5. **Important:** Redeploy the project after adding variables

### Getting Resend API Key:

1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys → Create API Key
3. Copy the API key
4. Add it to Vercel environment variables

## Step 6: Verify Deployment

1. Visit `https://itstarun.fyi`
2. You should see the Next.js starter page
3. Check Vercel dashboard → **Domains** tab
4. Should show "Valid Configuration" ✅

## Step 7: Test Local Development with Environment Variables

Create `.env.local` in project root:

```env
NEXT_PUBLIC_APP_URL=https://itstarun.fyi
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=itstarun1994@gmail.com
```

## ✅ Checklist

- [ ] Vercel account created with GitHub
- [ ] Project imported and deployed
- [ ] Custom domain added (itstarun.fyi)
- [ ] DNS configured on Porkbun
- [ ] HTTPS working (automatic with Vercel)
- [ ] Environment variables configured in Vercel
- [ ] `.env.local` created locally
- [ ] Website accessible at https://itstarun.fyi

## 🎯 Next Steps

Once infrastructure is ready:

1. **Build website pages** (Home, About, Projects, Contact)
2. **Implement dark/light mode**
3. **Add animations with Framer Motion**
4. **Create contact form with Resend integration**
5. **Optimize for SEO and performance**

---

**Need help?** Check Vercel docs: https://vercel.com/docs/deployments/overview
