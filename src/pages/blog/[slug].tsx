import { ConstrainedWidthDiv } from '@/components/Layouts'
import { ResourcesSection, SimilarPostsSection } from '@/components/Resources'
import { POSTS_DIR, toMdx, toSlug } from '@/lib/utils'
import { BlogPost } from '@/model/blogpost'
import styles from '@/styles/blogpost.module.css'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

type BlogPostPageProps = Required<BlogPost>

const components = { SyntaxHighlighter }

const BlogPostPage: React.FC<BlogPostPageProps> = ({
    frontMatter,
    mdxSource,
}) => {
    const { title, date, resources, similarPosts, isSeries } = frontMatter
    return (
        <section className="flex w-full flex-col items-center">
            <div className="w-full text-center">
                <h1>{title}</h1>
                <h3>{date.toString()}</h3>
            </div>

            <ConstrainedWidthDiv
                className={styles.mdxContainer}
                withSeparator={!!resources || !!similarPosts}
            >
                <MDXRemote {...mdxSource} components={components} />
            </ConstrainedWidthDiv>

            {resources && (
                <ResourcesSection className="mb-8" resources={resources} />
            )}

            {similarPosts && (
                <SimilarPostsSection
                    similarPosts={similarPosts}
                    isSeries={isSeries}
                />
            )}
        </section>
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
