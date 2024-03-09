import React, { useState } from 'react'
import Image from 'next/image'
import { Book } from '@/interfaces/music/books'
import { BookAudio, BookOpenText, BookText } from 'lucide-react'
import { cn, parseDate } from '@/lib/utils'

export function BookCard({
    id,
    slug,
    title,
    publishedDate,
    authors,
    startedReading,
    cover

}: Book & { startedReading?: string }
) {
    return (
        <a target='_blank' href={`https://literal.club/book/${slug}`} >
            <div className={cn('w-full  active:ring active:ring-purple-400 bg-muted-foreground/10  rounded-sm flex', startedReading ? "h-20" : "h-16")}>
                <div className='w-1/6 h-full rounded-l-sm overflow-hidden relative' >
                    <Image className='object-cover' alt='image' quality={100} src={cover} fill sizes='100' ></Image>
                </div>
                <div className='w-5/6 p-2 justify-center pl-5 h-full flex flex-col gap-1' >
                    <div className='text-[12px]  font-sans  flex items-center  gap-2 text-purple-400 '>
                        {
                            startedReading &&
                            <>
                                <BookAudio className='size-4' /> <span >
                                    {parseDate(startedReading)}
                                </span>
                            </>
                        }
                    </div>
                    <div className='font-semibold text-sm flex gap-1' >

                        <span className='truncate'>
                            {title}
                        </span>
                        <div className='text-[10px] rounded-[4px] self-end p-[2px] bg-muted-foreground/20' >
                            {new Date(publishedDate).getFullYear()}
                        </div>
                    </div>
                    <div className='text-[12px] text-muted-foreground'>
                        {authors[0].name}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </a>
    )
}


export function LoadingBookCard(
) {
    return (
        <a target='_blank' href={`/books`} >
            <div className={cn('w-full  active:ring active:ring-purple-400 bg-muted-foreground/10  rounded-sm flex h-20')}>
                <div className='w-1/6 h-full bg-muted-foreground/10 flex items-center justify-center rounded-l-sm overflow-hidden relative' >
                    <BookOpenText className='size-8' />
                </div>
                <div className='w-5/6 p-2 justify-center pl-5 h-full flex flex-col gap-1' >
                    <div className='text-[12px]  font-sans  flex items-center  gap-2 text-purple-400 '>
                        <>
                            <BookAudio className='size-4' /> <span >
                                {'Fetching...'}
                            </span>
                        </>
                    </div>
                    <div className='font-semibold text-sm flex gap-1' >

                        <span className='truncate'>
                            {'Title...'}
                        </span>
                    </div>
                    <div className='text-[12px] text-muted-foreground'>
                        {'Writer'}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </a>
    )
}