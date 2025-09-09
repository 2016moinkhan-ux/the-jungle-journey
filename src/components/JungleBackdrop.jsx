// src/components/JungleBackdrop.jsx
"use client";
import { memo } from "react";
import Fireflies from "./Fireflies";

/**
 * Fixed dark-forest backdrop + subtle vignette + leaf-canopy strip (left).
 * Z-index low rakha gaya hai taa ki foreground content clear rahe.
 */
function JungleBackdrop() {
  return (
    <>
      {/* Deep forest gradient */}
      <div
        className="
          fixed inset-0 -z-20
          bg-[radial-gradient(1200px_800px_at_70%_10%,#133226_0%,#0b1f18_45%,#08130f_100%)]
        "
        aria-hidden="true"
      />

      {/* Soft dark overlay to increase contrast with photos/cards */}
      <div
        className="fixed inset-0 -z-10 bg-emerald-950/40 mix-blend-multiply pointer-events-none"
        aria-hidden="true"
      />

      {/* Subtle vignette edges */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(1200px 800px at 50% 10%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0.6) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Leaf canopy strip (left) */}
      <div
        className="
          fixed top-0 left-0 h-full w-[84px] md:w-[96px] -z-10
          flex flex-col items-center justify-center gap-8 opacity-80
        "
        aria-hidden="true"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="
              block h-28 w-16 md:h-32 md:w-20
              rounded-full
              bg-emerald-800/80
              shadow-[inset_0_-12px_24px_rgba(0,0,0,0.45)]
              outline outline-1 outline-emerald-600/30
            "
            style={{
              clipPath:
                "path('M40 0 C70 40, 70 88, 40 128 C10 88, 10 40, 40 0 Z')",
              filter: "blur(0.2px)",
            }}
          />
        ))}
      </div>

      {/* Fireflies on top of backdrop */}
      <Fireflies />
    </>
  );
}

export default memo(JungleBackdrop);