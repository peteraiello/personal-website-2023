import React, { useEffect, useState }  from "react";
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllArticles } from '../api/blog'
import Head from 'next/head'
import {TextContent}  from '../../components/typography/textContent'
import type {ArticleProps} from '../../modules/writing/article';
import { SectionWrapper } from '../../components/sectionWrapper'
import { Footer } from '../../modules/footer/footer'
import { FooterData } from '../../modules/footer/footer-data'
import { AppWrapper } from '../../components/AppWrapper/app-wrapper'
import { Header } from '../../modules/header'
import navItems from '../../data/navItems.json';
import { ThemeProvider } from '../../context/ThemeProvider'
import { Button } from '../../components/button'

type Props = {
  post: ArticleProps
  preview?: boolean
}

export default function Post({ post, preview }: Props) {

  const [postDate, setPostDate] = useState("");

  const [upDate, setUpDate] = useState("");

  
  const router = useRouter()
  const title = `${post?.title}`

  const excerpt = `${post?.excerpt}`

  const isPublished = `${!post?.draft}`

  useEffect(() => {
    const d = new Date(post?.date);
    const formattedDate = d?.toLocaleDateString();
    formattedDate && setPostDate(formattedDate);
    const d2 = new Date(post?.lastEdited);
    const formattedDate2 = d2?.toLocaleDateString();
    formattedDate2 && setUpDate(formattedDate2);
  }, [post]);


  if ((!router.isFallback && !post?.slug) || isPublished === "false") {
    return <ErrorPage statusCode={404} />
  } 
    return (
      <>
          {router.isFallback ? (
            <p>Loading…</p>
          ) : (
            <>
            <ThemeProvider>
              <AppWrapper> 
                  <Head>
                      <title>{title + '| Peter Aiello - Frontend developer'}</title>                    
                      <meta name="description" content={excerpt} />
                  </Head>
                  <Header items={navItems?.items} />
                  <article>
                    <SectionWrapper>
                      {title && <h1 className='text-2xl lg:text-5xl mb-5 font-semibold'>{title}</h1>}
                      {postDate && 
                        <span className='block font-bold'>
                          <time dateTime={postDate}>{postDate}</time>
                        </span>
                      }
                      <div className='w-full lg:w-10/12'>
                        <TextContent isArticle={true}>
                          {post.content} 
                        </TextContent>
                      </div>
                      <hr className="my-lg" />
                      {upDate && <p><strong>Last edited:</strong> <time dateTime={upDate}>{upDate}</time></p>}
                      <div className='py-lg'>
                        <Button label={'Back'} href={'/'} />
                      </div>
                    </SectionWrapper>
                  </article>
                  <Footer 
                    footerText={FooterData}
                  />
              </AppWrapper> 
              </ThemeProvider>
            </>
          )}
    </>
    )
  }


type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'content',
    'lastEdited',
    'draft'
  ])

  return {
    props: {
      post: {
        ...post,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllArticles(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}