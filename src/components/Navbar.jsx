import Image from "next/image";
import LogoutButton from "@/components/LogoutButton";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#0b3b2e] text-white">
      {/* Left side - Logo + Title */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/logo.jpg"
          alt="The Jungle Journey Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-xl font-bold">The Jungle Journey</h1>
      </div>

      {/* Right side - Logout Button */}
      <LogoutButton />
    </nav>
  );
}