Product-brief  
  
## Product Name  
  
Orion  
  
## One-Liner  
  
Orion is an AI trading research terminal that turns market questions and strategy ideas into charts, code, backtests, metrics, and research files.  
  
## Product Description  
  
Orion is a terminal-style trading workspace for researching markets and building trading strategies.  
  
Users can:  
- view market charts  
- ask questions about stocks, sectors, events, and market conditions  
- generate trading strategy code from plain English  
- inspect the generated code  
- run historical backtests  
- visualize performance through charts and metrics  
- save strategies, backtests, and research notes  
  
Orion is designed to feel like a mix of:  
- TradingView-style charting  
- Bloomberg Terminal-style research  
- Claude Code / Codex CLI-style AI terminal  
- strategy builder + backtesting workspace  
  
The product is not only a strategy builder and not only a market chatbot. It combines both into one workspace.  
  
## Core Product Loop  
  
The core loop is:  
  
1. Ask a market question or describe a strategy  
2. Orion responds with research, code, assumptions, or next steps  
3. User opens charts, code, or backtest results  
4. Orion runs or prepares the backtest  
5. User reviews metrics, visualizations, and saved files  
6. User refines the idea  
  
In short:  
  
Question → Thesis → Strategy → Code → Backtest → Analysis → Saved Research  
  
## Core Jobs Orion Performs  
  
### 1. Market Research Assistant  
  
Users can ask Orion questions such as:  
- What is happening with NVDA today?  
- Why is oil moving?  
- What companies may benefit from lower rates?  
- How has SPY historically performed after CPI misses?  
- Which stocks are exposed to uranium demand?  
- What sectors tend to outperform when yields fall?  
  
Orion should answer using:  
- market context  
- price/volume information  
- relevant news or public context  
- historical relationships where available  
- uncertainty and limitations  
- suggested next actions  
  
Orion should not present guesses as facts.  
  
### 2. Strategy Builder  
  
Users can describe a trading strategy in plain English.  
  
Examples:  
- Build a mean reversion strategy for SPY using RSI and Bollinger Bands.  
- Create a breakout strategy that buys QQQ when it closes above the 20-day high.  
- Build a strategy that buys stocks after earnings gaps and exits after 5 trading days.  
- Create a volatility-filtered momentum strategy.  
- Turn this market thesis into a basket strategy and backtest it.  
  
Orion should:  
- interpret the strategy  
- ask clarifying questions when needed  
- generate strategy code  
- save the code as a strategy file  
- show assumptions  
- allow the user to run a backtest  
  
### 3. Backtesting and Visualization Engine  
  
Users can backtest generated or saved strategies.  
  
Backtest outputs should include:  
- total return  
- benchmark return  
- Sharpe ratio  
- Sortino ratio  
- max drawdown  
- win rate  
- profit factor  
- total trades  
- equity curve  
- drawdown chart  
- trade markers on price chart  
- trade list  
- strategy assumptions  
  
Future versions may include:  
- Monte Carlo simulation  
- parameter sensitivity  
- regime analysis  
- walk-forward testing  
  
## Target Users  
  
### Beginner / Normal Retail Trader  
  
This user does not necessarily know how to code.  
  
They ask:  
- Why is this stock moving?  
- Is this setup historically strong?  
- What happened in similar conditions before?  
- What stocks are related to this event?  
  
They use Orion to understand markets faster.  
  
### Serious Retail Trader  
  
This user has trading ideas and wants to test them.  
  
They ask:  
- Build this strategy.  
- Backtest this setup.  
- Compare this strategy against buy-and-hold.  
- Show the drawdowns and worst trades.  
  
They use Orion to validate ideas before risking money.  
  
### Aspiring Quant / Technical User  
  
This user wants code and deeper testing.  
  
They ask:  
- Generate Python code for this strategy.  
- Add a volatility filter.  
- Run Monte Carlo.  
- Show parameter sensitivity.  
- Explain why the strategy failed.  
  
They use Orion as a coding and research assistant.  
  
## Product Personality  
  
Orion should feel:  
- dark  
- technical  
- terminal-like  
- data-first  
- serious  
- fast  
- precise  
- chart-first
- finance/quant focused
- like a modern coder workspace

The brand should make Orion feel like an institutional terminal, a trading tool, and an AI coding workspace in one product. The Orion name should be a strong brand signal, but the product should use subtle astronomical cues only where they support the terminal/finance identity.

## Brand Direction

Orion is named after the constellation, so the product may use restrained Orion or constellation-inspired branding, motion, and visual details.

These details should make the public site feel memorable and premium, but they should not overpower the fintech/quant identity. Orion should still feel like a serious trading research terminal first: dark, data-focused, chart-first, and precise.

Use constellation-inspired visuals as a subtle brand layer, not as a cartoon, fantasy, or generic sci-fi theme. Avoid heavy starfields, playful space illustrations, or anything that makes the product feel less credible for trading research.
  
It should not feel:  
- like a generic AI chatbot  
- like a flashy crypto app  
- like a meme trading app  
- like a get-rich-quick platform  
- like a basic SaaS dashboard  
- like a literal space app
- like a copied Astral-style brand
  
## Positioning  
  
Best positioning:  
  
Orion is an AI trading research terminal for building, testing, and understanding market ideas.  
  
Best tagline:  
  
Ask markets. Build strategies. Test everything.  
  
Landing page headline:  
  
Research markets and build trading strategies in plain English.  
  
Landing page subheadline:  
  
Orion combines charts, AI research, strategy code, and backtesting in one terminal-style workspace, so traders can turn questions and ideas into testable systems.  
  
## What Orion Is Not  
  
Orion is not:  
- a live trading bot  
- a brokerage  
- a financial advisor  
- an options flow platform  
- a trade alert service  
- a guaranteed profitable strategy generator  
- a portfolio management platform  
- a prop firm passing tool  
- a full institutional terminal replacement  
  
Orion should avoid language like:  
- guaranteed profit  
- high-conviction trade alerts  
- buy this now  
- this will go up  
- risk-free  
- beat the market  
  
Orion should use language like:  
- historical performance  
- possible opportunity  
- testable thesis  
- candidate basket  
- market context  
- uncertainty  
- limitations  
- backtested result  
- not financial advice  
  
## Project Role  
  
Orion is a serious finance-tech project, not necessarily the user’s entire founder identity or final startup.  
  
It should be built as:  
- a strong technical project  
- a serious demo  
- a finance/quant learning vehicle  
- a polished product-style build  
- something that can be shown to founders, internship targets, traders, and technical people  
  
The goal is to build something real, useful, and impressive, without overbuilding it into a full trading platform immediately.  

## Build Priority

The first implementation surface is the public landing page and waitlist. The landing page should be complete enough to share publicly before the terminal workspace is built.

The terminal workspace remains the core product proof, but it comes after the public site and authentication foundation. The private app should eventually be auth-gated, while public marketing and example pages remain accessible without login.
