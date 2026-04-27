import type { SanityBlogPost, BlogCategory } from "./types";
import type { PortableTextBlock } from "@portabletext/types";

/**
 * Conteúdo seed do blog — os 5 artigos REAIS publicados pela Patrícia no
 * LinkedIn, transcritos na íntegra. Mantém o site funcional enquanto o
 * Sanity não tem credenciais (NEXT_PUBLIC_SANITY_PROJECT_ID vazio).
 *
 * Quando o cliente conectar o Sanity, esses textos viram a base do primeiro
 * import — basta importar via studio.
 */

const para = (text: string): PortableTextBlock => ({
    _type: "block",
    style: "normal",
    children: [{ _type: "span", text, marks: [] } as never],
    markDefs: [],
});

const heading = (level: "h2" | "h3", text: string): PortableTextBlock => ({
    _type: "block",
    style: level,
    children: [{ _type: "span", text, marks: [] } as never],
    markDefs: [],
});

const quote = (text: string): PortableTextBlock => ({
    _type: "block",
    style: "blockquote",
    children: [{ _type: "span", text, marks: [] } as never],
    markDefs: [],
});

// =============================================================================

export const seedPosts: SanityBlogPost[] = [
    // -------------------------------------------------------------------------
    // 1. Violência contra a mulher no mercado de trabalho
    // https://www.linkedin.com/pulse/...patr%C3%ADcia-ianda-e12wf
    // -------------------------------------------------------------------------
    {
        _id: "seed-1",
        _createdAt: "2026-03-25T10:00:00Z",
        title:
            "Violência contra a mulher no mercado de trabalho: um gargalo estratégico que drena resultados",
        slug: { current: "violencia-mulher-mercado-de-trabalho" },
        excerpt:
            "A violência contra a mulher no ambiente corporativo é um fator silencioso que limita carreiras, afasta talentos e fragiliza a cultura organizacional. Não se trata apenas de uma pauta social — é uma questão de gestão, performance e sustentabilidade.",
        author: "Patrícia Ianda",
        publishedAt: "2026-03-25T10:00:00Z",
        category: "violencia-contra-mulher" as BlogCategory,
        tags: ["violência", "trabalho", "mulheres", "gestão"],
        readTime: "7 min de leitura",
        body: [
            para(
                "A discussão sobre a presença feminina nas empresas mudou de patamar. Hoje, o desafio não é apenas o acesso, mas a permanência, o crescimento e a segurança das profissionais.",
            ),
            para(
                "A violência contra a mulher no ambiente corporativo é um fator silencioso que limita carreiras, afasta talentos e fragiliza a cultura organizacional. Não se trata apenas de uma pauta social; é uma questão de gestão, performance e sustentabilidade.",
            ),
            para(
                "Quando o ambiente é hostil, os indicadores de negócio sofrem. Impactamos diretamente: retenção de talentos e redução de turnover; engajamento e produtividade; reputação institucional e marca empregadora.",
            ),
            heading("h2", "Os 5 rostos da violência corporativa (e como identificá-los)"),
            para(
                "Para combater, é preciso nomear. Veja como essas práticas se manifestam no dia a dia:",
            ),
            heading("h3", "1. Violência psicológica e \"manterrupting\""),
            para(
                "Manifesta-se em interrupções constantes, desconsideração de ideias e o questionamento excessivo da competência feminina. Isso gera insegurança e limita a tomada de decisão.",
            ),
            quote("O silenciamento das mulheres em reuniões é um sinal de alerta."),
            heading("h3", "2. Assédio moral e constrangimento"),
            para(
                "A exposição pública de erros, críticas desproporcionais e comentários descredibilizantes. O assédio moral no trabalho destrói a confiança e cria um ambiente baseado no medo.",
            ),
            heading("h3", "3. Violência institucional e desigualdade estrutural"),
            para(
                "Ocorre quando a própria estrutura da empresa reforça disparidades. A ausência de mulheres na alta liderança e a falta de canais de denúncia seguros são evidências de desigualdade de gênero no trabalho.",
            ),
            heading("h3", "4. Assédio sexual no ambiente corporativo"),
            para(
                "Insinuações, comentários inapropriados e comportamentos invasivos. O impacto é agravado pelo \"silêncio organizacional\", que protege o agressor e isola a vítima.",
            ),
            heading("h3", "5. Violência econômica e teto de vidro"),
            para(
                "A desigualdade salarial entre homens e mulheres e o bloqueio de promoções para cargos estratégicos. Essa limitação financeira impacta toda a trajetória de vida da profissional.",
            ),
            heading("h2", "Por que a liderança é a chave da mudança?"),
            para(
                "A cultura organizacional não é o que está escrito na parede, mas o que é tolerado no dia a dia. Para promover a equidade de gênero nas empresas, o papel do gestor é fundamental: critérios claros, com promoções baseadas em dados e não em afinidade de gênero; escuta ativa, criando espaços onde a mulher se sinta segura para reportar abusos; coerência, com tolerância zero contra desrespeito, independentemente do cargo do agressor.",
            ),
            heading("h2", "Caminhos práticos para ambientes seguros"),
            para(
                "Construir um ambiente produtivo exige intencionalidade. Algumas ações imediatas incluem: canais de denúncia externos e anônimos; auditorias periódicas de equidade salarial; programas específicos de mentoria para lideranças femininas; treinamentos frequentes sobre vieses inconscientes.",
            ),
            heading("h2", "Conclusão: uma agenda de negócios"),
            para(
                "Promover respeito e segurança não é um \"favor\" às mulheres, é uma decisão estratégica. Organizações seguras inovam mais, retêm os melhores profissionais e são mais resilientes a crises.",
            ),
            para(
                "Como sua organização tem lidado com esse tema na prática? A cultura atual favorece o desenvolvimento ou ainda impõe barreiras invisíveis?",
            ),
        ],
    },

    // -------------------------------------------------------------------------
    // 2. Presença Feminina nas GovTechs no Brasil
    // https://www.linkedin.com/pulse/...patr%C3%ADcia-ianda-rntcf
    // -------------------------------------------------------------------------
    {
        _id: "seed-2",
        _createdAt: "2026-04-06T10:00:00Z",
        title:
            "Presença Feminina nas GovTechs no Brasil: por que a ausência de mulheres na inovação pública é um risco para o futuro",
        slug: { current: "presenca-feminina-govtechs-brasil" },
        excerpt:
            "A baixa presença feminina nas GovTechs no Brasil não é apenas uma questão de diversidade. É uma falha estrutural que impacta diretamente a qualidade das soluções públicas que chegam à população.",
        author: "Patrícia Ianda",
        publishedAt: "2026-04-06T10:00:00Z",
        category: "empreendedorismo-feminino" as BlogCategory,
        tags: ["govtech", "inovação", "mulheres", "tecnologia"],
        readTime: "9 min de leitura",
        body: [
            para(
                "A baixa presença feminina nas GovTechs no Brasil não é apenas uma questão de diversidade. Ela representa uma falha estrutural que impacta diretamente a qualidade das soluções públicas que chegam à população.",
            ),
            para(
                "Se a tecnologia está redesenhando o Estado, precisamos fazer uma pergunta incômoda: quem está construindo esse novo governo digital? Hoje, a resposta ainda é desigual.",
            ),
            heading("h2", "Presença feminina nas GovTechs: um cenário de sub-representação"),
            para(
                "A presença feminina nas GovTechs ainda reflete um problema histórico do setor de tecnologia. Apesar dos avanços, as mulheres permanecem em minoria em posições técnicas e estratégicas.",
            ),
            para(
                "Dados recentes mostram que apenas cerca de 19% dos profissionais de tecnologia no Brasil são mulheres; muitas equipes operam sem nenhuma presença feminina; e a participação em cargos de liderança permanece significativamente menor.",
            ),
            para(
                "Esse cenário limita não apenas oportunidades, mas a própria inovação no setor público.",
            ),
            heading("h2", "Crescimento das GovTechs no Brasil e impacto na gestão pública"),
            para(
                "As GovTechs no Brasil ganharam destaque por oferecer soluções tecnológicas para governos em todas as esferas. Esse ecossistema atua diretamente em áreas como assistência social, saúde, educação e gestão de dados públicos.",
            ),
            para(
                "O objetivo é claro: tornar o Estado mais eficiente, acessível e orientado por dados.",
            ),
            para(
                "Com o avanço da transformação digital no setor público, as GovTechs assumiram um papel estratégico na modernização das operações governamentais — impactando milhões de brasileiros. Mas existe um ponto crítico: se essas soluções carecem de diversidade na sua origem, correm o risco de não servir a toda a sociedade.",
            ),
            heading("h2", "Por que a presença feminina nas GovTechs é estratégica"),
            para(
                "Discutir mulheres em GovTechs não é apenas inclusão. É eficiência, inovação e impacto real. A presença feminina contribui diretamente para o desenvolvimento de soluções centradas no cidadão; maior sensibilidade social na criação de tecnologia pública; ambientes mais colaborativos e inovadores; decisões equilibradas e sustentáveis.",
            ),
            para(
                "Em um setor que lida com políticas públicas, vulnerabilidade social e acesso a direitos, a diversidade não é um diferencial — é um requisito.",
            ),
            heading("h2", "Mulheres em tecnologia e inovação pública: desafios reais"),
            para(
                "Apesar dos avanços, as barreiras seguem claras: acesso limitado à educação em tecnologia (com baixa matrícula de mulheres em cursos da área); falta de representatividade (a ausência de referências femininas em posições de liderança reduz o efeito multiplicador); oportunidades desiguais (mulheres ainda enfrentam maior dificuldade pra avançar em ambientes altamente técnicos); e invisibilidade em setores estratégicos (mesmo quando presentes, muitas não ocupam espaços de decisão).",
            ),
            para(
                "Essa combinação de fatores cria um ciclo difícil de romper — especialmente em nichos como o das GovTechs.",
            ),
            heading("h2", "Casos de mulheres transformando o setor GovTech"),
            para(
                "Apesar dos desafios, o Brasil já apresenta exemplos relevantes de mulheres liderando inovação. No setor de tecnologia, o número de mulheres em posições estratégicas vem crescendo, incluindo lideranças técnicas e executivas. No ecossistema GovTech, iniciativas lideradas por mulheres têm se destacado por unir tecnologia e impacto social, criando soluções escaláveis para problemas públicos complexos. Esses casos mostram que, quando o espaço existe, a presença feminina não apenas participa — ela acelera a transformação.",
            ),
            heading("h2", "SUASFÁCIL: inovação na assistência social com liderança feminina"),
            para(
                "Dentro desse cenário, o trabalho do SUASFÁCIL reforça como a presença feminina nas GovTechs pode gerar impacto direto na vida das pessoas. Como GovTech brasileira voltada ao Sistema Único de Assistência Social (SUAS), a empresa atua para simplificar a gestão de políticas públicas, apoiar municípios com tecnologia e dados, e ampliar o acesso da população aos serviços socioassistenciais.",
            ),
            para(
                "A proposta é transformar estruturas complexas em soluções acessíveis — conectando gestão pública e cidadão de forma mais eficiente. Mais do que tecnologia, isso é impacto social em escala.",
            ),
            heading("h2", "O futuro das GovTechs depende de diversidade"),
            para(
                "O crescimento das GovTechs no Brasil é inevitável. Mas a forma como esse crescimento acontece pode — e precisa — ser ajustada. Sem diversidade, não existe inovação completa. Sem mulheres, não existe representatividade real da sociedade.",
            ),
            para(
                "Ampliar a presença feminina nas GovTechs envolve incentivar a educação em tecnologia, promover liderança feminina, implementar políticas de inclusão no setor tech e fortalecer ecossistemas diversos. Não se trata apenas de equidade. Trata-se de construir soluções públicas mais inteligentes.",
            ),
            heading("h2", "Conclusão: inovação pública exige representatividade"),
            para(
                "A presença feminina nas GovTechs no Brasil não pode ser tratada como tendência ou pauta secundária. Ela é parte central da construção de um Estado mais eficiente, humano e conectado com a realidade da população.",
            ),
            para(
                "A pergunta que fica não é se as mulheres devem ocupar esses espaços. Isso já está claro. A pergunta é: quanto o país ainda perde por não acelerar esse movimento?",
            ),
            quote(
                "Porque, no fim, a verdadeira inovação pública não se mede só em tecnologia — se mede em impacto.",
            ),
        ],
    },

    // -------------------------------------------------------------------------
    // 3. Tecnologia com Propósito
    // https://www.linkedin.com/pulse/...ianda-rhq2f
    // -------------------------------------------------------------------------
    {
        _id: "seed-3",
        _createdAt: "2026-04-08T10:00:00Z",
        title:
            "Tecnologia com Propósito: como dados, gestão e coragem estão redefinindo a assistência social no Brasil",
        slug: { current: "tecnologia-com-proposito-suas" },
        excerpt:
            "A assistência social no Brasil carrega um dos papéis mais estratégicos das políticas públicas. Mas a forma como é gerida revela uma contradição silenciosa: tenta-se transformar realidades complexas com baixa capacidade de leitura sobre elas.",
        author: "Patrícia Ianda",
        publishedAt: "2026-04-08T10:00:00Z",
        category: "gestao-publica" as BlogCategory,
        tags: ["dados", "SUAS", "gestão", "tecnologia"],
        readTime: "10 min de leitura",
        body: [
            para(
                "A assistência social no Brasil carrega um dos papéis mais estratégicos dentro das políticas públicas. É ela quem revela, com maior sensibilidade, as camadas mais profundas da desigualdade, quem acessa o território real e quem, muitas vezes, se torna a principal porta de entrada para direitos básicos.",
            ),
            para(
                "Ainda assim, apesar da sua relevância estrutural dentro do Sistema Único de Assistência Social (SUAS), a forma como essa política é gerida em muitos contextos ainda revela uma contradição silenciosa: tenta-se transformar realidades complexas com baixa capacidade de leitura sobre elas.",
            ),
            para(
                "Não se trata de ausência de profissionais qualificados, nem de falta de diretrizes. O Brasil possui uma das políticas de assistência social mais bem estruturadas do ponto de vista normativo. O problema está em algo mais profundo — e menos visível: a dificuldade de transformar informação em inteligência e inteligência em decisão.",
            ),
            para(
                "Durante anos, a gestão da assistência social foi sustentada por registros manuais, planilhas descentralizadas e sistemas fragmentados. Informações importantes sobre famílias, territórios e atendimentos se perdem no tempo, não se conectam, não geram histórico e, principalmente, não produzem análise. Nesse cenário, decisões estratégicas acabam sendo tomadas com base em percepções parciais, experiências individuais ou urgências momentâneas.",
            ),
            para(
                "E é exatamente aqui que nasce um dos maiores gargalos da gestão pública brasileira: a ausência de dados estruturados como base para tomada de decisão.",
            ),
            quote(
                "Sem dados organizados, não há diagnóstico consistente. Sem diagnóstico, não há planejamento eficiente. E sem planejamento, qualquer tentativa de transformação se torna limitada, pontual e, muitas vezes, insustentável.",
            ),
            para(
                "A transformação digital na assistência social surge, portanto, não como uma tendência ou modernização estética, mas como uma necessidade estrutural. Não se trata apenas de digitalizar processos ou substituir o papel por sistemas. Trata-se de mudar a forma como a realidade é enxergada, interpretada e conduzida.",
            ),
            para(
                "Quando a tecnologia é incorporada de forma estratégica à gestão pública, ela permite algo que, até então, era extremamente limitado: a leitura qualificada do território. Passa a ser possível identificar padrões de vulnerabilidade, mapear regiões com maior incidência de risco social, acompanhar a jornada das famílias dentro da rede de proteção e avaliar, com maior precisão, o impacto das políticas públicas implementadas.",
            ),
            para("Isso muda completamente o nível da gestão."),
            para(
                "A tomada de decisão deixa de ser reativa e passa a ser orientada por evidências. O gestor deixa de atuar apenas apagando incêndios e passa a antecipar cenários, direcionar recursos com maior assertividade e construir estratégias mais consistentes. A política pública deixa de ser apenas operacional e passa a ser, de fato, estratégica.",
            ),
            para(
                "No entanto, existe um equívoco recorrente quando se fala em tecnologia aplicada à assistência social: a ideia de que a digitalização pode afastar o olhar humano, tornando o atendimento mais frio ou automatizado.",
            ),
            para("Essa visão, embora compreensível, não se sustenta na prática."),
            para(
                "A tecnologia, quando bem utilizada, não substitui o profissional — ela potencializa sua capacidade de atuação. Ao organizar informações, reduzir retrabalho e trazer clareza sobre os processos, ela libera tempo, energia e foco para aquilo que realmente importa: o atendimento qualificado às pessoas.",
            ),
            para(
                "O que antes era gasto com tarefas operacionais passa a ser investido em escuta, análise e construção de soluções mais eficazes. O profissional se torna mais estratégico. A gestão se torna mais inteligente. E o impacto se torna mais profundo.",
            ),
            para(
                "Outro ponto crítico dentro desse contexto é o financiamento das políticas públicas. A disputa por orçamento dentro da gestão pública é uma realidade constante, e, muitas vezes, a assistência social precisa justificar sua relevância em meio a diversas outras demandas.",
            ),
            para("Sem dados, essa disputa se torna desigual."),
            para(
                "Quando não há números consolidados, indicadores claros e evidências consistentes, a argumentação técnica perde força. A necessidade existe, mas não se sustenta de forma estruturada. E, sem sustentação, não há priorização.",
            ),
            para(
                "Por outro lado, quando a gestão passa a operar orientada por dados, a realidade ganha forma. Os problemas deixam de ser subjetivos e passam a ser mensuráveis. As demandas deixam de ser narrativas e passam a ser comprovadas. E, a partir disso, o diálogo com a gestão orçamentária muda de nível.",
            ),
            quote(
                "Dados não são apenas registros. São instrumentos de poder técnico. São base para decisão, para priorização e para transformação.",
            ),
            para(
                "Mas é importante reconhecer que o desafio da transformação digital na assistência social não é apenas tecnológico. Ele é, sobretudo, cultural.",
            ),
            para(
                "O setor público brasileiro possui estruturas importantes, e a burocracia, em sua essência, cumpre um papel fundamental de organização, controle e segurança. No entanto, quando aplicada de forma excessiva ou desconectada da realidade, ela se transforma em um entrave à inovação.",
            ),
            para(
                "A resistência à mudança, a baixa cultura de dados, a descontinuidade de projetos e a falta de visão orientada a resultados ainda são barreiras presentes em muitos contextos. E nenhuma tecnologia, por mais avançada que seja, será suficiente se não houver uma mudança na forma de pensar e conduzir a gestão.",
            ),
            para(
                "Transformar a assistência social exige mais do que ferramentas. Exige liderança. Exige intencionalidade. Exige coragem para romper padrões e construir novos caminhos.",
            ),
            para(
                "No centro de tudo isso, no entanto, permanece aquilo que nunca pode ser esquecido: o cidadão. A assistência social não é sobre sistemas, relatórios ou indicadores. É sobre pessoas. Sobre famílias que enfrentam vulnerabilidades complexas e que precisam de acesso, oportunidade e dignidade.",
            ),
            para("A tecnologia não substitui essa essência — ela a fortalece."),
            para(
                "Quando utilizada com propósito, ela permite que cada decisão seja mais justa, mais precisa e mais eficiente. Permite que o recurso chegue onde precisa chegar. Permite que o atendimento seja mais qualificado. Permite que o impacto deixe de ser uma intenção e passe a ser uma realidade mensurável.",
            ),
            para(
                "O que está em jogo não é apenas a modernização de uma política pública, mas a sua capacidade de gerar transformação real em escala. O futuro da assistência social no Brasil será inevitavelmente orientado por dados. Mas ele só será verdadeiramente transformador se continuar sendo guiado por propósito.",
            ),
            para(
                "A tecnologia, por si só, não transforma realidades. O que transforma é a forma como ela é utilizada, a intencionalidade por trás das decisões e a coragem de fazer diferente, mesmo dentro de estruturas historicamente rígidas.",
            ),
            quote(
                "No final, a grande mudança não está na ferramenta, mas na mentalidade. E talvez a pergunta mais importante não seja se a tecnologia vai transformar a assistência social. Mas quem está disposto a liderar essa transformação.",
            ),
        ],
    },

    // -------------------------------------------------------------------------
    // 4. Empreendedorismo Social na Prática
    // https://www.linkedin.com/pulse/...ianda-dk5lf
    // -------------------------------------------------------------------------
    {
        _id: "seed-4",
        _createdAt: "2026-04-15T10:00:00Z",
        title:
            "Empreendedorismo Social na Prática: quando propósito, gestão pública e tecnologia se encontram",
        slug: { current: "empreendedorismo-social-na-pratica" },
        excerpt:
            "Falar de empreendedorismo social no Brasil já não é mais suficiente. O debate amadureceu — e, com ele, a necessidade de sair do discurso e avançar para a prática, com soluções que realmente funcionam em escala.",
        author: "Patrícia Ianda",
        publishedAt: "2026-04-15T10:00:00Z",
        category: "politica-sociedade" as BlogCategory,
        tags: ["empreendedorismo social", "govtech", "gestão pública"],
        readTime: "8 min de leitura",
        body: [
            para(
                "Falar de empreendedorismo social no Brasil já não é mais suficiente. O debate amadureceu — e, com ele, cresce a necessidade de sair do discurso e avançar para a prática, com soluções que realmente funcionam em escala.",
            ),
            para(
                "Durante muito tempo, iniciativas sociais foram guiadas por propósito, mas limitadas pela falta de estrutura. Projetos bem-intencionados enfrentavam dificuldades para crescer, se sustentar e, principalmente, gerar impacto mensurável. O problema nunca foi a ausência de compromisso com o social, mas sim a dificuldade de transformar intenção em resultado consistente.",
            ),
            para(
                "Hoje, esse cenário começa a mudar — e um dos principais motores dessa transformação é a integração entre gestão pública, tecnologia e dados.",
            ),
            para(
                "O empreendedorismo social contemporâneo não se sustenta mais apenas na causa. Ele exige método. Exige capacidade de leitura de território, organização de processos e tomada de decisão baseada em evidências. E isso muda completamente a forma como o impacto é construído.",
            ),
            para(
                "Nesse novo contexto, a gestão pública deixa de ser apenas executora de políticas e passa a ser protagonista da transformação social. Afinal, é dentro dela que estão os maiores volumes de dados, os principais pontos de contato com a população e o potencial real de escala.",
            ),
            para(
                "Mas existe um ponto crítico: sem tecnologia, essa engrenagem não funciona.",
            ),
            para(
                "É aqui que entram soluções estruturantes — e não apenas ferramentas isoladas.",
            ),
            heading("h2", "Um exemplo claro dessa nova abordagem é o SUASFÁCIL"),
            para(
                "Mais do que um sistema, o SUASFÁCIL representa uma mudança de lógica na gestão da assistência social. Ele organiza informações, integra dados e transforma rotinas operacionais em inteligência estratégica. Isso permite que gestores deixem de atuar no escuro e passem a tomar decisões baseadas em dados concretos.",
            ),
            para(
                "Na prática, isso significa sair de uma atuação reativa para uma atuação preditiva.",
            ),
            para(
                "Com o apoio de soluções como o SUASFÁCIL, municípios conseguem identificar vulnerabilidades com mais precisão, antecipar demandas e direcionar recursos de forma muito mais eficiente. O impacto deixa de depender exclusivamente da experiência individual dos profissionais e passa a ser sustentado por informação estruturada.",
            ),
            para(
                "Esse é um dos pontos centrais do empreendedorismo social na prática: criar condições para que o impacto não seja episódico, mas contínuo.",
            ),
            para(
                "Além disso, a tecnologia passa a cumprir um papel fundamental como infraestrutura de gestão. Ela conecta áreas, reduz retrabalho, melhora o fluxo de informações e fortalece a transparência — algo essencial quando falamos de políticas públicas.",
            ),
            para(
                "Mas talvez o aspecto mais relevante dessa transformação seja a mudança de mentalidade.",
            ),
            para(
                "Implementar inovação na gestão pública não é apenas uma decisão técnica — é uma decisão de liderança. Envolve enfrentar resistências, rever processos e construir uma cultura orientada por dados. E isso não acontece automaticamente.",
            ),
            para(
                "O empreendedorismo social, nesse cenário, deixa de ser apenas a criação de novos projetos e passa a ser a capacidade de implementar soluções dentro de sistemas complexos.",
            ),
            quote(
                "É alguém que entende o problema, mas também entende o processo. Que valoriza o propósito, mas não abre mão da eficiência. Que reconhece o papel da tecnologia, mas sabe que ela precisa estar alinhada à realidade da gestão.",
            ),
            para(
                "O caso do SUASFÁCIL mostra que essa integração não só é possível como necessária. Ele demonstra que, quando dados, tecnologia e gestão caminham juntos, o impacto social ganha consistência. As decisões se tornam mais qualificadas, os recursos são melhor utilizados e o atendimento à população se torna mais efetivo.",
            ),
            para(
                "Isso nos leva a uma reflexão importante: o futuro do social não está apenas em novas ideias, mas na forma como organizamos e executamos o que já sabemos que precisa ser feito.",
            ),
            para(
                "Estamos entrando em uma nova fase, em que o diferencial não será apenas ter propósito — mas conseguir operacionalizá-lo com inteligência.",
            ),
            para("No fim, o empreendedorismo social na prática não é sobre fazer mais."),
            para(
                "É sobre fazer melhor, com mais precisão, mais estratégia e mais impacto.",
            ),
            para(
                "E a pergunta que fica é direta: quantas oportunidades de transformação ainda estão sendo perdidas por falta de integração entre propósito, gestão pública e tecnologia? Porque, quando essa conexão acontece — como já vemos em iniciativas como o SUASFÁCIL — o impacto deixa de ser promessa e passa a ser realidade.",
            ),
        ],
    },

    // -------------------------------------------------------------------------
    // 5. Mulheres no Poder
    // https://www.linkedin.com/pulse/...ianda-zcwmf
    // -------------------------------------------------------------------------
    {
        _id: "seed-5",
        _createdAt: "2026-04-22T10:00:00Z",
        title:
            "Mulheres no Poder: os desafios, as conquistas e a força do empreendedorismo feminino",
        slug: { current: "mulheres-no-poder-empreendedorismo-feminino" },
        excerpt:
            "Ainda dizem que a mulher pode estar em qualquer lugar. Mas a pergunta que precisa ser feita — e enfrentada — é outra: quem está abrindo esses lugares?",
        author: "Patrícia Ianda",
        publishedAt: "2026-04-22T10:00:00Z",
        category: "empreendedorismo-feminino" as BlogCategory,
        tags: ["empreendedorismo feminino", "liderança", "mulheres", "autonomia"],
        readTime: "8 min de leitura",
        body: [
            para(
                "Ainda dizem que a mulher pode estar em qualquer lugar. Mas a pergunta que precisa ser feita — e enfrentada — é outra:",
            ),
            quote("Quem está abrindo esses lugares?"),
            para(
                "Porque ocupar espaços nunca foi apenas uma questão de permissão. Sempre foi uma questão de acesso, de estrutura e, principalmente, de coragem coletiva.",
            ),
            para(
                "Durante décadas, mulheres foram incentivadas a acreditar que poderiam chegar onde quisessem. Mas, na prática, muitos desses caminhos já vinham desenhados — e quase sempre ocupados por homens. Isso é ainda mais evidente em áreas como tecnologia, gestão e inovação, onde a presença feminina ainda enfrenta barreiras silenciosas, porém profundas.",
            ),
            para(
                "E é nesse cenário que o empreendedorismo feminino deixa de ser uma alternativa e passa a ser uma resposta.",
            ),
            para(
                "Empreender, para muitas mulheres, não nasce apenas de uma oportunidade de mercado. Nasce da necessidade de existir em espaços onde não havia lugar. É sobre criar a própria mesa quando não há convite para sentar.",
            ),
            para("Mas o caminho não é simples."),
            para(
                "Um dos maiores desafios enfrentados pelas mulheres não está apenas no acesso a recursos ou conhecimento — está na ausência de redes de apoio estruturadas. Enquanto muitos homens crescem em ambientes que incentivam conexões, indicações e alianças estratégicas, muitas mulheres ainda caminham sozinhas, tentando equilibrar múltiplas jornadas: profissional, familiar e emocional.",
            ),
            para("E isso tem um custo."),
            para(
                "A falta de apoio impacta decisões, limita crescimento e, muitas vezes, faz com que projetos promissores não avancem. Não por falta de competência — mas por falta de suporte.",
            ),
            para(
                "Por isso, falar de empreendedorismo feminino também é falar de construção coletiva.",
            ),
            para(
                "Quando mulheres apoiam mulheres, algo poderoso acontece. Não é apenas sobre colaboração — é sobre reconstruir estruturas que historicamente foram excludentes. É sobre trocar experiências, abrir portas, compartilhar oportunidades e, principalmente, fortalecer umas às outras em um ambiente que ainda exige muito mais delas.",
            ),
            heading("h2", "Outro ponto central dessa discussão é a autonomia financeira"),
            para("Para muitas mulheres, ganhar dinheiro não é apenas independência — é proteção."),
            para(
                "É o que permite sair de relações abusivas, romper ciclos de violência, tomar decisões com liberdade e construir uma vida baseada em escolhas, não em dependência. A renda própria transforma não só a realidade individual, mas impacta famílias inteiras e, consequentemente, comunidades.",
            ),
            quote("Autonomia financeira é, também, uma ferramenta de transformação social."),
            para("E isso nos leva a algo ainda mais profundo: a quebra de ciclos."),
            para(
                "Cada mulher que empreende, cresce e se posiciona está, de alguma forma, reescrevendo uma história. Muitas vezes, carregando consigo trajetórias marcadas por limitações impostas por gerações anteriores — mães que não puderam estudar, avós que não tiveram escolha, histórias interrompidas antes mesmo de começarem.",
            ),
            para("Mas também carregando força."),
            para("Porque, ao ocupar um espaço, essa mulher não chega sozinha."),
            para(
                "Ela leva consigo tudo o que veio antes — e abre caminho para tudo o que vem depois.",
            ),
            para(
                "É impossível falar sobre isso sem reconhecer os exemplos que moldam essa jornada. Seja na figura de uma mãe que sustentou a casa com pouco, de uma avó que resistiu em silêncio ou de uma mulher que decidiu empreender mesmo sem garantias — são essas histórias que constroem a base de um movimento muito maior.",
            ),
            para("O empreendedorismo feminino não é apenas sobre negócios. É sobre reposicionamento."),
            para(
                "É sobre sair de um lugar de adaptação e assumir um lugar de protagonismo. É sobre entender que não basta participar — é preciso influenciar, decidir e liderar.",
            ),
            para(
                "E isso inclui, cada vez mais, ocupar áreas estratégicas como a tecnologia. Porque quem domina a tecnologia hoje, define o futuro amanhã. E um futuro mais justo depende, necessariamente, de diversidade na sua construção.",
            ),
            quote(
                "Mulheres não podem apenas usar tecnologia — precisam criar, liderar e transformar através dela.",
            ),
            para(
                "Esse movimento já está acontecendo. Cada vez mais mulheres estão abrindo empresas, liderando projetos, ocupando cargos de decisão e construindo soluções que impactam diretamente a sociedade.",
            ),
            para("Mas ainda há um longo caminho."),
            para(
                "E ele não será percorrido apenas com discursos inspiradores, mas com ações concretas: mais acesso, mais apoio, mais investimento e mais visibilidade.",
            ),
            para(
                "No fim, a reflexão é simples, mas poderosa: não se trata apenas de onde as mulheres podem estar. Se trata de quantas portas elas estão dispostas a abrir — mesmo quando ninguém entregou a chave.",
            ),
            para("Porque quando uma mulher ocupa um espaço, ela não chega sozinha."),
            quote("Ela abre caminho."),
        ],
    },
];

export const categoryLabels: Record<BlogCategory, string> = {
    "assistencia-social": "Assistência Social",
    "empreendedorismo-feminino": "Empreendedorismo Feminino",
    "violencia-contra-mulher": "Violência contra a Mulher",
    "gestao-publica": "Gestão Pública",
    "politica-sociedade": "Política e Sociedade",
};
