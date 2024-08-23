import Link from 'next/link'

const Navigation = () => {
    return (
        <div className="mb-8 flex w-full items-baseline gap-4 lg:gap-6">
            <Link
                href="/"
                className="text-xl text-foreground transition-colors hover:text-accent"
            >
                Dmitriy&apos;s Website
            </Link>
            <Link
                href="/blog"
                className="text-foreground transition-colors hover:text-accent"
            >
                Blog
            </Link>
            <Link
                href="/cv"
                className="text-foreground transition-colors hover:text-accent"
            >
                CV
            </Link>
        </div>
    )
}

export default Navigation
