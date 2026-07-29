import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — Himgatha",
  description: "Terms and conditions for booking travel packages with Himgatha.",
};

export default function TermsPage() {
  return (
    <StaticPage
      kicker="Legal"
      title="Terms & conditions"
      subtitle="Last updated 2026. Please read these terms before booking a trip with us."
    >
      <h2 className="font-display text-xl text-ink">Bookings</h2>
      <p>
        A booking is confirmed once we receive the required deposit
        (typically 25% of the package price) and share a confirmation
        voucher. The remaining balance is due 15 days before departure,
        unless otherwise agreed in writing.
      </p>

      <h2 className="font-display text-xl text-ink">Pricing</h2>
      <p>
        Prices shown are per person unless stated otherwise and are subject
        to change until a booking is confirmed with a deposit. Prices are
        inclusive of applicable GST unless stated otherwise.
      </p>

      <h2 className="font-display text-xl text-ink">
        Cancellations & refunds
      </h2>
      <p>
        See our <a href="/booking-policy" className="text-blue hover:underline">Booking Policy</a> page
        for our cancellation and refund schedule.
      </p>

      <h2 className="font-display text-xl text-ink">Our responsibility</h2>
      <p>
        We arrange accommodation, transfers and experiences through
        third-party vendors (hotels, cab operators, local guides). While we
        vet these partners carefully, we&rsquo;re not liable for delays,
        losses or disruptions caused by third parties, weather, government
        action, or circumstances outside our reasonable control.
      </p>

      <h2 className="font-display text-xl text-ink">Traveller responsibility</h2>
      <p>
        You&rsquo;re responsible for carrying valid identification, any
        required visas, and travel insurance. Please share accurate traveller
        details at the time of booking.
      </p>

      <h2 className="font-display text-xl text-ink">Changes to itineraries</h2>
      <p>
        Occasionally an itinerary component may need to change due to
        weather, local conditions or availability. Where possible, we&rsquo;ll
        offer a comparable alternative and keep you informed.
      </p>

      <h2 className="font-display text-xl text-ink">Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <a
          href="mailto:devenderthakur354@gmail.com"
          className="text-blue hover:underline"
        >
          devenderthakur354@gmail.com
        </a>
        .
      </p>
    </StaticPage>
  );
}
