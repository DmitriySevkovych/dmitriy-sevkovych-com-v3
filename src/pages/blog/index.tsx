import { BlogPost } from '@/model/blogpost'
import { POSTS_DIR } from '@/model/constants'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import path from 'path'

type BlogPageProps = {
    posts: BlogPost[]
}

const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
    return (
        <section>
            <div>Hello, Blogs page under construction</div>

            <div>
                {posts.map((post) => (
                    <Link href={`/blog/${post.slug}`} passHref key={post.slug}>
                        {post.slug}
                    </Link>
                ))}
            </div>
        </section>
    )
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(POSTS_DIR)

    const posts = files.map((filename) => {
        const markdownWithMeta = fs.readFileSync(
            path.join(POSTS_DIR, filename),
            'utf-8'
        )
        const { data: frontMatter } = matter(markdownWithMeta)

        return {
            frontMatter,
            slug: filename.split('.')[0],
        }
    })

    return {
        props: {
            posts,
        },
    }
}

export default BlogPage
