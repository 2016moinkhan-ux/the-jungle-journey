// src/app/layout.jsx
import "./globals.css";
import GoogleAnalytics from "../components/GoogleAnalytics";

export const metadata = {
  title: "The Jungle Journey",
  description:
    "Explore Madhya Pradesh National Parks — best time to visit, safaris, maps, and official booking links.",
  metadataBase: new URL("https://the-jungle-journey.vercel.app"),
  openGraph: {
    title: "The Jungle Journey",
    description:
      "Explore MP’s National Parks — Kanha, Bandhavgarh and more. Plan safaris and stays.",
    url: "https://the-jungle-journey.vercel.app",
    siteName: "The Jungle Journey",
    type: "website",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* GA4 tracking (G-DQ9TCKQH9D) */}
        <GoogleAnalytics />
      </body>
    </html>
  );
}