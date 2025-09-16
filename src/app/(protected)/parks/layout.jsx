// src/app/parks/layout.jsx
import JungleBackdrop from "@/components/JungleBackdrop";
import Fireflies from "@/components/Fireflies";

export default function ParksLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      {/* Background layer */}
      <div className="absolute inset-0 z-0">
        <JungleBackdrop />
        <Fireflies />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}