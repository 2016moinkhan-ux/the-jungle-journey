// src/firebase/config.js
// ✅ Strict env validation (measurementId optional)

const required = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Optional (GA4 Analytics)
const optional = {
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "",
};

function assertNonEmpty(name, value) {
  if (!value || String(value).trim().length < 6) {
    throw new Error(
      `[Firebase env] Missing or invalid ${name}. Fix it in Vercel → Project Settings → Environment Variables (Production).`
    );
  }
}

// required vars check
for (const [k, v] of Object.entries(required)) assertNonEmpty(k, v);

// optional lock to specific project prefix (if you set it)
const EXPECT_PROJECT_ID = process.env.NEXT_PUBLIC_EXPECT_PROJECT_ID;
if (EXPECT_PROJECT_ID && !required.projectId.startsWith(EXPECT_PROJECT_ID)) {
  throw new Error(
    `[Firebase env] projectId mismatch. Expected prefix "${EXPECT_PROJECT_ID}", got "${required.projectId}"`
  );
}

// Build firebaseConfig with measurementId only if present
export const firebaseConfig = {
  apiKey: required.apiKey,
  authDomain: required.authDomain,
  projectId: required.projectId,
  appId: required.appId,
  ...(optional.measurementId ? { measurementId: optional.measurementId } : {}),
};

// Safe info for health checks (no secrets)
export function safePublicSnapshot() {
  const apiKey = required.apiKey;
  return {
    apiKeyPrefix: `${apiKey.slice(0, 8)}•••`,
    authDomain: required.authDomain,
    projectId: required.projectId,
    appIdSuffix: `••${required.appId.slice(-6)}`,
    hasMeasurementId: Boolean(optional.measurementId),
  };
}