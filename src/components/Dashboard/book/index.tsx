'use client'
import { useClient } from '@/hooks/useClient'
import { ReadingState } from '@/interfaces/music/books'
import { fetcher } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import useSWR from 'swr'

export function BookCard() {


    const { data, isLoading, error } = useSWR<ReadingState, any>('/api/book/latest', fetcher)
    const [isClient] = useClient()

    if (!isClient) {
        return <div>Loading ...</div>
    }

    if (isLoading || error) {
        if (error) {
            console.log(error)
        }
        return <div>Loading ...</div>
    }


    else {
        return (
            <div className='w-full h-full relative p-3'>
                <Image className='object-center object-cover' alt='image' quality={99} src={data?.book.cover || ""} fill sizes='100' ></Image>
            </div>

        )
    }
}
