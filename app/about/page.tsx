import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";
import { stats } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us — 360 Travellers",
  description:
    "360 Travellers is a boutique travel studio crafting personalised holidays and private experiences across 60+ destinations worldwide.",
};

export default function AboutPage() {
  return (
    <StaticPage
      kicker="Our story"
      title="About 360 Travellers"
      subtitle="A boutique travel studio crafting personalised journeys, one trip at a time."
    >
      <p>
        360 Travellers is a curated travel company specialising in
        handcrafted domestic and international tour packages for Indian
        travellers. We focus on personalised experiences, reliable service,
        and transparent pricing — no hidden costs, no surprises.
      </p>
      <p>
        From the mountains of Himachal, Spiti and Ladakh to the beaches of
        Goa and Thailand, every itinerary we put together is trip-tested and
        designed around what you actually want out of a holiday — not a
        one-size-fits-all package.
      </p>

      <div className="grid grid-cols-2 gap-5 rounded-2xl border border-ink/10 bg-white p-6 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-display text-2xl text-ink">{s.value}</p>
            <p className="mt-1 text-xs text-ink/50">{s.label}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-xl text-ink">What we believe in</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Itineraries built around you, not a fixed template.</li>
        <li>Clear, upfront pricing with no hidden add-ons.</li>
        <li>Real support before, during and after your trip.</li>
      </ul>

      <p>
        Have a question or want to plan something custom? Reach us at{" "}
        <a
          href="mailto:devenderthakur354@gmail.com"
          className="text-blue hover:underline"
        >
          devenderthakur354@gmail.com
        </a>{" "}
        or on WhatsApp at +91 62309 52069.
      </p>
    </StaticPage>
  );
}
