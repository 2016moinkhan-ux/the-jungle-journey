"use client";   // ⬅️ सबसे ऊपर ये डालना ज़रूरी है

import { useState, useEffect } from "react";
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
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/parks";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  // अगर already logged-in है तो redirect कर दो
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) router.replace(next);
    });
    return () => unsub();
  }, [router, next]);

  // email/password login
  const doLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace(next);
    } catch (err) {
      setMsg("❌ " + err.message);
    }
  };

  // sign up new user
  const doSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.replace(next);
    } catch (err) {
      setMsg("❌ " + err.message);
    }
  };

  // reset password
  const doReset = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMsg("✅ Password reset link sent to email");
    } catch (err) {
      setMsg("❌ " + err.message);
    }
  };

  // Google login
  const doGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.replace(next);
    } catch (err) {
      setMsg("❌ " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <form
        onSubmit={doLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center">
          The Jungle Journey
        </h1>

        {msg && <div className="mb-4 text-red-600">{msg}</div>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded mb-2"
        >
          Login
        </button>

        <button
          type="button"
          onClick={doSignup}
          className="w-full bg-blue-600 text-white py-2 rounded mb-2"
        >
          Sign Up
        </button>

        <button
          type="button"
          onClick={doReset}
          className="w-full bg-yellow-500 text-white py-2 rounded mb-2"
        >
          Forgot Password
        </button>

        <button
          type="button"
          onClick={doGoogle}
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Continue with Google
        </button>
      </form>
    </div>
  );
}