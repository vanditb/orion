# Orion

Orion is an AI trading research terminal for turning market questions and strategy ideas into charts, code, backtests, metrics, and research files.

This build currently includes Phase 0 and Phase 1:

- Next.js App Router project foundation
- public landing page
- Supabase-backed waitlist API route
- Vercel-ready environment structure

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

Create `.env.local` from `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

`SUPABASE_SERVICE_ROLE_KEY` must only be used server-side. It is used by `POST /api/waitlist` to insert waitlist signups.

## Supabase Setup

Run the SQL in `supabase/waitlist.sql` in your Supabase project.

The landing page will render without these variables, but waitlist submissions return a setup error until Supabase is configured.

## Phase Boundaries

Do not build auth, terminal workspace, library, real chart data, AI, or backtesting in this phase. Those come later in the documented build plan.
