'use client'

import { RecentPlayProps } from '@/app/music/_components/MusicCard'
import { useClient } from '@/hooks/useClient';
import { cn, parseDate } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FallbackMusic } from './FallbackMusic';
import { Spotify } from "@/components/Icons/spotify";


export function MusicCard({ data }: { data: RecentPlayProps }) {


    const [isClient] = useClient()

    if (!isClient) {
        return (
            <FallbackMusic />
        )
    }


    return (
        <Link href={'/music'}>
            <div className='flex relative justify-end   items-end h-full w-full overflow-hidden'>


                <Spotify className='z-20 h-6 w-6 absolute  top-4 left-1' />

                <Image
                    style={{ animationDuration: "10s" }}
                    className={cn('h-[100px] w-[100px] aspect-square  top-1/2 right-1/2 rounded-full  absolute z-10  origin-center ', !data.listenOn && "animate-spin")}
                    alt='image' quality={100}
                    src={data.image_url}
                    height={400}
                    width={400}
                />

                <Image
                    className='h-[120px] w-[120px]  top-1/3 right-1/3  absolute z-[5]  origin-center '
                    alt='image' quality={50}
                    src={data.image_url}
                    height={400}
                    width={400}
                />


                <div className='absolute z-[8] inset-0 backdrop-blur-md bg-gradient-to-tr bg-black/10  ' />



                <div className='z-10  h-full px-2 pt-3 lg:px-1  self-start md:self-start text-sm  font-bold flex flex-col font-mono  -rotate-180' style={{ 'textOrientation': 'mixed', 'writingMode': 'vertical-rl' }} >
                    <h1 className='bg-gradient-to-l from-zinc-300 from-10% to-white text-transparent bg-clip-text' >
                        {data.listenOn ? parseDate(data.listenOn) : "Playing..."}
                    </h1>
                    <h1 className='bg-gradient-to-l from-zinc-300 from-10% to-white text-transparent bg-clip-text truncate text-nowrap' >
                        {data.title}
                    </h1>
                </div>
            </div >
        </Link>
    )
}
