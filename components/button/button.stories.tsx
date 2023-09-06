import React from 'react';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const DownloadButtonExampleLight = () => {
  return(
    <div>
      <div className='h-full w-full bg-white p-12'>
          <Button
            label={'Download Resume'}
            href={'#'}
            icon={'download'}
          />
      </div>
      <div className='h-full w-full bg-black p-12 dark'>
        <Button
          label={'Download Resume'}
          href={'#'}
          icon={'download'}
        />
      </div>
    </div>
  )
}

export const NewWindowExample = () => {
  return (
    <div>
      <div className='h-full w-full bg-white p-12'>
          <Button
            label={'View Project'}
            href={'#'}
            icon={'new-window'}
          />
      </div>
      <div className='h-full w-full bg-black p-12 dark'>
        <Button
          label={'View Project'}
          href={'#'}
          icon={'new-window'}
        />
      </div>
    </div>
  )
}
