"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const wordRef = useRef<HTMLSpanElement>(null);
    const lineRef = useRef<HTMLSpanElement>(null);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const tl = gsap.timeline();

        gsap.set(wordRef.current, { opacity: 0, y: 24 });
        gsap.set(lineRef.current, { scaleX: 0, transformOrigin: "left" });

        tl.to(wordRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
        })
            .to(lineRef.current, {
                scaleX: 1,
                duration: 0.9,
                ease: "power3.inOut",
            }, "-=0.3")
            .to({}, { duration: 0.35 })
            .to(preloaderRef.current, {
                clipPath: "inset(0 0 100% 0)",
                duration: 0.85,
                ease: "power4.inOut",
                onComplete: () => setVisible(false),
            });

        return () => {
            tl.kill();
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            ref={preloaderRef}
            style={{
                position: "fixed",
                inset: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "var(--pt-cream)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 99999,
                clipPath: "inset(0 0 0% 0)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                }}
            >
                <span
                    ref={wordRef}
                    style={{
                        fontFamily: "var(--pt-font-display)",
                        fontSize: "clamp(28px, 4vw, 44px)",
                        fontWeight: 600,
                        color: "var(--pt-blue-900)",
                        letterSpacing: "-0.01em",
                        lineHeight: 1,
                        display: "inline-block",
                    }}
                >
                    Patrícia <span style={{ color: "var(--pt-orange-700)", fontStyle: "italic" }}>Ianda</span>
                </span>
                <span
                    ref={lineRef}
                    style={{
                        display: "block",
                        width: "120px",
                        height: "2px",
                        backgroundColor: "var(--pt-orange-700)",
                    }}
                />
            </div>
        </div>
    );
};

export default Preloader;
