"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { getClientAuth, getGoogleProvider } from "@/firebase/firebase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const auth = getClientAuth(); // null on server; defined in browser

  async function handleEmailLogin(e) {
    e.preventDefault();
    setErr("");
    try {
      if (!auth) throw new Error("Auth not ready");
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/parks");
    } catch (error) {
      setErr(error.message || "Login failed");
    }
  }

  async function handleGoogle() {
    setErr("");
    try {
      if (!auth) throw new Error("Auth not ready");
      await signInWithPopup(auth, getGoogleProvider());
      router.replace("/parks");
    } catch (error) {
      setErr(error.message || "Google login failed");
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-zinc-900">
      <form
        onSubmit={handleEmailLogin}
        className="w-[360px] rounded-xl bg-zinc-800 p-6 shadow-xl space-y-4"
      >
        <h1 className="text-white text-2xl font-semibold">Log in</h1>

        {err ? (
          <div className="text-red-400 text-sm bg-red-950/40 border border-red-900 rounded p-2">
            {err}
          </div>
        ) : null}

        <input
          className="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full rounded border border-zinc-700 bg-zinc-900 px-3 py-2 text-white outline-none"
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full rounded bg-emerald-600 hover:bg-emerald-700 text-white py-2 font-medium"
        >
          Sign in
        </button>

        <div className="text-center text-zinc-400">or</div>

        <button
          type="button"
          onClick={handleGoogle}
          className="w-full rounded bg-zinc-700 hover:bg-zinc-600 text-white py-2 font-medium"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}