import React from 'react';
import { Overview } from './overview';
import {buttonIconType}  from '../../components/button';
import ProfileImg from '../../public/images/overview/profile.png';
import { imageSize } from '../../components/image/image';
import {exampleProfile} from './overview-data';

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
        <Overview
            id={exampleProfile.sectionId}
            name={exampleProfile.name}
            jobTitle={exampleProfile.jobTitle}
            profileDesc={exampleProfile.profileDesc}
            links={exampleProfile.links}
            profileImage={exampleProfile.profileImg}
            resumeLink={
                {
                    label: exampleProfile.resumeLink.label,
                    href: exampleProfile.resumeLink.href,
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
                id={exampleProfile.sectionId}
                name={exampleProfile.name}
                jobTitle={exampleProfile.jobTitle}
                profileDesc={exampleProfile.profileDesc}
                links={exampleProfile.links}
                profileImage={exampleProfile.profileImg}
                resumeLink={
                    {
                        label: exampleProfile.resumeLink.label,
                        href: exampleProfile.resumeLink.href,
                        icon: exampleProfile.resumeLink.icon as buttonIconType
                    }
                }
                cards={exampleProfile.cards}
            />
        </div>
    )
}