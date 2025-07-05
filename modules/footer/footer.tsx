import React, {useContext} from "react";
import { TextContent } from "../../components/typography/textContent";
import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";



interface FooterProps {
    /**
     * Footer Text
     */
    footerText?: string,
}

export const Footer = ({
    footerText
}:FooterProps) => {

    const {darkThemeActive} = useContext(ThemeContext);

    return(
        <footer>
            <div className="wrapper max-w-[1200px] px-5 grid grid-cols-12 gap-4  py-[56px]">
                <div className="col-span-12 md:col-span-8">
                    {footerText &&
                    <div className="markdown-text footer-text">
                        <TextContent isProject={true}>{footerText}</TextContent>
                    </div>
                    }
                </div>
                <div className="col-span-12 md:col-span-4">
                    <WebsiteCarbonBadge dark={darkThemeActive} url="peteraiello.dev" co2="0.07" percentage="94" />
                </div>
            </div>
        </footer>
    )
}