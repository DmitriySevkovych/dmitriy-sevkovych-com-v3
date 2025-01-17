import { readDataFromFiles } from '@/lib/server_utils'
import { ABOUT_ME_DIR, toSlug } from '@/lib/utils'
import { AboutMeItem } from '@/model/aboutme'
import { Item } from '@radix-ui/react-accordion'
import fs from 'fs'
import { GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

type AboutMePageProps = {
    aboutMe: AboutMeItem
}

const AboutMePage: React.FC<AboutMePageProps> = ({ aboutMe }) => {
    const { title, imageUrl } = aboutMe
    return (
        <section
            className="flex flex-grow bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <div className="absolute right-1/2 top-2/3 inline-block">
                <h1 className="bg-white p-3 text-5xl font-bold opacity-75">
                    {title}
                </h1>
            </div>
        </section>
    )
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
