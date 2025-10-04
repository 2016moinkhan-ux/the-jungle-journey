// src/firebase/firebase.js
// Client-safe Firebase bootstrap (Next.js App Router friendly, SSR-safe)

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { firebaseConfig } from "./config"; // ✅ single source of truth (with strict env checks)

let app;
// Ensure single app instance across HMR / reloads
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

// ---- Lazy singletons (client only) ----
let _auth = null;

export function getClientAuth() {
  // ❌ Never construct Firebase Auth on the server
  if (typeof window === "undefined") return null;

  if (!_auth) {
    _auth = getAuth(app);
    // Persist login across tabs/sessions
    setPersistence(_auth, browserLocalPersistence).catch((e) => {
      console.error("[firebase] setPersistence error:", e);
    });
  }
  return _auth;
}

// Backward-compat: on server => null; on client => same singleton
export const auth =
  typeof window === "undefined" ? null : getClientAuth();

export { app };

// (Optional) If you need Google provider later, define it here:
// import { GoogleAuthProvider } from "firebase/auth";
// let _googleProvider = null;
// export function getGoogleProvider() {
//   if (typeof window === "undefined") return null;
//   if (!_googleProvider) {
//     _googleProvider = new GoogleAuthProvider();
//     _googleProvider.setCustomParameters({ prompt: "select_account" });
//   }
//   return _googleProvider;
// }