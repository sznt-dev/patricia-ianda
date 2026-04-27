"use client";
import useStickyHeader from "@/hooks/useStickyHeader";
import TransitionLink from "@/components/shared/TransitionLink";
import NavMenusPatricia from "./NavMenusPatricia";

interface PatriciaHeaderProps {
    onOpenMenu: () => void;
}

/**
 * Header com a engenharia visual do CreativeStudioHeader do agntix
 * (`tp-header-area tp-header-blur sticky-white-bg`) — backdrop-filter blur
 * dinâmico, mudança de classes ao scroll, container fluid editorial.
 *
 * Adaptação Patrícia: logo tipográfico (sem PNG), 5 menu items via
 * NavMenusPatricia, CTA pill laranja em vez do botão SVG-blur do agntix.
 */
const PatriciaHeader = ({ onOpenMenu }: PatriciaHeaderProps) => {
    const isSticky = useStickyHeader(20);

    return (
        <header className="pt-header-shell">
            <div
                id="header-sticky"
                className={`tp-header-area tp-header-ptb tp-header-4-style header-4-light-style tp-header-blur header-transparent tp-header-border sticky-white-bg ${isSticky ? "header-sticky" : ""}`}
            >
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                            <TransitionLink
                                href="/"
                                className="pt-logo"
                                aria-label="Patrícia Ianda — página inicial"
                            >
                                Patrícia <em>Ianda</em>
                            </TransitionLink>
                        </div>

                        <div className="col-xl-6 d-none d-xl-block">
                            <div className="tp-header-box d-flex align-items-center justify-content-center">
                                <div className="tp-header-menu">
                                    <nav className="tp-mobile-menu-active">
                                        <NavMenusPatricia />
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 col-6">
                            <div className="tp-header-right d-flex align-items-center justify-content-end">
                                <TransitionLink
                                    href="/fale-comigo"
                                    className="pt-cta d-none d-xl-inline-flex"
                                >
                                    Fale Comigo
                                    <span className="arr" aria-hidden="true">→</span>
                                </TransitionLink>
                                <button
                                    type="button"
                                    onClick={onOpenMenu}
                                    className="pt-burger ml-20 d-xl-none"
                                    aria-label="Abrir menu"
                                    aria-expanded="false"
                                >
                                    <span aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PatriciaHeader;
