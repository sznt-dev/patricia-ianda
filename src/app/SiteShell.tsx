"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Preloader from "@/components/shared/Preloader";
import AppProvider from "@/provider/AppProvider";
import { VideoProvider } from "@/provider/VideoProvider";
import Wrapper from "@/layouts/wrapper";
import AnimationWrapper from "@/components/shared/Animation/AnimationWrapper";
import ScrollSmoothProvider from "@/components/provider/ScrollSmoothProvider";
import PatriciaHeader from "@/layouts/headers/PatriciaHeader";
import PatriciaFooter from "@/layouts/footers/PatriciaFooter";
import MobileMenu from "@/layouts/MobileMenu";

interface SiteShellProps {
    children: React.ReactNode;
}

/**
 * Casca client do site da Patrícia. Replica a estrutura dos templates do agntix:
 *
 *   <Header />                       <- fixo, FORA do smooth-wrapper
 *   <MobileMenu />                   <- offcanvas, FORA do smooth-wrapper
 *   <#smooth-wrapper>
 *     <#smooth-content>
 *       <main>{children}</main>
 *       <Footer />
 *     </#smooth-content>
 *   </#smooth-wrapper>
 *
 * É a única configuração em que o ScrollSmoother (smooth: 2) coexiste com o
 * header sticky sem quebrar position:fixed (porque o header não recebe o
 * transform aplicado ao smooth-content).
 */
const SiteShell = ({ children }: SiteShellProps) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // /studio é um app inteiro do Sanity. Não recebe header/footer/preloader da Patrícia.
    if (pathname?.startsWith("/studio")) {
        return <>{children}</>;
    }

    return (
        <>
            <a href="#conteudo-principal" className="pt-skip-link">
                Pular para o conteúdo principal
            </a>
            <Preloader />
            <AppProvider>
                <Wrapper>
                    <VideoProvider>
                        <AnimationWrapper>
                            <PatriciaHeader onOpenMenu={() => setMenuOpen(true)} />
                            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

                            <ScrollSmoothProvider>
                                <div id="smooth-wrapper">
                                    <div id="smooth-content">
                                        <main id="conteudo-principal">
                                            <div className="pt-header-spacer" aria-hidden="true" />
                                            {children}
                                        </main>
                                        <PatriciaFooter />
                                    </div>
                                </div>
                            </ScrollSmoothProvider>
                        </AnimationWrapper>
                    </VideoProvider>
                </Wrapper>
            </AppProvider>
        </>
    );
};

export default SiteShell;
