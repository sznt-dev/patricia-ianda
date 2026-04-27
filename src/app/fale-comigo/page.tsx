import type { Metadata } from "next";
import ContactHero from "@/components/contato/ContactHero";
import ContactForm from "@/components/contato/ContactForm";
import ContactAside from "@/components/contato/ContactAside";

export const metadata: Metadata = {
    title: "Fale Comigo",
    description:
        "Para parcerias, convites para eventos, entrevistas ou qualquer assunto relacionado ao trabalho de Patrícia Ianda.",
};

export default function FaleComigoPage() {
    return (
        <>
            <ContactHero />
            <section aria-label="Canais de contato">
                <div className="container pt-contact-grid">
                    <ContactForm />
                    <ContactAside />
                </div>
            </section>
        </>
    );
}
