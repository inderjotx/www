'use client'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'
import { NavbarDrawer } from './navbarDrawer'
import { MoreData } from './moreData'

export function MoreSmall() {

    const [open, onOpenChange] = useState<boolean>(false)

    function setValue(val: boolean) {
        onOpenChange(val)
    }

    return (
        <div className='cursor-pointer' onClick={() => onOpenChange(true)} >
            <div className='flex items-center gap-1 group ' >more
                <ChevronDown className='size-4' />
            </div>
            <NavbarDrawer open={open} onOpenChange={setValue} >
                <MoreData />
            </NavbarDrawer>
        </div>
    )
}