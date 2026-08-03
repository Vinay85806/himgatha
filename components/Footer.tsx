import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Instagram, Facebook, Twitter } from "./icons";
import Reveal from "./Reveal";
import NewsletterForm from "./NewsletterForm";

const LOGO = "/images/himgatha-logo.png";

const columns = [
  {
    title: "Destinations",
    links: [
      { label: "Bali", href: "/destinations/bali" },
      { label: "Maldives", href: "/destinations/maldives" },
      { label: "Kashmir", href: "/destinations/kashmir" },
      { label: "Himachal Pradesh", href: "/destinations/himachal-pradesh" },
      { label: "Spiti Valley", href: "/destinations/spiti-valley" },
      { label: "Ladakh", href: "/destinations/ladakh" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "How we plan", href: "/how-we-plan" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help centre", href: "/help-centre" },
      { label: "Booking policy", href: "/booking-policy" },
      { label: "Travel insurance", href: "/travel-insurance" },
      { label: "Visa guidance", href: "/visa-guidance" },
      { label: "FAQs", href: "/faqs" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-coal text-cream">
      {/* CTA + newsletter band */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="-mt-px grid gap-10 rounded-b-[2.5rem] border-x border-b border-white/8 bg-gradient-to-br from-pine to-pine-deep px-7 py-12 sm:px-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Your next journey
                <br />
                <span className="italic text-gold-soft">begins with hello.</span>
              </h2>
              <p className="mt-4 max-w-md text-cream/70">
                Join the list for handpicked itineraries, members-only fares and
                quiet-season escapes — no noise, just good travel.
              </p>
            </div>
            <div className="lg:justify-self-end">
              <NewsletterForm />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="#top" className="flex items-center" aria-label="Him Gatha — home">
              <Image
                src={LOGO}
                alt="Him Gatha"
                width={80}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/55">
              A boutique travel studio crafting personalised luxury journeys
              across 60+ destinations worldwide.
            </p>

            <div className="mt-6 space-y-2.5 text-sm text-cream/70">
              <a
                href="tel:+916230952069"
                className="flex items-center gap-2.5 transition-colors hover:text-gold-soft"
              >
                <Phone className="h-4 w-4 text-gold-soft" />
                +91 62309 52069
              </a>
              <a
                href="mailto:Info.himgathatravels@gmail.com"
                className="flex items-center gap-2.5 transition-colors hover:text-gold-soft"
              >
                <Mail className="h-4 w-4 text-gold-soft" />
                Info.himgathatravels@gmail.com
              </a>
              <a
                href="mailto:devenderthakur354@gmail.com"
                className="flex items-center gap-2.5 pl-[26px] text-xs text-cream/50 transition-colors hover:text-gold-soft"
              >
                devenderthakur354@gmail.com
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/12 text-cream/70 transition-all hover:border-gold/50 hover:text-gold-soft"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/45">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-cream/70 transition-colors hover:text-gold-soft"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-7 text-sm text-cream/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Him Gatha. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-gold-soft">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-gold-soft">
              Terms
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-gold-soft">
              Cookies
            </Link>
            <span className="text-cream/30">Made for explorers ✦</span>
            <span className="text-cream/30">
              Developed by{" "}
              <a
                href="mailto:vinay70184@gmail.com"
                className="text-cream/45 underline decoration-cream/20 underline-offset-2 transition-colors hover:text-gold-soft"
              >
                Karan
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
