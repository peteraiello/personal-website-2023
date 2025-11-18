import React from "react";
import { Card, CardProps } from "../../components/card/card";
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
    projects?: CardProps[],
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
                    {(projects && projects?.length  > 0 ) &&
                        <div className="flex flex-col md:grid md:grid-cols-12 gap-8">
                            {projects?.map((project, index) => { 
                                let id = uuidv4();                                                                      
                                let newIndex = index; 
                                return(
                                    <div key={id} className="w-full md:col-span-6 lg:col-span-4">
                                            {project.status === "published" &&
                                                <Card 
                                                    key={id}
                                                    index={newIndex}
                                                    title={project?.title}                                                
                                                    thumbnail={project?.thumbnail}
                                                    tags={project?.tags}
                                                    excerpt={project?.excerpt}
                                                    content={project?.content}
                                                    buttonLink={project?.buttonLink}                                            
                                                />
                                            }
                                    </div>                                       
                                )}
                            )}
                        </div>
                    }
                </div>
        </SectionWrapper>
    )
}