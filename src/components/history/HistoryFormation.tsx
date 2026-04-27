interface FormationItem {
    year: string;
    role: string;
    place: string;
}

const items: FormationItem[] = [
    {
        year: "—",
        role: "Graduação em Psicologia",
        place: "[Instituição a confirmar com cliente]",
    },
    {
        year: "—",
        role: "Especialização em atendimento a crianças e adolescentes em situação de vulnerabilidade",
        place: "[Instituição a confirmar com cliente]",
    },
    {
        year: "—",
        role: "Cursos e atualizações em gestão pública e tecnologia social",
        place: "[Cursos relevantes a confirmar]",
    },
];

const HistoryFormation = () => {
    return (
        <section className="pt-formation" aria-labelledby="formation-title">
            <div className="container">
                <span className="pt-overline tp_fade_anim">Formação</span>
                <h2 id="formation-title" className="pt-formation__title tp_fade_anim" data-delay=".15">
                    Onde a <em>técnica</em> começou.
                </h2>
                <ul className="pt-formation__list">
                    {items.map((item, i) => (
                        <li
                            key={item.role}
                            className="pt-formation__item tp_fade_anim"
                            data-delay={`.${i * 10 + 20}`}
                        >
                            <span className="pt-formation__year">{item.year}</span>
                            <div className="pt-formation__detail">
                                <span className="role">{item.role}</span>
                                <span className="place">{item.place}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default HistoryFormation;
