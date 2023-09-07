import React from "react";

interface TextProps {
    /**
     * font size
     */
    size?: 'lead' | 'strapline' | 'body' | 'award' | 'subtitle',
    /**
     * 
     */
    weight?: 'bold' | 'medium' | 'normal' | 'semibold',
    /**
     * The text
     */
    children?: any,
}

export const getTextClass = ({size}) => {
    let textClass;
    switch (size) {
        case 'award': 
        textClass = 'text-award leading-body';
        break;
        case 'body': 
        textClass = 'text-large leading-body';
        break;
        case 'lead': 
        textClass = 'text-lead leading-body';
        break;
        case 'strapline':
        textClass = 'text-strapline leading-body';
        break;
        case 'subtitle': 
        textClass = 'text-subtitle leading-subtitle';
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