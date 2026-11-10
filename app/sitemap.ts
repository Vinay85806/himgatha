import type { MetadataRoute } from "next";
import { getAllPackageSlugs, getDestinations } from "@/lib/packages";

const SITE = "https://360travellers.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [slugs, destinations] = await Promise.all([
    getAllPackageSlugs(),
    getDestinations(),
  ]);

  const now = new Date();

  const destinationUrls: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${SITE}/destinations/${d.slug}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  const packageUrls: MetadataRoute.Sitemap = slugs.map((p) => ({
    url: `${SITE}/packages/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const staticUrls: MetadataRoute.Sitemap = [
    { url: SITE, lastModified: now, changeFrequency: "daily", priority: 1 },
    { url: `${SITE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/booking-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${SITE}/faqs`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/how-we-plan`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [
    ...staticUrls,
    ...destinationUrls,
    ...packageUrls,
  ];
}
