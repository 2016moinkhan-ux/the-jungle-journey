export const metadata = {
  title: "About – The Jungle Journey",
  description:
    "The Jungle Journey focuses on Madhya Pradesh’s wildlife—National Parks, Sanctuaries and Tiger Reserves. Plan safaris and stays with clear, practical info.",
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-800 mb-6">
        About The Jungle Journey
      </h1>

      <p className="text-slate-700 leading-7 mb-4">
        The Jungle Journey is a focused guide to{" "}
        <strong>Madhya Pradesh’s wild places</strong>—National Parks, Wildlife
        Sanctuaries and Tiger Reserves. You’ll find practical info to plan{" "}
        safaris, pick stays and understand the best seasons, permits and
        routes.
      </p>

      <p className="text-slate-700 leading-7 mb-4">
        Why MP? Because it’s home to iconic landscapes like Kanha, Bandhavgarh,
        Pench and Satpura—plus lesser-known sanctuaries that deserve attention.
        Keeping scope limited to MP helps us keep details accurate and up to
        date.
      </p>

      <h2 className="text-2xl font-bold text-emerald-800 mt-8 mb-3">
        What you can expect
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-slate-700">
        <li>Clear park overviews (zone info, best time, how to reach)</li>
        <li>Stay options near popular gates</li>
        <li>Safari permit tips and booking pointers</li>
        <li>Maps, distances and quick trip planning notes</li>
      </ul>

      <p className="text-slate-700 leading-7 mt-6">
        This is a work-in-progress. We’ll keep adding MP parks and sanctuaries
        steadily so planning becomes easy and reliable.
      </p>
    </main>
  );
}