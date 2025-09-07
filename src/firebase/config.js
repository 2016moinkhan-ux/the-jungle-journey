// src/firebase/config.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase Console → Project settings → SDK setup & config से EXACT values
const firebaseConfig = {
  apiKey: "AIzaSyDsiOBAbOtp-kQINFQ54Af0oI_nzvMl_90",
  authDomain: "the-jungle-journey.firebaseapp.com",
  projectId: "the-jungle-journey",
  storageBucket: "the-jungle-journey.appspot.com",
  messagingSenderId: "1081213950792",
  appId: "1:1081213950792:web:f92e5ab7bda5a20fe4b17d",
};

// Next.js में multi-init से बचने के लिए singleton
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// ✅ यही export चाहिए (login page इसी को import करेगा)
export const auth = getAuth(app);