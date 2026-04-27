import TransitionLink from "@/components/shared/TransitionLink";
import { menuData } from "@/data/menuData";
import { socialLinks } from "@/data/socialLinks";

const PatriciaFooter = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="pt-footer">
            <div className="container">
                <h2 className="pt-footer__motto tp_fade_anim" data-fade-from="bottom" data-delay=".15">
                    Política pública que <em>chega na ponta</em>.
                </h2>

                <div className="pt-footer__grid">
                    <div className="pt-footer__widget pt-footer__widget--lead">
                        <h4>Quem é Patrícia</h4>
                        <p>
                            Décadas <em>cuidando</em> de quem o poder costuma ignorar. Psicóloga,
                            gestora pública e empreendedora social.
                        </p>
                    </div>

                    <div className="pt-footer__widget">
                        <h4>Navegar</h4>
                        <ul className="pt-footer__menu">
                            {menuData.map((item) => (
                                <li key={item.href}>
                                    <TransitionLink href={item.href}>{item.title}</TransitionLink>
                                </li>
                            ))}
                            <li>
                                <TransitionLink href="/blog">Blog</TransitionLink>
                            </li>
                        </ul>
                    </div>

                    <div className="pt-footer__widget">
                        <h4>Contato</h4>
                        <a className="pt-footer__contact-line" href="mailto:contato@patriciaianda.com.br">
                            contato@patriciaianda.com.br
                        </a>
                        <span className="pt-footer__contact-line" style={{ color: "var(--pt-ink-muted)" }}>
                            Brasil · Atendimento nacional
                        </span>

                        <div className="pt-footer__social" aria-label="Redes sociais">
                            {socialLinks.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-footer__bottom">
                    <p>© {year} Patrícia Ianda. Todos os direitos reservados.</p>
                    <a href="/politica-de-privacidade">Política de Privacidade</a>
                </div>
            </div>
        </footer>
    );
};

export default PatriciaFooter;
