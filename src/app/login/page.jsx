"use client";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/firebase";

export default function LoginPage() {
  const router = useRouter();
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const doLogin = async (e) => {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      setMsg("✅ Login OK: " + (res.user?.email || ""));
      router.replace("/parks");            // <-- redirect after success
    } catch (err) {
      setMsg(`❌ ${err.code} — ${err.message}`);
      console.error("LOGIN ERROR", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid place-items-center min-h-screen p-6">
      <div className="w-full max-w-md rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">The Jungle Journey</h1>

        <form onSubmit={doLogin} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email (e.g. moin@test.com)"
            className="w-full border rounded-xl px-4 py-3"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl py-3 font-medium shadow bg-black text-white disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {msg && <p className="mt-4 text-sm">{msg}</p>}
      </div>
    </div>
  );
}