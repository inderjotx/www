'use client'
import { ReadingState } from '@/interfaces/music/books'
import { fetcher } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import useSWR from 'swr'

export function BookCard() {

    const { data, isLoading, error } = useSWR<ReadingState, any>('/api/book/latest', fetcher)


    if (isLoading || error) {
        if (error) {
            console.log(error)
        }
        return <div>Loading ...</div>
    }


    else {
        return (
            <div className='w-full h-full relative p-2'>
                <Image className='object-center object-cover' alt='image' quality={100} src={data?.book.cover || ""} fill sizes='100' ></Image>
            </div>

        )
    }
}
