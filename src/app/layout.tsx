import type { Metadata } from "next";
import { Playfair_Display, Onest, Space_Grotesk } from "next/font/google";
import "swiper/css/bundle";
import "./globals.scss";
import SiteShell from "./SiteShell";

// Display / headlines — serif editorial, gravitas
const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair-display",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

// Body / UI — sans contemporâneo legível
const onest = Onest({
    subsets: ["latin"],
    variable: "--font-onest",
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

// Acento / overline / tags
const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://patriciaianda.com.br"),
    title: {
        default: "Patrícia Ianda",
        template: "%s · Patrícia Ianda",
    },
    description:
        "Uma das principais referências brasileiras em assistência social e políticas públicas. Psicóloga, gestora pública e CEO do SUAS Fácil.",
    openGraph: {
        type: "website",
        locale: "pt_BR",
        url: "https://patriciaianda.com.br",
        title: "Patrícia Ianda",
        description:
            "Uma das principais referências brasileiras em assistência social e políticas públicas. Psicóloga, gestora pública e CEO do SUAS Fácil.",
        siteName: "Patrícia Ianda",
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html
            lang="pt-BR"
            className="no-js agntix-light"
            data-scroll-behavior="smooth"
            suppressHydrationWarning
        >
            <body
                suppressHydrationWarning
                className={`${playfairDisplay.variable} ${onest.variable} ${spaceGrotesk.variable}`}
            >
                <SiteShell>{children}</SiteShell>
            </body>
        </html>
    );
}
