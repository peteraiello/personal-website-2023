import React, {useEffect, useState} from "react";
import {BlogArticle, ArticleProps} from './article';
import { Heading } from "../../components/typography/heading";
import { SectionWrapper } from "../../components/sectionWrapper";
import { Text } from "../../components/typography/text";
// import { v4 as uuidv4} from 'uuid';

interface articlesProps {
    /**
     * Title
     */
    title?: string,
    /**
     * Subtitle
     */
    subtitle?: string,
    /** 
     * Articles
     */
    Articles?: ArticleProps[],
    /**
     * Section Id
     */
    id?: string,
}

export const Articles = ({
    title,
    subtitle,
    Articles,
    id
}:articlesProps) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/api/blog')
          .then(response => response.json())
          .then(data => setBlogs(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

    return (
        <SectionWrapper id={id}>
                <div className="flex flex-col gap-lg">
                    <div className="grid grid-cols-12">
                        {title &&
                            <div className="col-span-12">
                                <Heading hTag={"3"}>{title}</Heading>
                            </div>
                        }
                        {subtitle &&
                            <div className="col-span-12 lg:col-span-10">
                                <Text size={'subtitle'} weight={'semibold'}>{subtitle}</Text>
                            </div>
                        }
                    </div>

                    {blogs.map((blog, index) => {
                        return(
                            <BlogArticle
                                featured={blog?.data?.featured}
                                external={blog?.data?.external}
                                tags={blog?.data?.tags}
                                excerpt={blog?.data?.excerpt}
                                title={blog?.data?.title}
                                date={blog?.data?.date}
                                articleImage={blog?.data?.articleImage}
                                buttonLink={blog?.data?.buttonLink}
                                key={index}
                            />
                        )
                    })}         

                </div>
        </SectionWrapper>
    )
}