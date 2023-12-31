import React from "react";
import { TextContent } from "../../components/typography/textContent";
import ReactMarkdown from "react-markdown";


interface FooterProps {
    /**
     * Footer Text
     */
    footerText?: string,
}

export const Footer = ({
    footerText
}:FooterProps) => {
    return(
        <footer>
            <div className="wrapper max-w-[1200px] px-5 grid grid-cols-12">
                <div className="py-md lg:py-[56px] col-span-12 lg:col-start-4 lg:col-span-8">
                    {footerText &&
                    <div className="markdown-text footer-text">
                        <ReactMarkdown>{footerText}</ReactMarkdown>
                    </div>
                    }
                </div>
            </div>
        </footer>
    )
}