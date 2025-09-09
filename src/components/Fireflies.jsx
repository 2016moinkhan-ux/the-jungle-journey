// src/components/Fireflies.jsx
export default function Fireflies() {
  // सिर्फ 16 जुगनू — pure CSS nth-child से अलग timings/paths मिलेंगे
  return (
    <div aria-hidden className="fireflies">
      {Array.from({ length: 16 }).map((_, i) => (
        <i key={i} className="firefly" />
      ))}
    </div>
  );
}