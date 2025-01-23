import React from "react";
import {Project, projectProps} from './project';
import { Heading } from "../../components/typography/heading";
import { SectionWrapper } from "../../components/sectionWrapper";
import { AnimatedElement } from "../../components/AnimatedElement/animated-element";
export type layoutType = 'normal' | 'reverse' | 'alternating';

interface projectsProps {
    /**
     * Title
     */
    title?: string,
    /** 
     * Projects
     */
    projects?: projectProps[],
    /**
     * Layout 
     */
    layout?: 'normal' | 'reverse' | 'alternating';
    /**
     * Section Id
     */
    id?: string,
}

export const Projects = ({
    title,
    projects,
    layout,
    id
}:projectsProps) => {
    return (
        <SectionWrapper id={id}>
                <div className="flex flex-col gap-md">
                    {title &&
                        <Heading hTag={"3"}>{title}</Heading>
                    }
                    {
                        (projects && projects?.length  > 0 ) &&
                            <div className="flex flex-col gap-[60px] lg:gap-lg">
                                {projects?.map((project, index) => {                                   
                                    let newIndex = index; 
                                    return(
                                        <>
                                        {project.status === "published" &&

                                            <AnimatedElement index={index} key={index}>
                                                <Project 
                                                    layout={layout}
                                                    featured={project.featured}
                                                    client={project.client}
                                                    agency={project.agency}
                                                    tags={project.tags}
                                                    description={project.description}
                                                    buttonLink={project.buttonLink}
                                                    projectImage={project.projectImage}
                                                    index={newIndex}
                                                />
                                            </AnimatedElement>
                                            }
                                        </>
                                       
                                    )}
                                )}
                            </div>
                    }
                </div>
        </SectionWrapper>
    )
}