```

technical-plan

```md
# Orion Technical Plan

## Technical Goal

Build Orion as a modern full-stack web app with a polished frontend first, then add real charting, AI, strategy generation, backtesting, storage, and market research in phases.

The project should be built in small controlled passes. Do not generate the full app in one pass.

## Recommended Tech Stack

### Frontend

Use:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui for reusable UI primitives
- Lucide React for icons
- Framer Motion only for subtle transitions
- Zustand for lightweight client state if needed
- Recharts for simple equity/drawdown charts
- TradingView Lightweight Charts for financial price charts
- Monaco Editor later for code preview/editing

### Backend

Initial MVP:
- Next.js API routes for simple mock endpoints

Later backend:
- FastAPI Python service for backtesting
- pandas
- numpy
- yfinance or Stooq for historical OHLCV data
- Python strategy execution engine
- JSON-based strategy/result storage first
- Supabase later for auth/database/storage

### AI Layer

Use a low-cost or free model first.

Potential provider:
- MiniMax / minimax-m2.5:free through OpenRouter or another provider

AI should be used for:
- interpreting user requests
- classifying intent
- generating strategy code
- summarizing market context
- generating research notes
- repairing code errors when needed

AI should NOT be trusted for:
- final backtest metrics
- financial claims
- live trade decisions
- unsupervised execution
- direct investment advice

Backend code should calculate metrics deterministically.

### Data Sources

MVP:
- mock market data
- static sample strategies
- static research responses

Next:
- yfinance for historical prices
- Stooq as fallback if needed
- free RSS/news sources
- manually curated example news/context

Later:
- SEC filings
- earnings calendar
- macro data
- fundamentals
- paid market data if needed

Do not promise real-time market data unless implemented.

Use "delayed or historical market data" language.

## Initial Repo Structure After App Initialization

Codex should eventually create a structure similar to:

```text
orion/
  app/
    page.tsx
    terminal/
      page.tsx
    library/
      page.tsx
    blog/
      page.tsx
  components/
    layout/
      app-shell.tsx
      top-nav.tsx
      inspector-drawer.tsx
    terminal/
      terminal-panel.tsx
      terminal-message.tsx
      terminal-input.tsx
      command-badge.tsx
    charts/
      chart-workspace.tsx
      price-chart.tsx
      equity-curve.tsx
      drawdown-chart.tsx
    backtest/
      metric-card.tsx
      backtest-summary.tsx
      trade-table.tsx
    inspector/
      code-inspector.tsx
      metrics-inspector.tsx
      research-inspector.tsx
      assumptions-inspector.tsx
      history-inspector.tsx
    landing/
      hero.tsx
      product-preview.tsx
      feature-section.tsx
  lib/
    mock-data/
      market-data.ts
      strategies.ts
      backtests.ts
      research.ts
    utils.ts
    types.ts
  docs/
    00-product-brief.md
    01-mvp-scope.md
    02-ui-and-user-flows.md
    03-technical-plan.md
    04-agent-instructions.md
  public/
  package.json
  README.md


```
Later, if using Python:  
```

orion/
  backend/
    main.py
    requirements.txt
    ai/
      intent.py
      strategy_generation.py
      research.py
    data/
      market_data.py
      news.py
    backtest/
      engine.py
      metrics.py
      monte_carlo.py
    storage/
      strategies.py
      backtests.py
      research_notes.py


```
## Data Models  
## User  
```

type User = {
  id: string
  email?: string
  name?: string
  createdAt: string
}


```
## TerminalSession  
```

type TerminalSession = {
  id: string
  userId?: string
  title: string
  messages: TerminalMessage[]
  createdAt: string
  updatedAt: string
}


```
## TerminalMessage  
```

type TerminalMessage = {
  id: string
  role: "user" | "assistant" | "system"
  type: "research" | "strategy" | "backtest" | "debug" | "general"
  content: string
  artifacts?: Artifact[]
  createdAt: string
}


```
## Artifact  
```

type Artifact = {
  id: string
  type: "strategy_code" | "backtest_result" | "research_note" | "chart"
  title: string
  path?: string
  content?: string
  metadata?: Record<string, unknown>
}


```
## Strategy  
```

type Strategy = {
  id: string
  name: string
  description: string
  code: string
  language: "python"
  assetUniverse: string[]
  timeframe: "1d" | "1h" | "custom"
  assumptions: StrategyAssumptions
  createdAt: string
  updatedAt: string
}


```
## StrategyAssumptions  
```

type StrategyAssumptions = {
  startingCapital: number
  feesBps: number
  slippageBps: number
  positionSizing: string
  longShort: "long_only" | "short_only" | "long_short"
  benchmark: string
}


```
## BacktestResult  
```

type BacktestResult = {
  id: string
  strategyId: string
  startDate: string
  endDate: string
  benchmark: string
  metrics: BacktestMetrics
  equityCurve: EquityPoint[]
  drawdownCurve: DrawdownPoint[]
  trades: Trade[]
  createdAt: string
}


```
## BacktestMetrics  
```

type BacktestMetrics = {
  totalReturn: number
  benchmarkReturn: number
  sharpe: number
  sortino: number
  maxDrawdown: number
  winRate: number
  profitFactor: number
  tradeCount: number
  avgTradeReturn: number
  bestTrade: number
  worstTrade: number
}


```
## ResearchNote  
```

type ResearchNote = {
  id: string
  title: string
  query: string
  summary: string
  tickers: string[]
  sources?: string[]
  createdAt: string
}


```
## API Routes  
Initial Next.js API routes:  
```

/api/chat
/api/generate-strategy
/api/backtest
/api/market-data
/api/research

/api/chat

```
Handles general terminal messages.  
Input:  
```

{
  "message": "What is happening with NVDA today?",
  "sessionId": "session_123"
}


```
Output:  
```

{
  "type": "research",
  "content": "...",
  "artifacts": []
}

/api/generate-strategy

```
Generates a strategy from natural language.  
Input:  
```

{
  "prompt": "Build a mean reversion strategy for SPY using RSI and Bollinger Bands."
}


```
Output:  
```

{
  "name": "SPY RSI Bollinger Mean Reversion",
  "description": "...",
  "code": "...",
  "assumptions": {},
  "missingFields": []
}

/api/backtest

```
Runs or mocks a backtest.  
Input:  
```

{
  "strategyId": "strategy_123",
  "ticker": "SPY",
  "startDate": "2020-01-01",
  "endDate": "2026-01-01"
}


```
Output:  
```

{
  "metrics": {},
  "equityCurve": [],
  "drawdownCurve": [],
  "trades": []
}

/api/market-data

```
Returns OHLCV data.  
Input:  
```

{
  "ticker": "SPY",
  "timeframe": "1d"
}


```
Output:  
```

{
  "ticker": "SPY",
  "data": []
}

/api/research

```
Returns market research context.  
Input:  
```

{
  "query": "Which companies benefit from lower rates?"
}


```
Output:  
```

{
  "summary": "...",
  "tickers": [],
  "sources": []
}


```
## Backtesting Engine Requirements  
## V1 Engine  
Start simple.  
Support:  
* single ticker  
* daily OHLCV  
* long-only strategies  
* fixed position sizing  
* simple entry/exit conditions  
* basic fees/slippage  
Calculate:  
* total return  
* benchmark return  
* Sharpe  
* Sortino  
* max drawdown  
* win rate  
* profit factor  
* number of trades  
* equity curve  
* drawdown curve  
* trade list  
## Later Engine  
Support:  
* basket strategies  
* long/short  
* parameter sensitivity  
* Monte Carlo  
* regime analysis  
* walk-forward testing  
* intraday timeframes if data supports it  
## AI Strategy Generation Requirements  
AI should generate code but must be constrained.  
Strategy generation process:  
1. User describes strategy.  
2. AI extracts assumptions.  
3. AI asks clarifying questions if necessary.  
4. AI generates Python code.  
5. System validates code.  
6. System runs code on sample data.  
7. If error, system asks AI to repair code.  
8. User can inspect code.  
9. User runs backtest.  
Generated code should:  
* be readable  
* use pandas-style logic  
* include clear comments  
* avoid unsafe imports  
* avoid network calls  
* avoid file system writes  
* avoid executing arbitrary shell commands  
## Security and Safety  
Generated code must not:  
* run shell commands  
* access environment variables  
* make network requests  
* write arbitrary files  
* import unsafe libraries  
* execute user-provided code without validation  
For MVP, generated code can be displayed and backtests can use controlled strategy templates instead of executing raw model code.  
## Financial Safety  
Orion must not claim:  
* guaranteed profit  
* trade recommendations  
* investment advice  
* prop firm passing probability  
* certainty about future price movement  
Use:  
* research only  
* historical testing  
* possible scenarios  
* uncertainty  
* assumptions  
Add footer/disclaimer: "Orion is for research and educational purposes only. It does not provide financial advice."  
## Testing  
When Codex builds features, it should:  
* run npm run lint if available  
* run npm run build  
* fix TypeScript errors  
* avoid leaving broken imports  
* avoid placeholder files with no usage  
Later:  
* add unit tests for backtest metrics  
* test strategy parsing  
* test chart data formatting  
## Build Phases for Codex  
## Phase 1: Initialize Frontend and Landing Page  
Create Next.js app with TypeScript and Tailwind. Build landing page only. No backend functionality.  
## Phase 2: Static Terminal Workspace  
Build /terminal route. Create app shell layout. Use mock data and mock terminal messages.  
## Phase 3: Chart Workspace  
Add chart component. Use mock OHLCV data first. Add ticker selector.  
## Phase 4: Inspector Drawer  
Add code, metrics, research, assumptions, and history drawers.  
## Phase 5: Mock Strategy Generation  
Terminal input creates mock strategy artifact. Show generated code and assumptions.  
## Phase 6: Mock Backtest  
Run button displays mock backtest result with charts and metrics.  
## Phase 7: Real Market Data  
Connect historical data source.  
## Phase 8: Real Backtesting  
Implement basic backtesting engine.  
## Phase 9: AI Integration  
Connect model provider for terminal and strategy generation.  
## Phase 10: Persistence  
Add saved strategies, research notes, and backtests.  
## Development Rule  
Do not move to the next phase until the current phase builds successfully and looks clean.  
