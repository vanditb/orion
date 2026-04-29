# Orion Agent Instructions  
  
## Purpose  
  
This file gives coding agents instructions for building Orion.  
  
Before making changes, read:  
  
1. `docs/00-product-brief.md`  
2. `docs/01-mvp-scope.md`  
3. `docs/02-ui-and-user-flows.md`  
4. `docs/03-technical-plan.md`  
5. `docs/04-agent-instructions.md`  
  
Do not build from memory. Use the docs as the source of truth.  
  
## Project Summary  
  
Orion is an AI trading research terminal.  
  
It lets users:  
- view charts  
- ask market questions  
- generate trading strategy code from plain English  
- inspect generated code  
- run backtests  
- view metrics and visualizations  
- save strategies, backtests, and research notes  
  
Orion should feel like:  
- TradingView  
- Bloomberg Terminal  
- Claude Code / Codex CLI  
- a serious finance/quant research workspace
  
It should not feel like:  
- a generic AI chatbot  
- a colorful SaaS template  
- a meme trading app  
- a cartoon or gimmicky space-themed app
- a copied Astral-style interface

Subtle Orion/constellation-inspired branding is allowed when it supports the finance, data, charting, and terminal identity. Do not let astronomical visuals overpower the trading research product.
  
## Build Strategy  
  
Build Orion in small phases.  
  
Do not build the entire product in one response.  
  
Always follow the current requested phase.  
  
If the user asks for Phase 1, only build Phase 1.  
If the user asks for a static UI shell, do not add backend logic.  
If the user asks for mock data, do not connect real APIs.  
  
## Current Preferred Build Order  
  
1. Initialize frontend
2. Build public landing page with Supabase waitlist
3. Complete public site and example/demo pages
4. Add Supabase auth gate
5. Build protected terminal workspace shell
6. Add interactive mock terminal flows
7. Add chart integration with mock OHLCV data
8. Add persistence and library
9. Add historical market data
10. Add real simple backtesting
11. Add AI integration
12. Add market research assistant
13. Polish and QA
  
## Design Rules  
  
Use:  
- dark theme  
- terminal-inspired UI  
- thin borders  
- compact panels  
- monospace for code/logs/metrics  
- clean chart-first layout  
- dark indigo/black contrast
- indigo-violet aura, soft aura lavender, and cool cyan accents
- uppercase terminal labels
- subtle but premium transitions
- restrained Orion/constellation branding where useful
  
Avoid:  
- bright gradients  
- warm color palettes
- literal star backgrounds
- cartoon or heavy space themes
- excessive animations  
- bubbly chat UI  
- rounded colorful cards  
- marketing fluff  
- fake financial claims  

Subtle Orion-related astronomical cues are allowed when they are abstract, finance/data-focused, and secondary to the terminal identity. Do not copy Astral's logo, shooting-star language, or exact visual treatment.
  
## UI Requirements  
  
The main `/terminal` app should eventually include:  
  
- left Orion terminal panel  
- center chart/backtest workspace  
- right collapsible inspector drawer  
- bottom code/build output panel when strategy generation is active
- saved artifacts/history  
  
The chart area should be the dominant part of the screen.  
When code or backtest output is active, that output may take over more space, but the default workspace should be chart-first.
  
The terminal should feel like a command layer.  
The AI chat can use chat blocks, but status/build output should read like a CLI log.
  
The inspector should be collapsible and icon-based.  

The public landing page and waitlist should be built before the terminal workspace. Once authentication exists, `/terminal` and `/library` should be protected routes, while public landing and demo pages remain accessible without login.
  
## Product Rules  
  
Do not describe Orion as:  
- a financial advisor  
- an AI hedge fund  
- a trade alert service  
- a guaranteed profitable strategy tool  
- a broker  
- a live trading bot  
  
Use:  
- research  
- historical testing  
- market context  
- possible thesis  
- backtesting  
- generated strategy code  
- assumptions  
- limitations  
  
Include disclaimers where relevant:  
"Orion is for research and educational purposes only. It does not provide financial advice."  
  
## Technical Rules  
  
Use the tech stack from `docs/03-technical-plan.md`.  
  
Preferred frontend:  
- Next.js App Router  
- TypeScript  
- Tailwind CSS  
- shadcn/ui  
- Lucide React  
- Recharts  
- TradingView Lightweight Charts later  
  
Preferred backend:  
- Start with mock API routes  
- Use Supabase early for waitlist, auth, profiles, and persisted artifacts
- Use Vercel as the default deployment target
- Add Python/FastAPI later only when needed for backtesting  
- Do not prematurely build a complex backend  

TradingView Lightweight Charts is a chart rendering library, not a market data provider. Use mock data first, then connect historical data through Orion's own API/data adapter.
  
## Coding Rules  
  
When editing:  
- keep files organized  
- use clear component names  
- avoid huge single files  
- avoid unused imports  
- avoid dead code  
- avoid duplicate components  
- keep styling consistent  
- use TypeScript types where useful  
- prefer reusable components  
  
After coding:  
- run formatter if available  
- run lint if available  
- run build if available  
- fix errors before finishing  
  
If a command fails, explain the failure and fix it if possible.  
  
## Feature Creep Rules  
  
Do not add these unless explicitly requested:  
  
- live trading  
- broker integrations  
- real-time alerts  
- options flow  
- social/community features  
- paid subscriptions  
- prop firm passing probability  
- portfolio management  
- mobile app  
- advanced derivatives engine  
- real-time institutional data  
  
## Data Rules  
  
If real data is not connected yet:  
- use mock data clearly  
- do not pretend it is live  
- label it as sample or delayed  
- avoid fake real-time claims  
  
## AI Rules  
  
When AI integration is added:  
- use AI for intent classification, strategy generation, research summaries, and code generation  
- do not use AI to calculate final metrics  
- calculate metrics deterministically in code  
- validate generated strategy code before running  
- never execute unsafe generated code directly  
- prefer templates or controlled execution for MVP  
  
## Financial Language Rules  
  
Do not write:  
- "This will go up"  
- "Guaranteed profit"  
- "High-conviction trade"  
- "Buy this"  
- "This passes prop firm challenges"  
- "Risk-free"  
  
Write:  
- "Historically..."  
- "In this backtest..."  
- "Under these assumptions..."  
- "Possible thesis..."  
- "Candidate basket..."  
- "This result may be fragile..."  
- "This is not financial advice."  
  
## Commit Discipline  
  
The human user should commit changes after each phase.  
  
Recommended commit messages:  
- `Add Orion product docs`  
- `Initialize Next.js app`  
- `Build landing page`  
- `Build terminal workspace shell`  
- `Add chart workspace mock`  
- `Add strategy generation mock`  
- `Add backtest results mock`  
  
Agents should not create unnecessary commits unless asked.  
  
## If Unsure  
  
If unclear:  
- do not invent new product direction  
- check the docs  
- ask for clarification  
- choose the smallest reasonable implementation  
- avoid adding extra features  
  
## Final Output Expectations  
  
When completing a task, summarize:  
- what was changed  
- files edited  
- how to run/test  
- any known limitations  
- what should be built next  
  
Keep summaries short and practical.  
