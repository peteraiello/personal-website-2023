import React from "react";
import { TextContent } from "../../components/typography/textContent";


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
            <div className="wrapper grid grid-cols-12">
                <div className="py-md lg:py-[56px] col-span-12 lg:col-start-4 lg:col-span-8">
                    {footerText &&
                        <TextContent>
                            {footerText}        
                        </TextContent>
                    }
                </div>
            </div>
        </footer>
    )
}