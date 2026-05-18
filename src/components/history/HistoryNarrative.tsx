import Image from "next/image";
import narrativePhoto from "../../../public/assets/img/patricia/historia.jpg";

const HistoryNarrative = () => {
    return (
        <section className="pt-history-narrative" aria-labelledby="narrative-title">
            <div className="container">
                <div className="pt-history-narrative__grid">
                    <aside className="pt-history-narrative__sticky">
                        <span className="pt-history-narrative__pretitle">A história</span>
                        <h2 id="narrative-title" className="pt-history-narrative__heading">
                            Da clínica à <em>liderança pública</em>.
                        </h2>
                    </aside>

                    <div className="pt-history-narrative__body tp_fade_anim">
                        <p>
                            Patrícia Ianda é uma das principais referências brasileiras na
                            área de assistência social e políticas públicas. Uma trajetória
                            sólida construída na intersecção entre gestão governamental,
                            inovação e impacto social.
                        </p>
                        <p>
                            Não chegou à política pública pela teoria. Chegou pela realidade.
                        </p>
                        <p>
                            Formada em Psicologia, com especialização voltada ao atendimento
                            de crianças e adolescentes em situação de vulnerabilidade, ela
                            entrou no sistema de assistência social quando esse sistema ainda
                            engatinhava no Brasil. Ficou. Construiu. Entregou. E seguiu.
                        </p>
                        <p>
                            Ao longo de mais de duas décadas, ocupou cargos que poucos
                            alcançam e menos ainda sustentam: secretarias municipais em
                            Atibaia, Bertioga e Guarulhos; diretorias regionais em Franca
                            coordenando 43 municípios; atuação estadual na proteção social
                            de populações em situação de altíssima vulnerabilidade.
                        </p>

                        <blockquote className="pt-history-narrative__highlight">
                            Em cada posto, o mesmo padrão: humanizar o atendimento, qualificar
                            as equipes e construir fluxos que fazem a diferença chegar mais
                            rápido a quem mais precisa.
                        </blockquote>

                        <p>
                            Quando percebeu que a gestão pública emperrava não por falta de
                            vontade, mas por falta de ferramentas, fundou a Alicerce — uma
                            GovTech de Políticas Públicas do Brasil. Hoje à frente da
                            empresa, atua em municípios de todo o país, tornando a gestão da
                            assistência social mais ágil, organizada e eficiente.
                        </p>
                        <p>
                            Mas nenhuma plataforma substitui a convicção. E a de Patrícia é
                            clara: tecnologia serve às pessoas. Não o contrário.
                        </p>
                        <p>
                            Mais do que uma gestora ou empreendedora, Patrícia é uma agente
                            de transformação. O propósito é claro: usar conhecimento,
                            tecnologia e gestão para fortalecer políticas públicas e construir
                            um país mais justo, inclusivo e humano.
                        </p>
                    </div>

                    <div className="pt-history-narrative__photo tp_img_reveal">
                        <Image
                            src={narrativePhoto}
                            alt="Patrícia Ianda em atendimento"
                            placeholder="blur"
                            sizes="(max-width: 991px) 80vw, 25vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistoryNarrative;
