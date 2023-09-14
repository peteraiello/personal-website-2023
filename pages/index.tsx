import {Header} from '../modules/header';
import React from "react";
import {Articles} from '../modules/writing/articles';
import navItems from '../data/navItems.json';
import { Overview } from '../modules/overview/overview';
import { buttonIconType } from '../components/button';
import {exampleProfile} from '../modules/overview/overview-data';
import { Work } from '../modules/work/work';
import { workData } from '../modules/work/work-data';
import { Projects } from '../modules/projects/projects';
import { exampleProjectData } from '../modules/projects/project-data';

export default function Home() {

  return (
    <>
      <Header items={navItems?.items} />

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

      <Work
          id={workData.sectionId}
          title={workData.title}
          subtitle={workData.subtitle}
          content={workData.content}
          clients={workData.clients}
          awards={workData.awards}
      />

      <Projects 
          id={'projects'}
          title='Projects'
          projects={exampleProjectData}              
      />

      <Articles
        id={'writing'}
        title={'writing'}
      />

    </>
  )
}
