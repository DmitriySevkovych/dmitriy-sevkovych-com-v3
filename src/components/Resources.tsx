import { BlogPostResource } from '@/model/blogpost'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { ConstrainedWidthDiv } from './Layouts'

type ResourceProps = {
    resource: BlogPostResource
}

export const Resource: React.FC<ResourceProps> = ({ resource }) => {
    const { link, name } = resource
    return (
        <div className="group flex items-center gap-5">
            <ArrowRight
                className="transition-transform group-hover:translate-x-3"
                size={12}
            />
            <Link
                className="text-primary transition-colors group-hover:text-accent"
                href={link}
            >
                {name}
            </Link>
        </div>
    )
}

interface ResourcesSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    resources: BlogPostResource[]
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
    resources,
    className,
}) => {
    return (
        <ConstrainedWidthDiv className={className}>
            <h3 className="mb-3">External resources</h3>

            <div className="px-5">
                {resources.map((resource, index) => (
                    <Resource key={index} resource={resource} />
                ))}
            </div>
        </ConstrainedWidthDiv>
    )
}

interface SimilarPostsSectionProps
    extends React.HTMLAttributes<HTMLDivElement> {
    similarPosts: BlogPostResource[]
    isSeries?: boolean
}

export const SimilarPostsSection: React.FC<SimilarPostsSectionProps> = ({
    similarPosts,
    isSeries,
    className,
}) => {
    return (
        <ConstrainedWidthDiv className={className}>
            <h3 className="mb-3">
                {isSeries
                    ? 'This post is part of the following series'
                    : 'Other posts you might like'}
            </h3>

            <div className="px-5">
                {similarPosts.map((resource, index) => (
                    <Resource key={index} resource={resource} />
                ))}
            </div>
        </ConstrainedWidthDiv>
    )
}
