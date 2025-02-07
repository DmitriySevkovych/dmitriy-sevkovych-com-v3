import { CarouselApi } from '@/components/ui/carousel'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type Carousel = {
    api: CarouselApi
    setApi: Dispatch<SetStateAction<CarouselApi>>
    current: number
    count: number
}

export const useCarousel = (): Carousel => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return {
        api,
        setApi,
        current,
        count,
    }
}
