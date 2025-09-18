// src/firebase/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// ✅ App init (singleton pattern)
export const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ Auth
export const auth = getAuth(app);

// ✅ Make login persist (local storage)
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    if (typeof window !== "undefined") {
      console.log("Auth persistence set: LOCAL ✅");
    }
  })
  .catch((error) => {
    console.error("Auth persistence error:", error);
  });

// ✅ Google provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });