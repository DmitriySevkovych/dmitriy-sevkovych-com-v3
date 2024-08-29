export type CVEducationItem = {
    order: number
    date_from: Date //TODO maybe string would be enough and easier
    date_until: Date
    title: string
    location: string
    blocks: {
        caption: string
        points: string[]
    }[]
}

export type CVProjectItem = {
    order: number
    date_from: Date //TODO maybe string would be enough and easier
    date_until: Date
    client: string
    title: string
    capacity: string
    location: string
    description: string
    responsibilities: string[]
    techstack: {
        image: string
        caption: string
    }[]
}

export type CVSkillItem = {
    order: number
    caption: string
    // totalExperienceYears: string
    blocks: {
        image: string
        caption: string
    }[]
}

export type CVData = {
    education: CVEducationItem[]
    projects: CVProjectItem[]
    skills: CVSkillItem[]
}
