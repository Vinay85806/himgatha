import type { Metadata } from "next";
import Link from "next/link";
import StaticPage from "@/components/StaticPage";
import { Mail, Phone, WhatsApp } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us — 360 Travellers",
  description: "Get in touch with 360 Travellers by phone, WhatsApp or email.",
};

const CHANNELS = [
  {
    Icon: Phone,
    label: "Call us",
    value: "+91 85806 10324",
    href: "tel:+918580610324",
  },
  {
    Icon: WhatsApp,
    label: "WhatsApp",
    value: "+91 85806 10324",
    href: "https://wa.me/918580610324",
  },
  {
    Icon: Mail,
    label: "General enquiries",
    value: "info@360travellers.com",
    href: "mailto:info@360travellers.com",
  },
];

export default function ContactPage() {
  return (
    <StaticPage
      kicker="Get in touch"
      title="Contact us"
      subtitle="Have a question, or want a custom itinerary? Reach us any way that's easiest for you."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CHANNELS.map(({ Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-white p-6 text-center transition-colors hover:border-blue/40"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-blue/10 text-blue">
              <Icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-wide text-ink/45">
                {label}
              </span>
              <span className="mt-1 block text-sm font-medium text-ink">
                {value}
              </span>
            </span>
          </a>
        ))}
      </div>

      <p>
        Prefer to browse first?{" "}
        <Link href="/#search" className="text-blue hover:underline">
          Explore our packages
        </Link>{" "}
        and enquire directly from any trip that catches your eye.
      </p>
    </StaticPage>
  );
}
