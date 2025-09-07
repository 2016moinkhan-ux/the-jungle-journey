"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const leaf = useAnimation();
  useEffect(() => {
    (async () => {
      while (true) {
        await leaf.start({ rotate: 6, transition: { duration: 1.2, ease: "easeInOut" } });
        await leaf.start({ rotate: -6, transition: { duration: 1.2, ease: "easeInOut" } });
      }
    })();
  }, [leaf]);

  const doLogin = async () => {
    try {
      setLoading(true);
      setMsg("Signing you in…");
      await signInWithEmailAndPassword(auth, email.trim(), pwd.trim());
      setMsg("Login Successful 🎉 Redirecting…");
      setTimeout(() => (window.location.href = "/"), 900);
    } catch (e) {
      const map = {
        "auth/invalid-credential": "Email या password गलत है.",
        "auth/wrong-password": "Password गलत है.",
        "auth/user-not-found": "यह email रजिस्टर नहीं है.",
        "auth/too-many-requests": "बहुत बार कोशिश हुई है—थोड़ा बाद में ट्राय करें.",
      };
      setMsg(`Error: ${e.code || "unknown"} — ${map[e.code] || "Login failed ❌"}`);
      console.error("LOGIN ERROR:", e);
    } finally {
      setLoading(false);
    }
  };

  const doReset = async () => {
    if (!email) return setMsg("Reset के लिए email डालें.");
    try {
      setLoading(true);
      await sendPasswordResetEmail(auth, email.trim());
      setMsg("Reset link आपके email पर भेज दिया गया है ✉️");
    } catch (e) {
      setMsg(`Reset error: ${e.code || ""}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950 text-white overflow-hidden">
      {/* soft aurora blobs */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-emerald-500 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-lime-400 blur-3xl animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-green-600 blur-3xl opacity-70" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="px-6 pb-4 pt-6 text-center">
            <div className="mx-auto mb-3 flex items-center justify-center gap-2">
              <motion.span
                aria-hidden
                animate={leaf}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/90 text-emerald-950 font-bold"
              >
                🌿
              </motion.span>
              <h1 className="text-2xl md:text-3xl font-extrabold drop-shadow">
                The Jungle Journey
              </h1>
            </div>
            <p className="text-emerald-100/90">Login with your email and password</p>
          </div>

          <div className="px-6 pb-6 space-y-4">
            <div>
              <label className="text-sm text-emerald-50">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value.replace(/^\s+/, ""))}
                className="mt-1 w-full rounded-xl border border-white/25 bg-white/20 px-4 py-3 text-white placeholder-white/70 outline-none ring-emerald-300/60 focus:border-white/40 focus:ring-2"
              />
            </div>

            <div>
              <label className="text-sm text-emerald-50">Password</label>
              <div className="relative mt-1">
                <input
                  type={showPwd ? "text" : "password"}
                  placeholder="••••••••"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value.replace(/^\s+/, ""))}
                  onKeyDown={(e) => e.key === "Enter" && !loading && doLogin()}
                  className="w-full rounded-xl border border-white/25 bg-white/20 px-4 py-3 pr-16 text-white placeholder-white/70 outline-none ring-emerald-300/60 focus:border-white/40 focus:ring-2"
                />
                <button
                  type="button"
                  onClick={() => setShowPwd((s) => !s)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-3 py-1 text-xs text-white/90 hover:bg-white/10"
                >
                  {showPwd ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              onClick={doLogin}
              disabled={loading}
              className={`group relative w-full overflow-hidden rounded-xl px-4 py-3 font-semibold text-emerald-950 transition
                ${loading ? "bg-emerald-300 cursor-not-allowed" : "bg-emerald-400 hover:bg-emerald-300 active:scale-[.99]"}`}
            >
              <span className="relative z-10">{loading ? "Signing in…" : "Login"}</span>
              <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md transition group-hover:translate-x-[120%]" />
            </button>

            <div className="flex items-center justify-between text-sm text-emerald-100/90">
              <span>Forgot password?</span>
              <button
                onClick={doReset}
                disabled={loading || !email}
                className="underline underline-offset-4 hover:text-white disabled:opacity-50"
              >
                Send reset link
              </button>
            </div>

            {msg && (
              <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                className="rounded-lg bg-emerald-900/40 px-3 py-2 text-center text-emerald-50">
                {msg}
              </motion.p>
            )}

            <p className="pt-2 text-center text-xs text-emerald-100/80">
              Email/Password • MP Parks access
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}