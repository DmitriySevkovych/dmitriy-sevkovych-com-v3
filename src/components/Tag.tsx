import { cn } from '@/lib/utils'
import { type VariantProps } from 'class-variance-authority'
import React from 'react'

import { Badge, badgeVariants } from './ui/badge'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip'

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
    tag: string
}

const Tag: React.FC<TagProps> = ({ className, tag }) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <Badge
                        className={cn(
                            'inline-block max-w-[75px] truncate bg-secondary align-middle text-secondary-foreground hover:bg-primary hover:text-primary-foreground',
                            className
                        )}
                    >
                        {tag}
                    </Badge>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{tag}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default Tag
