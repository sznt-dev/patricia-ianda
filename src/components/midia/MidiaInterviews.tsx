"use client";
import Image from "next/image";
import { useVideoModal } from "@/provider/VideoProvider";
import { featureVideo, interviews } from "@/data/midiaData";
import featureThumb from "../../../public/assets/img/placeholders/photo-1.jpg";
import t1 from "../../../public/assets/img/placeholders/photo-2.jpg";
import t2 from "../../../public/assets/img/placeholders/photo-3.jpg";
import t3 from "../../../public/assets/img/placeholders/photo-4.jpg";
import t4 from "../../../public/assets/img/placeholders/photo-5.jpg";
import t5 from "../../../public/assets/img/placeholders/photo-6.jpg";
import t6 from "../../../public/assets/img/placeholders/photo-7.jpg";

const thumbs = [t1, t2, t3, t4, t5, t6];

const MidiaInterviews = () => {
    const { playVideo } = useVideoModal();

    return (
        <section className="pt-midia-section" aria-labelledby="interviews-title">
            <div className="container">
                <div className="pt-midia-section__head tp_fade_anim">
                    <span className="pt-overline">Entrevistas em vídeo</span>
                    <h2 id="interviews-title">
                        <em>Em pauta</em>, em palco, em câmera.
                    </h2>
                    <p>
                        Coletânea de entrevistas e participações em programas de TV, rádio
                        e podcasts. Clique no destaque ou em qualquer miniatura para abrir.
                    </p>
                </div>

                <button
                    type="button"
                    className="pt-feature-video tp_fade_anim"
                    onClick={() => playVideo(featureVideo.youtubeId)}
                    aria-label={`Reproduzir: ${featureVideo.title}`}
                >
                    <Image
                        src={featureThumb}
                        alt=""
                        placeholder="blur"
                        priority
                        sizes="(max-width: 991px) 100vw, 1200px"
                        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
                    />
                    <span className="play" aria-hidden="true" />
                    <div className="meta">
                        <span>{featureVideo.event}</span>
                        <h3>{featureVideo.title}</h3>
                    </div>
                </button>

                <div className="pt-videos-grid">
                    {interviews.map((v, i) => (
                        <button
                            key={v.title + i}
                            type="button"
                            className="pt-video-card tp_fade_anim"
                            data-delay={`.${(i % 3) * 10 + 15}`}
                            onClick={() => playVideo(v.youtubeId)}
                            aria-label={`Reproduzir: ${v.title}`}
                        >
                            <Image
                                src={thumbs[i % thumbs.length]}
                                alt=""
                                placeholder="blur"
                                sizes="(max-width: 991px) 50vw, 33vw"
                                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <span className="pt-video-card__play" aria-hidden="true" />
                            <div className="pt-video-card__overlay">
                                <span>{v.event}</span>
                                <h3>{v.title}</h3>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MidiaInterviews;
