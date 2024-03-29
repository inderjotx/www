'use client'
import { useClient } from '@/hooks/useClient'
import { ReadingState } from '@/interfaces/music/books'
import { fetcher } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import { FallbackBook } from './FallbackBook'

export function BookCard() {


    const { data, isLoading, error } = useSWR<ReadingState, any>('/api/book/latest', fetcher)
    const [isClient] = useClient()

    if (!isClient) {
        return (<FallbackBook />)
    }

    if (isLoading || error) {
        if (error) {
            console.log(error)
        }
        return (<FallbackBook />)
    }


    else {
        return (
            <Link href={'/books'} >
                <div className='w-full h-full relative '>
                    <Image className='object-center object-cover' alt='image' quality={99} src={data?.book.cover || ""} fill sizes='100' ></Image>
                    <div className='absolute flex items-center justify-center flex-col  h-1/3 md:h-2/5 bottom-0 w-full bg-black/50'>
                        <h1 className='font-medium text-sm lg:text-[10px] truncate'>{data?.book.title}</h1>
                        <h2 className='text-[8px] truncate'>by {data?.book.authors[0].name}</h2>
                    </div>
                </div>
            </Link>

        )
    }
}
