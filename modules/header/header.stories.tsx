import React from 'react';
import { Header } from './header';
// import 'tailwindcss/tailwind.css' // Import Tailwind Classes

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modules/Header',
  component: Header,
  parameters: {
    layout: 'full-screen',
  },
 
};

const menuItems = [
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Projects',
      href: '#projects'
    },
    {
      label: 'Writing',
      href: '#writing'
    },
    {
      label: 'Experience',
      href: '#experience'
    }
]

export const Example = () => {
    return (
        <Header items={menuItems} />
    )
}

export const DarkThemeActive = () => {
  return (
      <div className='dark'>
        <Header items={menuItems} />
      </div>
  )
}