import { poppins } from '@/lib/fonts/poppins'
import { cn } from '@/lib/utils'
import React from 'react'
import { BookCard, LoadingBookCard } from './_components/BookCard'
import { getRecentBook, getShelfBooks } from '@/lib/books'


export const dynamic = 'force-dynamic'


export default async function Page() {

    const books = await getShelfBooks()
    const recentBook = await getRecentBook()


    return (
        <div className='flex flex-col gap-4 h-full w-full'>
            <h1 className={cn('font-semibold text-xl', poppins.className)} >Books</h1>

            <div className='text-sm text-muted-foreground'>
                I have loved watching anime since childhood. My first anime was Death Note, which is one of the most popular ones. It was suggested to me by a friend. Since then, I have watched many anime of different genres, but Isekai, Mecha, and Slice of Life are some of my favorites.
            </div>

            <div className='h-full w-full' >
                {
                    recentBook ?

                        <BookCard  {...recentBook.book} startedReading={recentBook.createdAt} />
                        :
                        <LoadingBookCard />
                }
            </div>

            <p className='text-sm '>
                Some of my all time favourite books
            </p>
            <div className='grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2 '>
                {
                    books.map((book, index) => (
                        <BookCard {...book} key={index} />
                    ))
                }
            </div>

        </div>
    )
}
