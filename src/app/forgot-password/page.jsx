"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setMsg("");
    setErr("");
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email.trim());
      setMsg("Password reset link sent! Please check your email.");
    } catch (error) {
      setErr(error.message || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#0f2e25] p-8 shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Forgot Password
        </h1>

        {msg ? (
          <div className="mb-4 rounded-md bg-emerald-600/90 text-white px-3 py-2 text-sm">
            {msg}
          </div>
        ) : null}

        {err ? (
          <div className="mb-4 rounded-md bg-red-600/90 text-white px-3 py-2 text-sm">
            {err}
          </div>
        ) : null}

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md bg-[#0d241d] border border-emerald-800/50 px-3 py-3 text-white placeholder:text-gray-400 outline-none focus:border-emerald-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-emerald-600 hover:bg-emerald-700 transition px-4 py-3 font-medium text-white disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send reset link"}
          </button>
        </form>

        <div className="mt-4 text-sm text-center text-emerald-200/80">
          <Link href="/login" className="hover:text-emerald-100 underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}