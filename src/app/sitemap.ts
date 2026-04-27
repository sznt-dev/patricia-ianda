import type { MetadataRoute } from "next";
import { getBlogSlugs } from "@/sanity/fetch";

const BASE = "https://patriciaianda.com.br";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${BASE}/`,                    lastModified: now, priority: 1.0, changeFrequency: "weekly" },
        { url: `${BASE}/minha-historia`,      lastModified: now, priority: 0.9, changeFrequency: "monthly" },
        { url: `${BASE}/meu-trabalho`,        lastModified: now, priority: 0.8, changeFrequency: "monthly" },
        { url: `${BASE}/patricia-na-midia`,   lastModified: now, priority: 0.8, changeFrequency: "weekly" },
        { url: `${BASE}/fale-comigo`,         lastModified: now, priority: 0.7, changeFrequency: "yearly" },
        { url: `${BASE}/blog`,                lastModified: now, priority: 0.9, changeFrequency: "weekly" },
    ];

    const slugs = await getBlogSlugs();
    const blogRoutes: MetadataRoute.Sitemap = slugs.map(({ slug }) => ({
        url: `${BASE}/blog/${slug}`,
        lastModified: now,
        priority: 0.7,
        changeFrequency: "monthly",
    }));

    return [...staticRoutes, ...blogRoutes];
}
