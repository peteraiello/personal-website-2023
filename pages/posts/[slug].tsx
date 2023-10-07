import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllArticles } from '../api/blog'
import Head from 'next/head'
import markdownToHtml from '../../utils/markdownToHtml'
import type {ArticleProps} from '../../modules/writing/article'

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
    <div>
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <p>{post.title}</p>
              {post.content}
            </article>
          </>
        )}
   </div>
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
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
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