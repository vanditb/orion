Mvp-scope  
  
## MVP Goal  
  
Build the smallest polished version of Orion that proves the core product loop:  
  
User opens Orion → views a chart → asks market questions or describes a strategy → Orion creates research/code → user runs a backtest → Orion shows charts, metrics, and saved files.  
  
The MVP should feel like a real AI trading research terminal, even if the backend is simple.  
  
## MVP Definition  
  
The MVP is:  
  
A terminal-style web app where a user can view charts, ask market questions, generate trading strategy code from plain English, run a historical backtest, and save the strategy/backtest/research as files.  
  
## V1 Must-Have Features  
  
### 1. Landing Page  
  
Build a dark, premium, terminal-style landing page.  
  
Landing page should include:  
- simple Orion logo mark and wordmark
- headline  
- subheadline  
- CTA button: Enter Terminal or similar
- secondary CTA: View Example Backtest  
- waitlist form backed by Supabase
- atmospheric hero animation using subtle constellation/data-vector motion
- product preview section showing terminal + chart + metrics after the hero
- short feature sections  
- visually present authentication entry point
- disclaimer that Orion is for research and education, not financial advice  
  
Landing page should not look like a generic AI SaaS page.  
  
### 2. Main Terminal Workspace  
  
Main app screen layout:  
  
- left panel: Orion AI terminal  
- center panel: chart / backtest workspace  
- right side: collapsible inspector drawer with icons  
- bottom panel for code and strategy build output when active
  
The terminal is the main command interface.  
  
The chart area is the visual anchor.  
When code generation or backtest output is active, that output may temporarily dominate the workspace, but normal chart views should remain chart-first.
  
The inspector stores files, metrics, research, and assumptions.  
  
### 3. Orion AI Terminal  
  
The terminal should support both market research and strategy-building in the same chat interface.  
  
User should be able to type:  
- market questions  
- strategy descriptions  
- backtest requests  
- refinement instructions  
  
Example prompts:  
- What is happening with NVDA today?  
- Build a mean reversion strategy for SPY.  
- Backtest this from 2020 to 2026.  
- Add a volatility filter.  
- Explain why the strategy failed.  
  
For MVP, the terminal can initially use mocked responses or semi-static flows before real AI integration.  
  
### 4. Trading Chart Panel  
  
The center workspace should display a chart.  
  
MVP chart requirements:  
- ticker search input  
- default ticker: SPY  
- default candlestick chart
- visible volume
- timeframe selector placeholder  
- indicator overlay placeholder  
- tabs for Price, Equity, Drawdown, Trades  
- colorful and obvious trade markers when strategy results are shown
  
The chart may use mock data at first, then connect to historical data later.  

TradingView Lightweight Charts is the preferred financial chart rendering library, but it is not a market data API. Real historical chart values should come later from a historical data source such as yfinance or Stooq. Until then, mock or sample chart data must be clearly labeled.
  
### 5. Strategy Code Generation  
  
Users should be able to describe a strategy and see generated strategy code.  
  
MVP support:  
- Python strategy file preview  
- generated filename  
- assumptions  
- simple code display  
- button: Run Backtest  
  
The generated code can be template-based first.  
Strategy generation should not automatically run a backtest. Orion should show the generated code/assumptions first and let the user explicitly choose a backtest action.
  
Supported MVP strategy types:  
- RSI mean reversion  
- moving average crossover  
- breakout strategy  
- Bollinger Band mean reversion  
- simple basket strategy  
  
Do not support every possible strategy in V1.  
  
### 6. Backtest Results  
  
MVP backtest results should include:  
- total return  
- benchmark return  
- Sharpe ratio  
- Sortino ratio  
- max drawdown  
- win rate  
- profit factor  
- number of trades  
- equity curve  
- drawdown chart  
- trade list  
  
At first, backtest results can be mocked for UI. Later, connect to a real Python backtesting engine.  
  
### 7. Right Inspector Drawer  
  
The right drawer should be collapsible and icon-based.  
  
Inspector sections:  
- Code  
- Metrics  
- Research  
- Assumptions  
- History  
  
The right drawer should not take too much chart space.  
  
### 8. Files / Artifacts  
  
Orion should save or display generated artifacts like:  
  
- `/strategies/spy_mean_reversion.py`  
- `/backtests/spy_mean_reversion_2020_2026.json`  
- `/research/nvda_market_context.md`  
- `/research/oil_sanctions_thesis.md`  
  
For MVP, these can be UI objects rather than actual file system files.  
  
### 9. Library / Profile Page  
  
A simple library page should show:  
- saved strategies  
- saved backtests  
- saved research notes  
  
This can be mock data in V1.  

### 10. Authentication and Waitlist

V1 should include Supabase-backed waitlist capture, authentication, and storage.

Public pages should remain accessible without login:
- landing page
- example backtest or public demo pages
- legal/disclaimer pages

Private app pages should require authentication once they exist:
- `/terminal`
- `/library`
- saved strategy, backtest, and research views
  
## V1 Nice-to-Have Features  
  
These are useful but not required in the first build:  
  
- real yfinance data  
- Monaco code editor  
- strategy version history  
- saved chat sessions  
- simple blog page  
  
## Later Features  
  
Do not build these in V1 unless explicitly requested:  
  
- Monte Carlo simulation  
- parameter sensitivity heatmaps  
- regime analysis  
- walk-forward testing  
- real-time data feeds  
- broker integration  
- live trading  
- options flow  
- alerts  
- social/community features  
- paid subscriptions  
- prop firm pass probability  
- portfolio management  
- advanced options strategies  
- complex derivatives engine  
  
## Explicit Non-Goals for V1  
  
V1 should NOT include:  
- live order execution  
- brokerage connection  
- automated trade recommendations  
- financial advisor behavior  
- “guaranteed profitable” claims  
- “high-conviction alert” language  
- options flow or unusual options activity  
- portfolio management  
- multi-user social features  
- mobile app  
  
## MVP Build Sequence

### Phase 0: Project Initialization

Goal:
Initialize the Next.js app and development foundation.

Build:
- Next.js App Router project
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- lint/build scripts
- basic env structure for Supabase and deployment

Do not build product features yet.

### Phase 1: Public Landing Page + Supabase Waitlist

Goal:
Create a polished, shareable landing page that communicates Orion clearly and captures real waitlist signups.

Build:
- landing page
- dark visual system
- hero section
- selected Orion logo mark/wordmark
- subtle Orion/constellation brand animation
- product preview mock
- feature sections
- CTA and waitlist form
- Supabase-backed waitlist storage
- research-only disclaimer

The landing page should be complete enough to publish before the terminal workspace exists.

### Phase 2: Public Website Completion

Goal:
Finish the public-facing site before private app work.

Build:
- public example backtest or demo page if needed
- reusable public layout/navigation
- legal/disclaimer content
- SEO and Open Graph basics
- CTA paths that either collect waitlist signups or show public demo content

Do not add paid plans, social features, broker integrations, or live trading promises.

### Phase 3: Supabase Auth Gate

Goal:
Add authentication before building the terminal workspace.

Build:
- Supabase auth
- login/signup routes
- protected app route structure
- basic user profile record

Public pages should stay public. `/terminal` and `/library` should require auth once they exist.

### Phase 4: Private Terminal Workspace Shell

Goal:
Create the terminal-style workspace layout for authenticated users.

Build:
- `/terminal` route
- left AI terminal
- center chart placeholder
- right collapsible inspector
- bottom/top navigation
- mock messages
- mock chart cards
- mock metrics

No real AI, real market data, or real backtesting yet.

### Phase 5: Interactive Mock Terminal

Goal:
Make the private workspace feel alive using controlled mock flows.

Build:
- terminal input
- mock AI responses
- intent routing for research, strategy, and backtest-like prompts
- artifact objects in client state
- sample strategy file display
- run backtest action that loads mock results

### Phase 6: Chart Integration

Goal:
Render real chart components using mock OHLCV data first.

Build:
- TradingView Lightweight Charts component
- ticker search
- price chart
- tabs for Price, Equity, Drawdown, Trades, Backtest
- entry/exit markers using mock strategy data
- Recharts components for simple equity/drawdown charts where useful

### Phase 7: Persistence and Library

Goal:
Persist user-created artifacts after mock workflows exist.

Build:
- Supabase tables for strategies, backtests, research notes, and terminal sessions
- `/library` route
- save actions from terminal/backtest flows
- user-scoped saved artifact views

### Phase 8: Historical Market Data

Goal:
Connect real historical market data.

Build:
- historical data API route
- yfinance or Stooq adapter
- normalized OHLCV response shape
- cache layer where useful
- clear delayed/historical data language

### Phase 9: Real Simple Backtesting Engine

Goal:
Run deterministic simple backtests.

Build:
- basic Python/FastAPI service or controlled server-side engine
- daily OHLCV support
- long-only strategy templates
- fixed position sizing
- fees/slippage assumptions
- metrics calculation
- equity/drawdown/trade outputs

Do not execute arbitrary AI-generated code directly.

### Phase 10: AI Integration

Goal:
Connect AI after deterministic app flows exist.

Build:
- AI-powered terminal responses
- intent classification
- constrained strategy generation
- research summaries
- safe code repair or refinement flow

AI should not calculate final backtest metrics or provide financial advice.

### Phase 11: Market Research Assistant

Goal:
Ask market questions and produce structured research responses.

Build:
- market Q&A
- price/context retrieval where available
- research note creation
- suggested next actions such as opening charts or creating testable strategy ideas

### Phase 12: Polish, QA, and Demo Readiness

Goal:
Stabilize the complete MVP.

Build:
- loading states
- empty states
- error states
- deployment checks
- setup README
- final disclaimer pass
  
## Success Criteria  
  
A successful MVP should let a user:  
  
1. Open Orion  
2. Understand the product within 10 seconds  
3. Open the terminal workspace  
4. View a stock chart  
5. Ask a market question  
6. Describe a strategy  
7. See generated code  
8. Run or view a backtest  
9. Understand the result through visuals and metrics  
10. Save or revisit the result  
  
The product should feel serious, technical, and useful, even if the first backend is limited.  
