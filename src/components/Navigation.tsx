import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    return (
        <div className="flex w-full gap-4">
            <Link href="/" className="text-xl">
                Dmitriy&apos;s Website
            </Link>
            <Link href="/blog">Blog</Link>
            <Link href="/cv">My CV</Link>
        </div>
    )
}

export default Navigation
