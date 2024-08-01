import { BlogPost } from '@/model/blogpost'
import React from 'react'
import fs from 'fs'
import path from 'path'
import { POSTS_DIR } from '@/model/constants'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import SyntaxHighlighter from 'react-syntax-highlighter'

type BlogPostPageProps = BlogPost

const components = { SyntaxHighlighter }

const BlogPostPage: React.FC<BlogPostPageProps> = ({ frontMatter, mdxSource }) => {
    return (
        <div className="mt-4">
      <h1>{frontMatter.title}</h1>
        <MDXRemote {...mdxSource!} components={components}/>
    </div>
    )
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(POSTS_DIR)

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const postFile = path.join(POSTS_DIR,      slug + '.mdx')
    const markdownWithMeta = fs.readFileSync(postFile, 'utf-8')
  
    const { data: frontMatter, content } = matter(markdownWithMeta)
    const mdxSource = await serialize(content)
  
    return {
      props: {
        frontMatter,
        slug,
        mdxSource
      } satisfies BlogPost
    }
  }

export default BlogPostPage