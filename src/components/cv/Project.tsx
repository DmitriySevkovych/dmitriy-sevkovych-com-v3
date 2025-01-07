import { CVProjectItem } from '@/model/cv'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '../ui/card'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'

type ProjectProps = CVProjectItem

const TechStack: React.FC<Pick<ProjectProps, 'techstack'>> = ({
    techstack,
}) => {
    if (!techstack) return null

    return (
        <div className="mt-4 w-full">
            <p className="mb-5 font-medium">Tech Stack</p>
            <Carousel
                opts={{
                    // align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {techstack.map((tech, i) => (
                        <CarouselItem key={i} className="basis-1/3">
                            <div className="flex h-full flex-col items-center justify-between gap-1">
                                <div className="m-auto">
                                    {/* NOTE: some Nextjs-Image hack to avoid annoying console warning */}
                                    <Image
                                        width={0}
                                        height={0}
                                        src={`/icons/${tech.image}.svg`}
                                        alt={tech.caption}
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                        }}
                                    />
                                </div>
                                <div className="truncate">{tech.caption}</div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    )
}

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
        <Card className="flex flex-col">
            <CardHeader>
                <CardDescription>{`${date_from} - ${date_until} // ${location}`}</CardDescription>
                <CardTitle className="flex flex-col">
                    <div className="text-xl">{title}</div>
                    <div className="text-lg">{`@ ${client}`}</div>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                <p>{description}</p>
                <Responsibilities responsibilities={responsibilities} />
            </CardContent>
            <CardFooter>
                <TechStack techstack={techstack} />
            </CardFooter>
        </Card>
    )
}

export default Project
