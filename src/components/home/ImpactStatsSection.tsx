import AnimatedCounterTwo from "@/components/counter/AnimatedCounterTwo";

interface Stat {
    value: number;
    suffix?: string;
    label: string;
    delay: string;
}

const stats: Stat[] = [
    {
        value: 43,
        label: "municípios coordenados como Diretora do SUAS em Franca",
        delay: ".2",
    },
    {
        value: 20,
        suffix: "+",
        label: "anos de gestão pública na assistência social",
        delay: ".35",
    },
    {
        value: 3,
        label: "secretarias municipais lideradas em diferentes realidades",
        delay: ".5",
    },
    {
        value: 1,
        label: "GovTech redefinindo a gestão da assistência social no Brasil",
        delay: ".65",
    },
];

const ImpactStatsSection = () => {
    return (
        <section className="pt-stats" aria-labelledby="stats-title">
            <span className="pt-stats__shape" aria-hidden="true" />
            <div className="container">
                <h2 id="stats-title" className="pt-stats__title tp_fade_anim">
                    Vinte anos transformando <em>política pública</em> em vida real
                </h2>
                <div className="pt-stats__grid">
                    {stats.map((stat) => (
                        <div key={stat.label} className="pt-stat tp_fade_anim" data-delay={stat.delay}>
                            <span className="pt-stat__number">
                                <AnimatedCounterTwo min={0} max={stat.value} />
                                {stat.suffix && <span className="suffix">{stat.suffix}</span>}
                            </span>
                            <p className="pt-stat__label">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStatsSection;
