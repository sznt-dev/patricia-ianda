"use client";
import { useState } from "react";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Stub. Backend de envio (e-mail/Resend/etc) é integrado em fase posterior.
        const fd = new FormData(e.currentTarget);
        console.log("[contact stub]", Object.fromEntries(fd.entries()));
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="pt-form__success">
                ✦ Mensagem recebida. Em breve a equipe da Patrícia entra em contato.
            </div>
        );
    }

    return (
        <form className="pt-form tp_fade_anim" onSubmit={handleSubmit}>
            <div className="pt-form__row">
                <div className="pt-form__field">
                    <label htmlFor="name">Seu nome</label>
                    <input id="name" name="name" type="text" required placeholder="Como você se chama?" />
                </div>
                <div className="pt-form__field">
                    <label htmlFor="email">E-mail</label>
                    <input id="email" name="email" type="email" required placeholder="seu@email.com" />
                </div>
            </div>

            <div className="pt-form__field">
                <label htmlFor="subject">Assunto</label>
                <input id="subject" name="subject" type="text" required placeholder="Sobre o que é a conversa?" />
            </div>

            <div className="pt-form__field">
                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" required placeholder="Conte um pouco do contexto…" />
            </div>

            <button type="submit" className="pt-btn pt-btn--primary pt-form__submit">
                Enviar mensagem
                <span className="arr" aria-hidden="true">→</span>
            </button>
        </form>
    );
};

export default ContactForm;
