// Posts seed adaptados dos artigos do LinkedIn.
// Quando o Sanity for plugado (Fase 11), o blog passa a buscar do CMS;
// estes objetos servem de fallback até lá.

export type BlogSample = {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
};

export const blogSamples: BlogSample[] = [
    {
        slug: "violencia-mulher-mercado-de-trabalho",
        title: "Violência contra a mulher no mercado de trabalho: um gargalo estratégico",
        excerpt:
            "A violência psicológica no ambiente profissional drena resultados, encolhe carreiras e raramente é nomeada. É hora de mudar isso.",
        category: "Violência contra a Mulher",
        date: "23 mar 2026",
        readTime: "6 min de leitura",
    },
    {
        slug: "presenca-feminina-govtechs-brasil",
        title: "Presença feminina nas GovTechs: por que a ausência de mulheres é um risco para o futuro",
        excerpt:
            "Inovação pública sem mulheres na sala de decisão produz tecnologia que ignora metade da população.",
        category: "Empreendedorismo Feminino",
        date: "08 mar 2026",
        readTime: "8 min de leitura",
    },
    {
        slug: "tecnologia-com-proposito-suas",
        title: "Tecnologia com propósito: como dados estão redefinindo a assistência social",
        excerpt:
            "O SUAS gera oceanos de dados. O que falta não é informação — é gestão para transformar dado em política pública.",
        category: "Gestão Pública",
        date: "27 fev 2026",
        readTime: "7 min de leitura",
    },
];
