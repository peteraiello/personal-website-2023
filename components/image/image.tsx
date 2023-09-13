import React from "react";
import Image from "next/image";
import cx from 'classnames';

export type imageSize = 'project' | 'square' | 'profile';

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
     * Rounded
     */
    rounded?: boolean,
    /**
     * Size
     */
    size?: 'project' | 'square' | 'profile',
    /**
     * Object fit
     */
    fit?: 'cover' | 'contain'
}

export const CustomImage = ({
    alt,
    src,
    rounded,
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
        } else if(size === 'profile') {
            customClass = 'aspect-square';
        } else {
            customClass = 'w-full h-full';
        }
        return customClass;
    }

    const getObjectFit = (fit) => {
        let customClass; 
        if(fit === 'cover') {
            customClass = 'object-cover';
        } else if (fit === 'contain') {
            customClass = 'object-contain';
        } else {
            customClass = 'object-cover';
        }
        return customClass;
    }

    const getIsRounded = (rounded) => {
        let customClass;
        if(rounded === true) {
            customClass = 'rounded-full overflow-hidden';
        }
        return customClass;
    }

    const getImageSize = (size) => {
        let customSize; 
        if(size === 'project') {
            customSize = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw';
        } else if(size === 'profile') {
            customSize = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw';
        } else if (size === 'square') {
            customSize = '100vw';
        } else {
            customSize = '100vw';
        }
        return customSize;
    }

    return(
        <div className={
            cx(
                getIsRounded(rounded),
                getAspectRatio(size),
                getBaseClass
            )
        }>
            <Image 
                src={src}
                alt={alt}
                fill
                className={getObjectFit(fit)}
                sizes={getImageSize(size)}
            />
        </div>
    )
}