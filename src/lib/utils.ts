import { type ClassValue, clsx } from 'clsx'
import path from 'path'
import { twMerge } from 'tailwind-merge'

/*
 * Constants
 */
export const POSTS_DIR = path.join('src', 'posts')

/*
 * Helper functions
 */
// For shadcn/ui and in general tailwind
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const toMdx = (slug: string): string => `${slug}.mdx`

export const toSlug = (filename: string): string => filename.split('.')[0]
