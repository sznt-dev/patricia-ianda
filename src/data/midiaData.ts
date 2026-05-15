export type FeatureVideo = {
    title: string;
    event: string;
    youtubeId: string;
};

export const featureVideo: FeatureVideo = {
    title: "Patrícia Ianda — O futuro da assistência social no Brasil",
    event: "Painel · Brasília · Mar 2026",
    youtubeId: "VCPGMjCW0is",
};

export type Interview = {
    title: string;
    event: string;
    youtubeId: string;
};

export const interviews: Interview[] = [
    { title: "Tecnologia, gestão pública e proteção", event: "TV Cultura · 2025", youtubeId: "VCPGMjCW0is" },
    { title: "Liderança feminina nos municípios", event: "Globo News · 2025", youtubeId: "VCPGMjCW0is" },
    { title: "Por que o SUAS importa", event: "BandNews · 2024", youtubeId: "VCPGMjCW0is" },
    { title: "Empreendedorismo social na prática", event: "UOL Live · 2025", youtubeId: "VCPGMjCW0is" },
    { title: "Mulheres no centro da política", event: "GloboNews · 2026", youtubeId: "VCPGMjCW0is" },
    { title: "GovTech como política pública", event: "Roda Viva · 2026", youtubeId: "VCPGMjCW0is" },
];

export type Report = {
    outlet: string;
    date: string;
    title: string;
    href: string;
};

export const reports: Report[] = [
    {
        outlet: "Estadão",
        date: "Mar 2026",
        title: "GovTechs de Políticas Públicas ganham espaço nos municípios brasileiros",
        href: "#",
    },
    {
        outlet: "Folha",
        date: "Fev 2026",
        title: "A liderança feminina que está reorganizando o SUAS",
        href: "#",
    },
    {
        outlet: "Veja",
        date: "Jan 2026",
        title: "Patrícia Ianda: 'A política pública chega lenta porque não é gerida'",
        href: "#",
    },
    {
        outlet: "Carta Capital",
        date: "Dez 2025",
        title: "O caso de uma GovTech que faz a assistência social funcionar",
        href: "#",
    },
    {
        outlet: "El País Brasil",
        date: "Nov 2025",
        title: "Mulheres no comando da inovação pública",
        href: "#",
    },
    {
        outlet: "Brasil de Fato",
        date: "Out 2025",
        title: "Violência psicológica: a pauta que falta no Estado",
        href: "#",
    },
];

export type UpcomingEvent = {
    date: string;
    name: string;
    organization: string;
    place: string;
};

export const upcomingEvents: UpcomingEvent[] = [
    {
        date: "12 Mai 2026",
        name: "Encontro Nacional de Gestores do SUAS",
        organization: "Confederação Nacional de Municípios",
        place: "Brasília · DF",
    },
    {
        date: "23 Mai 2026",
        name: "Painel: Mulheres que transformam",
        organization: "Sebrae · Mês da Mulher Empreendedora",
        place: "São Paulo · SP",
    },
    {
        date: "02 Jun 2026",
        name: "Aula magna — Gestão pública humanizada",
        organization: "ENAP",
        place: "Brasília · DF",
    },
    {
        date: "18 Jun 2026",
        name: "Audiência pública sobre violência contra a mulher",
        organization: "Câmara dos Deputados",
        place: "Brasília · DF",
    },
];
