import React from 'react';
import { StarIcon } from './star-icon';
import { MoonIcon } from './moon-icon';
import { SunIcon } from './sun-icon';

export default {
  title: 'Components/Icons',
  component: StarIcon,
};

export const StarIconExample = () => {
  return(
    <div>
        <div className='bg-white'>
            <StarIcon />
        </div>
        <div className="dark">
          <div className='dark:bg-darkGray'>
            <StarIcon />
          </div>
        </div>
        <div>
          <MoonIcon />
        </div>
        <div>
          <SunIcon />
        </div>
    </div>
  )
}