import React, { useState } from 'react'
import Image from 'next/image'
import { Book } from '@/interfaces/music/books'
import { BookAudio } from 'lucide-react'
import { parseDate } from '@/lib/utils'

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
            <div className='w-full h-20 active:ring active:ring-purple-400 bg-muted-foreground/10  rounded-md flex'>
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
                    <div className='font-semibold flex gap-1' >
                        <span>
                            {title}
                        </span>
                        <div className='text-[10px] rounded-[4px] self-end p-[3px] bg-muted-foreground/20' >
                            {new Date(publishedDate).getFullYear()}
                        </div>
                    </div>
                    <div className='text-sm text-muted-foreground'>
                        {authors[0].name}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </a>
    )
}

