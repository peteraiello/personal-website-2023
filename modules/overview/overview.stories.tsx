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


const markdownContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Vestibulum at blandit felis, et lobortis nulla. 
Proin eu dolor et nisl euismod. [Some link](https://google.com) pretium sit amet eget orci. 
Cras ullamcorper turpis erat, ac vulputate justo bibendum iaculis. 
Vivamus maximus semper sem, sed cursus lorem tempus tempor.
Nunc lacinia rhoncus porta. Pellentesque pellentesque interdum augue nec hendrerit. Maecenas posuere, erat varius imperdiet cursus, orci leo placerat libero, lacinia pharetra nulla arcu nec sem. In non augue cursus, placerat nisl nec, scelerisque sem. Ut aliquet mattis dui sed maximus. Quisque viverra quis felis sit amet interdum. Vivamus tortor nibh, fringilla vitae libero nec, auctor maximus diam. Duis congue neque ut turpis volutpat, id tempor odio rhoncus.`;

export const Example = () => {
    return (
        <Overview />
    )
}

export const ExampleDarkTheme = () => {
    return (
        <div className="dark">
            <Overview
                name={'Peter Aiello'}
                jobTitle={'Developer / Creative Coder / Writer / Designer'}
                profileDesc={markdownContent}
                // profileDesc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac dictum mauris, ac dictum massa. Nullam consequat mi sed ipsum consectetur luctus. In sollicitudin vulputate viverra. Praesent ac ultricies turpis. Maecenas vehicula vestibulum velit posuere aliquam. Fusce pretium mi faucibus ex eleifend pretium. Donec et massa nec lacus fermentum finibus. Pellentesque id ligula feugiat diam pellentesque accumsan interdum non risus. Praesent varius magna purus. Nulla mollis purus ac nisl imperdiet porta. Duis vehicula consequat elit vitae hendrerit. Nunc in elit in lorem.'}
                links={
                    [
                        {preLabel: 'WWW', label: 'peteraiello.dev', customLink: {href: 'https://peteraiello.dev', target: '_blank'}},
                        {preLabel: 'EM', label: 'hello@peteraiello.dev', customLink: {href: 'hello@peteraiello.dev', target: '_blank'}},
                        {preLabel: 'GIT', label: 'github.com/peteraiello', customLink: {href: 'https://github.com/peteraiello', target: '_blank'}},
                        {preLabel: 'IN', label: 'linkedin.com/in/peter-aiello', customLink: {href: 'https://linkedin.com/in/peter-aiello', target: '_blank'}}
                    ]
            }
            />
        </div>
    )
}