import CVPDF from '@/components/pdf/CV'
import DownloadButton from '@/components/pdf/DownloadButton'
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
        <section className="flex flex-col items-center justify-evenly gap-10 p-10">
            <div className="flex w-full justify-evenly">
                <p>TODO: Header here</p>
                <DownloadButton
                    document={<CVPDF {...cvdata} />}
                    fileName={_getPdfFileName()}
                />
            </div>

            <div className="flex flex-col items-center">
                <h1>Page is still under construction</h1>
                <p>TODO: Projects here</p>
            </div>

            <div>
                <p>TODO: Education here</p>
            </div>
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
