import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'



export function AnimePoster({ slug, image_url, href, className }: { slug: string, image_url: string, href: string, className?: string }) {



    return (
        <Link href={href} >
            <div className={cn('relative group  flex items-center  overflow-hidden rounded-sm h-40  ', className)}  >
                <div className='z-20 transition-all hidden group-hover:flex font-semibold text-lg items-center gap-1 ml-2 ' >{slug} <ArrowUpRight className='size-4' /> </div>
                <Image src={image_url} className='object-cover absolute top-0 h-full w-full' sizes='100' alt='slug' fill />
                <div className=' group-hover:bg-black/50  transition-colors absolute top-0 z-10 h-full w-full ' >
                </div>
            </div>
        </Link>
    )
}


