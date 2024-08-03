import { BlogPost } from '@/model/blogpost'
import Link from 'next/link'
import React from 'react'

import ReadDurationIndicator from './ReadDurationIndicator'
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
    const { title, date, tags, abstract, language, length } = post.frontMatter

    return (
        <Link href={`/blog/${post.slug}`} passHref>
            <Card className="transition-colors hover:bg-secondary">
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{date.toLocaleString()}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <p>{abstract}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <ReadDurationIndicator length={length} />

                    <div className="flex gap-2">
                        {tags?.map((tag, index) => (
                            <Badge key={index}>{tag}</Badge>
                        ))}
                    </div>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default BlogPostPreview