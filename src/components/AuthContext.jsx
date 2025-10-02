// src/components/AuthContext.jsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
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

  /* =============== Auth Methods =============== */

  const ensurePersistence = async () => {
    // guard: auth might be null very early during hydration
    if (!auth) return;
    try {
      await setPersistence(auth, browserLocalPersistence);
    } catch (e) {
      console.error("[auth] setPersistence failed:", e);
    }
  };

  const login = async (email, password) => {
    try {
      setLoading(true);
      clearError();
      await ensurePersistence();
      await signInWithEmailAndPassword(auth, email, password);
      return { ok: true };
    } catch (err) {
      setError(err.message);
      return { ok: false, error: err.message };
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
      return { ok: true };
    } catch (err) {
      setError(err.message);
      return { ok: false, error: err.message };
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
      return { ok: true };
    } catch (err) {
      setError(err.message);
      return { ok: false, error: err.message };
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
      setError(err.message);
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await signOut(auth);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  /* =============== Auth State Listener =============== */
  useEffect(() => {
    if (!auth) {
      // very early render before firebase bootstraps
      setReady(true);
      return;
    }

    // ensure persistence once at mount too (in case user reloaded)
    ensurePersistence();

    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      setReady(true);
    });

    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
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