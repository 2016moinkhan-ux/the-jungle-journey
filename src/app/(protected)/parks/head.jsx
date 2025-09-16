// src/app/(protected)/parks/head.jsx
export default function Head() {
  const site = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3002")
    .replace(/\/$/, "");

  const title = "National Parks — The Jungle Journey";
  const desc =
    "Explore Indian National Parks — Kanha, Bandhavgarh, Pench, Satpura and more. Safari booking links, hotel info, and wildlife details.";
  // Safe image (exists already). If you later add a parks OG image, change to `${site}/images/og/parks-list.jpg`
  const ogImage = `${site}/images/logo.jpg`;

  return (
    <>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={desc} />

      {/* Canonical */}
      <link rel="canonical" href={`${site}/parks`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={`${site}/parks`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Jungle Journey" />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}