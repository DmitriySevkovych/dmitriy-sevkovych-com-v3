'use client'

import { PartiallyRequired, cn } from '@/lib/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { ThemeToggle } from './ThemeToggle'

type NavigationItemProps = PartiallyRequired<
    React.HTMLProps<HTMLAnchorElement>,
    'href'
>

const NavigationItem: React.FC<NavigationItemProps> = ({
    className,
    children,
    href,
}) => {
    const router = useRouter()
    const path = router.pathname

    const highlight = path === href && path !== '/'
    return (
        <Link
            href={href as string}
            className={cn(
                'text-foreground transition-colors hover:text-accent',
                highlight ? 'border-b border-accent' : '',
                className
            )}
        >
            {children}
        </Link>
    )
}

const Navigation: React.FC = () => {
    return (
        <nav className="mb-8 flex w-full items-center justify-between">
            <div className="flex items-baseline gap-4 lg:gap-6">
                <NavigationItem href="/" className="text-xl">
                    {' '}
                    Dmitriy&apos;s Website
                </NavigationItem>
                <NavigationItem href="/blog">Blog</NavigationItem>
                <NavigationItem href="/cv">CV</NavigationItem>
            </div>

            <div className="flex items-baseline gap-4 lg:gap-6">
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Navigation
