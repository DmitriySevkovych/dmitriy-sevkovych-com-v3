'use client'

import { PartiallyRequired, cn } from '@/lib/utils'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { ThemeToggle } from './ThemeToggle'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

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
        <nav className="sticky left-0 top-0 z-50 flex w-full items-center justify-between bg-background p-2 pl-4 md:p-4 md:pl-8">
            <div className="flex items-center gap-4 lg:gap-6">
                <NavigationItem href="/" className="pr-2">
                    <Avatar>
                        <AvatarImage src="/images/sevkovych_portrait_375.png" />
                        <AvatarFallback>DS</AvatarFallback>
                    </Avatar>
                </NavigationItem>
                <NavigationItem href="/blog">My Blog</NavigationItem>
                <NavigationItem href="/cv">CV</NavigationItem>
            </div>

            <div className="flex items-baseline gap-4 lg:gap-6">
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Navigation
