import Link from 'next/link'
import React from 'react'

type Anchor = {
    href: string,
    text: string,
    newTab?: boolean
}

export function Anchor({ href, text, newTab }: Anchor) {


    const target = newTab ? { target: "_blank" } : {}

    return (
        <Link {...target} href={href} className='underline decoration-2 decoration-gray-600 text-white hover:decoration-gray-400' >
            {text}
        </Link>
    )
}
