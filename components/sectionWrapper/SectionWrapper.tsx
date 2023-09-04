import React from "react";

interface SectionWrapperProps {
    children?: any,
}

export const SectionWrapper = ({
    children
}: SectionWrapperProps
    ) => {
    return(
        <div className="bg-white dark:bg-darkGray text-darkGray dark:text-white py-[40px] md:py-[80px] lg:py-[120px]">
            <div className="wrapper">
                {children}
            </div>
        </div>
    )
}