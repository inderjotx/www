'use client'

import { RecentPlayProps } from '@/app/music/_components/MusicCard'
import Image from 'next/image'
import React from 'react'
import { useMediaQuery } from "react-responsive";


export function MusicCard({ data }: { data: RecentPlayProps }) {

    const isMobile = useMediaQuery({ maxWidth: 576 });

    console.log(isMobile)

    const mobileMask = {
        maskImage:
            'radial-gradient(circle at 0% 50%, transparent 50%, black 51%)',
    }
    const largeMask = {
        maskImage:
            'radial-gradient(circle at 0% 100%, transparent 40%, black 41%)',
    }

    const styleValue = isMobile ? mobileMask : largeMask

    return (
        <div className='relative flex h-full w-full overflow-hidden'>
            <Image
                className='object-cover '
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
        </div>
    )
}
