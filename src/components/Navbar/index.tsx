'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { MoreLarge } from './more/triggerLarge'
import { MoreSmall } from './more/triggerSmall'

import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"



type nav = "home" | "about" | "writing" | "more"

export function Navbar() {

    const [activeLink, setActiveLink] = useState<nav>("home")




    return (
        <div className='h-20  top-0  w-full flex justify-center' >
            <div className={cn(' flex relative items-center w-full gap-6  ')} >
                <Link className='relative size-6' href={'/'}  >
                    <div >~</div>
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

