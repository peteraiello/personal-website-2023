import React from "react";
import cx from "classnames";

interface headingProps {
    /**
     * The heading level 
     */
    hTag?: '1' | '2' | '3' | '4' | '5' | '6',
    /**
     * Font
     */
    fontStyle?: 'serif' | 'san-serif',
    /**
     * Font size
     */
    fontSize?: 'text-md' | 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl',
    /**
     * Classes (any additional classes you want to add)
     */
    classes?: string,
    /** 
     * The heading text
     */
    children?: string,
}

export const Heading = ({
    hTag, 
    fontStyle = "serif",
    fontSize,
    classes,
    children
}: headingProps) => {

    const getHeadingClass = ({hTag}) => {
        let headingClass;
        switch (hTag) {
            case '1': 
            headingClass = 'text-6xl';
            break;
            case '2': 
            headingClass = 'text-5xl';
            break;
            case '3':
            headingClass = 'text-4xl';
            break;
            case '4': 
            headingClass = 'text-3xl';
            break;
            case '5':
            headingClass = 'text-2xl';
            break;
            case '6': 
            headingClass = 'text-xl';
            break;
        }
        return headingClass;
    }
    
    const fontClass = (fontStyle == "serif" ? "font-noto lowercase tracking-wider" : "font-open");

    const htmlTag = React.createElement(`h${hTag}`, {
        dangerouslySetInnerHTML: { __html: children },
            className: cx(fontClass, classes, fontSize ? fontSize : getHeadingClass({hTag}))
    });

    return (
        htmlTag 
    )
}