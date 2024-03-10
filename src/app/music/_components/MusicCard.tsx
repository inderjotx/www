'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { fetcher, parseDate } from '@/lib/utils'
import { Music } from 'lucide-react'
import useSWR from 'swr'

export interface RecentPlayProps {
    href: string,
    image_url: string,
    listenOn: string | null,
    title: string,
    artist: string,
}


interface Response {
    response: RecentPlayProps,
    success: boolean
}

export function RecentPlay() {


    const { data, isLoading, error, mutate } = useSWR<Response, any>('/api/music/current', fetcher)
    const { data: recent, isLoading: recentLoading, error: recentError, mutate: recentMutate } = useSWR<Response, any>('/api/music/recent', fetcher)


    useEffect(() => {

        const interval = setInterval(async () => {
            mutate()
            recentMutate()
        }, 1 * 60 * 1000)

        return () => {
            clearInterval(interval)
        }
    }, [mutate, recentMutate])



    if (!isLoading && !error && data?.success) {
        console.log('rendering current')
        console.log(data)
        return <TrackCard data={data.response} />
    }
    else if (!recentLoading && !recentError && recent?.success) {
        console.log('rendering recent')
        console.log(recent)
        return <TrackCard data={recent.response} />
    }
    else {
        return <LoadingRecent />
    }
}


function TrackCard({ data }: { data: RecentPlayProps }) {
    return (
        <Link href={data.href} >
            <div className='w-full h-20 active:ring active:ring-red-500 bg-muted-foreground/10 relative rounded-sm flex'>
                <div className='w-1/6 h-full rounded-l-sm overflow-hidden relative' >
                    <Image className='object-cover' alt='image' quality={100} src={data.image_url} fill sizes='100' ></Image>
                </div>
                <div className='w-5/6 p-2  justify-center pl-5 h-full flex flex-col ' >
                    <div className='text-[12px]  font-mono flex items-center  gap-2  text-red-400'>
                        {data.listenOn ? parseDate(data.listenOn) : "CURRENTLY PLAYING..."}
                    </div>
                    <div className='font-semibold flex gap-1' >
                        <span>
                            {data.title}
                        </span>
                    </div>
                    <div className='font-semibold text-sm text-muted-foreground flex gap-1' >
                        <span>
                            {data.artist}
                        </span>
                    </div>
                </div>
                <div className='absolute top-0 left-0 h-full transition-all w-full hover:bg-black/30'>
                </div>
            </div>
        </Link>
    )
}





export function LoadingRecent() {
    return (
        <Link href={'/'} >
            <div className='w-full h-20 active:ring active:ring-red-500 bg-muted-foreground/10 relative rounded-sm flex'>
                <div className='w-1/6 h-full bg-muted-foreground/5 rounded-l-sm  overflow-hidden flex items-center justify-center' >
                    <Music className='size-8' />
                </div>
                <div className='w-5/6 p-2  justify-center pl-5 h-full flex flex-col ' >
                    <div className='text-[12px]  font-mono flex items-center  gap-2  text-red-400'>
                        Fetching ...
                    </div>
                    <div className='font-semibold flex gap-1' >
                        <span>
                            Title
                        </span>
                    </div>
                    <div className='font-semibold text-sm text-muted-foreground flex gap-1' >
                        <span>
                            Artist
                        </span>
                    </div>
                </div>
                <div className='absolute top-0 left-0 h-full transition-all w-full hover:bg-black/30'>
                </div>
            </div>
        </Link>
    )
}