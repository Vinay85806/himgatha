import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "How We Plan Your Trip — 360 Travellers",
  description:
    "From first enquiry to landing back home — here's how 360 Travellers puts your itinerary together.",
};

const STEPS = [
  {
    title: "1. Tell us what you want",
    body: "Browse a package or send an enquiry with your destination, dates and group size — or just message us on WhatsApp with a rough idea.",
  },
  {
    title: "2. We shape the itinerary",
    body: "We put together (or adjust) an itinerary around your budget, pace and interests — hill stations, beaches, culture, adventure, or a mix.",
  },
  {
    title: "3. You confirm with a deposit",
    body: "A minimum 25% booking deposit confirms your slot. The balance is due 15 days before departure. Full pricing is shared upfront, no hidden costs.",
  },
  {
    title: "4. We handle the logistics",
    body: "Stays, transfers and local guides are arranged and confirmed. You get a confirmation voucher and a point of contact for the trip.",
  },
  {
    title: "5. On-trip support",
    body: "Our team stays reachable through your travel dates for anything that comes up — delays, changes, local recommendations.",
  },
];

export default function HowWePlanPage() {
  return (
    <StaticPage
      kicker="Our process"
      title="How we plan your trip"
      subtitle="No fixed templates — every itinerary is built around the traveller."
    >
      <div className="space-y-6">
        {STEPS.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-ink/10 bg-white p-5"
          >
            <h2 className="font-display text-lg text-ink">{s.title}</h2>
            <p className="mt-2 text-ink/65">{s.body}</p>
          </div>
        ))}
      </div>

      <p>
        Ready to start? <a href="/#search" className="text-blue hover:underline">Browse packages</a>{" "}
        or message us directly on WhatsApp at +91 62309 52069.
      </p>
    </StaticPage>
  );
}
