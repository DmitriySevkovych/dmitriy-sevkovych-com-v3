import Navigation from '@/components/Navigation'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <main className='flex flex-col min-h-screen w-full'>
            <Navigation />
            <Component {...pageProps} />
        </main>
    )
}
