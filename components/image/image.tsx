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
    rounded?: 'full' | 'md',
    /**
     * border
     */
    border?: boolean,
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
    size,
    border
}:customImageProps) => {

    const getBaseClass = `drop-shadow-lg relative`;

    const getBorder = (border) => {
        let customClass;
        if(border === true) {
            customClass = 'border-[1px] dark:border-brandGold border-brandBlue'
        } else {
            customClass = 'border-0';
        }
        return customClass;
    }

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
        if(rounded === 'full') {
            customClass = 'rounded-full overflow-hidden';
        } else if(rounded === 'md') {
            customClass = 'rounded-lg overflow-hidden';
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
                getBorder(border),
                getIsRounded(rounded),
                getAspectRatio(size),
                getBaseClass
            )        
        }>
            <Image 
                src={src}
                alt={alt}
                fill
                className={
                    // 'border border-brandGold'

                   getObjectFit(fit)
                }
                sizes={getImageSize(size)}
            />
        </div>
    )
}