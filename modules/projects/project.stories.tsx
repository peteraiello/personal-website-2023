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
              projects={exampleProjectData.projects}
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
                projects={exampleProjectData.projects}
              />
          </div>
      </div>
    )
  }

  export const DarkExampleReverse = () => {
    return(
      <div>
          <div className='dark bg-black'>
              <Projects 
                id={'projects'}
                title='Projects'
                layout={'reverse'}
                projects={exampleProjectData.projects}
              />
          </div>
      </div>
    )
  }

  export const DarkExampleAlternating = () => {
    return(
      <div>
          <div className='dark bg-black'>
              <Projects 
                id={'projects'}
                title='Projects'
                layout={'alternating'}
                projects={exampleProjectData.projects}
              />
          </div>
      </div>
    )
  }