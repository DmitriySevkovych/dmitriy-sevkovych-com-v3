import Navigation from '@/components/Navigation'
import { cn, fontSans } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import { useRouter } from 'next/router'

type LandingLayoutProps = {
    children: React.ReactNode
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
    const router = useRouter()

    return (
        <main className={cn(fontSans.variable, 'font-sans')}>
            <div className="absolute left-0 top-0 w-full">
                <Navigation />
            </div>

            <AnimatePresence
                mode="wait"
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <motion.div
                    className="flex min-h-screen w-full flex-col"
                    key={router.asPath}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                    }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </main>
    )
}

export default LandingLayout
