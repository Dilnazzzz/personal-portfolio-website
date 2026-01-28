# Personal Website (Next.js + Railway)

A modern, production‑ready starter for a personal website built with:

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Dark mode via `next-themes`
- SEO defaults, sitemap, robots
- Dockerfile optimized for Railway deploys

## Getting Started

- Prereqs: Node 20 (`.nvmrc` provided), npm 10+
- Install: `npm install`
- Dev: `npm run dev` then open http://localhost:3000
- Lint: `npm run lint`
- Typecheck: `npm run typecheck`
- Build: `npm run build` and `npm start`

## Customize

- Update site metadata in `src/lib/site.ts`.
- Replace the favicon at `public/favicon.svg`.
- Edit pages under `src/app/` (e.g. `page.tsx`, `about/page.tsx`).
- Add your social links in `src/lib/site.ts`.

## Railway Deployment

This repo is prepped to deploy on Railway using Node/Nixpacks or Docker.

Option A — Nixpacks (simple):

- Push this repo to GitHub.
- Create a new Railway project, connect your repo.
- Railway will detect Node, run `npm install`, `npm run build`, and start with `npm start`.

Option B — Docker (more control):

- Ensure the Dockerfile is selected in Railway service settings.
- In the service **Variables** tab, set `PORT=3000` (avoids 502 if Railway’s injected port isn’t picked up). The app listens on `0.0.0.0` and uses `PORT` for the port.

When you’re ready to attach your custom domain:

1. In Railway, open your service → Domains → Add Domain → enter `yourdomain.com`.
2. Railway shows DNS records. In your domain registrar, add the provided A/AAAA/CNAME records.
3. Wait for DNS to propagate (usually minutes to a few hours).

## Structure

- `src/app` — App Router pages, metadata routes (`sitemap.ts`, `robots.ts`).
- `src/components` — Reusable UI (header, footer, theme toggle).
- `src/lib` — Site config and helpers.
- `public` — Static assets.

## Next Steps / Options

- Blog via MDX: add a `content/` folder and MDX pipeline (Contentlayer or `next-mdx-remote`).
- Analytics: add Plausible/Umami/GA and update `src/app/layout.tsx`.
- Contact form: add an API route with Resend/SendGrid or Formspree.
- Fonts: use `next/font` for brand fonts.

## License

You own your content. No license file included by default.
