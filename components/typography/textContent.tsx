import React from "react";
import ReactMarkdown from 'react-markdown';
import classNames from "classnames";
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";


interface TextContentProps {
    /**
     * Text (Markdown)
     */
    children?: string,
    /**
     * Is the text used on project details
     */
    isProject?: boolean,
    /**
     * is article
     */
    isArticle?: boolean,
}

export const TextContent = ({
    children,
    isProject,
    isArticle
}:TextContentProps) => {
    return(
        <div className={classNames( isProject ? "markdown-project" : isArticle ? "markdown-article" : "markdown-text")}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{children}</ReactMarkdown>
        </div>        
    )
}