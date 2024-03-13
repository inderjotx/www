'use client'
import { RecentPlayProps } from '@/app/music/_components/MusicCard'
import { fetcher } from '@/lib/utils'
import useSWR from 'swr'
import { MusicCard } from './MusicCard'
import { useEffect } from 'react'

interface Response {
    response: RecentPlayProps,
    success: boolean
}


export function Spotify() {

    const { data, isLoading, error, mutate } = useSWR<Response, any>('/api/music/current', fetcher, { refreshInterval: 1000 })
    const { data: recent, isLoading: recentLoading, error: recentError, mutate: recentMutate } = useSWR<Response, any>('/api/music/recent', fetcher, { refreshInterval: 1000 })




    if (!isLoading && !error && data?.success) {
        console.log('rendering current')
        console.log(data)
        return <MusicCard data={data.response} />
    }
    else if (!recentLoading && !recentError && recent?.success) {
        console.log('rendering recent')
        console.log(recent)
        return <MusicCard data={recent.response} />
    }
    else {
        return <div>Fallback</div>
    }

}
