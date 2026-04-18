import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const last = new Date();
  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/ueber-mich", priority: 0.85, changeFrequency: "monthly" },
    { path: "/leistungen", priority: 0.95, changeFrequency: "monthly" },
    { path: "/studio", priority: 0.8, changeFrequency: "monthly" },
    { path: "/kontakt", priority: 0.9, changeFrequency: "monthly" },
    { path: "/impressum", priority: 0.3, changeFrequency: "yearly" },
    { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" },
  ];
  return pages.map((p) => ({
    url: `${site.url}${p.path}`,
    lastModified: last,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
