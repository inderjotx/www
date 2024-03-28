'use client'

import { RecentPlayProps } from '@/app/music/_components/MusicCard'
import { useClient } from '@/hooks/useClient';
import { parseDate } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'


export function MusicCard({ data }: { data: RecentPlayProps }) {


    const [isClient] = useClient()

    if (!isClient) {
        return (
            <div>
                Fetching data ...
            </div>
        )
    }


    return (
        <Link href={'/music'}>
            <div className='flex relative justify-end   items-end h-full w-full overflow-hidden'>
                <Image
                    className='object-cover'
                    alt='image' quality={100}
                    src={data.image_url}
                    fill
                    sizes='100'
                />

                <div className='z-10 h-full px-2 pt-3 lg:px-1 bg-black/50  backdrop-blur-sm self-start md:self-start md:text-sm font-bold flex flex-col font-mono  -rotate-180' style={{ 'textOrientation': 'mixed', 'writingMode': 'vertical-rl' }} >
                    <div  >
                        {data.listenOn ? parseDate(data.listenOn) : "Playing.."}
                    </div>
                    <div>
                        {data.title.substring(0, 8) + (data.title.length > 8 ? ".." : "")}
                    </div>
                </div>
            </div >
        </Link>
    )
}
