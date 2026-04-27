const MidiaHero = () => {
    return (
        <section className="pt-midia-hero" aria-labelledby="midia-title">
            <div className="container">
                <span className="pt-overline tp_fade_anim">Patrícia na mídia</span>
                <h1 id="midia-title" className="tp-char-animation">
                    Onde a <em>conversa</em> acontece.
                </h1>
                <p className="tp_fade_anim" data-delay=".4">
                    Agenda de participações públicas e redes sociais de Patrícia. O melhor
                    lugar pra acompanhar a pauta, os bastidores e os próximos encontros.
                </p>
            </div>
        </section>
    );
};

export default MidiaHero;
