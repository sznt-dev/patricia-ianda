const ContactHero = () => {
    return (
        <section className="pt-contact-hero" aria-labelledby="contact-title">
            <div className="container">
                <span className="pt-overline tp_fade_anim">Fale comigo</span>
                <h1 id="contact-title" className="tp-char-animation">
                    Vamos <em>conversar</em>.
                </h1>
                <p className="tp_fade_anim" data-delay=".4">
                    Para parcerias, convites para eventos, entrevistas ou qualquer assunto
                    relacionado ao meu trabalho — preencha o formulário, mande WhatsApp ou
                    me encontre nas redes.
                </p>
            </div>
        </section>
    );
};

export default ContactHero;
