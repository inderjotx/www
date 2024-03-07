import Link from 'next/link'
import React from 'react'

type Anchor = {
    href: string,
    text: string
}

export function Anchor({ href, text }: Anchor) {
    return (
        <Link href={href} className='underline decoration-gray-600 hover:decoration-gray-400' >
            {text}
        </Link>
    )
}
