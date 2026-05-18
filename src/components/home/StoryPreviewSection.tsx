import Image from "next/image";
import TransitionLink from "@/components/shared/TransitionLink";
import storyPhoto from "../../../public/assets/img/patricia/story.jpg";

interface Milestone {
    period: string;
    role: string;
}

const milestones: Milestone[] = [
    { period: "Atibaia · Bertioga · Guarulhos", role: "Secretária municipal em três cidades" },
    { period: "Franca, SP", role: "Diretora regional do SUAS — 43 municípios coordenados" },
    { period: "Estado de São Paulo", role: "Diretora de Proteção Social Especial" },
    { period: "Hoje", role: "CEO da Alicerce — GovTech de Políticas Públicas do Brasil" },
];

const StoryPreviewSection = () => {
    return (
        <section className="pt-preview-story" aria-labelledby="preview-story-title">
            <div className="container">
                <div className="pt-preview-story__grid">
                    <div className="pt-preview-story__photo tp_img_reveal">
                        <Image
                            src={storyPhoto}
                            alt="Patrícia Ianda — bastidor"
                            placeholder="blur"
                            sizes="(max-width: 991px) 90vw, 35vw"
                        />
                    </div>

                    <div>
                        <span className="pt-overline tp_fade_anim">Minha história</span>
                        <h2 id="preview-story-title" className="pt-preview-story__title tp_fade_anim" data-delay=".15">
                            Uma trajetória construída na <em>realidade</em>, não nos gabinetes.
                        </h2>
                        <p className="pt-preview-story__lead tp_fade_anim" data-delay=".3">
                            Formada em Psicologia, Patrícia foi para onde os problemas existem
                            de verdade. Secretarias de assistência social, diretorias estaduais,
                            municípios do interior ao litoral. Cada cargo deixou uma entrega
                            concreta. Cada gestão avançou onde a anterior deixou.
                        </p>

                        <ul className="pt-mini-timeline tp_fade_anim" data-delay=".4">
                            {milestones.map((m) => (
                                <li key={m.role}>
                                    <span>{m.period}</span>
                                    <p>{m.role}</p>
                                </li>
                            ))}
                        </ul>

                        <TransitionLink href="/minha-historia" className="pt-btn pt-btn--ghost tp_fade_anim" data-delay=".5">
                            Ver trajetória completa
                            <span className="arr" aria-hidden="true">→</span>
                        </TransitionLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoryPreviewSection;
