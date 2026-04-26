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
- logo / wordmark: Orion  
- headline  
- subheadline  
- CTA button: Launch Terminal  
- secondary CTA: View Example Backtest  
- product preview showing terminal + chart + metrics  
- short feature sections  
- disclaimer that Orion is for research and education, not financial advice  
  
Landing page should not look like a generic AI SaaS page.  
  
### 2. Main Terminal Workspace  
  
Main app screen layout:  
  
- left panel: Orion AI terminal  
- center panel: chart / backtest workspace  
- right side: collapsible inspector drawer with icons  
  
The terminal is the main command interface.  
  
The chart area is the visual anchor.  
  
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
- candlestick or line chart  
- timeframe selector placeholder  
- indicator overlay placeholder  
- tabs for Price, Equity, Drawdown, Trades  
  
The chart may use mock data at first, then connect to historical data later.  
  
### 5. Strategy Code Generation  
  
Users should be able to describe a strategy and see generated strategy code.  
  
MVP support:  
- Python strategy file preview  
- generated filename  
- assumptions  
- simple code display  
- button: Run Backtest  
  
The generated code can be template-based first.  
  
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
  
## V1 Nice-to-Have Features  
  
These are useful but not required in the first build:  
  
- real yfinance data  
- real TradingView Lightweight Charts integration  
- Monaco code editor  
- simple user authentication  
- Supabase storage  
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
  
### Phase 1: Static Landing Page  
  
Goal:  
Create a polished landing page that communicates Orion clearly.  
  
Build:  
- landing page  
- dark visual system  
- hero section  
- product preview mock  
- feature sections  
- CTA  
  
Do not build backend yet.  
  
### Phase 2: Static App Shell  
  
Goal:  
Create the terminal-style workspace layout.  
  
Build:  
- left AI terminal  
- center chart placeholder  
- right collapsible inspector  
- bottom/top navigation  
- mock messages  
- mock chart cards  
- mock metrics  
  
No backend yet.  
  
### Phase 3: Interactive Frontend  
  
Goal:  
Make the UI feel alive.  
  
Build:  
- terminal input  
- mock AI responses  
- ticker switching  
- inspector drawer interactions  
- tabs for chart/backtest/code/research  
- sample strategy file display  
  
### Phase 4: Chart Integration  
  
Goal:  
Show real or mock financial charts.  
  
Build:  
- chart component  
- ticker search  
- price chart  
- entry/exit markers using mock strategy data  
  
### Phase 5: Strategy Generation  
  
Goal:  
Describe strategy → generated code preview.  
  
Build:  
- AI or mock AI strategy generation  
- generated code file  
- assumptions panel  
- run backtest button  
  
### Phase 6: Backtest Engine  
  
Goal:  
Run real simple backtests.  
  
Build:  
- historical data fetch  
- simple strategy execution  
- metrics calculation  
- equity/drawdown charts  
  
### Phase 7: Market Research Assistant  
  
Goal:  
Ask market questions → research response.  
  
Build:  
- market Q&A  
- data/news retrieval later  
- research note creation  
- create basket/backtest from research  
  
### Phase 8: Library / Save System  
  
Goal:  
Save outputs.  
  
Build:  
- saved strategies  
- saved backtests  
- saved research notes  
- basic profile/library view  
  
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
