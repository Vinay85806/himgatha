import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Blog — Himgatha",
  description: "Travel stories, guides and tips from Himgatha — coming soon.",
};

export default function BlogPage() {
  return (
    <StaticPage kicker="Stories" title="The Himgatha blog">
      <p>
        We&rsquo;re working on travel guides, destination tips and stories
        from the road. Nothing published yet — check back soon, or follow us
        on social for updates in the meantime.
      </p>
    </StaticPage>
  );
}
