import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
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
            className="group h-[420px] w-[260px] rounded-sm bg-white shadow-lg"
        >
            {/* Image */}
            <div
                className="relative m-5 h-3/4 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-black opacity-50 transition-opacity group-hover:opacity-20"></div>
            </div>

            {/* <div className='flex flex-col items-center justify-center'> */}
            <h6
                className={cn(
                    fontMono.variable,
                    'translate-y-0 p-4 text-center font-mono font-bold uppercase text-black/90 transition-transform group-hover:-translate-y-2'
                )}
            >
                {title}
            </h6>
            {/* </div> */}
        </Link>
    )
}

type LandingPageProps = {
    aboutMe: AboutMeItem[]
}

const LandingPage: NextPageWithLayout<LandingPageProps> = ({ aboutMe }) => {
    return (
        <section className="flex flex-grow items-center justify-center">
            {/* <Carousel className=''>
                <CarouselContent>
                    {aboutMe.map((item) => (
                        <CarouselItem key={`aboutme_${item.slug}`} className=' p-20 pl-4 min-h-[420px] lg:basis-1/4'>
                            <LandingPageItem {...item} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel> */}

            <div className="mt-20 grid grid-cols-1 gap-5 lg:grid-cols-3">
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
