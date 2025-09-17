"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/firebase";        // ✅ सिर्फ auth चाहिए
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u ?? null);
      setReady(true);
    });
    return () => unsub();
  }, []);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email.trim(), password);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email.trim(), password);

  const forgot = (email) => sendPasswordResetEmail(auth, email.trim());

  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, ready, login, signup, forgot, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);