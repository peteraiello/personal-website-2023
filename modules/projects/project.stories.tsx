import React from 'react';
import { Project } from './project';
import { Projects } from './projects';
import PIDGThumb from '../../public/images/projects/pidg.jpg';
import WealthtimeThumb from '../../public/images/projects/wealthtime.jpg';
import IntraThumb from '../../public/images/projects/intra-calc.jpg';


export default {
  title: 'Modules/Projects',
  component: Project,
};

const exampleProjectData = [
    {
        featured: true,
        client: 'PIDG',
        agency: 'Dusted',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ex eu erat mollis sodales sed sit amet dui. Mauris quis tempus mi, non rutrum arcu. Sed vitae maximus eros. Proin dolor leo, rutrum aliquet lacus a, dictum sagittis enim. Nulla id lectus efficitur, pulvinar lorem sed, euismod enim. Cras risus ipsum, ultricies commodo nunc nec, semper auctor massa. Donec tempor dignissim fermentum. Curabitur in lectus id quam suscipit dictum.',
        tags: ['React', 'Tailwind', 'Next'],
        buttonLink: 'https://pidg.org',
        projectImage: {src: PIDGThumb.src, alt: 'test'}
    },
    {
        featured: false,
        client: 'Wealthtime',
        agency: 'Dusted',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ex eu erat mollis sodales sed sit amet dui. Mauris quis tempus mi, non rutrum arcu. Sed vitae maximus eros. Proin dolor leo, rutrum aliquet lacus a, dictum sagittis enim. Nulla id lectus efficitur, pulvinar lorem sed, euismod enim. Cras risus ipsum, ultricies commodo nunc nec, semper auctor massa. Donec tempor dignissim fermentum. Curabitur in lectus id quam suscipit dictum.',
        tags: ['WordPress', 'Multisite', 'JavaScript'],
        buttonLink: 'https://wealthtime.com',
        projectImage: {src: WealthtimeThumb.src, alt: 'test'}
    },
    {
      featured: false,
      client: 'Intralinks',
      agency: 'Dusted',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac ex eu erat mollis sodales sed sit amet dui. Mauris quis tempus mi, non rutrum arcu. Sed vitae maximus eros. Proin dolor leo, rutrum aliquet lacus a, dictum sagittis enim. Nulla id lectus efficitur, pulvinar lorem sed, euismod enim. Cras risus ipsum, ultricies commodo nunc nec, semper auctor massa. Donec tempor dignissim fermentum. Curabitur in lectus id quam suscipit dictum.',
      tags: ['React', 'Tailwind', 'JavaScript'],
      buttonLink: '',
      projectImage: {src: IntraThumb.src, alt: 'test'}
    },
];

export const LightExample = () => {
  return(
    <div>
        <div className='bg-white'>
            <Projects 
              id={'projects'}
              title='Projects'
              projects={exampleProjectData}
            />
        </div>
    </div>
  )
}

export const DarkExample = () => {
    return(
      <div>
          <div className='dark bg-black'>
              <Projects 
                id={'projects'}
                title='Projects'
                projects={exampleProjectData}              
              />
          </div>
      </div>
    )
  }