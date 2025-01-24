import { type ClassValue, clsx } from 'clsx'

/*
 * Local fonts
 */
import { Open_Sans, Roboto_Mono } from 'next/font/google'
import path from 'path'
import { twMerge } from 'tailwind-merge'

export const fontSans = Open_Sans({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    variable: '--font-sans',
})

export const fontMono = Roboto_Mono({
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
    variable: '--font-mono',
})

/*
 * Constants
 */
export const ABOUT_ME_DIR = path.join(process.cwd(), 'src', 'data', 'aboutme')

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
export const CV_SKILLS_DIR = path.join(
    process.cwd(),
    'src',
    'data',
    'cv',
    'skills'
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
