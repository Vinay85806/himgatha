import type { Metadata } from "next";
import Link from "next/link";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Help Centre — Himgatha",
  description: "Find answers or get in touch with the Himgatha team.",
};

const TOPICS = [
  {
    title: "Booking & payments",
    body: "How deposits, balance payments and confirmations work.",
    href: "/booking-policy",
  },
  {
    title: "Cancellations & refunds",
    body: "Our cancellation windows and refund timelines.",
    href: "/booking-policy",
  },
  {
    title: "Travel insurance",
    body: "What's covered by us and what you should insure yourself.",
    href: "/travel-insurance",
  },
  {
    title: "Visa guidance",
    body: "What to expect for visas on international trips.",
    href: "/visa-guidance",
  },
  {
    title: "Common questions",
    body: "Quick answers to things travellers usually ask.",
    href: "/faqs",
  },
];

export default function HelpCentrePage() {
  return (
    <StaticPage
      kicker="Support"
      title="Help centre"
      subtitle="Browse a topic below, or contact us directly and we'll sort it out."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {TOPICS.map((t) => (
          <Link
            key={t.title}
            href={t.href}
            className="rounded-2xl border border-ink/10 bg-white p-5 transition-colors hover:border-blue/40"
          >
            <h2 className="font-display text-base text-ink">{t.title}</h2>
            <p className="mt-1.5 text-sm text-ink/60">{t.body}</p>
          </Link>
        ))}
      </div>

      <p>
        Can&rsquo;t find what you need?{" "}
        <Link href="/contact" className="text-blue hover:underline">
          Contact our team
        </Link>{" "}
        directly.
      </p>
    </StaticPage>
  );
}
