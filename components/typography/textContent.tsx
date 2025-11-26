import React, {useRef} from "react";
import ReactMarkdown from 'react-markdown';
import classNames from "classnames";
import rehypeRaw from "rehype-raw";

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
    /**
     * React Markdown links not opening in new tab
     * Url: https://github.com/remarkjs/react-markdown/issues/12
     */
    return(
        <div className={classNames( isProject ? "markdown-project" : isArticle ? "markdown-article" : "markdown-text")}>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                components={{
                    a: ({ node, children, ...props}) => {
                        if(props?.href?.includes("https")) {
                            props.target = "_blank"
                            props.rel = "noopener noreferrer"
                        }
                        return <a {...props}>{children}</a>
                    }
                }}                
            >{children}</ReactMarkdown>
        </div>        
    )
}