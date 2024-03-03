import React from 'react'

export function HLight({ text }: {
    text: string
}) {
    return (
        <span className='p-1 bg-foreground/5'>{text}</span>
    )
}