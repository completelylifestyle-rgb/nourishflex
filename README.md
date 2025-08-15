
# NourishFlex (Next.js)

A mobile‑responsive, nutrition‑first 7‑day meal planner that includes a small daily treat — built with **Next.js (App Router)**, **Tailwind**, optional **Clerk auth**, **Supabase** storage, and **Stripe** subscriptions.

> Educational use only. Not medical advice.

## Quick Start
```bash
pnpm i   # or npm i / yarn
cp .env.example .env.local
pnpm dev
```

## Configure
- **NEXT_PUBLIC_APP_URL**: `http://localhost:3000` (local) or your Vercel domain
- **Clerk** (optional): set publishable + secret keys; add <SignIn/> page
- **Supabase**: create project; set URL + keys
- **Stripe**: create Product + Price; set `STRIPE_SECRET_KEY`, `STRIPE_PRICE_ID`, `STRIPE_WEBHOOK_SECRET`

## Deploy
- Push to GitHub → **Vercel** → Import repo → set env vars → Deploy
- Add **Stripe webhook** to `/api/stripe/webhook`

## Notes
- Webhook marks users as `is_pro=true` using `client_reference_id`/`metadata.userId`. Pass your Clerk userId at checkout.
- API keys must be kept secret (server-side env).
