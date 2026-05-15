"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "@/components/shared/TransitionLink";
import { menuData } from "@/data/menuData";

interface MobileMenuProps {
    open: boolean;
    onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
    const pathname = usePathname();

    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKey);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = previousOverflow;
        };
    }, [open, onClose]);

    const isActive = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname?.startsWith(href);
    };

    return (
        <div
            className={`pt-offcanvas ${open ? "pt-offcanvas--open" : ""}`}
            aria-hidden={!open}
        >
            <button
                type="button"
                className="pt-offcanvas__backdrop"
                aria-label="Fechar menu"
                onClick={onClose}
            />
            <aside
                className="pt-offcanvas__panel"
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navegação"
            >
                <div className="pt-offcanvas__top">
                    <TransitionLink href="/" className="pt-logo" onClick={onClose}>
                        Patrícia <em>Ianda</em>
                    </TransitionLink>
                    <button
                        type="button"
                        className="pt-offcanvas__close"
                        onClick={onClose}
                        aria-label="Fechar menu"
                    >
                        ×
                    </button>
                </div>

                <nav aria-label="Menu mobile">
                    <ul className="pt-offcanvas__nav">
                        {menuData.map((item) => (
                            <li key={item.href}>
                                <TransitionLink
                                    href={item.href}
                                    onClick={onClose}
                                    className={`pt-offcanvas__link ${isActive(item.href) ? "pt-offcanvas__link--active" : ""}`}
                                >
                                    {item.title}
                                </TransitionLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="pt-offcanvas__footer">
                    <span className="pt-overline">Contato direto</span>
                    <a href="mailto:contato@patriciaianda.com.br">
                        contato@patriciaianda.com.br
                    </a>
                    <div style={{ marginTop: 24 }}>
                        <TransitionLink
                            href="/fale-comigo"
                            className="pt-cta"
                            onClick={onClose}
                        >
                            Vamos conversar sobre impacto público
                            <span className="arr" aria-hidden="true">→</span>
                        </TransitionLink>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default MobileMenu;
