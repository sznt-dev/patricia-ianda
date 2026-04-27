import { groq } from "next-sanity";

export const BLOG_LIST_QUERY = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    category,
    publishedAt,
    author,
    authorImage,
    tags,
    readTime
  }
`;

export const BLOG_DETAIL_QUERY = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    body,
    author,
    authorImage,
    publishedAt,
    category,
    tags,
    featuredImage,
    readTime,
    seo
  }
`;

export const BLOG_SLUGS_QUERY = groq`
  *[_type == "blogPost" && defined(slug.current)] {
    "slug": slug.current
  }
`;
