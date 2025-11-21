import {Header} from '../modules/header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, {useEffect, useState} from "react";
import {Articles} from '../modules/writing/articles';
import navItems from '../data/navItems.json';
import { Overview } from '../modules/overview/overview';
import { buttonIconType } from '../components/button';
import { exampleProfile } from '../content/overview-content';
import { Projects } from '../modules/projects/projects';
import { exampleProjectData } from '../modules/projects/project-data';
import { Experience } from '../modules/experience/experience';
import { ExperienceData } from '../content/experience-content';
import { FooterData } from '../modules/footer/footer-data';
import { Footer } from '../modules/footer/footer';
import { getLatestExternalBlogPosts, getLatestPersonalBlogPosts } from './api/blog';
import { getAllProjects } from './api/projects';
import { ArticleProps } from '../modules/writing/article';
import { AppWrapper } from '../components/AppWrapper/app-wrapper';
import { ThemeProvider} from '../context/ThemeProvider';
import { projectProps } from '../modules/projects/project';
import { ProjectModal } from '../modals/projectModal/projectModal';
import { CardProps } from '../components/card/card';

interface IndexProps {
    latestPersonalBlog: ArticleProps[]
    latestExternalPosts: ArticleProps[]
    allProjects: projectProps[]
}

export default function Home({
    latestPersonalBlog,
    allProjects
}:IndexProps) {

    const router = useRouter();

    const [modalOpen, setModalOpen] = useState(false);

    const [activeCard, setActiveCard] = useState({
        status: "published",
        title: "",
        featuredImage: {
            src: "",
            alt: ""
        },
        tags: [],
        content: "",
    } as CardProps);

    useEffect(() => {
        if(router.asPath.includes("#")) {
            
            const identifier = router.asPath.split("#")[1];

            const projects = exampleProjectData.projects;

            if(Boolean(projects && projects?.length > 0)) {
                
                const selectedProject = projects?.find((project) => {return (project?.id === identifier)});

                setActiveCard({
                    title: selectedProject?.title,
                    tags: selectedProject?.tags,
                    featuredImage: selectedProject?.featuredImage,
                    content: selectedProject?.content,
                    buttonLink: selectedProject?.buttonLink                    
                })
                setModalOpen(true);
            }
        } 
    }, []);

    return (
        <>
            <Head>
                <title>{'Peter Aiello | Frontend developer'}</title>
            </Head>

            <ThemeProvider>
                
                <AppWrapper>
                    
                    <Header items={navItems?.items} />

                    <Overview
                        id={exampleProfile.sectionId}
                        name={exampleProfile.name}
                        jobTitle={exampleProfile.jobTitle}
                        profileDesc={exampleProfile.profileDesc}
                        links={exampleProfile.links}
                        profileImage={exampleProfile.profileImg}
                        resumeLink={
                            {
                                label: exampleProfile.resumeLink.label,
                                href: exampleProfile?.resumeLink.href,
                                icon: exampleProfile.resumeLink.icon as buttonIconType
                            }
                        }
                        skillGroups={exampleProfile.skillGroups}
                    />                      

                    <Projects 
                        id={exampleProjectData?.id}
                        title={exampleProjectData?.title}    
                        projects={allProjects as any}
                        setActiveProject={setActiveCard}
                        setModalOpen={setModalOpen}
                        filters={
                            {
                                skills: exampleProjectData?.filters?.skills,
                                industries: exampleProjectData?.filters?.industries
                            }
                        }                
                    />                        

                    <Articles
                        id={'blog'}
                        title={'Blog'}
                        subtitle={"I enjoy writing articles on web development to improve my skills and knowledge. I use AI to help generate ideas research topics, and help me write, hopefully without losing my own voice."} 
                        articles={latestPersonalBlog}     
                        noPublishedPostsMsg={'Coming soon'}                       
                    />
                    
                    <Experience 
                        id={ExperienceData.id}
                        title={ExperienceData.title}
                        experiences={ExperienceData.experience}
                    />

                    <Footer 
                        footerText={FooterData}
                    />  
                         
                    <ProjectModal             
                        title={activeCard?.title}
                        tags={activeCard?.tags}
                        image={activeCard?.featuredImage}
                        content={activeCard?.content}
                        buttonLink={activeCard?.buttonLink}
                        showModal={modalOpen}
                        setShowModal={setModalOpen}
                    />             
                </AppWrapper>
            </ThemeProvider>         
        </>
    )
}

export const getStaticProps = async () => {
  
    const latestPersonalBlog = getLatestPersonalBlogPosts()

    const latestExternalPosts = getLatestExternalBlogPosts()

    const allProjects = getAllProjects([
        'id',
        'status',
        'thumbnail',
        'featuredImage',
        'title',
        'industry',
        'featured',
        'tags',
        'excerpt',
        'content',
        'buttonLink',
    ])
  
    return {
        props: { 
            allProjects,
            latestPersonalBlog,            
            latestExternalPosts,
        },
    }
  }
  
