import React from "react";
import { Text } from "../typography/text";
import { TextContent } from "../typography/textContent";
import { AnimatedElement } from "../AnimatedElement/animated-element";
import { CustomImage, customImageProps } from "../../components/image/image";
import { Tags } from "../tag/tags";
import { Button, buttonProps } from "../button";
import { Heading } from "../typography/heading";

export interface CardProps {
    /**
     * Status
     */
    status?: 'published' | 'draft',
    /**
     * Project title 
     */
    title?: string,
    /**
     * Thumbnail image
     */
    thumbnail?: customImageProps,
    /**
     * Tags
     */
    tags?: string[],
    /**
     * Excerpt
     */
    excerpt?: string,
    /**
     * content
     */
    content?: string,
    /**
     * Button link
     */
    buttonLink?: buttonProps,
    /**
     * Index
     */
    index?: number
}

export const Card = ({
    title,
    thumbnail,
    tags,
    excerpt,
    content,
    buttonLink,
    index,
}:CardProps) => {
    return (
        <div className="w-full h-full">
            <AnimatedElement index={index} classNames="h-full">
                <div className="rounded-xl ring-1 ring-darkGray dark:ring-white overflow-hidden h-full flex flex-col">
                    {thumbnail?.src &&
                        <CustomImage 
                            src={thumbnail?.src}
                            alt={thumbnail?.alt}
                            size={"project"}
                            fit={"cover"}
                        />
                    }
                    <div className="flex flex-col h-full p-5">
                        <div className="flex flex-col gap-2">
                            {title &&
                                <Heading 
                                    fontSize={"text-2xl"} 
                                    fontStyle={"san-serif"} 
                                    weight={"medium"}
                                    hTag={"3"}
                                >
                                    {title}
                                </Heading>
                            }
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
                                            label={buttonLink?.label}
                                            href={buttonLink?.href}
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