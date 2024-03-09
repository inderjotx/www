import { cn } from '@/lib/utils'
import { Eye } from 'lucide-react'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { incrementView } from '@/lib/redis'
import { Button } from '@/components/ui/button'
import { revalidatePath } from 'next/cache'

interface ArticleTitleProps {
    title: string,
    views: number | undefined,
    writtenOn: string,
    slug: string,
    redis_key: string
}


export default function ArticleTitle({ title, redis_key, views, slug, writtenOn }: ArticleTitleProps) {
    return (
        <form action={async () => {
            "use server"
            console.log(redis_key)
            incrementView(redis_key)
            revalidatePath('/writing')
            redirect(slug)
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
