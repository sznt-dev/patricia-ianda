"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

interface Phrase {
    text: string;
    em?: string;
}

const phrases: Phrase[] = [
    { text: "Dignidade não é utopia", em: "utopia" },
    { text: "Tecnologia a serviço do humano", em: "humano" },
    { text: "Gestão é cuidado com escala", em: "escala" },
    { text: "Mulheres no centro da política pública", em: "centro" },
    { text: "Política pública chega quando alguém faz", em: "alguém faz" },
    { text: "Não negocio o que é direito", em: "direito" },
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

/**
 * Marquee de manifesto — Swiper FreeMode + Autoplay com speed alto (7000ms).
 * Esse é o ease lento e contínuo do agntix (CorporateAgencyTextSlider).
 */
const ManifestoMarquee = () => {
    return (
        <section className="pt-manifesto" aria-label="Manifesto">
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
                        <span className="pt-manifesto__sep" aria-hidden="true">·</span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ManifestoMarquee;
