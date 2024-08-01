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

                <p>
                    This part of my website is my digital notebook. Why exactly
                    does it exist and what is it about? I guess this is my arena
                    of self-reflection, and a way to persist some impressions,
                    ideas, solutions to certain problems or simply memories that
                    seem worth persisting to me. My writing is mostly for
                    myself. Maybe my kids will read it one day, or maybe a
                    stranger will stumble across it and find some of it
                    insightful. I would be happy if it helps someone, but if it
                    doesn&apos;t, that&apos;s fine too.
                </p>

                <p>
                    I have decided to try to make a habit of writing a few lines
                    on any topic that I find interesting at the moment. I once
                    read the quote that you can find at the top of this page and
                    it stung. I dislike writing, especially clackering on a
                    keyboard, even though I do it a lot. But the urge to collect
                    my thoughts and put them in order seems to be winning the
                    upper hand. Or maybe I am just getting older😅.
                </p>

                <p>
                    The topics in this notebook could range from notes on my
                    professional occupation (which would be software engineering
                    and machine learning) or my humble experiments with being an
                    entrepreneur, to some lessons learned from investing, to
                    books that I read, childhood memories, or, should I happen
                    to ever find myself at the pinnacle of my philosophic
                    ability, my thoughts on (my) life as a whole. I probably
                    won&apos;t stick to a certain format, maybe not even to only
                    one language. Just go with the flow. My target audience in
                    this case is actually just me, so the main authority on what
                    to write and how to write it will be my mood.
                </p>

                <p>
                    In case you&apos;ve come this far: have fun browsing through
                    my latest posts! Or if you want to start at the beginning,
                    here is{' '}
                    <Link href="/blog/2024-07-06-about_me">
                        my background story as I perceive it.
                    </Link>
                </p>

                {posts.map((post) => {
                    const { title, date, tags, abstract } = post.frontMatter
                    return (
                        <Link
                            href={`/blog/${post.slug}`}
                            passHref
                            key={post.slug}
                        >
                            <Card>
                                <CardHeader>
                                    <CardTitle>{title}</CardTitle>
                                    <CardDescription>
                                        {date.toLocaleString()}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{abstract}</p>
                                </CardContent>
                                <CardFooter>
                                    {tags?.map((tag, index) => (
                                        <p key={index}>{tag}</p>
                                    ))}
                                </CardFooter>
                            </Card>
                        </Link>
                    )
                })}
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
