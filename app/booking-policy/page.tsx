import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PolicyAccordion from "@/components/PolicyAccordion";

export const metadata: Metadata = {
  title: "Booking Policy — Him Gatha",
  description:
    "Confirmation, refund, cancellation and payment policies for Him Gatha bookings.",
};

export default function BookingPolicyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-cream">
      <Navbar />

      <div className="border-b border-ink/8 bg-cream pt-36 pb-4 sm:pt-40">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <span className="kicker text-gold-deep">
            <span className="h-px w-8 bg-gold-deep" />
            Support
          </span>
          <h1 className="mt-4 font-display text-3xl tracking-tight text-ink sm:text-4xl">
            Booking policy
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/65">
            Everything about confirmations, payments, cancellations and
            refunds — in one place.
          </p>
        </div>
      </div>

      <PolicyAccordion />
      <Footer />
    </main>
  );
}
