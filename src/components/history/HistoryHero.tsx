const HistoryHero = () => {
    return (
        <section className="pt-history-hero" aria-labelledby="history-title">
            <div className="container">
                <div className="pt-history-hero__inner">
                    <span className="pt-overline tp_fade_anim">Minha história</span>
                    <h1 id="history-title" className="pt-history-hero__title tp-char-animation">
                        Uma trajetória construída na <em>realidade</em>, não nos gabinetes.
                    </h1>
                    <p className="pt-history-hero__sub tp_fade_anim" data-delay=".4">
                        Psicóloga de formação. Gestora de vocação. Empreendedora por escolha.
                        Liderança por necessidade.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HistoryHero;
