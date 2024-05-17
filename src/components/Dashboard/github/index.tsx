import { githubStats } from '@/lib/github'
import Link from 'next/link'
import React from 'react'

export async function Github() {

    const data = await githubStats()

    return (
        <a target='_blank' rel='noopener norefferer' href={"https://github.com/inderjotx"} >
            <div className='flex bg-zinc-900 h-full w-full flex-col '>
                <div className='h-5/6 md:h-4/6 w-full'>
                    <Background />
                </div>
                <div className='flex  px-2 gap-1  h-2/6 md:h-2/6 text-sm flex-wrap text-muted-foreground'>
                    <div>
                        <span className='' >Repos: </span><span className='text-white' >{data.repos}</span>
                    </div>
                    <div>
                        <span className='' >Following: </span><span className='text-white' >{data.following}</span>
                    </div>
                    <div>
                        <span className='' >Followers: </span><span className='text-white' >{data.followers}</span>
                    </div>
                </div>
            </div>
        </a>
    )
}


function Background() {
    const array = Array.from({ length: 51 }, (_, index) => index)
    return (
        <div className='flex flex-wrap '>
            {
                array.map((val) => {
                    const opacity = Math.random()
                    return (
                        <div key={val} className='bg-green-400 m-[2px] rounded-[2px]  size-3' style={{ opacity: opacity }}  >
                        </div>
                    )
                }
                )
            }
        </div>
    )
}




