import { getTopTracks, getCurrentTrack, getRecentTrack } from '@/lib/favsongs'
import { poppins } from '@/lib/fonts/poppins'
import { cn } from '@/lib/utils'
import React from 'react'
import { RecentPlay, RecentPlayProps } from './_components/RecentFramer'
import { SingleTrack } from './_components/SingleTracks'
import { Key } from 'lucide-react'

export default async function Page() {

    const tracks = await getTopTracks()
    let track: (RecentPlayProps | undefined);
    track = await getCurrentTrack()

    if (!track) {
        track = await getRecentTrack()
    }

    return (
        <div className='flex flex-col gap-4'>
            <h1 className={cn('font-semibold text-xl', poppins.className)} >Music</h1>

            <div className='text-sm text-muted-foreground'>
                Music has always been something near to my heart. Whether it&apos;s a happy day or a sad one, there is a memory linked with it, and a song that accompanies the moment.
            </div>

            {/* now playing or recent */}
            <div>
                {
                    track &&
                    <RecentPlay
                        {...track}
                    />
                }
            </div>
            <div className='mt-10'>
                <h1 className={cn('font-semibold text-xl', poppins.className)} >Fav Songs</h1>
            </div>
            <div className='text-sm'>
                I listen to a lot of Spotify, Over the last 12 months, Below you can find an up-to-date collection of my favourite songs from the past ~4 weeks.
            </div>

            {/* { fav songs } */}
            <div className='h-40 gap-2 w-full whitespace-nowrap scrollbar-hide  flex overflow-x-auto  '>


                {
                    tracks.map((track, index) => (
                        <SingleTrack {...track} key={index} />
                    ))
                }
            </div>

        </div>
    )
}
