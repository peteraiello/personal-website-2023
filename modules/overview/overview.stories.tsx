import React from 'react';
import { Overview } from './overview';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modules/Overview',
  component: Overview,
  parameters: {
    layout: 'full-screen',
  },
};


export const Example = () => {
    return (
        <Overview />
    )
}

export const ExampleDarkTheme = () => {
    return (
        <div className="dark">
            <Overview />
        </div>
    )
}