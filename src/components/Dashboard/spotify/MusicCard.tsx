'use client'

import { RecentPlayProps } from '@/app/music/_components/MusicCard'
import { useClient } from '@/hooks/useClient';
import { parseDate } from '@/lib/utils';
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from "react-responsive";


export function MusicCard({ data }: { data: RecentPlayProps }) {


    const [isClient] = useClient()
    const isMobile = useMediaQuery({ maxWidth: 576 });



    if (!isClient) {
        return (
            <div>
                Fetching data ...
            </div>
        )
    }







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



            <div className='z-10 py-3  self-start md:self-start md:text-sm font-bold flex flex-col font-mono  -rotate-180' style={{ 'textOrientation': 'mixed', 'writingMode': 'vertical-rl' }} >
                <div>
                    {data.listenOn ? parseDate(data.listenOn) : "Playing.."}
                </div>
                <div>
                    {data.title.substring(0, 8) + (data.title.length > 8 ? ".." : "")}
                </div>
            </div>
        </div >
    )
}
