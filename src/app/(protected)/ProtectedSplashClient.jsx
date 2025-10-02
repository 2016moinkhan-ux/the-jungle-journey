// src/app/(protected)/ProtectedSplashClient.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useAuth } from "@/components/AuthContext";
import Spinner from "@/components/ui/Spinner";

/* Timing (⏩ ~1s more faster than previous) */
const STAGGER_IN = 0.04;    // was 0.06
const STAGGER_OUT = 0.025;  // was 0.04
const EXIT_START_MS = 2300; // was 3300
const REDIRECT_MS = 3000;   // was 4000

/* Rotation angles (unchanged) */
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

  // Loader only while auth resolving
  if (!ready) {
    return (
      <main className="grid min-h-[100dvh] place-items-center bg-white text-neutral-800">
        <div className="flex flex-col items-center gap-3" aria-live="polite" aria-busy="true">
          <Spinner size={54} color="#16a34a" />
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
            className="text-sm sm:text-base text-emerald-600 font-medium"
          >
            {lang === "hi" ? "जंगल सफर शुरू हो रहा है…" : "Exploring the Jungle…"}
          </motion.p>
        </div>
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
    <main className="relative min-h-[100dvh] w-full overflow-hidden bg-white text-neutral-900 pt-6 pb-8 sm:pt-10 sm:pb-12">
      {/* TOP ROW */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto w-full max-w-[980px] px-4 sm:px-6"
        initial="in"
        animate={leaving ? "out" : "stay"}
        variants={{ in:{opacity:1}, stay:{opacity:1}, out:{opacity:1} }}
        aria-hidden
      >
        <div className="mt-4 sm:mt-6 flex items-start justify-center gap-[clamp(8px,3.6vw,16px)]">
          {topTiles.map((src, i) => (
            <Tile
              key={`t-${i}`}
              src={src}
              enter={{ rotate: ENTER_ROT_TOP[i], y: 28 }}
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
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto w-full max-w-[980px] px-4 sm:px-6"
        initial="in"
        animate={leaving ? "out" : "stay"}
        variants={{ in:{opacity:1}, stay:{opacity:1}, out:{opacity:1} }}
        aria-hidden
      >
        <div className="mb-4 sm:mb-6 flex items-end justify-center gap-[clamp(8px,3.6vw,16px)]">
          {bottomTiles.map((src, i) => (
            <Tile
              key={`b-${i}`}
              src={src}
              enter={{ rotate: ENTER_ROT_BOT[i], y: 28 }}
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
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}  // faster
            className="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 py-2 shadow-md"
          >
            <span className="text-xl">🌿</span>
            <span className="text-lg sm:text-xl font-semibold tracking-tight">
              {T.brand}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.12 }} // faster
            className="mt-3 text-base sm:text-lg text-neutral-700 font-medium"
          >
            {T.line1}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.24 }} // faster
            className="mt-1 text-sm sm:text-base text-neutral-600"
          >
            {T.line2}
          </motion.p>
        </div>
      </div>
    </main>
  );
}

/* Tile Component — snappier transitions */
function Tile({ src, enter, rest, exit, leaving, delayIn = 0, delayOut = 0 }) {
  return (
    <motion.div
      className="
        relative overflow-hidden ring-1 ring-black/5 bg-neutral-100 shadow-sm
        rounded-[18px] sm:rounded-[22px]
        w-[clamp(72px,22vw,100px)] aspect-square
        sm:w-auto sm:aspect-[4/5]
      "
      initial={{ opacity: 0, y: enter.y, rotate: enter.rotate, scale: 0.94 }}
      animate={
        leaving
          ? {
              opacity: 0,
              y: exit.y,
              rotate: exit.rotate,
              scale: 0.92,
              transition: { duration: 0.30, ease: "easeInOut", delay: delayOut }, // faster exit
            }
          : {
              opacity: 1,
              y: 0,
              rotate: rest.rotate,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300, // snappier
                damping: 15,
                mass: 0.5,
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