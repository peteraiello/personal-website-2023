import React from 'react';
import { Heading } from './heading';
import { Text } from './text';

export default {
  title: 'Components/Typography',
  component: Heading, 
};

export const Headings = () => {
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

export const TextExample = () => {
    return (
        <>
            <Text size={'strapline'} weight={'bold'}>Lorem ipsum</Text>
            <Text size={'strapline'} weight={'medium'}>Lorem ipsum</Text>
            <Text size={'strapline'} weight={'normal'}>Lorem ipsum</Text>
            <Text size={'lead'} weight={'bold'}>Lorem ipsum</Text>
            <Text size={'lead'} weight={'medium'}>Lorem ipsum</Text>
            <Text size={'lead'} weight={'normal'}>Lorem ipsum</Text>
            <Text size={'body'} weight={'bold'}>Lorem ipsum</Text>
            <Text size={'body'} weight={'medium'}>Lorem ipsum</Text>
            <Text size={'body'} weight={'normal'}>Lorem ipsum</Text>

        </>
    )
}