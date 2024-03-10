'use client'
import useSWR from 'swr'
import React, { useEffect } from 'react'
import { fetcher } from '@/lib/utils'
import { DiscordIcon } from './discordIcon'

export function Discord() {


    const { data, error, isLoading, mutate } = useSWR<{ status: string }, any>('/api/discord', fetcher, { revalidateIfStale: true })



    useEffect(() => {

        const interval = setInterval(() => {
            mutate()
        }, 60 * 1000)

        return () => {
            clearInterval(interval)
        }
    }, [mutate])



    return (
        <a href='https://discordapp.com/users/1061624989473845308' target='_blank' rel='noreferred'  >
            <div className='w-full h-full  flex items-center justify-center bg-muted-foreground/20 '>
                <div className='flex -rotate-45  gap-2 items-center justify-center'>
                    <div className='flex size-8 items-center justify-center'>
                        <DiscordIcon />
                    </div>
                    <p className='text-sm text-muted-foreground'>
                        {
                            (typeof data == 'object' && data.hasOwnProperty('status') && data.status != "" ? data.status : "Offline")
                        }
                    </p>
                </div>
            </div>
        </a>
    )
}
