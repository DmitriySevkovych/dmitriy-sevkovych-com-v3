import { ConstrainedWidthDiv } from '@/components/Layouts'
import { POSTS_DIR, cn, toMdx, toSlug } from '@/lib/utils'
import { BlogPost } from '@/model/blogpost'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

import styles from '../../styles/blogpost.module.css'

type BlogPostPageProps = Required<BlogPost>

const components = { SyntaxHighlighter }

const BlogPostPage: React.FC<BlogPostPageProps> = ({
    frontMatter,
    mdxSource,
}) => {
    const { title, date } = frontMatter
    return (
        <div className="flex w-full flex-col items-center">
            <div className="w-full text-center">
                <h1>{title}</h1>
                <h3>{date.toString()}</h3>
            </div>
            <ConstrainedWidthDiv className={styles.mdxContainer}>
                <MDXRemote {...mdxSource} components={components} />
            </ConstrainedWidthDiv>
        </div>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(POSTS_DIR)

    const paths = files.map((filename) => ({
        params: {
            slug: toSlug(filename),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

interface Params extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as Params
    const postFile = path.join(POSTS_DIR, toMdx(slug))
    const markdownWithMeta = fs.readFileSync(postFile, 'utf-8')

    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)

    return {
        props: {
            frontMatter,
            slug,
            mdxSource,
        },
    }
}

export default BlogPostPage
