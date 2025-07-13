import React from "react";
import ReactMarkdown from 'react-markdown';
import classNames from "classnames";

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
            <ReactMarkdown>{children}</ReactMarkdown>
        </div>        
    )
}