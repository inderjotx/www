
import { RecentPlayProps } from '@/app/music/_components/MusicCard'
import Image from 'next/image'
import React from 'react'

export function MusicCard({ data }: { data: RecentPlayProps }) {
    return (
        <div className='relative flex h-full w-full overflow-hidden'>
            <Image className='object-cover' alt='image' quality={100} src={data.image_url} fill sizes='100' ></Image>
            <div className='absolute -bottom-1/3 md:-bottom-3 h-full md:h-1/2 -left-1/3  aspect-square bg-white z-10 rounded-full'></div>
            <div className='absolute top-0 w-full h-full bg-black/50' />
        </div>
    )
}
