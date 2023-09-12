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
            className="bg-white dark:bg-darkGray text-darkGray dark:text-white py-md md:py-lg lg:py-xl" 
            id={id !== null ? id : undefined} 
        >
            <div className="wrapper">
                {children}
            </div>
        </section>
    )
}