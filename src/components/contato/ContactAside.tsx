import { socialLinks } from "@/data/socialLinks";

const ContactAside = () => {
    const whatsappNumber = "5511999999999";
    const whatsappText = encodeURIComponent("Olá Patrícia, vi seu site e gostaria de conversar.");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

    return (
        <aside className="pt-contact-aside">
            <div className="pt-contact-block tp_fade_anim">
                <h3>Prefere pelo WhatsApp?</h3>
                <p>Atendimento direto da equipe da Patrícia, em horário comercial.</p>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="pt-whatsapp-btn">
                    Abrir conversa no WhatsApp →
                </a>
            </div>

            <div className="pt-contact-block tp_fade_anim" data-delay=".15">
                <h3>Me encontre nas redes</h3>
                <p>Conteúdo, bastidores e agenda em primeira mão.</p>
                <div className="pt-contact-socials">
                    {socialLinks.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {s.icon} {s.label}
                        </a>
                    ))}
                </div>
            </div>

            <div className="pt-press-block tp_fade_anim" data-delay=".3">
                <h3>Para a imprensa</h3>
                <p>
                    Jornalistas e veículos podem entrar em contato diretamente com a
                    assessoria de comunicação da Patrícia.
                </p>
                <div className="info">
                    <strong>Assessoria de comunicação</strong>
                    <a href="mailto:imprensa@patriciaianda.com.br">
                        imprensa@patriciaianda.com.br
                    </a>
                    <br />
                    <span style={{ opacity: 0.7 }}>[Telefone a confirmar com cliente]</span>
                </div>
            </div>
        </aside>
    );
};

export default ContactAside;
