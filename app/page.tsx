import {
  BarChart3,
  Command,
  FileCode2,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { ConstellationCanvas } from "@/components/landing/constellation-canvas";
import { ProductPreview } from "@/components/landing/product-preview";
import { WaitlistForm } from "@/components/landing/waitlist-form";
import { OrionLogo } from "@/components/orion-logo";

const featureRows = [
  {
    icon: Terminal,
    label: "ASK",
    title: "Market questions become structured research.",
    body: "Ask what is moving, why it matters, and which next tests are worth running.",
  },
  {
    icon: FileCode2,
    label: "BUILD",
    title: "Plain English becomes strategy code.",
    body: "Generate readable Python strategy previews with assumptions before any backtest runs.",
  },
  {
    icon: BarChart3,
    label: "TEST",
    title: "Backtests become charts, metrics, and files.",
    body: "Review equity, drawdown, trades, assumptions, and saved artifacts in one workspace.",
  },
];

const prompts = [
  "What is driving SPY today?",
  "Build an RSI mean reversion strategy for QQQ.",
  "Backtest this from 2020 to 2026.",
  "Explain why this strategy struggled in 2022.",
];

export default function Home() {
  const navLinkClass =
    "font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[#9BAEC8] transition hover:text-[#E6F0FF]";

  return (
    <main className="min-h-screen overflow-hidden bg-[#050A12] text-[#E6F0FF]">
      <section className="relative min-h-[86svh] border-b border-[#1D2B42]">
        <ConstellationCanvas />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#050A12] to-transparent" />

        <header className="relative z-10 mx-auto grid max-w-[1480px] grid-cols-1 items-center gap-4 px-4 py-4 sm:grid-cols-[1fr_auto] sm:px-6 md:grid-cols-3 lg:px-8">
          <OrionLogo />
          <nav
            aria-label="Primary navigation"
            className="hidden items-center justify-center gap-8 md:flex"
          >
            <a className={navLinkClass} href="#features">
              Features
            </a>
            <a className={navLinkClass} href="#preview">
              Example
            </a>
            <a className={navLinkClass} href="#waitlist">
              Pricing
            </a>
            <a className={navLinkClass} href="#docs">
              Docs
            </a>
          </nav>
          <div className="font-mono hidden items-center justify-end gap-4 text-xs font-semibold uppercase tracking-[0.12em] sm:flex">
            <a className="hidden text-[#9BAEC8] transition hover:text-white sm:inline" href="#waitlist">
              Login
            </a>
            <a
              className="border border-[#5865F2] bg-[#4F46E5] px-3 py-2 text-white shadow-[0_0_24px_rgba(88,101,242,0.38)] transition hover:bg-[#6674FF] sm:px-4"
              href="#waitlist"
            >
              Join waitlist
            </a>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex max-w-[1480px] flex-col px-4 pb-12 sm:px-6 lg:px-8">
          <div className="mx-auto flex w-full max-w-[920px] flex-col items-center pb-10 pt-20 text-center drop-shadow-[0_4px_28px_rgba(0,0,0,0.82)] sm:pt-24 lg:pt-28">
            <h1 className="max-w-[300px] text-3xl leading-tight text-white sm:max-w-[790px] sm:text-balance sm:text-5xl lg:text-6xl">
              Ask markets. Build strategies. Test everything.
            </h1>
            <p className="mt-6 max-w-[300px] text-base leading-7 text-[#C1D0E6] sm:max-w-[660px] sm:text-lg">
              Orion turns market questions and strategy ideas into research,
              code, charts, and backtests inside one terminal-style trading
              workspace.
            </p>
            <div className="mt-8" />
            <WaitlistForm className="mt-7" />
          </div>
        </div>
      </section>

      <ProductPreview />

      <section
        id="features"
        className="mx-auto grid max-w-[1180px] gap-0 px-4 py-20 sm:px-6 lg:grid-cols-3 lg:px-8"
      >
        {featureRows.map((feature) => (
          <article
            key={feature.title}
            className="border-b border-[#1D2B42] px-0 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
          >
            <div className="font-mono flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#8EA2FF]">
              <feature.icon className="h-4 w-4" />
              {feature.label}
            </div>
            <h2 className="mt-5 text-2xl leading-tight text-white">
              {feature.title}
            </h2>
            <p className="mt-4 leading-7 text-[#9BAEC8]">{feature.body}</p>
          </article>
        ))}
      </section>

      <section className="mx-auto grid max-w-[1180px] gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8EA2FF]">
            What you can ask
          </div>
          <h2 className="mt-4 max-w-[500px] text-3xl leading-tight text-white sm:text-4xl">
            One command layer for research, strategy, and backtest prep.
          </h2>
        </div>
        <div className="border border-[#1D2B42] bg-[#07111F]/72">
          {prompts.map((prompt) => (
            <div
              key={prompt}
              className="font-mono flex items-center gap-4 border-b border-[#1D2B42] px-5 py-5 text-sm text-[#C8D6EA] last:border-b-0"
            >
              <Command className="h-4 w-4 text-[#5865F2]" />
              <span>{prompt}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="docs"
        className="mx-auto max-w-[1180px] px-4 pb-24 sm:px-6 lg:px-8"
      >
        <div className="grid-shell border border-[#1D2B42] bg-[#07111F]/76 p-6 sm:p-8 lg:grid lg:grid-cols-[0.72fr_1fr] lg:gap-10">
          <div>
            <div className="font-mono flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#8EA2FF]">
              <ShieldCheck className="h-4 w-4" />
              Research discipline
            </div>
            <h2 className="mt-4 text-3xl leading-tight text-white">
              Designed for traders who want evidence before conviction.
            </h2>
          </div>
          <div className="mt-8 grid gap-5 text-[#9BAEC8] lg:mt-0">
            <p className="leading-7">
              Orion keeps research, assumptions, strategy code, charts, and
              historical results close together so every idea can be inspected
              before it becomes a thesis.
            </p>
            <p className="leading-7">
              The workspace is built for education and market research. It
              helps users reason through scenarios, compare tests, and document
              why a setup deserves more attention.
            </p>
          </div>
        </div>
      </section>

      <section
        id="waitlist"
        className="border-t border-[#1D2B42] bg-[#050A12] px-4 py-16 text-center sm:px-6"
      >
        <OrionLogo className="justify-center" />
        <h2 className="mx-auto mt-6 max-w-[720px] text-3xl leading-tight text-white sm:text-4xl">
          Join the waitlist for early access to Orion.
        </h2>
        <p className="mx-auto mt-4 max-w-[560px] text-[#9BAEC8]">
          Be first to try the research terminal as new workspace seats open.
        </p>
        <WaitlistForm className="mx-auto mt-7" />
        <p className="font-mono mx-auto mt-6 max-w-[640px] text-[11px] leading-5 text-[#63738C]">
          Orion is for research and educational purposes only. It does not
          provide financial advice.
        </p>
      </section>
    </main>
  );
}
