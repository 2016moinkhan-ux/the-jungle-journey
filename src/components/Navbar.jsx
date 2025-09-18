"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { href: "/", label: { en: "Home", hi: "होम" } },
  { href: "/parks", label: { en: "Parks", hi: "पार्क्स" } },
  { href: "/hotels", label: { en: "Hotels", hi: "होटल्स" } },
  { href: "/safaris", label: { en: "Safaris", hi: "सफारी" } }, // इसको parks page से link करेंगे
  { href: "/about", label: { en: "About", hi: "परिचय" } },
  { href: "/contact", label: { en: "Contact", hi: "संपर्क" } },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const lang = searchParams?.get("lang") === "hi" ? "hi" : "en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLang = () => {
    const newLang = lang === "hi" ? "en" : "hi";
    const params = new URLSearchParams(searchParams.toString());
    params.set("lang", newLang);
    router.push(`${pathname}?${params.toString()}`);
  };

  // 👇 Safaris को parks page + #safaris section पर redirect कर रहे हैं
  const items = useMemo(() => {
    return NAV_ITEMS.map((it) => {
      const base =
        it.href === "/safaris"
          ? `/parks?lang=${lang}#safaris`
          : `${it.href}?lang=${lang}`;
      return { ...it, computedHref: base };
    });
  }, [lang]);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur transition-colors
        ${scrolled ? "bg-neutral-950/90 border-white/10"
                   : "bg-neutral-950/70 border-white/5"}`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link
          href={`/?lang=${lang}`}
          className="flex items-center gap-2 font-semibold text-lg
                     text-emerald-400 hover:text-emerald-300
                     drop-shadow-[0_1px_1px_rgba(0,0,0,.6)]"
        >
          <span role="img" aria-label="leaf">🌿</span>
          <span className="hidden sm:inline">The Jungle Journey</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.computedHref}
              className={`text-sm transition-colors ${
                (item.href === "/safaris" ? pathname === "/parks" : pathname === item.href)
                  ? "text-emerald-400"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.label[lang]}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="ml-4 rounded bg-emerald-600 px-3 py-1.5 text-sm hover:bg-emerald-500"
          >
            {lang === "hi" ? "EN" : "HI"}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <span className="h-0.5 w-6 bg-emerald-300"></span>
          <span className="h-0.5 w-6 bg-emerald-300"></span>
          <span className="h-0.5 w-6 bg-emerald-300"></span>
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 z-50 h-full w-64 bg-neutral-900 shadow-lg"
            >
              <div className="flex items-center justify-between p-6">
                <span className="font-semibold text-lg text-emerald-300">
                  🌿 Jungle Journey
                </span>
                <button onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
              </div>

              <div className="flex flex-col gap-4 px-6">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.computedHref}
                    onClick={() => setOpen(false)}
                    className={`text-base transition-colors ${
                      (item.href === "/safaris" ? pathname === "/parks" : pathname === item.href)
                        ? "text-emerald-400"
                        : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label[lang]}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    toggleLang();
                    setOpen(false);
                  }}
                  className="mt-4 self-start rounded bg-emerald-600 px-3 py-1.5 text-sm hover:bg-emerald-500"
                >
                  {lang === "hi" ? "EN" : "HI"}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}