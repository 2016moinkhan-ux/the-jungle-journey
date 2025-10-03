// src/components/AuthContext.jsx
"use client";

import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  onIdTokenChanged,              // ⬅️ changed
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth as authSingleton } from "@/firebase/firebase";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // NOTE: firebase.ts exports `auth = getClientAuth()` on client; guard anyway
  const auth = authSingleton ?? null;

  const clearError = () => setError("");

  /* =============== Helpers =============== */

  const ensurePersistence = async () => {
    if (!auth) return;
    try {
      await setPersistence(auth, browserLocalPersistence);
    } catch (e) {
      // कुछ contexts में (3rd-party cookies off) fail हो सकता है, ignore
      // console.warn("[auth] setPersistence failed:", e);
    }
  };

  /* =============== Auth Methods =============== */

  const login = async (email, password) => {
    try {
      setLoading(true);
      clearError();
      await ensurePersistence();
      await signInWithEmailAndPassword(auth, email, password);
      // login के तुरंत बाद token warm
      await auth.currentUser?.getIdToken(true).catch(() => {});
      return { ok: true };
    } catch (err) {
      setError(err?.message || "Login failed");
      return { ok: false, error: err?.message };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (email, password) => {
    try {
      setLoading(true);
      clearError();
      await ensurePersistence();
      await createUserWithEmailAndPassword(auth, email, password);
      await auth.currentUser?.getIdToken(true).catch(() => {});
      return { ok: true };
    } catch (err) {
      setError(err?.message || "Signup failed");
      return { ok: false, error: err?.message };
    } finally {
      setLoading(false);
    }
  };

  const googleLogin = async () => {
    try {
      setLoading(true);
      clearError();
      await ensurePersistence();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      await auth.currentUser?.getIdToken(true).catch(() => {});
      return { ok: true };
    } catch (err) {
      setError(err?.message || "Google login failed");
      return { ok: false, error: err?.message };
    } finally {
      setLoading(false);
    }
  };

  const forgot = async (email) => {
    try {
      setLoading(true);
      clearError();
      await sendPasswordResetEmail(auth, email);
      return { ok: true };
    } catch (err) {
      setError(err?.message || "Could not send reset email");
      return { ok: false, error: err?.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
      // listener खुद null कर देगा
    } catch (err) {
      setError(err?.message || "Logout failed");
    } finally {
      setLoading(false);
    }
  };

  /* =============== Auth State + Hardening =============== */

  const refreshTimerRef = useRef(null);

  useEffect(() => {
    if (!auth) {
      setReady(true);
      return;
    }

    let didInit = false;

    (async () => {
      await ensurePersistence();

      // 🔁 token-aware listener
      const unsub = onIdTokenChanged(auth, async (u) => {
        try {
          if (u) {
            // light refresh (non-blocking)
            await u.getIdToken().catch(() => {});
            setUser(u);
          } else {
            setUser(null);
          }
        } finally {
          if (!didInit) {
            didInit = true;
            setReady(true);
          }
        }
      });

      // ⏱️ periodic silent refresh (~50m)
      refreshTimerRef.current = window.setInterval(async () => {
        const u = auth.currentUser;
        if (u) {
          try {
            await u.getIdToken(true);
          } catch {}
        }
      }, 50 * 60 * 1000);

      // 💤 tab visible/online होने पर refresh
      const onVisible = async () => {
        if (document.visibilityState === "visible" && auth.currentUser) {
          try {
            await auth.currentUser.getIdToken(true);
          } catch {}
        }
      };
      const onOnline = async () => {
        if (auth.currentUser) {
          try {
            await auth.currentUser.getIdToken(true);
          } catch {}
        }
      };

      document.addEventListener("visibilitychange", onVisible);
      window.addEventListener("online", onOnline);

      // cleanup
      return () => {
        unsub();
        if (refreshTimerRef.current) clearInterval(refreshTimerRef.current);
        document.removeEventListener("visibilitychange", onVisible);
        window.removeEventListener("online", onOnline);
      };
    })();

    // safety cleanup
    return () => {
      if (refreshTimerRef.current) clearInterval(refreshTimerRef.current);
    };
  }, [auth]);

  const value = useMemo(
    () => ({
      user,
      ready,
      loading,
      error,
      clearError,
      login,
      signup,
      googleLogin,
      forgot,
      logout,
    }),
    [user, ready, loading, error]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/* =============== Safe Hook =============== */
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    if (typeof window !== "undefined") {
      console.warn("⚠ useAuth used outside <AuthProvider> — returning fallback.");
    }
    return {
      user: null,
      ready: false,
      loading: false,
      error: "",
      clearError: () => {},
      login: async () => ({ ok: false }),
      signup: async () => ({ ok: false }),
      googleLogin: async () => ({ ok: false }),
      forgot: async () => ({ ok: false }),
      logout: async () => {},
    };
  }
  return ctx;
};