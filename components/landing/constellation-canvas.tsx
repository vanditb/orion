"use client";

import Script from "next/script";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const unicornProjectId = "cqcLtDwfoHqqRPttBbQE";
const unicornScriptSrc =
  "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";

declare global {
  interface Window {
    UnicornStudio?: {
      init?: () => void;
      isInitialized?: boolean;
    };
  }
}

export function ConstellationCanvas() {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const driftRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scriptLoaded || !window.UnicornStudio?.init) {
      return;
    }

    if (!window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
  }, [scriptLoaded]);

  useEffect(() => {
    const layer = driftRef.current;
    if (!layer) {
      return;
    }

    let running = true;
    let frame = 0;
    let pointerX = 0.5;
    let pointerY = 0.38;
    let currentX = 0.5;
    let currentY = 0.38;
    let targetX = 0.5;
    let targetY = 0.38;
    let isPointerActive = false;

    const setVars = (x: number, y: number, drift: number) => {
      layer.style.setProperty("--orion-pointer-x", `${x.toFixed(4)}`);
      layer.style.setProperty("--orion-pointer-y", `${y.toFixed(4)}`);
      layer.style.setProperty("--orion-drift", `${drift.toFixed(4)}`);
    };

    const onMove = (event: PointerEvent) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;
      targetX = Math.min(1, Math.max(0, event.clientX / width));
      targetY = Math.min(1, Math.max(0, event.clientY / height));
      isPointerActive = true;
    };

    const onLeave = () => {
      isPointerActive = false;
    };

    let raf = 0;

    const animate = () => {
      if (!running) {
        return;
      }

      frame += 1;
      const idleX = 0.5 + Math.sin(frame * 0.0018) * 0.08;
      const idleY = 0.38 + Math.cos(frame * 0.0014) * 0.06;
      const activeX = isPointerActive ? targetX : idleX;
      const activeY = isPointerActive ? targetY : idleY;

      currentX += (activeX - currentX) * 0.045;
      currentY += (activeY - currentY) * 0.045;
      pointerX += (currentX - pointerX) * 0.12;
      pointerY += (currentY - pointerY) * 0.12;

      const drift = 0.5 + Math.sin(frame * 0.0021) * 0.5;
      setVars(pointerX, pointerY, drift);
      raf = requestAnimationFrame(animate);
    };

    setVars(pointerX, pointerY, 0.5);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      running = false;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#02060D]"
    >
      <Script
        id="unicorn-studio"
        src={unicornScriptSrc}
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />
      <div
        className="orion-unicorn-stage absolute left-0 top-0 h-full w-full"
        data-us-project={unicornProjectId}
      />
      <div className="orion-unicorn-tint absolute inset-0" />
      <div
        ref={driftRef}
        className="orion-motion-layer absolute inset-0"
        style={
          {
            "--orion-pointer-x": "0.5",
            "--orion-pointer-y": "0.38",
            "--orion-drift": "0.5",
          } as CSSProperties
        }
      >
        <div className="orion-motion-glow orion-motion-glow-left" />
        <div className="orion-motion-glow orion-motion-glow-right" />
        <div className="orion-motion-glow orion-motion-glow-center" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_16%,rgba(88,101,242,0.34),transparent_34rem),radial-gradient(ellipse_at_82%_20%,rgba(142,162,255,0.18),transparent_30rem),radial-gradient(circle_at_50%_38%,rgba(4,9,17,0.18),rgba(4,9,17,0.5)_25rem,rgba(4,9,17,0.08)_56rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,10,18,0.42),rgba(5,10,18,0.04)_30%,rgba(5,10,18,0.04)_70%,rgba(5,10,18,0.42))]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,13,0.22),rgba(5,10,18,0)_40%,rgba(5,10,18,0.5))]" />
      <div className="absolute inset-0 grid-shell opacity-[0.08]" />
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#02060D]/82 to-transparent" />
    </div>
  );
}
