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
        <div className="prose max-w-full prose-p:text-body prose-p:leading-[32px] prose-ul:text-body prose-ul:leading-[32px] dark:text-white prose-a:text-brandBlue dark:prose-a:text-brandGold prose-a:font-normal">
            <ReactMarkdown>{children}</ReactMarkdown>
        </div>
    )
}