// src/firebase/firebase.js

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// तुम्हारा Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB0X....abcd",
  authDomain: "the-jungle-journey.firebaseapp.com",
  projectId: "the-jungle-journey",
  storageBucket: "the-jungle-journey.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// App initialize (duplicate init avoid करने के लिए check)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Auth instance export
export const auth = getAuth(app);
export { app };