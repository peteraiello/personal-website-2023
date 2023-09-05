import React from 'react';
import { Overview } from './overview';
import {buttonIconType}  from '../../components/button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modules/Overview',
  component: Overview,
  parameters: {
    layout: 'full-screen',
  },
};

const exampleProfile = {
    name: 'Peter Aiello',
    jobTitle: 'Developer / Creative Coder / Writer / Designer',
    profileDesc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vestibulum at blandit felis, et lobortis nulla. 
        Proin eu dolor et nisl euismod. [Some link](https://google.com) pretium sit amet eget orci. 
        Cras ullamcorper turpis erat, ac vulputate justo bibendum iaculis. 
        Vivamus maximus semper sem, sed cursus lorem tempus tempor.
        Nunc lacinia rhoncus porta. Pellentesque pellentesque`,
    links: 
        [
            {preLabel: 'WWW', label: 'peteraiello.dev', customLink: {href: 'https://peteraiello.dev', target: "_blank"}},
            {preLabel: 'EM', label: 'hello@peteraiello.dev', customLink: {href: 'hello@peteraiello.dev', target: "_blank"}},
            {preLabel: 'GIT', label: 'github.com/peteraiello', customLink: {href: 'https://github.com/peteraiello', target: "_blank"}},
            {preLabel: 'IN', label: 'linkedin.com/in/peter-aiello', customLink: {href: 'https://linkedin.com/in/peter-aiello', target: "_blank"}}
        ],
    resumeLink: {
        label: 'Download Resume',
        downloadLink: '/#',
        icon: 'download'
    },
    cards: 
        [   
            {title: `Performance`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`},
            {title: `Performance`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`},
            {title: `Performance`, content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`}
        ]
}

export const Example = () => {
    return (
        <Overview
            name={exampleProfile.name}
            jobTitle={exampleProfile.jobTitle}
            profileDesc={exampleProfile.profileDesc}
            links={exampleProfile.links}
            resumeLink={
                {
                    label: exampleProfile.resumeLink.label,
                    downloadLink: exampleProfile.resumeLink.downloadLink,
                    icon: exampleProfile.resumeLink.icon as buttonIconType
                }
            }
            cards={exampleProfile.cards}
        />
    )
}

export const ExampleDarkTheme = () => {
    return (
        <div className="dark">
            <Overview
                name={exampleProfile.name}
                jobTitle={exampleProfile.jobTitle}
                profileDesc={exampleProfile.profileDesc}
                links={exampleProfile.links}
                resumeLink={
                    {
                        label: exampleProfile.resumeLink.label,
                        downloadLink: exampleProfile.resumeLink.downloadLink,
                        icon: exampleProfile.resumeLink.icon as buttonIconType
                    }
                }
                cards={exampleProfile.cards}
            />
        </div>
    )
}