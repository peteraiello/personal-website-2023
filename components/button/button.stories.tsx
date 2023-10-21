import React from 'react';
import { Button } from './button';
import { ThemeToggleButton } from './theme-toggle';
import { ArticleButton } from './articleButton';

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
      <div className='h-full w-full p-12 dark'>
        <div className='dark:bg-darkGray'>
          <Button
            label={'Download Resume'}
            href={'#'}
            icon={'download'}
          />
          </div>
      </div>
    </div>
  )
}

export const ArticleButtonExample = () => {
  return (
    <ArticleButton 
      href={'/'}
      label={'Read article'}
    />
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

export const ThemeToggleButtonExample = () => {
  return (
    <div className='bg-black p-10'>
      <ThemeToggleButton />
    </div>
  )
}
