import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "Blog — Him Gatha",
  description: "Travel stories, guides and tips from Him Gatha — coming soon.",
};

export default function BlogPage() {
  return (
    <StaticPage kicker="Stories" title="The Him Gatha blog">
      <p>
        We&rsquo;re working on travel guides, destination tips and stories
        from the road. Nothing published yet — check back soon, or follow us
        on social for updates in the meantime.
      </p>
    </StaticPage>
  );
}
