"use client";
import Image from "next/image";
import { useVideoModal } from "@/provider/VideoProvider";
import { videos } from "@/data/workData";
import thumb1 from "../../../public/assets/img/placeholders/photo-3.jpg";
import thumb2 from "../../../public/assets/img/placeholders/photo-4.jpg";
import thumb3 from "../../../public/assets/img/placeholders/photo-5.jpg";
import thumb4 from "../../../public/assets/img/placeholders/photo-6.jpg";
import thumb5 from "../../../public/assets/img/placeholders/photo-7.jpg";
import thumb6 from "../../../public/assets/img/placeholders/photo-8.jpg";

const thumbs = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6];

const WorkVideos = () => {
    const { playVideo } = useVideoModal();

    return (
        <section className="pt-work-section" aria-labelledby="videos-title">
            <div className="container">
                <div className="pt-work-section__head tp_fade_anim">
                    <span className="pt-overline">Vídeos de palestras</span>
                    <h2 id="videos-title">
                        <em>Em movimento</em>, em palco, em pauta.
                    </h2>
                    <p>
                        Coletânea de palestras, entrevistas e participações registradas em
                        vídeo. Clique para abrir.
                    </p>
                </div>

                <div className="pt-videos-grid">
                    {videos.map((v, i) => (
                        <button
                            key={v.title + i}
                            type="button"
                            className="pt-video-card tp_fade_anim"
                            data-delay={`.${(i % 3) * 10 + 15}`}
                            onClick={() => playVideo(v.youtubeId)}
                            aria-label={`Reproduzir vídeo: ${v.title}`}
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

export default WorkVideos;
