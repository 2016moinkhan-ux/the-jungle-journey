// src/app/page.jsx
export const metadata = {
  title: "The Jungle Journey",
  description:
    "Explore hotels, jungle safaris, and wildlife information across India's National Parks.",
};

export default function HomePage() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-green-700">The Jungle Journey</h1>
      <p className="mt-4 text-gray-700">
        Explore hotels, jungle safaris, and wildlife information across India’s National Parks.
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Tip: Use the Parks page to browse parks and plan your trip.
      </p>
    </main>
  );
}