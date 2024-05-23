'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'




function MovingBlob({ className, coordX, coordY }: { className: string, coordX: string[], coordY: string[] }) {

    return (
        <motion.div
            animate={{ translateX: coordX, translateY: coordY }}
            transition={{ duration: 6, repeatDelay: 2, repeat: Infinity, repeatType: 'reverse' }}
            className={cn(className, "-z-10")}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full" fill="none" viewBox="0 0 1699 1666">
                <ellipse cx="849.5" cy="833" fill="url(#paint0_radial_1_19)" fillOpacity="0.22" rx="849.5" ry="833" />
                <defs>
                    <radialGradient id="paint0_radial_1_19" cx="0" cy="0" r="1" gradientTransform="matrix(0 833 -849.5 0 849.5 833)" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D9D9D9" stopOpacity="0.69" />
                        <stop offset="0.177" stopColor="#D9D9D9" stopOpacity="0.563" />
                        <stop offset="1" stopColor="#D9D9D9" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </motion.div>
    )

}



export function Gradient() {

    const blobClasses = [
        {
            className: "absolute  -left-[50%] -top-[50%] w-full min-w-[600px] max-w-[1200px] lg:-left-[30%] lg:-top-[120%]",
            coord: { x: ['0%', '60%', "-30%"], y: ["0%", "60%", "110%"] }
        },
        {
            className: "absolute left-0 top-[10%] w-full min-w-[600px] max-w-[1200px] lg:left-0 lg:top-0",
            coord: { x: ['0%', '50%', "100%"], y: ["0%", "-50%", "-60%"] }
        },
        // {
        //     className: "absolute -bottom-[70%] -right-[40%] w-full min-w-[600px] max-w-[1200px]",
        //     coord: { x: ['0%', '-100%', "-140%"], y: ["0%", "-20%", "-70%"] }
        // },
    ]

    return (
        <div className='relative h-full w-full'>
            {
                blobClasses.map(({ className, coord }, index) => (
                    <MovingBlob key={index} className={className} coordX={coord.x} coordY={coord.y} />
                ))
            }
        </div>

    )
}