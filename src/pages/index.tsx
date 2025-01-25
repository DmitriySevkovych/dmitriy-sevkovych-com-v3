import LandingLayout from '@/layouts/LandingLayout'
import { NextPageWithLayout } from '@/layouts/types'
import { readDataFromFiles } from '@/lib/server_utils'
import { ABOUT_ME_DIR, cn, fontMono } from '@/lib/utils'
import { AboutMeItem } from '@/model/aboutme'
import Link from 'next/link'
import { ReactElement } from 'react'

const LandingPageItem: React.FC<AboutMeItem> = ({ title, imageUrl, slug }) => {
    return (
        <Link
            href={`/aboutme/${slug}`}
            className="group flex h-[420px] w-[260px] flex-col justify-between rounded-lg border bg-white shadow-xl"
        >
            {/* Image */}
            <div
                className="relative mx-5 mt-5 h-3/4 bg-cover bg-center saturate-0 transition-all hover:saturate-100"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gray-400 opacity-20 transition-opacity group-hover:opacity-0"></div>
            </div>

            <h6
                className={cn(
                    fontMono.variable,
                    'h-[60px] translate-y-0 text-center font-mono font-bold uppercase text-black/90 transition-transform group-hover:-translate-y-2'
                )}
            >
                {title}
            </h6>
        </Link>
    )
}

type LandingPageProps = {
    aboutMe: AboutMeItem[]
}

const LandingPage: NextPageWithLayout<LandingPageProps> = ({ aboutMe }) => {
    return (
        <section className="flex flex-grow flex-col items-center justify-center pt-2">
            <div className="grid grid-cols-1 gap-5 pb-6 lg:grid-cols-3">
                {aboutMe.map((item) => (
                    <LandingPageItem key={`aboutme_${item.slug}`} {...item} />
                ))}
            </div>
        </section>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            aboutMe: readDataFromFiles<AboutMeItem>(ABOUT_ME_DIR, {
                ascending: true,
                withSlug: true,
            }),
        },
    }
}

export default LandingPage
