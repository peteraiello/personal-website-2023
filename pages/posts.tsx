import {Header} from '../modules/header';
import React from "react";
import {Articles} from '../modules/writing/articles';
import navItems from '../data/navItems.json';
import { ArticlesData } from '../modules/writing/articles-data';
import { FooterData } from '../modules/footer/footer-data';
import { Footer } from '../modules/footer/footer';
import { getAllArticles, getPersonalBlogPosts } from './api/blog';
import { ArticleProps } from '../modules/writing/article';
import { AppWrapper } from '../components/AppWrapper/app-wrapper';
import { ThemeProvider} from '../context/ThemeProvider';
import { projectProps } from '../modules/projects/project';

interface IndexProps {
    allArticles: ArticleProps[]
    allProjects: projectProps[]
}

export default function Home({
    allArticles,
}:IndexProps) {

  return (
    <>
        <ThemeProvider>
            <AppWrapper>
              
                <Header items={navItems?.items} />

                <Articles
                    id={ArticlesData.id}
                    title={'personal blog'}
                    articles={allArticles}
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
    const allArticles = getPersonalBlogPosts()

    return {
        props: { 
            allArticles,
        },
    }
  }
  