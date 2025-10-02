// src/app/(protected)/ProtectedSplashClient.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/components/AuthContext";

/* Timing */
const STAGGER_IN = 0.09;
const STAGGER_OUT = 0.06;
const EXIT_START_MS = 4300;
const REDIRECT_MS = 5000;

/* Rotation angles */
const ENTER_ROT_TOP  = [-52, 52, -48, 48];
const ENTER_ROT_BOT  = [52, -52, 48, -48];
const REST_ROT_TOP   = [-10, -3, 7, 12];
const REST_ROT_BOT   = [-12, -5, 9, 12];
const EXIT_ROT_TOP   = [-145, 145, -145, 145];
const EXIT_ROT_BOT   = [145, -145, 145, -145];

export default function ProtectedSplashClient() {
  const router = useRouter();
  const sp = useSearchParams();
  const { user, ready } = useAuth();
  const lang = sp?.get("lang") === "hi" ? "hi" : "en";

  if (!ready) {
    return (
      <main className="grid min-h-[100dvh] place-items-center bg-white text-neutral-700">
        Loading…
      </main>
    );
  }
  if (!user) return null;

  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), EXIT_START_MS);
    const t2 = setTimeout(() => router.replace(`/parks?lang=${lang}`), REDIRECT_MS);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [router, lang]);

  const topTiles = useMemo(() => [
    "/landing/tiger.jpg",
    "/landing/jeep-safari.jpg",
    "/landing/forest-trail.jpg",
    "/landing/sunrise.jpg",
  ], []);
  const bottomTiles = useMemo(() => [
    "/landing/river.jpg",
    "/landing/birds.jpg",
    "/landing/hotel-lodge.jpg",
    "/landing/tent-camp.jpg",
  ], []);

  const T = lang === "hi"
    ? {
        brand: "The Jungle Journey",
        line1: "Explore सफारी • वन्यजीव • जंगल स्टे",
        line2: "Explore बाघ, नदियाँ और साल वन",
      }
    : {
        brand: "The Jungle Journey",
        line1: "Explore Safaris · Wildlife · Eco Stays",
        line2: "Explore tigers, rivers & sal forests",
      };

  return (
    <main className="relative min-h-[100dvh] w-full overflow-hidden bg-white text-neutral-900">
      {/* TOP ROW */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto w-full max-w-[420px] sm:max-w-[1180px] px-4 sm:px-6"
        initial="in"
        animate={leaving ? "out" : "stay"}
        variants={{ in:{opacity:1}, stay:{opacity:1}, out:{opacity:1} }}
        aria-hidden
      >
        {/* mobile: 2 cols, compact gap */}
        <div className="mt-6 sm:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-[clamp(8px,3.5vw,18px)]">
          {topTiles.map((src, i) => (
            <Tile
              key={`t-${i}`}
              src={src}
              enter={{ rotate: ENTER_ROT_TOP[i], y: 34 }}
              rest={{ rotate: REST_ROT_TOP[i] }}
              exit={{ rotate: EXIT_ROT_TOP[i], y: -100 }}
              delayIn={i * STAGGER_IN}
              delayOut={i * STAGGER_OUT}
              leaving={leaving}
            />
          ))}
        </div>
      </motion.div>

      {/* BOTTOM ROW */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto w-full max-w-[420px] sm:max-w-[1180px] px-4 sm:px-6"
        initial="in"
        animate={leaving ? "out" : "stay"}
        variants={{ in:{opacity:1}, stay:{opacity:1}, out:{opacity:1} }}
        aria-hidden
      >
        <div className="mb-6 sm:mb-10 grid grid-cols-2 sm:grid-cols-4 gap-[clamp(8px,3.5vw,18px)]">
          {bottomTiles.map((src, i) => (
            <Tile
              key={`b-${i}`}
              src={src}
              enter={{ rotate: ENTER_ROT_BOT[i], y: 34 }}
              rest={{ rotate: REST_ROT_BOT[i] }}
              exit={{ rotate: EXIT_ROT_BOT[i], y: 100 }}
              delayIn={0.25 + i * STAGGER_IN}
              delayOut={0.25 + i * STAGGER_OUT}
              leaving={leaving}
            />
          ))}
        </div>
      </motion.div>

      {/* CENTER BRAND + INTRO */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center max-w-[740px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 py-2 shadow-sm"
          >
            <span className="text-xl">🌿</span>
            <span className="text-lg sm:text-xl font-semibold tracking-tight">
              {T.brand}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.18 }}
            className="mt-3 text-base sm:text-lg text-neutral-700"
          >
            {T.line1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.36 }}
            className="mt-1 text-sm sm:text-base text-neutral-600"
          >
            {T.line2}
          </motion.p>
        </div>
      </div>
    </main>
  );
}

/* Tile Component */
function Tile({ src, enter, rest, exit, leaving, delayIn = 0, delayOut = 0 }) {
  return (
    <motion.div
      className="relative aspect-[5/6] sm:aspect-[4/5] w-full overflow-hidden rounded-[20px] sm:rounded-[22px] bg-neutral-100 shadow-sm ring-1 ring-black/5
                 scale-[0.92] sm:scale-100"  /* mobile thoda chhota */
      initial={{ opacity: 0, y: enter.y, rotate: enter.rotate, scale: 0.94 }}
      animate={
        leaving
          ? {
              opacity: 0,
              y: exit.y,
              rotate: exit.rotate,
              scale: 0.92,
              transition: { duration: 0.5, ease: "easeInOut", delay: delayOut },
            }
          : {
              opacity: 1,
              y: 0,
              rotate: rest.rotate,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 240,
                damping: 18,
                mass: 0.55,
                delay: delayIn,
              },
            }
      }
      whileTap={{ scale: 0.96 }}
    >
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover"
        onError={(e) => (e.currentTarget.style.display = "none")}
      />
    </motion.div>
  );
}