export type MenuItem = {
    title: string;
    href: string;
};

// Labels curtos (1 palavra cada) pra caber em uma única linha no header desktop.
// As rotas seguem com os nomes completos em português.
export const menuData: MenuItem[] = [
    { title: "Home",      href: "/" },
    { title: "História",  href: "/minha-historia" },
    { title: "Trabalho",  href: "/meu-trabalho" },
    { title: "Mídia",     href: "/patricia-na-midia" },
    { title: "Blog",      href: "/blog" },
    { title: "Contato",   href: "/fale-comigo" },
];

export const ctaItem: MenuItem = { title: "Fale Comigo", href: "/fale-comigo" };
