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
}

export const TextContent = ({
    children,
    isProject
}:TextContentProps) => {
    return(
        <div className={classNames("markdown-text", isProject && "markdown-project")}>
            <ReactMarkdown>{children}</ReactMarkdown>
        </div>        
    )
}