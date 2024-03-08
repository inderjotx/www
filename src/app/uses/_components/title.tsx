import React from 'react'

export function Title({ title }: { title: string }) {
    return (
        <h1 className='text-2xl font-bold'>{title}</h1>
    )
}
