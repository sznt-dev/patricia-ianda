import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const components: PortableTextComponents = {
    block: {
        h2: ({ children }) => <h2>{children}</h2>,
        h3: ({ children }) => <h3>{children}</h3>,
        h4: ({ children }) => <h4>{children}</h4>,
        normal: ({ children }) => <p>{children}</p>,
        blockquote: ({ children }) => <blockquote>{children}</blockquote>,
    },
    marks: {
        link: ({ value, children }) => (
            <a href={value?.href} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
        strong: ({ children }) => <strong>{children}</strong>,
        em: ({ children }) => <em>{children}</em>,
    },
};

interface PostBodyProps {
    body: PortableTextBlock[];
}

const PostBody = ({ body }: PostBodyProps) => {
    return (
        <div className="pt-post-body__inner">
            <PortableText value={body} components={components} />
        </div>
    );
};

export default PostBody;
