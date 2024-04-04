'use client'
import { fetcher } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import useSWR from 'swr'
import { FallbackAnalytics } from './FallbackAnalytics'

export function Analytics() {

    const { data, isLoading, error } = useSWR<Analytics, any>(`/api/analytics?frequency=Hours`, fetcher, { revalidateOnMount: true })
    const isMobile = useMediaQuery({ maxWidth: 640 })


    if (isLoading || error) {
        return (
            <FallbackAnalytics />
        )
    }
    else if (data) {


        let city = "Jalandhar"
        let country = "Punjab"
        let cityMaxClicks = 0
        let countryMaxClicks = 0

        data.cityData.forEach((val: DataItem) => {
            if (cityMaxClicks < val.value) {
                city = val.name
            }
        })

        data.countryData.forEach((val: DataItem) => {
            if (countryMaxClicks < val.value) {
                country = val.name
            }
        })


        return (
            <Link href={'/analytics'} >
                <div className='relative w-full  h-full flex '>

                    {
                        isMobile ?
                            <div className='absolute  -rotate-6 font-mono right-3 h-full text-sm text-center z-10 bg-black/50 font-medium  backdrop-blur-sm vertical_text '   >Since Last Hour</div>
                            :
                            <div className='absolute  rotate-6 font-mono w-full bottom-2  text-sm text-center z-10 bg-black/50 font-medium  backdrop-blur-sm  '   >Since Last Hour</div>

                    }
                    <div className='flex pl-2 md:-mt-5 mt-0 md:text-[15px] items-start  justify-center flex-col'>
                        <div className="flex  font-sans items-start">
                            <div className="text-[80px] leading-[60px] mr-1 ">C</div>
                            <div className="flex -space-y-1 flex-col">
                                <div>licks : {data.totalClicks}</div>
                                <div>ity : {city}</div>
                                <div>ountry : {country}</div>
                            </div>
                        </div>
                    </div>
                    <Image quality={100} src={'/dashboard/analytics.png'} alt='cat girl showing analytics ' fill className='object-cover absolute inset-0 -z-20 ' sizes='100' />
                    <div className='absolute h-full -z-10 w-full bg-black/70' />
                </div>
            </Link>
        )
    }
}
