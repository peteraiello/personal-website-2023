import React from 'react';
import { StarIcon } from '../../components/icons/star-icon';
import { Tags } from '../../components/tag/tags';
import { Button } from '../../components/button';
import { Text } from '../../components/typography/text';
import { TextContent} from '../../components/typography/textContent';
import { CustomImage, customImageProps } from '../../components/image/image';
import { layoutType } from './projects';
import { AnimatedElement } from '../../components/AnimatedElement/animated-element';

export interface projectProps { 
    /**
     * Featured
     */
    featured?: boolean,
    /**
     * Client
     */
    client?: string, 
    /**
     * Agency
     */
    agency?: string,
    /**
     * Tags
     */
    tags?: string[],
    /**
     * Description
     */
    description?: string,
    /**
     * Image
     */
    projectImage?: customImageProps,
    /**
     * Button Link
     */
    buttonLink?: string,
    /**
     * Switch layout
     */
    layout?: layoutType,
    /**
     * The index number 
     */
    index?: number,
    /**
     * Project status
     */
    status?: 'draft' | 'published'
}

const getLayout = (layout, index) => {
    let layoutClass;
    if(layout === 'normal') {
        layoutClass = `flex-col md:flex-row`;
    } else if (layout === 'reverse') {
        layoutClass = `flex-col md:flex-row-reverse`;
    } else if (layout === 'alternating') {
        layoutClass = `flex-col md:flex-row`;
        // check odd / even
        if (index % 2) {
            layoutClass = `flex-col md:flex-row`
        } else {
            layoutClass = `flex-col md:flex-row-reverse`;
        }
    }

    return layoutClass;
}  

export const Project = ({
    featured,
    client,
    agency,
    tags,
    projectImage,
    description,
    buttonLink,
    layout,
    index
}:projectProps) => {
    return(
        <article className={`flex gap-y-10 md:gap-5 ${getLayout(layout, index)}`}>
            <div className='w-full md:w-1/2 lg:w-2/3'>
                <div className={`flex flex-col gap-10`}>
                    <div className='flex flex-col gap-3'>
                        {client &&
                            <div className='flex items-center gap-x-1'>
                                {featured &&
                                    <StarIcon />
                                }
                                <Text size={'strapline'} weight={'bold'}>{'Client: ' + client}</Text>
                            </div>
                        }
                        {agency &&
                            <Text size={'strapline'} weight={'bold'}>{'Agency: ' + agency}</Text>
                        }
                        {description &&
                            <div className='mr-0 md:mr-[25px] lg:mr-[50px]'>
                                <TextContent >{description}</TextContent>
                            </div>
                        }
                        {tags &&
                            <Tags tags={tags} />
                        }
                    </div>
                    {buttonLink &&
                        <Button 
                            label={'View Project'} 
                            icon={'new-window'}
                            href={buttonLink}
                        />
                    }       
                </div>
            </div>
            {projectImage &&
                <div className='w-full md:w-1/2 lg:w-1/3'>
                    <CustomImage
                        alt={projectImage.alt}
                        src={projectImage.src}
                        fit={'cover'}
                        size={'project'}
                        rounded={'md'}
                        border={true}
                    />
                </div>
            }
        </article>
    )
}