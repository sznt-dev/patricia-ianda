export type MenuItem = {
    title: string;
    href: string;
};

export const menuData: MenuItem[] = [
    { title: "Home",                href: "/" },
    { title: "Minha História",      href: "/minha-historia" },
    { title: "Meu Trabalho",        href: "/meu-trabalho" },
    { title: "Patrícia na Mídia",   href: "/patricia-na-midia" },
    { title: "Fale Comigo",         href: "/fale-comigo" },
];

export const ctaItem: MenuItem = { title: "Fale Comigo", href: "/fale-comigo" };
