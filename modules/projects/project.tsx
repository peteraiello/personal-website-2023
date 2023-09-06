import React from 'react';
import { StarIcon } from '../../components/icons/star-icon';
import { Tag } from '../../components/tag/tag';
import { Button } from '../../components/button';
import { Text } from '../../components/typography/text';
import { TextContent} from '../../components/typography/textContent';
import { CustomImage, customImageProps } from '../../components/image/image';
import { v4 as uuidv4} from 'uuid';

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
    buttonLink?: string
}

export const Project = ({
    featured,
    client,
    agency,
    tags,
    projectImage,
    description,
    buttonLink
}:projectProps) => {

    console.log(
        'project image ', projectImage
    );

    return(
        <article className='grid grid-cols-12 gap-5'>
            <div className='col-span-12 md:col-span-6 lg:col-span-8'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-5'>
                        {client &&
                            <Text size={'strapline'}>{'Client: ' + client}</Text>
                        }
                        {agency &&
                            <Text size={'strapline'}>{'Agency: ' + agency}</Text>
                        }
                        {description &&
                            <div className='mr-0 md:mr-[25px] lg:mr-[50px]'>
                                <TextContent >{description}</TextContent>
                            </div>
                        }
                        {(tags && tags.length > 0) &&
                            <div className='flex gap-5'>
                                {tags.map((tag) => {
                                    let id = uuidv4();
                                    return(
                                        <Tag key={id}>{tag}</Tag>
                                    )
                                })}
                            </div>
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
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <CustomImage
                        alt={projectImage.alt}
                        src={projectImage.src}
                        fit={'contain'}
                        size={'project'}
                    />
                </div>
            }
        </article>
    )
}