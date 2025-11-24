import React from 'react';
import { StarIcon } from '../../components/icons/star-icon';
import { Tags } from '../../components/tag/tags';
import { Button } from '../../components/button';
import { Heading} from "../../components/typography/heading";
import { TextContent} from '../../components/typography/textContent';
import { CustomImage, customImageProps } from '../../components/image/image';

export interface projectProps { 
    /**
     * Id
     */
    id?: string,
    /**
     * Title
     */
    title?: string,
    /**
     * Featured
     */
    featured?: boolean,
    /**
     * Featured image
     */
    featuredImage?: customImageProps,
    /*
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
     * gallery
     */
    gallery?: customImageProps[],
    /**
     * Button Link
     */
    buttonLink?: string,
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
    gallery,
    buttonLink,
    index
}:projectProps) => {
    return(
        <article className={`flex gap-y-10 md:gap-5`}>
            <div className='w-full md:w-1/2 lg:w-2/3'>
                <div className={`flex flex-col gap-5`}>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-0'>
                            {client &&
                                <div className='flex items-center gap-x-1'>
                                    {featured &&
                                        <StarIcon />
                                    }
                                    <Heading hTag={"4"} fontSize={"text-xl"} fontStyle={"san-serif"} weight={"semibold"}>{'Client - ' + client}</Heading>
                                </div>
                            }
                            {agency &&
                                <Heading hTag={"4"} fontSize={"text-xl"} fontStyle={"san-serif"} weight={"semibold"}>{'Agency - Dusted'}</Heading>
                            }
                        </div>
                        {description &&
                            <div className='mr-0 md:mr-[25px] lg:mr-[50px]'>
                                <TextContent isProject={true}>
                                    {description}
                                </TextContent>
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