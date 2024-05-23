import React, { useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { StarRating } from '@/components/Star'



export function AnimePoster({ slug, image_url, href, className, rating }: { slug: string, image_url: string, href: string, className?: string, rating: number }) {



    return (
        <Link href={href} >
            <div className={cn('relative group  flex items-center  overflow-hidden rounded-sm h-40  ', className)}  >
                <Image src={image_url} className='object-cover absolute top-0 h-full w-full' sizes='100' alt='slug' fill />
                <div className=' bg-black/50  flex items-end  transition-colors absolute top-0 z-10 h-full w-full ' >
                    <div className='font-medium flex flex-col gap-2 p-4 ' >
                        <div>{slug}</div>
                        <StarRating rating={rating} />
                    </div>
                </div>
            </div>
        </Link>
    )
}


