import type { ReactNode } from "react";

// SVG icons editoriais — linha simples, sem fill chapado
const IconShield = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 3 4 6v6c0 4.5 3.5 7.8 8 9 4.5-1.2 8-4.5 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12.5l2 2 4-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconRise = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M3 17l5-5 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 8h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const IconVoice = () => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 11a7 7 0 0 0 14 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 18v3M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

interface Pauta {
    num: string;
    title: string;
    body: string;
    icon: ReactNode;
    delay: string;
}

const pautas: Pauta[] = [
    {
        num: "Pauta 01",
        title: "Assistência social que funciona de verdade",
        body:
            "A proteção social no Brasil precisa sair do papel e chegar a quem depende dela. Vinte anos coordenando serviços, municípios e equipes me ensinaram que gestão eficiente não é burocracia — é dignidade com escala.",
        icon: <IconShield />,
        delay: ".15",
    },
    {
        num: "Pauta 02",
        title: "Empreendedorismo feminino como instrumento de transformação",
        body:
            "Autonomia financeira, desenvolvimento profissional e protagonismo. Quando uma mulher constrói sua independência, ela reconstrói sua família, sua comunidade e sua história. Empreendedorismo feminino não é tendência — é política pública urgente.",
        icon: <IconRise />,
        delay: ".3",
    },
    {
        num: "Pauta 03",
        title: "Violência contra a mulher é questão de Estado",
        body:
            "Não só a física. A violência psicológica, moral e emocional é muitas vezes invisível, mas profundamente destrutiva — e raramente é reconhecida como crime. É preciso nomear, legislar e agir. Esse é um compromisso que não negocio.",
        icon: <IconVoice />,
        delay: ".45",
    },
];

const PautasSection = () => {
    return (
        <section className="pt-pautas" aria-labelledby="pautas-title">
            <div className="container">
                <div className="pt-pautas__head tp_fade_anim">
                    <span className="pt-overline">As três pautas que carrego</span>
                    <h2 id="pautas-title">
                        Causas que <em>não negocio</em>.
                    </h2>
                </div>

                <div className="pt-pautas__grid">
                    {pautas.map((pauta) => (
                        <article
                            key={pauta.num}
                            className="pt-pauta tp_fade_anim"
                            data-delay={pauta.delay}
                        >
                            <span className="pt-pauta__icon">{pauta.icon}</span>
                            <span className="pt-pauta__num">{pauta.num}</span>
                            <h3 className="pt-pauta__title">{pauta.title}</h3>
                            <p className="pt-pauta__body">{pauta.body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PautasSection;
