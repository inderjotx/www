'use client'

import { RecentPlayProps } from '@/app/music/_components/MusicCard'
import { parseDate } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from "react-responsive";


export function MusicCard({ data }: { data: RecentPlayProps }) {

    const isMobile = useMediaQuery({ maxWidth: 576 });


    const mobileMask = {
        maskImage:
            'radial-gradient(circle at 0% 50%, transparent 50%, black 51%)',
    }
    const largeMask = {
        maskImage:
            'radial-gradient(circle at 0% 100%, transparent 35%, black 36%)',
    }

    const styleValue = isMobile ? mobileMask : largeMask

    return (
        <div className='flex relative justify-end  items-end h-full w-full overflow-hidden'>
            <Image
                className='object-cover'
                alt='image'
                quality={100}
                src={data.image_url}
                fill
                sizes='100'
            />

            <div
                className='absolute inset-0 bg-black/50 backdrop-blur-sm'
                style={styleValue}
            />



            <div className='z-10 py-3  self-center md:self-start md:text-sm font-bold flex flex-col font-mono  -rotate-180' style={{ 'textOrientation': 'mixed', 'writingMode': 'vertical-rl' }} >
                <div>
                    {parseDate(data.listenOn || "")}
                </div>
                <div>
                    {data.artist.substring(0, 8) + (data.artist.length > 8 ? ".." : "")}
                </div>
            </div>
        </div >
    )
}
