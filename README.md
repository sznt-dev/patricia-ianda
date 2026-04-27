# Patrícia Ianda — site oficial

Site de posicionamento político-pessoal de **Patrícia Ianda** (psicóloga, gestora pública, CEO da SUAS Fácil), produzido pela **Venera Digital**.

Domínio previsto: [patriciaianda.com.br](https://patriciaianda.com.br)

---

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript**
- **Sass** + **Bootstrap 5** (grid e utilitários)
- **GSAP** (animações de scroll, char reveal, fade)
- **Framer Motion**, **Swiper**
- **Sanity** (CMS do blog, com fallback local)
- **next/font** (Playfair Display + Onest + Space Grotesk)

A base do projeto foi adaptada do template **agntix** (em `../agntix-nextjs/`). Os componentes do agntix servem como biblioteca de referência — copiamos só o que faz sentido pro site da Patrícia.

---

## Como rodar

```bash
# Primeira vez
npm install

# Dev
npm run dev          # http://localhost:3000

# Build de produção
npm run build && npm start

# Lint
npm run lint
```

---

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e preencha:

```bash
cp .env.example .env.local
```

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=     # Project ID do Sanity (vazio = usa fallback local)
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Sem Sanity configurado**, o blog funciona com 5 posts seed em `src/sanity/seed.ts` (adaptados dos artigos do LinkedIn). Quando o cliente conectar o Sanity, basta preencher o `NEXT_PUBLIC_SANITY_PROJECT_ID` e os posts criados via studio passam a aparecer automaticamente. Se a query do Sanity vier vazia, o fallback local segue ativo — sem 404.

---

## Estrutura

```
src/
├── app/                    rotas Next App Router
│   ├── layout.tsx          fontes, metadata raiz, SiteShell
│   ├── SiteShell.tsx       envolve providers + header + footer (client)
│   ├── globals.scss        entrypoint Sass — importa todos os módulos
│   ├── page.tsx            home (10 seções)
│   ├── minha-historia/
│   ├── meu-trabalho/
│   ├── patricia-na-midia/
│   ├── fale-comigo/
│   ├── blog/
│   │   ├── page.tsx        lista com filtro por categoria
│   │   └── [slug]/         post individual (SSG)
│   ├── studio/[[...tool]]  Sanity Studio
│   ├── sitemap.ts          sitemap.xml dinâmico
│   └── robots.ts           robots.txt
├── components/
│   ├── home/               10 seções da home
│   ├── history/            5 seções de Minha História
│   ├── work/               5 seções de Meu Trabalho
│   ├── midia/              4 seções de Patrícia na Mídia
│   ├── contato/            3 blocos de Fale Comigo
│   ├── blog/               BlogList + PostBody
│   ├── seo/                JSON-LD Person + Article
│   ├── shared/             Preloader, AnimationWrapper
│   └── counter/            AnimatedCounterTwo
├── data/                   timeline, palestras, mídia, samples do blog
├── hooks/                  useGsapAnimation, useScrollSmooth, useStickyHeader
├── layouts/
│   ├── headers/PatriciaHeader.tsx
│   ├── footers/PatriciaFooter.tsx
│   └── MobileMenu.tsx
├── provider/               AppProvider, VideoProvider
├── sanity/                 client, schemas, queries, fetch + fallback (seed)
├── styles/                 SCSS modular
│   ├── _patricia.scss      tokens da paleta + helpers
│   ├── _layout.scss        header, drawer mobile, footer
│   ├── _home.scss          hero + impact stats
│   ├── _pautas.scss        pautas + manifesto + preview história
│   ├── _media-blocks.scss  media + press + insta + blog preview
│   ├── _newsletter.scss    bloco de captação
│   ├── _minha-historia.scss linha do tempo + valores
│   ├── _meu-trabalho.scss  projetos + palestras + galeria
│   ├── _midia.scss         player + reportagens + eventos
│   ├── _contato.scss       form + atalhos + imprensa
│   └── _blog.scss          lista + post
├── svg/                    biblioteca de ícones (do agntix)
├── types/                  tipos compartilhados
└── utils/                  utilities (titleAnimation, scrollToSection, etc)
```

---

## Princípios de design

- **Light mode obrigatório** — sem dark mode em hipótese alguma (decisão do cliente).
- **Paleta laranja + azul** sobre cream/off-white. Tokens em `_patricia.scss`.
- **Tipografia editorial mas contida** — headlines no máximo ~64px (nunca os 100–120 do agntix).
- **Animações servem ao conteúdo** — fade, char reveal, parallax sutil, marquee.
- **Acessibilidade**: skip link, foco visível, `prefers-reduced-motion` respeitado, semântica completa, aria-labels nos botões interativos.

---

## Conteúdo pendente (placeholder até cliente entregar)

- Foto profissional principal e foto editorial do hero
- Banco de fotos (≥30 imagens) para a galeria
- Lista real de palestras dos últimos meses
- Logos da imprensa em SVG monocromático
- Links reais de vídeos de YouTube
- E-mail/telefone da assessoria
- Project ID Sanity
- Domínio confirmado e DNS apontado

Todos os pontos com `[AGUARDANDO CLIENTE]` ou `#` em href são placeholders explícitos.

---

## Deploy

### Vercel (recomendado)

1. Push do repositório para GitHub (ou GitLab/Bitbucket)
2. New Project no Vercel apontando para o repo
3. Em **Environment Variables**, configurar `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `NEXT_PUBLIC_SANITY_API_VERSION`
4. Deploy → Vercel detecta Next.js automaticamente
5. Configurar domínio `patriciaianda.com.br` em **Settings → Domains**

### Build local (Docker)

```bash
docker build -t patricia-ianda .
docker run -p 3000:3000 patricia-ianda
```

`output: "standalone"` está habilitado em `next.config.ts` — o build gera um servidor Node mínimo.

---

## Sanity Studio

Acesso: `http://localhost:3000/studio` em dev, `https://patriciaianda.com.br/studio` em produção.

Para inicializar o projeto Sanity (uma vez):

```bash
npx sanity@latest init --env  # cria o projeto e popula .env.local
```

Depois disso o studio fica acessível com login Sanity.

---

## Notas de manutenção

- O `agntix-nextjs/` na pasta irmã é a fonte de componentes. Quando precisar de uma peça nova, abra lá primeiro pra ver se já existe — copiar é mais barato que reescrever.
- A configuração de animações por rota está em `src/config/animationConfig.ts`. Pra adicionar uma animação custom em uma página, exporte uma função em `useGsapAnimation` e referencie ali.
- Cada SCSS de seção tem responsabilidade única e pode ser editado sem efeito colateral nos outros.

---

## Créditos

Site produzido por **[Venera Digital](https://venera.digital)** para Patrícia Ianda.
