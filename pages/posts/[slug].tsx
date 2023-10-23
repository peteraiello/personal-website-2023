import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllArticles } from '../api/blog'
import Head from 'next/head'
import { TextContent } from '../../components/typography/textContent'
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
//   morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, preview }: Props) {
  const router = useRouter()
  const title = `${post.title}`
  if (!router.isFallback && !post?.slug) {
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
                </Head>
                <Header items={navItems?.items} />
                <article>
                  <SectionWrapper>
                    <h1 className='text-5xl mb-5 font-semibold'>{title}</h1>
                    <div className='w-full lg:w-10/12'>
                      <TextContent>
                        {post.content}
                      </TextContent>
                    </div>
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
    'date',
    'slug',
    'content',
  ])
  // const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        // content,
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