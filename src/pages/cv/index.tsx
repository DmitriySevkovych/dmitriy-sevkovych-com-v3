import { ConstrainedWidthDiv } from '@/components/Layouts'
import Education from '@/components/cv/Education'
import Project from '@/components/cv/Project'
import Skill from '@/components/cv/Skill'
import CVPDF from '@/components/pdf/CV'
import DownloadButton from '@/components/pdf/DownloadButton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { readDataFromFiles } from '@/lib/server_utils'
import { CV_EDUCATION_DIR, CV_PROJECTS_DIR, CV_SKILLS_DIR } from '@/lib/utils'
import { CVData, CVEducationItem, CVProjectItem, CVSkillItem } from '@/model/cv'
import { MousePointerClick, SquareDashedMousePointer } from 'lucide-react'
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

    return (
        <section className="flex flex-col items-center justify-evenly gap-8">
            {/* CV Page Header */}
            <div className="flex w-full flex-col items-center gap-8">
                <div className="flex flex-col-reverse items-center justify-evenly gap-8 lg:flex-row lg:gap-16">
                    <div className="flex items-center gap-5">
                        <Avatar className="h-28 w-28 lg:h-36 lg:w-36">
                            <AvatarImage
                                src="/images/sevkovych_portrait_375.avif"
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
                    <p>
                        You need help with a little bit of everything in your
                        software project? Lucky you!
                    </p>

                    <p>
                        I am a freelance one-man IT department with hands-on
                        professional experience in architecting, developing,
                        deploying and monitoring web applications and machine
                        learning projects. And I&apos;m also not too bad with
                        maths😉
                    </p>

                    <p>
                        Give me a <a href="tel:+491778371163">call</a>, ping me
                        on{' '}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={
                                'https://www.linkedin.com/in/dmitriy-sevkovych/'
                            }
                        >
                            LinkedIn
                        </a>{' '}
                        or send me an{' '}
                        <a href="mailto:dmitriy@sevkovych.com">e-mail</a>!
                    </p>
                </ConstrainedWidthDiv>
            </div>

            {/* CV Page Skills */}
            <ConstrainedWidthDiv className="flex flex-col gap-1">
                <h3 className="font-light">Core skills</h3>
                <p>
                    Most of the time I use{' '}
                    <span className="font-medium">Java</span>,{' '}
                    <span className="font-medium">Python</span> or{' '}
                    <span className="font-medium">JavaScript/TypeScript</span>,
                    but I don&apos;t mind switching to other languages. Here is
                    what I usually do:
                </p>
                <div className="grid grid-cols-1 items-center lg:grid-cols-[10fr_90fr]">
                    <div className="w-full justify-end lg:hidden">
                        <SquareDashedMousePointer
                            className="mx-auto"
                            strokeOpacity={0.5}
                            strokeWidth={1}
                        />
                    </div>
                    <div className="hidden w-full justify-end lg:flex">
                        <MousePointerClick
                            className="rotate-90 transform"
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

            {/* CV Page Education */}
            <ConstrainedWidthDiv>
                <h3 className="font-light">Education</h3>
                <div className="grid grid-cols-1 gap-5 py-3 lg:grid-cols-2">
                    {education.map((edu) => (
                        <Education key={edu.order} {...edu} />
                    ))}
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
        </section>
    )
}
export const getStaticProps = async () => {
    return {
        props: {
            cvdata: {
                education: readDataFromFiles<CVEducationItem>(CV_EDUCATION_DIR),
                projects: readDataFromFiles<CVProjectItem>(CV_PROJECTS_DIR),
                skills: readDataFromFiles<CVSkillItem>(CV_SKILLS_DIR, {
                    ascending: true,
                }),
            },
        },
    }
}

export default CVPage
