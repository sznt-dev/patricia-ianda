import { defineField, defineType } from "sanity";

export default defineType({
    name: "blogPost",
    title: "Artigo do Blog",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Título",
            type: "string",
            validation: (Rule) => Rule.required().max(140),
        }),
        defineField({
            name: "slug",
            title: "Slug (URL)",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "excerpt",
            title: "Resumo",
            type: "text",
            rows: 3,
            description:
                "Aparece na listagem e nos cards de preview. Máx. 320 caracteres.",
            validation: (Rule) => Rule.max(320),
        }),
        defineField({
            name: "body",
            title: "Conteúdo",
            type: "array",
            of: [
                {
                    type: "block",
                    styles: [
                        { title: "Normal", value: "normal" },
                        { title: "H2", value: "h2" },
                        { title: "H3", value: "h3" },
                        { title: "H4", value: "h4" },
                        { title: "Citação", value: "blockquote" },
                    ],
                    marks: {
                        decorators: [
                            { title: "Negrito", value: "strong" },
                            { title: "Itálico", value: "em" },
                            { title: "Sublinhado", value: "underline" },
                        ],
                        annotations: [
                            {
                                name: "link",
                                type: "object",
                                title: "Link",
                                fields: [{ name: "href", type: "url", title: "URL" }],
                            },
                        ],
                    },
                },
                {
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                        { name: "alt", type: "string", title: "Texto alternativo" },
                        { name: "caption", type: "string", title: "Legenda" },
                    ],
                },
            ],
        }),
        defineField({
            name: "author",
            title: "Autor",
            type: "string",
            initialValue: "Patrícia Ianda",
        }),
        defineField({
            name: "publishedAt",
            title: "Data de Publicação",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "category",
            title: "Categoria",
            type: "string",
            options: {
                list: [
                    { title: "Assistência Social", value: "assistencia-social" },
                    { title: "Empreendedorismo Feminino", value: "empreendedorismo-feminino" },
                    { title: "Violência contra a Mulher", value: "violencia-contra-mulher" },
                    { title: "Gestão Pública", value: "gestao-publica" },
                    { title: "Política e Sociedade", value: "politica-sociedade" },
                ],
            },
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            options: { layout: "tags" },
        }),
        defineField({
            name: "featuredImage",
            title: "Imagem de Capa",
            type: "image",
            options: { hotspot: true },
        }),
        defineField({
            name: "readTime",
            title: "Tempo de leitura",
            type: "string",
            description: "Ex: 6 min de leitura",
        }),
        defineField({
            name: "seo",
            title: "SEO",
            type: "object",
            fields: [
                { name: "metaTitle", type: "string", title: "Meta Title" },
                {
                    name: "metaDescription",
                    type: "text",
                    rows: 2,
                    title: "Meta Description",
                },
                { name: "ogImage", type: "image", title: "Open Graph Image" },
            ],
        }),
    ],
    preview: {
        select: { title: "title", subtitle: "category", media: "featuredImage" },
    },
    orderings: [
        {
            title: "Data de Publicação",
            name: "publishedAtDesc",
            by: [{ field: "publishedAt", direction: "desc" }],
        },
    ],
});
