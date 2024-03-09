import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Anime() {
    return (
        <Link href={'/anime'} >
            <div className='h-full w-full relative group'>
                <Image src='/navbar/more/anime.webp' className='object-cover' sizes='100' quality={100} fill alt='anime_image' />
                <div className='p-1 text-white bg-black z-20 transition-all absolute top-2 right-2 rounded-full group-hover:scale-105 border border-white'>
                    <ArrowUpRight className='size-4' />
                </div>
                <div className='w-full h-full absolute top-0 z-10 bg-black/40' />
            </div>
        </Link>
    )
}
