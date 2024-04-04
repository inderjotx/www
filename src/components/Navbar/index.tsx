'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { MoreLarge } from './more/triggerLarge'
import { MoreSmall } from './more/triggerSmall'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'


type nav = "home" | "about" | "writing" | "more"


const navLinks = [
    {
        text: "~",
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

    if (pathname.includes('/writing')) {
        pathname = '/writing'
    }


    return (
        <div className='h-20  top-0  w-full flex justify-center' >
            <div className={cn(' flex relative items-center w-full gap-6  ')} >
                {

                    navLinks.map((link) => {

                        return (
                            <Link key={link.text} className={cn(pathname === link.href && "bg-muted", "px-2 relative h-7 flex items-center rounded-full")} href={link.href} >
                                <h1>{link.text} </h1>
                                {
                                    (pathname === link.href) &&
                                    <motion.div
                                        className='absolute left-0 top-0 h-full w-full bg-muted -z-10 rounded-full'
                                        transition={{
                                            type: "spring",
                                            bounce: 0.25,
                                            stiffness: 130,
                                            damping: 9,
                                            duration: 0.3,
                                        }}
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

