import { BlogPostLenght } from '@/model/blogpost'
import { Hourglass } from 'lucide-react'
import React from 'react'

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from './ui/tooltip'

type ReadDurationIndicatorProps = {
    length: BlogPostLenght
}

const ReadDurationIndicator: React.FC<ReadDurationIndicatorProps> = ({
    length,
}) => {
    const iconConfig = {
        size: 18,
        strokeWidth: 1.2,
    }

    const activeHourglass = <Hourglass {...iconConfig} />
    const inactiveHourglass = <Hourglass {...iconConfig} stroke="#ccc" />

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="flex">
                    {activeHourglass}
                    {['medium', 'long'].includes(length)
                        ? activeHourglass
                        : inactiveHourglass}
                    {['long'].includes(length)
                        ? activeHourglass
                        : inactiveHourglass}
                </TooltipTrigger>
                <TooltipContent>
                    <p>Estimated reading time: {length}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default ReadDurationIndicator
