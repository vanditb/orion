import {
  BarChart3,
  Braces,
  Camera,
  ChartCandlestick,
  Clock3,
  Database,
  FileText,
  Gauge,
  Settings2,
} from "lucide-react";

type Candle = {
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  label: string;
};

const candles: Candle[] = [
  { open: 503.4, high: 506.7, low: 500.8, close: 501.1, volume: 58, label: "Dec" },
  { open: 501.0, high: 504.9, low: 496.2, close: 498.3, volume: 66, label: "" },
  { open: 498.2, high: 502.8, low: 494.6, close: 501.7, volume: 52, label: "" },
  { open: 501.8, high: 506.2, low: 499.5, close: 505.6, volume: 61, label: "" },
  { open: 505.9, high: 510.1, low: 503.3, close: 507.9, volume: 74, label: "" },
  { open: 507.8, high: 509.2, low: 503.8, close: 505.0, volume: 48, label: "" },
  { open: 505.2, high: 511.4, low: 503.4, close: 510.8, volume: 69, label: "Jan" },
  { open: 510.7, high: 516.3, low: 508.9, close: 514.2, volume: 82, label: "" },
  { open: 514.0, high: 518.8, low: 511.7, close: 512.3, volume: 76, label: "" },
  { open: 512.2, high: 515.5, low: 506.9, close: 508.0, volume: 88, label: "" },
  { open: 507.9, high: 512.1, low: 503.0, close: 505.5, volume: 91, label: "" },
  { open: 505.7, high: 511.8, low: 504.6, close: 510.6, volume: 64, label: "" },
  { open: 510.7, high: 517.0, low: 509.9, close: 515.8, volume: 72, label: "Feb" },
  { open: 515.9, high: 521.8, low: 513.5, close: 520.2, volume: 94, label: "" },
  { open: 520.1, high: 524.4, low: 516.2, close: 518.6, volume: 84, label: "" },
  { open: 518.4, high: 520.0, low: 511.8, close: 513.1, volume: 99, label: "" },
  { open: 513.0, high: 516.8, low: 507.1, close: 508.7, volume: 102, label: "" },
  { open: 508.8, high: 514.2, low: 505.5, close: 512.9, volume: 78, label: "" },
  { open: 512.7, high: 517.2, low: 510.2, close: 516.4, volume: 71, label: "Mar" },
  { open: 516.6, high: 523.7, low: 515.0, close: 522.9, volume: 90, label: "" },
  { open: 523.0, high: 528.4, low: 520.1, close: 526.1, volume: 107, label: "" },
  { open: 526.3, high: 527.5, low: 519.8, close: 521.0, volume: 95, label: "" },
  { open: 521.1, high: 524.8, low: 517.4, close: 519.6, volume: 86, label: "" },
  { open: 519.5, high: 526.2, low: 518.2, close: 524.4, volume: 92, label: "" },
  { open: 524.7, high: 531.9, low: 522.4, close: 530.6, volume: 112, label: "Apr" },
  { open: 530.4, high: 535.6, low: 528.2, close: 533.9, volume: 118, label: "" },
  { open: 533.8, high: 536.8, low: 529.0, close: 531.5, volume: 104, label: "" },
  { open: 531.2, high: 534.2, low: 526.3, close: 528.7, volume: 96, label: "" },
  { open: 528.8, high: 533.7, low: 526.7, close: 532.5, volume: 84, label: "" },
  { open: 532.8, high: 538.2, low: 531.2, close: 536.9, volume: 121, label: "" },
  { open: 536.8, high: 540.4, low: 534.6, close: 538.1, volume: 109, label: "May" },
  { open: 538.0, high: 539.1, low: 532.5, close: 534.1, volume: 98, label: "" },
  { open: 534.0, high: 536.5, low: 528.2, close: 530.4, volume: 116, label: "" },
  { open: 530.5, high: 535.8, low: 529.0, close: 534.9, volume: 89, label: "" },
];

const priceLevels = [540, 530, 520, 510, 500, 490];
const metrics = [
  ["Total return", "+32.4%", "text-[#2DD4BF]"],
  ["Sharpe", "1.18", "text-[#8EA2FF]"],
  ["Max drawdown", "-13.7%", "text-[#F87171]"],
  ["Win rate", "58.2%", "text-[#2DD4BF]"],
];
const rightRail = [
  ChartCandlestick,
  Braces,
  Gauge,
  FileText,
  Clock3,
  Database,
  BarChart3,
];

const chartWidth = 760;
const priceHeight = 250;
const volumeHeight = 64;
const chartTop = 18;
const chartLeft = 28;
const maxPrice = 542;
const minPrice = 488;
const maxVolume = Math.max(...candles.map((candle) => candle.volume));
const candleGap = chartWidth / candles.length;
const candleWidth = 8;

function priceToY(price: number) {
  return chartTop + ((maxPrice - price) / (maxPrice - minPrice)) * priceHeight;
}

function volumeToHeight(volume: number) {
  return (volume / maxVolume) * volumeHeight;
}

export function ProductPreview() {
  return (
    <section
      id="preview"
      aria-labelledby="preview-title"
      className="relative mx-auto mt-8 w-full max-w-[1240px] px-4 pb-8 sm:px-6 lg:px-8"
    >
      <div className="font-mono mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#8EA2FF]">
        <span>Product preview</span>
        <span className="hidden text-[#63738C] sm:inline">
          Terminal / chart / metrics
        </span>
      </div>

      <div className="scanline grid-shell overflow-hidden border border-[#1D2B42] bg-[#07111F]/92 shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
        <div className="grid min-h-[520px] grid-cols-1 lg:grid-cols-[292px_1fr_58px]">
          <aside className="border-b border-[#1D2B42] bg-[#050A12]/84 p-5 lg:border-b-0 lg:border-r">
            <div className="font-mono flex items-center justify-between text-xs uppercase tracking-[0.14em] text-[#8EA2FF]">
              <span>orion://strategy</span>
              <span className="text-[#63738C]">10:31 AM</span>
            </div>
            <div className="mt-6 space-y-5">
              <TerminalLine
                label="YOU"
                text="Build a mean reversion setup for SPY using RSI and Bollinger Bands."
              />
              <TerminalLine
                label="ORION"
                text="Strategy detected. Code preview and assumptions are ready to inspect."
              />
            </div>
            <div className="mt-7 border border-[#1D2B42] bg-[#0B1626]/72 p-4">
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-[#9BAEC8]">
                Strategy file
              </div>
              <div className="mt-3 space-y-2 text-sm text-[#E6F0FF]">
                <div>spy_rsi_bollinger_mean_reversion.py</div>
                <div className="text-[#9BAEC8]">Daily bars · long only</div>
                <div className="text-[#2DD4BF]">Assumptions ready</div>
              </div>
            </div>
            <button className="font-mono mt-5 w-full border border-[#5865F2] bg-[#4F46E5] px-4 py-3 text-xs uppercase tracking-[0.08em] text-white shadow-[0_0_24px_rgba(88,101,242,0.32)]">
              Run backtest
            </button>
          </aside>

          <div className="relative min-h-[520px] border-b border-[#1D2B42] bg-[#050A12]/56 lg:border-b-0 lg:border-r">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1D2B42] px-5 py-4">
              <div>
                <h2
                  id="preview-title"
                  className="font-mono text-sm uppercase tracking-[0.16em] text-[#E6F0FF]"
                >
                  SPY / Price
                </h2>
                <p className="font-mono mt-1 text-xs text-[#63738C]">
                  SPDR S&P 500 ETF Trust · 1D
                </p>
              </div>
              <div className="font-mono flex items-center gap-3 text-xs text-[#9BAEC8]">
                {["1D", "5D", "1M", "3M", "1Y", "All"].map((range) => (
                  <span
                    key={range}
                    className={range === "1Y" ? "text-[#8EA2FF]" : undefined}
                  >
                    {range}
                  </span>
                ))}
                <span className="h-4 w-px bg-[#1D2B42]" />
                <Settings2 className="h-4 w-4 text-[#63738C]" />
                <Camera className="h-4 w-4 text-[#63738C]" />
              </div>
            </div>

            <div className="px-5 py-4">
              <div className="font-mono mb-3 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#E6F0FF]">O 503.40</span>
                  <span className="ml-4 text-[#2DD4BF]">C 534.90</span>
                  <span className="ml-4 text-[#2DD4BF]">+6.26%</span>
                </div>
                <div className="text-[#63738C]">Vol 74.2M</div>
              </div>

              <div className="relative overflow-hidden border border-[#142033] bg-[#07111F]/44">
                <svg
                  aria-label="SPY candlestick chart preview"
                  className="h-[344px] w-full"
                  preserveAspectRatio="none"
                  viewBox={`0 0 ${chartWidth + 82} ${priceHeight + volumeHeight + 54}`}
                >
                  <defs>
                    <linearGradient id="priceGlow" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#5865F2" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#5865F2" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <rect
                    fill="rgba(5,10,18,0.36)"
                    height={priceHeight + volumeHeight + 54}
                    width={chartWidth + 82}
                  />
                  {priceLevels.map((level) => (
                    <g key={level}>
                      <line
                        stroke="#142033"
                        strokeDasharray="4 6"
                        strokeWidth="1"
                        x1="0"
                        x2={chartWidth}
                        y1={priceToY(level)}
                        y2={priceToY(level)}
                      />
                      <text
                        fill="#9BAEC8"
                        fontFamily="monospace"
                        fontSize="11"
                        x={chartWidth + 16}
                        y={priceToY(level) + 4}
                      >
                        ${level}
                      </text>
                    </g>
                  ))}
                  {candles.map((candle, index) => {
                    const x = chartLeft + index * candleGap;
                    const openY = priceToY(candle.open);
                    const closeY = priceToY(candle.close);
                    const highY = priceToY(candle.high);
                    const lowY = priceToY(candle.low);
                    const isUp = candle.close >= candle.open;
                    const bodyTop = Math.min(openY, closeY);
                    const bodyHeight = Math.max(Math.abs(closeY - openY), 2.5);
                    const color = isUp ? "#10B981" : "#EF4444";
                    const volumeHeightValue = volumeToHeight(candle.volume);
                    const volumeY = chartTop + priceHeight + 24 + (volumeHeight - volumeHeightValue);

                    return (
                      <g key={`${candle.label}-${index}`}>
                        <line
                          stroke={color}
                          strokeWidth="1.35"
                          x1={x + candleWidth / 2}
                          x2={x + candleWidth / 2}
                          y1={highY}
                          y2={lowY}
                        />
                        <rect
                          fill={color}
                          height={bodyHeight}
                          rx="1"
                          width={candleWidth}
                          x={x}
                          y={bodyTop}
                        />
                        <rect
                          fill={color}
                          height={volumeHeightValue}
                          opacity="0.38"
                          width={candleWidth}
                          x={x}
                          y={volumeY}
                        />
                        {candle.label ? (
                          <text
                            fill="#9BAEC8"
                            fontFamily="monospace"
                            fontSize="10"
                            x={x - 4}
                            y={priceHeight + volumeHeight + 50}
                          >
                            {candle.label}
                          </text>
                        ) : null}
                      </g>
                    );
                  })}
                  <path
                    d="M28 238 C 112 228, 144 214, 190 202 S 286 178, 352 186 S 452 147, 522 132 S 628 116, 733 92"
                    fill="none"
                    stroke="#8EA2FF"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M28 238 C 112 228, 144 214, 190 202 S 286 178, 352 186 S 452 147, 522 132 S 628 116, 733 92 L733 276 L28 276 Z"
                    fill="url(#priceGlow)"
                  />
                  <line
                    stroke="#F87171"
                    strokeDasharray="5 5"
                    strokeWidth="1"
                    x1="0"
                    x2={chartWidth}
                    y1={priceToY(532.5)}
                    y2={priceToY(532.5)}
                  />
                  <rect
                    fill="#EF4444"
                    height="22"
                    rx="2"
                    width="58"
                    x={chartWidth + 6}
                    y={priceToY(532.5) - 11}
                  />
                  <text
                    fill="white"
                    fontFamily="monospace"
                    fontSize="11"
                    x={chartWidth + 14}
                    y={priceToY(532.5) + 4}
                  >
                    532.50
                  </text>
                  <path d="M506 133 L518 116 L530 133 Z" fill="#2DD4BF" />
                  <path d="M650 100 L662 117 L674 100 Z" fill="#F87171" />
                </svg>
              </div>
            </div>
          </div>

          <aside className="grid grid-cols-7 border-[#1D2B42] bg-[#050A12]/72 lg:grid-cols-1">
            {rightRail.map((Icon, index) => (
              <div
                key={index}
                className="flex min-h-14 items-center justify-center border-b border-r border-[#1D2B42] text-[#9BAEC8] last:border-r-0 lg:border-r-0"
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </aside>
        </div>

        <div className="grid border-t border-[#1D2B42] md:grid-cols-4">
          {metrics.map(([label, value, className]) => (
            <div
              key={label}
              className="border-b border-[#1D2B42] p-5 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#63738C]">
                {label}
              </div>
              <div className={`font-mono mt-2 text-xl ${className}`}>
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TerminalLine({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#63738C]">
        {label}
      </div>
      <p className="mt-1 text-sm leading-6 text-[#E6F0FF]">{text}</p>
    </div>
  );
}
