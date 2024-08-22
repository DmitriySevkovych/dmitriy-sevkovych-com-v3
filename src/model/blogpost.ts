import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type BlogPostLenght = 'short' | 'medium' | 'long'

export type BlogPostLanguage = 'en' | 'de' | 'ua' | 'ru'

export type BlogPostResource = {
    name: string
    link: string
}

export type BlogPostFrontMatter = {
    title: string
    date: Date
    abstract: string
    length: BlogPostLenght
    language: BlogPostLanguage
    tags?: string[]
    resources?: BlogPostResource[]
    similarPosts?: BlogPostResource[]
    isSeries?: boolean
}

export type BlogPost = {
    slug: string
    frontMatter: BlogPostFrontMatter
    mdxSource?: MDXRemoteSerializeResult
}
