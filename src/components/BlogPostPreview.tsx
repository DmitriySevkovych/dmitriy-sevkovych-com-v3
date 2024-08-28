import { BlogPost } from '@/model/blogpost'
import Link from 'next/link'
import React from 'react'

import ReadDurationIndicator from './ReadDurationIndicator'
import Tag from './Tag'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from './ui/card'

type BlogPostPreviewProps = {
    post: BlogPost
}

const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ post }) => {
    const { title, date, tags, abstract, length } = post.frontMatter

    return (
        <Link href={`/blog/${post.slug}`} passHref>
            <Card className="transition-colors hover:bg-secondary">
                <CardHeader>
                    <CardDescription className="flex justify-between">
                        <span>{date.toLocaleString()}</span>
                        <ReadDurationIndicator length={length} />
                    </CardDescription>
                    <CardTitle className="pt-1">{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <p>{abstract}</p>
                </CardContent>
                <CardFooter>
                    <div className="flex gap-2">
                        {tags?.map((tag, index) => (
                            <Tag key={index} tag={tag} />
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default BlogPostPreview
