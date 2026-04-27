import Image from "next/image";
import TransitionLink from "@/components/shared/TransitionLink";
import { getRecentBlogs } from "@/sanity/fetch";
import { categoryLabels } from "@/sanity/seed";
import blog1 from "../../../public/assets/img/placeholders/blog-1.jpg";
import blog2 from "../../../public/assets/img/placeholders/blog-2.jpg";
import blog3 from "../../../public/assets/img/placeholders/blog-3.jpg";

const blogThumbs = [blog1, blog2, blog3];

const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

const BlogPreviewSection = async () => {
    const posts = await getRecentBlogs();

    return (
        <section className="pt-blog-preview" aria-labelledby="blog-preview-title">
            <div className="container">
                <div className="pt-blog-preview__head">
                    <div>
                        <span className="pt-overline tp_fade_anim">Reflexões publicadas</span>
                        <h2 id="blog-preview-title" className="tp_fade_anim" data-delay=".15">
                            Sobre <em>gestão</em>, política e cuidado social.
                        </h2>
                    </div>
                    <TransitionLink href="/blog" className="pt-btn pt-btn--ghost tp_fade_anim" data-delay=".3">
                        Ver todos os artigos
                        <span className="arr" aria-hidden="true">→</span>
                    </TransitionLink>
                </div>

                <div className="pt-blog-preview__grid">
                    {posts.slice(0, 3).map((post, i) => (
                        <TransitionLink
                            key={post._id}
                            href={`/blog/${post.slug.current}`}
                            className="pt-blog-card tp_fade_anim"
                            data-delay={`.${i * 15 + 15}`}
                        >
                            <div className="pt-blog-card__thumb">
                                <Image
                                    src={blogThumbs[i] || blog1}
                                    alt=""
                                    placeholder="blur"
                                    sizes="(max-width: 991px) 100vw, 33vw"
                                />
                            </div>
                            <div className="pt-blog-card__body">
                                <div className="pt-blog-card__meta">
                                    <span className="tag">
                                        {post.category ? categoryLabels[post.category] : "Artigo"}
                                    </span>
                                    <span className="date">{formatDate(post.publishedAt)}</span>
                                </div>
                                <h3 className="pt-blog-card__title">{post.title}</h3>
                                {post.excerpt && (
                                    <p className="pt-blog-card__excerpt">{post.excerpt}</p>
                                )}
                            </div>
                        </TransitionLink>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreviewSection;
