import React, {useEffect, useState} from "react";
import {BlogArticle, ArticleProps} from './article';
import { Heading } from "../../components/typography/heading";
import { SectionWrapper } from "../../components/sectionWrapper";
import { Text } from "../../components/typography/text";
import { Button, buttonProps } from "../../components/button";

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
    sectionButton
}:articlesProps) => {
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

                {sectionButton &&
                    <div className="flex justify-center">
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