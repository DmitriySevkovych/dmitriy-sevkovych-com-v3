import LandingLayout from '@/layouts/LandingLayout'
import { NextPageWithLayout } from '@/layouts/types'
import { readDataFromFiles } from '@/lib/server_utils'
import { ABOUT_ME_DIR, cn, fontMono, toSlug } from '@/lib/utils'
import { AboutMeItem } from '@/model/aboutme'
import fs from 'fs'
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { ReactElement } from 'react'

type AboutMePageProps = {
    aboutMe: AboutMeItem
}

const AboutMePage: NextPageWithLayout<AboutMePageProps> = ({ aboutMe }) => {
    const { title, imageUrl, description } = aboutMe
    return (
        <section
            className="flex flex-grow items-end bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {/* Overlay */}
            <div className="absolute h-full w-full bg-black/10"></div>

            {/* <div className="absolute hidden h-full w-1/5 bg-accent md:block"></div> */}

            <div className="flex flex-col items-baseline gap-4 p-8 md:gap-8">
                <h1
                    className={cn(
                        fontMono.variable,
                        'max-w-[650px] bg-accent px-6 py-3 text-right font-mono text-xl font-bold uppercase text-white lg:text-5xl'
                    )}
                >
                    {title}
                </h1>
                <div className="flex max-h-[300px] w-full flex-col gap-2 overflow-y-auto bg-background p-6 opacity-95 md:w-2/3">
                    {description.map((item, index) => (
                        <p key={`${title}-${index}`} className="pb-1">
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}

AboutMePage.getLayout = function getLayout(page: ReactElement) {
    return <LandingLayout>{page}</LandingLayout>
}

export const getStaticPaths = async () => {
    const files = fs.readdirSync(ABOUT_ME_DIR)

    const paths = files.map((filename) => ({
        params: {
            slug: toSlug(filename),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

interface Params extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as Params

    const aboutMe = readDataFromFiles<AboutMeItem>(ABOUT_ME_DIR, {
        withSlug: true,
    }).find((item) => item.slug === slug)
    return {
        props: {
            aboutMe,
        },
    }
}

export default AboutMePage
