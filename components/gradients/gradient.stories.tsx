import React from 'react';
import {Gradient} from './gradient';
import { GradientWrapper } from './gradientWrapper';

export default {
  title: 'Components/Gradient',
  component: Gradient,
};

export const GradientExamples = () => {
  return(
    <>
        <GradientWrapper>
          <Gradient fromColour={'darkGray'} toColour={'lightGray'} gradientDirection={'top-to-bottom'} />
          <h1>Lorem ipsum</h1>
        </GradientWrapper>
        <GradientWrapper>
          <Gradient fromColour={'brandBlue'} toColour={'brandGold'} gradientDirection={'left-to-right'} />
          <h1>Lorem ipsum</h1>
        </GradientWrapper>
     
    </>
  )
}