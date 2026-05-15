"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

interface Phrase {
    text: string;
    em?: string;
}

// Manifesto da Patrícia — frase única dividida em duas partes que
// alternam no loop horizontal, mantendo o efeito de marquee editorial
// do agntix (CorporateAgencyTextSlider).
const phrases: Phrase[] = [
    {
        text: "Eu não acredito em política pública feita de gabinete.",
        em: "gabinete",
    },
    {
        text: "Acredito em política pública que chega na ponta.",
        em: "chega na ponta",
    },
];

const renderPhrase = (p: Phrase) => {
    if (!p.em) return p.text;
    const idx = p.text.indexOf(p.em);
    if (idx < 0) return p.text;
    return (
        <>
            {p.text.slice(0, idx)}
            <em>{p.em}</em>
            {p.text.slice(idx + p.em.length)}
        </>
    );
};

const ManifestoMarquee = () => {
    return (
        <section className="pt-manifesto" aria-label="Manifesto de Patrícia Ianda">
            <Swiper
                className="pt-manifesto-track slide-transtion"
                modules={[Autoplay, FreeMode]}
                loop
                freeMode
                slidesPerView="auto"
                spaceBetween={0}
                centeredSlides
                allowTouchMove={false}
                speed={7000}
                autoplay={{ delay: 1, disableOnInteraction: true }}
            >
                {phrases.map((p, i) => (
                    <SwiperSlide key={i}>
                        <span className="pt-manifesto__phrase">
                            {renderPhrase(p)}
                        </span>
                        <span className="pt-manifesto__sep" aria-hidden="true">✦</span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ManifestoMarquee;
