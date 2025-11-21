import React from "react";
import { AnimatedElement } from "../AnimatedElement/animated-element";

export interface TagProps {
    /**
     * Label
     */
    children?: string,
    index?: number,
}

export const Tag = ({
    children,
    index
}:TagProps) => {
    return(
        <AnimatedElement index={index} speed={'fast'}>
            <div className="tag bg-transparent ring-1 ring-darkGray dark:ring-white rounded-[10px] py-2 px-6">
                {children &&
                    <p className="text-sm tracking-wide dark:text-white">{children}</p>
                }
            </div>
        </AnimatedElement>
    )
}