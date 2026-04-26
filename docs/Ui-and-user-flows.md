Ui-and-user-flows  
  
## Design Direction  
  
Orion should feel like:  
  
- TradingView charting  
- Bloomberg Terminal information density  
- Claude Code / Codex CLI-style AI terminal  
- dark quant research workspace  
- serious trading dashboard  
- [heyastral.ai](http://heyastral.ai) terminal  
  
It should not feel like:  
  
- generic SaaS app  
- colorful AI wrapper  
- consumer finance app  
- meme trading platform  
- overly rounded bubbly chatbot  
  
## Visual Style  
  
### Theme  
  
Use a dark terminal-like theme.  
  
Recommended colors:  
  
  
Use dark backgrounds, thin borders, subtle glows only when necessary.  
  
### Typography  
  
Use:  
- Inter or Geist Sans for UI text  
- JetBrains Mono or Geist Mono for terminal/code/metrics  
  
Numbers, code, filenames, logs, and terminal messages should use monospace.  
  
### UI Feel  
  
Use:  
- thin borders  
- sharp or lightly rounded corners  
- dense but readable spacing  
- compact tabs  
- small labels  
- terminal log styling  
- data-first hierarchy  
  
Avoid:  
- big gradients  
- large rounded bubble cards  
- emoji-heavy UI  
- flashy animations  
- starry/space backgrounds  
- generic AI chatbot bubbles  
  
## Main App Layout  
  
The main app should use this structure:  
  
```text  
┌──────────────────────┬─────────────────────────────────────┬──────────────┐  
│ Orion Terminal       │ Chart / Backtest Workspace           │ Icon Drawer  │  
│ AI chat + commands   │ Price chart / equity / drawdown      │ Code/Metrics │  
│                      │                                     │ Research     │  
└──────────────────────┴─────────────────────────────────────┴──────────────┘  ****Left Panel: Orion Terminal****  
Width:  
* desktop: around 320–420px  
* collapsible on smaller screens  
Contains:  
* Orion header  
* session title  
* terminal messages  
* command-like AI responses  
* input box at bottom  
* quick actions  
The terminal should look more like a command console than a normal chatbot.  
Example terminal labels:  
* orion://research  
* orion://strategy  
* orion://backtest  
* status: compiling strategy  
* file created  
* missing assumption  
* backtest complete  
## Center Panel: Chart / Backtest Workspace  
This is the largest area.  
Contains:  
* ticker search  
* chart toolbar  
* chart tabs  
* main chart  
* optional lower panel for equity/drawdown/trades  
Tabs:  
* Price  
* Equity  
* Drawdown  
* Trades  
* Backtest  
Default view:  
* SPY chart  
* terminal open  
* inspector collapsed  
## Right Drawer: Inspector  
The right drawer should be icon-based and collapsible so it does not steal chart space.  
Icons/sections:  
* Code  
* Metrics  
* Research  
* Assumptions  
* History  
When clicked, drawer opens with a panel around 320px wide.  
If closed, only icons remain visible.  
## Landing Page  
## Landing Page Goal  
The landing page should make users understand immediately:  
Orion is a trading research terminal where you can ask market questions, build strategy code, and backtest ideas visually.  
## Landing Hero Copy  
Headline:  
Research markets and build trading strategies in plain English.  
Subheadline:  
Orion combines charts, AI research, strategy code, and backtesting in one terminal-style workspace, so traders can turn questions and ideas into testable systems.  
Primary CTA:  
Launch Terminal  
Secondary CTA:  
View Example Backtest  
## Hero Visual  
Hero visual should show a realistic product mock:  
* left: Orion terminal  
* center: candlestick chart  
* right: metrics/code drawer  
Example terminal message in mock:  
```

orion://strategy

Build a mean reversion strategy for SPY using RSI, Bollinger Bands, and a volatility filter.

Created:
strategies/spy_mean_reversion.py

Ready to backtest from 2020–2026.


```
Example metrics in mock:  
* Total Return: +32.4%  
* Sharpe: 1.18  
* Max Drawdown: -13.7%  
* Win Rate: 58.2%  
## Landing Sections  
Use these sections:  
1. Hero  
2. Product Preview  
3. What You Can Ask  
4. Build Strategies  
5. Backtest Visually  
6. Save Research and Code  
7. Disclaimer / Research Only  
8. CTA  
## User Flow 1: Market Research Question  
## Goal  
User asks Orion about a market situation or stock.  
## Example  
User: "What is happening with NVDA today?"  
## Orion Should  
1. Detect this is a market research question.  
2. Pull or simulate context.  
3. Respond with structured market information.  
4. Show related tickers if relevant.  
5. Offer actions:  
    * Open NVDA chart  
    * Create research note  
    * Backtest related event pattern  
    * Compare with sector ETF  
## Output Format  
Response should include:  
* Summary  
* Price/volume context  
* News/context  
* Related tickers  
* Uncertainty  
* Next actions  
## Tone  
Use careful language:  
* "possible"  
* "historically"  
* "appears"  
* "based on available data"  
* "not a prediction"  
Do not say:  
* "buy"  
* "guaranteed"  
* "this will go up"  
* "certain"  
## User Flow 2: Build Strategy  
## Goal  
User describes a strategy and Orion generates code.  
## Example  
User: "Build a mean reversion strategy for SPY using RSI below 30, Bollinger Band lower touch, and exit when RSI crosses 55."  
## Orion Should  
1. Detect this is a strategy-building request.  
2. Extract the strategy structure.  
3. Ask clarifying questions only if required.  
4. Generate code file.  
5. Show assumptions.  
6. Offer to run backtest.  
## Output  
Orion creates:  
* strategy name  
* strategy summary  
* generated file path  
* code preview  
* assumptions  
* run backtest action  
## Example Response  
```

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
## Goal  
User runs a backtest for a generated strategy.  
## Orion Should  
1. Validate the strategy code/spec.  
2. Fetch historical data or use mock data.  
3. Run backtest.  
4. Display results in center workspace.  
5. Populate metrics drawer.  
6. Save result to history.  
## Backtest Output  
Show:  
* total return  
* benchmark return  
* Sharpe ratio  
* Sortino ratio  
* max drawdown  
* win rate  
* profit factor  
* trades  
* equity curve  
* drawdown  
* trade markers  
## Backtest Interpretation  
Orion should explain results honestly.  
Good: "In the tested period, this strategy had positive returns but was highly sensitive to drawdowns in 2022."  
Bad: "This strategy is profitable."  
## User Flow 4: Ask About a Backtest  
## Example  
User: "Why did this strategy fail in 2022?"  
Orion should:  
* inspect backtest results  
* identify drawdown periods  
* compare to market regime  
* explain likely causes  
* suggest testable refinements  
## User Flow 5: Save and Review  
User should be able to:  
* save strategy  
* save backtest  
* save research note  
* open profile/library  
* view past strategies  
* reopen old results  
## UI Components Needed  
## Layout Components  
* AppShell  
* TerminalPanel  
* ChartWorkspace  
* InspectorDrawer  
* TopNav  
* WorkspaceTabs  
## Terminal Components  
* TerminalHeader  
* TerminalMessage  
* TerminalInput  
* CommandBadge  
* QuickActionButton  
## Chart Components  
* TickerSearch  
* ChartPanel  
* ChartToolbar  
* PriceChart  
* EquityCurve  
* DrawdownChart  
* TradeMarkers  
## Inspector Components  
* CodeInspector  
* MetricsInspector  
* ResearchInspector  
* AssumptionsInspector  
* HistoryInspector  
## Backtest Components  
* MetricCard  
* BacktestSummary  
* TradeTable  
* PerformanceChart  
* DrawdownPanel  
## Library Components  
* StrategyCard  
* BacktestCard  
* ResearchNoteCard  
## Important UI Rules  
* The chart workspace should always feel primary.  
* The terminal should feel useful but not dominate the whole screen.  
* The inspector should be collapsible.  
* Use mock data where backend is not ready.  
* Keep spacing compact but readable.  
* Add some decorative space-themed visuals even though the name is Orion.  
* Orion should feel like a system/tool still like a space-themed app.  
```



```
