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
    fontSize?: 'text-sm' | 'text-md' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl' | 'text-5xl' | 'text-6xl',
    /**
     * Weight
     */
    weight?: 'bold' | 'medium' | 'normal' | 'semibold',
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
    weight,
    classes,
    children
}: headingProps) => {

     const getFontWeight = ({weight}) => {
        let textClass;
        switch (weight) {
            case 'bold': 
                textClass = 'font-bold';
            break;
            case 'semibold': 
                textClass = 'font-semibold';
            break;
            case 'medium': 
                textClass = 'font-medium';
            break;
            case 'normal':
                textClass = 'font-normal';
            break;
            default:
                textClass = 'font-normal';
        }
        return textClass;
    }
    
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
            className: cx("text-darkGray dark:text-white", fontClass, classes, fontSize ? fontSize : getHeadingClass({hTag}), weight && getFontWeight({weight}))
    });

    return (
        htmlTag 
    )
}