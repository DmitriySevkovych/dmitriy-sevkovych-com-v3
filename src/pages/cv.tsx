import { ConstrainedWidthDiv } from '@/components/Layouts'
import Project from '@/components/cv/Project'
import Skill from '@/components/cv/Skill'
import CVPDF from '@/components/pdf/CV'
import DownloadButton from '@/components/pdf/DownloadButton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CV_EDUCATION_DIR, CV_PROJECTS_DIR, CV_SKILLS_DIR } from '@/lib/utils'
import { CVData, CVEducationItem, CVProjectItem, CVSkillItem } from '@/model/cv'
import fs from 'fs'
import matter from 'gray-matter'
import { MousePointerClick } from 'lucide-react'
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
    const { education, projects, skills } = cvdata
    console.log({ education, projects, skills })

    return (
        <section className="flex flex-col items-center justify-evenly gap-12">
            {/* CV Page Header */}
            <div className="flex w-full flex-col items-center gap-8">
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
                            <h3 className="mt-1 text-base font-light leading-snug">
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
            <ConstrainedWidthDiv className="flex flex-col gap-1">
                <h3 className="font-light">Core skills</h3>
                <p>
                    Most of the time I use{' '}
                    <span className="font-medium text-accent">Java</span>,{' '}
                    <span className="font-medium text-accent">Python</span> or{' '}
                    <span className="font-medium text-accent">
                        JavaScript/TypeScript
                    </span>
                    , but I don&apos;t mind switching to other languages. Here
                    is what I usually do:
                </p>
                <div className="grid grid-cols-1 items-center lg:grid-cols-[10fr_90fr]">
                    <div className="hidden w-full justify-end lg:flex">
                        <MousePointerClick
                            className="scale-x-[-1] transform"
                            strokeOpacity={0.5}
                            strokeWidth={1}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-2 py-3 lg:grid-cols-4">
                        {skills.map((skill) => (
                            <Skill key={skill.order} {...skill} />
                        ))}
                    </div>
                </div>
            </ConstrainedWidthDiv>

            {/* CV Page Projects */}
            <ConstrainedWidthDiv className="flex flex-col">
                <h3 className="font-light">Projects</h3>
                <div className="grid grid-cols-1 gap-5 py-3 lg:grid-cols-2">
                    {projects.map((project) => (
                        <Project key={project.order} {...project} />
                    ))}
                </div>
            </ConstrainedWidthDiv>

            {/* CV Page Education */}
            <ConstrainedWidthDiv>
                <h3 className="font-light">Education</h3>
                <p>TODO: Education here</p>
            </ConstrainedWidthDiv>
        </section>
    )
}

const _readDataFromFiles = <T extends unknown & { order: number }>(
    dirname: string,
    descending: boolean = true
): T[] => {
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
                ...frontMatter,
                order,
            } as T
        })

    if (descending) {
        return data.sort((a, b) => b.order - a.order)
    }

    return data
}

export const getStaticProps = async () => {
    return {
        props: {
            cvdata: {
                education:
                    _readDataFromFiles<CVEducationItem>(CV_EDUCATION_DIR),
                projects: _readDataFromFiles<CVProjectItem>(CV_PROJECTS_DIR),
                skills: _readDataFromFiles<CVSkillItem>(CV_SKILLS_DIR, false),
            },
        },
    }
}

export default CVPage
