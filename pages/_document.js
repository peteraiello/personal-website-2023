import React from 'react';
import {Gradient} from '../components/gradients/gradient';
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>Peter Aiello | Frontend Developer</title>
                <meta name="description" content="Frontend Developer specialising in React, JavaScript and UI Development" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@500&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
            <body className='dark'>
                    <div className='relative'>                        
                        <Gradient fromColour={'darkGray'} toColour={'black'} gradientDirection={'top-to-bottom'} opacity={'full'} zIndex={'-z-[1]'} />
                        <Gradient fromColour={'darkGray'} toColour={'brandGold'} gradientDirection={'left-to-right'} opacity={'1/4'} zIndex={'-z-[1]'} />

                        <Main />
                    </div>
                    <NextScript />
            </body>
        </Html>
    )
}