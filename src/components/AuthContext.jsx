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
import { auth } from "@/firebase/firebase";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const clearError = () => setError("");

  /* ================= Auth Methods ================= */

  // Login
  const login = async (email, password) => {
    try {
      setLoading(true);
      clearError();
      await setPersistence(auth, browserLocalPersistence); // ✅ persist session
      await signInWithEmailAndPassword(auth, email, password);
      return { ok: true };
    } catch (err) {
      setError(err.message);
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Signup
  const signup = async (email, password) => {
    try {
      setLoading(true);
      clearError();
      await setPersistence(auth, browserLocalPersistence); // ✅ persist signup too
      await createUserWithEmailAndPassword(auth, email, password);
      return { ok: true };
    } catch (err) {
      setError(err.message);
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const googleLogin = async () => {
    try {
      setLoading(true);
      clearError();
      const provider = new GoogleAuthProvider();
      await setPersistence(auth, browserLocalPersistence); // ✅ persist google login
      await signInWithPopup(auth, provider);
      return { ok: true };
    } catch (err) {
      setError(err.message);
      return { ok: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // Forgot password
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

  // Logout (manual only)
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

  /* ================= Firebase Listener ================= */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setReady(true);
    });
    return () => unsub();
  }, []);

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

/* ================= Safe Hook ================= */
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    if (typeof window !== "undefined") {
      console.warn("⚠ useAuth used outside <AuthProvider>");
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