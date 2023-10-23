import {Header} from '../modules/header';
import Head from 'next/head'
import React from "react";
import {Articles} from '../modules/writing/articles';
import navItems from '../data/navItems.json';
import { Overview } from '../modules/overview/overview';
import { buttonIconType } from '../components/button';
import { exampleProfile } from '../modules/overview/overview-data';
import { Work } from '../modules/work/work';
import { workData } from '../modules/work/work-data';
import { Projects } from '../modules/projects/projects';
import { layoutType } from '../modules/projects/projects';
import { exampleProjectData } from '../modules/projects/project-data';
import { Experience } from '../modules/experience/experience';
import { ExperienceData } from '../modules/experience/experience-data';
import { ArticlesData } from '../modules/writing/articles-data';
import { FooterData } from '../modules/footer/footer-data';
import { Footer } from '../modules/footer/footer';
import { getAllArticles, getLatestExternalBlogPosts, getLatestPersonalBlogPosts } from './api/blog';
import { getAllProjects } from './api/projects';
import { ArticleProps } from '../modules/writing/article';
import { AppWrapper } from '../components/AppWrapper/app-wrapper';
import { ThemeProvider} from '../context/ThemeProvider';
import { projectProps } from '../modules/projects/project';

interface IndexProps {
    latestPersonalBlog: ArticleProps[]
    latestExternalPosts: ArticleProps[]
    allProjects: projectProps[]
}

export default function Home({
    allProjects,
    latestPersonalBlog,
    latestExternalPosts
}:IndexProps) {

  return (
    <>
        <ThemeProvider>
            <AppWrapper>

                <Head>
                    <title>{'Peter Aiello | Frontend developer'}</title>
                </Head>

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
                            href: exampleProfile.resumeLink.href,
                            icon: exampleProfile.resumeLink.icon as buttonIconType
                        }
                    }
                    cards={exampleProfile.cards}
                />

                <Work
                    id={workData.sectionId}
                    title={workData.title}
                    subtitle={workData.subtitle}
                    content={workData.content}
                    clients={workData.clients}
                    awards={workData.awards}
                />

                <Projects 
                    id={exampleProjectData.id}
                    title={exampleProjectData.title}
                    layout={exampleProjectData.layout as layoutType}
                    projects={allProjects}
                />

                <Articles
                    id={ArticlesData.id}
                    title={'Writing'}
                    subtitle={'I have a few posts on external websites.'}
                    articles={latestExternalPosts}
                />

                <Articles
                    id={ArticlesData.id}
                    title={'Personal Blog'}
                    subtitle={'I also keep an external blog'}
                    articles={latestPersonalBlog}
                    sectionButton={
                        {
                            label: 'Personal Blog',
                            href: '/posts'
                        }
                    }
                />

                <Experience 
                    id={ExperienceData.id}
                    title={ExperienceData.title}
                    experiences={ExperienceData.experience}
                />

                <Footer 
                    footerText={FooterData}
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
        'featured',
        'client',
        'agency',
        'tags',
        'projectImage',
        'description',
        'buttonLink',
        'layout'
    ])
  
    return {
        props: { 
            allProjects,
            latestPersonalBlog,            
            latestExternalPosts,
        },
    }
  }
  
