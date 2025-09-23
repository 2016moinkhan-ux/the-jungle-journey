"use client";

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl rounded-2xl bg-black/60 backdrop-blur-md shadow-xl border border-white/20 p-8 text-white">
        <h1 className="text-4xl font-bold mb-6 text-emerald-300 drop-shadow-lg">
          About The Jungle Journey
        </h1>

        <p className="mb-4 leading-relaxed text-white/90">
          <strong>The Jungle Journey</strong> is a focused guide to{" "}
          <strong>Madhya Pradesh’s wild places</strong> — National Parks, Wildlife
          Sanctuaries and Tiger Reserves. You’ll find practical info to plan safaris,
          pick stays and understand the best seasons, permits and routes.
        </p>

        <p className="mb-6 leading-relaxed text-white/90">
          Why MP? Because it’s home to iconic landscapes like Kanha, Bandhavgarh,
          Pench and Satpura — plus lesser-known sanctuaries that deserve attention.
          Keeping scope limited to MP helps us keep details accurate and up to date.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-emerald-300 drop-shadow-lg">
          What you can expect
        </h2>
        <ul className="list-disc list-inside space-y-2 mb-6 text-white/90">
          <li>Clear park overviews (zone info, best time, how to reach)</li>
          <li>Stay options near popular gates</li>
          <li>Safari permit tips and booking pointers</li>
          <li>Maps, distances and quick trip planning notes</li>
        </ul>

        <p className="text-sm text-white/70">
          This is a work-in-progress. We’ll keep adding MP parks and sanctuaries
          steadily so planning becomes easy and reliable.
        </p>
      </div>
    </div>
  );
}