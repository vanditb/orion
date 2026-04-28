# Orion UI and User Flows

## Design Direction

Orion should feel like a mix of:

- TradingView-style chart workspace
- Bloomberg Terminal-style market research density
- Claude Code / Codex CLI-style AI command layer
- strategy builder and backtesting environment
- serious dark quant research workspace

The target feel is between an institutional terminal, a practical trading tool, and a coder workspace. Orion should be dense enough for advanced users and clear enough for beginners who want to ask market questions.

Orion should not feel like:

- a generic AI SaaS app
- a colorful AI wrapper
- a consumer finance app
- a meme trading platform
- an overly rounded bubbly chatbot
- a cartoon or literal space app
- a copy of Astral or any other visual reference

The inspiration screenshots are mood and quality references only. Do not copy branding, layout details, exact animations, text, or assets directly.

## Brand Identity

The Orion name should be a strong first-viewport brand signal. The identity should combine finance, data, and subtle astronomical cues without becoming decorative space art. Constellation-inspired details are allowed when they feel like data paths, signal maps, or premium brand motion; they should never overpower charts, terminal interaction, or financial seriousness.

Selected logo direction:

- Use the simple connected-node mark in `docs/orion-logo-mark.svg` as the current logo reference.
- The mark should read as a data path, constellation fragment, and quantitative signal.
- Keep it simple enough to work as an app icon, nav mark, favicon, and terminal header symbol.
- Pair the mark with an uppercase or near-uppercase `ORION` wordmark.
- Avoid literal stars, shooting stars, planets, rockets, or complex constellations.
- Do not copy Astral's star shape, shooting-star motif, or exact indigo-violet aura treatment.

Brand language:

- Use uppercase terminal labels for interface chrome and status text.
- Let the logo, dark indigo/black palette, chart surfaces, and CLI motion carry the brand.
- Keep astronomical cues abstract: nodes, vectors, grid intersections, signal paths, orbital arcs, and faint coordinate systems.

## Visual Style

### Theme

Use a dark terminal-like theme that is blackish and dark indigo-toned, not pure flat black everywhere.

Recommended palette:

- Primary background: `#050A12` or `#07111F`
- Secondary surface: `#0B1626`
- Raised panel: `#101B2D`
- Border: `#1D2B42`
- Muted border: `#142033`
- Primary text: `#E6F0FF`
- Secondary text: `#9BAEC8`
- Muted text: `#63738C`
- Primary accent: indigo-violet aura, around `#5865F2`
- Secondary accent: soft aura lavender, around `#8EA2FF`
- Tertiary accent: cool cyan-violet highlight, around `#A5B4FC`
- Success/trade gain: cool green, around `#2DD4BF`
- Loss/drawdown: restrained red, around `#F87171`

Avoid warm palettes. Do not use orange, tan, beige, brown, or warm gold as dominant colors. Color should improve scanability, not make the product playful.

Use dark backgrounds, thin borders, subtle glows, and compact panels. Glows should be rare and tied to active focus, live cursor states, selected tabs, or the logo.

### Typography

Use:

- Geist Sans or Inter for general UI text
- Geist Mono, JetBrains Mono, or a similar modern monospace for terminal, code, metrics, filenames, logs, labels, and numeric data

The interface should be monospace-heavy, especially in panels, labels, metrics, and terminal output. Longer explanatory copy can use the sans font for readability, but it should still feel technical and restrained.

The landing headline should feel polished and terminal-adjacent. It should not look like a generic marketing font or an old-school hacker terminal.

### UI Feel

Use:

- thin borders
- compact tabs
- uppercase labels
- CLI-style status text
- dense but breathable spacing
- data-first hierarchy
- lightly rounded corners, usually 6-8px
- visible chart and metric structure
- restrained shadows and glows

Avoid:

- large rounded bubble cards
- emoji-heavy UI
- flashy animations
- generic chatbot bubbles
- big rainbow gradients
- decorative card stacks
- overly sharp zero-radius panels

## Motion and Animation

Motion should be noticeable enough to feel premium but never distract from research.

Use:

- subtle panel open/close transitions
- command cursor blink
- CLI log reveal for build/status output
- chart marker fades
- tab transitions
- landing hero constellation/data-vector animation

Landing hero animation:

- Use abstract constellation/data motion behind the headline.
- It can feel like a moving coordinate system, data graph, or signal field.
- It should be WebGL/canvas-style if practical, but still tasteful and lightweight.
- Do not copy Hey Astral's shooting-star effect directly.

Use typing effects sparingly. They are acceptable for short terminal/log moments, not long paragraphs.

## Landing Page

### Landing Page Goal

The landing page should make users understand immediately that Orion is a trading research terminal where they can ask market questions, build strategy code, and backtest ideas visually.

The hero should be brand-first and atmospheric. It should not show the full product preview immediately as the main hero object. Product UI should appear in later sections where the user can see the terminal, chart, strategy code, and backtest flow.

The landing page is the first implementation priority. It should be complete enough to publish publicly and collect waitlist signups before the terminal workspace is built.

### Landing Hero

Hero content:

- logo mark and `ORION`
- headline
- subheadline
- primary CTA
- secondary CTA or supporting action
- visually present login/auth entry point
- waitlist signup path before the terminal is available
- subtle animated background based on abstract vectors, nodes, or signal paths

Preferred headline:

`Research markets and build trading strategies in plain English.`

Preferred subheadline:

`Orion combines charts, AI research, strategy code, and backtesting in one terminal-style workspace, so traders can turn questions and ideas into testable systems.`

Primary CTA:

- Use `Enter Terminal`, `Open Terminal`, or a similarly direct label.
- The CTA should take the user to login/auth before the terminal when authentication is enabled.
- Before the terminal exists, the CTA may focus on waitlist signup instead.

Secondary CTA:

- Use `View Example Backtest` or similar.

### Landing Sections

Use these sections:

1. Hero
2. Product Preview
3. What You Can Ask
4. Build Strategies
5. Backtest Visually
6. Save Research and Code
7. Disclaimer / Research Only
8. CTA

The product preview section should show a realistic terminal/chart/backtest workspace. It may include a cursor or guided interaction moving through the terminal, code, and chart, but keep it restrained.

## Main App Layout

The main app should use this structure:

```text
┌──────────────────────┬─────────────────────────────────────┬──────────────┐
│ Orion Terminal       │ Chart / Backtest Workspace           │ Icon Drawer  │
│ AI chat + commands   │ Price / code / equity / drawdown     │ Code/Metrics │
│                      │                                     │ Research     │
└──────────────────────┴─────────────────────────────────────┴──────────────┘
```

Default desktop state:

- AI terminal visible on the left
- chart workspace dominates the center
- inspector collapsed to an icon rail on the right
- SPY candlestick chart visible
- volume visible
- right drawer closed unless the user opens it

Responsive state:

- Desktop is the priority for V1.
- Do not design a separate mobile app or over-invest in mobile behavior early.
- Basic responsive behavior is acceptable only to prevent broken layouts.

## Left Panel: Orion Terminal

Width:

- desktop: around 320-420px
- collapsible on smaller screens

Contains:

- Orion mark and session title
- AI chat messages
- command/status labels
- input box at bottom
- quick actions
- command suggestions

The AI terminal has two related modes:

- Chat mode: user prompts and Orion responses can appear as chat blocks, closer to a ChatGPT-like research assistant but still terminal-styled.
- Log mode: strategy generation, code creation, validation, and backtest status should read like a CLI log.

Example terminal labels:

- `orion://research`
- `orion://strategy`
- `orion://backtest`
- `STATUS: COMPILING STRATEGY`
- `FILE CREATED`
- `MISSING ASSUMPTION`
- `BACKTEST READY`
- `BACKTEST COMPLETE`

Orion should ask clarifying questions when assumptions matter. Questions should be short and specific, not long forms.

Quick actions should exist both as buttons and as command suggestions.

## Center Panel: Chart / Backtest Workspace

This is the largest area and the default visual anchor.

Contains:

- ticker search
- chart toolbar
- chart tabs
- main chart
- optional lower panel for equity, drawdown, trades, or code output

Tabs:

- Price
- Equity
- Drawdown
- Trades
- Backtest

Defaults:

- ticker: SPY
- chart type: candlestick
- volume: visible
- data: mock or delayed/historical until real data is connected

Trade markers should be colorful and obvious when strategy results are shown. Use cool green/cyan for entries or profitable events and restrained red for exits, drawdowns, or losses.

When code generation or backtest output is active, the code/backtest workspace can temporarily dominate the center area. Do not automatically run a backtest after generating code. Show the generated strategy and a clear `Run Backtest` action.

## Bottom Code / Build Output Panel

When the user asks Orion to build a strategy, show a bottom panel or expanded center workspace that displays:

- build status
- generated filename
- strategy assumptions
- Python code preview
- validation status
- action to run a backtest

This panel should feel like a coding workspace, not a marketing preview. It can take over much of the screen while active.

## Right Drawer: Inspector

The right drawer should be icon-based and collapsible so it does not steal chart space.

Sections:

- Code
- Metrics
- Research
- Assumptions
- History

When clicked, the drawer opens around 320px wide and resizes the chart area. If closed, only icons remain visible.

## User Flow 1: Market Research Question

Goal: user asks Orion about a market situation or stock.

Example:

`What is happening with NVDA today?`

Orion should:

1. Detect this is a market research question.
2. Pull or simulate context.
3. Respond with structured market information.
4. Show related tickers if relevant.
5. Offer actions such as `Open NVDA Chart`, `Create Research Note`, `Backtest Event Pattern`, or `Compare Sector ETF`.

Response should include:

- summary
- price/volume context
- news/context
- related tickers
- uncertainty
- next actions

Tone:

- Use careful language such as `possible`, `historically`, `appears`, `based on available data`, and `not a prediction`.
- Do not say `buy`, `guaranteed`, `this will go up`, or `certain`.

## User Flow 2: Build Strategy

Goal: user describes a strategy and Orion generates code.

Example:

`Build a mean reversion strategy for SPY using RSI below 30, Bollinger Band lower touch, and exit when RSI crosses 55.`

Orion should:

1. Detect this is a strategy-building request.
2. Extract the strategy structure.
3. Ask short clarifying questions only if required.
4. Generate a strategy file preview.
5. Show assumptions.
6. Offer to run a backtest.

Output should include:

- strategy name
- strategy summary
- generated file path
- code preview
- assumptions
- `Run Backtest` action

Example response:

```text
orion://strategy

Strategy detected: SPY RSI + Bollinger Mean Reversion

Created:
strategies/spy_rsi_bollinger_mean_reversion.py

Assumptions:
- Asset: SPY
- Timeframe: Daily
- Position: Long only
- Entry: RSI < 30 and close <= lower Bollinger Band
- Exit: RSI > 55
- Fees/slippage: 0.05%

Next:
[Run Backtest] [Edit Code] [Change Assumptions]
```

## User Flow 3: Run Backtest

Goal: user runs a backtest for a generated strategy.

Orion should:

1. Validate the strategy code/spec.
2. Fetch historical data or use mock data.
3. Run or display a mock backtest.
4. Display results in the center workspace.
5. Populate metrics drawer.
6. Save result to history.

Backtest output should show:

- total return
- benchmark return
- Sharpe ratio
- Sortino ratio
- max drawdown
- win rate
- profit factor
- trades
- equity curve
- drawdown
- trade markers

Orion should explain results honestly.

Good:

`In the tested period, this strategy had positive returns but was highly sensitive to drawdowns in 2022.`

Bad:

`This strategy is profitable.`

## User Flow 4: Ask About a Backtest

Example:

`Why did this strategy fail in 2022?`

Orion should:

- inspect backtest results
- identify drawdown periods
- compare to market regime
- explain likely causes
- suggest testable refinements

## User Flow 5: Save and Review

User should be able to:

- save strategy
- save backtest
- save research note
- open profile/library
- view past strategies
- reopen old results

## UI Components Needed

Layout components:

- `AppShell`
- `TerminalPanel`
- `ChartWorkspace`
- `InspectorDrawer`
- `TopNav`
- `WorkspaceTabs`
- `BottomOutputPanel`

Terminal components:

- `TerminalHeader`
- `TerminalMessage`
- `TerminalInput`
- `CommandBadge`
- `QuickActionButton`
- `CliLog`

Chart components:

- `TickerSearch`
- `ChartPanel`
- `ChartToolbar`
- `PriceChart`
- `VolumeOverlay`
- `EquityCurve`
- `DrawdownChart`
- `TradeMarkers`

Inspector components:

- `CodeInspector`
- `MetricsInspector`
- `ResearchInspector`
- `AssumptionsInspector`
- `HistoryInspector`

Backtest components:

- `MetricCard`
- `BacktestSummary`
- `TradeTable`
- `PerformanceChart`
- `DrawdownPanel`

Library components:

- `StrategyCard`
- `BacktestCard`
- `ResearchNoteCard`

## Important UI Rules

- The chart workspace should feel primary by default.
- The terminal should be useful and visible but should not dominate normal chart views.
- The inspector should be collapsible and icon-based.
- Code/build output may take over the workspace when active.
- Use mock data where backend is not ready and label it clearly.
- Keep spacing compact but readable.
- Use uppercase terminal labels.
- Use subtle Orion/astronomical cues only as abstract data/vector branding.
- Avoid literal space decoration.
- Avoid warm palettes.
- Do not add live trading, broker integrations, options flow, alerts, paid plans, social features, or portfolio management in the first version.
