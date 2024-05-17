import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils';
import anime from '../../../../public/navbar/more/anime.webp'
import books from '../../../../public/navbar/more/books.webp'
import analytics from '../../../../public/navbar/more/analytics.png'
import music from '../../../../public/navbar/more/music.webp'
import uses from '../../../../public/navbar/more/uses.webp'
import work from '../../../../public/navbar/more/work.webp'


export function MoreData() {

    const data = [
        { image_url: anime, slug: 'anime' },
        { image_url: books, slug: 'books' },
        { image_url: analytics, slug: 'analytics' },
        { image_url: music, slug: 'music' },
        { image_url: uses, slug: 'uses' },
        { image_url: work, slug: 'writing' }
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


function ImageDisplay({ slug, image_url, className }: { slug: string, image_url: StaticImageData, className?: string }) {


    return (
        <Link href={`/${slug}`} className={cn('p-1 h-16 group', className)} >
            <div className='relative flex items-center h-full  overflow-hidden rounded-sm '  >
                <div className='z-20 flex font-semibold items-center gap-1 ml-2 lg:text-sm' >{slug} <ArrowUpRight className='size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all' /> </div>
                <Image src={image_url} placeholder='blur' className='object-cover absolute top-0 h-full w-full' sizes='100' alt='slug' fill />
                <div className='absolute hover:bg-black/70 transition-all bg-black/60 top-0 z-10 h-full w-full ' >
                </div>
            </div>
        </Link>
    )
}

