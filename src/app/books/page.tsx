import { poppins } from '@/lib/fonts/poppins'
import { cn } from '@/lib/utils'
import React from 'react'
import { BookCard, LoadingBookCard } from './_components/BookCard'
import { getRecentBook, getShelfBooks } from '@/lib/books'
import { Anchor } from '@/components/Anchor'


export const dynamic = 'force-dynamic'


export default async function Page() {

    const books = await getShelfBooks()
    const recentBook = await getRecentBook()


    return (
        <div className='flex flex-col gap-4 h-full w-full'>
            <h1 className={cn('font-semibold text-xl', poppins.className)} >Books</h1>

            <div className='text-sm text-muted-foreground'>
                I am trying to develop habbit of reading books . This is the latest list of books I am reading or completed reading  .
                Featching this directly from <Anchor text='Literal.club' href='https://literal.club/' newTab />
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
