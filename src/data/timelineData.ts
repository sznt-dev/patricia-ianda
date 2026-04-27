export type TimelineEntry = {
    period: string;
    role: string;
    place?: string;
    delivery: string;
};

export const timelineEntries: TimelineEntry[] = [
    {
        period: "Início da carreira",
        role: "Psicóloga — atendimento a crianças e adolescentes vulneráveis",
        delivery:
            "Base técnica e humana que orientou toda a trajetória posterior. Trabalho direto com famílias em situação de alta vulnerabilidade.",
    },
    {
        period: "Atibaia · São Paulo",
        role: "Secretária de Assistência e Desenvolvimento Social (SADS)",
        place: "Município",
        delivery:
            "Reorganização dos serviços socioassistenciais, ampliação do acesso aos programas do SUAS e humanização do atendimento à população atendida.",
    },
    {
        period: "Franca · São Paulo",
        role: "Diretora do Núcleo de Avaliação e Supervisão da DRADS",
        place: "Regional",
        delivery:
            "Coordenação do SUAS em 43 municípios do interior paulista. Monitoramento e qualificação dos serviços, fortalecimento da governança local.",
    },
    {
        period: "Guarulhos · São Paulo",
        role: "Secretária do Trabalho",
        place: "Município",
        delivery:
            "Implementação da Semana do Trabalhador, reativação do Bolsa Trabalho e do Programa Oportunidade ao Jovem (POJ).",
    },
    {
        period: "Bertioga · São Paulo",
        role: "Secretária de Assistência Social",
        place: "Município",
        delivery:
            "Expansão da rede de proteção social, fortalecimento de projetos para famílias vulneráveis, melhoria de indicadores sociais do município.",
    },
    {
        period: "Estado de São Paulo",
        role: "Diretora de Proteção Social Especial",
        place: "Estadual",
        delivery:
            "Fortalecimento do atendimento a crianças e adolescentes em acolhimento institucional, pessoas em situação de rua e mulheres vítimas de violência.",
    },
    {
        period: "Hoje",
        role: "CEO — SUAS Fácil",
        place: "Brasil",
        delivery:
            "Liderança de uma das principais GovTechs sociais do Brasil, com impacto direto na gestão municipal da assistência social em todo o país.",
    },
];
