'use client'

import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './EmblaCarouselArrowButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

type PropType = {
    slides: string[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const resetOrStop =
            // @ts-ignore
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        // @ts-ignore
        resetOrStop()
    }, [])

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi, onNavButtonClick)

    return (
        <section className="embla w-full h-full relative  ">
            <div className="overflow-hidden h-full " ref={emblaRef}>
                <div className="embla__container   h-full">
                    {slides.map((url, index) => (
                        <div className="embla__slide flex  overflow-hidden rounded-lg  relative  " key={index}>
                            <Image key={url} src={url} fill className='object-cover h-full w-full absolute ' quality={100} sizes='100' alt={url} />
                        </div>
                    ))}
                </div>
                <div className='absolute right-5 bottom-3'>
                    <div className='flex gap-2' >
                        <Button className=' bg-black rounded-full  p-2  m-0' variant={"ghost"} onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
                            <ArrowLeft fill='' className='size-6' />
                        </Button>
                        <Button className=' bg-black p-2 rounded-full m-0' variant={"ghost"} onClick={onNextButtonClick} disabled={nextBtnDisabled} >
                            <ArrowRight className='size-6' />
                        </Button>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default EmblaCarousel

// <div className='absolute h-full w-full ' key={url}>
// </div>