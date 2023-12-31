import React from 'react';
import { CustomImage } from './image';
import pidg from '../../public/images/projects/pidg.jpg';
import Profile from '../../public/images/overview/profile.png';

export default {
  title: 'Components/CustomImage',
  component: Image,
};

export const ImageExample = () => {
  return(
    <div>
      <div className='h-full w-full bg-white p-12'>
        <div className='w-[300px]'>
            <CustomImage
                src={pidg.src}
                alt={'PIDG Project'}
                size={'project'}
                fit={'cover'}
            />
            <CustomImage
                src={pidg.src}
                alt={'PIDG Project'}
                size={'square'}
                fit={'cover'}
            />
            <CustomImage
                src={Profile.src}
                alt={'PIDG Project'}
                size={'profile'}
                rounded={'full'}
                fit={'cover'}
            />
        </div>
      </div>
    </div>
  )
}