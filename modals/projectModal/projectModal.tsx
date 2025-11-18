import React from "react";

import cx from "classnames";

import { customImageProps, CustomImage } from "../../components/image/image";

import { Button, buttonProps } from "../../components/button";

import { Heading } from "../../components/typography/heading";

import { TextContent } from "../../components/typography/textContent";

import { Tags } from "../../components/tag/tags";

interface ProjectModalProps {
    /**
     * Show modal 
     */
    showModal?: boolean,
    /**
     * Image
     */
    image?: customImageProps,
    /**
     * Project title
     */
    title?: string,
    /**
     * Content
     */
    content?: string,
    /**
     * Tags
     */
    tags?: string[],
    /**
     * Button
     */
    buttonLink?: buttonProps,
    /**
     * Click handler
     */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const ProjectModal = ({
    showModal,
    image,
    title,
    content,
    tags,
    buttonLink,
    onClick
}:ProjectModalProps) => {
    return (
        <div className={cx(showModal ? "block" : "hidden", "modal project-modal bg-black/90 absolute p-5 top-0 h-full w-full flex justify-center")} id="v5fbzalfj">
            <div className="project-modal__content overflow-y-scroll bg-white max-w-[800px] mx-auto p-5 rounded-lg">            
                <div className="project-modal-close-button__wrapper w-full flex justify-end">
                    <span className="mt-2 mb-2">
                        <button className="project-modal__close" aria-label="Close modal" onClick={onClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M2.6 21.5L0.5 19.4L8.9 11L0.5 2.6L2.6 0.5L11 8.9L19.4 0.5L21.5 2.6L13.1 11L21.5 19.4L19.4 21.5L11 13.1L2.6 21.5Z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </span>
                </div>
                <div className="project-modal__body gap-12 md:gap-6 flex flex-col md:flex-row">
                    <div className="project-modal__image w-full md:w-1/2">   
                        {image &&
                            <CustomImage 
                                src={image?.src}
                                alt={image?.alt}
                                caption={image?.caption}
                                border={true}
                                size={image?.size ? image?.size : "project"}
                                fit={"cover"}                                
                            />
                        }
                    </div>
                    <div className="project-modal-text__wrap flex flex-col gap-2 w-full md:w-1/2">
                        {title &&                        
                            <Heading hTag={"2"} fontSize={"text-2xl"} weight={"medium"} fontStyle={"san-serif"}>
                                {title}
                            </Heading>
                        }
                        {Boolean(tags?.length > 0) &&
                            <Tags tags={tags} />
                        }
                        {content &&
                            <TextContent 
                                isProject={true}
                            >
                                {content}
                            </TextContent>
                        }
                        {buttonLink &&
                            <span className="mt-3">
                                <Button 
                                    href={buttonLink?.href}
                                    label={buttonLink?.label}   
                                    icon={"new-window"}                              
                                />    
                            </span>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}