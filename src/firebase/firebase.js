// src/firebase/firebase.js
// Client-safe Firebase bootstrap (Next.js App Router friendly)

import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

// Read from NEXT_PUBLIC_* envs (must exist on client & Vercel)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Single app instance
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ---- Lazy singletons (client only) ----
let _auth = null;
let _googleProvider = null;

/**
 * Safe getter (prefer this inside client components)
 */
export function getClientAuth() {
  if (typeof window === "undefined") return null; // never construct on server
  if (!_auth) {
    _auth = getAuth(app);
    setPersistence(_auth, browserLocalPersistence).catch((e) => {
      console.error("[firebase] setPersistence error:", e);
    });
  }
  return _auth;
}

/**
 * Backward-compat: some files import { auth } directly.
 * On server it stays null (so SSR won't instantiate auth).
 * On client it lazily resolves to the same singleton.
 */
export const auth =
  typeof window === "undefined" ? null : getClientAuth();

/**
 * Google provider (client only)
 */
export function getGoogleProvider() {
  if (typeof window === "undefined") return null;
  if (!_googleProvider) {
    _googleProvider = new GoogleAuthProvider();
    _googleProvider.setCustomParameters({ prompt: "select_account" });
  }
  return _googleProvider;
}

export { app };