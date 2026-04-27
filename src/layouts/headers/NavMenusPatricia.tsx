"use client";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/shared/TransitionLink";
import { menuData } from "@/data/menuData";

/**
 * Nav menu da Patrícia no markup esperado pelo SCSS do agntix
 * (`tp-header-menu`, `tp-mobile-menu-active`). Sem dropdowns, sem mega-menu —
 * 5 links de primeira pessoa, com TransitionLink pra animação entre páginas.
 */
const NavMenusPatricia = () => {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname?.startsWith(href);
    };

    return (
        <ul>
            {menuData.map((item) => (
                <li
                    key={item.href}
                    className={isActive(item.href) ? "active" : ""}
                >
                    <TransitionLink href={item.href}>
                        {item.title}
                    </TransitionLink>
                </li>
            ))}
        </ul>
    );
};

export default NavMenusPatricia;
