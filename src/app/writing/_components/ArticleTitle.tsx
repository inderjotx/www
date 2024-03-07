import { Anchor } from '@/components/Anchor'
import { poppins } from '@/lib/fonts/poppins'
import { cn } from '@/lib/utils'
import { Eye } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface ArticleTitleProps {
    title: string,
    views: number,
    writtenOn: string,
    slug: string
}


export default function ArticleTitle({ title, views, slug, writtenOn }: ArticleTitleProps) {
    return (
        <Link href={slug} className={cn('flex  flex-col   transition-all    w-full px-4 py-3 gap-1   bg-muted-foreground/10 rounded hover:bg-muted-foreground/5 hover:scale-[1.01] ')} >
            <div className='flex justify-between '>
                <h1> {title}</h1>
                <h2 className='text-muted-foreground text-sm flex items-center gap-1' > <Eye className='size-4' /> {views}</h2>
            </div>
            <div>
                <p className='text-[11px] text-muted-foreground' >{writtenOn}</p>
            </div>
        </Link>
    )
}
