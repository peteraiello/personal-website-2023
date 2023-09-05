import React from 'react';
import { Experience } from './experience';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modules/Experience',
  component: Experience,
  parameters: {
    layout: 'full-screen',
  },
};

const ExperienceData = [
    {
        title: 'Spotify',
        position: 'Dusted | Frontend Developer',
        date: 'Feb 2018 - Jul 2020',
        description: 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. 
Nullam vel nisl a justo [aliquet laoreet eu ac enim](www.google.com). In sagittis erat quis eleifend efficitur. Phasellus pulvinar cursus odio non ultricies. Fusce ultrices blandit neque, quis dignissim magna malesuada at. Donec lobortis libero nec justo posuere condimentum. Integer consequat, felis a iaculis vestibulum, lectus ante tempus ex, quis vulputate odio leo non dui. Fusce mauris eros, finibus ut purus et.
`,
    },
    {
        title: 'Google',
        position: 'Dusted | Frontend Developer',
        date: 'Feb 2018 - Jul 2020',
        description: 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. 
Nullam vel nisl a justo [aliquet laoreet eu ac enim](www.google.com). In sagittis erat quis eleifend efficitur. Phasellus pulvinar cursus odio non ultricies. Fusce ultrices blandit neque, quis dignissim magna malesuada at. Donec lobortis libero nec justo posuere condimentum. Integer consequat, felis a iaculis vestibulum, lectus ante tempus ex, quis vulputate odio leo non dui. Fusce mauris eros, finibus ut purus et.
`,
    },
    {
        title: 'Amazon',
        position: 'Dusted | Frontend Developer',
        date: 'Feb 2018 - Jul 2020',
        description: 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. 
Nullam vel nisl a justo [aliquet laoreet eu ac enim](www.google.com). In sagittis erat quis eleifend efficitur. Phasellus pulvinar cursus odio non ultricies. Fusce ultrices blandit neque, quis dignissim magna malesuada at. Donec lobortis libero nec justo posuere condimentum. Integer consequat, felis a iaculis vestibulum, lectus ante tempus ex, quis vulputate odio leo non dui. Fusce mauris eros, finibus ut purus et.
`,
    },
    

]


export const Example = () => {
    return (
        <Experience 
            title='Previous Experience'
            experiences={ExperienceData}
        />
    )
}

export const ExampleDark = () => {
    return (
        <div className='dark'>
            <Experience 
                title='Previous Experience'
                experiences={ExperienceData}
            />
        </div>
    )
}