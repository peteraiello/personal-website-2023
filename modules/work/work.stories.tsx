import React from 'react';
import { Work } from './work';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modules/Work',
  component: Work,
  parameters: {
    layout: 'full-screen',
  },
};

const workData = {
    title: 'Work',
    subtitle: 'Dusted | Frontend Developer',
    content: 
`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. 
Nullam vel nisl a justo [aliquet laoreet eu ac enim](www.google.com). In sagittis erat quis eleifend efficitur. Phasellus pulvinar cursus odio non ultricies. Fusce ultrices blandit neque, quis dignissim magna malesuada at. Donec lobortis libero nec justo posuere condimentum. Integer consequat, felis a iaculis vestibulum, lectus ante tempus ex, quis vulputate odio leo non dui. Fusce mauris eros, finibus ut purus et.

In sollicitudin sollicitudin augue, [nec aliquam ante interdum ac](www.google.com). Praesent at consequat nisi. 
Suspendisse facilisis faucibus scelerisque. Sed eget volutpat quam, quis.
`,
    clients: 'Ukas, Mahindra, HTB Bank',
    awards: {
        title: 'Awards & Recognition',
        // subtitle: "We have been recognised for the following...",
        awards: ['2023 Transform Awards', '2022 Transform Awards', '2021 Transform awards']
    }
}

export const Example = () => {
    return (
        <Work
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
            <Work
                title={workData.title}
                subtitle={workData.subtitle}
                content={workData.content}
                clients={workData.clients}
                awards={workData.awards}
            />
        </div>
    )
}