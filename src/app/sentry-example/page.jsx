'use client';

export default function SentryExamplePage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Sentry Test (Frontend)</h1>
      <button
        onClick={() => {
          // Deliberate crash (frontend test)
          throw new Error('Sentry Frontend Test Error');
        }}
        style={{
          padding: "10px 20px",
          background: "red",
          color: "white",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer"
        }}
      >
        Trigger error
      </button>
    </main>
  );
}