import { cn } from '@/lib/utils'
import React from 'react'

import { Separator } from './ui/separator'

interface ConstrainedWidthDivProps
    extends React.HTMLAttributes<HTMLDivElement> {
    withSeparator?: boolean
}

export const ConstrainedWidthDiv: React.FC<ConstrainedWidthDivProps> = ({
    className,
    children,
    withSeparator,
}) => {
    return (
        <div className={cn('w-full max-w-4xl', className)}>
            {children}
            {withSeparator && <Separator className="mt-6" />}
        </div>
    )
}
