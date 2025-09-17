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
    <div className="min-h-[calc(100vh-0px)] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-[#0f2b24] text-white rounded-xl shadow-2xl p-6 sm:p-8">
        <h1 className="text-3xl font-extrabold text-center mb-6">Login</h1>

        {error ? (
          <div className="mb-4 rounded-md bg-red-600/90 px-4 py-3 text-sm">
            {error}
          </div>
        ) : null}

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 rounded bg-[#10362d] border border-white/10 outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />

          <PasswordInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded bg-emerald-600 hover:bg-emerald-500 transition py-3 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-5 flex items-center gap-3 text-sm text-white/60">
          <span className="h-px flex-1 bg-white/10" />
          <span>or</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full rounded bg-white text-[#0f2b24] hover:bg-white/90 transition py-3 font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Continue with Google
        </button>

        <div className="mt-6 flex items-center justify-between text-sm">
          <Link
            href="/forgot-password"
            className="text-emerald-300 hover:text-emerald-200"
          >
            Forgot password?
          </Link>
          <div className="text-white/70">
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
    </div>
  );
}