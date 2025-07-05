import React, {useEffect, useState} from "react";
import {BlogArticle, ArticleProps} from './article';
import { Heading } from "../../components/typography/heading";
import { SectionWrapper } from "../../components/sectionWrapper";
import { Text } from "../../components/typography/text";
import { Button, buttonProps } from "../../components/button";
import { AnimatedElement } from "../../components/AnimatedElement/animated-element";
import {v4 as uuidv4} from "uuid";
import cx from "classnames";


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
     * No posts found text
     */
    noPublishedPostsMsg?: string,
    /** 
     * Articles
     */
    articles?: ArticleProps[],
    /**
     * Section Id
     */
    id?: string,
    /**
     * Section Button
     */
    sectionButton?: buttonProps;
}

export const Articles = ({
    title,
    subtitle,
    articles,
    id,
    noPublishedPostsMsg,
    sectionButton
}:articlesProps) => {

    const PlaceholderText = () => {
        return (
            <Text weight={'medium'} size={'body'}>
                {noPublishedPostsMsg ? noPublishedPostsMsg : 'No posts found'}
            </Text>
        );
    }

    const publicPosts = articles?.filter((post) => {return !post?.draft && post });

    return (
        <SectionWrapper id={id}>
            <div className="flex flex-col gap-md">
                <div className="flex flex-col">
                    <div className="grid grid-cols-12 gap-sm">
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
                </div>
                <div className="flex flex-col gap-lg">
                    {Boolean(articles?.length > 0 && Boolean(publicPosts?.length > 0)) ?
                        articles.map((blog, index) => {
                            let id = uuidv4();
                            return(
                                <div key={id}>
                                    <AnimatedElement index={index}>
                                        <BlogArticle
                                            featured={blog?.featured}
                                            external={blog?.external}
                                            tags={blog?.tags}
                                            excerpt={blog?.excerpt}
                                            title={blog?.title}
                                            date={blog?.date}
                                            articleImage={blog?.articleImage}
                                            buttonLink={blog?.buttonLink}
                                        />
                                    </AnimatedElement>                                                                    
                                </div>
                            )
                        })
                        :
                            <PlaceholderText />                                    
                    }                     

                </div> 

                {sectionButton &&
                    <div className="flex justify-left"> {/* ToDo: buttonWrapper component */}
                        <Button 
                            href={sectionButton.href}
                            label={sectionButton.label}
                        />
                    </div>
                }

            </div>
        </SectionWrapper>
    )
}