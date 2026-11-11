import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Press — 360 Travellers",
  description: "Media and press enquiries for 360 Travellers.",
};

export default function PressPage() {
  return (
    <StaticPage kicker="Media" title="Press">
      <p>
        For media enquiries, interview requests, or anything press-related,
        write to us at{" "}
        <a
          href="mailto:info@360travellers.com"
          className="text-blue hover:underline"
        >
          info@360travellers.com
        </a>{" "}
        and we&rsquo;ll get back to you.
      </p>
    </StaticPage>
  );
}
