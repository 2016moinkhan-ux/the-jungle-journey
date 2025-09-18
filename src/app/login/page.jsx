"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebase/firebase";
import PasswordInput from "@/components/PasswordInput";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const friendlyError = (code) => {
    switch (code) {
      case "auth/invalid-credential":
      case "auth/wrong-password":
        return "Invalid email or password.";
      case "auth/user-not-found":
        return "No account found with this email.";
      case "auth/too-many-requests":
        return "Too many attempts. Try again later.";
      case "auth/popup-closed-by-user":
        return "Popup closed before completing sign in.";
      default:
        return "Something went wrong. Please try again.";
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.push("/"); // success → home
    } catch (err) {
      setError(friendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (err) {
      setError(friendlyError(err.code));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-0px)] flex items-center justify-center px-4 bg-gradient-to-br from-emerald-900 via-green-900 to-black">
      <div className="w-full max-w-md rounded-2xl shadow-2xl p-8 sm:p-10 bg-white/10 backdrop-blur-lg border border-white/20 animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-center text-emerald-300 mb-8 tracking-wide">
          Welcome Back
        </h1>

        {error && (
          <div className="mb-4 rounded-md bg-red-600/80 px-4 py-3 text-sm text-white">
            {error}
          </div>
        )}

        <form onSubmit={handleEmailLogin} className="space-y-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 transition py-3 font-semibold text-white shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-3 text-sm text-white/60">
          <span className="h-px flex-1 bg-white/20" />
          <span>or</span>
          <span className="h-px flex-1 bg-white/20" />
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full rounded-lg bg-white text-emerald-900 hover:bg-gray-100 transition py-3 font-semibold shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Continue with Google
        </button>

        <div className="mt-8 flex items-center justify-between text-sm text-white/80">
          <Link
            href="/forgot-password"
            className="text-emerald-300 hover:text-emerald-200"
          >
            Forgot password?
          </Link>
          <div>
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-emerald-300 hover:text-emerald-200 font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
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