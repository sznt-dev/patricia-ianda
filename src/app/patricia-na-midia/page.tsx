import type { Metadata } from "next";
import MidiaHero from "@/components/midia/MidiaHero";
import InstagramSection from "@/components/home/InstagramSection";

export const metadata: Metadata = {
    title: "Patrícia na Mídia",
    description:
        "Onde a conversa acontece. Redes sociais e canais oficiais de Patrícia Ianda.",
};

export default function PatriciaNaMidiaPage() {
    return (
        <>
            <MidiaHero />
            <InstagramSection />
        </>
    );
}
