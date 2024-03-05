import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils';

export function MoreData() {

    const data = [
        { image_url: '/navbar/more/anime.webp', slug: 'anime' },
        { image_url: '/navbar/more/books.webp', slug: 'books' },
        { image_url: '/navbar/more/faqs.webp', slug: 'faqs' },
        { image_url: '/navbar/more/music.webp', slug: 'music' },
        { image_url: '/navbar/more/uses.webp', slug: 'uses' },
        { image_url: '/navbar/more/work.webp', slug: 'work' }
    ];


    return (
        <div className='grid grid-cols-2 gap-2 lg:gap-1  h-full w-full'>
            {
                data.map(({ image_url, slug }) => {
                    return (
                        <ImageDisplay key={slug} slug={slug} image_url={image_url} />
                    )
                })
            }
        </div>
    )
}


function ImageDisplay({ slug, image_url, className }: { slug: string, image_url: string, className?: string }) {


    return (
        <Link href={`/${slug}`} className={cn('p-1 h-16', className)} >
            <div className='relative flex items-center h-full  overflow-hidden rounded-sm '  >
                <div className='z-20 flex font-semibold items-center gap-1 ml-2 lg:text-sm' >{slug} <ArrowUpRight className='size-4' /> </div>
                <Image src={image_url} className='object-cover absolute top-0 h-full w-full' sizes='100' alt='slug' fill />
                <div className='absolute hover:bg-black/60 transition-colors bg-black/50 top-0 z-10 h-full w-full ' >
                </div>
            </div>
        </Link>
    )
}

