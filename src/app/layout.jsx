import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "The Jungle Journey",
  description:
    "Explore Madhya Pradesh’s National Parks, Wildlife Sanctuaries & Tiger Reserves.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-green-50 text-gray-900">
        {/* Navbar sab pages par dikhega */}
        <Navbar />

        {/* Page content */}
        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}