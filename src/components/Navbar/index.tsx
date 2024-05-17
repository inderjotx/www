'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { MoreLarge } from './more/triggerLarge'
import { MoreSmall } from './more/triggerSmall'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'


type nav = "home" | "about" | "project" | "more"


const navLinks = [
    {
        text: "α",
        href: "/"
    },
    {
        text: "projects",
        href: "/projects"
    },
    {
        text: "about",
        href: "/about"
    },
];




export function Navbar() {

    let pathname = usePathname()

    const [curLink, setLink] = useState("")
    const { setTheme, theme } = useTheme()


    useEffect(() => {
        setLink(pathname)
    }, [pathname])

    useEffect(() => {
        setTheme("dark")
        console.log(theme)
    }, [theme, setTheme])





    return (
        <div className='h-20 mb-2 top-0  w-full flex justify-center' >
            <div className={cn(' flex relative items-center w-full md:gap-6 gap-4  md:text-base text-sm')} >
                {


                    navLinks.map((link) => {

                        return (
                            <Link key={link.text} className={cn("px-3  relative h-9 flex items-center rounded-full")} href={link.href} >
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

