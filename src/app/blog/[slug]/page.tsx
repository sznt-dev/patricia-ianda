import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostBody from "@/components/blog/PostBody";
import ArticleJsonLd from "@/components/seo/ArticleJsonLd";
import NewsletterSection from "@/components/home/NewsletterSection";
import { getBlogBySlug, getBlogSlugs, getBlogs } from "@/sanity/fetch";
import { categoryLabels } from "@/sanity/seed";

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = await getBlogSlugs();
    return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogBySlug(slug);
    if (!post) return { title: "Artigo não encontrado" };
    return {
        title: post.seo?.metaTitle || post.title,
        description: post.seo?.metaDescription || post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: "article",
            publishedTime: post.publishedAt,
            authors: [post.author],
        },
    };
}

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
    });

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;
    const post = await getBlogBySlug(slug);

    if (!post) {
        notFound();
    }

    const allPosts = await getBlogs();
    const currentIndex = allPosts.findIndex((p) => p.slug.current === slug);
    const next = currentIndex >= 0 && currentIndex < allPosts.length - 1
        ? allPosts[currentIndex + 1]
        : null;

    return (
        <>
            <ArticleJsonLd
                post={post}
                url={`https://patriciaianda.com.br/blog/${slug}`}
            />
            <section className="pt-post-hero">
                <div className="container">
                    <div className="pt-post-hero__inner">
                        {post.category && (
                            <span className="pt-overline pt-post-hero__category">
                                {categoryLabels[post.category]}
                            </span>
                        )}
                        <h1 className="pt-post-hero__title">{post.title}</h1>
                        {post.excerpt && (
                            <p className="pt-post-hero__lead">{post.excerpt}</p>
                        )}
                        <div className="pt-post-hero__meta">
                            <span className="author">{post.author}</span>
                            <span className="sep">·</span>
                            <span>{formatDate(post.publishedAt)}</span>
                            {post.readTime && (
                                <>
                                    <span className="sep">·</span>
                                    <span>{post.readTime}</span>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <article className="pt-post-body">
                <div className="container">
                    <PostBody body={post.body} />

                    <div className="pt-post-footer">
                        <div className="pt-post-share">
                            <span>Compartilhar</span>
                            <a
                                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Twitter / X
                            </a>
                            <a
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://patriciaianda.com.br/blog/${slug}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — ${`https://patriciaianda.com.br/blog/${slug}`}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WhatsApp
                            </a>
                        </div>

                        {next && (
                            <Link
                                href={`/blog/${next.slug.current}`}
                                className="pt-btn pt-btn--ghost"
                            >
                                Próximo artigo
                                <span className="arr" aria-hidden="true">→</span>
                            </Link>
                        )}
                    </div>
                </div>
            </article>

            <NewsletterSection />
        </>
    );
}
