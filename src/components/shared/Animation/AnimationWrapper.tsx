"use client";
import { animationConfig } from "@/config/animationConfig";
import { charAnimation, fadeAnimation } from "@/hooks/useGsapAnimation";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import React from "react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const AnimationWrapper = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    useGSAP(
        () => {
            // Cleanup de qualquer ScrollTrigger anterior antes de rebindar nesta rota.
            ScrollTrigger.getAll().forEach((t) => t.kill());

            const timer = setTimeout(() => {
                // Animações globais (sempre presentes)
                fadeAnimation();
                charAnimation();

                // Animações específicas da rota atual
                if (pathname) {
                    const pageAnimations = animationConfig[pathname];
                    if (pageAnimations && Array.isArray(pageAnimations)) {
                        pageAnimations.forEach((fn) => fn());
                    }
                }

                // Refresh do ScrollTrigger pra recalcular posições com base no novo DOM
                ScrollTrigger.refresh();
            }, 100);

            return () => {
                clearTimeout(timer);
                ScrollTrigger.getAll().forEach((t) => t.kill());
            };
        },
        { dependencies: [pathname] },
    );

    return <>{children}</>;
};

export default AnimationWrapper;
