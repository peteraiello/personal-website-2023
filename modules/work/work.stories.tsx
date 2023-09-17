import React from 'react';
import { Work } from './work';
import { workData } from './work-data';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modules/Work',
  component: Work,
  parameters: {
    layout: 'full-screen',
  },
};


export const Example = () => {
    return (
        <Work
            id={workData.sectionId}
            title={workData.title}
            subtitle={workData.subtitle}
            content={workData.content}
            clients={workData.clients}
            awards={workData.awards}
        />
    )
}

export const ExampleDark = () => {
    return (
        <div className='dark'>
            <div className='dark:bg-darkGray'>
                <Work
                    id={workData.sectionId}
                    title={workData.title}
                    subtitle={workData.subtitle}
                    content={workData.content}
                    clients={workData.clients}
                    awards={workData.awards}
                />
            </div>
        </div>
    )
}