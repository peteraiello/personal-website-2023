import React from 'react';
import { StarIcon } from './star-icon';

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
    </div>
  )
}