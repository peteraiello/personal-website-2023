import React, {useContext} from "react";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { useRouter } from "next/router";
import { TextContent } from "../typography/textContent";
import { AnimatedElement } from "../AnimatedElement/animated-element";
import { CustomImage, customImageProps } from "../../components/image/image";
import { Tags } from "../tag/tags";
import { Button, buttonProps } from "../button";
import { Heading } from "../typography/heading";
import { StarIcon } from "../icons/star-icon";


export interface CardProps {
    /**
     * Status
     */
    status?: 'published' | 'draft',
    /**
     * ID
     */
    id?: string,
    /**
     * Project title 
     */
    title?: string,
    /**
     * Featured
     */
    featured?: boolean,
    /**
     * Thumbnail image
     */
    thumbnail?: customImageProps,
    /**
     * Featured image (i.e. modal)
     */
    featuredImage?: customImageProps,
    /**
     * Gallery images
     */
    gallery?: customImageProps[],
    /**
     * Tags (i.e. skills)
     */
    tags?: string[],
    /**
     * Industry (i.e. Marketing, New Media)
     */
    industry?: string,
    /**
     * Excerpt
     */
    excerpt?: string,
    /**
     * Content
     */
    content?: string,
    /**
     * Button link
     */
    buttonLink?: buttonProps,
    /**
     * Index
     */
    index?: number,
    /**
     * On click
     */
    onClick?: (e) => void,
    /**
     * Is active
     */
    setActiveProject?: any,
    /**
     * Modal open
     */
    setModalOpen?: any
}

export const Card = ({
    id,
    title,
    featured,
    thumbnail,
    featuredImage,
    gallery,
    tags,
    excerpt,
    content,
    buttonLink,
    index,
    setActiveProject,
    // setModalOpen,
}:CardProps) => {

    const {toggleModal} = useContext(ThemeContext);

    const router = useRouter();

    const clickHandler = (event) => {

        /* don't let the page jump by calling prevent default function */
        event.preventDefault();
        if(id) {
            let routerPath = router.asPath.split("#")[0];
            /* push identifier to url i.e. peteraiello.dev/#pidg */
            router.push(routerPath + "#" + id, undefined, {shallow: true});
        }

        setActiveProject(
            {
                title: title,
                content: content,
                thumbnail: thumbnail,
                featuredImage: featuredImage,
                tags: tags,
                buttonLink: buttonLink,
                gallery: gallery,
            }
        )            
        toggleModal()
    }

    return (
        <div className="w-full h-full">
            <AnimatedElement index={index} classNames="h-full">
                <div className="rounded-xl ring-1 ring-darkGray dark:ring-white overflow-hidden h-full flex flex-col">
                    {thumbnail?.src &&
                        <CustomImage 
                            src={thumbnail?.src}
                            alt={thumbnail?.alt}
                            dropShadow={false}
                            border={false}                                                   
                            size={"project"}
                            fit={"cover"}
                        />
                    }
                    <div className="flex flex-col h-full p-5">
                        <div className="flex flex-col gap-2">
                            <div className="title-wrapper flex flex-row gap-2 items-center">
                                {title &&
                                    <Heading 
                                        fontSize={"text-2xl"} 
                                        fontStyle={"san-serif"} 
                                        weight={"bold"}
                                        hTag={"3"}
                                    >
                                        {title}
                                    </Heading>
                                }
                                {featured &&
                                    <StarIcon />
                                }
                            </div>
                            {Boolean(tags?.length > 0) && 
                                <Tags tags={tags} />
                            }
                            {excerpt &&
                                <TextContent>
                                    {excerpt}
                                </TextContent>
                            }                    
                            {content &&
                                <div className="hidden">
                                    <TextContent>
                                        {content}
                                    </TextContent>
                                </div>
                            }
                        </div>
                        {buttonLink &&
                            <div className="mt-auto">
                                {buttonLink?.label &&
                                    <div className="lg:mt-5">
                                        <Button 
                                            href={"#"}
                                            label={"Learn More"}
                                            onClick={(event) => clickHandler(event)}                                            
                                        />
                                    </div>
                                }
                            </div>                        
                        }
                    </div>
                </div>
            </AnimatedElement>
        </div>
    )
}