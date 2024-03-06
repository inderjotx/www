
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { parseDate } from '@/lib/utils'





export interface RecentPlayProps {
    href: string,
    image_url: string,
    listenOn: string | null,
    title: string,
    artist: string,
}


export function RecentPlay({ href, title, artist, image_url, listenOn }: RecentPlayProps) {




    return (
        <Link href={href} >
            <div className='w-full h-20 active:ring active:ring-red-500 bg-muted-foreground/10 relative rounded-sm flex'>
                <div className='w-1/6 h-full rounded-l-sm overflow-hidden relative' >
                    <Image className='object-cover' alt='image' quality={100} src={image_url} fill sizes='100' ></Image>
                </div>
                <div className='w-5/6 p-2  justify-center pl-5 h-full flex flex-col ' >
                    <div className='text-[12px]  font-mono flex items-center  gap-2  text-red-400'>
                        {listenOn ? parseDate(listenOn) : "CURRENTLY PLAYING..."}
                    </div>
                    <div className='font-semibold flex gap-1' >
                        <span>
                            {title}
                        </span>
                    </div>
                    <div className='font-semibold text-sm text-muted-foreground flex gap-1' >
                        <span>
                            {artist}
                        </span>
                    </div>
                </div>
                <div className='absolute top-0 left-0 h-full transition-all w-full hover:bg-black/30'>
                </div>
            </div>
        </Link>
    )
}


