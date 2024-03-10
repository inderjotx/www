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

export function Dashboard() {
    return (

        <div className='grid gap-2 md:grid-cols-2 grid-col-1'>
            <div className='h-32 border'>
                <GithubRef />
            </div>
            <div className='grid gap-2 grid-cols-3 h-32'>
                <div className='col-span-2 border' >
                    <Github />
                </div>
                <div className='col-span-1 border'>
                    <Spotify />
                </div>
            </div>
            <div className='h-32  grid gap-2 grid-cols-4'>
                <div className='border '>
                    <Anime />
                </div>
                <div className=' col-span-3 gap-2 grid grid-rows-2' >
                    <div className='border grid gap-2 grid-cols-2' >
                        <div className='border'>
                            <LinkedIn />
                        </div>
                        <div className='border'>
                            <X />
                        </div>
                    </div>
                    <div className='border'>
                        <Code />
                    </div>

                </div>
            </div>
            <div className='grid gap-2 grid-cols-3 h-32  '>
                <div className='col-span-1 border'>
                    <Discord />
                </div>
                <div className='col-span-2 border' >
                    <Post />
                </div>
            </div>
            <div className='h-32 border flex overflow-hidden'>
                <Tools />
            </div>
            <div className='h-32 border'>books</div>
        </div>
    )
}
