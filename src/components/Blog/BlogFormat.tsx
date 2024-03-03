import React from 'react'
import { Heading } from './Heading'

export function BlogFormat({
    title,
    children
}: {
    title: string,
    children: React.ReactNode
}) {
    return (
        <div className='h-full flex justify-center w-full ' >
            <div className='flex flex-col gap-2 w-11/12 lg:w-2/3' >
                <Heading title={title} />
                {children}
            </div>
        </div>
    )
}
