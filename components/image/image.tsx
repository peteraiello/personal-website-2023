import React from "react";
import Image from "next/image";
import cx from 'classnames';

export interface customImageProps {
    /**
     * Alt Text
     */
    alt?: string,
    /**
     * Source Url
     */
    src?: string,
    /**
     * Size
     */
    size?: 'project' | 'square',
    /**
     * Object fit
     */
    fit?: 'cover' | 'contain'
}

export const CustomImage = ({
    alt,
    src,
    fit,
    size
}:customImageProps) => {

    const getBaseClass = `relative`;

    const getAspectRatio = (size) => {
        let customClass;
        if(size === 'project') {
            customClass = 'aspect-[460/247]';
        } else if(size === 'square') {
            customClass = 'aspect-square';
        } else {
            customClass = 'w-full h-full';
        }
        return customClass;
    }

    return(
        <div className={
            cx(
                getAspectRatio(size),
                getBaseClass
            )
        }>
            <Image 
                src={src}
                alt={alt}
                fill
                objectFit={fit}
            />
        </div>
    )
}