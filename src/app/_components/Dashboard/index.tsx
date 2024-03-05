import React from 'react'
import { Carousel } from './carousel'
import { Time } from './time'
import { Code } from './code'
import { Github } from './github'
import { Tools } from './tools-carousel'

export function Dashboard() {
    return (

        <div className='grid grid-rows-2 gap-2' >
            <div>
                <div className='w-full h-[250px] gap-2  md:h-[150px] grid grid-cols-1 md:grid-cols-2  ' >
                    <div className='col-span-2 md:col-span-1' >
                        <Carousel />
                    </div>
                    <div className='grid gap-2 grid-cols-3 ' >
                        <div className='col-span-2  gap-2 rounded-md overflow-hidden' >
                            <Github />
                        </div>
                        <div className='border' >Discord Activity</div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-full h-[200px] md:h-[150px]  gap-2  grid grid-cols-6' >
                    <div className='rounded-md overflow-hidden border col-span-4  md:col-span-2 '>
                        <Tools />
                    </div>
                    <div className='grid col-span-2   md:col-span-1 w-full  md:order-3'>
                        <div className='grid grid-rows-2 gap-2 md:order-2' >
                            <div className=''>
                                <Time />
                            </div>
                            <div className='' >
                                <Code />
                            </div>
                        </div>
                    </div>
                    <div className='border col-span-4 md:col-span-2  md:order-2' >Location</div>
                    <div className='border col-span-2 md:col-span-1 md:order-2' >Anime</div>
                </div>
            </div>
        </div>
    )
}
