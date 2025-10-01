// src/components/Navbar.jsx
"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image"; // 👈 added for logo
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitch from "@/components/LanguageSwitch";
import LogoutButton from "@/components/LogoutButton";
import { useAuth } from "@/components/AuthContext";

// Home removed from nav; start with Parks
const NAV_ITEMS = [
  { href: "/parks", label: { en: "Parks", hi: "पार्क्स" } },
  { href: "/hotels", label: { en: "Hotels", hi: "होटल्स" } },
  { href: "/safaris", label: { en: "Safaris", hi: "सफारी" } },
  { href: "/about", label: { en: "About", hi: "परिचय" } },
  { href: "/contact", label: { en: "Contact", hi: "संपर्क" } },
];

export default function Navbar() {
  // ❗️Always call hooks in the same order
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { user, ready } = useAuth();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const lang = searchParams?.get("lang") === "hi" ? "hi" : "en";

  // Decide hiding AFTER calling hooks
  const shouldHide =
    pathname?.startsWith("/login") ||
    pathname?.startsWith("/signup") ||
    pathname?.startsWith("/forgot");

  // Scroll lock only when drawer open (no-op if hidden because open=false)
  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close drawer on route/search change
  useEffect(() => {
    setOpen(false);
  }, [pathname, searchParams?.toString()]);

  // Header elevation on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Compute i18n hrefs
  const items = useMemo(() => {
    return NAV_ITEMS.map((it) => {
      const base =
        it.href === "/safaris"
          ? `/parks?lang=${lang}#safaris`
          : `${it.href}?lang=${lang}`;
      return { ...it, computedHref: base };
    });
  }, [lang]);

  // Active link logic (/safaris counts as /parks)
  const isActive = (href) =>
    href === "/safaris" ? pathname === "/parks" : pathname === href;

  const nextParam = encodeURIComponent(
    pathname + (searchParams?.toString() ? `?${searchParams}` : "")
  );

  const closeBtnRef = useRef(null);
  useEffect(() => {
    if (open) closeBtnRef.current?.focus();
  }, [open]);

  // 👇 Safe: return after calling all hooks (no hook order change)
  if (shouldHide) return null;

  return (
    <header
      className={`sticky top-0 z-40 transition-colors border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur border-neutral-200 shadow-sm"
          : "bg-white border-neutral-200"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        {/* Brand → Parks (now with logo image) */}
        <Link
          href={`/parks?lang=${lang}`}
          className="flex items-center gap-2"
          aria-label="The Jungle Journey, parks"
        >
          <Image
            src="/logo/logo.jpg"
            alt="The Jungle Journey logo"
            width={28}
            height={28}
            className="rounded-md object-cover"
            priority
          />
          <span className="hidden sm:inline font-semibold text-neutral-900">
            The Jungle Journey
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.computedHref}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-md px-2 py-2 text-[0.95rem] transition-colors ${
                isActive(item.href)
                  ? "text-emerald-700"
                  : "text-neutral-700 hover:text-neutral-900"
              }`}
            >
              {item.label[lang]}
            </Link>
          ))}

          <LanguageSwitch />

          {!ready ? (
            <div className="text-neutral-500 text-sm ml-2">…</div>
          ) : user ? (
            <div className="ml-2 flex items-center gap-2">
              <span className="hidden sm:inline text-neutral-700 text-sm max-w-[200px] truncate">
                {user.email}
              </span>
              <LogoutButton />
            </div>
          ) : (
            <div className="ml-2 flex items-center gap-2">
              <Link
                href={`/login?next=${nextParam}`}
                className="rounded-lg border border-neutral-300 bg-white text-sm px-3 py-2 hover:bg-neutral-100"
              >
                Login
              </Link>
              <Link
                href={`/signup?next=${nextParam}`}
                className="rounded-lg bg-emerald-600 text-white text-sm px-3 py-2 hover:bg-emerald-500"
              >
                Sign up
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-neutral-800 mb-1" />
          <span className="block w-6 h-0.5 bg-neutral-800 mb-1" />
          <span className="block w-6 h-0.5 bg-neutral-800" />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed right-0 top-0 z-50 h-full w-[78%] max-w-80 bg-white border-l border-neutral-200 shadow-xl overflow-y-auto"
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-200">
                <span className="font-semibold text-neutral-900">
                  🌿 Jungle Journey
                </span>
                <button
                  ref={closeBtnRef}
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-lg hover:text-neutral-900"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-2 px-3 py-3">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.computedHref}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 text-[1.05rem] transition-colors ${
                      isActive(item.href)
                        ? "bg-emerald-50 text-emerald-700"
                        : "hover:bg-neutral-50 text-neutral-800"
                    }`}
                  >
                    {item.label[lang]}
                  </Link>
                ))}

                <LanguageSwitch />

                {user && (
                  <div className="mt-3 flex items-center justify-between px-3">
                    <span className="text-sm truncate max-w-[65%]">
                      {user.email}
                    </span>
                    <LogoutButton />
                  </div>
                )}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}