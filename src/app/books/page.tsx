'use client'
import { Book, ReadingState } from '@/interfaces/music/books'
import { poppins } from '@/lib/fonts/poppins'
import { cn, fetcher } from '@/lib/utils'
import React from 'react'
import useSWR from 'swr'
import { BookCard } from './_components/BookCard'





export default function Page() {

    const { data: books, isLoading, error }: { data: Book[], error: any, isLoading: boolean } = useSWR('/api/books/top', fetcher, { refreshInterval: 24 * 3600 * 1000 })
    const { data: recentBook, isLoading: recentLoading, error: recentError }: { data: ReadingState, error: any, isLoading: boolean } = useSWR('/api/books/recent', fetcher, { refreshInterval: 24 * 3600 * 1000 })

    return (
        <div className='flex flex-col gap-4 h-full w-full'>
            <h1 className={cn('font-semibold text-xl', poppins.className)} >Books</h1>

            <div className='text-sm text-muted-foreground'>
                I have loved watching anime since childhood. My first anime was Death Note, which is one of the most popular ones. It was suggested to me by a friend. Since then, I have watched many anime of different genres, but Isekai, Mecha, and Slice of Life are some of my favorites.
            </div>

            {/* { anime favourite } */}
            <div className='h-full w-full' >
                {
                    !recentLoading &&
                    <BookCard  {...recentBook.book} startedReading={recentBook.createdAt} />
                }
            </div>

            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 '>
                {
                    !isLoading &&
                    books.map((book, index) => (
                        <BookCard {...book} key={index} />
                    ))
                }
            </div>

        </div>
    )
}
