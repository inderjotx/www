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
            <div className='relative  overflow-hidden w-full h-full flex items-center justify-center'>
                <div className='flex absolute top-0 left-0 h-full md:size-20 md:left-0  -rotate-45 '>
                    <DiscordIcon />
                </div>
                <div className='text-xl z-10 -rotate-6 font-bold '>
                    {
                        (typeof data == 'object' && data.hasOwnProperty('status') && data.status != "" ? data.status : "Offline")
                    }
                </div>
                <div className='w-full h-full absolute top-0 backdrop-blur-sm bg-black/20  backdrop-filter '>

                </div>
            </div>
        </a>
    )
}
