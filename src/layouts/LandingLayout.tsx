import Navigation from '@/components/Navigation'
import React from 'react'

type LandingLayoutProps = {
    children: React.ReactNode
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
    return (
        <main className="flex min-h-screen w-full flex-col">
            <div className="absolute left-0 top-0 w-full p-6">
                <Navigation />
            </div>
            {children}
        </main>
    )
}

export default LandingLayout
