import React from 'react';
import { ImageText } from './image-text';
// import 'tailwindcss/tailwind.css' // Import Tailwind Classes

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modules/ImageText',
  component: ImageText,
  parameters: {
    layout: 'full-screen',
  },
 
};

export const Example = () => {
    return (
        <ImageText />
    )
}