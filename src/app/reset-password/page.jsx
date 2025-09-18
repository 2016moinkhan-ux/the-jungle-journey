"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { confirmPasswordReset } from "firebase/auth";
import { auth } from "@/firebase/firebase";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const oobCode = searchParams.get("oobCode"); // Firebase link se aata hai

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage("Password reset successfully! Redirecting to login…");
      setTimeout(() => router.push("/login"), 2500);
    } catch (err) {
      if (err.code === "auth/expired-action-code") {
        setError("Reset link has expired. Please try again.");
      } else if (err.code === "auth/invalid-action-code") {
        setError("Invalid reset link.");
      } else if (err.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-emerald-900 via-green-900 to-black">
      <div className="w-full max-w-md rounded-2xl shadow-2xl p-8 sm:p-10 bg-white/10 backdrop-blur-lg border border-white/20 animate-fadeIn">
        <h1 className="text-3xl font-extrabold text-center text-emerald-300 mb-6">
          Reset Password
        </h1>

        {error && (
          <div className="mb-4 rounded-md bg-red-600/80 px-4 py-3 text-sm text-white">
            {error}
          </div>
        )}

        {message && (
          <div className="mb-4 rounded-md bg-emerald-600/80 px-4 py-3 text-sm text-white">
            {message}
          </div>
        )}

        <form onSubmit={handleReset} className="space-y-5">
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 transition py-3 font-semibold text-white shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Resetting…" : "Reset Password"}
          </button>
        </form>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}