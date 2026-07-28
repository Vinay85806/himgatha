import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "FAQs — 360 Travellers",
  description: "Frequently asked questions about booking, payments and travelling with 360 Travellers.",
};

const FAQS = [
  {
    q: "How do I book a package?",
    a: "Browse packages on the site, tap \"Enquire Now\" or message us on WhatsApp with the trip you're interested in. We'll confirm details and share a payment link to lock in your booking with a 25% deposit.",
  },
  {
    q: "Can itineraries be customised?",
    a: "Yes — every package can be adjusted for duration, hotel category, add-on experiences or group size. Tell us what you have in mind when you enquire.",
  },
  {
    q: "What's included in the price?",
    a: "Each package lists its own inclusions and exclusions (accommodation, meals, transfers, guides, etc.) on the package page. Flights are usually not included unless stated.",
  },
  {
    q: "What if I need to cancel?",
    a: "Refunds depend on how far out from departure you cancel — see our Booking Policy page for the exact slabs.",
  },
  {
    q: "Do you handle group and family trips?",
    a: "Yes, many of our itineraries are built for families and groups. Mention your group size in your enquiry and we'll tailor accordingly.",
  },
  {
    q: "How do I pay?",
    a: "We accept UPI, net banking, credit/debit cards and bank transfers. A 25% deposit confirms your booking; the balance is due 15 days before departure.",
  },
];

export default function FaqsPage() {
  return (
    <StaticPage kicker="Support" title="Frequently asked questions">
      <div className="divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white px-6">
        {FAQS.map((f) => (
          <div key={f.q} className="py-5">
            <h2 className="font-semibold text-ink">{f.q}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{f.a}</p>
          </div>
        ))}
      </div>

      <p>
        Still have a question? <a href="/contact" className="text-blue hover:underline">Get in touch</a>.
      </p>
    </StaticPage>
  );
}
