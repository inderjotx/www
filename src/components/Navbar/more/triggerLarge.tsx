'use client'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { MoreData } from './moreData'
import { cn } from '@/lib/utils'

export function MoreLarge() {

    const [isHovering, setHovering] = useState(false)




    return (
        <div onMouseEnter={() => setHovering(true)}
            className='flex items-center gap-1 group relative ' > more
            <ChevronDown className={cn('size-4  ', isHovering && "animate-more_navbar")} />
            <div
                className={cn('w-[300px] bg-black  h-54 p-1 border absolute -bottom-[220px] rounded-md ', isHovering ? "flex" : "hidden")}>
                <MoreData setHovering={setHovering} />
            </div>
        </div>
    )
}
