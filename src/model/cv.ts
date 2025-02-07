export type CVEducationItem = {
    order: number
    date_from: Date //TODO maybe string would be enough and easier
    date_until: Date
    title: string
    location: string
    focus: string[]
    minor: string
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
    dontPrint?: boolean
    images?: string[]
}

export type CVSkillItem = {
    order: number
    caption: string
    // totalExperienceYears: string
    subskills: {
        caption: string
        tools: string[]
    }[]
}

export type CVData = {
    education: CVEducationItem[]
    projects: CVProjectItem[]
    skills: CVSkillItem[]
}
