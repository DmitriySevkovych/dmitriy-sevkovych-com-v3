import Navigation from '@/components/Navigation'
import React from 'react'

type DefaultLayoutProps = {
    children: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <main className="flex min-h-screen w-full flex-col p-6">
            <Navigation />
            {children}
        </main>
    )
}

export default DefaultLayout
