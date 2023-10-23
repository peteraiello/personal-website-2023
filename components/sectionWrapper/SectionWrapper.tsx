import React from "react";
import { useRef } from "react";
import {useInView} from 'framer-motion';


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

function Section({ id, children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });  
    return (
      <section ref={ref} id={id !== null ? id : undefined}  className={`text-darkGray dark:text-white transition-all ease-in-out duration-500  ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10 opacity-0'}`}>
        {children}
      </section>
    );
}

export const SectionWrapper = ({
    id,
    children
}: SectionWrapperProps
    ) => {
    return(
        <Section 
            id={id}
        >
            <div className="wrapper max-w-[1200px] px-5">
                {children}
            </div>
        </Section>
    )
}