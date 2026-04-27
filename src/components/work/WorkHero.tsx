const WorkHero = () => {
    return (
        <section className="pt-work-hero" aria-labelledby="work-title">
            <div className="container">
                <span className="pt-overline tp_fade_anim">Meu trabalho</span>
                <h1 id="work-title" className="pt-work-hero__title tp-char-animation">
                    Trabalho que se mede em <em>impacto</em>, não em cargo.
                </h1>
                <p className="pt-work-hero__sub tp_fade_anim" data-delay=".4">
                    Projetos, iniciativas e participações que deixaram marcas reais
                    na vida de pessoas e na gestão de municípios.
                </p>
            </div>
        </section>
    );
};

export default WorkHero;
