import type { PortableTextBlock } from "@portabletext/types";

export interface SanityImageSource {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
    hotspot?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    alt?: string;
}

export type BlogCategory =
    | "assistencia-social"
    | "empreendedorismo-feminino"
    | "violencia-contra-mulher"
    | "gestao-publica"
    | "politica-sociedade";

export interface SanityBlogPost {
    _id: string;
    _createdAt: string;
    title: string;
    slug: { current: string };
    excerpt?: string;
    body: PortableTextBlock[];
    author: string;
    authorImage?: SanityImageSource;
    publishedAt: string;
    category?: BlogCategory;
    tags?: string[];
    featuredImage?: SanityImageSource;
    readTime?: string;
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        ogImage?: SanityImageSource;
    };
}
