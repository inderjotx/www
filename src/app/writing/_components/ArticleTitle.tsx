'use client'
import { cn } from '@/lib/utils'
import { Eye } from 'lucide-react'
import { redirect } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'
import { incrementView } from '@/lib/redis'
import { Button } from '@/components/ui/button'
import { IncrementViewAction } from '@/actions/incrementView'

interface ArticleTitleProps {
    title: string,
    writtenOn: string,
    slug: string,
    redis_key: string
}

// add clietn component to get the clicks 
export default function ArticleTitle({ title, redis_key, slug, writtenOn }: ArticleTitleProps) {


    const [views, setViews] = useState(0)



    useEffect(() => {

        (async () => {

            const response: { success: boolean, views: number } = await fetch(`/api/blog?title=${redis_key}`).then(data => data.json())
            setViews(response.views)
        }
        )()

    }, [redis_key])





    return (
        <form action={async () => {
            await IncrementViewAction(redis_key)

        }} >

            <Button className={'flex p-0 m-0 h-full w-full'}
                variant={"secondary"} type='submit'>
                <div className={cn('flex   flex-col   transition-all    w-full px-4 py-3 gap-1   ')} >
                    <div className='flex justify-between '>
                        <h1> {title}</h1>
                        <h2 className='text-muted-foreground text-sm flex items-center gap-1' > <Eye className='size-4' /> {views}</h2>
                    </div>
                    <div>
                        <p className='text-[11px] text-muted-foreground text-left' >{writtenOn}</p>
                    </div>
                </div>
            </Button>
        </form>
    )
}
