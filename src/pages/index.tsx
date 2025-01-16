import { readDataFromFiles } from '@/lib/server_utils'
import { ABOUT_ME_DIR } from '@/lib/utils'
import { AboutMeItem } from '@/model/aboutme'
import Link from 'next/link'

const LandingPageItem: React.FC<AboutMeItem> = ({ title, imageUrl, slug }) => {
    return (
        <Link
            href={`/aboutme/${slug}`}
            className="inline-block h-[80vh] w-1/3 bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            {title}
        </Link>
    )
}

type LandingPageProps = {
    aboutMe: AboutMeItem[]
}

const LandingPage: React.FC<LandingPageProps> = ({ aboutMe }) => {
    return (
        <section className="flex flex-grow items-center justify-center">
            <div className="h-full w-full overflow-auto whitespace-nowrap">
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
