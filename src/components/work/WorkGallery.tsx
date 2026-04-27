"use client";
import Image from "next/image";
import { PhotoView } from "react-photo-view";
import PhotoProviderWrapper from "@/components/shared/PhotoProviderWrapper";
import { gallery } from "@/data/workData";
import photo1 from "../../../public/assets/img/placeholders/photo-1.jpg";
import photo2 from "../../../public/assets/img/placeholders/photo-2.jpg";
import photo3 from "../../../public/assets/img/placeholders/photo-3.jpg";
import photo4 from "../../../public/assets/img/placeholders/photo-4.jpg";
import photo5 from "../../../public/assets/img/placeholders/photo-5.jpg";
import photo6 from "../../../public/assets/img/placeholders/photo-6.jpg";
import photo7 from "../../../public/assets/img/placeholders/photo-7.jpg";
import photo8 from "../../../public/assets/img/placeholders/photo-8.jpg";
import photo9 from "../../../public/assets/img/placeholders/photo-9.jpg";
import photo10 from "../../../public/assets/img/placeholders/photo-10.jpg";

const galleryImages = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10];

const WorkGallery = () => {
    return (
        <section className="pt-work-section pt-work-section--alt" aria-labelledby="gallery-title">
            <div className="container">
                <div className="pt-work-section__head tp_fade_anim">
                    <span className="pt-overline">Galeria</span>
                    <h2 id="gallery-title">
                        Os <em>lugares</em> onde o trabalho acontece.
                    </h2>
                    <p>
                        Imagens de eventos, visitas a municípios, mesas-redondas e bastidores.
                        Clique para abrir em tela cheia.
                    </p>
                </div>

                <PhotoProviderWrapper>
                    <div className="pt-gallery">
                        {gallery.map((g, i) => {
                            const img = galleryImages[i % galleryImages.length];
                            return (
                                <PhotoView key={g.caption} src={img.src}>
                                    <figure
                                        className={`pt-gallery__item ${g.span ? `pt-gallery__item--${g.span}` : ""}`}
                                    >
                                        <Image
                                            src={img}
                                            alt={g.caption}
                                            placeholder="blur"
                                            sizes="(max-width: 600px) 50vw, 25vw"
                                            style={{ objectFit: "cover" }}
                                            fill
                                        />
                                        <figcaption className="pt-gallery__caption">{g.caption}</figcaption>
                                    </figure>
                                </PhotoView>
                            );
                        })}
                    </div>
                </PhotoProviderWrapper>
            </div>
        </section>
    );
};

export default WorkGallery;
