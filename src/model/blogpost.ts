import { MDXRemoteSerializeResult } from "next-mdx-remote"

export type BlogPostFrontMatter = {
    title: string
    date: Date
}

export type BlogPost = {
    slug: string
    frontMatter: BlogPostFrontMatter
    mdxSource?: MDXRemoteSerializeResult
}