import React from "react";
import ReactMarkdown from 'react-markdown';
import classNames from "classnames";

interface TextContentProps {
    /**
     * Text (Markdown)
     */
    children?: string,
}

export const TextContent = ({
    children
}:TextContentProps) => {
    return(
        <div className="markdown-text">
            <ReactMarkdown>{children}</ReactMarkdown>
        </div>
    )
}