import React from 'react';
import { Card } from './card';
import {projectCardData} from "./project-card-data"

export default {
    title: 'Components/Card',
    component: Card, 
};

const cardData = {
    title: `Performance`,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ante auctor feugiat hendrerit. In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque.`
}

export const CardExample = () => {
    return (
        <Card 
            {...cardData}
        />
    )
}

export const DarkCardExample = () => {
    return (
        <div className='dark p-5'>
            <div className='dark:bg-darkGray'>
                <Card 
                    {...cardData}
                />
            </div>
        </div>
    )
}

export const ProjectCardExample = () => {
    return (
        <Card 
            {...projectCardData}
        />
    )    
}

export const DarkThemeProjectCardExample = () => {
    return (
        <div className='dark'>
            <div className='dark:bg-darkGray p-5'>
                <Card 
                    {...projectCardData}
                />
            </div>
        </div>
    )
}