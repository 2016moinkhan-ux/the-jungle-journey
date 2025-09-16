// src/firebase/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0X....abcd",
  authDomain: "the-jungle-journey.firebaseapp.com",
  projectId: "the-jungle-journey",
  storageBucket: "the-jungle-journey.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};

// ✅ Firebase app initialize
const app = initializeApp(firebaseConfig);

// ✅ Auth instance
const auth = getAuth(app);

export { app, auth }; // <- दोनों export कर दो