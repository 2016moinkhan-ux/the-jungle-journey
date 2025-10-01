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

  // --- Auth methods ---
  const login = async (email, password) => {
    try {
      setLoading(true);
      clearError();
      await setPersistence(auth, browserLocalPersistence); // ✅ ensure persistent login
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
      await setPersistence(auth, browserLocalPersistence); // ✅ new accounts also persist
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
      const provider = new GoogleAuthProvider();
      await setPersistence(auth, browserLocalPersistence); // ✅ google login persists too
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

  // --- Listen to Firebase auth user ---
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

// Safe hook
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    if (typeof window !== "undefined") {
      console.warn("useAuth used before <AuthProvider> — returning fallback.");
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