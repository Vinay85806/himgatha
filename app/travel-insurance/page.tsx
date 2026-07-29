import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Travel Insurance — Himgatha",
  description: "What's covered on your trip, and why we recommend arranging your own travel insurance.",
};

export default function TravelInsurancePage() {
  return (
    <StaticPage kicker="Support" title="Travel insurance">
      <p>
        Travel insurance is not included in our package pricing by default —
        it&rsquo;s listed as an exclusion on most itineraries, and we
        strongly recommend arranging your own cover before you travel.
      </p>

      <h2 className="font-display text-xl text-ink">
        Why we recommend it
      </h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>Trip cancellations or delays outside our control (weather, strikes, flight changes).</li>
        <li>Medical emergencies, especially for international and high-altitude trips like Ladakh and Spiti.</li>
        <li>Lost baggage or travel documents.</li>
      </ul>

      <p>
        You&rsquo;re free to choose any insurer you&rsquo;re comfortable
        with. If you&rsquo;d like a recommendation, mention it in your
        enquiry and our team will point you to a couple of reliable options.
      </p>
    </StaticPage>
  );
}
