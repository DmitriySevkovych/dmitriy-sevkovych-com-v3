import { CVProjectItem } from '@/model/cv'
import { ChevronRight } from 'lucide-react'
import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card'

type ProjectProps = CVProjectItem

const Responsibilities: React.FC<Pick<ProjectProps, 'responsibilities'>> = ({
    responsibilities,
}) => {
    if (!responsibilities) return null

    return (
        <div className="mt-4">
            <p className="font-medium">Responsibilities</p>
            <div className="pl-2 pt-1">
                {responsibilities.map((resp, i) => (
                    <p className="flex items-baseline gap-1" key={i}>
                        <ChevronRight strokeWidth={1} size={12} />
                        {resp}
                    </p>
                ))}
            </div>
        </div>
    )
}

const Project: React.FC<ProjectProps> = ({
    title,
    date_from,
    date_until,
    client,
    location,
    description,
    responsibilities,
    techstack,
}) => {
    return (
        <Card>
            <CardHeader>
                <CardDescription>{`${date_from} - ${date_until} // ${location}`}</CardDescription>
                <CardTitle className="text-xl">
                    {title} <br /> {`@ ${client}`}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p>{description}</p>
                <Responsibilities responsibilities={responsibilities} />
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    )
}

export default Project
