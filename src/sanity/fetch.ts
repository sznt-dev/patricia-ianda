import { client } from "./client";
import { isSanityConfigured } from "./env";
import {
    BLOG_LIST_QUERY,
    BLOG_DETAIL_QUERY,
    BLOG_SLUGS_QUERY,
} from "./queries";
import type { SanityBlogPost } from "./types";
import { seedPosts } from "./seed";

export async function getBlogs(): Promise<SanityBlogPost[]> {
    if (!isSanityConfigured || !client) return seedPosts;
    try {
        const posts = await client.fetch<SanityBlogPost[]>(
            BLOG_LIST_QUERY,
            {},
            { next: { revalidate: 60 } },
        );
        return posts.length > 0 ? posts : seedPosts;
    } catch {
        return seedPosts;
    }
}

export async function getBlogBySlug(
    slug: string,
): Promise<SanityBlogPost | null> {
    if (!isSanityConfigured || !client) {
        return seedPosts.find((p) => p.slug.current === slug) || null;
    }
    try {
        const post = await client.fetch<SanityBlogPost | null>(
            BLOG_DETAIL_QUERY,
            { slug },
            { next: { revalidate: 60 } },
        );
        return post || seedPosts.find((p) => p.slug.current === slug) || null;
    } catch {
        return seedPosts.find((p) => p.slug.current === slug) || null;
    }
}

export async function getBlogSlugs(): Promise<{ slug: string }[]> {
    if (!isSanityConfigured || !client) {
        return seedPosts.map((p) => ({ slug: p.slug.current }));
    }
    try {
        const slugs = await client.fetch<{ slug: string }[]>(
            BLOG_SLUGS_QUERY,
            {},
            { next: { revalidate: 60 } },
        );
        return slugs.length > 0
            ? slugs
            : seedPosts.map((p) => ({ slug: p.slug.current }));
    } catch {
        return seedPosts.map((p) => ({ slug: p.slug.current }));
    }
}

export async function getRecentBlogs(): Promise<SanityBlogPost[]> {
    const all = await getBlogs();
    return all.slice(0, 3);
}
