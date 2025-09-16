// src/app/login/head.jsx
export default function Head() {
  const site =
    (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3002").replace(/\/$/, "");

  return (
    <>
      <title>Login — The Jungle Journey</title>
      <meta
        name="description"
        content="Log in to The Jungle Journey to access parks, safari info, and your saved plans."
      />
      {/* SEO best-practice: login pages should not be indexed */}
      <meta name="robots" content="noindex, nofollow" />

      {/* Canonical */}
      <link rel="canonical" href={`${site}/login`} />

      {/* Social tags */}
      <meta property="og:title" content="Login — The Jungle Journey" />
      <meta
        property="og:description"
        content="Sign in to explore Indian national parks, hotels and safaris."
      />
      <meta property="og:url" content={`${site}/login`} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
    </>
  );
}