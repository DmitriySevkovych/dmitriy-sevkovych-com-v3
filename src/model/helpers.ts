import path from 'path'

export const POSTS_DIR = path.join('src', 'posts')

export const toMdx = (slug: string): string => `${slug}.mdx`

export const toSlug = (filename: string): string => filename.split('.')[0]
