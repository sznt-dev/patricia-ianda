import type { Metadata } from "next";
import WorkHero from "@/components/work/WorkHero";
import WorkProjects from "@/components/work/WorkProjects";
import InstagramSection from "@/components/home/InstagramSection";

export const metadata: Metadata = {
    title: "Meu Trabalho",
    description:
        "Projetos e iniciativas de Patrícia Ianda. Trabalho que se mede em impacto, não em cargo.",
};

export default function MeuTrabalhoPage() {
    return (
        <>
            <WorkHero />
            <WorkProjects />
            <InstagramSection />
        </>
    );
}
