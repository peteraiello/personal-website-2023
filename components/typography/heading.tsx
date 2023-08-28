import React from "react";

interface headingProps {
    /**
     * The heading level 
     */
    hTag?: '1' | '2' | '3' | '4' | '5' | '6',
    /** 
     * The heading text
     */
    children?: string,
}

export const Heading = ({
    hTag, 
    children
}: headingProps) => {

    const test = () => {
        return 'text-3xl'
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
    
    const baseClass = 'font-noto lowercase text-darkGray dark:text-white';

    const htmlTag = React.createElement(`h${hTag}`, {
        dangerouslySetInnerHTML: { __html: children },
            className: baseClass + " " + getHeadingClass({hTag})
    });

    return (
        htmlTag 
    )
}