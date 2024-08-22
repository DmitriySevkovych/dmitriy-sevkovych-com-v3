import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

interface ConstrainedWidthDivProps
    extends React.HTMLAttributes<HTMLDivElement> {}

export const ConstrainedWidthDiv: React.FC<ConstrainedWidthDivProps> = ({
    className,
    children,
}) => {
    return <div className={cn('w-full max-w-4xl', className)}>{children}</div>
}
