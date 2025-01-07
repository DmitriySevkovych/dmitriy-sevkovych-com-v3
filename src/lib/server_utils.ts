import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { toSlug } from './utils'

type ReadDataOptions = {
    ascending?: boolean
    withSlug?: boolean
}

export const readDataFromFiles = <
    T extends unknown & { order: number; slug?: string },
>(
    dirname: string,
    options: ReadDataOptions = {}
): T[] => {
    const { ascending, withSlug } = options
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

            const slug = withSlug ? toSlug(filename) : null

            return {
                ...frontMatter,
                order,
                slug,
            } as T
        })

    if (!ascending) {
        return data.sort((a, b) => b.order - a.order)
    }

    return data
}
