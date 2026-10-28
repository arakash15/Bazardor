# 🛒 বাজার দর — BazarDor

A responsive Bengali market-price dashboard for exploring essential grocery prices, comparing estimated prices across markets, and viewing daily price movements. Built with **Next.js App Router, TypeScript, Tailwind CSS v4 and Better Auth**.

## Features

- Responsive landing page with a hero banner, category navigation and animated price ticker.
- Rising and falling price sections plus a full product catalogue.
- Product cards with Bengali currency formatting and price-change badges.
- Product detail pages with minimum, maximum and average prices and a market-by-market comparison.
- Category pages with numeric ascending/descending price sorting and loading skeletons.
- Email/password sign-up and sign-in through Better Auth, with optional Google and GitHub OAuth.
- Protected product detail and profile pages, profile-name update, and sign-out.
- Toast notifications, friendly 404 page and mobile/tablet/desktop layouts.
- Live API integration with three fallback API hosts and local sample data if all API hosts are unavailable.

## Technologies

- Next.js 15 App Router
- TypeScript
- React 19
- Tailwind CSS v4
- Better Auth
- Prisma + SQLite (local development)
- Lucide React icons
- React Hot Toast

## Getting started

**Requirements:** Node.js 20.9+ and npm.

1. Install packages:
   ```bash
   npm install
   ```
2. Create a local environment file:
   ```bash
   cp .env.example .env
   ```
   On Windows PowerShell, use `Copy-Item .env.example .env` instead.
3. Set `BETTER_AUTH_SECRET` to a unique random string of at least 32 characters. Keep `.env` private and never commit it.
4. Create/update the local database and generate Prisma Client:
   ```bash
   npx prisma db push
   npx prisma generate
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open `http://localhost:3000`.

## API

The app tries these API sources in order:

1. `https://openapi.programming-hero.com/api/bazardor`
2. `https://api.api-store.workers.dev/api/bazardor`
3. `https://api.abcz.workers.dev/api/bazardor`

It expects `/products` to return an array or a common `{ data: [...] }` / `{ data: { products: [...] } }` response. A built-in sample dataset is used when these APIs are unavailable. API field names are normalized in `lib/products.ts`.

## Authentication and social login

Email/password authentication works after the database is initialized. Google and GitHub buttons need OAuth credentials to be configured in `.env`:

- `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
- `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`

Configure each provider's callback URL as `http://localhost:3000/api/auth/callback/google` or `http://localhost:3000/api/auth/callback/github` locally, and replace the host with your deployed domain in production. If the OAuth variables are blank, social sign-in cannot complete.

## Deployment notes

Deploy on Vercel by importing the repository and setting the environment variables. **Important:** the included SQLite setup is for local development; serverless hosting does not provide a durable writable SQLite file by default. For production authentication, configure a persistent database supported by Better Auth/Prisma (for example PostgreSQL) and update the Prisma datasource/adapter to match it before relying on production sign-ups. Set `BETTER_AUTH_URL` to the deployed HTTPS URL and use a strong `BETTER_AUTH_SECRET`. Test refreshes on `/category/[slug]`, `/product/[slug]`, `/profile`, and `/profile/update` after deployment.

## Suggested Git commit plan

Make commits as each feature is completed; do not create empty or misleading commits:

1. `chore: initialize Next.js TypeScript project`
2. `style: add Tailwind v4 theme and responsive base styles`
3. `feat: add responsive navbar and price ticker`
4. `feat: build home hero and product price sections`
5. `feat: add product cards and category sorting`
6. `feat: add protected product details`
7. `feat: configure Better Auth email and social login`
8. `feat: add profile update and toast notifications`
9. `docs: write setup and deployment instructions`
10. `feat: add loading and error states for smoother UX`
11. `fix: refine homepage callouts and product discovery`
12. `docs: publish project notes for GitHub and local setup`
13. `chore: tighten environment defaults for local development`
14. `fix: improve resilience around API data and auth flows`
15. `chore: finalize project polish before GitHub publish`

## Publishing to GitHub

After the project is ready locally, initialize a repository and publish it with the standard flow:

```bash
git init
git branch -M main
git add .
git commit -m "chore: initialize Bazardor project"
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

If you are working on a private repository, confirm that your GitHub credentials are configured in the local environment before the first push. For local testing, a strong `BETTER_AUTH_SECRET` and a valid SQLite file are enough to explore the app. For production deployment, replace the SQLite database with a durable PostgreSQL setup and add OAuth credentials before exposing the site to public traffic.

## Demo checklist

Before opening the site publicly, confirm that the following are in place:

- `.env` contains a strong `BETTER_AUTH_SECRET` and any required OAuth client IDs.
- `npx prisma db push` has been run successfully in your local environment.
- The app is tested on a browser at `http://localhost:3000` before deployment.
- A production-ready database is configured if you plan to support real sign-ups in the cloud.

## Local demo flow

For a quick local launch, use these steps in order:

```bash
npm install
Copy-Item .env.example .env
npx prisma db push
npm run dev
```

This keeps the project ready for a clean demonstration without exposing credentials in source control.

## Notes

- Market prices are estimates/sample values when the API does not supply market-level data; verify prices locally before making a purchase.
- The assignment asks for at least 8 meaningful commits. The commit plan above is a guide; run the commands in your own Git repository as you implement and test the project.
