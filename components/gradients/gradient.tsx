import React from "react";
import { colours } from "../../global-types";
import cx from "classnames";

interface GradientProps {
    /**
     * From colour
     */
    fromColour?: colours;
    /**
     * To colour 
     */
    toColour?: colours;
    /**
     * Gradient direction
     */
    gradientDirection?: 'top-to-bottom' | 'left-to-right';
    /**
     * Opacity
     */
    opacity?: '1/4' | '1/2' | '3/4' | 'full';
    /**
     * Z-index
     */
    zIndex?: '-z-[1]' | 'z-[1]';
}

export const Gradient = ({
    fromColour,
    toColour,
    gradientDirection,
    opacity,
    zIndex
}:GradientProps) => {

    const base = `h-full w-full absolute ${zIndex}`;

    const getDirection = (gradientDirection) => {
        let customClass; 
        if(gradientDirection === 'top-to-bottom') {
            customClass = 'bg-gradient-to-b';
        } else if (gradientDirection === 'left-to-right') {
            customClass = 'bg-gradient-to-r';
        }
        return customClass;
    }

    const getFromColour = (fromColour) => {
        let customClass; 
        if(fromColour === 'darkGray') {
            customClass = 'from-darkGray';
        } else if(fromColour === 'lightGray') {
            customClass = 'from-lightGray';
        } else if(fromColour === 'brandBlue') {
            customClass = 'from-brandBlue';
        } else if(fromColour === 'brandGold') {
            customClass = 'from-brandGold';
        } else if(fromColour === 'black') {
            customClass = 'from-black';
        } else if(fromColour === 'white') {
            customClass = 'from-white';
        } else if (fromColour === 'transparent') {
            customClass = 'from-transparent';
        }
        return customClass;
    }

    const getToColour = (toColour) => {
        let customClass; 
        if(toColour === 'darkGray') {
            customClass = 'to-darkGray';
        } else if(toColour === 'lightGray') {
            customClass = 'to-lightGray';
        } else if(toColour === 'black') {
            customClass = 'to-black';
        } else if(toColour === 'brandBlue') {
            customClass = 'to-brandBlue';
        } else if(toColour === 'brandGold') {
            customClass = 'to-brandGold';
        } else if(toColour === 'white') {
            customClass = 'to-white';
        } else if (toColour === 'transparent') {
            customClass = 'to-transparent';
        }
        return customClass;
    }

    const getOpacity = (opacity) => {
        let customClass; 
        if(opacity === '1/4') {
            customClass = 'opacity-25';
        } else if(opacity === '1/2') {
            customClass = 'opacity-50';
        } else if(opacity === '3/4') {
            customClass = 'opacity-75';
        } else if(opacity === 'full') {
            customClass = 'opacity-100';
        } else {
            customClass = 'opacity-100';
        }
        return customClass;
    }
    

    return(
        <span className={ 
            cx(
                base,
                getDirection(gradientDirection),
                getFromColour(fromColour),
                getToColour(toColour),
                getOpacity(opacity),
            )
            }></span>
    )
}