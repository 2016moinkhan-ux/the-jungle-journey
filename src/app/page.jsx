"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const tilesTop = [
  { src: "/landing/tiger.jpg", alt: "Tiger" },
  { src: "/landing/jeep-safari.jpg", alt: "Jeep Safari" },
  { src: "/landing/forest-trail.jpg", alt: "Forest Trail" },
  { src: "/landing/sunrise.jpg", alt: "Sunrise" },
];

const tilesBottom = [
  { src: "/landing/river.jpg", alt: "River" },
  { src: "/landing/birds.jpg", alt: "Birds" },
  { src: "/landing/hotel-lodge.jpg", alt: "Eco Lodge" },
  { src: "/landing/tent-camp.jpg", alt: "Tent Camp" },
];

export default function Home() {
  const router = useRouter();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 4 seconds
    const timer1 = setTimeout(() => setFadeOut(true), 4000);
    // Redirect after fade animation completes (4s + 0.6s)
    const timer2 = setTimeout(() => router.replace("/parks"), 4600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [router]);

  return (
    <main
      className={`min-h-[100dvh] overflow-hidden bg-white text-gray-900 transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Top tiles */}
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:pt-10">
        <TileRow images={tilesTop} tilt={-6} />
      </div>

      {/* Center text */}
      <div
        className={`select-none px-4 py-6 text-center sm:py-10 transition-transform duration-1000 ${
          fadeOut ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <h1 className="text-2xl font-semibold sm:text-3xl">
          Discover the Wild Heart of India
        </h1>
        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          Stay close to the jungle · Explore safaris · Plan your adventure
        </p>
      </div>

      {/* Bottom tiles */}
      <div className="mx-auto max-w-5xl px-4 pb-6 sm:pb-10">
        <TileRow images={tilesBottom} tilt={6} />
      </div>

      {/* tiny footer tagline */}
      <div className="pb-6 text-center text-xs text-gray-500">
        The Jungle Journey
      </div>

      {/* animations */}
      <style jsx global>{`
        @keyframes jjFloat {
          0% {
            transform: translateY(0) rotate(var(--jj-rot)) scale(1);
          }
          50% {
            transform: translateY(-10px) rotate(var(--jj-rot)) scale(1.05);
          }
          100% {
            transform: translateY(0) rotate(var(--jj-rot)) scale(1);
          }
        }
        .jj-tile {
          animation: jjFloat 3s ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
    </main>
  );
}

function TileRow({ images, tilt = 0 }) {
  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-4" aria-hidden>
      {images.map((img, i) => (
        <div
          key={i}
          className="jj-tile relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gray-200 shadow-md"
          style={{ ["--jj-rot"]: `${tilt + (i % 2 ? 3 : -3)}deg` }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width:768px) 25vw, 200px"
            className="object-cover"
            priority={i < 2}
          />
        </div>
      ))}
    </div>
  );
}