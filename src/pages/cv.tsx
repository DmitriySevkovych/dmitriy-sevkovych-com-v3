import { ConstrainedWidthDiv } from '@/components/Layouts'
import CVPDF from '@/components/pdf/CV'
import DownloadButton from '@/components/pdf/DownloadButton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CV_EDUCATION_DIR, CV_PROJECTS_DIR } from '@/lib/utils'
import { CVData } from '@/model/cv'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import React from 'react'

const _getPdfFileName = (): string => {
    const date = new Date().toISOString().split('T')[0]
    return `Dmitriy-Sevkovych-CV-${date}.pdf`
}

type CVPageProps = {
    cvdata: CVData
}

const CVPage: React.FC<CVPageProps> = ({ cvdata }) => {
    const { education, projects } = cvdata
    console.log({ education, projects })

    return (
        <section className="flex flex-col items-center justify-evenly gap-10">
            {/* CV Page Header */}
            <div className="flex w-full flex-col items-center gap-5">
                <div className="flex flex-col-reverse items-center justify-evenly gap-8 lg:flex-row lg:gap-16">
                    <div className="flex items-center gap-5">
                        <Avatar className="h-28 w-28 lg:h-36 lg:w-36">
                            <AvatarImage
                                src="/sevkovych_portrait_375.png"
                                alt="Dmitriy Sevkovych"
                            />
                            <AvatarFallback>DS</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="text-xl">Dmitriy Sevkovych</h1>
                            <h2 className="text-lg">M.Sc. Mathematics</h2>
                            <h3 className="mt-1 text-base">
                                Freelance IT Specialist <br /> Web + AI/ML
                            </h3>
                        </div>
                    </div>
                    <DownloadButton
                        document={<CVPDF {...cvdata} />}
                        fileName={_getPdfFileName()}
                    />
                </div>

                <ConstrainedWidthDiv className="flex flex-col gap-2">
                    <p>Hi there!</p>

                    <p>
                        I&apos;m a jack of all trades and proud of it: I have
                        hands-on professional experience with planning,
                        designing, developing, deploying and monitoring modern
                        web applications and machine learning projects. And
                        I&apos;m also not too bad with maths😉
                    </p>

                    <p>
                        Being a one-man IT department, I like to work with
                        start-ups or small teams that benefit from my broad
                        spectrum of skills.
                    </p>
                </ConstrainedWidthDiv>
            </div>

            {/* CV Page Skills */}
            <ConstrainedWidthDiv className="flex flex-col">
                <h3 className="text-muted">Core skills</h3>
                <p>TODO: Skills here</p>
            </ConstrainedWidthDiv>

            {/* CV Page Projects */}
            <ConstrainedWidthDiv className="flex flex-col">
                <h3 className="text-muted">Projects</h3>
                <p>TODO: Projects here</p>
            </ConstrainedWidthDiv>

            {/* CV Page Education */}
            <ConstrainedWidthDiv>
                <h3 className="text-muted">Education</h3>
                <p>TODO: Education here</p>
            </ConstrainedWidthDiv>
        </section>
    )
}

const _readDataFromFiles = (
    dirname: string
): { frontMatter: object; order: number }[] => {
    const files = fs.readdirSync(dirname, { withFileTypes: true })
    const data = files
        .filter((dirent) => dirent.isFile())
        .map((dirent) => {
            const filename = dirent.name

            const markdownWithMeta = fs.readFileSync(
                path.join(dirname, filename),
                'utf-8'
            )
            const { data: frontMatter } = matter(markdownWithMeta)

            const order = parseInt(filename.split('_')[0])

            return {
                frontMatter,
                order,
            }
        })
        .sort((a, b) => b.order - a.order)

    return data
}

export const getStaticProps = async () => {
    return {
        props: {
            cvdata: {
                education: _readDataFromFiles(CV_EDUCATION_DIR),
                projects: _readDataFromFiles(CV_PROJECTS_DIR),
            },
        },
    }
}

export default CVPage
