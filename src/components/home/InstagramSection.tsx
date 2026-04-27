"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { PhotoView } from "react-photo-view";
import PhotoProviderWrapper from "@/components/shared/PhotoProviderWrapper";
import insta1 from "../../../public/assets/img/placeholders/insta-1.jpg";
import insta2 from "../../../public/assets/img/placeholders/insta-2.jpg";
import insta3 from "../../../public/assets/img/placeholders/insta-3.jpg";
import insta4 from "../../../public/assets/img/placeholders/insta-4.jpg";
import insta5 from "../../../public/assets/img/placeholders/insta-5.jpg";
import insta6 from "../../../public/assets/img/placeholders/insta-6.jpg";
import insta7 from "../../../public/assets/img/placeholders/insta-7.jpg";

const tiles = [insta1, insta2, insta3, insta4, insta5, insta6, insta7];

const InstagramOverlay = () => (
    <span className="pt-insta__tile-overlay" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
        </svg>
    </span>
);

/**
 * Instagram preview — Swiper FreeMode (deslize horizontal contínuo) + PhotoView
 * lightbox ao clicar. Mesmo motor do ShopModernInstagram do agntix.
 */
const InstagramSection = () => {
    return (
        <section className="pt-insta" aria-labelledby="insta-title">
            <div className="container">
                <div className="pt-insta__head tp_fade_anim">
                    <span className="pt-overline">Acompanhe nas redes</span>
                    <h2 id="insta-title">
                        Bastidores, <em>pautas</em> e os dias que importam.
                    </h2>
                    <p>
                        O trabalho continua entre uma postagem e outra. Me siga para acompanhar
                        as agendas, leituras e conversas que orientam cada decisão.
                    </p>
                    <Link
                        href="https://www.instagram.com/patricia.ianda/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pt-btn pt-btn--primary"
                    >
                        Seguir no Instagram
                        <span className="arr" aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>

            <PhotoProviderWrapper>
                <Swiper
                    className="pt-insta-swiper slide-transtion"
                    modules={[Autoplay, FreeMode]}
                    loop
                    freeMode
                    slidesPerView="auto"
                    spaceBetween={14}
                    speed={5000}
                    autoplay={{ delay: 1, disableOnInteraction: true }}
                >
                    {[...tiles, ...tiles].map((img, i) => (
                        <SwiperSlide key={i}>
                            <PhotoView src={img.src}>
                                <div
                                    className="pt-insta__tile"
                                    role="button"
                                    aria-label={`Abrir post ${(i % tiles.length) + 1}`}
                                >
                                    <Image
                                        src={img}
                                        alt=""
                                        placeholder="blur"
                                        sizes="(max-width: 600px) 60vw, 280px"
                                    />
                                    <InstagramOverlay />
                                </div>
                            </PhotoView>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </PhotoProviderWrapper>
        </section>
    );
};

export default InstagramSection;
