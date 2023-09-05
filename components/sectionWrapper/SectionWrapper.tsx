import React from "react";

interface SectionWrapperProps {
    children?: any,
}

export const SectionWrapper = ({
    children
}: SectionWrapperProps
    ) => {
    return(
        <div className="bg-white dark:bg-darkGray text-darkGray dark:text-white py-md md:py-lg lg:py-xl">
            <div className="wrapper">
                {children}
            </div>
        </div>
    )
}