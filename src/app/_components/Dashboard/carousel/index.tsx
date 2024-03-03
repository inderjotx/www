import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'


const OPTIONS: EmblaOptionsType = { dragFree: false, loop: true }
const SLIDE_COUNT = 5
const Images = [
    '/dashboard/carousel/alone.jpg',
    '/dashboard/carousel/background.jpg',
    '/dashboard/carousel/boy.jpg',
    '/dashboard/carousel/reading.jpg',
    '/dashboard/carousel/wolf.jpg',
]

export function Carousel() {
    return (
        <EmblaCarousel slides={Images} options={OPTIONS} />
    )
}
