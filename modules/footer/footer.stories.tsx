import React from 'react';
import { Footer } from './footer';

export default {
  title: 'Modules/Footer',
  component: Footer, 
};

const FooterTextExample = `
Site designed in Figma. Developed with [Next JS](https://nextjs.org) and [Tailwind CSS](#) using [Visual Studio Code](#). Deployed on [Vercel](#). Just like everyone else. 
`

export const FooterExample = () => {
    return(
        <Footer footerText={FooterTextExample} />
    )
}

export const FooterDarkExample = () => {
    return(
        <div className='dark'>
            <div className='dark:bg-darkGray'>
                <Footer footerText={FooterTextExample} />
            </div>
        </div>
    )
}