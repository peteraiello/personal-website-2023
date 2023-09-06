import React from 'react';
import { Project } from './project';
import { Projects } from './projects';
import PIDGThumb from '../../public/images/projects/pidg.jpg'

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
    }
];

export const LightExample = () => {
  return(
    <div>
        <div className='bg-white'>
            <Projects 
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
                    title='Projects'
                    projects={exampleProjectData}              
              />
          </div>
      </div>
    )
  }