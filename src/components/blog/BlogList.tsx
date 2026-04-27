"use client";
import { useState } from "react";
import Link from "next/link";
import type { SanityBlogPost, BlogCategory } from "@/sanity/types";
import { categoryLabels } from "@/sanity/seed";

interface BlogListProps {
    posts: SanityBlogPost[];
}

const filterOptions: ("Tudo" | BlogCategory)[] = [
    "Tudo",
    "assistencia-social",
    "empreendedorismo-feminino",
    "violencia-contra-mulher",
    "gestao-publica",
    "politica-sociedade",
];

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

const BlogList = ({ posts }: BlogListProps) => {
    const [active, setActive] = useState<(typeof filterOptions)[number]>("Tudo");

    const filtered = active === "Tudo"
        ? posts
        : posts.filter((p) => p.category === active);

    return (
        <section className="pt-blog-list" aria-label="Lista de artigos">
            <div className="container">
                <div className="pt-blog-list__filters" role="tablist">
                    {filterOptions.map((opt) => (
                        <button
                            key={opt}
                            type="button"
                            role="tab"
                            aria-selected={active === opt}
                            className={`pt-talks-filter ${active === opt ? "pt-talks-filter--active" : ""}`}
                            onClick={() => setActive(opt)}
                        >
                            {opt === "Tudo" ? "Todos" : categoryLabels[opt]}
                        </button>
                    ))}
                </div>

                {filtered.length === 0 ? (
                    <div className="pt-blog-empty">
                        Nenhum artigo nesta categoria ainda.
                    </div>
                ) : (
                    <div className="pt-blog-list__grid">
                        {filtered.map((post) => (
                            <Link
                                key={post._id}
                                href={`/blog/${post.slug.current}`}
                                className="pt-blog-card"
                            >
                                <div className="pt-blog-card__thumb" aria-hidden="true" />
                                <div className="pt-blog-card__body">
                                    <div className="pt-blog-card__meta">
                                        <span className="tag">
                                            {post.category ? categoryLabels[post.category] : "Artigo"}
                                        </span>
                                        <span className="date">
                                            {formatDate(post.publishedAt)}
                                        </span>
                                    </div>
                                    <h3 className="pt-blog-card__title">{post.title}</h3>
                                    {post.excerpt && (
                                        <p className="pt-blog-card__excerpt">{post.excerpt}</p>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogList;
