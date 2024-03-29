import { getTopTracks } from '@/lib/favsongs'
import { poppins } from '@/lib/fonts/poppins'
import { cn } from '@/lib/utils'
import React from 'react'
import { RecentPlay } from './_components/MusicCard'
import { SingleTrack } from './_components/SingleTracks'


export default async function Page() {

    const tracks = await getTopTracks()

    return (
        <div className='flex flex-col gap-4'>
            <h1 className={cn('font-semibold text-xl', poppins.className)} >Music</h1>
            <div className='text-sm text-muted-foreground'>
                Music has always been something near to my heart. Whether it&apos;s a happy day or a sad one, there is a memory linked with it, and a song that accompanies the moment.
            </div>

            <div>
                <RecentPlay />
            </div>
            <div className='mt-10'>
                <h1 className={cn('font-semibold text-xl', poppins.className)} >Fav Songs</h1>
            </div>
            <div className='text-sm'>
                I listen to a lot of Spotify, Over the last 12 months, Below you can find an up-to-date collection of my favourite songs from the past ~4 weeks.
            </div>

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
