import React from 'react'
import { Carousel } from './carousel'
import { Time } from './time'
import { Code } from './code'
import { Github } from './github'
import { Tools } from './tools-carousel'
import { Discord } from './discord'
import { Anime } from './anime'

export function Dashboard() {
    return (

        <div className='grid grid-rows-2 gap-2' >
            <div>
                <div className='w-full h-[280px] gap-2  md:h-[150px] grid grid-cols-1 md:grid-cols-2  ' >
                    <div className='col-span-2 h-[150px] md:col-span-1' >
                        <Carousel />
                    </div>
                    <div className='grid gap-2  h-[120px] md:h-full grid-cols-3 ' >
                        <div className='col-span-2  gap-2 rounded-md overflow-hidden' >
                            <Github />
                        </div>
                        <div className='border  rounded-md overflow-hidden' >
                            <Discord />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='w-full h-[250px] md:h-[150px]  gap-2  grid grid-cols-6' >
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
                    <div className='border h-[100px] md:h-full  col-span-4 md:col-span-2  md:order-2' >Location</div>
                    <div className='rounded-md  overflow-hidden col-span-2 md:col-span-1 md:order-2' >
                        <Anime />
                    </div>
                </div>
            </div>
        </div>
    )
}
