import type { Metadata } from "next";
import BlogList from "@/components/blog/BlogList";
import { getBlogs } from "@/sanity/fetch";

export const metadata: Metadata = {
    title: "Blog",
    description:
        "Reflexões de Patrícia Ianda sobre assistência social, empreendedorismo feminino, violência contra a mulher, gestão pública e política.",
};

export default async function BlogPage() {
    const posts = await getBlogs();

    return (
        <>
            <section className="pt-blog-hero">
                <div className="container">
                    <span className="pt-overline tp_fade_anim">Blog</span>
                    <h1 className="tp-char-animation">
                        Reflexões sobre <em>gestão</em>, política e cuidado social.
                    </h1>
                    <p className="tp_fade_anim" data-delay=".4">
                        Artigos sobre assistência social, inovação pública,
                        empreendedorismo feminino e políticas de proteção.
                    </p>
                </div>
            </section>

            <BlogList posts={posts} />
        </>
    );
}
