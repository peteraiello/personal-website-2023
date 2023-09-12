import React from "react";
import {Project, projectProps} from './project';
import { Heading } from "../../components/typography/heading";
import { SectionWrapper } from "../../components/sectionWrapper";
import { v4 as uuidv4} from 'uuid';

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
     * Section Id
     */
    id?: string,
}

export const Projects = ({
    title,
    projects,
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
                                {projects?.map((project) => {
                                    let id = uuidv4();
                                    return(
                                        <Project 
                                            featured={project.featured}
                                            client={project.client}
                                            agency={project.agency}
                                            tags={project.tags}
                                            description={project.description}
                                            buttonLink={project.buttonLink}
                                            projectImage={project.projectImage}
                                            key={id}
                                        />
                                    )}
                                )}
                            </div>
                    }
                </div>
        </SectionWrapper>
    )
}