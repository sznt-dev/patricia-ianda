import type { Metadata } from "next";
import HistoryHero from "@/components/history/HistoryHero";
import HistoryNarrative from "@/components/history/HistoryNarrative";
import HistoryTimeline from "@/components/history/HistoryTimeline";
import HistoryFormation from "@/components/history/HistoryFormation";
import HistoryValues from "@/components/history/HistoryValues";

export const metadata: Metadata = {
    title: "Minha História",
    description:
        "Trajetória de Patrícia Ianda na assistência social, gestão pública e empreendedorismo. Mais de duas décadas construídas onde as pessoas precisam.",
};

export default function MinhaHistoriaPage() {
    return (
        <>
            <HistoryHero />
            <HistoryNarrative />
            <HistoryTimeline />
            <HistoryFormation />
            <HistoryValues />
        </>
    );
}
