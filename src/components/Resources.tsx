import { BlogPostResource } from '@/model/blogpost'
import { ArrowRight, CircleOff, Film } from 'lucide-react'
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

type ResourcesSectionProps = {
    resources: BlogPostResource[]
}

export const ResourcesSection: React.FC<ResourcesSectionProps> = ({
    resources,
}) => {
    return (
        <ConstrainedWidthDiv>
            <h3 className="mb-3">Resources worth checking out</h3>

            <div className="px-5">
                {resources.map((resource, index) => (
                    <Resource key={index} resource={resource} />
                ))}
            </div>
        </ConstrainedWidthDiv>
    )
}
