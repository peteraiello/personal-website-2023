import React from 'react';
import { Heading } from './heading';
import { Text } from './text';
import { TextContent } from './textContent';

export default {
  title: 'Components/Typography',
  component: Heading, 
};

const markdownExample = `# This is a Markdown heading

### Check it out, it's pretty cool.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Phasellus gravida ante auctor feugiat hendrerit. 
In sollicitudin sollicitudin augue, nec aliquam ante interdum ac. 
Praesent at consequat nisi. Suspendisse facilisis faucibus scelerisque. 
Sed eget volutpat quam, quis varius turpis. 
- Nullam vel nisl a justo aliquet 
- laoreet eu ac enim. 
- In sagittis erat quis eleifend efficitur. 
Phasellus pulvinar cursus odio non ultricies. Fusce ultrices blandit neque, 
quis dignissim magna malesuada at. Donec lobortis libero nec justo posuere condimentum. 
Integer consequat, felis a iaculis vestibulum, lectus ante tempus ex, quis 
vulputate odio leo non dui. Fusce mauris eros, finibus ut purus et, 
sodales auctor lacus. In dolor erat, mattis non rutrum at, consectetur finibus magna.
`

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


export const TextContentExample = () => {
    return (
        <TextContent>
            {markdownExample}
        </TextContent>
    )

}