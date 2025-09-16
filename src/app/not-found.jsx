import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center text-white"
         style={{ backgroundColor: "#14532d" }}> {/* Green background */}
      
      {/* Sad Monkey Image */}
      <div className="mb-6">
        <Image
          src="/images/sad-monkey.jpg"
          alt="Sad Monkey"
          width={200}
          height={200}
          className="mx-auto"
        />
      </div>

      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-8">Oops! यह page exist नहीं करता 🥲</p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Go Home
        </Link>
        <Link
          href="/parks"
          className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
        >
          Explore All Parks
        </Link>
      </div>
    </div>
  );
}