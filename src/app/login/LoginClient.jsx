"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/AuthContext";
import PasswordInput from "@/components/PasswordInput";

export default function LoginClient() {
  const router = useRouter();
  const search = useSearchParams();
  const nextParam = search.get("next") || "/";

  const { user, ready, loading, error, login, googleLogin, clearError } = useAuth();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  // ✅ अगर पहले से login है तो redirect करो
  useEffect(() => {
    if (!ready) return;
    if (user) {
      router.replace(nextParam);
    }
  }, [ready, user, router, nextParam]);

  if (!ready) {
    return (
      <div className="min-h-[70vh] grid place-items-center bg-white">
        <div className="animate-pulse text-center">
          <div className="w-12 h-12 rounded-full border-4 border-gray-300 border-t-emerald-500 mx-auto mb-4 animate-spin" />
          <p className="text-gray-600 text-sm">Loading…</p>
        </div>
      </div>
    );
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !pwd) return;

    const res = await login(email.trim(), pwd);
    if (res?.ok) {
      router.replace(nextParam);
    }
  };

  const onGoogle = async () => {
    const res = await googleLogin();
    if (res?.ok) {
      router.replace(nextParam);
    }
  };

  return (
    <div className="min-h-[100dvh] grid place-items-center px-4 bg-white">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200 p-8">
        <h1 className="text-3xl font-bold text-center text-emerald-600">
          Welcome Back
        </h1>
        <p className="text-gray-600 text-center text-sm mt-1 mb-6">
          Sign in to <strong>The Jungle Journey</strong>
        </p>

        {/* ✅ Error safely clear */}
        {error ? (
          <div className="mb-4 rounded-lg bg-red-50 text-red-600 px-3 py-2 text-sm ring-1 ring-red-200">
            {String(error)}
          </div>
        ) : null}

        {/* Google Button */}
        <button
          type="button"
          onClick={onGoogle}
          disabled={loading}
          className="w-full rounded-xl px-4 py-2.5 font-medium bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 transition disabled:opacity-60 flex items-center justify-center gap-2 shadow-sm"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        <div className="my-5 flex items-center gap-3 text-gray-400">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-xs">or</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* Email/Password Form */}
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-gray-700 mb-1">Email</label>
            <input
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                if (error) clearError();
                setEmail(e.target.value);
              }}
              className="w-full rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 outline-none px-3 py-2 placeholder:text-gray-400 text-gray-900"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-xs text-gray-700 mb-1">Password</label>
            <PasswordInput
              value={pwd}
              onChange={(e) => {
                if (error) clearError();
                setPwd(e.target.value);
              }}
              placeholder="••••••••"
              className="w-full rounded-xl border border-gray-300 focus:border-emerald-500 focus:ring focus:ring-emerald-200 outline-none px-3 py-2 placeholder:text-gray-400 text-gray-900"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl px-4 py-2.5 font-medium bg-emerald-600 text-white hover:bg-emerald-700 transition disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in"}
          </button>
        </form>

        {/* Links */}
        <div className="mt-5 flex items-center justify-between text-sm">
          <Link
            href="/forgot-password"
            className="text-emerald-600 hover:text-emerald-800 underline underline-offset-4"
            onClick={() => error && clearError()}
          >
            Forgot password?
          </Link>
          <Link
            href={`/signup?next=${encodeURIComponent(nextParam)}`}
            className="text-emerald-600 hover:text-emerald-800 underline underline-offset-4"
            onClick={() => error && clearError()}
          >
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.5 32.6 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.8 6.1 29.2 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11.5 0 19.8-8.1 19.8-19.5 0-1.3-.2-2.2-.2-2.9z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 16 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.8 6.1 29.2 4 24 4 16 4 9 8.5 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.1 0 9.7-1.9 13.1-5.1l-6-4.9C29 35.6 26.7 36 24 36c-5.1 0-9.4-3.4-10.9-8l-6.6 5C9.1 39.4 16 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3C34.7 31.2 29 36 24 36c-6.6 0-12-5.4-12-12 0-1.3.2-2.6.7-3.8l-6.6-5C4.7 17.5 4 20.7 4 24c0 11.1 8.9 20 20 20 11.5 0 19.8-8.1 19.8-19.5 0-1.3-.2-2.2-.2-2.9z"
      />
    </svg>
  );
}