import { githubStats } from '@/lib/github'
import Link from 'next/link'
import React from 'react'

export async function Github() {

    const data = await githubStats()

    return (
        <a target='_blank' rel='noopener norefferer' href={"https://github.com/inderjotx"} >
            <div className='relative  flex justify-center items-end py-2 px-2   h-full w-full  bg-neutral-900 '>
                <Background />
                <div className='flex gap-2 text-sm flex-wrap text-muted-foreground'>
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

    const array = Array.from({ length: 41 }, (_, index) => index)

    return (
        <div className='absolute left-0 top-0'>
            <div className='grid grid-cols-9 p-1 ' >
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
        </div>
    )
}




