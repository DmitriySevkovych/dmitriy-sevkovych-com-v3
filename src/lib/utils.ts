import { type ClassValue, clsx } from 'clsx'
import path from 'path'
import { twMerge } from 'tailwind-merge'

/*
 * Constants
 */
export const POSTS_DIR = path.join(process.cwd(), 'src', 'data', 'posts')

export const CV_EDUCATION_DIR = path.join(
    process.cwd(),
    'src',
    'data',
    'cv',
    'education'
)
export const CV_PROJECTS_DIR = path.join(
    process.cwd(),
    'src',
    'data',
    'cv',
    'projects'
)

/*
 * Helper types
 */
// Cf. https://pawelgrzybek.com/make-the-typescript-interface-partially-optional-required/
export type PartiallyRequired<T, K extends keyof T> = Omit<T, K> &
    Required<Pick<T, K>>

/*
 * Helper functions
 */
// For shadcn/ui and in general tailwind
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const toMdx = (slug: string): string => `${slug}.mdx`

export const toSlug = (filename: string): string => filename.split('.')[0]
