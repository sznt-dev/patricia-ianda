"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const outlets = [
    "Globo", "Folha de S.Paulo", "Estadão", "TV Cultura",
    "Veja", "UOL", "Carta Capital", "El País Brasil",
    "G1", "Rádio CBN", "BandNews", "Brasil de Fato",
];

/**
 * Logos de imprensa em formato wordmark — substituir por SVGs reais
 * quando o cliente entregar. Por enquanto, italic Clash Display em swiper
 * com FreeMode (mesmo motor do CorporateAgencyBrand do agntix).
 */
const PressLogosSection = () => {
    return (
        <section className="pt-press" aria-label="Veículos que cobriram o trabalho de Patrícia">
            <div className="container">
                <div className="pt-press__label">
                    <span>Reconhecida pela imprensa brasileira</span>
                </div>
            </div>

            <Swiper
                className="pt-press-track slide-transtion"
                modules={[Autoplay, FreeMode]}
                loop
                freeMode
                slidesPerView="auto"
                spaceBetween={0}
                centeredSlides
                allowTouchMove={false}
                speed={6500}
                autoplay={{ delay: 1, disableOnInteraction: true }}
            >
                {outlets.map((outlet, i) => (
                    <SwiperSlide key={i}>
                        <span className="pt-press__item">{outlet}</span>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default PressLogosSection;
