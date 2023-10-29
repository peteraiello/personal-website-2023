import React from "react";
import { useRef } from "react";
import {useInView} from 'framer-motion';

export const AnimatedElement = ({
    children,
    index
}) => {

    const ref = useRef(null);

    const isInView = useInView(ref, {
        margin: "0px 0px -10% 0px",
        once: true 
    });  

    function getTheDelay(index){
        switch(index) {
            case(0):
                return 'delay-0';
            case(1): 
                return 'delay-[200ms]'
            case(2):
                return 'delay-[400ms]'
            case(3): 
                return 'delay-[600ms]'
            case(4): 
                return 'delay-[800ms]'
            case(5): 
                return 'delay-[1000ms]'
            case(6): 
                return 'delay-[1200ms]'
            case(7): 
                return 'delay-[1400ms]'
            case(8): 
                return 'delay-[1400ms]'
            case(9): 
                return 'delay-[1600ms]'
            case(10): 
                return 'delay-[1800ms]'
            default:
                return 'delay-100'
        }
    }

    return (
        <div ref={ref} className={
                `transition-opacity ease-in-out duration-500 
                ${getTheDelay(index)} ${isInView ? 'opacity-100 translate-y-0' : 'translate-y-10 opacity-0'}`}
            >
            {children}
        </div>
    )
}