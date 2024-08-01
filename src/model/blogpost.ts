import { MDXRemoteSerializeResult } from 'next-mdx-remote'

export type BlogPostResource = {
    name: string
    link: string
}

export type BlogPostFrontMatter = {
    title: string
    date: Date
    abstract: string
    tags?: string[]
    resources?: BlogPostResource[]
}

export type BlogPost = {
    slug: string
    frontMatter: BlogPostFrontMatter
    mdxSource?: MDXRemoteSerializeResult
}
