import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
 import { Card, CardProps } from "../../components/card/card";
import { Heading } from "../../components/typography/heading";
import { SectionWrapper } from "../../components/sectionWrapper";
import { v4 as uuidv4} from 'uuid';
import { SelectFilter } from "../../components/select/SelectFilter";
import formatTag from "../../utils/formatTag";
import { format } from "date-fns";

interface filterProps {
    /**
     * Skills (i.e. React, TypeScript)
     */
    skills?: string[],
    /**
     * industries
     */
    industries?: string[],
}

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
    onClick?: (e) => void,
    /**
     * Filter props
     */
    filters?: filterProps,
    setActiveProject?: any,
    setModalOpen?: any,
}

export const Projects = ({
    title,
    projects,
    setActiveProject,
    filters,
    setModalOpen,
    id
}:projectsProps) => {

    const router = useRouter();

    const [selectedSkillsFilter, setSelectedSkillsFilter] = useState("");

    const [selectedIndustryFilter, setSelectedIndustryFilter] = useState("");

    const [filteredProjects, setFilteredProjects] = useState(projects as CardProps[]);

    useEffect(() => {

        if(Boolean(projects?.length > 0)) {
            
            let projectsDataLowercaseSkills = [] as any;

            let filteredBySkills = [] as any;

            let filteredByIndustry = [] as any;

            if(Boolean(projects?.length > 0)) {
                 projects?.map((project) => {            
                    const newProjectTags = project?.tags?.map((tag) => {return tag?.toLowerCase()?.replace(" ", "-")});
                    const newProject = {...project, tags: newProjectTags}
                    projectsDataLowercaseSkills.push(newProject);
                 })
            }

            if(Boolean(projectsDataLowercaseSkills?.length > 0)) {
                projectsDataLowercaseSkills?.map((project) => {                
                    if(project?.tags?.includes(selectedSkillsFilter)) {
                        filteredBySkills.push(project)
                    }
                })
            }

            console.log("skill select filter", selectedSkillsFilter, "industry filter", selectedIndustryFilter);

            /* Skill selected AND industry selected */
            if((selectedSkillsFilter !== "skills") && (selectedIndustryFilter !== "industry-sector")) {  
                console.log("fee");              
                filteredByIndustry = filteredBySkills?.filter((project) => {return project?.industry?.toLowerCase() === selectedIndustryFilter});
                const titles = filteredByIndustry?.map((project => project?.title));
                setFilteredProjects(projects?.filter((project) => {return titles?.includes(project?.title)}))
            /* Skill NOT selected AND industry selected */
            } else if((selectedSkillsFilter === "skills") && (selectedIndustryFilter !== "industry-sector")) {
                console.log("fop");
                filteredByIndustry = projects?.filter((project) => {return project?.industry?.toLowerCase() === selectedIndustryFilter})
                setFilteredProjects(filteredByIndustry);
            /* Skill selected AND industry NOT selected */
            } else if((selectedSkillsFilter !== "skills") && (selectedIndustryFilter === "industry-sector")) {
                console.log("foo");
                const titles = filteredBySkills?.map((project => project?.title));
                setFilteredProjects(projects?.filter((project) => {return titles?.includes(project?.title)}))                        
            /* Skill NOT selected AND industry NOT selected */
            } else if (selectedSkillsFilter === "skills" && selectedIndustryFilter === "industry-sector") {
                console.log("fob");
                setFilteredProjects(projects);
            }
        }
 
        console.log("filtered projects", filteredProjects);

    }, [selectedSkillsFilter, selectedIndustryFilter]);

    useEffect(() => {
        setSelectedSkillsFilter(formatTag(filters?.skills[0]));
        setSelectedIndustryFilter(formatTag(filters?.industries[0]));
        setFilteredProjects(projects);
    }, [])

    return (
        <SectionWrapper id={id}>

                <div className="flex flex-col gap-md">
                    {title &&
                        <Heading hTag={"3"}>{title}</Heading>
                    }
                    <div className="flex flex-col md:flex-row gap-sm">
                        <SelectFilter 
                            filterOptions={filters?.skills}
                            filterId={"skills-filter"}
                            selectedFilter={selectedSkillsFilter}
                            setSelectedFilter={setSelectedSkillsFilter}
                        />    
                        <SelectFilter 
                            filterOptions={filters?.industries}
                            filterId={"industry-filter"}
                            selectedFilter={selectedIndustryFilter}
                            setSelectedFilter={setSelectedIndustryFilter}
                        />                                            
                    </div>

                    {Boolean(filteredProjects?.length > 0 ) ?
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
                                                    featured={project?.featured}
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
                    : 
                        <p>Sorry! No results found!</p>
                    }
                </div>
        </SectionWrapper>
    )
}