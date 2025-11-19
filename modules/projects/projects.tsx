import React, {useEffect, useState} from "react";
import { Card, CardProps } from "../../components/card/card";
import { Heading } from "../../components/typography/heading";
import { SectionWrapper } from "../../components/sectionWrapper";
import { v4 as uuidv4} from 'uuid';
import { SelectFilter } from "../../components/select/SelectFilter";

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
    /**
     * Project clicked
     */
    onClick?: (e) => void
    setActiveProject?: any,
    setModalOpen?: any,
}

export const Projects = ({
    title,
    projects,
    setActiveProject,
    setModalOpen,
    id
}:projectsProps) => {

    const [selectedFilter, setSelectedFilter] = useState("");

    const [filteredProjects, setFilteredProjects] = useState(projects as CardProps[]);

    useEffect(() => {

        console.log("selected filter", selectedFilter);

        let newProjectsArr = [] as any;

        if(Boolean(projects?.length > 0)) {
            projects?.map((project) => {
                console.log("project tags", project?.tags);
                const projectTagsLc = project.tags?.map((tag) => {return tag.toLocaleLowerCase()});
                console.log("project tags lowercase", projectTagsLc);
                if(projectTagsLc.includes(selectedFilter)) {
                    newProjectsArr.push(project);
                } else if(selectedFilter === "skills") {
                    newProjectsArr = projects;
                }
            })
        }

        if(Boolean(newProjectsArr && newProjectsArr?.length > 0)) {
            setFilteredProjects(newProjectsArr);
        }
       
    }, [selectedFilter])

    return (
        <SectionWrapper id={id}>
                <div className="flex flex-col gap-md">
                    {title &&
                        <Heading hTag={"3"}>{title}</Heading>
                    }

                    <div className="w-full lg:w-1/5">
                        <SelectFilter 
                            filterOptions={["Skills", "React", "WordPress", "JavaScript"]}
                            selectedFilter={selectedFilter}
                            setSelectedFilter={setSelectedFilter}
                        />
                    </div>

                    {(filteredProjects && filteredProjects?.length  > 0 ) &&
                        <div className="flex flex-col md:grid md:grid-cols-12 gap-8">
                            {filteredProjects?.map((project, index) => { 
                                let id = uuidv4();                                                                      
                                let newIndex = index; 
                                return(
                                    <div key={id} className="w-full md:col-span-6 lg:col-span-4">
                                            {project.status === "published" &&
                                                <Card 
                                                    key={id}
                                                    index={newIndex}
                                                    id={project?.id}
                                                    title={project?.title}                                                
                                                    thumbnail={project?.thumbnail}
                                                    featuredImage={project?.featuredImage}
                                                    tags={project?.tags}
                                                    excerpt={project?.excerpt}
                                                    content={project?.content}
                                                    buttonLink={project?.buttonLink}   
                                                    setActiveProject={setActiveProject}
                                                    setModalOpen={setModalOpen}
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