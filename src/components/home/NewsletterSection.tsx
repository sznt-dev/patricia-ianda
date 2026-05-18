"use client";
import { useState } from "react";
import Image from "next/image";
import sidePhotoLeft from "../../../public/assets/img/patricia/newsletter-1.jpg";
import sidePhotoRight from "../../../public/assets/img/patricia/newsletter-2.jpg";

const NewsletterSection = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        console.log("[newsletter stub]", {
            name: fd.get("name"),
            email: fd.get("email"),
        });
        setSubmitted(true);
    };

    return (
        <section className="pt-newsletter" aria-labelledby="newsletter-title">
            <div className="container">
                <div className="pt-newsletter__layout">
                    <div className="pt-newsletter__side tp_fade_anim">
                        <div className="pt-newsletter__photo" data-speed="1.05">
                            <Image
                                src={sidePhotoLeft}
                                alt=""
                                placeholder="blur"
                                sizes="240px"
                            />
                        </div>
                    </div>

                    <div className="pt-newsletter__inner">
                        <span className="pt-newsletter__overline tp_fade_anim">Newsletter</span>
                        <h2 id="newsletter-title" className="pt-newsletter__title tp_fade_anim" data-delay=".15">
                            Receba em <em>primeira mão</em>.
                        </h2>
                        <p className="pt-newsletter__lead tp_fade_anim" data-delay=".3">
                            Cadastre-se e acompanhe o trabalho, as pautas e tudo que
                            acontece nos bastidores da gestão pública e do empreendedorismo
                            social.
                        </p>

                        {submitted ? (
                            <p className="pt-newsletter__success">
                                Pronto. Em breve você recebe o primeiro envio. ✦
                            </p>
                        ) : (
                            <form className="pt-newsletter__form tp_fade_anim" data-delay=".4" onSubmit={handleSubmit}>
                                <input
                                    className="pt-newsletter__input"
                                    type="text"
                                    name="name"
                                    placeholder="Seu nome"
                                    required
                                    aria-label="Seu nome"
                                />
                                <input
                                    className="pt-newsletter__input"
                                    type="email"
                                    name="email"
                                    placeholder="Seu melhor e-mail"
                                    required
                                    aria-label="Seu e-mail"
                                />
                                <button type="submit" className="pt-newsletter__submit">
                                    Quero acompanhar
                                </button>
                            </form>
                        )}

                        <p className="pt-newsletter__microcopy">
                            Sem spam. Só conteúdo que vale o seu tempo.
                        </p>
                    </div>

                    <div className="pt-newsletter__side tp_fade_anim" data-delay=".2">
                        <div className="pt-newsletter__photo pt-newsletter__photo--right" data-speed="0.95">
                            <Image
                                src={sidePhotoRight}
                                alt=""
                                placeholder="blur"
                                sizes="240px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
