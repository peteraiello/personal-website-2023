import React from 'react';
import { Heading } from './heading';

export default {
  title: 'Components/Heading',
  component: Heading, 
};

export const Example = () => {
    return (
        <>
            <Heading hTag='1'>Heading H1</Heading>
            <Heading hTag='2'>Heading H2</Heading>
            <Heading hTag='3'>Heading H3</Heading>
            <Heading hTag='4'>Heading H4</Heading>
            <Heading hTag='5'>Heading H5</Heading>
            <Heading hTag='6'>Heading H6</Heading>
        </>
    )
}