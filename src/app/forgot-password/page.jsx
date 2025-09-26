"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/components/AuthContext";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const search = useSearchParams();
  const nextParam = search.get("next") || "/";

  const { user, ready, loading, error, forgot, clearError } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Already logged-in? Is page ki zarurat nahi
  useEffect(() => {
    if (!ready) return;
    if (user) router.replace(nextParam);
  }, [ready, user, router, nextParam]);

  if (!ready) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-pulse text-center">
          <div className="w-12 h-12 rounded-full border-4 border-white/40 border-t-white mx-auto mb-4 animate-spin" />
          <p className="text-white/80 text-sm">Loading…</p>
        </div>
      </div>
    );
  }

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    clearError();

    if (!email.trim()) return;

    const res = await forgot(email.trim());
    if (res.ok) setMessage("Password reset email sent! Please check your inbox.");
  };

  return (
    <div className="min-h-[calc(100vh-0px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl shadow-2xl p-8 sm:p-10 bg-white/10 backdrop-blur-lg border border-white/20 animate-fadeIn">
        <h1 className="text-3xl font-extrabold text-center text-emerald-300 mb-6">
          Forgot Password
        </h1>

        {error ? (
          <div className="mb-4 rounded-md bg-red-600/80 px-4 py-3 text-sm text-white">
            {error}
          </div>
        ) : null}

        {message ? (
          <div className="mb-4 rounded-md bg-emerald-600/80 px-4 py-3 text-sm text-white">
            {message}
          </div>
        ) : null}

        <form onSubmit={handleReset} className="space-y-5">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              if (error) clearError();
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 transition py-3 font-semibold text-white shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-white/80">
          Remembered your password?{" "}
          <Link
            href={`/login?next=${encodeURIComponent(nextParam)}`}
            className="text-emerald-300 hover:text-emerald-200 font-medium"
            onClick={() => error && clearError()}
          >
            Login
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.6s ease-out; }
      `}</style>
    </div>
  );
}