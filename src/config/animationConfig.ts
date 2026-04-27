import {
    imageRevealAnimation,
    animationParagraph,
    textRevealAnimation,
    splitTextAnimation,
    scrollMovingText,
} from "@/hooks/useGsapAnimation";

// =============================================================================
// Patrícia Ianda — animation routing
// AnimationWrapper roda fadeAnimation + charAnimation globalmente em qualquer rota.
// Aqui mapeamos animações *adicionais* por página.
// =============================================================================

export const animationConfig: Record<string, (() => void)[]> = {
    "/": [
        imageRevealAnimation,    // foto do hero entra com clip-path slide
        animationParagraph,      // parágrafos animam linha por linha
        splitTextAnimation,      // .tp-split-text reveal char-by-char
    ],
    "/minha-historia": [
        imageRevealAnimation,
        animationParagraph,
        textRevealAnimation,
    ],
    "/meu-trabalho": [
        imageRevealAnimation,
        scrollMovingText,
    ],
    "/patricia-na-midia": [
        imageRevealAnimation,
    ],
    "/fale-comigo": [
        animationParagraph,
    ],
    "/blog": [
        imageRevealAnimation,
    ],
};
