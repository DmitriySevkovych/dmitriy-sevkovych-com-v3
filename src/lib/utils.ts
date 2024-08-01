import { type ClassValue, clsx } from 'clsx'
import path from 'path'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs))
}

export const POSTS_DIR = path.join('src', 'posts')

export const toMdx = (slug: string): string => `${slug}.mdx`

export const toSlug = (filename: string): string => filename.split('.')[0]
