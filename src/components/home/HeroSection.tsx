import Image from "next/image";
import TransitionLink from "@/components/shared/TransitionLink";
import heroPhoto from "../../../public/assets/img/patricia/hero-photo.png";

/**
 * Hero da home — modelo contido.
 *
 * Layout 2 colunas:
 *   ┌─────────────────────┬──────────────────┐
 *   │ Overline            │                  │
 *   │ Headline editorial  │   Foto editorial │
 *   │ (≤ 64px, Playfair)  │   (4:5 reveal)   │
 *   │ Sub                 │                  │
 *   │ CTAs primário+ghost │                  │
 *   │ Status verde        │                  │
 *   └─────────────────────┴──────────────────┘
 *
 * Animações:
 *  - tp-char-animation no headline
 *  - tp_img_reveal na foto (clip-path slide do agntix)
 *  - tp_fade_anim com data-delay nos textos e CTAs
 */
const HeroSection = () => {
    return (
        <section className="pt-hero" aria-labelledby="hero-title">
            <span className="pt-hero__shape" aria-hidden="true" />

            <div className="container">
                <div className="pt-hero__grid">
                    <div>
                        <span className="pt-overline pt-hero__overline tp_fade_anim">
                            Referência em assistência social
                        </span>

                        <h1 id="hero-title" className="pt-hero__title tp-char-animation">
                            Décadas cuidando de quem o poder costuma <em>ignorar</em>.
                        </h1>

                        <p className="pt-hero__lead tp_fade_anim" data-delay=".5">
                            Psicóloga, gestora pública e CEO de uma das principais GovTechs
                            sociais do Brasil. Mais de duas décadas transformando estruturas
                            complexas em soluções acessíveis, eficientes e humanas.
                        </p>

                        <div
                            className="pt-hero__ctas tp_fade_anim"
                            data-delay=".7"
                            data-fade-from="top"
                            data-ease="bounce"
                        >
                            <TransitionLink href="/minha-historia" className="pt-btn pt-btn--primary">
                                Conheça minha história
                                <span className="arr" aria-hidden="true">→</span>
                            </TransitionLink>
                            <TransitionLink href="/fale-comigo" className="pt-btn pt-btn--ghost">
                                Fale comigo
                            </TransitionLink>
                        </div>

                        <span className="pt-hero__availability tp_fade_anim" data-delay=".9">
                            Aberta a parcerias
                        </span>
                    </div>

                    <div className="pt-hero__photo tp_img_reveal">
                        <Image
                            src={heroPhoto}
                            alt="Patrícia Ianda — foto editorial"
                            priority
                            placeholder="blur"
                            sizes="(max-width: 991px) 90vw, 40vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
