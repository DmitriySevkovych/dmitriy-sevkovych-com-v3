import { BlogPost } from '@/model/blogpost'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Badge } from './ui/badge'
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
    const { title, date, tags, abstract } = post.frontMatter

    return (
        <Link href={`/blog/${post.slug}`} passHref>
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{date.toLocaleString()}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p>{abstract}</p>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                    {tags?.map((tag, index) => (
                        <Badge key={index}>{tag}</Badge>
                    ))}
                </CardFooter>
            </Card>
        </Link>
    )
}

export default BlogPostPreview
