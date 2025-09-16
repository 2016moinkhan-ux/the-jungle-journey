// src/app/(protected)/parks/[id]/head.jsx
export default function Head({ params }) {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const parkId = params?.id || "park";

  const title = `${parkId} – The Jungle Journey`;
  const description = `Discover details, safaris, hotels and travel tips for ${parkId} National Park in Madhya Pradesh.`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={`${site}/parks/${parkId}`} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${site}/parks/${parkId}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Jungle Journey" />
      <meta property="og:image" content={`${site}/images/parks/${parkId}.jpg`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site}/images/parks/${parkId}.jpg`} />
    </>
  );
}