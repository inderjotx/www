'use client'
import React from 'react'
import { latestPost } from '@/config'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'


export function Post() {

    const isMobile = useMediaQuery({ maxWidth: 480 })


    return (
        <Link href={latestPost.href} className='relative h-full w-full flex '>

            {
                isMobile ?
                    <div className='absolute -rotate-6 font-mono left-3 h-full  text-sm text-center z-10 bg-white/30 font-medium  backdrop-blur-sm vertical_text '   >Latest Blog </div>
                    :
                    <div className='absolute  -rotate-6 font-mono w-full bottom-2  text-sm text-center z-10 bg-white/30 font-medium  backdrop-blur-sm  '   >Latest Blog </div>

            }

            <div className='z-10 flex flex-col items-center justify-center h-full w-full' >
                <h1 className='text-xl            } font-semibold' >{latestPost.title}</h1>
                <h2 className='text-md font-medium' >{latestPost.writtenOn}</h2>
            </div>
            <Image alt='image' quality={100} className='object-cover absolute h-full w-full' fill sizes='100' src={latestPost.imagePath} />
            <div className='h-full w-full absolute bg-black/60'>
            </div>
        </Link>
    )
}
