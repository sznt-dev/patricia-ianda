const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Patrícia Ianda",
    url: "https://patriciaianda.com.br",
    jobTitle: "Psicóloga, gestora pública e CEO",
    worksFor: {
        "@type": "Organization",
        name: "SUAS Fácil",
        url: "https://suasfacil.com.br",
    },
    sameAs: [
        "https://www.instagram.com/patricia.ianda/",
        "https://www.linkedin.com/in/patríciaianda/",
        "https://www.facebook.com/patriciaianda.suas",
        "https://www.youtube.com/@PatriciaIanda",
    ],
    nationality: "Brazilian",
    description:
        "Psicóloga, gestora pública e empreendedora social. Liderança em assistência social no Brasil, com mais de duas décadas em municípios, regional e estadual, e à frente de uma das principais GovTechs sociais do país.",
};

const PersonJsonLd = () => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
);

export default PersonJsonLd;
