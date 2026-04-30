# Orion Full Build Plan

## Summary

Build Orion in controlled phases, starting with a polished public landing site and real waitlist capture, then adding auth, then the private terminal workspace, charts, strategy generation, backtesting, AI, and persistence.

Default decisions:
- Framework: Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Lucide React.
- Hosting: Vercel.
- Database/Auth: Supabase.
- Charts: TradingView Lightweight Charts for rendering financial charts, Recharts for simple equity/drawdown charts.
- Data: mock/sample data first; later historical market data via backend data service such as yfinance/Stooq. TradingView Lightweight Charts is not itself a market data API.
- Brand direction: serious dark quant terminal with restrained constellation/Orion details as a brand layer, not a cartoon space theme.

## Build Phases

### Phase 0: Project Initialization

Initialize the app only when implementation begins.

Deliver:
- Next.js App Router project.
- TypeScript, Tailwind, shadcn/ui, Lucide.
- Base lint/build scripts.
- Shared folders for `components`, `lib`, `app`, `types`, and `public`.
- Basic env structure for Supabase and deployment.

Acceptance:
- App starts locally.
- `npm run lint` and `npm run build` pass.
- No product features yet.

### Phase 1: Public Landing Page + Waitlist

Build the complete first public website before the terminal app.

Deliver:
- `/` landing page with hero, product preview mock, CTA, feature sections, example backtest preview, research-only disclaimer, and waitlist CTA.
- Real waitlist form backed by Supabase.
- API route: `POST /api/waitlist`.
- Supabase table: `waitlist_signups`.
- Vercel-ready env variables and deployment setup.

Waitlist fields:
- `id`
- `email`
- `source`
- `created_at`
- optional `metadata`

Behavior:
- Validate email server-side.
- Prevent duplicate signup noise.
- Show success/error states.
- Do not require auth for waitlist.

Acceptance:
- Visitor understands Orion within 10 seconds.
- Email signup is stored in Supabase.
- Landing page is deployable on Vercel.
- No terminal/backend trading features yet.

### Phase 2: Public Website Completion

Finish the public-facing website before private app work.

Deliver:
- Optional `/example-backtest` public marketing/demo page using static sample results.
- Legal/disclaimer section or page.
- Reusable public layout/navigation.
- SEO metadata and Open Graph basics.
- Basic analytics-ready structure, without adding paid-plan or social features.

Acceptance:
- Public site feels complete enough to share.
- All CTAs either capture waitlist or route to public demo content.
- No misleading live-data or financial-advice claims.

### Phase 3: Supabase Auth Gate

Add authentication before building the terminal workspace.

Deliver:
- Supabase email/password or magic-link auth.
- `/login` and `/signup`.
- Auth callback route if needed.
- Protected app route group for terminal/library pages.
- Supabase `profiles` table linked to auth users.

Behavior:
- Public pages remain accessible.
- `/terminal` and `/library` require auth.
- Logged-out users are redirected to auth.
- Auth state is handled server-first where practical.

Acceptance:
- User can sign up, log in, log out.
- Protected routes cannot be accessed anonymously.
- Auth works on local and Vercel environments.

### Phase 4: Private Terminal Workspace Shell

Build the first private app screen with mock content only.

Deliver:
- `/terminal` route.
- Three-pane shell: AI terminal left, chart workspace center, collapsible inspector right.
- Mock session messages.
- Mock SPY chart placeholder.
- Inspector tabs for Code, Metrics, Research, Assumptions, History.
- No real AI, no real market data, no real backtest execution.

Acceptance:
- Workspace feels like Orion’s core product.
- Chart area remains dominant.
- Terminal is useful as a command layer.
- Inspector is collapsible.

### Phase 5: Interactive Mock Terminal

Make the private workspace feel alive using controlled mock flows.

Deliver:
- Terminal input.
- Intent routing for research, strategy, and backtest-like prompts.
- Mock responses for supported examples.
- Artifact objects in client state.
- Generated strategy preview using templates.
- Run Backtest button that loads mock result.

Supported mock strategies:
- RSI mean reversion.
- Moving average crossover.
- Breakout.
- Bollinger Band mean reversion.
- Simple basket strategy.

Acceptance:
- User can type a strategy request and see generated code/assumptions.
- User can trigger a mock backtest result.
- Mock status is clearly labeled where appropriate.

### Phase 6: Chart Integration

Replace chart placeholders with real chart components.

Deliver:
- TradingView Lightweight Charts component.
- Mock OHLCV dataset first.
- Ticker selector with `SPY` default.
- Tabs for Price, Equity, Drawdown, Trades, Backtest.
- Trade markers using mock strategy data.
- Recharts components for equity/drawdown where appropriate.

Acceptance:
- Charts render reliably.
- Ticker switching works with available mock data.
- UI does not claim data is live.

### Phase 7: Persistence for App Artifacts

Persist user-created objects after the mock workflow exists.

Deliver:
- Supabase tables for strategies, backtests, research notes, and terminal sessions.
- `/library` route for saved strategies, backtests, and research.
- Save actions from terminal/backtest flows.

Core tables:
- `strategies`
- `backtests`
- `research_notes`
- `terminal_sessions`

Acceptance:
- Logged-in user can save and revisit artifacts.
- Users only see their own saved items.
- Mock artifacts and persisted artifacts use compatible shapes.

### Phase 8: Historical Market Data

Add real historical data after the UI and persistence paths are stable.

Deliver:
- Backend API route: `GET /api/market-data`.
- Server-side historical data adapter using yfinance or Stooq.
- Normalized OHLCV response shape for chart components.
- Cache layer to avoid repeated fetches.

Behavior:
- Use delayed/historical language.
- Handle missing ticker/data errors.
- Keep mock fallback for demos/dev.

Acceptance:
- SPY and common tickers load historical daily data.
- Chart renders real historical values.
- Failures show useful errors.

### Phase 9: Real Simple Backtesting Engine

Add deterministic backtesting before AI integration.

Deliver:
- Basic Python/FastAPI service or controlled server-side engine.
- Long-only daily strategy support.
- Fixed position sizing.
- Fees/slippage assumptions.
- Metrics calculation.
- API route: `POST /api/backtest`.

Metrics:
- total return
- benchmark return
- Sharpe
- Sortino
- max drawdown
- win rate
- profit factor
- trade count
- equity curve
- drawdown curve
- trade list

Acceptance:
- Backtests calculate from data, not AI.
- Results are reproducible.
- Strategy templates map safely into executable logic.
- Raw generated code is not executed unsafely.

### Phase 10: AI Integration

Connect AI after deterministic flows exist.

Deliver:
- API route: `POST /api/chat`.
- API route: `POST /api/generate-strategy`.
- Intent classification for research, strategy, backtest, debug, and general.
- AI-generated strategy drafts constrained to safe templates.
- AI research summaries with uncertainty language.

Behavior:
- AI may draft code and summarize context.
- AI does not calculate final metrics.
- AI does not issue trade recommendations.
- Unsafe code/imports/network/filesystem behavior is rejected.

Acceptance:
- Prompting produces useful structured outputs.
- Strategy generation creates inspectable code and assumptions.
- Backtest metrics remain deterministic.

### Phase 11: Market Research Assistant

Add richer research behavior after AI and data foundations.

Deliver:
- API route: `POST /api/research`.
- Research responses with summary, price context, relevant tickers, uncertainty, next actions.
- Save research note action.
- Optional public/free news or RSS source integration later.

Acceptance:
- Research answers are useful but cautious.
- Sources or limitations are shown when relevant.
- User can turn research into a strategy idea or saved note.

### Phase 12: Polish, QA, and Demo Readiness

Stabilize the full MVP.

Deliver:
- Error states.
- Loading states.
- Empty states.
- Deployment checks.
- Basic regression tests.
- README with setup instructions.
- Clear disclaimer language throughout.

Acceptance:
- Public site, auth, terminal, charting, mock/real backtests, and library all work together.
- Vercel deployment is usable.
- No live trading, broker integrations, alerts, paid plans, social features, options flow, or portfolio management.

## Public Interfaces

Initial API routes:
- `POST /api/waitlist`
- `GET /api/market-data`
- `POST /api/generate-strategy`
- `POST /api/backtest`
- `POST /api/chat`
- `POST /api/research`

Core frontend routes:
- `/`
- `/example-backtest`
- `/login`
- `/signup`
- `/terminal`
- `/library`

Core persisted entities:
- Waitlist signup
- Profile
- Terminal session
- Strategy
- Backtest result
- Research note

## Test Plan

Every implementation phase should end with:
- `npm run lint`
- `npm run build`
- Manual smoke test in browser.
- Verify no unrelated files changed.

Critical scenarios:
- Waitlist accepts valid email and rejects invalid/duplicate emails.
- Auth protects `/terminal` and `/library`.
- Terminal mock flow creates strategy artifact.
- Backtest mock flow displays metrics, equity, drawdown, and trades.
- Historical chart renders real OHLCV once data phase is added.
- Backtest metrics are deterministic and do not depend on AI output.
- Saved artifacts are scoped to the logged-in user.

## Assumptions

- This plan avoids UI/UX-specific choices like exact colors, logo, typography tuning, animation style, and final visual composition because those are being handled in the separate UI/UX chat.
- Supabase is the source of truth for waitlist, auth, and persisted user artifacts.
- Vercel is the deployment target.
- The first implementation task should be Phase 0 plus Phase 1 only: initialize the app and build the full public landing page with Supabase waitlist.
- Terminal workspace comes after the public website and auth gate.
- Orion may use subtle constellation-inspired interaction/branding, but the product remains a serious trading research terminal.
