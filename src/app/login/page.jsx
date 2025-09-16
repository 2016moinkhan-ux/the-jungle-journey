"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";

export default function LoginPage() {
  const router = useRouter();
  const sp = useSearchParams();
  const nextPath = sp.get("next") || "/parks";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  // अगर already logged-in है तो सीधे redirect
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.replace(nextPath);
    });
    return () => unsub();
  }, [router, nextPath]);

  const handle = (fn) => async () => {
    setMsg("");
    setBusy(true);
    try {
      await fn();
      router.replace(nextPath);
    } catch (err) {
      console.error(err);
      setMsg(err?.message || "Something went wrong");
    } finally {
      setBusy(false);
    }
  };

  const doLogin = handle(async () => {
    await signInWithEmailAndPassword(auth, email.trim(), password);
  });

  const doSignup = handle(async () => {
    await createUserWithEmailAndPassword(auth, email.trim(), password);
  });

  const doForgot = async () => {
    setMsg("");
    if (!email.trim()) return setMsg("Enter email to receive reset link.");
    setBusy(true);
    try {
      await sendPasswordResetEmail(auth, email.trim());
      setMsg("Reset link sent to your email.");
    } catch (err) {
      console.error(err);
      setMsg(err?.message || "Failed to send reset link");
    } finally {
      setBusy(false);
    }
  };

  const doGoogle = handle(async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  });

  return (
    <div className="min-h-[calc(100vh-0px)] grid place-items-center px-4 py-10">
      {/* Card */}
      <div className="w-full max-w-md card rounded-2xl shadow p-6 sm:p-8 relative overflow-hidden">
        {/* Fireflies (subtle) */}
        <div className="fireflies">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="firefly" />
          ))}
        </div>

        {/* Brand */}
        <div className="flex flex-col items-center gap-4 mb-6">
          <div className="size-16 rounded-full ring-2 ring-emerald-200 overflow-hidden shadow-sm">
            <img
              src="/images/logo.jpg"
              alt="The Jungle Journey Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-[#0b1f17] text-center">
            The Jungle Journey
          </h1>
        </div>

        {/* Form */}
        <div className="space-y-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-500"
          />

          {/* Actions */}
          <button
            onClick={doLogin}
            disabled={busy}
            className="w-full rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 transition"
          >
            {busy ? "Please wait…" : "Login"}
          </button>

          <button
            onClick={doSignup}
            disabled={busy}
            className="w-full rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 transition"
          >
            {busy ? "Please wait…" : "Sign Up"}
          </button>

          <button
            onClick={doForgot}
            disabled={busy}
            className="w-full rounded-md bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 transition"
          >
            {busy ? "Please wait…" : "Forgot Password"}
          </button>

          <button
            onClick={doGoogle}
            disabled={busy}
            className="w-full rounded-md bg-red-600 hover:bg-red-700 text-white font-medium py-2 transition"
          >
            {busy ? "Please wait…" : "Continue with Google"}
          </button>

          {!!msg && (
            <div className="mt-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md px-3 py-2">
              {msg}
            </div>
          )}
        </div>

        {/* Tiny note */}
        <p className="mt-4 text-center text-xs text-gray-500">
          Tip: After login, you’ll be redirected to <code>{nextPath}</code>.
        </p>
      </div>
    </div>
  );
}