import CVPDF from '@/components/pdf/CV'
import WrappedPDFViewer from '@/components/pdf/WrappedPDFViewer'
import { CV_EDUCATION_DIR, CV_PROJECTS_DIR, CV_SKILLS_DIR } from '@/lib/utils'
import { CVData, CVEducationItem, CVProjectItem, CVSkillItem } from '@/model/cv'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import React from 'react'

type DebugPDFPageProps = {
    cvdata: CVData
}

const DebugPDFPage: React.FC<DebugPDFPageProps> = ({ cvdata }) => {
    return (
        <div className="w-full">
            <WrappedPDFViewer className="min-h-screen">
                <CVPDF {...cvdata} />
            </WrappedPDFViewer>
        </div>
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

export default DebugPDFPage
