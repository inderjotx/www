import Link from 'next/link'
import React from 'react'
import { ArrowUpRight } from 'lucide-react'

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


export function AnchorArrow({ href, text }: Anchor) {
    return (

        <Link className="underline decoration-2 items-center flex  decoration-gray-600 text-white hover:decoration-gray-400" href={`${href}`} >
            <span>
                {text}
            </span>
            <ArrowUpRight className="w-4 h-4" />
        </Link>
    )
}
