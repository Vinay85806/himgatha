import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Careers — 360 Travellers",
  description: "There are no open positions at 360 Travellers right now, but we're always happy to hear from people who love travel.",
};

export default function CareersPage() {
  return (
    <StaticPage kicker="Join us" title="Careers at 360 Travellers">
      <p>
        We don&rsquo;t have any open positions right now. We&rsquo;re a small
        team, and when that changes, we&rsquo;ll post the role here.
      </p>
      <p>
        If you&rsquo;re passionate about travel and want to be considered for
        future opportunities, feel free to write to us at{" "}
        <a
          href="mailto:info@360travellers.com"
          className="text-blue hover:underline"
        >
          info@360travellers.com
        </a>{" "}
        with a bit about yourself — we keep good introductions on file.
      </p>
    </StaticPage>
  );
}
