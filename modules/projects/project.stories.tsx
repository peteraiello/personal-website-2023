import React from 'react';
import { Project } from './project';
import { Projects } from './projects';
import { exampleProjectData } from './project-data';


export default {
  title: 'Modules/Projects',
  component: Project,
};



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