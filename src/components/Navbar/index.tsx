'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { MoreLarge } from './more/triggerLarge'
import { MoreSmall } from './more/triggerSmall'


export function Navbar() {
    return (
        <div className='h-20 sticky bg-bl top-0 w-full flex justify-center bg-black' >
            <div className={cn(' flex items-center w-full gap-6   top-0 bg-transparent')} >
                <Link href={'/'}>
                    <div>~</div>
                </Link>
                <Link href={'/about'} >
                    <div>about</div>
                </Link>
                <Link href={'/writing'} >
                    <div>writing</div>
                </Link>
                <div className='hidden lg:flex' ><MoreLarge /> </div>
                <div className='flex lg:hidden' ><MoreSmall /> </div>

            </div>
        </div>
    )
}
