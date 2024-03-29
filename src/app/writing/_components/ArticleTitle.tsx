'use client'
import { cn, fetcher } from '@/lib/utils'
import { Eye } from 'lucide-react'
import { redirect } from 'next/navigation'
import React, { use, useEffect, useState } from 'react'
import { incrementView } from '@/lib/redis'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useSWR from 'swr'

interface ArticleTitleProps {
    title: string,
    writtenOn: string,
    slug: string,
    redis_key: string
}


// updating views on middleware 
export default function ArticleTitle({ title, redis_key, slug, writtenOn }: ArticleTitleProps) {


    const { data, error, isLoading } = useSWR<{ success: boolean, views: number }>(`/api/blog?title=${redis_key}`, fetcher)


    return (
        <div className={cn('flex   flex-col   transition-all    w-full px-4 py-3 gap-1   ')} >
            <div className='flex justify-between '>
                <h1> {title}</h1>
                <h2 className='text-muted-foreground text-sm flex items-center gap-1' > <Eye className='size-4' /> {data?.views || 0}</h2>
            </div>
            <div>
                <p className='text-[11px] text-muted-foreground text-left' >{writtenOn}</p>
            </div>
        </div>
    )
}