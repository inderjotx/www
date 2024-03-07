'use client'
import useSWR from 'swr'
import React, { useEffect } from 'react'
import { fetcher } from '@/lib/utils'
import { DiscordIcon } from './discordIcon'

export function Discord() {


    const { data, error, isLoading, mutate } = useSWR('/api/discord', fetcher, { revalidateIfStale: true })

    useEffect(() => {

        const interval = setInterval(() => {
            mutate()
        }, 60 * 1000)

        return () => {
            clearInterval(interval)
        }
    }, [mutate])



    return (
        <div className='w-full h-full  flex items-center justify-center bg-muted-foreground/20 '>

            <div className='flex -rotate-45 size-20 gap-2 items-center justify-center'>
                <DiscordIcon />
                <p className='text-sm '>
                    {data.status}
                </p>
            </div>

        </div>
    )
}
