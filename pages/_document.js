import React from 'react';
import {Gradient} from '../components/gradients/gradient';
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {

    return (
        <Html lang="en">
            <Head>
                <meta name="description" content="Frontend Developer, specialising in React, JavaScript and UI" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@500&family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet" />
            </Head>
                <body>
                        <Main />
                        <NextScript />
                </body>
        </Html>
    )
}