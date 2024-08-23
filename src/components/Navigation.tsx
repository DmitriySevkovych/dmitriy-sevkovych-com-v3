import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface NavigationItemProps extends React.HTMLProps<HTMLAnchorElement> {}

const NavigationItem: React.FC<NavigationItemProps> = ({
    className,
    children,
    href,
}) => {
    return (
        <Link
            href={href as string}
            className={cn(
                'text-foreground transition-colors hover:text-accent',
                className
            )}
        >
            {children}
        </Link>
    )
}

const Navigation: React.FC = () => {
    return (
        <nav className="mb-8 flex w-full items-baseline gap-4 lg:gap-6">
            <NavigationItem href="/" className="text-xl">
                {' '}
                Dmitriy&apos;s Website
            </NavigationItem>
            <NavigationItem href="/blog">Blog</NavigationItem>
            <NavigationItem href="/cv">CV</NavigationItem>
        </nav>
    )
}

export default Navigation
