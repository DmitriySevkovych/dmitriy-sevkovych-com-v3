import { ThemeProvider } from '@/components/ThemeProvider'
import DefaultLayout from '@/layouts/DefaultLayout'
import { NextPageWithLayout } from '@/layouts/types'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout<any>
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout =
        Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>)

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            disableTransitionOnChange
        >
            {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
    )
}
