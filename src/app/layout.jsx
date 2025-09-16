import "./globals.css";
import { AuthProvider } from "@/components/AuthContext";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "http://localhost:3002";

export const metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "The Jungle Journey",
  description:
    "Hotels, Jungle Safaris & Wildlife Info for Indian National Parks.",
  openGraph: {
    title: "The Jungle Journey",
    description: "Hotels, Jungle Safaris & Wildlife Info for Indian National Parks.",
    url: siteUrl,
    siteName: "The Jungle Journey",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 600,
        alt: "The Jungle Journey Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Jungle Journey",
    description: "Hotels, Jungle Safaris & Wildlife Info for Indian National Parks.",
    images: ["/images/logo.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* ✅ पूरा app अब AuthProvider से wrap होगा */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}