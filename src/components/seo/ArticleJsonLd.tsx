import type { SanityBlogPost } from "@/sanity/types";

interface ArticleJsonLdProps {
    post: SanityBlogPost;
    url: string;
}

const ArticleJsonLd = ({ post, url }: ArticleJsonLdProps) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.excerpt || "",
        author: {
            "@type": "Person",
            name: post.author,
            url: "https://patriciaianda.com.br",
        },
        datePublished: post.publishedAt,
        dateModified: post._createdAt || post.publishedAt,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default ArticleJsonLd;
