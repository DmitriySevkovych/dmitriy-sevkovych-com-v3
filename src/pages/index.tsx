import LandingLayout from '@/layouts/LandingLayout'
import { NextPageWithLayout } from '@/layouts/types'
import { readDataFromFiles } from '@/lib/server_utils'
import { ABOUT_ME_DIR } from '@/lib/utils'
import { AboutMeItem } from '@/model/aboutme'
import Link from 'next/link'
import { ReactElement } from 'react'

const LandingPageItem: React.FC<AboutMeItem> = ({ title, imageUrl, slug }) => {
    return (
        <Link
            href={`/aboutme/${slug}`}
            className="min-h-1/3 lg:min-h-1/2 group relative aspect-square bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50 transition-opacity group-hover:opacity-20"></div>
            {/* Visible content on top of overlay */}
            <div className="relative flex h-full w-2/3 items-end justify-start overflow-hidden">
                <h6 className="translate-y-full p-4 font-bold text-white transition-transform group-hover:-translate-y-0">
                    {title}
                </h6>
            </div>
            {/* <span className='inline-block relative top-1/2 left-1/2 hover:translate-x-3'>            {title}            </span> */}
        </Link>
    )
}

type LandingPageProps = {
    aboutMe: AboutMeItem[]
}

const LandingPage: NextPageWithLayout<LandingPageProps> = ({ aboutMe }) => {
    return (
        <section className="flex flex-grow items-center justify-center">
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                {aboutMe.map((item) => (
                    <LandingPageItem key={`aboutme_${item.slug}`} {...item} />
                ))}
            </div>
        </section>
    )
}

LandingPage.getLayout = function getLayout(page: ReactElement) {
    return <LandingLayout>{page}</LandingLayout>
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
