import { useCarousel } from '@/hooks/useCarousel'
import { cn, fontMono } from '@/lib/utils'
import { CVProjectItem } from '@/model/cv'
import { CircleArrowLeft, CircleArrowRight, Fullscreen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEventHandler, useEffect, useState } from 'react'

import { Button } from '../ui/button'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from '../ui/carousel'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '../ui/dialog'
import { Separator } from '../ui/separator'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

type WorkExamplesCarouselButtonProps = {
    variant: 'prev' | 'next'
    onClick: MouseEventHandler<HTMLButtonElement>
}

const WorkExamplesCarouselButton: React.FC<WorkExamplesCarouselButtonProps> = ({
    variant,
    onClick,
}) => {
    let icon
    if (variant === 'prev') {
        icon = (
            <CircleArrowLeft
                className="transition-colors hover:stroke-accent"
                strokeWidth={1.5}
            />
        )
    } else if (variant === 'next') {
        icon = (
            <CircleArrowRight
                className="transition-colors hover:stroke-accent"
                strokeWidth={1.5}
            />
        )
    } else {
        throw Error()
    }

    return (
        <Button
            className="hover:bg-inherit focus:bg-inherit"
            variant="ghost"
            size="icon"
            onClick={onClick}
        >
            {icon}
        </Button>
    )
}

const WorkExamples: React.FC<Pick<CVProjectItem, 'images' | 'client'>> = ({
    images,
    client,
}) => {
    const carousel = useCarousel()
    const { api, setApi, current, count } = carousel

    if (!images) return null

    return (
        <Dialog>
            <Tooltip>
                <TooltipTrigger asChild>
                    <DialogTrigger asChild>
                        <Fullscreen
                            strokeWidth={1.5}
                            className="cursor-pointer transition-colors hover:stroke-accent"
                        />
                    </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Click to see some work samples🚀</p>
                </TooltipContent>
            </Tooltip>

            <DialogContent
                className={cn(
                    fontMono.variable,
                    'w-full font-mono lg:min-w-[1000px] xl:min-w-[1200px]'
                )}
            >
                <DialogHeader className="flex items-center">
                    <DialogTitle className="-mt-3 text-center">
                        {`Project work samples`}
                    </DialogTitle>
                    <DialogDescription>{client}</DialogDescription>
                    <Separator />
                </DialogHeader>

                <Carousel
                    className="p-4 shadow-xl"
                    setApi={setApi}
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        {images.map((image, index) => (
                            <CarouselItem key={index} className="flex">
                                <Link
                                    className="mx-auto"
                                    target="_blank"
                                    href={`/images/projects/${image.src}`}
                                >
                                    <Image
                                        src={`/images/projects/${image.src}`}
                                        alt={image.alt}
                                        width={image.width}
                                        height={image.height}
                                    />
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                <DialogFooter className="-mb-2 flex w-full flex-row items-center !justify-between">
                    <div className="w-1/3 gap-3">
                        <WorkExamplesCarouselButton
                            variant="prev"
                            onClick={
                                api?.scrollPrev as unknown as MouseEventHandler<HTMLButtonElement>
                            }
                        />
                        <WorkExamplesCarouselButton
                            variant="next"
                            onClick={
                                api?.scrollNext as unknown as MouseEventHandler<HTMLButtonElement>
                            }
                        />
                    </div>
                    <p className="text-sm text-muted-foreground">{`${current} / ${count}`}</p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default WorkExamples
