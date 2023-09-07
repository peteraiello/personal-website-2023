import React from "react";

export interface TagProps {
    /**
     * Label
     */
    children?: string
}

export const Tag = ({
    children
}:TagProps) => {
    return(
        <div className="bg-transparent ring-1 ring-darkGray dark:ring-white rounded-[10px] py-2 px-6">
            {children &&
                <p className="text-sm md:text-body font-bold dark:text-white">{children}</p>
            }
        </div>
    )
}