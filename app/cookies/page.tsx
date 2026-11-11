import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Cookie Policy — Him Gatha",
  description: "How Him Gatha uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <StaticPage kicker="Legal" title="Cookie policy">
      <p>
        This site uses a small number of cookies and similar technologies to
        make the site work properly and understand how it&rsquo;s used.
      </p>

      <h2 className="font-display text-xl text-ink">What we use</h2>
      <ul className="list-disc space-y-2 pl-5">
        <li>
          <strong>Essential cookies</strong> — needed for basic site
          functionality (e.g. remembering your session on the admin
          dashboard).
        </li>
        <li>
          <strong>Analytics</strong> — we use Microsoft Clarity to
          understand how visitors use the site (page views, clicks, session
          behaviour) so we can improve it. This data is anonymised and not
          used to identify you personally.
        </li>
      </ul>

      <p>
        We don&rsquo;t currently use third-party advertising cookies or ad
        trackers on this site. You can control or disable cookies through
        your browser settings at any time — note that some parts of the
        site (like the admin dashboard) may not work correctly without
        essential cookies enabled.
      </p>

      <p>
        Questions? Email{" "}
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
