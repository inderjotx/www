'use client'
import { ChevronDown } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { MoreData } from './moreData'
import { cn } from '@/lib/utils'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { usePathname } from 'next/navigation'
import { useClient } from '@/hooks/useClient'


export function MoreLarge() {

    const [open, setOper] = useState(true)
    const pathname = usePathname()
    const [isClient] = useClient()

    useEffect(() => {
        setOper(() => false)
    }, [pathname])

    if (!isClient) {
        return (
            <div>
                more
            </div>
        )
    }




    return (
        <>
            <DropdownMenu open={open} onOpenChange={(val) => setOper(val)}    >
                <DropdownMenuTrigger onMouseLeave={() => setOper(false)} onMouseOver={() => setOper(true)} >
                    <div
                        className='flex cursor-pointer items-center gap-1 group relative ' > more
                        <ChevronDown className={cn('size-4 ')} />
                    </div>

                </DropdownMenuTrigger>
                <DropdownMenuContent
                    onMouseLeave={() => setOper(false)} onMouseOver={() => setOper(true)}
                    className='w-[300px]' side='bottom' align='start'  >
                    <MoreData />
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
