import React from 'react';
import { Card } from './card';


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
        <div className='bg-black dark p-5'>
            <Card 
                {...cardData}
            />
        </div>
    )
}
