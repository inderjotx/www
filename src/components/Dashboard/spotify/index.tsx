'use client'
import { RecentPlayProps } from '@/app/music/_components/MusicCard'
import { fetcher } from '@/lib/utils'
import useSWR from 'swr'
import { MusicCard } from './MusicCard'
import { useEffect } from 'react'

export function Spotify() {

    // make sure no caching 
    const { data, isLoading, error, mutate } = useSWR<RecentPlayProps, any>('/api/music/current', fetcher)
    const { data: recent, isLoading: recentLoading, error: recentError, mutate: recentMutate } = useSWR<RecentPlayProps, any>('/api/music/recent', fetcher)


    useEffect(() => {

        const interval = setInterval(() => {
            mutate()
            recentMutate()
        }, 60 * 1000)


        return () => {
            clearInterval(interval)
        }
    }, [mutate, recentMutate])




    if (!isLoading && !error && data) {
        console.log('rendering current')
        console.log(data)
        return <MusicCard data={data} />
    }
    else if (!recentLoading && !recentError && recent) {
        console.log('rendering recent')
        console.log(recent)
        return <MusicCard data={recent} />
    }
    else {
        return <div>Fallback</div>
    }

}
