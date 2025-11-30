import React, {useContext, useEffect} from "react";
import { useRouter } from 'next/router';
import cx from "classnames";
import { customImageProps, CustomImage } from "../../components/image/image";
import { Button, buttonProps } from "../../components/button";
import { Heading } from "../../components/typography/heading";
import { TextContent } from "../../components/typography/textContent";
import { Tags } from "../../components/tag/tags";
import DustedImage from "../../public/images/projects/dusted.jpg";
import {v4 as uuidv4} from 'uuid';
import { AnimatedElement } from "../../components/AnimatedElement/animated-element";
import { ThemeContext } from "../../context/ThemeContext/ThemeContext";
import { idProps } from "../../types";

interface ProjectModalProps {
    /**
     * Show modal 
     */
    showModal?: boolean,
    /**
     * Thumbnail image
     */
    thumbnailImage?: customImageProps,
    /**
     * Featured image
     */
    featuredImage?: customImageProps,
    /**
     * Gallery
     */
    gallery?: customImageProps[],
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
     * Project Ids
     */
    projectIDs?: idProps[],
    /**
     * Button
     */
    buttonLink?: buttonProps,
    /**
     * Click handler
     */
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    setShowModal?: any,
}

export const ProjectModal = ({
    thumbnailImage,
    featuredImage,
    gallery,
    title,
    projectIDs,
    content,
    tags,
    buttonLink,
}:ProjectModalProps) => {

    const placeholder = {
        src: DustedImage.src,
        alt: "Dusted Image"
    }

    const router = useRouter();

    const {modalOpen, toggleModal} = useContext(ThemeContext);

    useEffect(() => {
        let projectsArr = [];
        Boolean(projectIDs && projectIDs?.length > 0) && projectIDs.forEach((project) => {return (projectsArr?.push(project?.id))});
        const identifier = router.asPath.split("#")[1];
        if(identifier && projectsArr.includes(identifier)) {
            toggleModal();
        }
        const handleKeyDown = (event: KeyboardEvent) => {
            if(event?.key === "Escape" && modalOpen === true) {
                toggleModal();
            }
        }
        window.addEventListener("keydown", handleKeyDown);
    }, []); 

    const areaClicked = (e) => {
        let eventTarget = e?.target; 
        let targetClasses = eventTarget?.classList; 
        if(Boolean(targetClasses?.length > 0)) {
            if([...targetClasses].includes("project-modal")) {
                e.preventDefault();
                toggleModal();
            }
        }
    }

    const keyPressed = (e) => {
        e.preventDefault();
        if(e.keyCode === 13) {
            toggleModal();
        }
    }

    return (
        <div className={cx(modalOpen ? "block" : "hidden", "modal project-modal bg-black/90 fixed top-0 h-full md:pt-10 lg:pt-20 w-full flex justify-center z-[9999]")}
            onClick={(e) => areaClicked(e)}
        >
            <div className="project-modal__content overflow-auto bg-white w-full md:max-w-[800px] md:max-h-[700px] mx-auto px-5 pt-5 pb-20 rounded-0 md:rounded-lg" role="dialog" aria-modal="true" aria-label="Project modal">
                <div className="project-modal-close-button__wrapper w-full flex justify-end">
                    <span className="mt-2 mb-2">
                        <button className="project-modal__close" aria-label="Close modal" onKeyDown={(e) => keyPressed(e)} onClick={() => toggleModal()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <path d="M2.6 21.5L0.5 19.4L8.9 11L0.5 2.6L2.6 0.5L11 8.9L19.4 0.5L21.5 2.6L13.1 11L21.5 19.4L19.4 21.5L11 13.1L2.6 21.5Z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </span>
                </div>
                <div className="project-modal__body gap-12 md:gap-6 flex flex-col md:flex-row">
                    <div className="project-modal__image w-full md:w-1/2">   
                        {Boolean(gallery && gallery?.length > 0) ?
                            <div className="flex flex-col gap-12">
                                {gallery?.map((image, index) => {
                                    let id = uuidv4();
                                    return (
                                        <AnimatedElement index={index} speed={'fast'} classNames="project" key={id}>
                                            <CustomImage 
                                                src={image?.src}
                                                alt={image?.alt}
                                                caption={image?.caption}  
                                                fit={"contain"}
                                                size={"project"}
                                                border={true}
                                            />
                                        </AnimatedElement>
                                    )
                                })}
                            </div>
                        :
                            <>
                                {(featuredImage || thumbnailImage) &&
                                    <CustomImage 
                                        src={featuredImage?.src ? featuredImage?.src : thumbnailImage?.src ? thumbnailImage?.src : placeholder?.src }
                                        alt={featuredImage?.alt ? featuredImage?.alt : thumbnailImage?.alt ? thumbnailImage?.alt : placeholder?.alt }
                                        fit={featuredImage?.src ? "cover" : "contain"}  
                                        size={featuredImage?.src ? "portrait" : "project"}
                                        caption={featuredImage?.caption ? featuredImage?.caption : thumbnailImage?.caption }
                                        border={true}                                     
                                    />
                                }
                            </>                                                        
                        }                        
                    </div>
                    <div className="project-modal-text__wrap flex flex-col gap-sm w-full md:w-1/2">
                        {title &&                        
                            <Heading hTag={"2"} fontSize={"text-2xl"} weight={"bold"} fontStyle={"san-serif"}>
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
                        {(buttonLink?.href !== "#" && buttonLink?.href !== undefined) &&
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