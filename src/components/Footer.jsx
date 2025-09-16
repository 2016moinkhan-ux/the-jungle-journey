// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-gray-600">
        <p>
          © {new Date().getFullYear()} The Jungle Journey.  
          All rights reserved.
        </p>
        <p className="mt-1">
          Made with ❤️ for Jungle Safaris & Wildlife Enthusiasts.
        </p>
        <div className="mt-3 space-x-4">
          <a href="/sitemap.xml" className="hover:underline">
            Sitemap
          </a>
          <a href="/robots.txt" className="hover:underline">
            Robots.txt
          </a>
          <a href="mailto:contact@thejunglejourney.com" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}