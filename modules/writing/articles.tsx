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
    articles?: ArticleProps[],
    /**
     * Section Id
     */
    id?: string,
}

export const Articles = ({
    title,
    subtitle,
    articles,
    id
}:articlesProps) => {



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

                    {articles.map((blog, index) => {
                        return(
                            <BlogArticle
                                featured={blog?.featured}
                                external={blog?.external}
                                tags={blog?.tags}
                                excerpt={blog?.excerpt}
                                title={blog?.title}
                                date={blog?.date}
                                articleImage={blog?.articleImage}
                                buttonLink={blog?.buttonLink}
                                key={index}
                            />
                        )
                    })}         

                </div>
        </SectionWrapper>
    )
}