import React from 'react';
import { Experience } from './experience';
import { ExperienceData } from './experience-data';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modules/Experience',
  component: Experience,
  parameters: {
    layout: 'full-screen',
  },
};



export const Example = () => {
    return (
        <Experience 
            id='experience'
            title='Previous Experience'
            experiences={ExperienceData.experience}
        />
    )
}

export const ExampleDark = () => {
    return (
        <div className='dark'>
            <div className='dark:bg-darkGray'>
                <Experience 
                    id='experience'
                    title='Previous Experience'
                    experiences={ExperienceData.experience}
                />
            </div>
        </div>
    )
}