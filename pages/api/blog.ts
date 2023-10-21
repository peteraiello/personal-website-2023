import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

const articleFields = [
    'title',
    'featured',
    'date',
    'external',
    'tags',
    'excerpt',
    'articleImage',
    'buttonLink'
]

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }
  const items: Items = {}
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })
  return items
}

function convertToPersonalBlog(posts){
  const filteredPosts = posts.filter((post) => {
    return post.external !== true
  })
  return filteredPosts;
}

function convertToExternalPosts(posts){
  const filteredPosts = posts.filter((post) => {
    return post.external !== false
  })
  return filteredPosts;
}

export function getAllArticles(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}

export function getPersonalBlogPosts() {
  const posts = getAllArticles(articleFields)
  const personalBlogPosts = convertToPersonalBlog(posts);
  return personalBlogPosts;
}

export function getLatestPersonalBlogPosts() {
  const posts = getAllArticles(articleFields)
  const personalBlogPosts = convertToPersonalBlog(posts);
  const latestPosts = personalBlogPosts.slice(0,3);
  return latestPosts;
}

export function getLatestExternalBlogPosts() {
  const posts = getAllArticles(articleFields)
  const externalPosts = convertToExternalPosts(posts);
  const latestPosts = externalPosts.slice(0,3);
  return latestPosts;
}