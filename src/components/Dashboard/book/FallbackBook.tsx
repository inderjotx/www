import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { poppins } from '@/lib/fonts/poppins'

export function FallbackBook() {
    return (
        <div className='h-full w-full flex relative flex-col items-center justify-center' >
            <h1 className={cn('absolute   top-2  ', poppins.className)} >Fetching...</h1>
            <Image className='absolute object-fill' width={100} height={100} src={'/dashboard/bookcat.gif'} alt='cat-reading-book' />
        </div>
    )
}
