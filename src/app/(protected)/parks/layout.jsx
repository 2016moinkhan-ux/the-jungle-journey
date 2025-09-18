import JungleBackdrop from "@/components/JungleBackdrop";
import Fireflies from "@/components/Fireflies";
import Navbar from "@/components/Navbar";

export default function ProtectedLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <JungleBackdrop />
        <Fireflies />
      </div>

      {/* Foreground */}
      <div className="relative z-10">
        <Navbar />
        {children}
      </div>
    </div>
  );
}