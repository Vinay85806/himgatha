import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Privacy Policy — Himgatha",
  description: "How Himgatha collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <StaticPage
      kicker="Legal"
      title="Privacy policy"
      subtitle="Last updated 2026. This page explains what information we collect and how we use it."
    >
      <h2 className="font-display text-xl text-ink">
        Information we collect
      </h2>
      <p>When you use this site, we may collect:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Name, email, phone number, travel dates and trip details you submit through an enquiry or booking form.</li>
        <li>Your email address if you subscribe to our newsletter.</li>
        <li>Basic usage data (pages visited, device/browser type, session behaviour) via analytics tooling.</li>
      </ul>

      <h2 className="font-display text-xl text-ink">How we use it</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>To respond to your enquiry and plan or manage your booking.</li>
        <li>To send trip-related updates and, if you&rsquo;ve opted in, occasional newsletters.</li>
        <li>To understand how people use the site and improve it.</li>
      </ul>

      <h2 className="font-display text-xl text-ink">
        What we don&rsquo;t do
      </h2>
      <p>
        We don&rsquo;t sell your personal information to third parties. We
        don&rsquo;t process or store payment card details on this site —
        payments are handled through a separate, secure payment link shared
        directly with you.
      </p>

      <h2 className="font-display text-xl text-ink">Third parties</h2>
      <p>
        We use Microsoft Clarity for anonymised website analytics and
        session insights, and a transactional email provider to send
        booking-related emails. These providers only receive the minimum
        data needed to perform their function.
      </p>

      <h2 className="font-display text-xl text-ink">Your choices</h2>
      <p>
        You can ask us to access, correct or delete the personal
        information we hold about you at any time by emailing{" "}
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
