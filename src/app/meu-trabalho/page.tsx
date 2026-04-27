import type { Metadata } from "next";
import WorkHero from "@/components/work/WorkHero";
import WorkProjects from "@/components/work/WorkProjects";
import WorkTalks from "@/components/work/WorkTalks";
import InstagramSection from "@/components/home/InstagramSection";

export const metadata: Metadata = {
    title: "Meu Trabalho",
    description:
        "Projetos, palestras e iniciativas de Patrícia Ianda. Trabalho que se mede em impacto, não em cargo.",
};

export default function MeuTrabalhoPage() {
    return (
        <>
            <WorkHero />
            <WorkProjects />
            <WorkTalks />
            <InstagramSection />
        </>
    );
}
