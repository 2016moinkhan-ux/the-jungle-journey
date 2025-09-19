// src/firebase/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";

/**
 * Server-safe Firebase init.
 * We export `auth` and `googleProvider` placeholders so existing imports work,
 * and fill them only on the client to avoid SSR build errors.
 */

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// --- Singleton app (works on server & client)
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// --- Placeholders (so imports don't break on server)
let _auth = null;
let _googleProvider = null;

// --- Initialize Auth ONLY in the browser
if (typeof window !== "undefined") {
  // Dynamic import so nothing from firebase/auth loads on the server
  import("firebase/auth").then(
    async ({ getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence }) => {
      _auth = getAuth(app);
      try {
        await setPersistence(_auth, browserLocalPersistence);
      } catch {
        // ignore persistence issues during race/refresh
      }
      _googleProvider = new GoogleAuthProvider();
      _googleProvider.setCustomParameters({ prompt: "select_account" });
    }
  );
}

// --- Named exports kept for compatibility
export const auth = _auth;                 // will be null on server / until client init completes
export const googleProvider = _googleProvider;

// Optional helper if you want to explicitly wait in client components
export async function initAuthClient() {
  if (typeof window === "undefined") return null;
  if (_auth) return { auth: _auth, googleProvider: _googleProvider };
  await new Promise((r) => setTimeout(r, 0)); // next tick
  return { auth: _auth, googleProvider: _googleProvider };
}