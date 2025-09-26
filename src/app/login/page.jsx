// src/app/login/page.jsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/AuthContext";
import PasswordInput from "@/components/PasswordInput";

export default function LoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const nextParam = search.get("next") || "/";

  const { user, ready, loading, error, login, googleLogin, clearError } = useAuth();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  // Already logged-in? → redirect to next/home
  useEffect(() => {
    if (!ready) return;
    if (user) router.replace(nextParam);
  }, [ready, user, router, nextParam]);

  // Initializing state
  if (!ready) {
    return (
      <div className="min-h-[70vh] grid place-items-center">
        <div className="animate-pulse text-center">
          <div className="w-12 h-12 rounded-full border-4 border-white/20 border-t-white mx-auto mb-4 animate-spin" />
          <p className="text-white/70 text-sm">Loading…</p>
        </div>
      </div>
    );
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !pwd) return;
    const res = await login(email.trim(), pwd);
    if (res.ok) router.replace(nextParam);
  };

  const onGoogle = async () => {
    const res = await googleLogin();
    if (res.ok) router.replace(nextParam);
  };

  return (
    <div className="min-h-[100dvh] grid place-items-center px-4 bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
      <div className="w-full max-w-md rounded-2xl bg-neutral-900/70 backdrop-blur-md p-7 shadow-2xl ring-1 ring-white/10">
        <h1 className="text-2xl font-semibold text-white">Welcome back</h1>
        <p className="text-white/60 text-sm mt-1 mb-6">
          The Jungle Journey me login karein
        </p>

        {error ? (
          <div className="mb-4 rounded-lg bg-red-500/15 text-red-200 px-3 py-2 text-sm ring-1 ring-red-500/30">
            {error}
          </div>
        ) : null}

        {/* Google button */}
        <button
          type="button"
          onClick={onGoogle}
          disabled={loading}
          className="w-full rounded-xl px-4 py-2.5 font-medium bg-white text-black hover:bg-zinc-200 transition disabled:opacity-60 flex items-center justify-center gap-2"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="my-5 flex items-center gap-3 text-white/40">
          <div className="h-px flex-1 bg-white/10" />
          <span className="text-xs">or</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Email/password form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-white/70 mb-1">Email</label>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                if (error) clearError();
                setEmail(e.target.value);
              }}
              className="w-full rounded-xl bg-neutral-800/80 focus:bg-neutral-800 outline-none px-3 py-2 ring-1 ring-white/10 focus:ring-white/25 placeholder:text-white/40 text-white"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-white/70 mb-1">Password</label>
            <PasswordInput
              value={pwd}
              onChange={(e) => {
                if (error) clearError();
                setPwd(e.target.value);
              }}
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl px-4 py-2.5 font-medium bg-white text-black hover:bg-zinc-200 transition disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        <div className="mt-5 flex items-center justify-between text-sm">
          <Link
            href="/forgot-password"
            className="text-white/75 hover:text-white underline underline-offset-4"
            onClick={() => error && clearError()}
          >
            Forgot password?
          </Link>
          <Link
            href={`/signup?next=${encodeURIComponent(nextParam)}`}
            className="text-white/75 hover:text-white underline underline-offset-4"
            onClick={() => error && clearError()}
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Tiny Google “G” SVG (no external deps) */
function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.5 32.6 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.8 6.1 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11.5 0 19.8-8.1 19.8-19.5 0-1.3-.2-2.2-.2-2.9z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.8 6.1 29.2 4 24 4 16 4 9 8.5 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5.1 0 9.7-1.9 13.1-5.1l-6-4.9C29 35.6 26.7 36 24 36c-5.1 0-9.4-3.4-10.9-8l-6.6 5C9.1 39.4 16 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3C34.7 31.2 29 36 24 36c-6.6 0-12-5.4-12-12 0-1.3.2-2.6.7-3.8l-6.6-5C4.7 17.5 4 20.7 4 24c0 11.1 8.9 20 20 20 11.5 0 19.8-8.1 19.8-19.5 0-1.3-.2-2.2-.2-2.9z"/>
    </svg>
  );
}