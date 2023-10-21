import React from 'react';
import { StarIcon } from '../../components/icons/star-icon';
import { Tags } from '../../components/tag/tags';
import { Button } from '../../components/button';
import { ArticleButton } from '../../components/button/articleButton';
import { Text } from '../../components/typography/text';
import { TextContent} from '../../components/typography/textContent';
import { CustomImage, customImageProps } from '../../components/image/image';
import { v4 as uuidv4} from 'uuid';
import { getTheDate } from '../../utils/getTheDate';


export interface ArticleProps { 
    /**
     * Featured
     */
    featured?: boolean,
    /**
     * Date
     */
    date?: Date,
    /**
     * External (personal blog or external publication)
     */
    external?: boolean,
    /**
     * Title (post title)
     */
    title?: string,
    /**
     * Tags
     */
    tags?: string[],
    /**
     * Excerpt
     */
    excerpt?: string,
    /**
     * Post body
     */
    postBody?: string,
    /**
     * Image
     */
    articleImage?: customImageProps,
    /**
     * Button Link
     */
    buttonLink?: string,
    slug?: string,
    content?: string
}

export const BlogArticle = ({
    featured,
    date,
    external,
    title,
    tags,
    excerpt,
    postBody,
    articleImage,
    buttonLink
}:ArticleProps) => {
    return(
        <article className='grid grid-cols-12 gap-y-10 md:gap-5'>
            <div className={articleImage ? `col-span-12 md:col-span-6 lg:col-span-8` : `col-span-12 lg:col-span-10` }>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-5'>
                        {title &&
                            <div className='flex gap-x-5'>
                                {featured &&
                                    <StarIcon />
                                }
                                <Text size={'strapline'} weight={'bold'}>{title}</Text>
                            </div>
                        }
                        {date &&
                            <Text size={'strapline'} weight={'bold'}>{getTheDate(date)}</Text>
                        }
                        {excerpt &&
                            <div className='mr-0 md:mr-[25px] lg:mr-[50px]'>
                                <TextContent >{excerpt}</TextContent>
                            </div>
                        }
                        {tags &&
                            <Tags tags={tags} />
                        }
                    </div>
                    {external === true ? 
                        buttonLink &&
                            <Button 
                                label={'Read Article'} 
                                icon={external === true ? 'new-window' : 'none'}
                                href={buttonLink}
                            />
                        :
                        buttonLink &&
                            <ArticleButton 
                                label={'Read Article'} 
                                href={buttonLink}
                            />
                    }
                        

                </div>
            </div>
            {articleImage &&
                <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <CustomImage
                        alt={articleImage.alt}
                        src={articleImage.src}
                        fit={'cover'}
                        size={'project'}
                    />
                </div>
            }
        </article>
    )
}