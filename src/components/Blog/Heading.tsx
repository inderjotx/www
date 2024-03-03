import { poppins } from '@/lib/fonts/poppins'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'
import React from 'react'

export function Heading({ title, className }: {
    title: string,
    className?: String
}) {
    return (
        <div className={cn('text-4xl font-bold text-yellow-300', poppins.className, className)} >{title}</div>
    )
}
