export type BlogPostFrontMatter = {

}

export type BlogPost = {
    slug: string
    frontMatter: BlogPostFrontMatter
    content?: string
}