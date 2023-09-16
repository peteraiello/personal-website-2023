import React from "react";

interface SectionWrapperProps {
    /**
     * Children of the react element
     */
    children?: any,
    /**
     * Sectiion ID
     */
    id?: string,
}

export const SectionWrapper = ({
    id,
    children
}: SectionWrapperProps
    ) => {
    return(
        <section 
            className="text-darkGray dark:text-white" 
            id={id !== null ? id : undefined} 
        >
            <div className="wrapper max-w-[1200px] px-5">
                {children}
            </div>
        </section>
    )
}