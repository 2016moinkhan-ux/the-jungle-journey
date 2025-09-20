// src/firebase/firebase.js
// Client-safe Firebase bootstrap (App Router friendly)

import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

// Read from NEXT_PUBLIC_* envs (required on client)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// ---- Core singletons ----
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Debug (optional): uncomment while testing
// if (typeof window !== "undefined") {
//   const { apiKey, authDomain, projectId } = app.options;
//   console.log("[FIREBASE CONFIG]", { apiKey, authDomain, projectId });
// }

// We only create Auth/Provider on the client
let _auth = null;
let _googleProvider = null;

export function getClientAuth() {
  if (typeof window === "undefined") return null; // never construct on server
  if (!_auth) {
    _auth = getAuth(app);
    // Persist login on the browser
    setPersistence(_auth, browserLocalPersistence).catch((e) =>
      console.error("Auth persistence error:", e)
    );
  }
  return _auth;
}

export function getGoogleProvider() {
  if (typeof window === "undefined") return null;
  if (!_googleProvider) {
    _googleProvider = new GoogleAuthProvider();
    _googleProvider.setCustomParameters({ prompt: "select_account" });
  }
  return _googleProvider;
}

// If you still need access to the app itself:
export { app };