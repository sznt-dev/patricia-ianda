import Image from "next/image";
import Link from "next/link";
import TransitionLink from "@/components/shared/TransitionLink";
import photo1 from "../../../public/assets/img/placeholders/photo-1.jpg";
import photo2 from "../../../public/assets/img/placeholders/photo-2.jpg";
import photo3 from "../../../public/assets/img/placeholders/photo-3.jpg";
import photo4 from "../../../public/assets/img/placeholders/photo-4.jpg";

interface MediaItem {
    outlet: string;
    date: string;
    title: string;
    href: string;
    isVideo?: boolean;
    area: "main" | "first" | "second" | "third";
    img: typeof photo1;
}

const items: MediaItem[] = [
    {
        outlet: "Globo",
        date: "Nov 2025",
        title: "Patrícia Ianda fala sobre o futuro da assistência social no Brasil",
        href: "#",
        isVideo: true,
        area: "main",
        img: photo1,
    },
    {
        outlet: "Estadão",
        date: "Set 2025",
        title: "GovTechs sociais ganham espaço nos municípios",
        href: "#",
        area: "first",
        img: photo2,
    },
    {
        outlet: "Folha",
        date: "Ago 2025",
        title: "A liderança feminina que está reorganizando o SUAS",
        href: "#",
        area: "second",
        img: photo3,
    },
    {
        outlet: "TV Cultura",
        date: "Jul 2025",
        title: "Entrevista — Tecnologia, gestão pública e proteção de quem mais precisa",
        href: "#",
        isVideo: true,
        area: "third",
        img: photo4,
    },
];

const MediaPreviewSection = () => {
    return (
        <section className="pt-media" aria-labelledby="media-title">
            <div className="container">
                <div className="pt-media__head">
                    <div>
                        <span className="pt-overline tp_fade_anim">Patrícia na mídia</span>
                        <h2 id="media-title" className="pt-media__title tp_fade_anim" data-delay=".15">
                            Trajetória pública <em>documentada</em>.
                        </h2>
                    </div>
                    <TransitionLink href="/patricia-na-midia" className="pt-btn pt-btn--ghost tp_fade_anim" data-delay=".3">
                        Ver toda a cobertura
                        <span className="arr" aria-hidden="true">→</span>
                    </TransitionLink>
                </div>

                <div className="pt-media__grid">
                    {items.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={`pt-media__card pt-media__card--${item.area} tp_fade_anim`}
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                placeholder="blur"
                                sizes="(max-width: 991px) 100vw, 33vw"
                            />
                            {item.isVideo && <span className="pt-media__play" aria-hidden="true" />}
                            <div className="pt-media__overlay" aria-hidden="true" />
                            <div className="pt-media__caption">
                                <div className="meta">
                                    <span>{item.outlet}</span>
                                    <span>{item.date}</span>
                                </div>
                                <h3>{item.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MediaPreviewSection;
