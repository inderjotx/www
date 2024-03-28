'use client'
import { fetcher } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

export function Analytics() {

    const { data, isLoading, error } = useSWR<Analytics, any>(`/api/analytics?frequency=Hours`, fetcher)
    if (isLoading || error) {
        return (
            <div>data</div>
        )
    }
    else if (data) {

        let city = "Jalandhar"
        let country = "Punjab"
        let cityMaxClicks = 0
        let countryMaxClicks = 0

        data.cityData.forEach((val) => {
            if (cityMaxClicks < val.value) {
                city = val.name
            }
        })

        data.countryData.forEach((val) => {
            if (countryMaxClicks < val.value) {
                country = val.name
            }
        })

        return (
            <Link href={'/analytics'} >
                <div className='relative w-full  h-full flex '>
                    <div className='absolute font-mono  right-3 h-full text-sm text-center bg-black/60  font-medium  backdrop-blur-sm ' style={{ 'textOrientation': 'mixed', 'writingMode': 'vertical-rl' }}  >Since Last Hour </div>
                    <div className='flex pl-3  md:text-[15px] items-start  justify-center flex-col'>
                        <div>  Clicks : {data.totalClicks} </div>
                        <div> City  : {city} </div>
                        <div> Country  : {country} </div>
                    </div>
                    <Image quality={100} src={'/dashboard/analytics.png'} alt='cat girl showing analytics ' fill className='object-cover absolute inset-0 -z-20 ' sizes='100' />
                    <div className='absolute h-full -z-10 w-full bg-black/70' />
                </div>
            </Link>
        )
    }
}
