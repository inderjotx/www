import React from 'react'
import { GithubRef } from './GithubRef'
import { Github } from './github'
import { Anime } from './anime'
import { Discord } from './discord'
import { Tools } from './tools-carousel'
import { Post } from './LatestPost'
import { Spotify } from './spotify'
import { LinkedIn } from './linkedin'
import { X } from './X'
import { Code } from './code'
import { BookCard } from './book'
import { Analytics } from './analytics'

export function Dashboard() {
    return (

        <div className='grid gap-2 md:grid-cols-2 grid-col-1 mb-10'>
            <div className='h-32 border dashboard_box'>
                <GithubRef />
            </div>
            <div className='grid gap-2 grid-cols-3 h-32'>
                <div className='col-span-2 border dashboard_box ' >
                    <Github />
                </div>
                <div className='col-span-1 border dashboard_box  '>
                    <Spotify />
                </div>
            </div>
            <div className='h-32  grid gap-2 grid-cols-4'>
                <div className='border dashboard_box'>
                    <Anime />
                </div>
                <div className=' col-span-3 gap-2 grid grid-rows-2' >
                    <div className='grid gap-2 grid-cols-2' >
                        <div className='border dashboard_box '>
                            <LinkedIn />
                        </div>
                        <div className='border dashboard_box '>
                            <X />
                        </div>
                    </div>
                    <div className='border dashboard_box '>
                        <Code />
                    </div>

                </div>
            </div>
            <div className='grid gap-2 grid-cols-3 h-32  '>
                <div className='col-span-1 border dashboard_box '>
                    <Discord />
                </div>
                <div className='col-span-2 border dashboard_box ' >
                    <Post />
                </div>
            </div>
            <div className='h-32 grid gap-2 grid-cols-3'>
                <div className='col-span-2  border dashboard_box' >
                    <Analytics />
                </div>
                <div className='col-span-1  border dashboard_box '>
                    <BookCard />
                </div>
            </div>
            <div className='h-32 border flex overflow-hidden rounded-md' >
                <Tools />
            </div>
        </div>
    )
}
