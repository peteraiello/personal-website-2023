import React from 'react';
import { AnimatedElement } from './animated-element';

export default {
  title: 'Components/Animations',
  component: AnimatedElement,
};

export const UnorderedList = () => {
  return(
    <>
        <div>
            <AnimatedElement index={1}>
                <div>Test</div>
            </AnimatedElement>
            <AnimatedElement index={2}>
                <div>Test</div>
            </AnimatedElement>    
            <AnimatedElement index={3}>
                <div>Test</div>
            </AnimatedElement>    
            <AnimatedElement index={4}>
                <div>Test</div>
            </AnimatedElement>
        </div>
    </>
  )
}

