'use client'
import { RecentPlayProps } from '@/app/music/_components/MusicCard'
import { fetcher } from '@/lib/utils'
import useSWR from 'swr'
import { MusicCard } from './MusicCard'
import { useEffect } from 'react'
import { useClient } from '@/hooks/useClient'

interface Response {
    response: RecentPlayProps,
    success: boolean
}


export function Spotify() {

    const { data, isLoading, error, mutate } = useSWR<Response, any>('/api/music/current', fetcher, { refreshInterval: 1000 })
    const { data: recent, isLoading: recentLoading, error: recentError, mutate: recentMutate } = useSWR<Response, any>('/api/music/recent', fetcher, { refreshInterval: 1000 })
    const [isClient] = useClient()


    if (!isClient) {
        return <div>loading ....</div>
    }


    if (!isLoading && !error && data?.success) {
        return <MusicCard data={data.response} />
    }
    else if (!recentLoading && !recentError && recent?.success) {
        return <MusicCard data={recent.response} />
    }
    else {
        return <div>Fallback</div>
    }

}
