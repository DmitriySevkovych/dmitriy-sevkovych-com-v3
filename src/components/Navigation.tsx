import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div className="flex w-full gap-4 align-bottom">
            <Link href="/" className="text-xl text-foreground">
                Dmitriy&apos;s Website
            </Link>
            <Link href="/blog" className="text-foreground">
                Blog
            </Link>
            <Link href="/cv" className="text-foreground">
                Curriculum Vitae
            </Link>
        </div>
    )
}

export default Navigation
