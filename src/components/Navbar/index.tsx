import { poppins } from '@/lib/fonts/poppins'
import { cn } from '@/lib/utils'
import React from 'react'

export function Navbar() {
    return (
        <div className='h-16 sticky bg-bl top-0 w-full flex justify-center bg-black' >
            <div className=" flex items-center h-full w-11/12 md:w-1/2 justify-between   top-0 bg-transparent" >
                <div className={cn('text-xl text-purple-400 font-semibold', poppins.className)} >
                    Inderjot
                </div>
                <div>
                    Hamburger menu
                </div>

            </div>
        </div>
    )
}
