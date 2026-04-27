interface Value {
    num: string;
    title: string;
    desc: string;
    delay: string;
}

const values: Value[] = [
    {
        num: "01",
        title: "Dignidade não é utopia",
        desc: "A política pública precisa tratar cada pessoa como fim, não como estatística.",
        delay: ".15",
    },
    {
        num: "02",
        title: "Tecnologia a serviço do humano",
        desc: "Inovação só faz sentido se chegar a quem mais precisa.",
        delay: ".3",
    },
    {
        num: "03",
        title: "Gestão é cuidado com escala",
        desc: "Eficiência não é frieza. É conseguir que o cuidado alcance mais gente.",
        delay: ".45",
    },
];

const HistoryValues = () => {
    return (
        <section className="pt-values" aria-labelledby="values-title">
            <div className="container">
                <div className="pt-values__head">
                    <span className="pt-overline tp_fade_anim">O que orienta cada decisão</span>
                    <h2 id="values-title" className="tp_fade_anim" data-delay=".15">
                        Três <em>princípios</em> inegociáveis.
                    </h2>
                </div>
                <div className="pt-values__grid">
                    {values.map((v) => (
                        <article
                            key={v.num}
                            className="pt-value tp_fade_anim"
                            data-delay={v.delay}
                        >
                            <span className="pt-value__num">{v.num}</span>
                            <h3 className="pt-value__title">{v.title}</h3>
                            <p className="pt-value__desc">{v.desc}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HistoryValues;
