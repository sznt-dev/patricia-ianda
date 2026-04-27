"use client";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useCallback } from "react";

interface TransitionLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    [key: string]: unknown;
}

/**
 * Constrói (ou recupera) o overlay de transição entre páginas.
 * Mesmo visual do Preloader: fundo cream, "Patrícia Ianda" em Playfair italic,
 * linha laranja embaixo. Anima com clip-path slide (igual preloader entry/exit).
 */
function getOverlay(): { root: HTMLDivElement; word: HTMLSpanElement; line: HTMLSpanElement } {
    let root = document.getElementById("page-transition-overlay") as HTMLDivElement | null;

    if (!root) {
        root = document.createElement("div");
        root.id = "page-transition-overlay";
        root.setAttribute("aria-hidden", "true");
        root.style.cssText = [
            "position:fixed",
            "inset:0",
            "width:100vw",
            "height:100vh",
            "background-color:var(--pt-cream, #faf6f1)",
            "z-index:9998",
            "pointer-events:none",
            "display:flex",
            "align-items:center",
            "justify-content:center",
            "clip-path:inset(0 0 100% 0)",
        ].join(";");

        const inner = document.createElement("div");
        inner.style.cssText = "display:flex;flex-direction:column;align-items:center;gap:20px;";

        const word = document.createElement("span");
        word.id = "page-transition-word";
        word.style.cssText = [
            "font-family:var(--pt-font-display, Georgia, serif)",
            "font-size:clamp(28px, 4vw, 44px)",
            "font-weight:600",
            "color:var(--pt-blue-900, #0e2a47)",
            "letter-spacing:-0.01em",
            "line-height:1",
            "opacity:0",
            "transform:translateY(24px)",
        ].join(";");
        word.innerHTML = 'Patrícia <span style="color:var(--pt-orange-700, #c25a1f);font-style:italic;">Ianda</span>';

        const line = document.createElement("span");
        line.id = "page-transition-line";
        line.style.cssText = [
            "display:block",
            "width:120px",
            "height:2px",
            "background-color:var(--pt-orange-700, #c25a1f)",
            "transform:scaleX(0)",
            "transform-origin:left",
        ].join(";");

        inner.appendChild(word);
        inner.appendChild(line);
        root.appendChild(inner);
        document.body.appendChild(root);
    }

    return {
        root,
        word: document.getElementById("page-transition-word") as HTMLSpanElement,
        line: document.getElementById("page-transition-line") as HTMLSpanElement,
    };
}

function waitForPageReady(): Promise<void> {
    return new Promise((resolve) => {
        let checks = 0;
        const max = 30;

        const check = () => {
            checks++;
            const smoothContent = document.getElementById("smooth-content");
            const hasContent = smoothContent && smoothContent.children.length > 0;
            if (hasContent || checks >= max) {
                resolve();
            } else {
                requestAnimationFrame(check);
            }
        };
        requestAnimationFrame(check);
    });
}

const TransitionLink = ({ href, children, className, onClick, ...rest }: TransitionLinkProps) => {
    const router = useRouter();

    const handleClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            if (e.metaKey || e.ctrlKey || e.shiftKey) return;
            e.preventDefault();
            if (onClick) onClick(e);

            const { root, word, line } = getOverlay();

            // Reset estado inicial
            gsap.set(word, { opacity: 0, y: 24 });
            gsap.set(line, { scaleX: 0, transformOrigin: "left" });

            // Mata ScrollTriggers antigos pra não interferirem
            ScrollTrigger.getAll().forEach((t) => t.kill());

            // ENTRADA: clip-path desce cobrindo a tela + nome aparece
            const tl = gsap.timeline();
            tl.to(root, {
                clipPath: "inset(0 0 0% 0)",
                duration: 0.55,
                ease: "power4.inOut",
            })
                .to(
                    word,
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power3.out",
                    },
                    "-=0.2",
                )
                .to(
                    line,
                    {
                        scaleX: 1,
                        duration: 0.55,
                        ease: "power3.inOut",
                    },
                    "-=0.3",
                )
                .add(() => {
                    router.push(href);
                })
                .to({}, { duration: 0.25 })
                // Espera o conteúdo da nova página, depois revela
                .add(() => {
                    waitForPageReady().then(() => {
                        window.scrollTo(0, 0);
                        gsap.to(root, {
                            clipPath: "inset(0 0 100% 0)",
                            duration: 0.7,
                            ease: "power4.inOut",
                        });
                    });
                });
        },
        [href, router, onClick],
    );

    return (
        <a href={href} className={className} onClick={handleClick} {...rest}>
            {children}
        </a>
    );
};

export default TransitionLink;
