export type Project = {
    title: string;
    partners: string;
    desc: string;
    result?: string;
};

export const projects: Project[] = [
    {
        title: "Programa de Acolhimento Humanizado",
        partners: "Município · Conselho Tutelar · ONGs locais",
        desc: "Reestruturação dos serviços de acolhimento institucional para crianças e adolescentes, com fluxos integrados entre saúde, educação e judiciário.",
        result: "Tempo médio de acolhimento reduzido em ~30%",
    },
    {
        title: "Mulheres em Movimento",
        partners: "Secretaria de Assistência · CRAS · grupo de mães",
        desc: "Iniciativa de capacitação e geração de renda para mulheres em situação de vulnerabilidade, com mentoria, microcrédito e acompanhamento psicossocial.",
        result: "Mais de 200 mulheres atendidas no piloto",
    },
    {
        title: "SUAS Fácil — GovTech social",
        partners: "Municípios brasileiros · gestores SUAS",
        desc: "Plataforma que digitaliza fluxos do SUAS, permite gestão por dados e integra equipes de proteção social básica e especial.",
        result: "Operando em municípios em todo o país",
    },
    {
        title: "Rede de Apoio à Vítima",
        partners: "Estado · Polícia · Saúde · Defensoria",
        desc: "Construção de fluxo único de atendimento a mulheres vítimas de violência, com porta de entrada unificada e gestão de caso compartilhada.",
        result: "Modelo replicado em outros municípios",
    },
];

export type Talk = {
    date: string;
    title: string;
    organization: string;
    city: string;
    theme: "Assistência Social" | "Empreendedorismo" | "Violência" | "Gestão";
};

export const talks: Talk[] = [
    {
        date: "Mar 2026",
        title: "O futuro da assistência social brasileira",
        organization: "Frente Nacional de Prefeitos",
        city: "Brasília · DF",
        theme: "Assistência Social",
    },
    {
        date: "Mar 2026",
        title: "Mulheres no centro da inovação pública",
        organization: "Câmara Municipal de São Paulo",
        city: "São Paulo · SP",
        theme: "Empreendedorismo",
    },
    {
        date: "Fev 2026",
        title: "Como nomear a violência psicológica",
        organization: "OAB · Comissão da Mulher",
        city: "Belo Horizonte · MG",
        theme: "Violência",
    },
    {
        date: "Fev 2026",
        title: "GovTechs sociais: oportunidades para municípios",
        organization: "CONFEMS",
        city: "Curitiba · PR",
        theme: "Gestão",
    },
    {
        date: "Jan 2026",
        title: "Empreendedorismo feminino e política pública",
        organization: "Sebrae Mulher",
        city: "Recife · PE",
        theme: "Empreendedorismo",
    },
    {
        date: "Dez 2025",
        title: "Gestão por evidência no SUAS",
        organization: "Universidade Federal do Paraná",
        city: "Curitiba · PR",
        theme: "Gestão",
    },
    {
        date: "Nov 2025",
        title: "Liderança feminina na gestão pública",
        organization: "ENAP",
        city: "Brasília · DF",
        theme: "Empreendedorismo",
    },
    {
        date: "Out 2025",
        title: "Violência contra a mulher como questão de Estado",
        organization: "Senado Federal",
        city: "Brasília · DF",
        theme: "Violência",
    },
];

export type VideoEntry = {
    title: string;
    event: string;
    youtubeId: string;
};

export const videos: VideoEntry[] = [
    { title: "TEDx — Tecnologia e cuidado social", event: "TEDx 2025", youtubeId: "VCPGMjCW0is" },
    { title: "Painel: O futuro do SUAS", event: "Frente de Prefeitos · 2026", youtubeId: "VCPGMjCW0is" },
    { title: "Aula magna — Gestão pública humanizada", event: "ENAP · 2025", youtubeId: "VCPGMjCW0is" },
    { title: "Mulheres no poder", event: "Câmara SP · 2026", youtubeId: "VCPGMjCW0is" },
    { title: "Palestra — Empreendedorismo feminino", event: "Sebrae · 2026", youtubeId: "VCPGMjCW0is" },
    { title: "Mesa redonda — Violência psicológica", event: "OAB · 2026", youtubeId: "VCPGMjCW0is" },
];

export type GalleryItem = {
    caption: string;
    span?: "tall" | "wide";
};

export const gallery: GalleryItem[] = [
    { caption: "Posse na Secretaria · Bertioga 2018", span: "tall" },
    { caption: "Visita ao CRAS · Atibaia 2014" },
    { caption: "Reunião com gestores · Franca 2019", span: "wide" },
    { caption: "Audiência pública · São Paulo 2021" },
    { caption: "Painel TEDx · 2025" },
    { caption: "Visita ao acolhimento · 2022", span: "tall" },
    { caption: "Lançamento SUAS Fácil · 2023" },
    { caption: "Mesa redonda — Violência · 2024", span: "wide" },
    { caption: "Comemoração equipe · 2024" },
    { caption: "ENAP · Brasília 2025" },
    { caption: "Audiência Senado · 2025", span: "tall" },
    { caption: "Encontro nacional SUAS · 2026" },
    { caption: "Reunião com prefeitas · 2026" },
    { caption: "Bastidores podcast · 2026", span: "wide" },
    { caption: "Visita à comunidade · 2025" },
];
