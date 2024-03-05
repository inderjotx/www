import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { MoreData } from './moreData'
import { cn } from '@/lib/utils'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function MoreLarge() {


    return (
        <>
            <DropdownMenu    >
                <DropdownMenuTrigger   >
                    <div
                        className='flex cursor-pointer items-center gap-1 group relative ' > more
                        <ChevronDown className={cn('size-4 ')} />
                    </div>

                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-[300px]' side='bottom' align='start'  >
                    <MoreData />
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}
