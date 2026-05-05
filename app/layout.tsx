import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orion | AI Trading Research Terminal",
  description:
    "Ask markets. Build strategies. Test everything with Orion, a terminal-style trading research workspace.",
  metadataBase: new URL("https://orion.local"),
  openGraph: {
    title: "Orion | AI Trading Research Terminal",
    description:
      "Charts, AI research, strategy code, and backtesting in one terminal-style workspace.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#050A12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
