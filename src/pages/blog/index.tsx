import BlogPostPreview from '@/components/BlogPostPreview'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { POSTS_DIR, toSlug } from '@/lib/utils'
import { BlogPost } from '@/model/blogpost'
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
            <div className="flex flex-col gap-5">
                <blockquote className="m-6 border-l-2 pl-6 italic">
                    &quot;If you are thinking without writing, you only think
                    that you are thinking&quot;
                    <br />
                    <span>- Leslie Lamport</span>
                </blockquote>

                <div className="flex w-full max-w-6xl flex-col gap-5 self-center">
                    <p className="leading-relaxed">
                        This is my digital notebook. Why exactly does it exist
                        and what is it about? I guess this is both an arena of
                        self-reflection and a way to persist what seems worth
                        persisting to me. My writing is mostly for myself. Maybe
                        my kids will read it one day, or maybe an unknown
                        stranger will find it insightful. I would be happy if my
                        writing helps someone, but if it doesn&apos;t,
                        that&apos;s fine too.
                    </p>

                    {/* <p className='leading-relaxed'>
                        I have decided to make a habit of writing a few lines
                        on any topic that I find interesting at the moment. I once
                        read the quote that you can find at the top of this page and
                        it stung. I dislike writing, especially clackering on a
                        keyboard, even though I do it a lot. But the urge to collect
                        my thoughts and put them in order seems to be winning the
                        upper hand. Or maybe I am just getting older😅.
                    </p> */}

                    <p className="leading-relaxed">
                        The topics in this notebook will range from notes on my
                        professional occupation (which would be software
                        engineering and machine learning) or my experiments with
                        being an entrepreneur, to lessons learned from
                        investing, to thoughts on being a parent, to childhood
                        memories. I don&apos;t stick to a certain format, topic,
                        nor even to only one language.
                    </p>

                    <p className="leading-relaxed">
                        And since you are reading this: just have fun browsing
                        through my latest posts! Or if you want to start at the
                        beginning, check out{' '}
                        <Link
                            href="/blog/2024-07-06-about_me"
                            className="text-accent"
                        >
                            my background story as I perceive it.
                        </Link>
                    </p>
                </div>

                <div className="mt-3 grid grid-cols-1 gap-5 lg:grid-cols-2">
                    {posts.map((post) => (
                        <BlogPostPreview post={post} key={post.slug} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(POSTS_DIR)

    const posts = files
        .map((filename) => {
            const markdownWithMeta = fs.readFileSync(
                path.join(POSTS_DIR, filename),
                'utf-8'
            )
            const { data: frontMatter } = matter(markdownWithMeta)

            return {
                frontMatter,
                slug: toSlug(filename),
            }
        })
        .sort(
            (a, b) =>
                new Date(b.frontMatter.date).valueOf() -
                new Date(a.frontMatter.date).valueOf()
        )

    return {
        props: {
            posts,
        },
    }
}

export default BlogPage
