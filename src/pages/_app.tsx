import Navigation from '@/components/Navigation'
import { ThemeProvider } from '@/components/ThemeProvider'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
        >
            <main className="flex min-h-screen w-full flex-col p-6">
                <Navigation />
                <Component {...pageProps} />
            </main>
        </ThemeProvider>
    )
}
