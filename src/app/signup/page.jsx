"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebase/firebase";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      router.push("/");
    } catch (error) {
      setErr(error.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setErr("");
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (error) {
      setErr(error.message || "Google sign-up failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-[#0f2e25] p-8 shadow-xl">
        <h1 className="text-3xl font-semibold text-center text-white mb-6">
          Sign Up
        </h1>

        {err ? (
          <div className="mb-4 rounded-md bg-red-600/90 text-white px-3 py-2 text-sm">
            {err}
          </div>
        ) : null}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md bg-[#0d241d] border border-emerald-800/50 px-3 py-3 text-white placeholder:text-gray-400 outline-none focus:border-emerald-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-md bg-[#0d241d] border border-emerald-800/50 px-3 py-3 text-white placeholder:text-gray-400 outline-none focus:border-emerald-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-emerald-600 hover:bg-emerald-700 transition px-4 py-3 font-medium text-white disabled:opacity-60"
          >
            {loading ? "Please wait..." : "Create Account"}
          </button>
        </form>

        <div className="flex items-center gap-3 my-5 text-emerald-200/70">
          <div className="h-px flex-1 bg-emerald-900" />
          <span className="text-sm">or</span>
          <div className="h-px flex-1 bg-emerald-900" />
        </div>

        <button
          onClick={handleGoogle}
          disabled={loading}
          className="w-full rounded-md bg-white text-gray-900 hover:bg-gray-100 transition px-4 py-3 font-medium disabled:opacity-60"
        >
          Continue with Google
        </button>

        <div className="mt-4 text-sm text-center">
          <a href="/login" className="text-emerald-300 hover:text-emerald-200">
            Already have an account? <span className="underline">Login</span>
          </a>
        </div>
      </div>
    </div>
  );
}