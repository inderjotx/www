'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MoreLarge } from './more/triggerLarge'
import { MoreSmall } from './more/triggerSmall'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'


type nav = "home" | "about" | "writing" | "more"


const navLinks = [
    {
        text: "α",
        href: "/"
    },
    {
        text: "about",
        href: "/about"
    },
    {
        text: "writing",
        href: "/writing"
    },
];




export function Navbar() {

    let pathname = usePathname()

    const [curLink, setLink] = useState("")


    useEffect(() => {
        setLink(pathname)
    }, [pathname])



    if (pathname.includes('/writing')) {
        pathname = '/writing'
    }


    return (
        <div className='h-20  top-0  w-full flex justify-center' >
            <div className={cn(' flex relative items-center w-full gap-6  ')} >
                {

                    navLinks.map((link) => {

                        return (
                            <Link key={link.text} className={cn("px-2 relative h-7 flex items-center rounded-full")} href={link.href} >
                                <h1>{link.text} </h1>
                                {
                                    (pathname === link.href) &&
                                    <motion.div
                                        layout
                                        layoutId='blob'
                                        className='absolute left-0 top-0 h-full w-full bg-muted -z-10 rounded-full'
                                    />
                                }
                            </Link>
                        )
                    })


                }
                <div className='hidden lg:flex' ><MoreLarge /> </div>
                <div className='flex lg:hidden' ><MoreSmall /> </div>
            </div>
        </div>

    )
}

