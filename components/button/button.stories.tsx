import React from 'react';
import { Button } from './button';
import { DownloadButton } from './downloadButton';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Example = () => {
    return (
        <Button />
    )
}

export const DownloadButtonExampleLight = () => {
  return(
      <DownloadButton
        label={'Download Resume'}
        downloadLink={'#'}
      />
  )
}

export const DownloadButtonExampleDark = () => {
    return(
      <div className='h-full w-full bg-black p-12 dark'>
        <DownloadButton
          label={'Download Resume'}
          downloadLink={'#'}
        />
      </div>
    )
}