import Navigation from '@/components/Navigation'
import { cn, fontSans } from '@/lib/utils'
import React from 'react'

type DefaultLayoutProps = {
    children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <main className={cn(fontSans.variable, 'font-sans')}>
            <Navigation />

            <div className="flex min-h-screen w-full flex-col p-6">
                {children}
            </div>
        </main>
    )
}

export default DefaultLayout
