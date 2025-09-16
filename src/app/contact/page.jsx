// src/app/contact/page.jsx

export const metadata = {
  title: "Contact — The Jungle Journey",
  description: "Reach out for safari tips, hotel listings, or partnership queries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Contact</h1>
      <p className="mb-4">
        Email us at{" "}
        <a className="underline" href="mailto:hello@junglejourney.example">
          hello@junglejourney.example
        </a>
      </p>
      <p className="text-sm text-gray-600">
        Tip: You can replace this with a form later.
      </p>
    </main>
  );
}