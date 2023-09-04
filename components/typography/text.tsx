import React from "react";

interface TextProps {
    /**
     * font size
     */
    size?: 'lead' | 'strapline' | 'body',
    /**
     * 
     */
    weight?: 'bold' | 'medium' | 'normal',
    /**
     * The text
     */
    children?: any,
}

export const getTextClass = ({size}) => {
    let textClass;
    switch (size) {
        case 'body': 
            textClass = 'text-large leading-8';
        break;
        case 'lead': 
            textClass = 'text-[20px] leading-[35px]';
        break;
        case 'strapline':
            textClass = 'text-[21px] leading-[30px]';
        break;
        default:
            textClass = 'text-large leading-8';
    }
    return textClass;
}


export const getFontWeight = ({weight}) => {
    let textClass;
    switch (weight) {
        case 'bold': 
            textClass = 'font-bold';
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


export const Text = ({
    size,
    weight,
    children
}: TextProps) => {

    const baseClass = 'font-open text-darkGray dark:text-white tracking-wider';

    const para = React.createElement(`p`, {
        dangerouslySetInnerHTML: { __html: children },
            className: baseClass + " " + getTextClass({size}) + " " + getFontWeight({weight})
    });

    return (
        para 
    )
}