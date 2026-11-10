import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Visa Guidance — 360 Travellers",
  description: "General visa guidance for international trips booked with 360 Travellers.",
};

export default function VisaGuidancePage() {
  return (
    <StaticPage kicker="Support" title="Visa guidance">
      <p>
        For international destinations — Thailand, Dubai, Bali, Vietnam,
        Japan and others — arranging your own visa is your responsibility
        as the traveller, unless we&rsquo;ve explicitly stated otherwise in
        your package inclusions.
      </p>

      <h2 className="font-display text-xl text-ink">How we help</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>We&rsquo;ll tell you upfront what type of visa your destination needs (e-visa, visa-on-arrival, etc.).</li>
        <li>We can point you to the right application process and typical timelines.</li>
        <li>We&rsquo;ll flag visa requirements clearly before you confirm your booking.</li>
      </ul>

      <p>
        Requirements change and depend on your passport and travel dates —
        always confirm current visa rules with the relevant embassy or an
        official visa service before booking flights. Message us on
        WhatsApp at +91 62309 52069 if you&rsquo;re unsure what your trip
        needs.
      </p>
    </StaticPage>
  );
}
