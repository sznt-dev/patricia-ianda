import { projects } from "@/data/workData";

const WorkProjects = () => {
    return (
        <section className="pt-work-section" aria-labelledby="projects-title">
            <div className="container">
                <div className="pt-work-section__head tp_fade_anim">
                    <span className="pt-overline">Projetos e iniciativas</span>
                    <h2 id="projects-title">
                        Iniciativas que <em>saíram do papel</em>.
                    </h2>
                    <p>
                        Programas e ações desenhados para chegar na ponta — onde a política
                        pública vira diferença concreta para famílias, mulheres e equipes.
                    </p>
                </div>

                <div className="pt-projects-grid">
                    {projects.map((project, i) => (
                        <article
                            key={project.title}
                            className="pt-project-card tp_fade_anim"
                            data-delay={`.${i * 10 + 15}`}
                        >
                            <h3 className="pt-project-card__title">{project.title}</h3>
                            <p className="pt-project-card__partners">{project.partners}</p>
                            <p className="pt-project-card__desc">{project.desc}</p>
                            {project.result && (
                                <p className="pt-project-card__result">
                                    Resultado: <strong>{project.result}</strong>
                                </p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkProjects;
