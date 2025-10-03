// src/firebase/config.js
// ❌ Duplicate init हटाया गया
// ✅ अब ये सिर्फ firebase.js से re-export करेगा

export { app, auth, getClientAuth, getGoogleProvider } from "./firebase";