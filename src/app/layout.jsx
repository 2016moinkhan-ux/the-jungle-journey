// src/app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "The Jungle Journey",
  description: "Explore Madhya Pradesh National Parks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="
          bg-[#0a1612]               /* deep jungle green-black */
          text-emerald-50            /* light text */
          selection:bg-emerald-500/30 selection:text-emerald-50
          antialiased
        "
      >
        {children}
      </body>
    </html>
  );
}